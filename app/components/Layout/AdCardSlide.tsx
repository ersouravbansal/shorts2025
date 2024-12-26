import React, { useEffect, useRef, useState } from "react";
import { isDesktop, isMobile } from "react-device-detect";
import useStore from "~/stores/utilstore";
const adCountTime: number = 10;
const adCodeMap: any = {
  WAP: {
    news: "/1068322/NDTV_News_WAP_Beeps_Pre",
    movies: "/1068322/NDTV_Movies_WAP_Beeps_Swipe",
    entertainment: "/1068322/NDTV_Movies_WAP_Beeps_Swipe",
    food: "/1068322/NDTV_Food_WAP_Beeps_Swipe",
    health: "/1068322/NDTV_Doctor_WAP_Beeps_Swipe",
    sports: "/1068322/NDTV_Sports_WAP_Beeps_Swipe",
    gadgets: "/1068322/NDTV_Gadgets_WAP_Beeps_Swipe",
    tech: "/1068322/NDTV_Gadgets_WAP_Beeps_Swipe",
    profit: "/1068322/NDTV_Profit_WAP_Beeps_Swipe",
    business: "/1068322/NDTV_Profit_WAP_Beeps_Swipe",
    khabar: "/1068322/NDTV_Khabar_WAP_Beeps_Pre",
  },
  DESKTOP: {
    news: "/1068322/NDTV_News_Desktop_Beeps_Pre",
    movies: "/1068322/NDTV_Movies_Desktop_Beeps_Swipe",
    entertainment: "/1068322/NDTV_Movies_Desktop_Beeps_Swipe",
    food: "/1068322/NDTV_Food_Desktop_Beeps_Swipe",
    health: "/1068322/NDTV_Doctor_Desktop_Beeps_Swipe",
    sports: "/1068322/NDTV_Sports_Desktop_Beeps_Swipe",
    gadgets: "/1068322/NDTV_Gadgets_Desktop_Beeps_Swipe",
    tech: "/1068322/NDTV_Gadgets_Desktop_Beeps_Swipe",
    profit: "/1068322/NDTV_Profit_Desktop_Beeps_Swipe",
    business: "/1068322/NDTV_Profit_Desktop_Beeps_Swipe",
    khabar: "/1068322/NDTV_Khabar_Desktop_Beeps_Pre",
  },
};
const adCodeMapHindi: any = {
  WAP: {
    news: "/1068322/NDTV_News_WAP_Beeps_Pre",
    movies: "/1068322/NDTV_Movies_WAP_Beeps_Swipe",
    entertainment: "/1068322/NDTV_Movies_WAP_Beeps_Swipe",
    food: "/1068322/NDTV_Food_WAP_Beeps_Swipe",
    health: "/1068322/NDTV_Doctor_WAP_Beeps_Swipe",
    sports: "/1068322/NDTV_Sports_WAP_Beeps_Swipe",
    gadgets: "/1068322/NDTV_Gadgets_WAP_Beeps_Swipe",
    tech: "/1068322/NDTV_Gadgets_WAP_Beeps_Swipe",
    profit: "/1068322/NDTV_Profit_WAP_Beeps_Swipe",
    business: "/1068322/NDTV_Profit_WAP_Beeps_Swipe",
    khabar: "/1068322/NDTV_Khabar_WAP_Beeps_Pre",
  },
  DESKTOP: {
    news: "/1068322/NDTV_News_Desktop_Beeps_Pre",
    movies: "/1068322/NDTV_Movies_Desktop_Beeps_Swipe",
    entertainment: "/1068322/NDTV_Movies_Desktop_Beeps_Swipe",
    food: "/1068322/NDTV_Food_Desktop_Beeps_Swipe",
    health: "/1068322/NDTV_Doctor_Desktop_Beeps_Swipe",
    sports: "/1068322/NDTV_Sports_Desktop_Beeps_Swipe",
    gadgets: "/1068322/NDTV_Gadgets_Desktop_Beeps_Swipe",
    tech: "/1068322/NDTV_Gadgets_Desktop_Beeps_Swipe",
    profit: "/1068322/NDTV_Profit_Desktop_Beeps_Swipe",
    business: "/1068322/NDTV_Profit_Desktop_Beeps_Swipe",
    khabar: "/1068322/NDTV_Khabar_Desktop_Beeps_Pre",
  },
};

