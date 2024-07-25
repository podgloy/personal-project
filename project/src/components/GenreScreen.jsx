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
            <h2 className="allenoire text-7xl text-[#FFCB00] tracking-wider text-shadow-red pt-3 text-right">
              GENRE
            </h2>
            <h2 className="made-dillan text-right text-[#D2F9FF] text-3xl font-bold">
              would it belong to?
            </h2>
          </div>
        </div>
      </div>

      <div className="absolute z-10 w-6 h-6 border-white border-l-4 border-t-4 left-20 top-[53vh]" />
      <div className="absolute z-10 w-6 h-6 border-white border-r-4 border-t-4 right-20 top-[53vh]" />
      <div className="absolute z-10 w-6 h-6 border-white border-l-4 border-b-4 left-20 bottom-[16vh]" />
      <div className="absolute z-10 w-6 h-6 border-white border-r-4 border-b-4 right-20 bottom-[16vh]" />

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
            <img className="h-full w-full object-cover" src={image.url} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* border
      <div className="absolute z-10 w-8 h-8 border-t-3 border-l-3 border-white" /> */}
      {/* footer & buttons */}
      <NavButtons onNext={onNext} />
    </div>
  );
}
