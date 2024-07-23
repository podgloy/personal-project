import React from "react";

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
      className={`absolute bottom-0 left-0 h-screen w-screen bg-[url('/bg/TaglineBG.png')] bg-contain flex flex-col pt-16 ${className}`}
    >
      <div className="absolute bottom-0 left-0 h-screen w-screen bg-[url('/bg/LoadingBG.png')] bg-contain flex flex-col pt-16">
        {/* header */}
        <div className="px-5">
          <div className="py-5 flex flex-row justify-between">
            <h1 className="text-white text-m font-bold"> Logo </h1>
            <img src="/4dot.svg" />
          </div>
        </div>

        <p className="pt-16 made-dillan text-[#0A59CE] text-3xl text-center">
          your soundtrack is
        </p>
        <p className="made-dillan text-[#0A59CE] text-3xl text-center">
          on the way...
        </p>

        {/* vinyl image */}
        <img className="mt-20 place-self-center size-[70vw]" src="/vinyl.png" />

        {/* loading */}

        <div className="flex flex-row px-20">
          <div className="mt-12 h-1 w-40 bg-zinc-300 rounded-full place-self-center" />
          <div className="mt-12 h-1 w-60 bg-zinc-700 rounded-full place-self-center" />
        </div>
        <p className="pt-4 made-dillan text-[#0A59CE] text-2xl text-center">
          78%
        </p>
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
