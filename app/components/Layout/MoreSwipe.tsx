import React from "react";

import useStore from "~/stores/utilstore";
const MoreSwipe = () => {
  const { cmnt_Title, cmnt_Link, cmnt_VideoId, setCmntInfo } = useStore();
  
  const src1 = `https://social.ndtv.com/static/Comment/Widget/?key=68a2a311a51a713dad2e777d65ec4db4&link=${cmnt_Link}&title=${cmnt_Title}&ctype=video&identifier=video-${cmnt_VideoId}&enableCommentsSubscription=1&ver=1&reply=1&sorted_by=likes&template=slide_new&nodomain=1&fordm=1&dm=1&cssfor=beeps`;
  // const src1 = `https://social.ndtv.com/static/Comment/Widget/?key=ff1cab5239e6ac7906dd7848efba52cd&link=${cmnt_Link}&title=${cmnt_Title}&ctype=video&identifier=video-${cmnt_VideoId}&enableCommentsSubscription=1&ver=1&reply=1&sorted_by=likes&template=slide_new&nodomain=1&fordm=1&dm=1&cssfor=beeps`;
  // const src1 =
  //   "https://social.ndtv.com/static/Comment/Widget/?&amp;key=ff1cab5239e6ac7906dd7848efba52cd&amp;link=https%3A%2F%2Fwww.ndtv.com%2Fvideo%2Fnews%2Fnews%2Fno-one-should-be-allowed-japan-pm-on-ukraine-pm-modi-by-his-side-624953&amp;title=%22No+One+Should+Be+Allowed...%22%3A+Japan+PM+On+Ukraine%2C+PM+Modi+By+His+Side&amp;ctype=video&amp;identifier=video-624953&amp;enableCommentsSubscription=1&amp;ver=1&amp;reply=1&amp;sorted_by=likes&amp;template=slide_new&amp;nodomain=1&amp;fordm=1";
  const encode_Src = src1;
  const setIsVideoOverlayVisible = useStore((state) => state.setIsVideoOverlayVisible);
  return (
    <>
      {/*======[ More info swipe up 1 ]======*/}
      <div className="VdElCht_wdg VdElCht_wdg1">
        <div
          className="VdElCht_over-bg"
          onClick={(e) => {
            setIsVideoOverlayVisible(false)
            $("body").removeClass("VdElCht_on");
          }}
        />
        <div className="VdElCht_wr">
          <div className="VdElCht_cn">
            <div className="VdElCht_tp">
              <div className="VdElCht_tl-wr">
                <div className="VdElCht_tl">Comments</div>
                <div
                  className="VdElCht_cls"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCmntInfo(null, null, null);
                    setIsVideoOverlayVisible(false)
                    $("body").removeClass("VdElCht_on");
                  }}
                >
                  <svg className="vj_icn vj_close">
                    <use xlinkHref="#vj_close" />
                  </svg>
                </div>
              </div>
              {/* <div className="VdElCht_frm">
                <textarea placeholder="Share your thoughts" defaultValue={""} />
              </div> */}
              {/* </div> */}
              {/* <div id="btm-MorInfo" className="VdElCht_btm">
                <span className="VdElCht_btn">Post Comment</span>
              </div> */}
              {/* comments iframe */}
              <iframe
                name="ndtvSocialCommentForm"
                title="ndtvSocialCommentForm"
                id="ndtvSocialCommentFormRhs"
                src={encode_Src}
                // src={`https://social.ndtv.com/static/Comment/Widget/?&amp;key=ff1cab5239e6ac7906dd7848efba52cd&amp;link=${cmnt_Link}&amp;title=${cmnt_Title}&amp;ctype=video&amp;identifier=video-${cmnt_VideoId}&amp;enableCommentsSubscription=1&amp;ver=1&amp;reply=1&amp;sorted_by=likes&amp;template=slide_new&amp;nodomain=1&amp;fordm=1`}
                scrolling="no"
                allowtransparency="true"
                style={{
                  height: "100%",
                  width: "100%",
                }}
                // style={{
                //   border: "medium none",
                //   overflow: "hidden",
                //   width: "425px",
                //   height: "98%",
                // }}
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreSwipe;

