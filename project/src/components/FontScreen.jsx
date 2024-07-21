import React from "react";

export default function FontScreen({ className, id, onBack, onNext }) {
  return (
    <div
      id={id}
      className={`absolute bottom-0 left-0 h-screen w-screen bg-[url('/bg/FontBG.png')] bg-contain flex flex-col pt-16 ${className}`}
    >
      {/* header */}
      <div className="px-5">
        <div className="py-5">
          <h1 className="text-white text-m font-bold"> Logo </h1>
        </div>

        {/* question */}
        <div className="pt-5">
          <h2 className="made-dillan text-[#C9FFC8] text-4xl font-bold text-right">
            What
          </h2>
          <h1 className="covered-by-your-grace-regular pt-3 text-[#C9FF70] text-7xl font-bold text-right">
            FONT
          </h1>
          <h2 className="made-dillan text-[#C9FFC8] text-4xl font-bold text-right">
            would be used for
          </h2>
        </div>

        {/* the end screen */}
        <div className=" mt-9 h-60 bg-white rounded-md" />
      </div>

      {/* question text */}
      <h2 className="mt-4 made-dillan text-[#C9FFC8] text-3xl font-bold text-center">
        of your life?
      </h2>

      {/* scroller */}
      <img className="mt-6 flex flex-col w-full" src="/scroller.png" />

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
