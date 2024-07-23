import React from "react";

export default function TaglineScreen({ className, id, onBack, onNext }) {
  return (
    <div
      id={id}
      className={`absolute bottom-0 left-0 h-screen w-screen bg-[url('/bg/TaglineBG.png')] bg-contain flex flex-col pt-16 ${className}`}
    >
      {/* header */}
      <div className="px-5">
        <div className="py-5">
          <h1 className="text-white text-m font-bold"> Logo </h1>
        </div>

        {/* question */}
        <div className="pt-5">
          <p className="made-dillan text-[#FFF9C5] text-4xl font-bold">
            What word
          </p>
          <p className="made-dillan text-[#FFF9C5] text-4xl font-bold">
            best describes
          </p>
          <p className="pt-8 made-dillan text-[#FFF9C5] text-3xl font-bold text-right">
            your life as a
          </p>
          <img className=" pt-3 float-right" src="/text/taglineText.svg" />
        </div>

        {/* placeholder */}
        <input
          className="mt-16 placeholder:italic placeholder:text-white placeholder:text-l block bg-transparent w-full border border-white rounded-md py-6 pl-7 pr-5 focus:border-[#00CCFD]"
          placeholder="type something..."
          name="input"
          type="text"
        />

        {/* choice */}
        <div className="flex flex-row space-x-2 pt-4">
          <div className="bg-white bg-opacity-35 text-white text-sm px-3 py-1 rounded-md">
            love
          </div>
          <div className="bg-white bg-opacity-35 text-white text-sm px-3 py-1 rounded-md">
            inspiration
          </div>
          <div className="bg-white bg-opacity-35 text-white text-sm px-3 py-1 rounded-md">
            joy
          </div>
        </div>
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
