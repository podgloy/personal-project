"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function GenreScreen({ className, id, onBack, onNext }) {
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
      id={id}
      className={`absolute bottom-0 left-0 h-screen w-screen bg-zinc-900 flex flex-col pt-16 ${className}`}
    >
      {/* header */}
      <div className="px-5">
        <div className="py-5 flex flex-row justify-between">
          <h1 className="text-white text-m font-bold"> Logo </h1>
          <img src="/4dot.svg" />
        </div>

        {/* question */}
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
          <h1 className="covered-by-your-grace-regular pt-3 text-[#DBFC3B] text-7xl font-bold text-right">
            {" "}
            GENRE{" "}
          </h1>
          <h1 className="text-white opacity-60 text-3xl font-bold text-right">
            {" "}
            would it belong to?{" "}
          </h1>
        </div>
      </div>

      {/* swiper */}
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
            <img className="h-full w-full" src={image} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* button */}
      <div className="absolute bottom-8 right-0">
        <button onClick={onNext} className="p-5 flex space-x-3 items-center">
          <span className="font-bold text-white"> next </span>
          <img className="w-8 " src="/arrow2.svg" />
        </button>
      </div>
    </div>
  );
}
