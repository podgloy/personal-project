import React from "react";

export default function FontScreen({ className, id, onBack, onNext }) {
  return (
    <div
      id={id}
      className={`absolute bottom-0 left-0 h-screen w-screen bg-zinc-900 flex flex-col pt-16 ${className}`}
    >
      {/* header */}
      <div className="px-5">
        <div className="py-5 flex flex-row justify-between">
          <h1 className="text-white text-m font-bold"> Logo </h1>
          <img src="/4dot.svg" />
        </div>

        {/* question */}
        <div className="pt-9">
          <h2 className="text-white opacity-60 text-3xl font-bold text-right">
            What
          </h2>
          <h1 className="covered-by-your-grace-regular pt-3 text-[#FFFC2E] text-7xl font-bold text-right">
            FONT
          </h1>
          <h2 className="text-white opacity-60 text-3xl font-bold text-right">
            would be used for
          </h2>
          <h2 className="mt-7 text-white text-3xl font-bold">'the end' of</h2>
          <h2 className="text-white text-3xl font-bold">your life</h2>
        </div>

        {/* the end screen */}
        <div className=" mt-9 h-60 bg-white rounded-md" />
      </div>
      {/* scroller */}
      <img className="mt-8 flex flex-col w-full" src="/scroller.png" />

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
