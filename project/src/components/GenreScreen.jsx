"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { useState } from "react";

export default function GenreScreen({ className, id, onNext, onSelect }) {
  const [swiper, setSwiper] = useState(null);
  function getImageValue() {
    const activeIndex = swiper.activeIndex;
    const selectedImage = images[activeIndex];
    onSelect("genre", selectedImage.answer);
  }

  const images = [
    { url: "/genre/romance.png", answer: ["warm", "intimate", "emotional"] },
    { url: "/genre/comedy.png", answer: ["fun", "homurous", "playful"] },
    { url: "/genre/romance.png", answer: ["warm", "intimate", "emotional"] },
    { url: "/genre/comedy.png", answer: ["fun", "homurous", "playful"] },
    { url: "/genre/romance.png", answer: ["warm", "intimate", "emotional"] },
    { url: "/genre/comedy.png", answer: ["fun", "homurous", "playful"] },
  ];

  return (
    <div
      id={id}
      className={`absolute bottom-0 left-0 h-screen w-screen bg-[#2D9B40] flex flex-col pt-16 ${className}`}
    >
      {/* header */}
      <div className="px-5">
        <div className="py-5 flex flex-row justify-between">
          <h1 className="text-white text-m font-bold"> Logo </h1>
          <img src="/4dot.svg" />
        </div>

        {/* question */}
        <div className="pt-9">
          <h1 className="text-[#D2F9FF] text-4xl font-bold"> If your life </h1>
          <h1 className="text-[#D2F9FF] text-4xl font-bold"> were a movie, </h1>
        </div>

        {/* 2nd paragraph */}
        <div className="pt-5">
          <h1 className="text-[#D2F9FF] text-3xl font-bold text-right">
            {" "}
            What{" "}
          </h1>
          <h1 className="covered-by-your-grace-regular pt-3 text-[#DBFC3B] text-7xl font-bold text-right">
            {" "}
            GENRE{" "}
          </h1>
          <h1 className="text-[#D2F9FF] text-3xl font-bold text-right">
            {" "}
            would it belong to?{" "}
          </h1>
        </div>
      </div>
      {/* swiper */}
      <Swiper
        onSwiper={setSwiper}
        onSlideChange={() => getImageValue()}
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
        className="mySwiper h-full !w-full !pt-10"
      >
        {images.map((image, i) => (
          <SwiperSlide key={`slide-${i}`}>
            <img className="h-full w-full" src={image.url} />
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
