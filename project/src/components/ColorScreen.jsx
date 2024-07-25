import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { useState, useEffect } from "react";
import { EffectCards } from "swiper/modules";
import SiteLogo from "./SiteLogo";
import FilmOverlay from "./FilmOverlay";

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
  useEffect(() => {
    onSelect("color", images[0].answer);
  }, []);

  function getImageValue() {
    const activeIndex = swiper.activeIndex;
    const selectedImage = images[activeIndex];
    onSelect("color", selectedImage.answer);
  }

  return (
    <div
      id={id}
      className={`absolute bottom-0 left-0 h-screen w-full bg-[#FE6F42] flex flex-col pt-16 ${className}`}
    >
      {/* header */}
      <div className="px-5">
        <FilmOverlay />
        <SiteLogo />

        {/* question1 */}
        <div className="pt-16">
          <h2 className="made-dillan text-[#F8FFAB] text-4xl font-bold">
            Which
          </h2>
          <h2 className="text-7xl text-[#87FFF1] allenoire tracking-wider text-shadow-blue pt-3">
            COLOR
          </h2>
          <h2 className="made-dillan text-[#F8FFAB] text-4xl font-bold">
            most perfectly
          </h2>
        </div>

        {/* question2 */}
        <div className="pt-9">
          <h2 className="made-dillan text-[#F8FFAB] text-4xl font-bold text-right">
            describes
          </h2>
          <h2 className="made-dillan text-[#F8FFAB] text-4xl font-bold text-right">
            your life?
          </h2>
        </div>

        <Swiper
          onSwiper={setSwiper}
          onSlideChange={() => getImageValue()}
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="myColorSwiper mt-16"
        >
          {images.map((image, i) => (
            <SwiperSlide key={`slide-${i}`}>
              <img className="w-full " src={image.url} />
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
