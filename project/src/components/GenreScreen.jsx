"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { useState, useEffect } from "react";
import SiteLogo from "./SiteLogo";
import FilmOverlay from "./FilmOverlay";
import NavButtons from "./NavButtons";

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
    <div id={id} className={`bg-[#38A04A] ${className}`}>
      {/* header */}
      <div className="px-5">
        <FilmOverlay />
        <SiteLogo />
        <div className="py-8">
          {/* question */}
          <div>
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
            <h2 className="allenoire text-6xl text-[#FFCB00] tracking-wider text-shadow-red pt-3 text-right">
              GENRE
            </h2>
            <h2 className="made-dillan text-right text-[#D2F9FF] text-3xl font-bold">
              would it belong to?
            </h2>
          </div>
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
        className="myGenreSwiper w-full !pt-4 "
      >
        {images.map((image, i) => (
          <SwiperSlide key={`slide-${i}`} className="relative">
            <img className="h-full w-full object-cover" src={image.url} />
            <div className="slide-frame absolute top-0 left-0 w-full h-full z-10">
              <div className="top-4 left-4 w-6 h-6 border-[white] border-l-2 border-t-2 absolute"></div>
              <div className="top-4 right-4 w-6 h-6 border-white border-r-2 border-t-2 absolute"></div>
              <div className="bottom-4 left-4 w-6 h-6 border-white border-l-2 border-b-2 absolute"></div>
              <div className="bottom-4 right-4 w-6 h-6 border-white border-r-2 border-b-2 absolute"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* footer & buttons */}
      <NavButtons onNext={onNext} />
    </div>
  );
}
