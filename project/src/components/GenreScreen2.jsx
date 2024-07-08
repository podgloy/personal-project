import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function GenreScreen2() {
  const images = [
    "/romance.png",
    "/comedy.png",
    "/romance.png",
    "/comedy.png",
    "/romance.png",
    "/comedy.png",
  ];

  return (
    <div
      id="genre-screen-wrapper2"
      className="h-screen bg-zinc-900 flex flex-col pt-14 z-10 relative"
    >
      <div className="question pl-5 pr-5">
        <div className="p-5 flex flex-row justify-between">
          <h1 className="text-white text-m font-bold"> Logo </h1>
          <img src="/4dot.svg" />
        </div>

        <div className="pt-9">
          <h1 className="text-white opacity-50 text-4xl font-bold">
            {" "}
            If your life{" "}
          </h1>
          <h1 className="text-white opacity-50 text-4xl font-bold">
            {" "}
            were a movie,{" "}
          </h1>
        </div>

        {/* 2nd paragraph */}
        <div className="pt-5">
          <h1 className="text-white opacity-60 text-3xl font-bold text-right">
            {" "}
            What{" "}
          </h1>
          <h1 className="pt-3 text-[#DBFC3B] text-6xl font-bold text-right">
            {" "}
            GENRE{" "}
          </h1>
          <h1 className="text-white opacity-60 text-3xl font-bold text-right">
            {" "}
            would it belong to?{" "}
          </h1>
        </div>
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.4}
        spaceBetween={20}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper h-full w-full !pt-7"
      >
        {images.map((image, i) => (
          <SwiperSlide key={`slide-${i}`}>
            <img className="w-full h-full" src={image} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="p-5 flex flex-row justify-end">
        <span className="font-medium text-white pr-3"> next </span>
        <img className="w-8 " src="/arrow2.svg" />
      </div>
    </div>
  );
}
