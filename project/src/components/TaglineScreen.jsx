import React from "react";

export default function TaglineScreen({ className, id, onBack, onNext }) {
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
          <p className="text-white text-3xl font-bold">What word best</p>
          <p className="text-white text-3xl font-bold">describe your</p>
          <p className="text-white text-3xl font-bold">life as a</p>
          <h1 className="covered-by-your-grace-regular pt-8 text-[#00CCFD] text-7xl font-bold text-right">
            TAGLINE
          </h1>
        </div>

        {/* placeholder */}
        <input
          className="mt-20 placeholder:italic placeholder:text-grey-500 placeholder:text-l block bg-transparent w-full border border-slate-300 rounded-md py-6 pl-7 pr-5 focus:border-[#00CCFD]"
          placeholder="type something..."
          name="input"
          type="text"
        />

        {/* choice */}
        <div className="flex flex-row space-x-2 pt-4">
          <div className="bg-white bg-opacity-35 text-zinc-300 text-sm px-3 py-1 rounded-md">
            love
          </div>
          <div className="bg-white bg-opacity-35 text-zinc-300 text-sm px-3 py-1 rounded-md">
            inspiration
          </div>
          <div className="bg-white bg-opacity-35 text-zinc-300 text-sm px-3 py-1 rounded-md">
            joy
          </div>
        </div>
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
