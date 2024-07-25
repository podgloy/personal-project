"use client";
import { useState } from "react";
import SiteLogo from "./SiteLogo";
import FilmOverlay from "./FilmOverlay";

export default function TaglineScreen({
  className,
  id,
  onBack,
  onNext,
  onSelect,
}) {
  const [tag, setTag] = useState("");
  const suggestions = ["Inspired", "Love Story", "Peaceful"];

  function onType(val) {
    setTag(val);
    onSelect("tagline", val);
  }
  return (
    <div
      id={id}
      className={`absolute bottom-0 left-0 h-screen w-full bg-[#FF60B3] bg-contain flex flex-col pt-16 ${className}`}
    >
      {/* header */}
      <div className="px-5">
        <FilmOverlay />
        <SiteLogo />

        {/* question */}
        <div className="pt-16">
          <h2 className="made-dillan text-[#FFF9C5] text-4xl font-bold">
            What word
          </h2>
          <h2 className="made-dillan text-[#FFF9C5] text-4xl font-bold">
            best describes
          </h2>
          <h2 className="pt-8 made-dillan text-[#FFF9C5] text-3xl font-bold text-right">
            your life as a
          </h2>
          <h2 className="allenoire text-7xl text-[#B5FF6A] tracking-wider text-shadow-green pt-3 text-right">
            TAG
          </h2>
          <h2 className="allenoire text-7xl text-[#B5FF6A] tracking-wider text-shadow-green text-right">
            LINE
          </h2>
        </div>

        {/* placeholder */}
        <input
          className="made-dillan mt-12 placeholder:italic placeholder:text-white placeholder:opacity-70 placeholder:text-2xl tracking-wider text-center text-2xl block bg-transparent w-full border border-white rounded-md py-6 px-[1/2] pr-5 focus:border-[#00CCFD]"
          placeholder="type something..."
          name="input"
          type="text"
          onChange={(e) => onType(e.target.value)}
          value={tag}
        />

        {/* choice */}
        <div className="flex flex-row space-x-3 pt-5">
          {suggestions.map((suggestion) => (
            <div
              key={suggestion}
              onClick={() => onType(suggestion)}
              className={`made-dillan bg-white text-white text-lg px-3 py-1 rounded-lg duration-200 ${
                suggestion === tag ? "bg-opacity-40" : "bg-opacity-25"
              }`}
            >
              {suggestion}
            </div>
          ))}
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
