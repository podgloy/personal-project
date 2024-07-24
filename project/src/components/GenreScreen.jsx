"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { useState, useEffect } from "react";
import SiteLogo from "./SiteLogo";
import FilmOverlay from "./FilmOverlay";

export default function GenreScreen({ className, id, onNext, onSelect }) {
  const [swiper, setSwiper] = useState(null);
  useEffect(() => {
    onSelect("genre", images[0].answer);
  }, []);
  function getImageValue() {
    const activeIndex = swiper.activeIndex;
    const selectedImage = images[activeIndex];
    onSelect("genre", selectedImage.answer);
  }

  const images = [
    {
      url: "/genre/action.gif",
      answer: ["powerful", "high-energy", "exciting"],
    },
    { url: "/genre/romance.gif", answer: ["intimate", "warm", "emotional"] },
    {
      url: "/genre/comedy.gif",
      answer: ["fun", "upbeat", "cheerful", "playful"],
    },
    { url: "/genre/horror.gif", answer: ["scary", "fear", "tense"] },
    { url: "/genre/fantasy.gif", answer: ["magical", "adventurous"] },
    {
      url: "/genre/drama.gif",
      answer: ["emotional", "reflective", "powerful"],
    },
  ];

  return (
    <div
      id={id}
      className={`absolute bottom-0 left-0 h-screen w-full bg-[#38A04A] flex flex-col pt-16 ${className}`}
    >
      {/* header */}
      <div className="px-5">
        <FilmOverlay />
        <SiteLogo />

        {/* question */}
        <div className="pt-16">
          <h2 className="made-dillan text-[#D2F9FF] text-4xl font-bold">
            If your life
          </h2>
          <h2 className="made-dillan text-[#D2F9FF] text-4xl font-bold">
            were a movie,
          </h2>
        </div>

        {/* 2nd paragraph */}
        <div className="pt-5">
          <h2 className="made-dillan text-[#D2F9FF] text-3xl font-bold text-right">
            What
          </h2>
          <h2 className="allenoire text-7xl text-[#FFCB00] tracking-wider text-shadow-red pt-3 text-right">
            GENRE
          </h2>
          <h2 className="made-dillan text-right text-[#D2F9FF] text-3xl font-bold">
            would it belong to?
          </h2>
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
        spaceBetween={25}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 150,
          modifier: 1,
          scale: 1.3,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="myGenreSwiper w-full !pt-10"
      >
        {images.map((image, i) => (
          <SwiperSlide key={`slide-${i}`}>
            <img className="h-full w-full" src={image.url} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* border
      <div className="absolute z-10 w-8 h-8 border-t-3 border-l-3 border-white" /> */}

      {/* footer & buttons */}
      <div className="flex justify-between">
        <img className="absolute left-5 bottom-16" src="dots.svg" />
        <div className="absolute bottom-6 right-0">
          <button onClick={onNext} className="p-5 flex space-x-3 items-center">
            <div className="border-2 border-white rounded-full w-11 h-11" />
            <img className="absolute left-4" src="/arrow8.svg" />
          </button>
        </div>
      </div>
    </div>
  );
}
