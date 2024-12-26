import React, { useEffect, useState } from "react";
import useStore from "~/stores/utilstore";
import { CATEGORY_LIST, CATEGORY_LIST_HINDI } from "./CategoryName";
import { Link } from "@remix-run/react";
function Footer() {
  const categoryToggle = useStore((state) => state.categoryToggle);
  const setCategoryToggle = useStore((state) => state.setCategoryToggle);

  const setCategoryText = useStore((state) => state.setCategoryText);
  const categoryText = useStore((state) => state.categoryText);
  const [engMenu, setEngMenu] = useState(true);
  const categoryMenu = CATEGORY_LIST();
  const categoryMenuHindi = CATEGORY_LIST_HINDI();
  // console.log("category list:",CATEGORY_LIST())
  // console.log("category list Hindi:",CATEGORY_LIST_HINDI())
  // useEffect(() => {
  //   if (categoryToggle == true) {
  //     document.body.classList.add("Js-BepDrp_ovr");
  //   } else {
  //     document.body.classList.remove("Js-BepDrp_ovr");
  //   }
  // }, [categoryToggle]);
  useEffect(() => {
    const domain = window.location.hostname;
    if (domain.endsWith(".app")) {
      setCategoryText("Select Other Categories");
      setEngMenu(true);
    } else if (domain.endsWith(".in")) {
      setCategoryText("कैटेगरी चुने");
      setEngMenu(false);
    } else {
      setCategoryText("Select Other Categories");
      setEngMenu(true);
    }
  }, []);
  return (
    <>
      <div
        className="BepDrp_ovrly"
        onClick={() => {
          setCategoryToggle(false);
        }}
      />
      <div className="BepBtm_cn">
        <div className="BepBtm_wr">
          {/*====== Bottom Sticky Nav Widget ======*/}
          <div className="BepDrp_cn">
            <div
              className="BepDrp_cls"
              onClick={() => {
                setCategoryToggle(false);
              }}
            >
              <svg className="vj_icn vj_close">
                <use xlinkHref="#vj_close" />
              </svg>
            </div>
            <div className="BepDrp_wr">
              <div className="BepDrp_rw">
                <div className="BepDrp_col BepDrp_col9">
                  <div className="BepDrp_tl-lk">
                    <a className="BepDrp_tl" href="#">
                      {/* Choose the News Category */}
                      {categoryText}
                    </a>
                  </div>
                  <div className="BepDrpNv_ul hr-scroll">
                    {/* <div className="BepDrpNv_li-lk">
                      <a className="BepDrpNv_li" href="#">
                        <div className="BepDrpNv_tx">Education</div>
                      </a>
                    </div> */}
                    {engMenu
                      ? categoryMenu.map((category) => (
                          <div
                            className="BepDrpNv_li-lk"
                            key={category.title}
                            onClick={() => {
                              setCategoryToggle(false);
                            }}
                          >
                            <a className="BepDrpNv_li" href={category.link}>
                              <div className="BepDrpNv_tx">
                                {category.title}
                              </div>
                            </a>
                          </div>
                        ))
                      : categoryMenuHindi.map((category) => (
                          <div
                            className="BepDrpNv_li-lk"
                            key={category.title}
                            onClick={() => {
                              setCategoryToggle(false);
                            }}
                          >
                            <a className="BepDrpNv_li" href={category.link}>
                              <div className="BepDrpNv_tx">
                                {category.title}
                              </div>
                            </a>
                          </div>
                        ))}
                    {/* {categoryList.map((category) => (
                      <div
                        className="BepDrpNv_li-lk"
                        key={category.title}
                        onClick={() => {
                          setCategoryToggle(false);
                        }}
                      >
                        <Link className="BepDrpNv_li" to={category.link}>
                          <div className="BepDrpNv_tx">{category.title}</div>
                        </Link>
                      </div>
                    ))} */}
                    {/* {CATEGORY_LIST().map((category) => (
                      <div className="BepDrpNv_li-lk" key={category.title} onClick={()=>{
                        setCategoryToggle(false)
                      }}>
                        <Link className="BepDrpNv_li" to={category.link}>
                          <div className="BepDrpNv_tx">{category.title}</div>
                        </Link>
                      </div>
                    ))} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="BepBtmNv_cn">
            <div className="BepBtmNv_wr">
              <div
                className="BepBtmNv_Ctgr-lk dis_none"
                onClick={() => {
                  setCategoryToggle(!categoryToggle);
                }}
              >
                <div className="BepBtmNv_Ctgr">
                  <div className="BepBtmNv_Ctgr-icn">
                    <svg className="vj_icn vj_category">
                      <use xlinkHref="#vj_category" />
                    </svg>
                  </div>
                  Category
                  <div className="BepBtmNv_Arw-icn">
                    <svg className="m-nv_drp-icn vj_icn vj_arrow-up">
                      <use xlinkHref="#vj_arrow-up" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="BepBtmNv_ul-wr">
                <ul className="BepBtmNv_ul">
                  <li className="BepBtmNv_li">
                    <a
                      href="#"
                      className="swiper-button-prev BepNv_prv BepBtmNv_lk"
                    >
                      <svg className="vj_icn vj_arrow-up BepBtmNv_svg">
                        <use xlinkHref="#vj_arrow-up" />
                      </svg>
                    </a>
                  </li>
                  <li className="BepBtmNv_li">
                    <a
                      href="#"
                      className="swiper-button-next BepNv_nxt BepBtmNv_lk"
                    >
                      <svg className="vj_icn vj_arrow-down BepBtmNv_svg">
                        <use xlinkHref="#vj_arrow-down" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default Footer;
