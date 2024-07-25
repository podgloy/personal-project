import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { useState, useEffect } from "react";
import { EffectCards } from "swiper/modules";
import SiteLogo from "./SiteLogo";
import FilmOverlay from "./FilmOverlay";
import NavButtons from "./NavButtons";

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
    <div id={id} className={`bg-[#FE6F42]  ${className}`}>
      <div className="px-5">
        {/* Header */}
        <FilmOverlay />
        <SiteLogo />
        {/* Question */}
        <div className="pt-8">
          <h2 className="made-dillan text-[#F8FFAB] text-4xl font-bold">
            Which
          </h2>
          <h2 className="text-6xl text-[#87FFF1] allenoire tracking-wider text-shadow-blue pt-3">
            COLOR
          </h2>
          <h2 className="made-dillan text-[#F8FFAB] text-4xl font-bold">
            most perfectly
          </h2>
          {/* question2 */}
          <div className="pt-8">
            <h2 className="made-dillan text-[#F8FFAB] text-4xl font-bold text-right">
              describes
            </h2>
            <h2 className="made-dillan text-[#F8FFAB] text-4xl font-bold text-right">
              your life?
            </h2>
          </div>
        </div>
      </div>
      {/* Card */}
      <Swiper
        onSwiper={setSwiper}
        onSlideChange={() => getImageValue()}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="!w-full !h-auto !max-w-[70%] !pt-4"
      >
        {images.map((image, i) => (
          <SwiperSlide key={`slide-${i}`} className="!h-fit">
            <img className="w-full h-full object-contain" src={image.url} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* footer & buttons */}
      <div className="flex justify-between p-5">
        <div className="pt-4 flex flex-row justify-between space-x-2 align-baseline">
          <div className="w-2 h-2 rounded-full bg-[#E3E3E3] opacity-40" />
          <div className="w-2 h-2 rounded-full bg-[#E3E3E3]" />
          <div className="w-2 h-2 rounded-full bg-[#E3E3E3] opacity-40" />
          <div className="w-2 h-2 rounded-full bg-[#E3E3E3] opacity-40" />
        </div>
        <NavButtons onNext={onNext} />
      </div>
    </div>
  );
}
