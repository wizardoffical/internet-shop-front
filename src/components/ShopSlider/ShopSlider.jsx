import React from "react";
import "./ShopSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import img1 from "../../assets/img/img12.png";
import img2 from "../../assets/img/img2.jpg";
import img3 from "../../assets/img/img3.jpg";
import img4 from "../../assets/img/img4.jpg";

const ShopSlider = () => {
  return (
    <div className="ShopSlider">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, EffectFade]}
        effect="fade"
        speed={800}
      >
        {[1].map((i, el) => {
          return (
            <>
              <SwiperSlide>
                <img src={img1} alt="" />
                {el}
              </SwiperSlide>
              <SwiperSlide>
                <img src={img2} alt="" />
                {el}
              </SwiperSlide>
              <SwiperSlide>
                <img src={img3} alt="" />
                {el}
              </SwiperSlide>
              <SwiperSlide>
                <img src={img4} alt="" />
                {el}
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ShopSlider;
