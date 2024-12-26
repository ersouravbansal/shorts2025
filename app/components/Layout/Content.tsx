// Content.tsx
import React, { Suspense, lazy, useEffect, useRef, useState } from "react";
import VideoSlide from "~/components/Layout/VideoSlide";
import useStore from "~/stores/utilstore";
import { Virtual, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperNav from "~/components/Layout/SwiperNav";
// import LeftPanel from "~/components/Layout/LeftPanel";
import Footer from "~/components/Layout/Footer";
import { useLocation } from "@remix-run/react";
import ErrorPage from "./ErrorPage";
import AdCardSlide from "./AdCardSlide";
import { isMobile } from "react-device-detect";
const LeftPanelComponent = lazy(() => import("./LeftPanel"));
let timeoutIDs: any = [];
const videoOverlayTimeoutIds = { current: null };
const Content = (props: {
  videoData: any;
  infiniteRef?: any;
  rootref?: any;
  catId?: number;
  catName?: string;
}) => {
  const location = useLocation();
  const prevPath = useRef("");
  const isPathChange = location.pathname !== prevPath.current;
  const [swiperRef, setSwiperRef] = useState(null);
  const swipeRef = useRef(null);
  const isVideoAvailable = (props.videoData?.results?.length || 0) > 0;
  const vidObject = useStore((state) => state.vidObject);
  const setVidObject = useStore((state) => state.setVidObject);
  const clicked = useStore((state) => state.clicked);
  const activeVideoIndex = useStore((state) => state.activeVideoIndex);
  const setChangeSlide = useStore((state) => state.setChangeSlide);
  const changeSlide = useStore((state) => state.changeSlide);
  const setActiveVideoIndex = useStore((state) => state.setActiveVideoIndex);
  const errSpanTxt = useStore((state) => state.errSpanTxt);
  const setErrSpanTxt = useStore((state) => state.setErrSpanTxt);
  const errParagraphMessage = useStore((state) => state.errParagraphMessage);
  const setErrParagraphMessage = useStore(
    (state) => state.setErrParagraphMessage
  );

  const isVideoOverlayVisible = useStore(
    (state) => state.isVideoOverlayVisible
  );
  function handleTimeout(index: any) {
    var activeSlide = document.querySelectorAll(".swiper-slide-active")[0];
    if (videoOverlayTimeoutIds.current) {
      clearTimeout(videoOverlayTimeoutIds.current);
    }
    var allSlides = document.querySelectorAll(".swiper-slide");
    allSlides.forEach((slide) => {
      slide.classList.remove("js_icon-more");
    });
    activeSlide?.classList.add("js_seek-vis-sec");
    activeSlide?.classList.remove("js_swp-vis");
    if (window.innerWidth <= 767) {
      if (!clicked) {
        activeSlide?.classList.add("js_seek-vis-sec");
        if (index === 0) {
          activeSlide?.classList.add("js_swp-vis");
        }
        videoOverlayTimeoutIds.current = setTimeout(function () {
          activeSlide?.classList.remove("js_seek-vis-sec");
          activeSlide?.classList.remove("js_icon-more");
          document.body.classList.remove("VdElCht_on");
        }, 6000);
      }
    }
    if (window.innerWidth >= 767) {
      if (!clicked) {
        activeSlide?.classList.add("js_seek-vis-sec");
        videoOverlayTimeoutIds.current = setTimeout(function () {
          activeSlide?.classList.remove("js_seek-vis-sec");
          activeSlide?.classList.remove("js_icon-more");
        }, 6000);
      }
    }
  }
  const checkErrTxt = (domain: any) => {
    if (domain.endsWith(".app")) {
      // console.log("hello from com");
      setErrParagraphMessage("No Records Found!");
    } else if (domain.endsWith(".in")) {
      // console.log("hello from in");
      setErrParagraphMessage(
        "आपकी सर्च क्वेरी के लिए हमारे पास फिलहाल कोई ख़बर या वीडियो या फोटो उपलब्ध नहीं है..."
      );
    }
  };
  useEffect(() => {
    prevPath.current = location.pathname;
  }, [location.pathname]);

  useEffect(() => {
    if (isPathChange === true) {
      swipeRef.current?.swiper.slideTo(0, 0);
      setActiveVideoIndex(0);
    }
  }, [isPathChange]);
  useEffect(() => {
    if (clicked === true) {
      if (activeVideoIndex && timeoutIDs[activeVideoIndex]) {
        clearTimeout(timeoutIDs[activeVideoIndex]);
      }
    }
  }, [clicked]);
  useEffect(() => {
    if (isVideoOverlayVisible) {
      if (videoOverlayTimeoutIds.current) {
        clearTimeout(videoOverlayTimeoutIds.current);
      }
    } else {
      handleTimeout(activeVideoIndex);
    }
  }, [isVideoOverlayVisible]);
  useEffect(() => {
    const domain = window.location.hostname;
    checkErrTxt(domain);
  }, []);
  return (
    <>
      {/*============== Middle with two column option ==============*/}
      <div className="VdPg-Col_Two-a-wr BepSlCol_1">
        {/*==== column one ====*/}
        <div className="VdPg-Col_Two-a BepSlCol_rw">
          {/*====== video ======*/}
          <div className="BepSl_cn">
            <div className="BepSl_wr" ref={props.rootref}>
              {isVideoAvailable ? (
                <Swiper
                  className="BepSl_rw"
                  modules={[Virtual, Mousewheel]}
                  onSwiper={setSwiperRef}
                  ref={swipeRef}
                  wrapperClass="BepSl_ul"
                  loop={false}
                  centeredSlides={true}
                  initialSlide={0}
                  allowSlideNext={changeSlide ? true : false}
                  allowSlidePrev={changeSlide ? true : false}
                  freeMode={false}
                  slidesPerView={1}
                  navigation={{
                    prevEl: ".BepNv_prv",
                    nextEl: ".BepNv_nxt",
                  }}
                  mousewheel={{
                    enabled: true,
                    forceToAxis: true,
                    thresholdTime: 1500,
                  }}
                  breakpoints={{
                    0: {
                      centeredSlides: true,
                      direction: "vertical",
                      loop: false,
                      slidesPerView: 1,
                    },
                    768: {
                      centeredSlides: true,
                      direction: "horizontal",
                      loop: false,
                      slidesPerView: 1.35,
                    },
                    1024: {
                      centeredSlides: true,
                      direction: "horizontal",
                      loop: false,
                      slidesPerView: 1.6,
                    },
                    1200: {
                      centeredSlides: true,
                      direction: "horizontal",
                      loop: false,
                      slidesPerView: 2,
                    },
                  }}
                  onInit={(params) => {
                    setTimeout(() => {
                      handleTimeout(0);
                    }, 1000);
                  }}
                  onSlideChange={(params) => {
                    setActiveVideoIndex(params.activeIndex);
                    // console.log("slide is changed",params.el?.querySelector('.BepSl_vdo'),activeVideoIndex,params.activeIndex,params.realIndex)
                    if(params.activeIndex == 1){
                      const targetVidObject= params.el?.querySelector('.BepSl_vdo')
                      targetVidObject?.classList.add("sourav");
                      setVidObject(targetVidObject)
                    }

                    if (timeoutIDs[params.realIndex]) {
                      clearTimeout(timeoutIDs[params.realIndex]);
                    }
                    timeoutIDs[params.realIndex] = setTimeout(function () {
                      handleTimeout(params.realIndex);
                    }, 0);
                  }}
                  virtual
                >
                  <Suspense fallback={<></>}>
                    <LeftPanelComponent />
                  </Suspense>

                  {props.videoData.results?.map((slideContent, index, data) => {
                    const isActive = activeVideoIndex === index;
                    const d = slideContent;
                    console.log("data is:", d);

                    if (d) {
                      if ((index + 1) % 4 === 0) {
                        return (
                          <SwiperSlide
                            key={d.id}
                            virtualIndex={index}
                            className={`BepSl_li Sv_trs js_seek-vis-sec `}
                            onMouseDown={(e) => {
                              e.stopPropagation();
                              setChangeSlide(true);
                            }}
                            onMouseMove={(e) => {
                              e.stopPropagation();
                              setChangeSlide(true);
                            }}
                          >
                            <AdCardSlide
                              category={d["media:category"]}
                              //category={d["media:child_category"]}
                              id={`ad-card-${Math.floor(index / 3)}`}
                              device={isMobile ? "WAP" : "DESKTOP"}
                              catName={props.catName}
                              infiniteRef={props.infiniteRef}
                              swiperRef={swipeRef.current}
                              isActive={isActive}
                            />
                          </SwiperSlide>
                        );
                      }

                      //  console.log("category sourav", d["media:category"]);
                      return (
                        <SwiperSlide
                          key={d.id}
                          virtualIndex={index}
                          className={`BepSl_li Sv_trs js_seek-vis-sec `}
                          onMouseDown={(e) => {
                            e.stopPropagation();
                            setChangeSlide(true);
                          }}
                          onMouseMove={(e) => {
                            e.stopPropagation();
                            setChangeSlide(true);
                          }}
                        >
                          {/* {(index % 4 == 0 && index!=0)? */}
                          {/* {index % 3 == 0 && index != 0 ? (
                            <AdCardSlide
                              category={d["media:category"]}
                              id={`ad-card-${Math.floor(index / 3)}`}
                              device={isMobile ? "WAP" : "DESKTOP"}
                              catName={props.catName}
                              infiniteRef={props.infiniteRef}
                              adIndex={Math.floor(index / 3)}
                            ></AdCardSlide>
                          ) : ( */}
                          <VideoSlide
                            vidsrc={
                              d["media:filepath"]
                                ? d["media:filepath"]
                                : "Video Not Available"
                            }
                            hlssrc={d["media:allfileformats"]?.ios}
                            imgsrc={
                              d["media:verticalimage"]
                                ? d["media:verticalimage"]
                                : d["media:fullimage"]
                            }
                            category={d["media:category"]}
                            // category={d["media:child_category"]}
                            show={d["media:show"]}
                            title={decodeURIComponent(escape(d.title))}
                            videoID={d.id}
                            link={d.link}
                            urltitle={d.urltitle}
                            channel_id={d["media:source_id"]}
                            index={index}
                            catName={props?.catName}
                            catId={props?.catId}
                            pubDate={d.pubDate}
                            modDate={d.updated_at}
                            infiniteRef={props.infiniteRef}
                            data={data}
                            isActive={isActive}
                            isPathChange={isPathChange}
                            description={d.description}
                            keywords={d["media:keywords"]}
                            author={d.author}
                            content_type={d["media:content_type"]}
                            network={d["media:network"]?.name}
                            swiperRef={swipeRef.current}
                            vidObject={vidObject}
                          ></VideoSlide>
                          {/* )} */}
                        </SwiperSlide>
                      );
                    } else {
                      return (
                        <>
                          <SwiperSlide>
                            <ErrorPage />
                          </SwiperSlide>
                        </>
                      );
                    }
                  })}
                  <Footer />
                  <SwiperNav />
                </Swiper>
              ) : (
                <>
                  <ErrorPage isVideoAvailable={isVideoAvailable} />
                  <Footer />
                  <SwiperNav />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