const getAdCode = (device: string, category: string, catName?: string) => {
  const domain = window.location.hostname;
  //  console.log("domain is:", domain);

  if (domain.endsWith(".app")) {
    // console.log("Your domain is:", domain, category, catName);
    // if (catName === "news") {
    //   // console.log("news com");
    //   return adCodeMap[device]?.news; // Ensure the adCodeMap is accessed safely
    // } else if (adCodeMap[device]?.[category]) {
    //   // console.log("in adCodeMap[device]?.[category]");
    //   return adCodeMap[device][category];
    // }
    return adCodeMap[device]?.news; // Default fallback to news
  } else {
    //  console.log("apka domain hai:", domain, category, device, catName);
    // if (catName === "khabar") {
    //   // console.log("khabar in");
    //   return adCodeMapHindi[device]?.khabar;
    // }
    // else if (adCodeMapHindi[device]?.[category]) {
    //   console.log("in adCodeMapHindi[device]?.[category]");
    //   return adCodeMap[device][category];
    // }
    return adCodeMapHindi[device]?.khabar;
  }
};

const AdCardSlide = (props: any) => {
  const catName = props.catName;
  const category = props.category?.toLowerCase();
  const adCode = getAdCode(props.device, category, catName);
  // console.log("your adcode is:", category, "-", adCode);
  // console.log("Your adcode is:", adCode);
  const isSwiping = useStore((state) => state.isSwiping);
  const setIsSwiping = useStore((state) => state.setIsSwiping);
  const [progress, setProgress] = useState(0);
  const [remainingTime, setRemainingTime] = useState(adCountTime);
  const adProgRef = useRef(null);

  const handleAdClick = (e) => {
    e.stopPropagation();
    setIsSwiping(false);
    setTimeout(() => {
      setIsSwiping(true);
    }, 2000);
  };
  const eventHandlers = isDesktop
    ? {}
    : {
        onTouchEnd: handleAdClick,
      };

  useEffect(() => {
    if (window.googletag && window.googletag.cmd) {
      window.googletag.cmd.push(() => {
        const existingSlot = window.googletag
          .pubads()
          .getSlots()
          .find((slot) => slot.getSlotElementId() === props.id);
        if (existingSlot) {
          window.googletag.destroySlots([existingSlot]);
        }

        window.googletag
          .defineSlot(
            adCode,
            [
              [300, 600],
              [300, 250],
              [320, 480],
            ],
            props.id
          )
          ?.addService(window.googletag.pubads());

        window.googletag.enableServices();
        window.googletag.display(props.id);
      });
    }
  }, [props.id, adCode]);

  //ad slide

  useEffect(() => {
    if (isMobile) {
      let intervalId,
        adTime,
        count = adCountTime;

      if (props.isActive) {
        intervalId = setInterval(() => {
          count--;
          if (count < 1) {
            count = adCountTime;
          }
          const per: number = Math.abs(
            ((count - adCountTime) / adCountTime) * 100
          );
          // console.log('mera countdown: ',count, adProgRef.current?.style.width, per)

          adProgRef.current.style.width = `${per}%`;
          setRemainingTime(count);
        }, 1000);

        adTime = setTimeout(() => {
          // console.log("setting timeout");
          props.swiperRef.swiper.slideNext();
          clearTimeout(adTime);
          clearInterval(intervalId);
        }, adCountTime * 1000);
      }
      return () => {
        clearTimeout(adTime);
        clearInterval(intervalId);
      };
    }
  }, [props.isActive, props.swiperRef]);
  return (
    <div className="BepSl_crd-wr">
      <div className="BepSl_crd">
        <div className="BepSl_vdo-cn">
          <div className="BepSl_vdo-wr" style={{ display: "flex" }}>
            <div
              ref={adProgRef}
              className="ad-progress-bar"
              style={{
                backgroundColor: "#fffb00",
                width: "0%",
                height: "2px",
                zIndex:"12",
              }}
            ></div>
            <div className="VdEl_ads-tx">Advertisement</div>
            <div
              className="BepSl_swp-cn"
              style={{ display: "flex" }}
              {...eventHandlers}
            >
              <div className="VdEl_ads-wr">
                {/* <div className="VdEl_ads-tx">Advertisement</div> */}
                <div
                  id={props.id}
                  style={{
                    minHeight: "250px",
                    pointerEvents: isSwiping && isMobile ? "none" : "auto",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdCardSlide;
