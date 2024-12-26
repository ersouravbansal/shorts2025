/* eslint-disable jsx-a11y/media-has-caption */
import {
  Links,
  LiveReload,
  Meta,
  MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
  useLoaderData,
  useParams,
  Link,
} from "@remix-run/react";
import { useEffect, useState, lazy, Suspense } from "react";
import { cssBundleHref } from "@remix-run/css-bundle";
import { version } from "package.json";
import Header from "./components/Layout/Header";
import SideNavigation from "./components/Layout/SideNavigation";
import SvgIcons from "./components/Layout/SvgIcons";
import Login from "./components/Layout/Login";
import { LinksFunction, json } from "@remix-run/node";
import styles from "./styles/styles.css";
import useEnvStore from "./stores/env_variables";
import TagManager from "react-gtm-module";
import { register } from "swiper/element/bundle";
import CategoryBoxWap from "./components/Layout/CategoryBoxWap";
// import VideoBoxWap from "./components/Layout/VideoBoxWap";
import useStore from "~/stores/utilstore";
import {
  rootMeta,
  defaultMeta,
  rootMetaHindi,
  defaultMetaHindi,
} from "~/stores/metaUtils";
import { BASEPATH } from "./constants";
import ErrorPage from "./components/Layout/ErrorPage";
import MainNavigation from "./components/Layout/MainNavigation";
const MoreSwipe = lazy(() => import("./components/Layout/MoreSwipe"));

declare global {
  interface Window {
    _comscore: any;
    _sf_async_config: any;
  }
}
export const loader = async ({ request }) => {
  // console.log("request",request)
  const envStore = useEnvStore.getState();
  const urlMeta = new URL(request.url);
  const domainMeta = urlMeta.hostname;
  await envStore.setBasePath(process.env.REMIX_BASEPATH);
  // await envStore.setClientUrl(process.env.REMIX_API_URL);
  return json({
    GTM_ID: process.env.GTM_ID,
    APP_ENV: process.env.REMIX_APP_ENV,
    REMIX_BASEPATH: process.env.REMIX_BASEPATH,
    // REMIX_API_URL: process.env.REMIX_API_URL,
    REMIX_DOMAIN_HINDI: process.env.REMIX_DOMAIN_HINDI,
    REMIX_DOMAIN_ENG: process.env.REMIX_DOMAIN_ENG,
    REMIX_COMSCORE_ID: process.env.REMIX_APP_COMSCORE_ID,
    REMIX_CHARTBEAT_UID: process.env.REMIX_APP_CHARTBEAT_UID,
    REMIX_MENU_API: process.env.REMIX_APP_MENU_API,
    REMIX_MENU_API_HINDI: process.env.REMIX_APP_MENU_API_HINDI,
    domainMeta: domainMeta,
  });
};

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: styles,
  },
];
export const meta: MetaFunction = ({ data }) => {
  const versionMeta = [{ name: "x-web-version", content: "v" + version }];
  const metaDomain = data?.domainMeta;
  if (metaDomain?.endsWith(".com")) {
    return [...rootMeta, ...defaultMeta, ...versionMeta];
  } else if (metaDomain?.endsWith(".in")) {
    return [...rootMetaHindi, ...defaultMetaHindi, ...versionMeta];
  } else {
    return [...rootMeta, ...defaultMeta, ...versionMeta];
  }
};

