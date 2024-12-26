import { isMobile } from "react-device-detect";
import TagManager from "react-gtm-module";
import useStore,{usePageUrlStore} from "~/stores/utilstore";

export const trackChartbeatPage = (path, title) => {
  if (window.pSUPERFLY) {
    window.pSUPERFLY.virtualPage({
      path: path, 
      title: title || document.title, 
      sections: "", 
      authors: "",
    });
  }
};

const updateGADeviceInfo = () => {
  let deviceInfo = "";
  if (isMobile) {
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      deviceInfo = "iPhone";
    } else {
      deviceInfo = "Android";
    }
  } else {
    deviceInfo = "Desktop";
  }
  return deviceInfo;
};
const updateVidType = (videoId) => {
  let tpe = "ON-DEMAND";
  if (typeof videoId !== "undefined") {
    if (String(videoId).substring(0, 4) === "LIVE") {
      tpe = "LIVE";
    }
  }
  return tpe;
};

/*const vidFromSource = (dataBase: any) => {
  let cat_n_vidsource = "";
  if (dataBase.video_from !== "NA") {
    cat_n_vidsource = `-${props.video_from).toLowerCase()}`;
  }
  return cat_n_vidsource;
};*/

export const trackVideoPageView = (props) => {

  const pubDate = props.pubDate;
  // if (props.isGap) === "true") {
  console.log("Requesting GAP tvc_vidtrack_pageview Events");

  // updateLog("Requesting GAP tvc_vidtrack_pageview Events");

  let pb_yr = "NA";
  let pb_mo = "NA";
  let pb_dt = "NA";
  let formattedDate = "NA";
  if (pubDate !== "NA") {
    const dt = new Date(pubDate);
    pb_yr = dt.getFullYear().toString();
    pb_mo =
      dt.getMonth() + 1 < 10
        ? "0" + (dt.getMonth() + 1).toString()
        : (dt.getMonth() + 1).toString();
    pb_dt =
      dt.getDate() < 10
        ? "0" + dt.getDate().toString()
        : dt.getDate().toString();
    formattedDate = `${pb_dt}-${pb_mo}-${pb_yr}`;
  }
  TagManager.dataLayer({
    dataLayer: {
      event: "tvc_vidtrack_pageview",
      pageUrl:usePageUrlStore.getState().currentPageUrl,
      videoId: props.videoID,
      channel: props.channel_id,
      videoForm: props.content_type,
      show: props.show,
      network: props.network,
      // adFormat: props.prmadpoint),
      title: props.title,
      videoType: updateVidType(props.videoID),
      // videoCategory: props.category) + vidFromSource(),
      videoCategory: props.title,
      // alias: props.aliasInit),
      autostart: "",
      device: updateGADeviceInfo(),
      publicationyear: pb_yr,
      publicationmonth: pb_mo,
      publicationday: pb_dt,
      publicationdate: formattedDate,
      author: props.author? props.author : "NA",
    },
  });
  // }
};

export const updateGAPEvent = (
  evtCat: any,
  evtAct: any,
  evtLab: any,
  errStat: any,
  props: any,
) => {
  let pb_yr = "NA";
  let pb_mo = "NA";
  let pb_dt = "NA";
  let formattedDate = "NA";
  // console.log("in updateGAPEvent: ", props);

  if (props.pubDate !== "NA") {
    let dt = new Date(props.pubDate);
    pb_yr = dt.getFullYear().toString();
    pb_mo =
      dt.getMonth() + 1 < 10
        ? "0" + (dt.getMonth() + 1).toString()
        : (dt.getMonth() + 1).toString();
    pb_dt =
      dt.getDate() < 10
        ? "0" + dt.getDate().toString()
        : dt.getDate().toString();
    formattedDate = `${pb_dt}-${pb_mo}-${pb_yr}`;
  }

  TagManager.dataLayer({
    dataLayer: {
      event: "tvc_vidtrack_event",
      eventCategory: evtCat,
      eventAction: evtAct,
      eventLabel: evtLab,
      errorStatus: errStat,
      videoId: props.videoID,
      channel: props.channel_id,
      videoForm: props.content_type,
      show: props.show,
      network: props.network,
      adFormat: "",
      title: props.title,
      videoType: "ON-DEMAND",
      videoCategory: props.category,
      alias: "",
      autostart: "",
      device: updateGADeviceInfo(),
      url: usePageUrlStore.getState().currentPageUrl,
      publicationyear: pb_yr,
      publicationmonth: pb_mo,
      publicationday: pb_dt,
      publicationdate: formattedDate,
      author: props.author? props.author : "NA",
    },
  });
};
