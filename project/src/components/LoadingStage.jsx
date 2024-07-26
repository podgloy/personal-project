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
    }, 100);
    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <div id={id} className={`bg-[#FAF460] ${className}`}>
      <div className="px-5 h-full">
        <FilmOverlay addedClass="!opacity-100 !mix-blend-overlay" />
        <SiteLogo />

        {/* State */}
        <div className="py-12 flex flex-col items-center justify-center space-y-8 h-full">
          {/* Title */}
          <h2 className="made-dillan text-[#0A59CE] text-3xl text-center">
            <span>your soundtrack is</span>
            <br></br>
            <span className="made-dillan text-[#0A59CE] text-3xl text-center">
              on the way...
            </span>
          </h2>

          {/* vinyl image */}
          <img
            className="animate-spin place-self-center w-[80%] object-contain"
            src="/vinyl.png"
          />

          {/* loading bar */}
          <div className="flex flex-col items-center w-full px-8">
            {/* loading progress bar */}
            <div className="relative h-1 bg-zinc-300 w-full">
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
        </div>
      </div>
    </div>
  );
}