export function Layout({ children }: any) {
  const sidenavtoggle = useStore((state) => state.sidenavtoggle);
  const categoryWapToggle = useStore((state) => state.categoryWapToggle);
  const videoWapToggle = useStore((state) => state.videoWapToggle);
  const activeVideoIndex = useStore((state) => state.activeVideoIndex);
  const categoryToggle = useStore((state) => state.categoryToggle);
  const loginPanel = useStore((state) => state.loginPanel);
  const showLoginPanel = useStore((state) => state.showLoginPanel);
  useEffect(() => {
    const loadScriptWithAsync = (src: string) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    };

    // loadScriptWithAsync("/shorts/js/jquery-min.js");
    // loadScriptWithAsync("/shorts/js/custom.js");
    loadScriptWithAsync("/shorts/js/beep-element.js");
    loadScriptWithAsync("https://securepubads.g.doubleclick.net/tag/js/gpt.js");
    loadScriptWithAsync(
      "https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"
    );
    loadScriptWithAsync("/shorts/js/beep-video.js");
    // loadScriptWithAsync(
    //   "https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"
    // );
    // loadScriptWithAsync(
    //   "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
    // );
    // loadScriptWithAsync("/shorts/js/world-fcm.js");
    // loadScriptWithAsync("/shorts/js/login.js");
  }, []);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <Links />
      </head>
      <body
        className={
          `nav-trigger Vd-list Vd-Lst-pg` +
          (sidenavtoggle ? " js_sid-nav" : "") +
          (categoryWapToggle ? " VdElCtg_on" : "") +
          (videoWapToggle ? " VdElVdCtg_on" : "") +
          (activeVideoIndex == 0 ? " BepSlDsp_lft" : "") +
          (categoryToggle ? " Js-BepDrp_ovr" : "") +
          (loginPanel && showLoginPanel ? " js_sid-nav-right" : "")
        }
        onClick={() => {
          document.body.classList.remove("Js-BepDrp_ovr");
        }}
      >
        {children}
        <Scripts />
        <ScrollRestoration />
        <LiveReload />
        {/* <script src={`/video/js/jquery-min.js`}></script>
        <script src={`/video/js/custom.js`}></script>
        <script src={`/video/js/beep-element.js`}></script> */}

        <script src={`/shorts/js/jquery-min.js`}></script>
        <script src={`/shorts/js/custom.js`}></script>
        {/* <script src={`/shorts/js/beep-element.js`}></script> */}

        {/* <script src="//cdn.flowplayer.com/releases/native/3/stable/plugins/comscore.min.js"></script> */}
        {/* <script src={`/shorts/js/chartsbeat.js`}></script> */}
        {/* <script async src="https://sb.scorecardresearch.com/beacon.js" /> */}

        {/* <script
          async
          src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        ></script> */}

        {/* <script src="//imasdk.googleapis.com/js/sdkloader/ima3.js"></script> */}

        {/* <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script> */}

        {/* <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script> */}
        {/* <script src={`/video/js/beep-video.js`}></script> */}

        {/* <script src={`/shorts/js/beep-video.js`}></script>
        <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
        <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"></script> */}

        {/* <script src={`/shorts/js/world-fcm.js`}></script> */}
        {/* <script
          async
          src="https://www.googletagservices.com/tag/js/gpt.js"
        ></script> */}
        {/* <script src={`/shorts/js/login.js`}></script> */}
      </body>
    </html>
  );
}

