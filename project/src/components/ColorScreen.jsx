import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { useState } from "react";

import { EffectCards } from "swiper/modules";

const images = [
  { url: "/color/blue.svg", answer: ["Warm", "intimate", "emotional"] },
  { url: "/color/orange.svg", answer: ["fun", "homurous", "playful"] },
  { url: "/color/pink.svg", answer: ["Warm", "intimate", "emotional"] },
  { url: "/color/purple.svg", answer: ["fun", "homurous", "playful"] },
  { url: "/color/red.svg", answer: ["Warm", "intimate", "emotional"] },
  { url: "/color/yellow.svg", answer: ["fun", "homurous", "playful"] },
];

export default function ColorScreen({ className, id, onBack, onNext }) {
  // const [swiper, setSwiper] = useState(null);
  // function getImageValue() {
  //   const activeIndex = swiper.activeIndex;
  //   const selectedImage = images[activeIndex];
  //   onSelect("color", selectedImage.answer);
  // }

  return (
    <div
      id={id}
      className={`absolute bottom-0 left-0 h-screen w-screen bg-[#F45E2E] flex flex-col pt-16 ${className}`}
    >
      {/* header */}
      <div className="px-5">
        <div className="py-5 flex flex-row justify-between">
          <h1 className="text-white text-m font-bold"> Logo </h1>
          <img src="/4dot.svg" />
        </div>

        {/* question */}
        <div className="pt-9">
          <h1 className="text-white opacity-50 text-4xl font-bold">
            {" "}
            If your life{" "}
          </h1>
          <h1 className="text-white opacity-50 text-4xl font-bold">
            {" "}
            were a movie,{" "}
          </h1>
        </div>

        {/* 2nd paragraph */}
        <div className="pt-5">
          <h1 className="text-white opacity-60 text-3xl font-bold text-right">
            What
          </h1>
          <h1 className="covered-by-your-grace-regular pt-3 text-[#F00F2D] text-7xl font-bold text-right">
            COLOR
          </h1>
          <h1 className="text-white opacity-60 text-3xl font-bold text-right">
            would it belong to?
          </h1>
        </div>

        <Swiper
          // onSwiper={setSwiper}
          // onSlideChange={() => getImageValue()}
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper mt-12"
        >
          {images.map((image, i) => (
            <SwiperSlide key={`slide-${i}`}>
              <img className="!h-full !w-full" src={image.url} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* button */}
      <div className="flex justify-between">
        <button onClick={onBack} className="p-5 flex space-x-3 items-center">
          <img className="w-8 rotate-180" src="/arrow2.svg" />
          <span className="font-medium text-white"> back </span>
        </button>
        <button onClick={onNext} className="p-5 flex space-x-3 items-center">
          <span className="font-medium text-white"> next </span>
          <img className="w-8 " src="/arrow2.svg" />
        </button>
      </div>
    </div>
  );
}
