import React from "react";

export default function FontScreen() {
  return (
    <div className="h-screen bg-zinc-900 flex flex-col pt-14">
      {/* header */}
      <div className="pl-5 pr-5">
        <div className="py-5 flex flex-row justify-between">
          <h1 className="text-white text-m font-bold"> Logo </h1>
          <img src="/4dot.svg" />
        </div>

        {/* question */}
        <div className="pt-9">
          <h2 className="text-white opacity-60 text-3xl font-bold text-right">
            What
          </h2>
          <h1 className="pt-3 text-[#FFFC2E] text-6xl font-bold text-right">
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

      {/* navigation */}
      <div className="p-5 flex flex-row justify-end">
        <span className="font-medium text-white pr-3"> next </span>
        <img className="w-8 " src="/arrow2.svg" />
      </div>
    </div>
  );
}
