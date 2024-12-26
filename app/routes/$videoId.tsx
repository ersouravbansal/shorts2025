import { MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/server-runtime";
import axios from "axios";
import { useEffect, useState, version } from "react";
import useInfiniteScroll from "~/hooks/useInfiniteScrollCustom";
import {
  rootMeta,
  getBaseMeta,
  defaultMeta,
  getVideoMeta,
  getCanonicalLink,
} from "~/stores/metaUtils";
import Content from "~/components/Layout/Content";
import useStore from "~/stores/utilstore";
import { BASEPATH, getApiUrl, getLanguageFromDomain } from "~/constants";
const isBaseUrl = (language) => {
  let BaseURL = "";
  if (typeof process !== "undefined") {
    // BaseURL = process.env.REMIX_API_URL || "";
    BaseURL = getApiUrl(language);
  } else if (typeof window !== "undefined") {
    BaseURL = window.location.origin || "";
  }
  return BaseURL;
};

const pageSize = 10;
const cleanUp = (st: string | undefined) => {
  if (st) {
    return st
      .replace(/[^a-z0-9]+/gi, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "");
  }
  return "";
};

async function fetchVideos({ pageNumber, video_id, language }: any = {}) {
  try {
    pageNumber = pageNumber || 1;
    const api_url = getApiUrl(language);
    // const api_url = process.env.REMIX_API_URL || "";
    const response = await axios.get(
      `${api_url}${BASEPATH}/api/video/?pageNumber=${pageNumber}&video_id=${video_id}&language=${language}`
    );
    //  console.log("single video krishana:",response.data.results)
    return response.data.results;
  } catch (error) {
    console.error("Error fetching videos:", error);
    throw error;
  }
}

async function fetchMoreVideos(pageNumber, videos, language) {
  try {
  
    const api_url = getApiUrl(language);
 

    const response1 = await axios.get(
      `${api_url}${BASEPATH}/api/index1?pageNumber=${pageNumber}&language=${language}`

    );

    const fetchedVideos = response1.data.results;
    let moreVideos = fetchedVideos;

    // if (videos && Array.isArray(videos) && videos.length > 0) {
    //   moreVideos = fetchedVideos.filter((video: any) => {
    //     return !videos.some((v: any) => v.id === video.id);
    //   });

    // }
    return moreVideos;
  } catch (error) {
    console.error("Error fetching more videos:", error);
    throw error;
  }
}

export const meta: MetaFunction = ({ data, params }) => {
  // console.log("params are:",params)
  // console.log("data are:",data)
  const videoIndex = parseInt(params.video_id) || 0;

  if (
    !data?.results ||
    data.results.length === 0 ||
    isNaN(videoIndex) ||
    videoIndex >= data.results.length
  ) {
    return [...rootMeta, ...defaultMeta];
  }

  const currentVideo = data.results[videoIndex];
  if (currentVideo) {
    const lang = data.language;
    const currentVideoTitle = cleanUp(currentVideo.urltitle).toLowerCase();
    const baseurl = isBaseUrl(lang);
    // const currentVideoUrl = `${baseurl}${BASEPATH}/${currentVideoTitle}-${currentVideo.id}`;
    const currentVideoUrl = `${baseurl}/shorts/${currentVideoTitle}-${currentVideo.id}`;
    const dynamicBaseMeta = getBaseMeta(currentVideo);
    const canonicalMetaLink = currentVideoUrl;

    return [
      ...dynamicBaseMeta,
      ...getVideoMeta(currentVideo, currentVideoUrl),
      ...getCanonicalLink(currentVideoUrl),
    ];
  }
};

export const loader: LoaderFunction = async ({ params, request }) => {
  try {
    const language = getLanguageFromDomain(request.url);
    const video_id = params.videoId?.split("-").pop();
    const videos = await fetchVideos({ video_id: video_id, language });
    let moreVideos = [];

    if (videos) {
      moreVideos = await fetchMoreVideos(1, videos, language);
    }

    const mergedVideos = Array.isArray(videos)
      ? [...videos, ...moreVideos]
      : [videos, ...moreVideos];
      // console.log("mergedvideoslength:",mergedVideos.length)
      if(mergedVideos.length == 11){
        mergedVideos.length=10
      }
    return json({ results: mergedVideos, language });
  } catch (error) {
    console.error("Error loading videos:", error);
    return json({
      total: "0",
      results: [],
    });
  }
};

const ShortVideosComponent = () => {
  const urlupdate = useStore((state) => state.urlupdate);
  const setUrlupdate = useStore((state) => state.setUrlupdate);
  useEffect(() => {
    if (urlupdate !== true) {
      setUrlupdate((prev) => !prev);
    }
  }, [urlupdate]);
  const loaderData = useLoaderData();
  const { results: defaultVideos, language } = loaderData;
  const [videos, setVideos] = useState(
    Array.isArray(defaultVideos) ? defaultVideos : []
  );
  const [loading, setLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const [error, setError] = useState<Error>();
  const [page, setPage] = useState(2);

  async function loadMore() {
    console.log("calling load more from shorts")
    setLoading(true);
    try {
      // console.log(
      //   "calling load more from in:",
      //   "page:",
      //   page,
      //   "language:",
      //   language,
      //   "videos:",
      //   videos
      // );
      const moreVideos = await fetchMoreVideos(page, videos, language);
      // console.log("hasNextPageSourav", moreVideos.length === pageSize);
      setHasNextPage(moreVideos.length === pageSize);
      setPage((prevPage) => prevPage + 1);
      setVideos((prevVideos) => {
        return Array.isArray(prevVideos)
          ? [...prevVideos, ...moreVideos]
          : moreVideos;
      });
    } catch (err) {
      setError(err);
      // console.log("Error:", err);
    } finally {
      setLoading(false);
    }
  }

  const [infiniteRef, { rootRef }] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: loadMore,
    disabled: !!error,
    rootMargin: "0px 400px 0px 400px",
  });
  // console.log("videos from video route is :", videos);
  return (
    <>
      <Content
        videoData={{ results: videos }}
        infiniteRef={infiniteRef}
        rootref={rootRef}
      />
    </>
  );
};

export default ShortVideosComponent;
