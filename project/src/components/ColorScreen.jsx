import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { useState } from "react";

import { EffectCards } from "swiper/modules";

const images = [
  {
    url: "/color/yellow.svg",
    answer: ["cheerful", "bright", "uplifting", "warm"],
  },
  {
    url: "/color/blue.svg",
    answer: ["calm", "deep", "peaceful", "reflective"],
  },
  { url: "/color/orange.svg", answer: ["energetic", "vibrant", "fun"] },
  { url: "/color/pink.svg", answer: ["soft", "playful", "romantic"] },
  { url: "/color/red.svg", answer: ["passionate", "intense", "bold"] },
  { url: "/color/green.svg", answer: ["natural", "fresh", "soothing"] },
  { url: "/color/purple.svg", answer: ["mysterious", "luxurious", "creative"] },
];

export default function ColorScreen({
  className,
  id,
  onBack,
  onNext,
  onSelect,
}) {
  const [swiper, setSwiper] = useState(null);
  function getImageValue() {
    const activeIndex = swiper.activeIndex;
    const selectedImage = images[activeIndex];
    onSelect("color", selectedImage.answer);
  }

  return (
    <div
      id={id}
      className={`absolute bottom-0 left-0 h-screen w-screen bg-[#F45E2E] flex flex-col pt-16 ${className}`}
    >
      {/* header */}
      <div className="px-5">
        <div className="py-5">
          <h1 className="text-white text-m font-bold"> Logo </h1>
        </div>

        {/* question1 */}
        <div className="pt-9">
          <h1 className="text-[#FFE679] text-3xl font-bold">Which</h1>
          <h1 className="covered-by-your-grace-regular pt-3 text-[#77E6FF] text-7xl font-bold">
            COLOR
          </h1>
          <h1 className="text-[#FFE679] text-3xl font-bold">most perfectly</h1>
        </div>

        {/* question2 */}
        <div className="pt-9">
          <h1 className="text-[#FFE679] text-4xl font-bold text-right">
            {" "}
            describes{" "}
          </h1>
          <h1 className="text-[#FFE679] text-4xl font-bold text-right">
            {" "}
            your life?{" "}
          </h1>
        </div>

        <Swiper
          onSwiper={setSwiper}
          onSlideChange={() => getImageValue()}
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="myColorSwiper mt-12"
        >
          {images.map((image, i) => (
            <SwiperSlide key={`slide-${i}`}>
              <img className="w-full " src={image.url} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* button */}
      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="absolute p-5 flex space-x-3 items-center"
        >
          <img className="w-8 rotate-180" src="/arrow2.svg" />
          <span className="font-medium text-white"> back </span>
        </button>

        {/* footer & buttons */}
        <div className="flex justify-between">
          <img className="pl-5 pt-24" src="dots.svg" />
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
