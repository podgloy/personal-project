"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useState, useEffect } from "react";
import SiteLogo from "./SiteLogo";

export default function FontScreen({
  className,
  id,
  onBack,
  onNext,
  onSelect,
}) {
  const fonts = [
    {
      text: "classic",
      answer: "DM_Serif_Display",
    },
    {
      text: "script",
      answer: "script",
    },
    {
      text: "handwritten",
      answer: "handwritten",
    },
    {
      text: "Sans-Serif",
      answer: "Archivo_Black",
    },
  ];
  const [swiper, setSwiper] = useState(null);
  const [selectedFont, setSelectedFont] = useState(fonts[0].answer);
  useEffect(() => {
    onSelect("font", fonts[0]?.answer);
  }, []);

  function selectFont() {
    const activeIndex = swiper.activeIndex;
    const selectedFont = fonts[activeIndex]?.answer;
    setSelectedFont(selectedFont);
    onSelect("font", selectedFont);
  }

  return (
    <div
      id={id}
      className={`absolute bottom-0 left-0 h-screen w-screen bg-[url('/bg/FontBG.png')] bg-contain flex flex-col ${className}`}
    >
      {/* header */}
      <div className="p-5">
        <SiteLogo />
        {/* question */}
        <div className="pt-10">
          <h2 className="made-dillan text-[#C9FFC8] text-4xl font-bold text-right">
            What
          </h2>
          <img className=" pt-3 justify-end" src="/text/fontText.svg" />

          <h2 className="made-dillan text-[#C9FFC8] text-4xl font-bold text-right">
            would be used for
          </h2>
        </div>

        {/* the end screen */}
        <div className="mt-9 p-4 text-center h-60 bg-white rounded-md flex items-center justify-center">
          <h3 className={`text-4xl text-gray-800 ${selectedFont}`}>The End</h3>
        </div>
      </div>

      {/* question text */}
      <h2 className="mt-4 made-dillan text-[#C9FFC8] text-3xl font-bold text-center">
        of your life?
      </h2>
      {/* scroller */}
      <div className="relative mt-8">
        <img className="absolute top-0 w-full" src="/scroller-active.png" />
        {/* scroller text */}
        <Swiper
          onSlideChange={() => selectFont()}
          onSwiper={setSwiper}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          spaceBetween={40}
          className="w-full myFontSwiper"
        >
          {fonts.map((font, i) => (
            <SwiperSlide key={`font-slide-${i}`} className="!pt-28">
              <h4 className="font-bold text-4xl made-dillan text-center duration-300">
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
