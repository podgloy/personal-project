import SiteLogo from "./SiteLogo";
import FilmOverlay from "./FilmOverlay";
import { useEffect, useState } from "react";

export default function LoadingScreen({
  className,
  id,
  onNext,
  onBack,
  onSelect,
  isActive,
}) {
  // Loading progress bar 5s
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  useEffect(() => {
    const progress = document.getElementById("pregress-bar");
    let width = 0;
    setLoadingPercentage(0);
    const interval = setInterval(() => {
      width += 1;
      setLoadingPercentage((val) => val + 1);
      progress.style.width = `${width}%`;
      if (width === 100) {
        clearInterval(interval);
        onSelect();
      }
    }, 50);
    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <div
      id={id}
      className={`absolute bottom-0 left-0 h-screen w-full bg-[#FAF460] bg-contain flex flex-col pt-16 ${className}`}
    >
      <div className="absolute bottom-0 left-0 h-screen w-full bg-[url('/bg/LoadingBG.png')] bg-contain flex flex-col pt-16">
        {/* header */}
        <div className="px-5">
          <SiteLogo />
          <FilmOverlay />
        </div>

        <h2 className="pt-16 made-dillan text-[#0A59CE] text-3xl text-center">
          your soundtrack is
        </h2>
        <h2 className="made-dillan text-[#0A59CE] text-3xl text-center">
          on the way...
        </h2>
        {/* vinyl image */}
        <img
          className="mt-20 place-self-center w-[80%] object-contain"
          src="/vinyl.png"
        />
        {/* loading progress bar */}
        <div className="relative mx-20 h-1 bg-zinc-300 mt-12">
          <div
            id="pregress-bar"
            className="absolute h-full w-60 left-0 bg-zinc-700 rounded-full"
          />
        </div>
        {/* Loading number */}
        <h2 className="made-dillan text-[#0A59CE] text-3xl text-center mt-4">
          {loadingPercentage}%
        </h2>
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
