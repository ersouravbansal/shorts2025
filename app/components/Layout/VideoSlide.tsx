/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useCallback, useEffect, useRef, useState } from "react";
import VideoPlayer from "~/hooks/useVideoPlayer";
import useStore, { usePageUrlStore } from "~/stores/utilstore";
import { isMobile } from "react-device-detect";
import {
  trackVideoPageView,
  updateGAPEvent,
  trackChartbeatPage,
} from "~/stores/eventTracker";
import parse from "html-react-parser";
import { BASEPATH } from "~/constants";
import { generateVideoSchema } from "~/stores/metaUtils";
import Hls from "hls.js";
const VideoSlide = (props: any) => {
  const [videoState, setVideoState] = useState("");
  const [logText, setLogText] = useState("Login");
  const [getUrl, setGetUrl] = useState("None");
  const [linkText, setLinkText] = useState("Copy Link");
  const [isCopied, setIsCopied] = useState(false);
  const silent = useStore((state) => state.silent);
  const setSilent = useStore((state) => state.setSilent);
  const backLink = useStore((state) => state.backLink);
  const urlupdate = useStore((state) => state.urlupdate);
  const elementsVisible = useStore((state) => state.elementsVisible);
  const setElementsVisible = useStore((state) => state.setElementsVisible);

  const categoryWapToggle = useStore((state) => state.categoryWapToggle);
  const setCategoryWapToggle = useStore((state) => state.setCategoryWapToggle);
  const setChangeSlide = useStore((state) => state.setChangeSlide);
  const setIsVideoOverlayVisible = useStore(
    (state) => state.setIsVideoOverlayVisible
  );
  const loginPanel = useStore((state) => state.loginPanel);
  const setLoginPanel = useStore((state) => state.setLoginPanel);

  const setShowLoginPanel = useStore((state) => state.setShowLoginPanel);
  const videoWapToggle = useStore((state) => state.videoWapToggle);
  const setvideoWapToggle = useStore((state) => state.setVideoWapToggle);
  // const [updateText, setUpdateText] = useState(false);
  const setClicked = useStore((state) => state.setClicked);
  const setCmntInfo = useStore((state) => state.setCmntInfo);
  const tapToPlay = useStore((state) => state.tapToPlay);
  const setTapToPlay = useStore((state) => state.setTapToPlay);
  const videoElement = useRef<HTMLVideoElement>(null);
  const seekBar = useRef(null);
  const progressBar = useRef(null);
  const seekThumb = useRef(null);
  const ppRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const { setCurrentPageUrl } = usePageUrlStore();
  const {
    toggleMute,
    togglePlay,
    handleOnMetaLoaded,
    handleOnTimeUpdate,
    formatTime,
    playVideo,
    pauseVideo,
    muteVideo,
    unMuteVideo,
    playerState,
    handleVideoProgress,
    onSliderMove,
    resetProgressBar,
  } = VideoPlayer(videoElement, seekBar, progressBar, seekThumb, ppRef);

  const getPathSegment = (domain: any) => {
    // return domain.endsWith(".com") ? "/videos" : "/video";
    return "/shorts";
  };

  const cleanUp = (st: any) => {
    return st
      .replace(/[^a-z0-9]+/gi, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "");
  };
  const cleanUrl = (url: any) => {
    return url
      .replace(/<[^>]*>/g, "")
      .replace(/[^\w\s'-]/g, "")
      .replace(/\s+/g, " ");
  };
  const handleShareClick = (title, url) => {
    if (navigator.share !== undefined) {
      navigator
        .share({
          title: title,
          url: url,
        })
        .catch((error) => console.error("Error sharing:", error));
    }
  };
  const handleComments = (e) => {
    e.stopPropagation();
    const parents = e.currentTarget.closest(".swiper-slide-active");
    if (parents) {
      parents.classList.add("js_seek-vis");
    }

    document.body.classList.toggle("VdElCht_on");

    const bepSlLiParents = document
      .querySelector(".VdElMr_wr")
      ?.closest(".BepSl_li");
    if (bepSlLiParents) {
      bepSlLiParents.classList.remove("js_icon-more");
    }
  };
  // const parseHTML = (htmlString: any) => {
  //   console.log("parse html is:",htmlString)
  //   const tagMap = {
  //     i: "italic",
  //     b: "bold",
  //     u: "underline",
  //     strong: "bold",
  //     em: "italic",
  //   };
  //   const regex = /<([^>\s]+)[^>]*>(.*?)<\/\1>/g;
  //   const elements = [];
  //   let lastIndex = 0;
  //   htmlString.replace(
  //     regex,
  //     (match: any, tag: any, content: any, offset: any) => {
  //       elements.push(htmlString.substring(lastIndex, offset));

  //       if (tagMap[tag]) {
  //         elements.push(
  //           <span style={{ fontStyle: tagMap[tag] }}>{content}</span>
  //         );
  //       } else {
  //         elements.push(content);
  //       }
  //       lastIndex = offset + match.length;
  //       return match;
  //     }
  //   );
  //   if (lastIndex < htmlString.length) {
  //     elements.push(htmlString.substring(lastIndex));
  //   }
  //   return elements;
  // };
  const domTitle = (htmlString: string) => {
    const regex = /<[^>]*>/g;
    return htmlString.replace(regex, "");
  };
  // const parseDate = (_date: string) => {
  //   const d = new Date(_date);
  //   return d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear();
  // };
  function parseDate(apiDate: string) {
    const date = new Date(apiDate);

    // Format the date to "Day, DD MMM YYYY"
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return date.toLocaleDateString("en-GB", options);
  }
  const handleClick = (e) => {
    if (
      elementsVisible &&
      document.querySelector(".VdElMr_wr").offsetParent !== null &&
      document.querySelector(".VdElMr_ovrly").offsetParent !== null
    ) {
      document
        .querySelector(".VdElMr_wr")
        .closest(".BepSl_li")
        .classList.remove("js_icon-more");
      setElementsVisible(false);
    } else if (document.querySelector(".VdEl_ovl").offsetParent !== null) {
      document
        .querySelector(".VdEl_ovl")
        .closest(".BepSl_li")
        .classList.remove("js_seek-vis");
    } else {
      document
        .querySelector(".VdElMr_wr")
        .closest(".BepSl_li")
        .classList.add("js_icon-more");
      setElementsVisible(true);
    }
  };
  const moreInfoHandler = (e) => {
    // e.stopPropagation();
    // setIsVideoOverlayVisible(true);
    // const parent = e.target.closest(".BepSl_li");
    // if (!elementsVisible) {
    //   parent.classList.add("js_icon-more");
    //   setElementsVisible(true);
    // } else {
    //   parent.classList.remove("js_icon-more");
    //   setElementsVisible(false);
    // }
  };
  const overlayHandler = (e) => {
    e.stopPropagation();
    const parent = e.target.closest(".BepSl_li");
    parent.classList.remove("js_icon-more");
    setIsVideoOverlayVisible(false);
    setElementsVisible(false);
  };

  const handleCardClick = (event) => {
    if (window.innerWidth <= 767) {
      setClicked(true);
      event.stopPropagation();

      const swiperSlideActive = event.target.closest(".swiper-slide-active");
      if (swiperSlideActive) {
        swiperSlideActive.classList.toggle("js_seek-vis-sec");
        const bepSlLi = swiperSlideActive.querySelector(".BepSl_li");
        if (bepSlLi && bepSlLi.classList.contains("js_seek-vis-sec")) {
          bepSlLi.classList.add("js_swp-vis");
          bepSlLi.classList.remove("js_seek-vis-sec");
        } else {
          swiperSlideActive.classList.remove("js_swp-vis");
        }

        if (bepSlLi && bepSlLi.classList.contains("js_swp-vis")) {
          bepSlLi.classList.toggle("js_seek-vis");
        } else {
          //   swiperSlideActive.classList.remove('js_seek-vis');
        }
      }
    }
  };
  const videoWapHandler = (e) => {
    // Select all elements with class 'VdElMr_wr'
    const elements = document.querySelectorAll(".VdElMr_wr");

    // Loop through each element
    elements.forEach((element) => {
      // Find the closest parent element with class 'BepSl_li'
      const parentElement = element.closest(".BepSl_li");

      // If a parent element is found, remove the class 'js_icon-more'
      if (parentElement) {
        parentElement.classList.remove("js_icon-more");
      }
    });
  };
  const categoryHandler = (e) => {
    document.querySelectorAll(".VdElMr_wr").forEach((element) => {
      let parent = element.closest(".BepSl_li");
      if (parent) {
        parent.classList.remove("js_icon-more");
      }
    });
  };

  const CopyLink = () => {
    const currentURL = window.location.href;

    setIsCopied(true);
    // console.log("currentURL: ", currentURL);
    navigator.clipboard.writeText(currentURL);
    // navigator.clipboard.writeText("ABCSD");
  };
  // const onEmailShare = () => {
  //   const emailSubject = encodeURIComponent(cleanUrl(props.title));
  //   const emailBody = getUrl;

  //   window.location.href = `mailto:?subject=${emailSubject}&body=${emailBody}`;
  // };
  const sendToBeeps = () => {
    // alert(backLink);
    window.location.href = backLink;
  };
  const handleTapToPlay = (e) => {
    // console.log("called handle tap to play");
    setTapToPlay(false);
    playVideo();
  };
  const shareOpen = (url: any, width: any, height: any) => {
    window.open(
      url,
      "",
      "toolbar=0, status=0, width=" + width + ", height=" + height + ""
    );
  };
  const handleNextVideo = (e: any) => {
    props.swiperRef.swiper.slideNext();
  };
  async function fetchLowestQualityManifest(manifestUrl) {
    const response = await fetch(manifestUrl);
    const text = await response.text();
    // console.log("text:", text);
    // Parse the manifest to find the lowest quality variant
    const lines = text.split("\n");
    let minQualityUrl = "";
    let minBandwidth = Infinity;

    lines.forEach((line, i) => {
      if (line.startsWith("#EXT-X-STREAM-INF")) {
        const bandwidth = parseInt(line.match(/BANDWIDTH=(\d+)/)?.[1] || "0");
        if (bandwidth < minBandwidth) {
          minBandwidth = bandwidth;
          minQualityUrl = lines[i + 1];
        }
      }
    });

    if (!minQualityUrl) {
      throw new Error("No quality variant found in the manifest.");
    }

    // Resolve the correct URL structure
    const basePath = manifestUrl.substring(0, manifestUrl.lastIndexOf("/") + 1); // Base path of the manifest
    const fullUrl = new URL(minQualityUrl, basePath).toString();

    console.log("Your updated URL is:", fullUrl);
    return fullUrl;
  }

  // useEffect(() => {
  //   // const timer = setTimeout(() => {
  //   const logButton = document.querySelectorAll(".log_btn-act");
  //   if (logButton.length > 0) {
  //     console.log("logText__");
  //     setShowLoginPanel(true);
  //     setLogText("View Profile");
  //   } else {
  //     console.log("!logText__");
  //     setShowLoginPanel(false);
  //     setLogText("Login");
  //   }
  //   // }, 100);
  //   // return () => clearTimeout(timer);
  // }, [updateText]);
  useEffect(() => {
    console.log("isMobile", isMobile);
  }, []);
  useEffect(() => {
    const originUrl = window.location.origin;
    const dynamicPart = `${cleanUp(props.urltitle).toLowerCase()}-${
      props.videoID
    }`;
    const encodedDynamicPart = encodeURIComponent(dynamicPart);
    // const currentUrl = `${originUrl}${BASEPATH}/${encodedDynamicPart}`;

    // const currentUrl = `${originUrl}${BASEPATH}/videos/${encodedDynamicPart}`;
    const domain = window.location.hostname;
    const pathSegment = getPathSegment(domain);
    // console.log("original url is:",originUrl)
    const currentUrl = `${originUrl}${pathSegment}/${encodedDynamicPart}`;
    setGetUrl(currentUrl);
  }, [props.urltitle, props.videoID]);
  useEffect(() => {
    if (silent) {
      muteVideo();
    } else {
      unMuteVideo();
    }
  }, [silent]);

  const handleSlide = useCallback(() => {
    if (urlupdate) {
      let newUrl: string;
      // if (tapToPlay == true && props.index == 0) {
        if (tapToPlay == true) {
        pauseVideo();
      } else {
        playVideo();
      }
      document.title = domTitle(props.title);
      const urltitle = cleanUp(props.urltitle).toLowerCase();
      const videoID = props.videoID;
      const catName = props?.catName;
      // const schemaDescription = cleanUrl(props.description);
      const schemaDescription = props.description;
      // if (catName) {
      //   // newUrl = `${BASEPATH}/${catName}/${urltitle}-${videoID}`;
      //   newUrl = `${BASEPATH}/videos/${catName}/${urltitle}-${videoID}`;
      //   window.history.pushState({}, "", newUrl);
      // } else {
      // newUrl = `${BASEPATH}/${urltitle}-${videoID}`;

      // newUrl = `${BASEPATH}/videos/${urltitle}-${videoID}`;
      const domain = window.location.hostname;
      const pathSegment = getPathSegment(domain);
      newUrl = `${pathSegment}/${urltitle}-${videoID}`;
      window.history.pushState({}, "", newUrl);
      // }
      const metaDescription = document.querySelector(
        'meta[name="description"]'
      );
      if (metaDescription) {
        metaDescription.content = schemaDescription;
      }
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.content = props.keywords;
      }
      const linkCanonical = document.querySelector('link[rel="canonical"]');
      if (linkCanonical) {
        const canUrl = `${window.location.origin}${newUrl}`;
        linkCanonical.href = canUrl;
      }
      const activeVideoMeta = props.data[props.index];
      //video schema
      const schemaUrl = `${window.location.origin}${newUrl}`;
      const initialSchema = document.querySelector(
        'script[type="application/ld+json"]'
      );
      const jsonLdContent = generateVideoSchema(
        activeVideoMeta,
        schemaUrl,
        schemaDescription
      );
      if (initialSchema) {
        initialSchema.textContent = JSON.stringify(jsonLdContent);
      } else {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.textContent = JSON.stringify(jsonLdContent);
        document.head.appendChild(script);
      }
      const trackingUrl = `${window.location.origin}${newUrl}`;
      setCurrentPageUrl(trackingUrl);
      trackVideoPageView(props);
      updateGAPEvent(
        "PlayerInitBeeps",
        props.videoID,
        props.videoID,
        "NA",
        props
      );
      trackChartbeatPage(newUrl, document.title);
    }
  }, [
    tapToPlay,
    props.videoID,
    urlupdate,
    props.title,
    props.catName,
    props.urltitle,
  ]);
  // hls.js
  useEffect(() => {
    if (Hls.isSupported()) {
      //alert("hello from canplay kk")
      const hls = new Hls();
      hls.loadSource(props.hlssrc);
      if (videoElement.current) {
        hls.attachMedia(videoElement.current);
      }

      hls.on(Hls.Events.MEDIA_ATTACHED, () => {
        console.log("HLS is attached to the video element.");
      });
      hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
        // console.log("Manifest loaded, available quality levels:", data.levels);

        let maxIndexLvl = -1;
        data.levels.forEach((level, index) => {
          console.log(level, index);
          if (level.width == 480) {
            maxIndexLvl = index;
          }
        });
        console.log("maxIndexLvl-> ", maxIndexLvl);
        hls.autoLevelCapping = maxIndexLvl;
      });
      hls.on(Hls.Events.ERROR, (event, data) => {
        console.error("HLS error:", data);
      });

      return () => {
        hls.destroy();
      };
    } else if (
      videoElement.current?.canPlayType("application/vnd.apple.mpegurl")
    ) {
      //alert("hello from canplay kk")
      // For Safari and other native HLS support
      // console.log("props.hlssrc",props.hlssrc)
      // videoElement.current.src = props.hlssrc;
      // videoElement.current.type = "application/x-mpegURL";
      // videoElement.current.loop = false;
      // videoElement.current.load();
      // videoElement.current.autoplay = false;

      fetchLowestQualityManifest(props.hlssrc).then((newUrl) => {
        // console.log("url sourav", newUrl);
        if (!videoElement.current) return;
        videoElement.current.src = newUrl;
        videoElement.current.type = "application/x-mpegURL";
        videoElement.current.loop = false;
        videoElement.current.load();
        videoElement.current.autoplay = false;
      });

      //videoElement.current.autoplay = true;
    }
  }, [props.hlssrc]);

  useEffect(() => {
    if (props.isActive || props.isPathChange) {
      resetProgressBar();
      props.hlssrc.hls?.startLoad();
      // if(videoElement.current){
      //   videoElement.current.autoplay = true;
      // }
      handleSlide();
      console.log(
        "player state-",
        ",videoElement.current?.readyState",
        videoElement.current?.readyState,
        ",videoElement.current?.paused:",
        videoElement.current?.paused
      );
      //console.log(ppRef.current)
      if (videoElement.current?.paused) {
        ppRef.current.classList.add("kk_pause");
        pauseVideo()
      } else {
        ppRef.current.classList.add("kk_ply");
        playVideo()
      }
      // if (videoElement.current) {
      //   const readyState = videoElement.current.readyState;
      //   if (videoElement.current.paused || playerState.isPlaying == false) {
      //     pauseVideo();
      //   } else if (
      //     videoElement.current.paused == false
      //   ) {
      //     playVideo();
      //   }
      // }
    } else {
      pauseVideo();
      props.hlssrc.hls?.stopLoad();
    }
  }, [
    props.isActive,
    props.isPathChange,
    // playVideo,
  ]);
  const swipeVideoText = useStore((state) => state.swipeVideoText);
  const setSwipeVideoText = useStore((state) => state.setSwipeVideoText);
  useEffect(() => {
    if (videoElement.current) {
      videoElement.current.removeAttribute("download");
    }
  }, []);
  useEffect(() => {
    const domain = window.location.hostname;
    if (domain.endsWith(".app")) {
      setSwipeVideoText("swipe up for next");
    } else if (domain.endsWith(".in")) {
      setSwipeVideoText("अगले वीडियो के लिए ऊपरकी ओर स्वाइप करें");
    }
  }, []);
  useEffect(() => {
    if (isCopied) {
      setLinkText("Link Copied");
      console.log("copied!!");
      const copyTime = setTimeout(() => {
        setLinkText("Copy Link");
        setIsCopied(false);
      }, 2000);

      return () => clearTimeout(copyTime);
    }
  }, [isCopied]);

  const videoContainerRef = useRef(null);

  
  // useEffect(() => {
  //   if (props.vidObject) {
  //     props.vidObject.src = "hello world";
  //     props.vidObject.ref = { videoElement };
  //   }
  //   console.log("props.vidObject", props.vidObject, props.vidObject?.ref);
  // }, []);

  // useEffect(() => {
  //   if (props.vidObject && videoContainerRef.current) {
  //     // Append the HTMLVideoElement to the container
  //     videoContainerRef.current?.appendChild(props.vidObject);
  //   }
  // }, [props.vidObject]);

  return (
    <>
      <div
        className="BepSl_crd-wr"
        ref={props.index === props.data.length - 4 ? props.infiniteRef : null}
        onClick={(e) => {
          handleClick(e);
        }}
      >
        <div className="BepSl_crd" onClick={handleCardClick}>
          <div className="VdEl_icn-wr1">
            {/* category */}
            <div className="VdEl_icn-lk dsk-n">
              <div
                className="VdEl_icn VdEl_Ctgr js-MorInf1"
                onClick={(e) => {
                  e.stopPropagation();
                  setCategoryWapToggle(!categoryWapToggle);
                  setIsVideoOverlayVisible(true);
                }}
              >
                <svg className="vj_icn vj_category">
                  <use xlinkHref="#vj_category"></use>
                </svg>
              </div>
            </div>
            {/* chat */}
            <div className="VdEl_icn-lk">
              <div
                className="VdEl_icn js-MorInf"
                onClick={(e) => {
                  setIsVideoOverlayVisible(true);
                  handleComments(e);
                  const originUrl1 = window.location.href;
                  const domain = window.location.hostname;
                  const pathSegment = getPathSegment(domain);
                  const currentUrl1 =
                    originUrl1 +
                    originUrl1 +
                    `${pathSegment}/` +
                    cleanUp(props.urltitle).toLowerCase() +
                    cleanUp(props.urltitle).toLowerCase() +
                    "-" +
                    "-" +
                    props.videoID;
                  // const currentUrl1 =
                  //   originUrl1 +
                  //   `${BASEPATH}/` +
                  //   cleanUp(props.urltitle).toLowerCase() +
                  //   "-" +
                  //   props.videoID;
                  const updatedUrl1 = encodeURIComponent(currentUrl1);

                  setCmntInfo(props.videoID, props.title, updatedUrl1);
                }}
              >
                <svg className="vj_icn vj_chat">
                  <use xlinkHref="#vj_chat" />
                </svg>
              </div>
            </div>
            {/* Share */}
            <div className="VdEl_icn-lk">
              <div className="VdEl_icn">
                {/* Share */}
                <div
                  className="SSR_drp SSR_btn-sm  SSR_drp-nav-tp VdEl_shr-pp crsr_ptr"
                  onClick={(e) => {
                    if (isMobile) {
                      e.stopPropagation();
                      handleShareClick(cleanUrl(props.title), getUrl);
                    }
                  }}
                >
                  <a
                    className="SSR_btn-lnk"
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    // href="javascript:void(0)"
                  >
                    <svg className="SSR_icn vj_icn vj_share2">
                      <use xlinkHref="#vj_share2"></use>
                    </svg>
                    <span className="SSR_btn-tx">Share</span>
                  </a>
                  <div className="SSR_drp-nav SSR_WEB">
                    <ul className="SSR_drp-nav-ul">
                      <li className="SSR_drp-nav-li">
                        <a
                          className="SSR_drp-nav-lnk"
                          onClick={(e) => {
                            e.stopPropagation();
                            shareOpen(
                              `https://www.facebook.com/sharer.php?u=${getUrl}&amp;&text=${cleanUrl(
                                props.title
                              )}`,
                              "900",
                              "500"
                            );
                          }}
                          // href={`https://www.facebook.com/sharer.php?u=${getUrl}&amp;&text=${props.title}`}

                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          data-platform="facebook"
                        >
                          <svg className="vj_icn vj_facebook-fill vj_ss-icn">
                            <use xlinkHref="#vj_facebook-fill"></use>
                          </svg>
                          Facebook
                        </a>
                      </li>
                      <li className="SSR_drp-nav-li">
                        <a
                          className="SSR_drp-nav-lnk"
                          onClick={(e) => {
                            e.stopPropagation();
                            shareOpen(
                              `https://twitter.com/intent/tweet?url=${getUrl}&amp;&text=${cleanUrl(
                                props.title
                              )}`,
                              "650",
                              "420"
                            );
                          }}
                          // href={`https://twitter.com/intent/tweet?url=${getUrl}&amp;&text=${props.title}`}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          data-platform="twitter"
                        >
                          <svg className="vj_icn vj_twitter-fill vj_ss-icn">
                            <use xlinkHref="#vj_twitter-fill"></use>
                          </svg>
                          Twitter
                        </a>
                      </li>
                      <li className="SSR_drp-nav-li">
                        <a
                          className="SSR_drp-nav-lnk"
                          onClick={(e) => {
                            e.stopPropagation();
                            shareOpen(
                              `https://api.whatsapp.com/send?text=${cleanUrl(
                                props.title
                              )} - ${getUrl}?via=whatsapp`,
                              "900",
                              "600"
                            );
                          }}
                          // href={`https://api.whatsapp.com/send?text=${props.title} - ${getUrl}?via=whatsapp`}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          data-platform="whatsapp"
                        >
                          <svg className="vj_icn vj_whatsapp-fill vj_ss-icn">
                            <use xlinkHref="#vj_whatsapp-fill"></use>
                          </svg>
                          Whatsapp
                        </a>
                      </li>
                      <li className="SSR_drp-nav-li">
                        <a
                          className="SSR_drp-nav-lnk"
                          onClick={(e) => {
                            e.stopPropagation();
                            shareOpen(
                              `https://www.reddit.com/r/technology/submit?url=${getUrl}&title=${cleanUrl(
                                props.title
                              )}`,
                              "900",
                              "600"
                            );
                          }}
                          // href={`https://www.reddit.com/r/technology/submit?url=${getUrl}&title=${props.title}`}
                          target="_blank"
                        >
                          <svg className="vj_icn vj_reddit-fill vj_ss-icn">
                            <use xlinkHref="#vj_reddit-fill"></use>
                          </svg>
                          Reddit
                        </a>
                      </li>
                      {/* <li className="SSR_drp-nav-li">
                        <div className="SSR_drp-nav-lnk" onClick={onEmailShare}>
                          <svg className="vj_icn vj_email-fill vj_ss-icn">
                            <use xlinkHref="#vj_email-fill"></use>
                          </svg>
                          Email
                        </div>
                      </li> */}
                      <li className="SSR_drp-nav-li">
                        <div className="SSR_drp-nav-lnk" onClick={CopyLink}>
                          <svg className="vj_icn vj_copy-link vj_ss-icn">
                            <use xlinkHref="#vj_copy-link"></use>
                          </svg>
                          {/* Copy Link */}
                          {linkText}
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* chat Desktop*/}
            {/* <div className="VdEl_icn-lk VdEl_icn-mr1">
              <div className="VdEl_icn ">
                <svg className="vj_icn vj_more">
                  <use xlinkHref="#vj_more" />
                </svg>
              </div>
              <div
                className="VdElMr_wr VdElMr_wr1"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <ul className="VdElMr_ul">
                  <li className="VdElMr_li-lk __log_trigger">
                    <a href="#" className="VdElMr_li">
                      Login
                    </a>
                  </li>
                  <li className="VdElMr_li-lk">
                    <a href="#" className="VdElMr_li">
                      Notification
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
          <div className="BepSl_vdo-cn ">
            <div className="BepSl_vdo-wr" ref={videoContainerRef}>
              <div className="BepSl_swp-cn">
                <div className="BepSl_swp-wr">
                  <div className="BepSl_swp-tx">
                    {/* Swipe up for next video */}
                    {swipeVideoText}
                  </div>
                  <div className="BepSl_swp-ln" />
                </div>
              </div>
              {/* <div> */}
              {/* {props.vidObject && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: props.vidObject.outerHTML,
                  }}
                ></div>
              )} */}

              <video
                className="BepSl_vdo"
                // src={props.vidsrc}
                ref={videoElement}
                onPlay={() => {
                  setVideoState(`play:${playerState.isPlaying}`);
                  // console.log("video state -> play:",playerState.isPlaying);

                  // ppRef.current?.classList.remove("kk_pause");
                  // ppRef.current?.classList.add("kk_ply");
                  // playVideo();
                }}
                onPause={() => {
                  setVideoState(`pause:${playerState.isPlaying}`);
                  // console.log("video state -> pause:",playerState.isPlaying);

                  // ppRef.current?.classList.remove("kk_ply");
                  // ppRef.current?.classList.add("kk_pause");
                  // pauseVideo();
                }}
                onSuspend={() => {
                  setVideoState(`suspend: ${playerState.isPlaying}`);
                  // console.log("video state -> suspend:",playerState.isPlaying);
                }}
                onEmptied={() => {
                  setVideoState(`emptied:${playerState.isPlaying}`);
                  // console.log("video state -> emptied:",playerState.isPlaying);
                }}
                onError={() => {
                  setVideoState(`error:${playerState.isPlaying}`);
                  // console.log("video state -> error:",playerState.isPlaying);
                }}
                onStalled={() => {
                  setVideoState(`stalled:${playerState.isPlaying}`);
                  // console.log("video state -> stalled:",playerState.isPlaying);
                }}
                onWaiting={() => {
                  setVideoState(`waiting:${playerState.isPlaying}`);
                  // console.log("video state -> waiting:",playerState.isPlaying);
                }}
                onTimeUpdate={() => {
                  handleOnTimeUpdate();
                }}
                onLoadedMetadata={handleOnMetaLoaded}
                // muted={silent}
                muted={true}
                preload="auto"
                // preload="metadata"
                // preload="none"
                width="100%"
                height="100%"
                // loop
                onEnded={handleNextVideo}
                playsInline
                controlsList="nodownload"
              />
              {/*====== Seek bar ( Play / Pause, Time, Next Prev, Progress Bar, Related Button ) ======*/}
              <div className="VdEl_cn">
                {/* <div
                  style={{
                    border: "1px solid red",
                    position: "absolute",
                    color: "black",
                    background: "white",
                    width: "100%",
                  }}
                >
                  {videoState} --
                  {test}
                </div> */}
                {/* back and volume */}
                <div className="VdEl_top-wr">
                  <div className="VdEl_top-bck" onClick={sendToBeeps}>
                    <div className="VdEl_icn-lk">
                      <div className="VdEl_icn1">
                        <svg className="vj_icn vj_back2">
                          <use xlinkHref="#vj_back2"></use>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="VdEl_top-vol">
                    <div className="VdEl_icn-lk">
                      <div
                        className="VdEl_icn1 VdEl_icn-vol"
                        onClick={(e) => {
                          e.stopPropagation();
                          console.log(
                            "mute card clicked videoelement",
                            videoElement.current?.parentElement?.querySelector(
                              ".BepSl_vdo"
                            )
                          );

                          toggleMute();
                        }}
                      >
                        {!silent && !playerState.isMuted ? (
                          <div className="VdEl_icn-vol-full">
                            <svg className="vj_icn vj_volume">
                              <use xlinkHref="#vj_volume"></use>
                            </svg>
                          </div>
                        ) : (
                          <div className="VdEl_icn-mute">
                            <svg className="vj_icn vj_mute">
                              <use xlinkHref="#vj_mute"></use>
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="VdEl_mid-wr">
                  {/*== Next Prev, Related Button ==*/}
                  <div className="VdEl_btn-wr">
                    {/* Next */}
                    <div className="VdEl_nx-pr vj-icn vj-vod-prev VdEl_ripl VdEl_ripl-lgt">
                      <svg className="vj_icn vj_re-10">
                        <use xlinkHref="#vj_re-10" />
                      </svg>
                    </div>
                    {/* Play / Pause */}
                    <div
                      className="VdEl_sk_pp-btn"
                      ref={ppRef}
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log("play card clicked");
                        togglePlay();
                      }}
                    >
                      <div className="VdEl_sk_pp VdEl_ripl-lgt VdEl_ripl-pus">
                        <svg className="VdEl_sk_pp-ic2 vj_icn vj_pause">
                          <use xlinkHref="#vj_pause1" />
                        </svg>
                      </div>
                      <div className="VdEl_sk_pp VdEl_ripl-lgt VdEl_ripl-ply">
                        <svg className="VdEl_sk_pp-ic1 vj_icn vj_play">
                          <use xlinkHref="#vj_play1" />
                        </svg>
                      </div>
                    </div>
                    {/*<div
                      className="VdEl_sk_pp-btn"
                      ref={ppRef}
                      onClick={(e) => {
                        e.stopPropagation();
                        // console.log("toggle play exec------->");
                        togglePlay();
                      }}
                    >
                      <div className="VdEl_sk_pp VdEl_ripl-lgt">
                        {tapToPlay == true && props.index == 0 ? (
                          <div
                            onClick={(e) => {
                              e.stopPropagation();
                              handleTapToPlay(e);
                            }}
                          >
                            {" "}
                           
                            <svg className="VdEl_sk_pp-ic1 vj_icn vj_play">
                              <use xlinkHref="#vj_play1" />
                            </svg>
                          </div>
                        ) : !playerState.isPlaying ? (
                          <svg className="VdEl_sk_pp-ic1 vj_icn vj_play">
                            <use xlinkHref="#vj_play1" />
                          </svg>
                        ) : (
                          <svg className="VdEl_sk_pp-ic2 vj_icn vj_pause">
                            <use xlinkHref="#vj_pause1" />
                          </svg>
                        )}
                      </div>
                    </div>*/}
                    {/* Prev */}
                    <div className="VdEl_nx-pr vj-icn vj-vod-next VdEl_ripl VdEl_ripl-lgt">
                      <svg className="vj_icn vj_fw-10">
                        <use xlinkHref="#vj_fw-10" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="VdEl_lod-rw" onClick={overlayHandler}>
                  <div className="VdEl_lod-cl">
                    <div className="VdEl_inf-wr">
                      <div className="VdEl_inf">
                        {/* {`https://www.facebook.com/sharer.php?u=${getUrl}&amp;&text=${props.title}`} */}
                        {/* <h1 className="txt-fmt">{parse(props.title) +" - " + parseDate(props.pubDate)}</h1> */}
                        <h1 className="txt-fmt">
                          {parse(props.title)}
                          {/* <span> - {parseDate(props.pubDate)}</span> */}
                        </h1>
                        {/* {parseHTML(props.title).map((item, index) => (
                          <h1 key={index} className="txt-fmt">
                            {item}
                          </h1>
                        ))} */}
                      </div>
                      {/* <div class="VdEl_inf-mr">more</div> */}
                    </div>
                    <div className="VdEl_icn-wr">
                      {/* category mobile */}
                      <div className="VdEl_icn-lk dsk-n">
                        <div
                          className="VdEl_icn VdEl_Ctgr js-MorInf1"
                          onClick={(e) => {
                            e.stopPropagation();
                            setCategoryWapToggle(!categoryWapToggle);
                            setIsVideoOverlayVisible(true);
                            categoryHandler(e);
                          }}
                        >
                          <svg className="vj_icn vj_category">
                            <use xlinkHref="#vj_category"></use>
                          </svg>
                        </div>
                      </div>
                      {/* chat */}
                      <div className="VdEl_icn-lk">
                        <div
                          className="VdEl_icn js-MorInf"
                          onClick={(e) => {
                            setIsVideoOverlayVisible(true);
                            // console.log("comment button clicked");
                            handleComments(e);
                            const originUrl1 = window.location.href;
                            const domain = window.location.hostname;
                            const pathSegment = getPathSegment(domain);

                            const currentUrl1 =
                              originUrl1 +
                              originUrl1 +
                              `${pathSegment}/` +
                              cleanUp(props.urltitle).toLowerCase() +
                              cleanUp(props.urltitle).toLowerCase() +
                              "-" +
                              "-" +
                              props.videoID;
                            // const currentUrl1 =
                            //   originUrl1 +
                            //   `${BASEPATH}/` +
                            //   cleanUp(props.urltitle).toLowerCase() +
                            //   "-" +
                            //   props.videoID;
                            const updatedUrl1 = encodeURIComponent(currentUrl1);

                            setCmntInfo(
                              props.videoID,
                              props.title,
                              updatedUrl1
                            );
                          }}
                        >
                          <svg className="vj_icn vj_chat">
                            <use xlinkHref="#vj_chat"></use>
                          </svg>
                        </div>
                      </div>
                      {/* Share */}
                      <div className="VdEl_icn-lk">
                        <div className="VdEl_icn">
                          {/* Share */}
                          <div
                            className="SSR_drp SSR_btn-sm  SSR_drp-nav-tp VdEl_shr-pp crsr_ptr"
                            onClick={(e) => {
                              if (isMobile) {
                                e.stopPropagation();
                                handleShareClick(cleanUrl(props.title), getUrl);
                                setIsVideoOverlayVisible(true);
                              }
                            }}
                          >
                            <a
                              className="SSR_btn-lnk"
                              href=""
                              onClick={(e) => {
                                e.preventDefault();
                              }}
                              // href="javascript:void(0)"
                            >
                              <svg className="SSR_icn vj_icn vj_share2">
                                <use xlinkHref="#vj_share2"></use>
                              </svg>
                              <span className="SSR_btn-tx">Share</span>
                            </a>
                            <div className="SSR_drp-nav SSR_WEB">
                              <ul className="SSR_drp-nav-ul">
                                <li className="SSR_drp-nav-li">
                                  <a
                                    className="SSR_drp-nav-lnk"
                                    href={`https://www.facebook.com/sharer.php?u=${getUrl}&amp;&text=${props.title}`}
                                    target="_blank"
                                    rel="noopener noreferrer nofollow"
                                    data-platform="facebook"
                                  >
                                    <svg className="vj_icn vj_facebook-fill vj_ss-icn">
                                      <use xlinkHref="#vj_facebook-fill"></use>
                                    </svg>
                                    Facebook
                                  </a>
                                </li>
                                <li className="SSR_drp-nav-li">
                                  <a
                                    className="SSR_drp-nav-lnk"
                                    href={`https://twitter.com/intent/tweet?url=${getUrl}&amp;&text=${props.title}`}
                                    target="_blank"
                                    rel="noopener noreferrer nofollow"
                                    data-platform="twitter"
                                  >
                                    <svg className="vj_icn vj_twitter-fill vj_ss-icn">
                                      <use xlinkHref="#vj_twitter-fill"></use>
                                    </svg>
                                    Twitter
                                  </a>
                                </li>
                                <li className="SSR_drp-nav-li">
                                  <a
                                    className="SSR_drp-nav-lnk"
                                    href={`https://api.whatsapp.com/send?text=${props.title} - ${getUrl}?via=whatsapp`}
                                    target="_blank"
                                    rel="noopener noreferrer nofollow"
                                    data-platform="whatsapp"
                                  >
                                    <svg className="vj_icn vj_whatsapp-fill vj_ss-icn">
                                      <use xlinkHref="#vj_whatsapp-fill"></use>
                                    </svg>
                                    Whatsapp
                                  </a>
                                </li>
                                <li className="SSR_drp-nav-li">
                                  <a
                                    className="SSR_drp-nav-lnk"
                                    href={`https://www.reddit.com/r/technology/submit?url=${getUrl}&title=${props.title}`}
                                  >
                                    <svg className="vj_icn vj_reddit-fill vj_ss-icn">
                                      <use xlinkHref="#vj_reddit-fill"></use>
                                    </svg>
                                    Reddit
                                  </a>
                                </li>
                                {/* <li className="SSR_drp-nav-li">
                                  <div
                                    className="SSR_drp-nav-lnk"
                                    onClick={onEmailShare}
                                  >
                                    <svg className="vj_icn vj_email-fill vj_ss-icn">
                                      <use xlinkHref="#vj_email-fill"></use>
                                    </svg>
                                    Email
                                  </div>
                                </li> */}
                                <li className="SSR_drp-nav-li">
                                  <div
                                    className="SSR_drp-nav-lnk"
                                    onClick={CopyLink}
                                  >
                                    <svg className="vj_icn vj_copy-link vj_ss-icn">
                                      <use xlinkHref="#vj_copy-link"></use>
                                    </svg>
                                    {/* Copy Link */}
                                    {linkText}
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* chat */}
                      <div className="VdEl_icn-lk">
                        <div
                          className="VdEl_icn VdEl_icn-mr VdEl_lgn-usr __log_trigger log_btn Bep_log-btn1"
                          onClick={(e) => {
                            // setUpdateText(!updateText);
                            // moreInfoHandler(e);
                            console.log("logSet__");
                            setLoginPanel(!loginPanel);

                            if (!parent_c_islogin()) {
                              let __rurl = window.location.href;
                              window.location.href =
                                "https://auth.ndtv.com/w/sso.html?siteurl=" +
                                encodeURIComponent(__rurl);
                              // console.log("Hi Krishna",__rurl,"vahsjv:",encodeURIComponent(__rurl))
                              // alert("Hi from beeps")
                            } else {
                              const toggleClass =
                                element.getAttribute("data-class");
                              document.body.classList.toggle(toggleClass);
                            }
                          }}
                        >
                          <svg className="vj_icn vj_user">
                            <use xlinkHref="#vj_user"></use>
                          </svg>
                        </div>

                        {/* VOD More Overlay and  */}
                      </div>
                    </div>
                  </div>
                  <div className="VdEl_lod-cl">
                    {/*==  Time, Progress Bar  ==*/}
                    <div className="VdEl_lod-cn">
                      {/* Progress Bar */}
                      <div className="VdEl_lod-wrp">
                        <div
                          style={{ padding: "4px 0", cursor: "pointer" }}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleVideoProgress(e);
                            handleOnTimeUpdate();
                          }}
                          {...(isMobile
                            ? {
                                onTouchStart: (e) => {
                                  e.stopPropagation();
                                  setIsDragging(true);
                                  setChangeSlide(false);
                                },
                                onTouchMove: (e) => {
                                  e.stopPropagation();
                                  if (isDragging == true) {
                                    onSliderMove(e);
                                    handleVideoProgress(e);
                                  }
                                  setChangeSlide(false);
                                },
                                onTouchEnd: (e) => {
                                  e.stopPropagation();
                                  setIsDragging(false);
                                  setChangeSlide(true);
                                },
                              }
                            : {
                                onMouseDown: (e) => {
                                  e.stopPropagation();
                                  setIsDragging(true);
                                  setChangeSlide(false);
                                },

                                onMouseMove: (e) => {
                                  e.stopPropagation();
                                  if (isDragging == true) {
                                    onSliderMove(e);
                                    handleVideoProgress(e);
                                  }
                                  setChangeSlide(false);
                                },
                                onMouseUp: (e) => {
                                  e.stopPropagation();
                                  setIsDragging(false);
                                  setChangeSlide(true);
                                },
                              })}
                        >
                          <div className="VdEl_lod crsr_ptr" ref={seekBar}>
                            <div
                              className="VdEl_lod-br"
                              ref={progressBar}
                              onMouseDown={() => {}}
                              onMouseUp={() => {}}
                            >
                              <div className="VdEl_dot" ref={seekThumb}></div>
                            </div>
                          </div>
                        </div>
                        {/* Time */}
                        <div className="VdEl_sk-tm">
                          {formatTime(videoElement.current?.currentTime)} /{" "}
                          {formatTime(videoElement.current?.duration)}
                        </div>
                      </div>
                      {/* ! Play / Pause */}
                      {/* <div class="VdEl_ic-exp-cn">
                                                                                <div class="VdEl_ic-exp-wr">
                                                                                    <svg
                                                                                        class="VdEl_ic-exp VdEl_ic-exp1 vj_icn vj_vod-vr-full">
                                                                                        <use xlink:href="#vj_vod-vr-full">
                                                                                        </use>
                                                                                    </svg>
                                                                                    <svg
                                                                                        class="VdEl_ic-exp VdEl_ic-exp2 vj_icn vj_vod-vr-fsc">
                                                                                        <use xlink:href="#vj_vod-vr-fsc">
                                                                                        </use>
                                                                                    </svg>
                                                                                </div>
                                                                            </div> */}
                    </div>
                  </div>
                </div>

                <div className="VdElMr_ovrly" onClick={overlayHandler} />
                {/* VOD Share Overlay */}
                <div className="VdEl_ovl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoSlide;
