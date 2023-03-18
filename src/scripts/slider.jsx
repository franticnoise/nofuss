import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper";

let imgClass = "w-full h-auto scale-100 hover:scale-105 transition duration-[1s] rounded-xl drop-shadow-xl";
export default function MySwiper() {
  return (
    <Swiper
    navigation={true} modules={[Navigation, Pagination]} className="mySwiper rounded-xl">
      <SwiperSlide><img src="starbeignsbanner.jpg" alt="Star Beings 3" className={imgClass}></img></SwiperSlide>
      <SwiperSlide><img src="ruminativebanner.jpg" alt="Frantic Noise - Ruminative" className={imgClass}></img></SwiperSlide>
      <SwiperSlide><img src="kintsugibanner.jpg" alt="Zombie Scream - Kintsugi" className={imgClass}></img></SwiperSlide>
      <SwiperSlide><img src="maaasibanner.jpg" alt="Keluk - Maaasi" className={imgClass}></img></SwiperSlide>
      <SwiperSlide><img src="organicbanner.jpg" alt="Zombie Scream - Organic Single" className={imgClass}></img></SwiperSlide>
      <SwiperSlide><img src="twentytwobanner.jpg" alt="K-Freq - Twenty Two" className={imgClass}></img></SwiperSlide>
      <SwiperSlide><img src="higherpowerbanner.jpg" alt="Nammah Ohm - Higher Power" className={imgClass}></img></SwiperSlide>
      <SwiperSlide><img src="harmonicbanner.jpg" alt="Zombie Scream - Harmonic Mutation" className={imgClass}></img></SwiperSlide>
      
    </Swiper>
  );
};