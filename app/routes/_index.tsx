import React, { useEffect, useState } from "react";
import { MetaFunction, json } from "@remix-run/node";
import Content from "~/components/Layout/Content";
import { useLoaderData } from "@remix-run/react";
import axios from "axios";
import useStore from "~/stores/utilstore";
import useInfiniteScroll from "~/hooks/useInfiniteScrollCustom";
import { BASEPATH, getApiUrl, getLanguageFromDomain } from "~/constants";

const pageSize = 10;

async function fetchVideos(pageNumber = 1, language) {
  const api_url = getApiUrl(language);

  // const api_url =
  //   typeof process !== "undefined"
  //     ? (language === 1
  //         ? process.env.REMIX_DOMAIN_ENG
  //         : process.env.REMIX_DOMAIN_HINDI) || ""
  //     : "";
  const basepath =
    typeof process !== "undefined" ? process.env.REMIX_BASEPATH || "" : "";
  const response = await axios.get(
    `${api_url}${BASEPATH}/api/index1?pageNumber=${pageNumber}&language=${language}`
  );
  return response.data || { total: "0", results: [] };
}

export const loader = async ({ request }) => {
  try {
    const language = getLanguageFromDomain(request.url);
    // console.log("language parameter from index route:",request.url,language)

    const response = await fetchVideos(1, language);
    if (!response.results) {
      throw new Response("Not Found", { status: 404 });
    }
    return json({ ...response, language });
  } catch (err) {
    console.error("Error:", err);
    return json({ total: "0", results: [] });
  }
};

export default function Index() {
  const urlupdate = useStore((state) => state.urlupdate);
  const setUrlupdate = useStore((state) => state.setUrlupdate);
  const loaderData = useLoaderData();
  const { results: defaultVideos, language } = loaderData;
  const [videos, setVideos] = useState(defaultVideos);
  const [loading, setLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [error, setError] = useState();
  const [page, setPage] = useState(2);

  useEffect(() => {
    if (urlupdate !== true) {
      setUrlupdate((prev) => !prev);
    }
  }, [urlupdate]);

  async function loadMore() {
    console.log("calling load more from index")
    setLoading(true);
    try {
      const response = await fetchVideos(page, language);
      if (!response.results) {
        throw new Response("Not Found", { status: 404 });
      }
      setVideos((current) => [...current, ...response.results]);
      setPage((page) => page + 1);
      setHasNextPage(response.results.length === pageSize);
    } catch (err) {
      setError(err);
      console.error("Error:", err);
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
  // console.log("videos from index route is:", videos)

  return (
    <>
      <Content
        videoData={{ results: videos }}
        infiniteRef={infiniteRef}
        rootref={rootRef}
      />
    </>
  );
}
