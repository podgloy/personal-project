import React from "react";
import SiteLogo from "./SiteLogo";
import FilmOverlay from "./FilmOverlay";

export default function LoadingScreen({
  className,
  id,
  onNext,
  onBack,
  onSelect,
}) {
  return (
    <div
      id={id}
      className={`absolute bottom-0 left-0 h-screen w-screen bg-[#FAF460] bg-contain flex flex-col pt-16 ${className}`}
    >
      <div className="absolute bottom-0 left-0 h-screen w-screen bg-[url('/bg/LoadingBG.png')] bg-contain flex flex-col pt-16">
        {/* header */}
        <div className="px-5">
          <SiteLogo />
          <FilmOverlay />
        </div>

        <h2 className="pt-16 made-dillan text-[#0A59CE] text-3xl text-center">
          your soundtrack is
        </h2>
        <h2 className="made-dillan text-[#0A59CE] text-3xl text-center">
          on the way...
        </h2>

        {/* vinyl image */}
        <img className="mt-20 place-self-center size-[70vw]" src="/vinyl.png" />
        {/* loading */}
        <div className="relative mx-20 h-1 bg-zinc-300 mt-12">
          <div className="absolute h-full w-60 left-0 bg-zinc-700 rounded-full animate-loading" />
        </div>
      </div>

      {/* back button */}
      <button
        onClick={onBack}
        className="absolute bottom-8 p-5 flex space-x-3 items-center"
      >
        <img className="w-8 rotate-180" src="/arrow2.svg" />
        <span className="font-medium text-black"> back </span>
      </button>

      {/* footer & buttons */}
      <div className="absolute bottom-6 right-0">
        <button onClick={onNext} className="p-5 flex space-x-3 items-center">
          <div className="border-2 border-white rounded-full w-11 h-11" />
          <img className="absolute left-4" src="/arrow8.svg" />
        </button>
      </div>
    </div>
  );
}
