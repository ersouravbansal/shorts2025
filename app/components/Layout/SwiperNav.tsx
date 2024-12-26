import React from "react";

function SwiperNav() {
  return (
    <>
        <div className="swiper-button-prev BepNv_prv BepNv_prv1">
          <svg className="vj_icn vj_arrow-up BepBtmNv_svg">
            <use xlinkHref="#vj_arrow-up" />
          </svg>
        </div>
        <div className="swiper-button-next BepNv_nxt BepNv_nxt1">
          <svg className="vj_icn vj_arrow-down BepBtmNv_svg">
            <use xlinkHref="#vj_arrow-down" />
          </svg>
        </div>
    </>
  );
}

export default SwiperNav;
