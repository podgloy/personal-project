import React from "react";

export default function FontScreen() {
  return (
    <div className="h-screen bg-zinc-900 flex flex-col pt-14">
      {/* header */}
      <div className="pl-5 pr-5">
        <div className="p-5 flex flex-row justify-between">
          <h1 className="text-white text-m font-bold"> Logo </h1>
          <img src="/4dot.svg" />
        </div>
        {/* question */}
        <div className="">
          <h2 className="text-white opacity-60 text-3xl font-bold text-right">
            What
          </h2>
          <h1 className="pt-3 text-[#FFFC2E] text-6xl font-bold text-right">
            FONT
          </h1>
          <h2 className="text-white opacity-60 text-3xl font-bold text-right">
            would be used for
          </h2>
          <h2 className="pt-5 text-white text-3xl font-bold">'the end' of</h2>
          <h2 className="text-white text-3xl font-bold">your life</h2>
        </div>
        {/* the end screen */}
        <div className="mt-5 h-full w-full bg-white"></div>
      </div>
      {/* scroller */}
      <img src="/scroller.png" />
    </div>
  );
}
