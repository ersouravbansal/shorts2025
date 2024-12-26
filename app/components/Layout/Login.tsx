import React from "react";
import useStore from "~/stores/utilstore";
const Login = () => {
  const setSidenavtoggle = useStore((state) => state.setSidenavtoggle);
  const setLoginPanel=useStore((state) => state.setLoginPanel);
  return (
    <>
      {/*======[ Side Login ]======*/}
      <div className="LogSd_rhs LogBeep_Wap">
        <div className="LogSd_cont">
          <div className="LogSd_wr">
            {/* close */}
            <span
              className="LogSd-cls"
              onClick={(e) => {
                e.preventDefault();
                setSidenavtoggle(false);
                setLoginPanel(false);
              }}
            >
              <svg className="vj_icn vj_close">
                <use xlinkHref="#vj_close" />
              </svg>
            </span>
            <div className="LogSd_cn">
              <div className="LogSd_cn-wr">
                {/* Tabbing */}
                {/* <div className="LogSd_tb-wr">
                  <ul className="LogSd_tb">
                    <li className="LogSd_tb-lnk LogSd_tb-lnk-act" data-tab={1}>
                      Login
                    </li>
                  </ul>
                </div> */}
                {/* Tabbing Content*/}
                <div className="LogSd_tb-cnt-wr">
                  <div id="LogSd-1" className="LogSd_tb-cnt LogSd_tb-lnk-act">
                    {/* Common Content will start here */}
                    <div className="__nlogin" id="__nlogin"></div>
                    {/* End Common Content will here */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
            <symbol id="vj_eye" viewBox="0 0 32 32">
              <path d="M16 28c-10 0-15.6-10.933-15.867-11.467-0.133-0.4-0.133-0.8 0-1.2 0.267-0.4 5.867-11.333 15.867-11.333s15.6 10.933 15.867 11.467c0.133 0.4 0.133 0.8 0 1.2-0.267 0.4-5.867 11.333-15.867 11.333zM2.8 16c1.2 2.133 6 9.333 13.2 9.333s11.867-7.2 13.2-9.333c-1.2-2.133-6-9.333-13.2-9.333s-11.867 7.2-13.2 9.333z"></path>
              <path d="M16 21.333c-2.933 0-5.333-2.4-5.333-5.333s2.4-5.333 5.333-5.333c2.933 0 5.333 2.4 5.333 5.333s-2.4 5.333-5.333 5.333zM16 13.333c-1.467 0-2.667 1.2-2.667 2.667s1.2 2.667 2.667 2.667c1.467 0 2.667-1.2 2.667-2.667s-1.2-2.667-2.667-2.667z"></path>
            </symbol>
            <symbol id="vj_eye-off" viewBox="0 0 32 32">
              <path d="M16 28c-10 0-15.6-10.933-15.867-11.467-0.133-0.4-0.133-0.8 0-1.2 1.733-3.2 4.133-6 7.2-8.267 0.533-0.533 1.333-0.4 1.867 0.267 0.4 0.533 0.4 1.467-0.267 1.867-2.533 1.867-4.533 4.133-6.133 6.8 1.2 2.133 6 9.333 13.2 9.333 2.533 0 5.067-0.933 7.067-2.533 0.533-0.4 1.467-0.267 1.867 0.267s0.267 1.467-0.267 1.867c-2.4 2-5.467 3.067-8.667 3.067zM27.733 21.6c-0.267 0-0.667-0.133-0.8-0.267-0.533-0.533-0.667-1.333-0.133-1.867 0.933-1.067 1.733-2.133 2.4-3.333-1.2-2.133-6-9.333-13.2-9.333-0.8 0-1.733 0.133-2.533 0.267-0.667 0-1.333-0.4-1.6-1.067-0.133-0.8 0.267-1.467 1.067-1.6 0.933-0.267 2-0.4 3.067-0.4 10 0 15.6 10.933 15.867 11.467 0.133 0.4 0.133 0.8 0 1.2-0.8 1.6-1.867 3.067-3.067 4.533-0.267 0.267-0.667 0.4-1.067 0.4zM15.867 21.467c-1.333 0-2.667-0.533-3.6-1.467-1.067-0.933-1.6-2.267-1.733-3.733 0-1.467 0.4-2.8 1.467-3.867 0.133-0.133 0.133-0.133 0.267-0.267 0.533-0.533 1.333-0.533 1.867 0s0.533 1.333 0 1.867c0 0-0.133 0.133-0.133 0.133-0.533 0.533-0.8 1.2-0.667 1.867 0 0.667 0.267 1.333 0.8 1.867s1.2 0.8 1.867 0.667c0.667 0 1.333-0.267 1.867-0.8s1.333-0.533 1.867 0c0.533 0.533 0.533 1.333 0 1.867-0.933 1.067-2.267 1.6-3.733 1.733 0 0.133 0 0.133-0.133 0.133z"></path>
              <path d="M30.667 32c-0.4 0-0.667-0.133-0.933-0.4l-29.333-29.333c-0.533-0.533-0.533-1.333 0-1.867s1.333-0.533 1.867 0l29.333 29.333c0.533 0.533 0.533 1.333 0 1.867-0.267 0.267-0.533 0.4-0.933 0.4z"></path>
            </symbol>
            {/* vj_close */}
            <symbol id="vj_close" viewBox="0 0 32 32">
              <path d="M19.625 16l7.938-7.944c1-1 1-2.625 0-3.625-0.488-0.487-1.131-0.75-1.813-0.75s-1.325 0.269-1.813 0.75l-7.938 7.944-7.944-7.938c-1-1-2.625-1-3.625 0s-1 2.625 0 3.625l7.944 7.938-7.938 7.944c-0.487 0.488-0.75 1.131-0.75 1.813s0.269 1.325 0.75 1.813c0.5 0.5 1.156 0.75 1.813 0.75s1.313-0.25 1.813-0.75l7.938-7.944 7.944 7.938c1 1 2.625 1 3.625 0 0.994-1 0.994-2.625 0-3.625l-7.944-7.938z"></path>
            </symbol>
            <symbol id="vj_check" viewBox="0 0 32 32">
              <path d="M12 24c-0.4 0-0.667-0.133-0.933-0.4l-6.667-6.667c-0.533-0.533-0.533-1.333 0-1.867s1.333-0.533 1.867 0l5.733 5.733 13.733-13.733c0.533-0.533 1.333-0.533 1.867 0s0.533 1.333 0 1.867l-14.667 14.667c-0.267 0.267-0.533 0.4-0.933 0.4z"></path>
            </symbol>
            <symbol id="vj_smartphone" viewBox="0 0 32 32">
              <path d="M22.667 30.667h-13.333c-2.267 0-4-1.733-4-4v-21.333c0-2.267 1.733-4 4-4h13.333c2.267 0 4 1.733 4 4v21.333c0 2.267-1.733 4-4 4zM9.333 4c-0.8 0-1.333 0.533-1.333 1.333v21.333c0 0.8 0.533 1.333 1.333 1.333h13.333c0.8 0 1.333-0.533 1.333-1.333v-21.333c0-0.8-0.533-1.333-1.333-1.333h-13.333z"></path>
              <path d="M16 25.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333v0c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333z"></path>
            </symbol>
            <symbol id="vj_mail-new" viewBox="0 0 32 32">
              <path d="M26.667 28h-21.333c-2.267 0-4-1.733-4-4v-16c0-2.267 1.733-4 4-4h21.333c2.267 0 4 1.733 4 4v16c0 2.267-1.733 4-4 4zM5.333 6.667c-0.8 0-1.333 0.533-1.333 1.333v16c0 0.8 0.533 1.333 1.333 1.333h21.333c0.8 0 1.333-0.533 1.333-1.333v-16c0-0.8-0.533-1.333-1.333-1.333h-21.333z"></path>
              <path d="M16 18.667c-0.267 0-0.533-0.133-0.8-0.267l-13.333-9.333c-0.533-0.4-0.667-1.2-0.267-1.867 0.4-0.533 1.2-0.667 1.867-0.267l12.533 8.8 12.533-8.8c0.667-0.4 1.467-0.267 1.867 0.267 0.4 0.667 0.267 1.467-0.267 1.867l-13.333 9.333c-0.267 0.133-0.533 0.267-0.8 0.267z"></path>
            </symbol>
            <symbol id="vj_apple-logo" viewBox="0 0 32 32">
              <path d="M29.675 23.475c-0.75 1.675-1.1 2.4-2.075 3.875-1.35 2.050-3.225 4.625-5.575 4.625-2.075 0.025-2.625-1.375-5.45-1.35s-3.425 1.375-5.5 1.35c-2.35-0.025-4.125-2.325-5.475-4.4-3.75-5.75-4.15-12.5-1.825-16.075 1.65-2.525 4.225-4 6.675-4 2.475 0 4.050 1.375 6.1 1.375 2 0 3.2-1.375 6.075-1.375 2.175 0 4.475 1.2 6.125 3.25-5.375 2.95-4.5 10.675 0.925 12.725zM20.45 5.2c1.050-1.35 1.825-3.25 1.55-5.2-1.7 0.125-3.7 1.2-4.875 2.625-1.050 1.3-1.925 3.2-1.6 5.075 1.875 0.050 3.8-1.050 4.925-2.5z"></path>
            </symbol>
            <symbol id="vj_fb-lg" viewBox="0 0 32 32">
              <path d="M23.387 17.863l0.881-5.75h-5.512v-3.731c0-1.575 0.769-3.106 3.238-3.106h2.506v-4.888c0 0-2.275-0.388-4.45-0.388-4.544 0-7.512 2.75-7.512 7.737v4.381h-5.050v5.75h5.050v13.894c1.012 0.156 2.050 0.244 3.106 0.244s2.094-0.081 3.106-0.244v-13.9h4.637z"></path>
            </symbol>
            <symbol id="vj_Google-Lg" viewBox="0 0 31 32">
              <path
                fill="#4285f4"
                style={{ fill: "var(--color1, #4285f4)" }}
                d="M31.365 16.367c0-1.088-0.088-2.181-0.276-3.251h-15.092v6.161h8.642c-0.359 1.987-1.511 3.745-3.198 4.862v3.998h5.156c3.028-2.787 4.768-6.902 4.768-11.77z"
              ></path>
              <path
                fill="#34a853"
                style={{ fill: "var(--color2, #34a853)" }}
                d="M15.997 32c4.315 0 7.954-1.417 10.606-3.863l-5.156-3.998c-1.434 0.976-3.286 1.529-5.444 1.529-4.174 0-7.713-2.816-8.983-6.602h-5.321v4.121c2.716 5.403 8.248 8.813 14.298 8.813z"
              ></path>
              <path
                fill="#fbbc04"
                style={{ fill: "var(--color3, #fbbc04)" }}
                d="M7.014 19.066c-0.67-1.987-0.67-4.139 0-6.126v-4.121h-5.315c-2.269 4.521-2.269 9.848 0 14.369l5.315-4.121z"
              ></path>
              <path
                fill="#ea4335"
                style={{ fill: "var(--color4, #ea4335)" }}
                d="M15.997 6.332c2.281-0.035 4.486 0.823 6.138 2.399l4.568-4.568c-2.893-2.716-6.732-4.209-10.706-4.162-6.050 0-11.582 3.41-14.298 8.819l5.315 4.121c1.264-3.792 4.809-6.608 8.983-6.608z"
              ></path>
            </symbol>
            <symbol id="vj_arrow-down" viewBox="0 0 32 32">
              <title>arrow-down</title>
              <path d="M29.246 7.663l-13.245 13.248-13.245-13.249c-0.631-0.631-1.653-0.631-2.284 0-0.63 0.631-0.63 1.655 0 2.286l14.386 14.391c0.63 0.631 1.653 0.631 2.283 0l14.386-14.391c0.63-0.631 0.63-1.656 0-2.288-0.628-0.628-1.651-0.628-2.281 0.003z"></path>
            </symbol>
            <symbol id="vj_search" viewBox="0 0 32 32">
              <title>search</title>
              <path d="M28.933 27.067l-4.933-4.933c1.6-2 2.667-4.667 2.667-7.467 0-6.667-5.333-12-12-12s-12 5.333-12 12c0 6.667 5.333 12 12 12 2.8 0 5.467-0.933 7.467-2.667l4.933 4.933c0.267 0.267 0.667 0.4 0.933 0.4s0.667-0.133 0.933-0.4c0.533-0.533 0.533-1.333 0-1.867zM5.333 14.667c0-5.2 4.133-9.333 9.333-9.333s9.333 4.133 9.333 9.333c0 2.533-1.067 4.933-2.667 6.533 0 0 0 0 0 0s0 0 0 0c-1.733 1.733-4 2.667-6.533 2.667-5.333 0.133-9.467-4-9.467-9.2z"></path>
            </symbol>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default Login;

// import React from "react";
// import useStore from "~/stores/utilstore";
// const Login = () => {
//   const setSidenavtoggle = useStore((state) => state.setSidenavtoggle);
//   return (
//     <>
//       {/*======[ Side Login ]======*/}
//       <div className="LogSd_rhs">
//         <div className="LogSd_cont">
//           <div className="LogSd_wr">
//             {/* close */}
//             <span
//               className="LogSd-cls"
//               onClick={(e) => {
//                 e.preventDefault();
//                 setSidenavtoggle(false);
//               }}
//             >
//               <svg className="vj_icn vj_close">
//                 <use xlinkHref="#vj_close" />
//               </svg>
//             </span>
//             <div className="LogSd_cn">
//               <div className="LogSd_cn-wr">
//                 {/* Tabbing */}
//                 <div className="LogSd_tb-wr">
//                   <ul className="LogSd_tb">
//                     <li className="LogSd_tb-lnk LogSd_tb-lnk-act" data-tab={1}>
//                       Login.
//                     </li>
//                     <li className="LogSd_tb-lnk" data-tab={2}>
//                       Notifications <span className="WthTp_inf">6</span>
//                     </li>
//                     <li className="LogSd_tb-lnk" data-tab={3}>
//                       Comments
//                     </li>
//                   </ul>
//                 </div>
//                 {/* Tabbing Content*/}
//                 <div className="LogSd_tb-cnt-wr">
//                   <div id="LogSd-1" className="LogSd_tb-cnt LogSd_tb-lnk-act">
//                     {/* Common Content will start here */}
//                     <div className="LogSd_comn-wr">
//                       <div className="LogSd_logo-wr">
//                         <a
//                           className="LogSd_logo"
//                           href=""
//                           onClick={(e) => {
//                             e.preventDefault();
//                           }}
//                           // href="javascript:void(0);"
//                         >
//                           <svg
//                             className="vj_icn vj_logo-ndtv lg"
//                             xmlns="http://www.w3.org/2000/svg"
//                             xmlnsXlink="http://www.w3.org/1999/xlink"
//                             version="1.1"
//                             id="Layer_1"
//                             x="0px"
//                             y="0px"
//                             viewBox="0 0 365 68.9"
//                             style={{ enableBackground: "new 0 0 365 68.9" }}
//                             xmlSpace="preserve"
//                           >
//                             <g id="XMLID_1_">
//                               <path
//                                 id="XMLID_3_"
//                                 className="st0"
//                                 d="M0,0.1c8.4,0,16.8-0.1,25.2,0C35.2,0.7,44,7.4,48.8,16c4.8,9.1,9,18.5,13.9,27.5   c1.6,3.2,4.8,5.4,8.4,5.5C70.9,32.7,71,16.4,71,0c7.4,0.1,14.7,0,22.1,0c0,7.1,0,14.2-0.1,21.4c-5.1,2-9.4,6.5-9.5,12.2   c-0.7,6.2,3.9,11.8,9.5,13.7c0.1,7.2,0,14.3,0.1,21.5c-7.3,0.1-14.7,0-22,0.1c-8.5,0.4-16.9-3.5-22.3-9.9   c-6-7.3-9.1-16.5-13.6-24.6C32.1,28.6,29.9,20,22,19.7c0,16.4-0.1,32.7,0.1,49.1c-7.4,0.1-14.7,0.1-22.1,0C0.1,45.9,0.1,23,0,0.1z"
//                                 style={{ fill: "var(--vj-cl-dr)" }}
//                               />
//                               <path
//                                 id="XMLID_6_"
//                                 className="st0"
//                                 d="M99.6,0.1c62.4,0,124.7-0.2,187.1,0.1c9.3,16.9,18.8,33.7,28,50.6c9.2-16.8,17.7-34,26.8-50.8   c7.8,0.1,15.6-0.1,23.5,0.2c-1.3,1.9-2.6,3.8-3.7,5.8c-11,21-22.1,41.9-33.2,62.8c-8.9,0-17.9,0-26.8,0   c-9.7-17.5-19.6-35-29.2-52.5c-9.8-0.1-19.7,0-29.5,0c0,17.5,0.1,35,0,52.5c-7.1,0-14.1,0-21.2,0c0-17.5,0.1-35,0-52.6   c-10.8,0.1-21.7,0-32.5,0.1c2,7.5,1.8,15.3,1.5,23c-0.3,7.8-2.4,16.2-8.2,21.8c-5.6,5.8-14,7.8-21.8,7.7   c-20.2-0.1-40.4,0.1-60.5-0.1c0.1-7.2,0-14.3,0.1-21.4c4.8-1.9,8.9-5.8,9.4-11.2c1-6.5-3.5-12.6-9.4-14.7   C99.6,14.3,99.8,7.2,99.6,0.1 M121.1,16.5c0.2,12,0.1,23.9,0.1,35.9c12.1,0.2,24.2,0.1,36.2,0.1c4.7,0.2,10.3-2.4,11-7.6   c0.4-6.7,0.3-13.4,0.1-20.1c-0.5-5.4-6.1-8.4-11.1-8.3C145.3,16.3,133.2,16.2,121.1,16.5z"
//                                 style={{ fill: "var(--vj-cl-dr)" }}
//                               />
//                               <path
//                                 id="XMLID_7_"
//                                 className="st1"
//                                 d="M83.5,33.6c0.1-5.7,4.4-10.3,9.5-12.2c2.2-0.2,4.5-0.2,6.7,0c5.9,2.2,10.4,8.2,9.4,14.7   c-0.4,5.3-4.6,9.3-9.4,11.2c-2.2,0.2-4.5,0.2-6.7,0C87.4,45.4,82.8,39.9,83.5,33.6z"
//                                 style={{ fill: "#ee0000" }}
//                               />
//                             </g>
//                           </svg>
//                         </a>
//                       </div>
//                       <div className="LogSd_txt-wr">
//                         <div className="LogSd_txt">
//                           Get access to our features, more personalised to
//                           experience and newsletters.
//                         </div>
//                       </div>
//                       <div className="LogSd_frm">
//                         <div className="LogSd_frm-col">
//                           <div className="LogSd_frm-cn">
//                             <div className="LogSd_icn LogSd_eml-col">
//                               <span className="LogSd_ph-icn">
//                                 <svg className="vj_icn vj_smartphone">
//                                   <use xlinkHref="#vj_smartphone" />
//                                 </svg>
//                               </span>
//                               <span className="LogSd_eml-icn">
//                                 <svg className="vj_icn vj_mail-new">
//                                   <use xlinkHref="#vj_mail-new" />
//                                 </svg>
//                               </span>
//                             </div>
//                             <div className="LogSd_inp">
//                               <div className="LogSd_ph-cnt">
//                                 <div
//                                   className="LogSd_cntry-code"
//                                   id="contry-code"
//                                 >
//                                   {" "}
//                                   +91{" "}
//                                   <svg className="count-icn vj_icn vj_arrow-down">
//                                     <use xlinkHref="#vj_arrow-down" />
//                                   </svg>
//                                 </div>
//                                 <input
//                                   type="text"
//                                   className="LogSd-inp"
//                                   placeholder="Enter mobile or email id"
//                                   id="number"
//                                 />
//                               </div>
//                               <span
//                                 className="vld"
//                                 style={{ xdisplay: "none" }}
//                               >
//                                 <svg className="vj_icn vj_check">
//                                   <use xlinkHref="#vj_check" />
//                                 </svg>
//                               </span>
//                               <span
//                                 className="vld in-vld"
//                                 style={{ display: "none" }}
//                               >
//                                 <svg className=" vj_icn vj_close">
//                                   <use xlinkHref="#vj_close" />
//                                 </svg>
//                               </span>
//                               <div className="LogCty_drop">
//                                 <div className="LogCty-srch">
//                                   <div className="LogCty-srch_cn">
//                                     <input
//                                       placeholder="Select Country"
//                                       autoComplete="off"
//                                       type="text"
//                                       id="usr"
//                                       aria-label="search country"
//                                       className="LogCty-srch_inp"
//                                       auto-id="true"
//                                       defaultValue
//                                     />
//                                     <button
//                                       type="submit"
//                                       className="LogCty-srch_btn"
//                                     >
//                                       <svg className="vj_icn vj_search">
//                                         <use xlinkHref="#vj_search" />
//                                       </svg>
//                                     </button>
//                                     <a
//                                       className="LogCty-srch_cls"
//                                       href=""
//                                       onClick={(e) => {
//                                         e.preventDefault();
//                                       }}
//                                       // href="javascript:void(0);"
//                                     >
//                                       <svg className=" vj_icn vj_close">
//                                         <use xlinkHref="#vj_close" />
//                                       </svg>
//                                     </a>
//                                   </div>
//                                 </div>
//                                 <ul className="LogCty_drop-ul">
//                                   <li className="LogCty_drop-li">
//                                     <p className="contry-nm">Australia</p>
//                                     <span className="contry-cd">+61</span>
//                                   </li>
//                                   <li className="LogCty_drop-li">
//                                     <p className="contry-nm">Bangladesh</p>
//                                     <span className="contry-cd">+880</span>
//                                   </li>
//                                   <li className="LogCty_drop-li">
//                                     <p className="contry-nm">Ethiopia</p>
//                                     <span className="contry-cd">+251</span>
//                                   </li>
//                                   <li className="LogCty_drop-li">
//                                     <p className="contry-nm">France</p>
//                                     <span className="contry-cd">+33</span>
//                                   </li>
//                                   <li className="LogCty_drop-li">
//                                     <p className="contry-nm">Germany</p>
//                                     <span className="contry-cd">+49</span>
//                                   </li>
//                                   <li className="LogCty_drop-li">
//                                     <p className="contry-nm">India</p>
//                                     <span className="contry-cd">+91</span>
//                                   </li>
//                                   <li className="LogCty_drop-li">
//                                     <p className="contry-nm">Israel</p>
//                                     <span className="contry-cd">+972</span>
//                                   </li>
//                                   <li className="LogCty_drop-li">
//                                     <p className="contry-nm">Malaysia</p>
//                                     <span className="contry-cd">+60</span>
//                                   </li>
//                                 </ul>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="LogSd_otp-txt">
//                           We'll send you an OTP to verify.
//                         </div>
//                         <div className="LogSd_btn-wr">
//                           <button className="LogSd_sub-btn l oader" disabled>
//                             <span>Continue</span>
//                             <div className="lds-ellipsis">
//                               <div />
//                               <div />
//                               <div />
//                               <div />
//                             </div>
//                           </button>
//                         </div>
//                         <div className="LogSd_sep">
//                           <span>Or Continue with</span>
//                         </div>
//                         <div className="LogSd_wth">
//                           {/* Login With Gmail */}
//                           <div className="LogSd_wth-cir LogSd_gmail">
//                             <a href="#">
//                               <div className="LogSd_wth-cn">
//                                 <span className="LogSd_sig-icn">
//                                   <svg className="vj_icn vj_Google-Lg">
//                                     <use xlinkHref="#vj_Google-Lg" />
//                                   </svg>
//                                 </span>
//                                 Continue with Google
//                               </div>
//                             </a>
//                           </div>
//                           {/* Login With Apple */}
//                           <div className="LogSd_wth-cir LogSd_apple">
//                             <a href="#">
//                               <div className="LogSd_wth-cn">
//                                 <span className="LogSd_sig-icn">
//                                   <svg className="vj_icn vj_apple-logo">
//                                     <use xlinkHref="#vj_apple-logo" />
//                                   </svg>
//                                 </span>
//                                 Continue with Apple
//                               </div>
//                             </a>
//                           </div>
//                           {/* Login With Facebook */}
//                           <div className="LogSd_wth-cir LogSd_fb">
//                             <a href="#">
//                               <div className="LogSd_wth-cn">
//                                 <span className="LogSd_sig-icn">
//                                   <svg className="vj_icn vj_fb-lg">
//                                     <use xlinkHref="#vj_fb-lg" />
//                                   </svg>
//                                 </span>
//                                 Continue with Facebook
//                               </div>
//                             </a>
//                           </div>
//                         </div>
//                         <div className="LogSd_trm">
//                           By signing in or creating an account, you agree with
//                           NDTV{" "}
//                           <a href="#" className="LogSd_trm-lnk">
//                             Terms &amp; Conditions
//                           </a>{" "}
//                           and{" "}
//                           <a href="#" className="LogSd_trm-lnk">
//                             Privacy Policy.
//                           </a>
//                           <div className="LogSd_nl">
//                             <input
//                               id="one"
//                               type="checkbox"
//                               className="log-nws"
//                               defaultChecked
//                             />
//                             <label htmlFor="one">
//                               <span />
//                               Yes, Subscribe to NDTV Newsletters!
//                             </label>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     {/* End Common Content will here */}
//                   </div>
//                   <div id="LogSd-2" className="LogSd_tb-cnt">
//                     {/* Common Content will start here */}
//                     <div className="LogSd_comn-wr">
//                       <div className="LogSd_logo-wr">
//                         <a
//                           className="LogSd_logo"
//                           href=""
//                           onClick={(e) => {
//                             e.preventDefault();
//                           }}
//                           // href="javascript:void(0);"
//                         >
//                           <svg
//                             className="vj_icn vj_logo-ndtv lg"
//                             xmlns="http://www.w3.org/2000/svg"
//                             xmlnsXlink="http://www.w3.org/1999/xlink"
//                             version="1.1"
//                             id="Layer_1"
//                             x="0px"
//                             y="0px"
//                             viewBox="0 0 365 68.9"
//                             style={{ enableBackground: "new 0 0 365 68.9" }}
//                             xmlSpace="preserve"
//                           >
//                             <g id="XMLID_1_">
//                               <path
//                                 id="XMLID_3_"
//                                 className="st0"
//                                 d="M0,0.1c8.4,0,16.8-0.1,25.2,0C35.2,0.7,44,7.4,48.8,16c4.8,9.1,9,18.5,13.9,27.5   c1.6,3.2,4.8,5.4,8.4,5.5C70.9,32.7,71,16.4,71,0c7.4,0.1,14.7,0,22.1,0c0,7.1,0,14.2-0.1,21.4c-5.1,2-9.4,6.5-9.5,12.2   c-0.7,6.2,3.9,11.8,9.5,13.7c0.1,7.2,0,14.3,0.1,21.5c-7.3,0.1-14.7,0-22,0.1c-8.5,0.4-16.9-3.5-22.3-9.9   c-6-7.3-9.1-16.5-13.6-24.6C32.1,28.6,29.9,20,22,19.7c0,16.4-0.1,32.7,0.1,49.1c-7.4,0.1-14.7,0.1-22.1,0C0.1,45.9,0.1,23,0,0.1z"
//                                 style={{ fill: "var(--vj-cl-dr)" }}
//                               />
//                               <path
//                                 id="XMLID_6_"
//                                 className="st0"
//                                 d="M99.6,0.1c62.4,0,124.7-0.2,187.1,0.1c9.3,16.9,18.8,33.7,28,50.6c9.2-16.8,17.7-34,26.8-50.8   c7.8,0.1,15.6-0.1,23.5,0.2c-1.3,1.9-2.6,3.8-3.7,5.8c-11,21-22.1,41.9-33.2,62.8c-8.9,0-17.9,0-26.8,0   c-9.7-17.5-19.6-35-29.2-52.5c-9.8-0.1-19.7,0-29.5,0c0,17.5,0.1,35,0,52.5c-7.1,0-14.1,0-21.2,0c0-17.5,0.1-35,0-52.6   c-10.8,0.1-21.7,0-32.5,0.1c2,7.5,1.8,15.3,1.5,23c-0.3,7.8-2.4,16.2-8.2,21.8c-5.6,5.8-14,7.8-21.8,7.7   c-20.2-0.1-40.4,0.1-60.5-0.1c0.1-7.2,0-14.3,0.1-21.4c4.8-1.9,8.9-5.8,9.4-11.2c1-6.5-3.5-12.6-9.4-14.7   C99.6,14.3,99.8,7.2,99.6,0.1 M121.1,16.5c0.2,12,0.1,23.9,0.1,35.9c12.1,0.2,24.2,0.1,36.2,0.1c4.7,0.2,10.3-2.4,11-7.6   c0.4-6.7,0.3-13.4,0.1-20.1c-0.5-5.4-6.1-8.4-11.1-8.3C145.3,16.3,133.2,16.2,121.1,16.5z"
//                                 style={{ fill: "var(--vj-cl-dr)" }}
//                               />
//                               <path
//                                 id="XMLID_7_"
//                                 className="st1"
//                                 d="M83.5,33.6c0.1-5.7,4.4-10.3,9.5-12.2c2.2-0.2,4.5-0.2,6.7,0c5.9,2.2,10.4,8.2,9.4,14.7   c-0.4,5.3-4.6,9.3-9.4,11.2c-2.2,0.2-4.5,0.2-6.7,0C87.4,45.4,82.8,39.9,83.5,33.6z"
//                                 style={{ fill: "#ee0000" }}
//                               />
//                             </g>
//                           </svg>
//                         </a>
//                       </div>
//                       <div className="LogSd_txt-wr">
//                         <div className="LogSd_txt">
//                           Get access to our features, more personalised to
//                           experience and newsletters.
//                         </div>
//                       </div>
//                       <div className="LogSd_frm">
//                         <div className="LogSd_frm-col">
//                           <div className="LogSd_frm-lbl">
//                             OTP Verfication send to
//                             <span>XXXXXXX125</span>
//                             <a href="#">Edit</a>
//                           </div>
//                         </div>
//                         <div className="LogSd_otp-vrfy">
//                           <div className="LogSd_otp-col">
//                             {" "}
//                             <input
//                               type="text"
//                               className="LogSd_otp-inp"
//                               placeholder="-"
//                               id="number"
//                             />{" "}
//                           </div>
//                           <div className="LogSd_otp-col">
//                             {" "}
//                             <input
//                               type="text"
//                               className="LogSd_otp-inp"
//                               placeholder="-"
//                               id="number"
//                             />{" "}
//                           </div>
//                           <div className="LogSd_otp-col">
//                             {" "}
//                             <input
//                               type="text"
//                               className="LogSd_otp-inp"
//                               placeholder="-"
//                               id="number"
//                             />{" "}
//                           </div>
//                           <div className="LogSd_otp-col">
//                             {" "}
//                             <input
//                               type="text"
//                               className="LogSd_otp-inp"
//                               placeholder="-"
//                               id="number"
//                             />{" "}
//                           </div>
//                           <div className="LogSd_otp-col">
//                             {" "}
//                             <input
//                               type="text"
//                               className="LogSd_otp-inp"
//                               placeholder="-"
//                               id="number"
//                             />{" "}
//                           </div>
//                           <div className="LogSd_otp-col">
//                             {" "}
//                             <input
//                               type="text"
//                               className="LogSd_otp-inp"
//                               placeholder="-"
//                               id="number"
//                             />{" "}
//                           </div>
//                           <div className="LogSd_otp-col">
//                             <span className="vew-pass">
//                               <svg className="vj_icn vj_eye-off">
//                                 <use xlinkHref="#vj_eye-off" />
//                               </svg>
//                               <svg className="vj_icn vj_eye">
//                                 <use xlinkHref="#vj_eye" />
//                               </svg>
//                             </span>
//                           </div>
//                         </div>
//                         <div className="LogSd_otp-txt">
//                           We'll send you an OTP to verify.
//                         </div>
//                         <div className="LogSd_btn-wr">
//                           <button className="LogSd_sub-btn l oader" disabled>
//                             <span>Continue</span>
//                             <div className="lds-ellipsis">
//                               <div />
//                               <div />
//                               <div />
//                               <div />
//                             </div>
//                           </button>
//                         </div>
//                         <div className="LogSd_sep">
//                           <span>Or Continue with</span>
//                         </div>
//                         <div className="LogSd_wth">
//                           {/* Login With Gmail */}
//                           <div className="LogSd_wth-cir LogSd_gmail">
//                             <a href="#">
//                               <div className="LogSd_wth-cn">
//                                 <span className="LogSd_sig-icn">
//                                   <svg className="vj_icn vj_Google-Lg">
//                                     <use xlinkHref="#vj_Google-Lg" />
//                                   </svg>
//                                 </span>
//                                 Continue with Google
//                               </div>
//                             </a>
//                           </div>
//                           {/* Login With Apple */}
//                           <div className="LogSd_wth-cir LogSd_apple">
//                             <a href="#">
//                               <div className="LogSd_wth-cn">
//                                 <span className="LogSd_sig-icn">
//                                   <svg className="vj_icn vj_apple-logo">
//                                     <use xlinkHref="#vj_apple-logo" />
//                                   </svg>
//                                 </span>
//                                 Continue with Apple
//                               </div>
//                             </a>
//                           </div>
//                           {/* Login With Facebook */}
//                           <div className="LogSd_wth-cir LogSd_fb">
//                             <a href="#">
//                               <div className="LogSd_wth-cn">
//                                 <span className="LogSd_sig-icn">
//                                   <svg className="vj_icn vj_fb-lg">
//                                     <use xlinkHref="#vj_fb-lg" />
//                                   </svg>
//                                 </span>
//                                 Continue with Facebook
//                               </div>
//                             </a>
//                           </div>
//                         </div>
//                         <div className="LogSd_trm">
//                           By signing in or creating an account, you agree with
//                           NDTV{" "}
//                           <a href="#" className="LogSd_trm-lnk">
//                             Terms &amp; Conditions
//                           </a>{" "}
//                           and{" "}
//                           <a href="#" className="LogSd_trm-lnk">
//                             Privacy Policy.
//                           </a>
//                           <div className="LogSd_nl">
//                             <input
//                               id="one"
//                               type="checkbox"
//                               className="log-nws"
//                               defaultChecked
//                             />
//                             <label htmlFor="one">
//                               <span />
//                               Yes, Subscribe to NDTV Newsletters!
//                             </label>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     {/* End Common Content will here */}
//                   </div>
//                   <div id="LogSd-3" className="LogSd_tb-cnt">
//                     {/* Common Content will start here */}
//                     <div className="LogSd_comn-wr">
//                       <div className="LogSdAcc_wdg">
//                         <div className="LogSdAcc_wr">
//                           <div className="LogSdAcc_cn">
//                             <div className="LogSdAcc_eml-wr">
//                               <div className="LogSdAcc_eml">
//                                 <svg className="vj_icn vj_mail-new LogSdAcc_eml-icn">
//                                   <use xlinkHref="#vj_mail-new" />
//                                 </svg>
//                                 <span id="unm">marvin@abc.com</span>
//                               </div>
//                             </div>
//                             <div className="LogSdAcc_mid">
//                               <div className="LogSdAcc_mid-wr">
//                                 <div className="LogSdAcc-ttl">Hello!</div>
//                                 <div className="LogSdAcc_txt">
//                                   Manage your account, explore personalized
//                                   content, save or bookmark stories, discover
//                                   our newsletters and more.
//                                 </div>
//                               </div>
//                               <div className="LogSdAcc_lst-lk-wr">
//                                 <div className="LogSdAcc_lst-ttl">
//                                   Get Support{" "}
//                                 </div>
//                                 <ul className="LogSdAcc_lst-ul">
//                                   <li className="LogSdAcc_lst-li">
//                                     {" "}
//                                     <a
//                                       href="mailto:login-support@ndtv.com"
//                                       className="LogSdAcc_lst-lk"
//                                     >
//                                       Contact Us
//                                     </a>{" "}
//                                   </li>
//                                 </ul>
//                               </div>
//                             </div>
//                             <div className="LogSdAcc_btn-wr">
//                               {" "}
//                               <a
//                                 href=""
//                                 onClick={(e) => {
//                                   e.preventDefault();
//                                 }}
//                                 // href="javascript:void(0);"
//                                 className="_signoutv LogSdAcc_btn"
//                               >
//                                 Log Out
//                               </a>{" "}
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     {/* End Common Content will here */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <svg
//           aria-hidden="true"
//           style={{
//             position: "absolute",
//             width: 0,
//             height: 0,
//             overflow: "hidden",
//           }}
//           version="1.1"
//           xmlns="http://www.w3.org/2000/svg"
//           xmlnsXlink="http://www.w3.org/1999/xlink"
//         >
//           <defs>
//             <symbol id="vj_eye" viewBox="0 0 32 32">
//               <path d="M16 28c-10 0-15.6-10.933-15.867-11.467-0.133-0.4-0.133-0.8 0-1.2 0.267-0.4 5.867-11.333 15.867-11.333s15.6 10.933 15.867 11.467c0.133 0.4 0.133 0.8 0 1.2-0.267 0.4-5.867 11.333-15.867 11.333zM2.8 16c1.2 2.133 6 9.333 13.2 9.333s11.867-7.2 13.2-9.333c-1.2-2.133-6-9.333-13.2-9.333s-11.867 7.2-13.2 9.333z"></path>
//               <path d="M16 21.333c-2.933 0-5.333-2.4-5.333-5.333s2.4-5.333 5.333-5.333c2.933 0 5.333 2.4 5.333 5.333s-2.4 5.333-5.333 5.333zM16 13.333c-1.467 0-2.667 1.2-2.667 2.667s1.2 2.667 2.667 2.667c1.467 0 2.667-1.2 2.667-2.667s-1.2-2.667-2.667-2.667z"></path>
//             </symbol>
//             <symbol id="vj_eye-off" viewBox="0 0 32 32">
//               <path d="M16 28c-10 0-15.6-10.933-15.867-11.467-0.133-0.4-0.133-0.8 0-1.2 1.733-3.2 4.133-6 7.2-8.267 0.533-0.533 1.333-0.4 1.867 0.267 0.4 0.533 0.4 1.467-0.267 1.867-2.533 1.867-4.533 4.133-6.133 6.8 1.2 2.133 6 9.333 13.2 9.333 2.533 0 5.067-0.933 7.067-2.533 0.533-0.4 1.467-0.267 1.867 0.267s0.267 1.467-0.267 1.867c-2.4 2-5.467 3.067-8.667 3.067zM27.733 21.6c-0.267 0-0.667-0.133-0.8-0.267-0.533-0.533-0.667-1.333-0.133-1.867 0.933-1.067 1.733-2.133 2.4-3.333-1.2-2.133-6-9.333-13.2-9.333-0.8 0-1.733 0.133-2.533 0.267-0.667 0-1.333-0.4-1.6-1.067-0.133-0.8 0.267-1.467 1.067-1.6 0.933-0.267 2-0.4 3.067-0.4 10 0 15.6 10.933 15.867 11.467 0.133 0.4 0.133 0.8 0 1.2-0.8 1.6-1.867 3.067-3.067 4.533-0.267 0.267-0.667 0.4-1.067 0.4zM15.867 21.467c-1.333 0-2.667-0.533-3.6-1.467-1.067-0.933-1.6-2.267-1.733-3.733 0-1.467 0.4-2.8 1.467-3.867 0.133-0.133 0.133-0.133 0.267-0.267 0.533-0.533 1.333-0.533 1.867 0s0.533 1.333 0 1.867c0 0-0.133 0.133-0.133 0.133-0.533 0.533-0.8 1.2-0.667 1.867 0 0.667 0.267 1.333 0.8 1.867s1.2 0.8 1.867 0.667c0.667 0 1.333-0.267 1.867-0.8s1.333-0.533 1.867 0c0.533 0.533 0.533 1.333 0 1.867-0.933 1.067-2.267 1.6-3.733 1.733 0 0.133 0 0.133-0.133 0.133z"></path>
//               <path d="M30.667 32c-0.4 0-0.667-0.133-0.933-0.4l-29.333-29.333c-0.533-0.533-0.533-1.333 0-1.867s1.333-0.533 1.867 0l29.333 29.333c0.533 0.533 0.533 1.333 0 1.867-0.267 0.267-0.533 0.4-0.933 0.4z"></path>
//             </symbol>
//             {/* vj_close */}
//             <symbol id="vj_close" viewBox="0 0 32 32">
//               <path d="M19.625 16l7.938-7.944c1-1 1-2.625 0-3.625-0.488-0.487-1.131-0.75-1.813-0.75s-1.325 0.269-1.813 0.75l-7.938 7.944-7.944-7.938c-1-1-2.625-1-3.625 0s-1 2.625 0 3.625l7.944 7.938-7.938 7.944c-0.487 0.488-0.75 1.131-0.75 1.813s0.269 1.325 0.75 1.813c0.5 0.5 1.156 0.75 1.813 0.75s1.313-0.25 1.813-0.75l7.938-7.944 7.944 7.938c1 1 2.625 1 3.625 0 0.994-1 0.994-2.625 0-3.625l-7.944-7.938z"></path>
//             </symbol>
//             <symbol id="vj_check" viewBox="0 0 32 32">
//               <path d="M12 24c-0.4 0-0.667-0.133-0.933-0.4l-6.667-6.667c-0.533-0.533-0.533-1.333 0-1.867s1.333-0.533 1.867 0l5.733 5.733 13.733-13.733c0.533-0.533 1.333-0.533 1.867 0s0.533 1.333 0 1.867l-14.667 14.667c-0.267 0.267-0.533 0.4-0.933 0.4z"></path>
//             </symbol>
//             <symbol id="vj_smartphone" viewBox="0 0 32 32">
//               <path d="M22.667 30.667h-13.333c-2.267 0-4-1.733-4-4v-21.333c0-2.267 1.733-4 4-4h13.333c2.267 0 4 1.733 4 4v21.333c0 2.267-1.733 4-4 4zM9.333 4c-0.8 0-1.333 0.533-1.333 1.333v21.333c0 0.8 0.533 1.333 1.333 1.333h13.333c0.8 0 1.333-0.533 1.333-1.333v-21.333c0-0.8-0.533-1.333-1.333-1.333h-13.333z"></path>
//               <path d="M16 25.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333v0c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333z"></path>
//             </symbol>
//             <symbol id="vj_mail-new" viewBox="0 0 32 32">
//               <path d="M26.667 28h-21.333c-2.267 0-4-1.733-4-4v-16c0-2.267 1.733-4 4-4h21.333c2.267 0 4 1.733 4 4v16c0 2.267-1.733 4-4 4zM5.333 6.667c-0.8 0-1.333 0.533-1.333 1.333v16c0 0.8 0.533 1.333 1.333 1.333h21.333c0.8 0 1.333-0.533 1.333-1.333v-16c0-0.8-0.533-1.333-1.333-1.333h-21.333z"></path>
//               <path d="M16 18.667c-0.267 0-0.533-0.133-0.8-0.267l-13.333-9.333c-0.533-0.4-0.667-1.2-0.267-1.867 0.4-0.533 1.2-0.667 1.867-0.267l12.533 8.8 12.533-8.8c0.667-0.4 1.467-0.267 1.867 0.267 0.4 0.667 0.267 1.467-0.267 1.867l-13.333 9.333c-0.267 0.133-0.533 0.267-0.8 0.267z"></path>
//             </symbol>
//             <symbol id="vj_apple-logo" viewBox="0 0 32 32">
//               <path d="M29.675 23.475c-0.75 1.675-1.1 2.4-2.075 3.875-1.35 2.050-3.225 4.625-5.575 4.625-2.075 0.025-2.625-1.375-5.45-1.35s-3.425 1.375-5.5 1.35c-2.35-0.025-4.125-2.325-5.475-4.4-3.75-5.75-4.15-12.5-1.825-16.075 1.65-2.525 4.225-4 6.675-4 2.475 0 4.050 1.375 6.1 1.375 2 0 3.2-1.375 6.075-1.375 2.175 0 4.475 1.2 6.125 3.25-5.375 2.95-4.5 10.675 0.925 12.725zM20.45 5.2c1.050-1.35 1.825-3.25 1.55-5.2-1.7 0.125-3.7 1.2-4.875 2.625-1.050 1.3-1.925 3.2-1.6 5.075 1.875 0.050 3.8-1.050 4.925-2.5z"></path>
//             </symbol>
//             <symbol id="vj_fb-lg" viewBox="0 0 32 32">
//               <path d="M23.387 17.863l0.881-5.75h-5.512v-3.731c0-1.575 0.769-3.106 3.238-3.106h2.506v-4.888c0 0-2.275-0.388-4.45-0.388-4.544 0-7.512 2.75-7.512 7.737v4.381h-5.050v5.75h5.050v13.894c1.012 0.156 2.050 0.244 3.106 0.244s2.094-0.081 3.106-0.244v-13.9h4.637z"></path>
//             </symbol>
//             <symbol id="vj_Google-Lg" viewBox="0 0 31 32">
//               <path
//                 fill="#4285f4"
//                 style={{ fill: "var(--color1, #4285f4)" }}
//                 d="M31.365 16.367c0-1.088-0.088-2.181-0.276-3.251h-15.092v6.161h8.642c-0.359 1.987-1.511 3.745-3.198 4.862v3.998h5.156c3.028-2.787 4.768-6.902 4.768-11.77z"
//               ></path>
//               <path
//                 fill="#34a853"
//                 style={{ fill: "var(--color2, #34a853)" }}
//                 d="M15.997 32c4.315 0 7.954-1.417 10.606-3.863l-5.156-3.998c-1.434 0.976-3.286 1.529-5.444 1.529-4.174 0-7.713-2.816-8.983-6.602h-5.321v4.121c2.716 5.403 8.248 8.813 14.298 8.813z"
//               ></path>
//               <path
//                 fill="#fbbc04"
//                 style={{ fill: "var(--color3, #fbbc04)" }}
//                 d="M7.014 19.066c-0.67-1.987-0.67-4.139 0-6.126v-4.121h-5.315c-2.269 4.521-2.269 9.848 0 14.369l5.315-4.121z"
//               ></path>
//               <path
//                 fill="#ea4335"
//                 style={{ fill: "var(--color4, #ea4335)" }}
//                 d="M15.997 6.332c2.281-0.035 4.486 0.823 6.138 2.399l4.568-4.568c-2.893-2.716-6.732-4.209-10.706-4.162-6.050 0-11.582 3.41-14.298 8.819l5.315 4.121c1.264-3.792 4.809-6.608 8.983-6.608z"
//               ></path>
//             </symbol>
//             <symbol id="vj_arrow-down" viewBox="0 0 32 32">
//               <title>arrow-down</title>
//               <path d="M29.246 7.663l-13.245 13.248-13.245-13.249c-0.631-0.631-1.653-0.631-2.284 0-0.63 0.631-0.63 1.655 0 2.286l14.386 14.391c0.63 0.631 1.653 0.631 2.283 0l14.386-14.391c0.63-0.631 0.63-1.656 0-2.288-0.628-0.628-1.651-0.628-2.281 0.003z"></path>
//             </symbol>
//             <symbol id="vj_search" viewBox="0 0 32 32">
//               <title>search</title>
//               <path d="M28.933 27.067l-4.933-4.933c1.6-2 2.667-4.667 2.667-7.467 0-6.667-5.333-12-12-12s-12 5.333-12 12c0 6.667 5.333 12 12 12 2.8 0 5.467-0.933 7.467-2.667l4.933 4.933c0.267 0.267 0.667 0.4 0.933 0.4s0.667-0.133 0.933-0.4c0.533-0.533 0.533-1.333 0-1.867zM5.333 14.667c0-5.2 4.133-9.333 9.333-9.333s9.333 4.133 9.333 9.333c0 2.533-1.067 4.933-2.667 6.533 0 0 0 0 0 0s0 0 0 0c-1.733 1.733-4 2.667-6.533 2.667-5.333 0.133-9.467-4-9.467-9.2z"></path>
//             </symbol>
//           </defs>
//         </svg>
//       </div>
//     </>
//   );
// };

// export default Login;
