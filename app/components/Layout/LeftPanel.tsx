import React, { useEffect } from "react";
import { BASEPATH } from "~/constants";
import useStore from "~/stores/utilstore";
// import logo from "~/images/news_beep_logo.svg";
import EnglishLogo from "~/images/NDTV-Shorts-E-DM.png";
import HindiLogo from "~/images/NDTV-Shorts-H-DM.png";
function LeftPanel() {
  const setBeepsDescriptionText = useStore(
    (state) => state.setBeepsDescriptionText
  );
  const beepsDescriptionText = useStore((state) => state.beepsDescriptionText);
  const logoEnglish = useStore((state) => state.logoEnglish);
  const setLogoEnglish = useStore((state) => state.setLogoEnglish);
  useEffect(() => {
    const domain = window.location.hostname;
    console.log("logoEnglish:", logoEnglish, "domain:", domain);
    if (domain.endsWith(".com")) {
      setBeepsDescriptionText(
        "Entertainment, Movies, Lifestyle, Health, Sports, Education, Auto, Food – Explore the  latest viral content on NDTV Shorts."
      );
      setLogoEnglish(true);
    } else if (domain.endsWith(".in")) {
      setBeepsDescriptionText(
        "देश-दुनिया की खबरें होंया फिर मनोरंजन जगतका हाल, लाइफस्‍टाइल टिप्‍सहों या खेल जगतके अपडेट, देखें लेटेस्‍ट NDTV शॉर्ट्स  वीडियो"
      );
      setLogoEnglish(false);
    }
  }, []);
  return (
    <>
      <div className="BepSlCol_lft-cn">
        <div className="BepSlCol_lft-wr">
          <div className="BepSlCol_lgo-lk">
            <a className="ndtv-logo BepHdr_lgo" href={BASEPATH}>
              {/* <img src={logoEnglish ? EnglishLogo : HindiLogo} alt="" /> */}
              {logoEnglish !== null && (
                <img src={logoEnglish ? EnglishLogo : HindiLogo} alt="" />
              )}
            </a>
          </div>
          <div className="BepSlCol_dsp">
            {beepsDescriptionText}
            {/* Done with India trip, Priyanka Chopra flies out of Mumbai with her
            husband Nick Jonas and daughter Malti Marie. */}
          </div>
          <div className="BepSlCol_btn-lk">
            <div className="ani-swp">
              <div className="ani-swp_cnt">
                <div className="ani-swp_wrp">
                  <div className="ani-swp_bx">
                    <div className="ani-swp_bx-cr" />
                    <div className="ani-swp_bx-cr" />
                    <div className="ani-swp_bx-cr" />
                    <div className="ani-swp_bx-cr" />
                  </div>
                </div>
                <div className="ani-swp_cur">
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 47.619 68.23"
                  >
                    <title>noun_692985</title>
                    <path
                      d="M59.773,79.1l0.033-.176c2.062-9.136,9.688-20.832,8.023-31.685-0.45-2.583-.877-3.861-1.383-4.527-0.33-.435-0.807-0.769-2.285-0.769a4.6,4.6,0,0,0-1.063.116L63.041,47.7a1.875,1.875,0,0,1-3.749-.035l0.061-6.554c0.071-2.036-.252-2.656-0.443-2.862-0.169-.181-0.651-0.485-2.388-0.485a2.962,2.962,0,0,0-2.436.915l-0.07,5.843a1.875,1.875,0,1,1-3.749-.035l0.062-6.553c0.071-2.036-.252-2.657-0.443-2.864-0.169-.181-0.653-0.485-2.389-0.485a3.423,3.423,0,0,0-2.054.551l-0.177.17-0.025,9.4a1.875,1.875,0,0,1-3.749-.011L41.554,21.73c0.071-2.042-.25-2.66-0.443-2.869-0.169-.181-0.652-0.485-2.389-0.485a3.225,3.225,0,0,0-2.223.688,2.533,2.533,0,0,0-.654,2.17l0,0.116V54.614a1.875,1.875,0,0,1-3.75,0V47.837l-0.875.232a4.476,4.476,0,0,0-3.115,3.319A10.042,10.042,0,0,0,29.864,58.8c3.487,5.315,8.108,11.265,9.58,18.686l0.251,1.521Z"
                      transform="translate(-24.187 -14.626)"
                      style={{ fill: "var(--vj-cl-lg)" }}
                    />
                    <path
                      d="M61.32,82.856l-23.33-.1a1.875,1.875,0,0,1-1.863-1.759c-0.476-7.733-5.126-13.62-9.4-20.132-2.013-3.068-3.083-6.96-2.266-10.351,0.766-3.185,3.113-5.585,7-6.378l0.64-.087V21.35l-0.011-.659a6.017,6.017,0,0,1,1.865-4.38,6.923,6.923,0,0,1,4.769-1.685c1.871,0,3.817.263,5.136,1.683,1.293,1.391,1.519,3.4,1.445,5.492l-0.026,9.37,0.724-.2a8.546,8.546,0,0,1,1.5-.129,10.564,10.564,0,0,1,2.776.309,4.92,4.92,0,0,1,2.36,1.374,4.7,4.7,0,0,1,.782,1.153L53.7,34.519l1.325-.374a8.535,8.535,0,0,1,1.495-.129,10.564,10.564,0,0,1,2.776.309A4.922,4.922,0,0,1,61.657,35.7a5.227,5.227,0,0,1,1.235,2.486l0.015,0.11,0.288-.049a8.892,8.892,0,0,1,.966-0.052,6.109,6.109,0,0,1,5.272,2.251c1.127,1.485,1.653,3.64,2.1,6.188,1.965,12.813-7.146,26.223-8.345,34.614A1.875,1.875,0,0,1,61.32,82.856ZM59.773,79.1l0.033-.176c2.062-9.136,9.688-20.832,8.023-31.685-0.45-2.583-.877-3.861-1.383-4.527-0.33-.435-0.807-0.769-2.285-0.769a4.6,4.6,0,0,0-1.063.116L63.041,47.7a1.875,1.875,0,0,1-3.749-.035l0.061-6.554c0.071-2.036-.252-2.656-0.443-2.862-0.169-.181-0.651-0.485-2.388-0.485a2.962,2.962,0,0,0-2.436.915l-0.07,5.843a1.875,1.875,0,1,1-3.749-.035l0.062-6.553c0.071-2.036-.252-2.657-0.443-2.864-0.169-.181-0.653-0.485-2.389-0.485a3.423,3.423,0,0,0-2.054.551l-0.177.17-0.025,9.4a1.875,1.875,0,0,1-3.749-.011L41.554,21.73c0.071-2.042-.25-2.66-0.443-2.869-0.169-.181-0.652-0.485-2.389-0.485a3.225,3.225,0,0,0-2.223.688,2.533,2.533,0,0,0-.654,2.17l0,0.116V54.614a1.875,1.875,0,0,1-3.75,0V47.837l-0.875.232a4.476,4.476,0,0,0-3.115,3.319A10.042,10.042,0,0,0,29.864,58.8c3.487,5.315,8.108,11.265,9.58,18.686l0.251,1.521Z"
                      transform="translate(-24.187 -14.626)"
                      style={{ fill: "var(--vj-cl-dr6)" }}
                    />
                  </svg>
                </div>
              </div>
              <span className="ani-swp_txt">Swipe Cards</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftPanel;
