import { isMobile } from "react-device-detect";
export const CatDetails = (categId: string, chanId: string) => {
  let device = "";
  if (isMobile) {
    device = "wap_";
  } else {
    device = "desktop_";
  }
  // console.log("device:", device);

  let strAlias = "";
  if (categId == "news") {
    switch (String(chanId)) {
      case "1":
        strAlias = "ndtv_" + `${device}` + "news_24x7_" + "vod" + "_" + "pre";
        break;

      case "2":
        strAlias = "ndtv_" + `${device}` + "news_india_" + "vod" + "_" + "pre";
        break;

      case "3":
        strAlias =
          "ndtv_" + `${device}` + "news_business_" + "vod" + "_" + "pre";
        break;

      default:
        strAlias = "ndtv_" + `${device}` + "news_24x7_" + "vod" + "_" + "pre";
        break;
    }
  } else if (categId == "auto") {
    strAlias = "ndtv_" + `${device}` + "auto_" + "vod" + "_" + "pre";
  } else if (categId == "food") {
    strAlias = "ndtv_" + `${device}` + "food_" + "vod" + "_" + "pre";
  } else if (categId == "sports") {
    strAlias = "ndtv_" + `${device}` + "sports_" + "vod" + "_" + "pre";
  } else if (categId == "entertainment") {
    strAlias = "ndtv_" + `${device}` + "entertainment_" + "vod" + "_" + "pre";
  } else if (categId == "gadgets") {
    strAlias = "ndtv_" + `${device}` + "gadgets_" + "vod" + "_" + "pre";
  } else if (categId == "health") {
    strAlias = "ndtv_" + `${device}` + "health_" + "vod" + "_" + "pre";
  } else if (categId == "swirlster") {
    strAlias = "ndtv_" + `${device}` + "swirlster_" + "vod" + "_" + "pre";
  } else {
    let tempChannel = "news_24x7_";
    if (String(chanId) == "1") {
      tempChannel = "news_24x7_";
    } else if (String(chanId) == "2") {
      tempChannel = "news_india_";
    } else if (String(chanId) == "3") {
      tempChannel = "news_business_";
    }

    strAlias = "ndtv_" + `${device}` + `${tempChannel}` + "vod" + "_" + "pre";
  }
  return strAlias;
};

