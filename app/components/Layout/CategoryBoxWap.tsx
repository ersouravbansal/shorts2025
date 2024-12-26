import React, { useEffect } from "react";
import { CATEGORY_LIST, CATEGORY_LIST_HINDI } from "./CategoryName";
import { Link } from "@remix-run/react";
import useStore from "~/stores/utilstore";
function CategoryBoxWap() {
  const setCategoryWapToggle = useStore((state) => state.setCategoryWapToggle);
  const setIsVideoOverlayVisible = useStore(
    (state) => state.setIsVideoOverlayVisible
  );
  const categoryText = useStore((state) => state.categoryText);
  const categoryMenu = CATEGORY_LIST();
  const categoryMenuHindi = CATEGORY_LIST_HINDI();
  useEffect(() => {
    if (categoryText == "Select Other Categories") {
      // console.log("hello world");
    } else if (categoryText == "कैटेगरी चुने") {
      // console.log("hello world hindi");
    }
  }, []);
  return (
    <>
      <div className="VdElCtgr_wdg">
        <div
          className="VdElCtgr_ovrly"
          onClick={(e) => {
            e.stopPropagation();
            setCategoryWapToggle(false);
            setIsVideoOverlayVisible(false);
          }}
        />
        <div className="VdElCtgr_wr ">
          <div className="VdElCtgr_cn">
            {/* <div class=""> */}
            <div className="BepDrp_rw">
              <div className="BepDrp_col">
                <div className="BepDrp_tl-lk">
                  <a className="BepDrp_tl" href="#">
                    {/* Choose the News Category */}
                    {categoryText}
                  </a>
                  <div
                    className="VdElCtgr_cls"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCategoryWapToggle(false);
                      setIsVideoOverlayVisible(false);
                    }}
                  >
                    <svg className="vj_icn vj_close">
                      <use xlinkHref="#vj_close" />
                    </svg>
                  </div>
                </div>
                <div className="BepDrpNv_ul BepDrpNv_ul-mob hr-scroll">
                  {/* <div className="BepDrpNv_li-lk">
                    <a className="BepDrpNv_li" href="#">
                      <div className="BepDrpNv_tx">Education</div>
                    </a>
                  </div> */}
                  {categoryText == "कैटेगरी चुने"
                    ? CATEGORY_LIST_HINDI().map((category) => (
                        <div
                          className="BepDrpNv_li-lk"
                          key={category.title}
                          onClick={() => {
                            setCategoryWapToggle(false);
                          }}
                        >
                          <Link className="BepDrpNv_li" to={category.link}>
                            <div className="BepDrpNv_tx">{category.title}</div>
                          </Link>
                        </div>
                      ))
                    : CATEGORY_LIST().map((category) => (
                        <div
                          className="BepDrpNv_li-lk"
                          key={category.title}
                          onClick={() => {
                            setCategoryWapToggle(false);
                          }}
                        >
                          <a className="BepDrpNv_li" href={category.link}>
                            <div className="BepDrpNv_tx">{category.title}</div>
                          </a>
                        </div>
                      ))}
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

export default CategoryBoxWap;
