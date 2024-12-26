import { json, redirect } from "@remix-run/node";
import { useLoaderData, useParams } from "@remix-run/react";
import { useEffect, useState } from "react";
import axios from "axios";
import useInfiniteScroll from "~/hooks/useInfiniteScrollCustom";
import usePrevious from "~/hooks/usePreviousCustom";

import { CATEGORY_NAME } from "~/components/Layout/CategoryName";
import Content from "~/components/Layout/Content";
import useStore from "~/stores/utilstore";
import { BASEPATH, getApiUrl, getLanguageFromDomain } from "~/constants";

const pageSize = 10;
async function fetchVideos({ pageNumber = 1, catName, language } = {}) {
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
    `${api_url}${BASEPATH}/api/categories/category/?pageNumber=${pageNumber}&catname=${catName}&language=${language}`
  );
  return response.data || { total: "0", results: [] };
}

export const loader = async ({ request, params }) => {
  try {
    const language = getLanguageFromDomain(request.url);

    const catName = params.catName?.toLowerCase();
    const catId = CATEGORY_NAME[catName];
    const response = await fetchVideos({ catId, catName, language });
    if (!response.results) {
      throw new Response("Not Found", { status: 404 });
    }
    return json({ ...response, language });
  } catch (err) {
    console.error("Error:", err);
    return json({ total: "0", results: [] });
  }
};

const CategoryIdComponent = () => {
  const urlupdate = useStore((state) => state.urlupdate);
  const setUrlupdate = useStore((state) => state.setUrlupdate);
  const SetCategoryFilter = useStore((state) => state.setCategoryFilter);
  const loaderData = useLoaderData();
  const { results: defaultVideos, language } = loaderData;
  const [videos, setVideos] = useState(defaultVideos);
  const [loading, setLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [error, setError] = useState();
  const [page, setPage] = useState(2);
  const params = useParams();
  const catName = params.catName?.toLowerCase();
  SetCategoryFilter(catName);
  const catId = CATEGORY_NAME[catName];
  const previousCatId = usePrevious(catId);
  const previousCatName = usePrevious(catName);

  useEffect(() => {
    if (urlupdate !== true) {
      setUrlupdate(true);
    }
  }, [urlupdate]);

  useEffect(() => {
    document.title = "NDTV " + catName?.toUpperCase() + " Videos";
  }, [catName]);

  async function loadMore() {
    setLoading(true);
    try {
      // console.log("calling load more");
      const response = await fetchVideos({
        pageNumber: page,
        catId,
        catName,
        language,
      });
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

  useEffect(() => {
    if (catId !== previousCatId || catName !== previousCatName) {
      setVideos(defaultVideos);
      setLoading(false);
      setHasNextPage(true);
      setError(null);
      setPage(2);
    }
  }, [defaultVideos, catId, previousCatId, catName, previousCatName]);
  console.log("category videos route video is:", videos);
  return (
    <>
      <Content
        videoData={{ results: videos }}
        infiniteRef={infiniteRef}
        rootref={rootRef}
        catId={catId}
        catName={catName}
      />
    </>
  );
};

export default CategoryIdComponent;
