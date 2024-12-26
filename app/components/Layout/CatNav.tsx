import React, { useState } from "react";
import { CATEGORY_LIST } from "./CategoryName";
import useGptSlot from "~/hooks/useGptSlot";
import { Link } from "@remix-run/react";
import useStore from "~/stores/utilstore";

function CatNav() {
  useGptSlot({
    path: "/6355419/Travel/Europe/France/Paris",
    size: [300, "fluid"],
    id: "gpt-ad",
  });
  const sidenavtoggle = useStore((state) => state.sidenavtoggle);
  const setSidenavtoggle = useStore((state) => state.setSidenavtoggle);
  const handleSidenav = () => {
    if (sidenavtoggle == true) {
      document.body.classList.add("js_sid-nav-right");
    } else {
      document.body.classList.remove("js_sid-nav-right");
    }
  };
  return (
    <>
      <div className="VdPg-Col_One VdPg-Col_P0">
        {/*====== Logo, Main Navigation & Right Icons Notification ======*/}
        <nav className="m-nv_LHS">
          <div className="vjl-cntr_full">
            <div className="vjl-row">
              <div className="vjl-md-12">
                {/* Button */}
                <div className="brw-nav">
                  {/* Browse Button */}
                  <a
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    // href="javascript:void(0);"
                    className="sid-nav-icn_lnk side-nav-trigger"
                    data-trigger=".nav-trigger"
                    data-class="js_sid-nav"
                  >
                    <div
                      className="sid-nav-icn_wrp"
                      onClick={() => {
                        setSidenavtoggle(!sidenavtoggle);
                        handleSidenav();
                      }}
                    >
                      <svg className="vj_icn vj_menu">
                        <use xlinkHref="#vj_menu" />
                      </svg>
                    </div>
                  </a>
                </div>
                {/* Logo - Dropdown */}
                <div className="hdr-lhs-col fleft">
                  <a className="ndtv-logo" href="home-ndtv.html">
                    <img
                      className="vj_icn vj_logo-ndtv"
                      alt=""
                      src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzNjUgNjguOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzY1IDY4Ljk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KCS5zdDF7ZmlsbDojRUUwMDAwO30KPC9zdHlsZT4KPGcgaWQ9IlhNTElEXzFfIj4KCTxwYXRoIGlkPSJYTUxJRF8zXyIgY2xhc3M9InN0MCIgZD0iTTAsMC4xYzguNCwwLDE2LjgtMC4xLDI1LjIsMEMzNS4yLDAuNyw0NCw3LjQsNDguOCwxNmM0LjgsOS4xLDksMTguNSwxMy45LDI3LjUKCQljMS42LDMuMiw0LjgsNS40LDguNCw1LjVDNzAuOSwzMi43LDcxLDE2LjQsNzEsMGM3LjQsMC4xLDE0LjcsMCwyMi4xLDBjMCw3LjEsMCwxNC4yLTAuMSwyMS40Yy01LjEsMi05LjQsNi41LTkuNSwxMi4yCgkJYy0wLjcsNi4yLDMuOSwxMS44LDkuNSwxMy43YzAuMSw3LjIsMCwxNC4zLDAuMSwyMS41Yy03LjMsMC4xLTE0LjcsMC0yMiwwLjFjLTguNSwwLjQtMTYuOS0zLjUtMjIuMy05LjkKCQljLTYtNy4zLTkuMS0xNi41LTEzLjYtMjQuNkMzMi4xLDI4LjYsMjkuOSwyMCwyMiwxOS43YzAsMTYuNC0wLjEsMzIuNywwLjEsNDkuMWMtNy40LDAuMS0xNC43LDAuMS0yMi4xLDBDMC4xLDQ1LjksMC4xLDIzLDAsMC4xeiIKCQkvPgoJPHBhdGggaWQ9IlhNTElEXzZfIiBjbGFzcz0ic3QwIiBkPSJNOTkuNiwwLjFjNjIuNCwwLDEyNC43LTAuMiwxODcuMSwwLjFjOS4zLDE2LjksMTguOCwzMy43LDI4LDUwLjZjOS4yLTE2LjgsMTcuNy0zNCwyNi44LTUwLjgKCQljNy44LDAuMSwxNS42LTAuMSwyMy41LDAuMmMtMS4zLDEuOS0yLjYsMy44LTMuNyw1LjhjLTExLDIxLTIyLjEsNDEuOS0zMy4yLDYyLjhjLTguOSwwLTE3LjksMC0yNi44LDAKCQljLTkuNy0xNy41LTE5LjYtMzUtMjkuMi01Mi41Yy05LjgtMC4xLTE5LjcsMC0yOS41LDBjMCwxNy41LDAuMSwzNSwwLDUyLjVjLTcuMSwwLTE0LjEsMC0yMS4yLDBjMC0xNy41LDAuMS0zNSwwLTUyLjYKCQljLTEwLjgsMC4xLTIxLjcsMC0zMi41LDAuMWMyLDcuNSwxLjgsMTUuMywxLjUsMjNjLTAuMyw3LjgtMi40LDE2LjItOC4yLDIxLjhjLTUuNiw1LjgtMTQsNy44LTIxLjgsNy43CgkJYy0yMC4yLTAuMS00MC40LDAuMS02MC41LTAuMWMwLjEtNy4yLDAtMTQuMywwLjEtMjEuNGM0LjgtMS45LDguOS01LjgsOS40LTExLjJjMS02LjUtMy41LTEyLjYtOS40LTE0LjcKCQlDOTkuNiwxNC4zLDk5LjgsNy4yLDk5LjYsMC4xIE0xMjEuMSwxNi41YzAuMiwxMiwwLjEsMjMuOSwwLjEsMzUuOWMxMi4xLDAuMiwyNC4yLDAuMSwzNi4yLDAuMWM0LjcsMC4yLDEwLjMtMi40LDExLTcuNgoJCWMwLjQtNi43LDAuMy0xMy40LDAuMS0yMC4xYy0wLjUtNS40LTYuMS04LjQtMTEuMS04LjNDMTQ1LjMsMTYuMywxMzMuMiwxNi4yLDEyMS4xLDE2LjV6Ii8+Cgk8cGF0aCBpZD0iWE1MSURfN18iIGNsYXNzPSJzdDEiIGQ9Ik04My41LDMzLjZjMC4xLTUuNyw0LjQtMTAuMyw5LjUtMTIuMmMyLjItMC4yLDQuNS0wLjIsNi43LDBjNS45LDIuMiwxMC40LDguMiw5LjQsMTQuNwoJCWMtMC40LDUuMy00LjYsOS4zLTkuNCwxMS4yYy0yLjIsMC4yLTQuNSwwLjItNi43LDBDODcuNCw0NS40LDgyLjgsMzkuOSw4My41LDMzLjZ6Ii8+CjwvZz4KPC9zdmc+Cg=="
                    />
                  </a>
                  {/*== Language dropdown icon==*/}
                  {/* <div
                        className="tp_lng side-nav-trigger"
                        data-trigger=".nav-trigger"
                        data-class="js_SchLng"
                      >
                        <div className="tp_lng-ttl Lng_swt drp-lnk">
                          <svg className="vj_icn vj_lang-toggle">
                            <use xlinkHref="#vj_lang-toggle" />
                          </svg>
                        </div>
                      </div> */}
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="VdPg-cat_wrp">
          <div className="VdPg-LfNav">
            <div className="VdPg-LfNav_cnt">
              <a href="video-home.html" className="VdPg-LfNav_tl">
                Videos
              </a>
              <div className="VdPg-LfNav_wr">
                <ul className="VdPg-LfNav_ul">
                  {/* <li className="VdPg-LfNav_li">
                        <a href="video-list.html" className="VdPg-LfNav_lnk">
                          <svg className="vj_icn vj_star">
                            <use xlinkHref="#vj_star" />
                          </svg>{" "}
                          Latest videos
                        </a>
                      </li> */}
                  {CATEGORY_LIST().map((category) => (
                    <li key={category.title} className="VdPg-LfNav_li">
                      <Link to={category.link} className={`VdPg-LfNav_lnk`}>
                        {/* Add any additional icons or styles as needed */}
                        {category.title}
                      </Link>
                    </li>
                  ))}
                  {/* <li className="VdPg-LfNav_li">
                        <a href="video-list.html" className="VdPg-LfNav_lnk">
                          <svg className="vj_icn vj_zap">
                            <use xlinkHref="#vj_zap" />
                          </svg>{" "}
                          Top videos
                        </a>
                      </li>
                      <li className="VdPg-LfNav_li">
                        <a
                          href="video-categories-list.html"
                          className="VdPg-LfNav_lnk VdPg-LfNav_lnk-act"
                        >
                          <svg className="vj_icn vj_grid">
                            <use xlinkHref="#vj_grid" />
                          </svg>{" "}
                          Categories
                        </a>
                      </li>
                      <li className="VdPg-LfNav_li">
                        <a
                          href="video-live-video.html"
                          className="VdPg-LfNav_lnk"
                        >
                          <svg className="vj_icn vj_tv">
                            <use xlinkHref="#vj_tv" />
                          </svg>{" "}
                          Channels
                        </a>
                      </li>
                      <li className="VdPg-LfNav_li">
                        <a
                          href="video-show-list.html"
                          className="VdPg-LfNav_lnk"
                        >
                          <svg className="vj_icn vj_youtube">
                            <use xlinkHref="#vj_youtube" />
                          </svg>{" "}
                          Shows
                        </a>
                      </li>
                      <li className="VdPg-LfNav_li">
                        <a href="video-list.html" className="VdPg-LfNav_lnk">
                          <svg className="vj_icn vj_film">
                            <use xlinkHref="#vj_film" />
                          </svg>{" "}
                          NDTV Classics
                        </a>
                      </li>
                      <li className="VdPg-LfNav_li">
                        <a href="video-list.html" className="VdPg-LfNav_lnk">
                          <svg className="vj_icn vj_video-shot">
                            <use xlinkHref="#vj_video-shot" />
                          </svg>{" "}
                          Shot on Samsung
                        </a>
                      </li> */}
                </ul>
              </div>
            </div>
            {/* placeholder image */}
          </div>
          {/*=== Advertisement ===*/}
          <a className="ads-wrp" href="#">
            <span className="ads-wrp_txt">Advertisement</span>
            <div id="gpt-ad"></div>
            {/* <img
                  src="https://s0.2mdn.net/simgad/1116328456205855164"
                  border={0}
                  width={300}
                  alt=""
                  className="img_ad"
                /> */}
          </a>
        </div>
      </div>
    </>
  );
}

export default CatNav;
