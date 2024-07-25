"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useState, useEffect } from "react";
import SiteLogo from "./SiteLogo";
import FilmOverlay from "./FilmOverlay";
import NavButtons from "./NavButtons";

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
    <div id={id} className={`bg-[#1696DF] ${className}`}>
      <div className="px-5">
        {/* header */}
        <FilmOverlay />
        <SiteLogo />

        {/* question */}
        <div className="pt-8 pb-3">
          <h2 className="made-dillan text-[#C9FFC8] text-3xl font-bold text-right">
            What
          </h2>
          <h2 className="allenoire text-6xl text-[#FCFF62] tracking-wider text-shadow-yellow pt-3 text-right">
            FONT
          </h2>
          <h2 className="made-dillan text-[#C9FFC8] text-3xl font-bold text-right">
            would be used for
          </h2>
        </div>
      </div>

      {/* Swiper */}
      <div className="h-full flex flex-col justify-around ">
        {/* the end screen */}
        <div
          className="text-center h-full rounded-md flex items-center justify-center mx-5 bg-cover"
          style={{ backgroundImage: 'url("/cinema.png")' }}
        >
          <h3 className={`text-6xl ${selectedFont} text-[#FFCEB9] bolder`}>
            The End
          </h3>
        </div>

        {/* question text */}
        <h2 className="pt-2 pb-4 made-dillan text-[#C9FFC8] text-2xl font-bold text-center">
          of your life?
        </h2>

        {/* scroller */}
        <div className="relative flex flex-col justify-end pb-12">
          <img className="w-full object-contain " src="/scroller-active.png" />

          {/* scroller text */}
          <Swiper
            onSlideChange={handleSlideChange}
            onSwiper={setSwiper}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={2}
            spaceBetween={40}
            className="!absolute !z-10 !bottom-0 !left-0 w-full h-full myFontSwiper"
          >
            {fonts.map((font, i) => (
              <SwiperSlide
                key={`font-slide-${i}`}
                className="!flex !flex-col !justify-end"
              >
                <h4 className="font-bold text-2xl made-dillan text-center duration-300">
                  {font.text}
                </h4>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* button */}
      <NavButtons onNext={onNext} />
    </div>
  );
}
