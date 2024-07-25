"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useState, useEffect } from "react";
import SiteLogo from "./SiteLogo";
import FilmOverlay from "./FilmOverlay";

export default function FontScreen({
  className,
  id,
  onBack,
  onNext,
  onSelect,
}) {
  const [swiper, setSwiper] = useState(null);
  useEffect(() => {
    onSelect("font", fonts[0].answer);
  }, []);

  function getImageValue() {
    const activeIndex = swiper.activeIndex;
    const selectedImage = fonts[activeIndex];
    onSelect("font", selectedImage.answer);
  }
  const fonts = [
    {
      text: "Script",
      font: "Dancing_Script",
      answer: ["elegant", "expressive", "flowing", "romantic"],
    },
    {
      text: "Classic",
      font: "DM_Serif_Display",
      answer: ["traditional", "classic", "formal"],
    },
    {
      text: "Sans-Serif",
      font: "chillax",
      answer: ["temporary", "fresh", "innovative"],
    },
    {
      text: "Handwritten",
      font: "Reenie_Beanie",
      answer: ["relaxed", "organic"],
    },
  ];
  const [selectedFont, setSelectedFont] = useState(fonts[0].font);
  useEffect(() => {
    onSelect("font", fonts[0]?.font);
  }, []);

  const handleSlideChange = () => {
    selectFont(); // Call selectFont function
    getImageValue(); // Call getImageValue function
  };

  function selectFont() {
    const activeIndex = swiper.activeIndex;
    const selectedFont = fonts[activeIndex]?.font;
    setSelectedFont(selectedFont);
    onSelect("font", selectedFont);
  }

  return (
    <div
      id={id}
      className={`absolute bottom-0 left-0 h-screen w-full bg-[#1696DF] pt-16 flex flex-col ${className}`}
    >
      {/* header */}
      <div className="px-5">
        <FilmOverlay />
        <SiteLogo />

        {/* question */}
        <div className="pt-16">
          <h2 className="made-dillan text-[#C9FFC8] text-4xl font-bold text-right">
            What
          </h2>
          <h2 className="allenoire text-7xl text-[#FCFF62] tracking-wider text-shadow-yellow pt-3 text-right">
            FONT
          </h2>

          <h2 className="made-dillan text-[#C9FFC8] text-4xl font-bold text-right">
            would be used for
          </h2>
        </div>

        {/* the end screen */}
        <div className="mt-6 text-center h-56 bg-white rounded-md flex items-center justify-center">
          <h3 className={`text-6xl text-gray-800 ${selectedFont}`}>The End</h3>
        </div>
      </div>

      {/* question text */}
      <h2 className="mt-6 made-dillan text-[#C9FFC8] text-3xl font-bold text-center">
        of your life?
      </h2>
      {/* scroller */}
      <div className="relative mt-4">
        <img className="absolute top-0 w-full" src="/scroller-active.png" />
        {/* scroller text */}
        <Swiper
          onSlideChange={handleSlideChange}
          onSwiper={setSwiper}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          spaceBetween={40}
          className="w-full myFontSwiper"
        >
          {fonts.map((font, i) => (
            <SwiperSlide key={`font-slide-${i}`} className="!pt-28">
              <h4 className="font-bold text-3xl made-dillan text-center duration-300">
                {font.text}
              </h4>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* button */}
      <div className="">
        <button
          onClick={onBack}
          className="absolute p-5 flex space-x-3 items-center"
        >
          <img className="w-8 rotate-180" src="/arrow2.svg" />
          <span className="font-medium text-white"> back </span>
        </button>

        {/* footer & buttons */}
        <div className="flex justify-between">
          <img className="absolute left-5 bottom-16" src="dots.svg" />
          <div className="absolute bottom-6 right-0">
            <button
              onClick={onNext}
              className="p-5 flex space-x-3 items-center"
            >
              <div className="border-2 border-white rounded-full w-11 h-11" />
              <img className="absolute left-4" src="/arrow8.svg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
