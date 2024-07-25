"use client";
import { useState } from "react";
import SiteLogo from "./SiteLogo";
import FilmOverlay from "./FilmOverlay";
import NavButtons from "./NavButtons";

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
    <div id={id} className={`bg-[#FF60B3] ${className}`}>
      {/* header */}
      <div className="px-5">
        <FilmOverlay />
        <SiteLogo />

        {/* question */}
        <div className="py-8">
          <h2 className="made-dillan text-[#FFF9C5] text-4xl font-bold">
            What word
          </h2>
          <h2 className="made-dillan text-[#FFF9C5] text-4xl font-bold">
            best describes
          </h2>
          <h2 className="pt-8 made-dillan text-[#FFF9C5] text-3xl font-bold text-right">
            your life as a
          </h2>
          <h2 className="allenoire text-6xl text-[#B5FF6A] tracking-wider text-shadow-green pt-3 text-right">
            TAG
          </h2>
          <h2 className="allenoire text-6xl text-[#B5FF6A] tracking-wider text-shadow-green text-right">
            LINE
          </h2>
        </div>
      </div>

      {/* input */}
      <div className="px-5 h-full">
        {/* placeholder */}
        <input
          className=" made-dillan placeholder:italic placeholder:text-white placeholder:opacity-70 placeholder:text-2xl tracking-wider text-center text-2xl block bg-transparent w-full border border-white rounded-md py-4 px-[1/2]"
          placeholder="type something..."
          name="input"
          type="text"
          maxLength={15}
          onChange={(e) => onType(e.target.value)}
          value={tag}
        />

        {/* choice */}
        <div className="flex flex-row flex-wrap pt-5">
          {suggestions.map((suggestion) => (
            <div
              key={suggestion}
              onClick={() => onType(suggestion)}
              className={`made-dillan bg-white text-white text-md px-3 py-1 mr-2 mb-2 rounded-lg duration-200 ${
                suggestion === tag ? "bg-opacity-40" : "bg-opacity-25"
              }`}
            >
              {suggestion}
            </div>
          ))}
        </div>
      </div>

      {/* footer & buttons */}
      <div className="flex justify-between p-5">
        <div className="pt-4 flex flex-row justify-between space-x-2 align-baseline">
          <div className="w-2 h-2 rounded-full bg-[#E3E3E3] opacity-40" />
          <div className="w-2 h-2 rounded-full bg-[#E3E3E3] opacity-40" />
          <div className="w-2 h-2 rounded-full bg-[#E3E3E3] opacity-40" />
          <div className="w-2 h-2 rounded-full bg-[#E3E3E3]" />
        </div>
        <NavButtons onNext={onNext} />
      </div>
    </div>
  );
}
