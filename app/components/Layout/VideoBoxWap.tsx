import React from "react";
import useStore from "~/stores/utilstore";
function VideoBoxWap() {
  const setvideoWapToggle = useStore((state) => state.setVideoWapToggle);
  return (
    <>
      <div className="VdElVdCtg_wdg">
        <div
          className="VdElVdCtg_ovrly"
          onClick={(e) => {
            e.stopPropagation();
            // document.body.classList.remove("VdElVdCtg_on");
            setvideoWapToggle(false);
          }}
        />
        <div className="VdElVdCtg_wr">
          <div className="VdElVdCtg_cn">
            {/* <div class=""> */}
            <div className="BepDrp_rw">
              <div className="BepDrp_col">
                <div className="BepDrp_tl-lk">
                  <a className="BepDrp_tl" href="#0">
                    Choose the Videos Category
                  </a>
                  <div
                    className="VdElVdCtgr_cls"
                    onClick={(e) => {
                      e.stopPropagation();
                      setvideoWapToggle(false);
                    }}
                  >
                    <svg className="vj_icn vj_close">
                      <use xlinkHref="#vj_close" />
                    </svg>
                  </div>
                </div>
                <div className="BepDrpNv_ul VdElVdCtg_ul hr-scroll">
                  <div className="BepDrpNv_li-lk">
                    <a
                      href="https://mpcg.ndtv.in/livetv-ndtvmpcg"
                      className="BepDrpNv_li"
                    >
                      <div className="BepHdrDrp_li-icn">
                        <svg className="vj_icn vj_livetv">
                          <use xlinkHref="#vj_livetv" />
                        </svg>{" "}
                      </div>
                      Live TV
                    </a>
                  </div>
                  <div className="BepDrpNv_li-lk">
                    <a
                      href="https://mpcg.ndtv.in/videos/latest"
                      className="BepDrpNv_li"
                    >
                      <div className="BepHdrDrp_li-icn">
                        <svg className="vj_icn vj_Trending">
                          <use xlinkHref="#vj_Trending" />
                        </svg>
                      </div>{" "}
                      Latest
                    </a>
                  </div>
                  <div className="BepDrpNv_li-lk">
                    <a
                      href="https://mpcg.ndtv.in/videos/news"
                      className="BepDrpNv_li"
                    >
                      <div className="BepHdrDrp_li-icn">
                        <svg className="vj_icn vj_news">
                          <use xlinkHref="#vj_news" />
                        </svg>
                      </div>
                      News
                    </a>
                  </div>
                  <div className="BepDrpNv_li-lk">
                    <a
                      href="https://mpcg.ndtv.in/elections/video"
                      className="BepDrpNv_li"
                    >
                      <div className="BepHdrDrp_li-icn">
                        <svg className="vj_icn vj_democracy">
                          <use xlinkHref="#vj_democracy" />
                        </svg>
                      </div>{" "}
                      Election
                    </a>
                  </div>
                  <div className="BepDrpNv_li-lk">
                    <a
                      href="https://mpcg.ndtv.in/videos/entertainment"
                      className="BepDrpNv_li"
                    >
                      <div className="BepHdrDrp_li-icn">
                        <svg className="vj_icn vj_play">
                          <use xlinkHref="#vj_play" />
                        </svg>{" "}
                      </div>
                      Entertainment
                    </a>
                  </div>
                  <div className="BepDrpNv_li-lk">
                    <a
                      href="https://mpcg.ndtv.in/videos/sports"
                      className="BepDrpNv_li"
                    >
                      <div className="BepHdrDrp_li-icn">
                        <svg className="vj_icn vj_ball">
                          <use xlinkHref="#vj_ball" />
                        </svg>
                      </div>
                      Sports
                    </a>
                  </div>
                  <div className="BepDrpNv_li-lk">
                    <a
                      href="https://mpcg.ndtv.in/videos/lifestyle"
                      className="BepDrpNv_li"
                    >
                      <div className="BepHdrDrp_li-icn">
                        <svg className="vj_icn vj_lifestyle">
                          <use xlinkHref="#vj_lifestyle" />
                        </svg>
                      </div>{" "}
                      Lifestyle
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoBoxWap;
