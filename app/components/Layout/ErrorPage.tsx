import { Link } from "@remix-run/react";
import React from "react";
import { BASEPATH } from "~/constants";
import useStore from "~/stores/utilstore";
const ErrorPage = (props?: any) => {
  const errParagraphMessage = useStore((state) => state.errParagraphMessage);
  console.log('in ErrorPage ',props.isVideoAvailable)
  return (
    <>
      <div className="VdPg-Col_Two-a-wr BepSlCol_1">
        {/*==== column one ====*/}
        <div className="VdPg-Col_Two-a BepSlCol_rw">
          {/*====== video ======*/}
          <div className="BepSl_cn">
            <div className="BepSl_wr">
              <div className="BepSl_bg" />
              <div className="BepErr_Cnt">
                {/* Effects */}
                <div className="BepErr_Eff-col">
                  <div className="BepErr_Eff-wr">
                    <svg
                      className="Err-PPr"
                      viewBox="0 0 300 300"
                      width="300px"
                      height="300px"
                      role="img"
                      aria-label=""
                    >
                      <g
                        className="Err-PPr_outline"
                        fill="none"
                        stroke="hsl(0,10%,10%)"
                        strokeWidth={8}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        transform="translate(61,4)"
                      >
                        <g className="Err-PPr_top" transform="translate(0,25)">
                          <polygon
                            className="Err-PPr_shadow"
                            fill="hsl(0,10%,70%)"
                            stroke="none"
                            points="0 148,0 0,137 0,187 50,187 148,155 138,124 148,93 138,62 148,31 138"
                            transform="translate(-12,12)"
                          />
                          <rect
                            className="Err-PPr_tear-fill"
                            fill="hsl(0,0%,100%)"
                            stroke="none"
                            x={0}
                            y={137}
                            width={0}
                            height="23px"
                          />
                          <polygon
                            className="Err-PPr_fill"
                            fill="hsl(0,0%,100%)"
                            stroke="none"
                            points="0 148,0 0,137 0,187 50,187 148,155 138,124 148,93 138,62 148,31 138"
                          />
                          <polygon
                            className="Err-PPr_shadow"
                            fill="hsl(0,10%,70%)"
                            stroke="none"
                            points="137 0,132 55,187 50,142 45"
                          />
                          <polyline points="137 0,142 45,187 50" />
                          <polyline points="0 148,0 0,137 0,187 50,187 148" />
                          <g className="Err-PPr_lines" stroke="hsl(0,10%,70%)">
                            <polyline points="22 88,165 88" />
                            <polyline points="22 110,165 110" />
                            <polyline points="22 132,165 132" />
                          </g>
                          <polyline
                            className="Err-PPr_tear"
                            points="0 148,31 138,62 148,93 138,124 148,155 138,187 148"
                            strokeDasharray="198 198"
                            strokeDashoffset={-198}
                          />
                        </g>
                        <g
                          className="Err-PPr_bottom"
                          transform="translate(0,25)"
                        >
                          <polygon
                            className="Err-PPr_shadow"
                            fill="hsl(0,10%,70%)"
                            stroke="none"
                            points="0 148,31 138,62 148,93 138,124 148,155 138,187 148,187 242,0 242"
                            transform="translate(-12,12)"
                          />
                          <polygon
                            className="Err-PPr_fill"
                            fill="hsl(0,0%,100%)"
                            stroke="none"
                            points="0 148,31 140,62 148,93 138,124 148,155 138,187 148,187 242,0 242"
                          />
                          <polyline points="187 148,187 242,0 242,0 148" />
                          <g className="Err-PPr_lines" stroke="hsl(0,10%,70%)">
                            <polyline points="22 154,165 154" />
                            <polyline points="22 176,165 176" />
                            <polyline points="22 198,94 198" />
                          </g>
                          <polyline
                            className="Err-PPr_tear"
                            points="0 148,31 138,62 148,93 138,124 148,155 138,187 148"
                            strokeDasharray="198 198"
                            strokeDashoffset={-198}
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
                {/* Text */}
                <div className="BepErr_Tx-col">
                  {props.status === 404 ? (
                    <h1 className="BepErr_Tx-ttl BepErr_glitch" data-text={404}>
                      404
                    </h1>
                  ) : null}
                  {/* <h1 className="BepErr_Tx-ttl BepErr_glitch" data-text={404}>
                    404
                  </h1> */}
                  <h2 className="BepErr_Tx-sb-ttl">
                    Whoops!{" "}
                    {props.isVideoAvailable ? (
                      <span className="BepErr_Tx-sb-ttl2">
                        something went wrong
                      </span>
                    ) : null}
                  </h2>
                  {!props.isVideoAvailable ? (
                    <p className="BepErr_Tx-txt">{errParagraphMessage}</p>
                  ) : (
                    <p className="BepErr_Tx-txt">
                      The page you're looking for does not exist...
                    </p>
                  )}
                  <Link to={BASEPATH} className="BepErr_Tx-btn">
                    Back Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
