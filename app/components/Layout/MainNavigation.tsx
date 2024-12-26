import React, { useEffect, useState } from "react";
import { BASEPATH } from "~/constants";
import logo from "~/images/news_beep_logo.svg";
import useStore from "~/stores/utilstore";
import EnglishLogo from "~/images/NDTV-Shorts-E-DM.png";
import HindiLogo from "~/images/NDTV-Shorts-H-DM.png";
function MainNavigation(props: any) {
  const setSidenavtoggle = useStore((state) => state.setSidenavtoggle);
  const loginPanel = useStore((state) => state.loginPanel);
  const setLoginPanel = useStore((state) => state.setLoginPanel);
  const showLoginPanel = useStore((state) => state.showLoginPanel);
  const setShowLoginPanel = useStore((state) => state.setShowLoginPanel);

  const [showlogo, setShowLogo] = useState(false);
  const [isEng, setIsEng] = useState(true);

  const logoEnglish = useStore((state) => state.logoEnglish);
  const setLogoEnglish = useStore((state) => state.setLogoEnglish);
  useEffect(() => {
    const domain = window.location.hostname;
    if (domain.endsWith(".com")) {
      setIsEng(true);
      setLogoEnglish(true);
    } else if (domain.endsWith(".in")) {
      setIsEng(false);
      setLogoEnglish(false);
    }
  }, []);
  useEffect(() => {
    // console.log("props.status",props.status)
    if (!props.status) {
      setShowLogo(false);
    } else if (props.status) {
      setShowLogo(true);
    }
  }, [showlogo]);
  useEffect(() => {
    const loginActive = document.querySelectorAll(".log_btn-act");
    // console.log("loginactive is: ", loginActive)
    if (loginActive.length > 0) {
      setShowLoginPanel(true);
    } else {
      setShowLoginPanel(false);
    }
  }, [loginPanel]);
  return (
    <>
      <nav className="m-nv m-nv_clr m-nv_out BepHdr_wr">
        <div className="vjl-cntr_full BepHdr_cn">
          <div className="vjl-row">
            <div className="vjl-md-12">
              <div className="BepHdr">
                <nav className="BepHdr_lft">
                  {/* Menu icon */}
                  <div className="brw-nav">
                    {/* Browse Button */}
                    <a
                      href=""
                      onClick={(e) => {
                        e.preventDefault();
                        setSidenavtoggle(true);
                      }}
                      className="sid-nav-icn_lnk side-nav-trigger"
                      data-trigger=".nav-trigger"
                      data-class="js_sid-nav"
                    >
                      <div className="sid-nav-icn_wrp">
                        <svg className="vj_icn vj_menu">
                          <use xlinkHref="#vj_menu" />
                        </svg>
                      </div>
                    </a>
                  </div>
                  <div className="BepHdr_vdo-wr">
                    {/* commented videos panel */}
                    {/* <div className="m-nv_li dd-nav_one dd-nav_hvr BepHdr_vdo-cn">
                      <div className="m-nv_lnk BepHdr_vdo-lk" 
                      onClick={(e)=>{
                        e.stopPropagation()
                      }}>
                        Videos
                      </div>
                      <div className="dd-nav BepHdrDrp_cn">
                        <div className="dd-nav_in BepHdrDrp_wr">
                          <ul className="dd-nav_ul BepHdrDrp_ul">
                            <li className="dd-nav_li BepHdrDrp_li">
                              <a
                                href="https://mpcg.ndtv.in/livetv-ndtvmpcg"
                                className="m-nv_lnk BepHdrDrp_li-lk"
                              >
                                <div className="BepHdrDrp_li-icn">
                                  <svg className="vj_icn vj_livetv">
                                    <use xlinkHref="#vj_livetv" />
                                  </svg>{" "}
                                </div>
                                Live TV
                              </a>
                            </li>
                            <li className="dd-nav_li BepHdrDrp_li">
                              <a
                                href="https://mpcg.ndtv.in/videos/latest"
                                className="m-nv_lnk BepHdrDrp_li-lk"
                              >
                                <div className="BepHdrDrp_li-icn">
                                  <svg className="vj_icn vj_Trending">
                                    <use xlinkHref="#vj_Trending" />
                                  </svg>
                                </div>{" "}
                                Latest
                              </a>
                            </li>
                            <li className="dd-nav_li BepHdrDrp_li">
                              <a
                                href="https://mpcg.ndtv.in/videos/news"
                                className="m-nv_lnk BepHdrDrp_li-lk"
                              >
                                <div className="BepHdrDrp_li-icn">
                                  <svg className="vj_icn vj_news">
                                    <use xlinkHref="#vj_news" />
                                  </svg>
                                </div>
                                News
                              </a>
                            </li>
                            <li className="dd-nav_li BepHdrDrp_li">
                              <a
                                href="https://mpcg.ndtv.in/elections/video"
                                className="m-nv_lnk BepHdrDrp_li-lk"
                              >
                                <div className="BepHdrDrp_li-icn">
                                  <svg className="vj_icn vj_democracy">
                                    <use xlinkHref="#vj_democracy" />
                                  </svg>
                                </div>{" "}
                                Election
                              </a>
                            </li>
                            <li className="dd-nav_li BepHdrDrp_li">
                              <a
                                href="https://mpcg.ndtv.in/videos/entertainment"
                                className="m-nv_lnk BepHdrDrp_li-lk"
                              >
                                <div className="BepHdrDrp_li-icn">
                                  <svg className="vj_icn vj_play">
                                    <use xlinkHref="#vj_play" />
                                  </svg>{" "}
                                </div>
                                Entertainment
                              </a>
                            </li>
                            <li className="dd-nav_li BepHdrDrp_li">
                              <a
                                href="https://mpcg.ndtv.in/videos/sports"
                                className="m-nv_lnk BepHdrDrp_li-lk"
                              >
                                <div className="BepHdrDrp_li-icn">
                                  <svg className="vj_icn vj_ball">
                                    <use xlinkHref="#vj_ball" />
                                  </svg>
                                </div>
                                Sports
                              </a>
                            </li>
                            <li className="dd-nav_li BepHdrDrp_li">
                              <a
                                href="https://mpcg.ndtv.in/videos/lifestyle"
                                className="m-nv_lnk BepHdrDrp_li-lk"
                              >
                                <div className="BepHdrDrp_li-icn">
                                  <svg className="vj_icn vj_lifestyle">
                                    <use xlinkHref="#vj_lifestyle" />
                                  </svg>
                                </div>{" "}
                                Lifestyle
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </nav>
                <div className={"BepHdr_mid " + (showlogo ? "show-logo" : " ")}>
                  <div className="BepHdr_lgo-lk">
                    <a
                      className={`ndtv-logo ${
                        isEng ? "BepHdr_lgo" : "BepHdr_lgo-h"
                      }`}
                      href={BASEPATH}
                    >
                      <img src={logoEnglish ? EnglishLogo : HindiLogo} alt="" />
                    </a>
                  </div>
                </div>
                <div className="BepHdr_rgt">
                  {/* Right Icons, Notification and Search */}
                  {/* Notification Icon */}
                  {/* <div
                    className="t-icn-nv t-icn-nt ttp Bep_ntf"
                    id="___ndtvspldiv"
                  > */}
                  {/* <svg className="vj_icn vj_bell">
                      <use xlinkHref="#vj_bell" />
                    </svg>
                    <div className="tip on-bottom">
                      <div className="tip_wrp">
                        News alerts are turned off.{" "}
                        <div
                          className="ttp-lnk"
                          onClick={() => {
                            // setNotificationAllowed(true);
                            window.__showSubscribePopup();
                          }}
                        >
                          Click here to turn on.
                        </div>
                      </div>
                    </div> */}
                  {/* </div> */}
                  {/* Login / Sign up */}
                  <div
                    className="log_btn side-nav-trigger Bep_log-btn __log_trigger"
                    role="presentation"
                    onClick={() => {
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
                        const toggleClass = element.getAttribute("data-class");
                        document.body.classList.toggle(toggleClass);
                      }
                    }}
                    // data-trigger=".nav-trigger"
                    // data-class="js_sid-nav-right"
                  >
                    <div className="log_btn-dt" />
                    <svg className="vj_icn vj_user">
                      <use xlinkHref="#vj_user"></use>
                    </svg>
                    <div className="log_btn-tx">Login</div>
                    <svg
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        width: 0,
                        height: 0,
                        overflow: "hidden",
                      }}
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <defs>
                        <symbol id="vj_user" viewBox="0 0 32 32">
                          <path d="M14.631 29.953c-0.266-0.137-0.559-0.109-0.841-0.147-1.647-0.225-3.209-0.719-4.675-1.494-2.334-1.234-4.191-2.991-5.603-5.222-0.206-0.325-0.225-0.619-0.050-0.969 1.281-2.572 3.303-4.216 6.091-4.916 0.219-0.056 0.447-0.087 0.669-0.134 0.441-0.094 0.816 0.031 1.178 0.284 1.441 1.016 3.050 1.469 4.806 1.394 1.334-0.059 2.619-0.381 3.694-1.169 0.803-0.591 1.578-0.566 2.441-0.325 2.441 0.681 4.284 2.131 5.578 4.3 0.144 0.241 0.253 0.503 0.372 0.759 0.087 0.188 0.059 0.369-0.050 0.544-2.119 3.422-5.103 5.688-9.025 6.684-0.697 0.178-1.409 0.278-2.125 0.35-0.059 0.006-0.131-0.022-0.166 0.056-0.762 0.003-1.528 0.003-2.294 0.003z"></path>
                          <path d="M15.828 16.509c-3.988-0.009-7.275-3.309-7.253-7.278 0.019-3.994 3.313-7.272 7.281-7.247 3.991 0.025 7.241 3.288 7.238 7.263 0 3.984-3.291 7.272-7.266 7.262z"></path>
                        </symbol>
                      </defs>
                    </svg>
                  </div>
                  {/* </ul> */}
                  {/* </div>s */}
                  {/* Top Search */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MainNavigation;
