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
  const suggestions = ["love", "inspiration", "joy"];

  function onType(val) {
    setTag(val);
    onSelect("tagline", val);
  }
  return (
    <div id={id} className={`bg-[#FF60B3] ${className}`}>
      {/* header */}
      <div className="px-5">
        {/* <FilmOverlay /> */}
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
          <h2 className="allenoire text-7xl text-[#B5FF6A] tracking-wider text-shadow-green pt-3 text-right">
            TAG
          </h2>
          <h2 className="allenoire text-7xl text-[#B5FF6A] tracking-wider text-shadow-green text-right">
            LINE
          </h2>
        </div>
      </div>
      {/* input */}
      <div className="px-5 h-full">
        {/* placeholder */}
        <input
          className="placeholder:italic placeholder:text-white placeholder:text-l block bg-transparent w-full border border-white rounded-md px-6 py-5 focus:border-[#00CCFD]"
          placeholder="type something..."
          name="input"
          type="text"
          onChange={(e) => onType(e.target.value)}
          value={tag}
        />
        {/* choice */}
        <div className="flex flex-row space-x-2 pt-4">
          {suggestions.map((suggestion) => (
            <div
              key={suggestion}
              onClick={() => onType(suggestion)}
              className={`bg-white text-white text-sm px-3 py-1 rounded-md duration-200 ${
                suggestion === tag ? "bg-opacity-50" : "bg-opacity-35"
              }`}
            >
              {suggestion}
            </div>
          ))}
        </div>
      </div>
      {/* button */}
      <NavButtons onNext={onNext} />
    </div>
  );
}
