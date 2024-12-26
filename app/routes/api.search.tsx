// ------------------------------------SEARCH Videos API--------------------------------------
import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/server-runtime";
import axios from "axios";
const pageSize =10;

export const loader: LoaderFunction = async ({ request }) => {
  try {
    let search_api_url = "";
    if (typeof process !== "undefined") {
      search_api_url = process.env.REMIX_APP_BEEPS_SEARCH_API_BASE_URL || "";
    }
    let search_api_key = "";
    if (typeof process !== "undefined") {
      search_api_key = process.env.REMIX_APP_BEEPS_SEARCH_API || "";
    }

    const url1 = new URL(request.url);
    const pageNumber = url1.searchParams.get("pageNumber");
    const language = url1.searchParams.get("language");
    const query = url1.searchParams.get("q");
    const BASE_URL = `https://${search_api_url}/video/mjson/client_key/${search_api_key}/`;
    const url = new URL(BASE_URL);
    url.searchParams.append(
      "extra_params",
      "ssl,show,gif,urltitle,source_id,description,keywords,fullimage,verticalimage,category,other_category,tmpcheck,newurl,ssl,sitelink,shorttitle,filepath,folder_path,preview,vertical,alias,aliasInit,author,content_type,network"
    );
    url.searchParams.append("source", "1");
    url.searchParams.append("show_vertical", "1");
    url.searchParams.append("pageSize", pageSize + "");
    url.searchParams.append("pageNumber", pageNumber);
    url.searchParams.append("language", language);
    url.searchParams.append("private_video","1")
    url.searchParams.append("video_format", "allformat");
    url.searchParams.append("tags", query);
    // console.log("your api url is:",url.href)
    const response = await axios.get(url.href);
    return json(response.data);
  } catch (error) {
    return json({ status: error });
  }
};

