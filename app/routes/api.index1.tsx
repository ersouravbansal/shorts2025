// ------------------------------------Index Route Videos API--------------------------------------
import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/server-runtime";
import axios from "axios";
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
    const url1 = new URL(request.url);
    const pageNumber = url1.searchParams.get("pageNumber");
    const language = url1.searchParams.get("language");
    const BASE_URL = `https://${search_api_url}/video/mjson/client_key/${search_api_key}/`;
    const url = new URL(BASE_URL);
    url.searchParams.append(
      "extra_params",
      "ssl,show,gif,urltitle,description,keywords,source_id,fullimage,verticalimage,category,other_category,tmpcheck,newurl,ssl,sitelink,shorttitle,filepath,folder_path,preview,vertical,alias,aliasInit,author,content_type,network,modified"
    );
    url.searchParams.append("source", "1");
    url.searchParams.append("show_vertical", "1");
    url.searchParams.append("pageSize", pageSize + "");
    url.searchParams.append("pageNumber", pageNumber);
    url.searchParams.append("private_video","1")
    url.searchParams.append("video_format", "allformat");
    // url.searchParams.append("other_category", "1");
    url.searchParams.append("language", language);
    if(language=="2"){
      url.searchParams.append("category", "162");
    }
    const response = await axios.get(url.href);
    return json(response.data);
  } catch (error) {
    return json({ status: error });
  }
};