export default function App() {
  const {
    GTM_ID,
    APP_ENV,
    REMIX_BASEPATH,
    REMIX_DOMAIN_HINDI,
    REMIX_DOMAIN_ENG,
    REMIX_COMSCORE_ID,
    REMIX_CHARTBEAT_UID,
    REMIX_MENU_API,
    ENV,
  } = useLoaderData<typeof loader>();
  // console.log("comscore tag is",REMIX_COMSCORE_ID)
  const envStore = useEnvStore.getState();
  const setSidenavtoggle = useStore((state) => state.setSidenavtoggle);
  const setLoginPanel = useStore((state) => state.setLoginPanel);
  const [gTMScriptExecuted, setGTMScriptExecuted] = useState(false);
  const [loginScriptExecuted, setLoginScriptExecuted] = useState(false);
  const [loadedComscore, setLoadedComscore] = useState(false);
  const [chartbeatScriptLoaded, setChartbeatScriptLoaded] = useState(false);
  // console.log("test krishana", REMIX_DOMAIN_HINDI)
  function getApiUrl(hostname: any) {
    if (hostname.endsWith(".com")) {
      return REMIX_DOMAIN_ENG;
    } else if (hostname.endsWith(".in")) {
      return REMIX_DOMAIN_HINDI;
    }
    return REMIX_DOMAIN_ENG;
  }

  // comscore script
  useEffect(() => {
     console.log("hello from shorts")
    if (loadedComscore) return;

    const comscore_script = document.createElement("script");
    comscore_script.src = `${
      document.location.protocol === "https:" ? "https" : "http"
    }://sb.scorecardresearch.com/beacon.js`;
    comscore_script.async = true;

    comscore_script.onload = () => {
      window._comscore = window._comscore || [];
      window._comscore.push({
        c1: "2",
        c2: REMIX_COMSCORE_ID,
      });
      setLoadedComscore(true);
    };
    const firstScript = document.getElementsByTagName("script")[0];
    if (firstScript) {
      firstScript.parentNode?.insertBefore(comscore_script, firstScript);
    } else {
      document.body.appendChild(comscore_script);
    }
  }, []);

  // chartbeat script
  useEffect(() => {
    if (!chartbeatScriptLoaded) {
      const apiUrl = getApiUrl(window.location.hostname);
      const _sf_async_config = (window._sf_async_config =
        window._sf_async_config || {});
      _sf_async_config.uid = REMIX_CHARTBEAT_UID;
      _sf_async_config.domain = `${apiUrl}${BASEPATH}`;
      _sf_async_config.flickerControl = false;
      _sf_async_config.useCanonical = true;
      _sf_async_config.useCanonicalDomain = true;
      _sf_async_config.sections = "";
      _sf_async_config.authors = "";
      const script = document.createElement("script");
      script.async = true;
      script.setAttribute("language", "javascript");
      script.setAttribute("type", "text/javascript");
      script.setAttribute("src", "//static.chartbeat.com/js/chartbeat.js");
      document.body.appendChild(script);

      setChartbeatScriptLoaded(true);
    }
  }, []);

  const updateGTM = () => {
    if (!gTMScriptExecuted) {
      setGTMScriptExecuted(true);
    }
  };
  const executeScript = () => {
    // console.log("event executed");
    if (!loginScriptExecuted) {
      // console.log("login script exec sv--->");
      setLoginScriptExecuted(true);
      // const ENVURL = REMIX_API_URL;
      // window.ENVURL = ENVURL;

      const loadScriptlogin = () => {
        return loadScript(
          "__loginScript",
          "https://auth.ndtv.com/w/js/config.js?v=2023-10-27-01&site=entertainment"
        );
        // return loadScript(
        //   "__loginScript",
        //   "https://stage-auth.ndtv.com/w/js/config.js?v=2023-10-27-01&site=beeps&nocss=1"
        // );
      };

      // const loadScriptnotification = () => {
      //   return loadScript("__notificationScript", "/shorts/js/world-fcm.js");
      // };

      // Promise.all([loadScriptlogin(), loadScriptnotification()])
      Promise.all([loadScriptlogin()])
        .then(() => {
          const logTriggerElements =
            document.querySelectorAll(".__log_trigger");
          logTriggerElements.forEach((element) => {
            // element.addEventListener("click", function () {
            //   if (!parent_c_islogin()) {
            //     let __rurl = window.location.href;
            //     window.location.href =
            //       "https://auth.ndtv.com/w/sso.html?siteurl=" +
            //       encodeURIComponent(__rurl);
            //     // console.log("Hi Krishna",__rurl,"vahsjv:",encodeURIComponent(__rurl))
            //     // alert("Hi from beeps")
            //   } else {
            //     const toggleClass = element.getAttribute("data-class");
            //     document.body.classList.toggle(toggleClass);
            //   }
            // });
          });

          const overlaySideNav = document.querySelector(".overlay__side-nav");
          const logSdCls = document.querySelector(".LogSd-cls");
          overlaySideNav?.addEventListener("click", removeJsSideNavClass);
          logSdCls?.addEventListener("click", removeJsSideNavClass);

          function removeJsSideNavClass() {
            document.body.classList.remove("js_sid-nav-right");
          }
        })
        .catch((error) => {
          console.log("Error loading scripts:", error);
        });
    }
  };
  const params = useParams();
  const setSilent = useStore((state) => state.setSilent);
  const setTapToPlay = useStore((state) => state.setTapToPlay);
  let forceMuted = false;

  function checkAutoplay(videoElement: any) {
    return new Promise<void>((resolve, reject) => {
      // Try to autoplay with sound
      console.log("trying autoplay with sound");
      videoElement
        .play()
        ?.then(() => {
          if (!videoElement.paused) {
            if (forceMuted) {
              setSilent(true);
            } else {
              setSilent(false);
            }
          }
          resolve();
        })
        .catch(() => {
          // try to autoplay in muted mode
          console.log("trying autoplay muted");
          videoElement.muted = true;
          videoElement
            .play()
            .then(() => {
              console.log("trying autoplay muted twice ");
              if (!videoElement.paused) {
                setSilent(true);
              }
              resolve();
            })
            .catch(() => {
              console.log("click button to play video, autoplay not allowed");
              setSilent(true);
              // setTapToPlay(true);
              resolve();
            });
        });
    });
  }

  useEffect(() => {
    const video_dummy = document.getElementById(
      "dummy_vid"
    ) as HTMLVideoElement;

    if (video_dummy) {
      video_dummy.volume = 0.1;
      const timer = setTimeout(() => {
        checkAutoplay(video_dummy).then(() => {
          video_dummy.remove();
        });
      }, 10);

      return () => {
        clearTimeout(timer);
      };
    }
  }, []);

  useEffect(() => {
    function getParams(url: any) {
      var regex = /[#&]([^=#]+)=([^&#]*)/g,
        params = {},
        match;
      while ((match = regex.exec(url))) {
        params[match[1]] = match[2];
      }
      return params;
    }
    let __l_getParams = getParams(window.location.href);
    if (__l_getParams["action"] != "") {
      if (__l_getParams["action"] == "add") {
        let kn = __l_getParams["kn"];
        let tokens = JSON.parse(window.atob(kn));
        for (let x in tokens) {
          localStorage.setItem(x, tokens[x]);
        }
        window.location.href = window.location.href.split("#")[0];
      }
    }
  }, []);

  useEffect(() => {
    const updateHeight = () => {
      const ht = window.innerHeight;
      const svVertical2 = document.querySelector(".BepSl_cn");
      svVertical2.style.height = `${ht - 71}px`;

      if (window.innerWidth <= 560) {
        svVertical2.style.height = `${ht}px`;
      }
      // console.log("updateHeight", svVertical2.style.height);
    };

    if (window.innerWidth <= 767) {
      updateHeight();
      window.addEventListener("resize", updateHeight, true);
    }

    return () => {
      window.removeEventListener("resize", updateHeight, true);
    };
  }, []);
  useEffect(() => {
    console.log("environment:", APP_ENV);
    envStore.setBasePath(REMIX_BASEPATH);
    // envStore.setClientUrl(REMIX_API_URL);
  }, [REMIX_BASEPATH, APP_ENV]);

  useEffect(() => {
    if (GTM_ID?.length && gTMScriptExecuted) {
      const tagManagerArgs = { gtmId: GTM_ID };
      TagManager.initialize(tagManagerArgs);
    }

    document.addEventListener("click", updateGTM);
    document.addEventListener("mousemove", updateGTM);

    return () => {
      document.removeEventListener("click", updateGTM);
      document.removeEventListener("mousemove", updateGTM);
    };
  }, [GTM_ID, gTMScriptExecuted]);

  const loadScript = (id: any, src: any) => {
    return new Promise<void>((resolve, reject) => {
      if (document.getElementById(id)) {
        resolve();
        return;
      }

      const script = document.createElement("script");
      script.id = id;
      script.src = src;
      script.async = true;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  };
  // useEffect(() => {
  //   if (loginScriptExecuted) return;
  //   executeScript();
  //   // document.addEventListener("click", executeScript);
  //   // document.addEventListener("mousemove", executeScript);
  //   // document.addEventListener("touchstart", executeScript);
  //   // document.addEventListener("touchmove", executeScript);

  //   // return () => {
  //   //   document.removeEventListener("click", executeScript);
  //   //   document.removeEventListener("mousemove", executeScript);
  //   //   document.removeEventListener("touchstart", executeScript);
  //   //   document.removeEventListener("touchmove", executeScript);
  //   // };
  // }, [loginScriptExecuted]);

  useEffect(() => {
    register();
  }, []);
  useEffect(() => {
    window.googletag = window.googletag || { cmd: [] };
  }, []);

  return (
    <>
      <SvgIcons />
      {/* <div className="__nlogin" id="__nlogin"></div> */}
      <video
        id="dummy_vid"
        style={{
          height: "1px",
          width: "1px",
          visibility: "hidden",
          opacity: 0,
          position: "fixed",
          zIndex: -1,
        }}
        // src="https://ndtvod.pc.cdn.bitgravity.com/23372/ndtv/blackvideo.mp4"
        src="https://ndtvod.pc.cdn.bitgravity.com/23372/ndtv/mainpuridriver_144406.mp4"
        playsInline
        muted={false}
      ></video>
      {/* <div id="___ndtvpushdiv" className="npop_wrp t-center"></div> */}
      <Header />
      {/* {!isMobile ? <SideNavigation /> : null} */}
      <SideNavigation
        REMIX_DOMAIN_ENG={REMIX_DOMAIN_ENG}
        REMIX_DOMAIN_HINDI={REMIX_DOMAIN_HINDI}
      />
      <Login />
      {/* <LanguageSwitch /> */}
      <Suspense fallback={<>Loading...</>}>
        <MoreSwipe />
      </Suspense>
      <CategoryBoxWap />
      {/* <VideoBoxWap /> */}
      <div>
        {/*====== Back to top ======*/}
        <div className="back-to-top">
          <svg className="vj_icn vj_arrow-up">
            <use xlinkHref="#vj_arrow-up" />
          </svg>
        </div>
      </div>
      {/*======[ Side nav Overlay ]======*/}
      <span
        className="overlay__side-nav"
        onClick={() => {
          setSidenavtoggle(false);
          setLoginPanel(false);
        }}
      ></span>
    </>
  );
}

export function ErrorBoundary() {
  const error = useRouteError() as any;
  console.log("error is", error);

  if (isRouteErrorResponse(error)) {
    return (
      <>
        <Layout>
          <SvgIcons />
          <div className="vjl-cntr_full h-100">
            <div className="vjl-row h-100">
              <div className="VdPg-Col_Two VdPg-Col_P0 BepSlCol">
                <MainNavigation status={error.status} />
                <ErrorPage status={error.status} text={error.statusText} />
                {/* <ErrorPage  /> */}
              </div>
            </div>
          </div>
          <SideNavigation />
          <Login />
        </Layout>
      </>
    );
  }

  return (
    <>
      <Layout>
        <SvgIcons />
        <div className="vjl-cntr_full h-100">
          <div className="vjl-row h-100">
            <div className="VdPg-Col_Two VdPg-Col_P0 BepSlCol">
              <MainNavigation status={error} />
              {/* <ErrorPage status={error.status} text={error.statusText} /> */}
              <ErrorPage />
            </div>
          </div>
        </div>
        <SideNavigation />
        <Login />
      </Layout>
    </>
  );
}
