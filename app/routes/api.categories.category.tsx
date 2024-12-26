// ------------------------------------Category Route Videos API--------------------------------------
import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/server-runtime";
import axios from "axios";

import { CATEGORY_NAME } from "~/components/Layout/CategoryName";
const pageSize = 10;
let search_api_url = "";
if (typeof process !== "undefined") {
  search_api_url = process.env.REMIX_APP_BEEPS_SEARCH_API_BASE_URL || "";
}
let search_api_key = "";
if (typeof process !== "undefined") {
  search_api_key = process.env.REMIX_APP_BEEPS_SEARCH_API || "";
}

export const loader: LoaderFunction = async ({ request }) => {
  try {
    // console.log("Loader category is running...")
    const url1 = new URL(request.url);
    // console.log(request.url,"category console categories")
    const pageNumber = url1.searchParams.get("pageNumber");
    const catName = url1.searchParams.get("catname");
    const language = url1.searchParams.get("language");
    const catId = CATEGORY_NAME[catName];
    const BASE_URL = `https://${search_api_url}/video/mjson/client_key/${search_api_key}/`;
    const url = new URL(BASE_URL);
    url.searchParams.append(
      "extra_params",
      "ssl,show,gif,description,keywords,urltitle,source_id,fullimage,private_video,verticalimage,category,other_category,tmpcheck,newurl,ssl,sitelink,shorttitle,filepath,folder_path,preview,vertical,alias,aliasInit,author,content_type,network,modified"
    );
    url.searchParams.append("source", "1");
    url.searchParams.append("show_vertical", "1");
    url.searchParams.append("pageSize", pageSize + "");
    url.searchParams.append("pageNumber", pageNumber);
    url.searchParams.append("language", language);
    url.searchParams.append("private_video","1")
    if (language == "2") {
      url.searchParams.append("category", "162");
      if (catName === "khabar" || catName === "Khabar") {
        url.searchParams.append("category", catId);
      } else {
        url.searchParams.append("other_category", catId);
      }
    } else {
      url.searchParams.append("category", catId);
    }

    // if (language == "2") {
    //   url.searchParams.append("category", "162");
    //   url.searchParams.append("other_category", catId);
    // } else {
    //   url.searchParams.append("category", catId);
    // }

    // if (catName == "khabar") {
    //   url.searchParams.append("language", "2");
    // } else if (catName == "news") {
    //   url.searchParams.append("language", "1");
    // }
    const response = await axios.get(url.href);
    return json(response.data);
  } catch (error) {
    console.log(error, "catch error");
    return json({ status: error?.message || "Dont know", isError: true });
  }
};
