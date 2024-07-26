"use client";
import gsap from "gsap";
import Image from "next/image";
import { useEffect } from "react";
import FilmOverlay from "./FilmOverlay";
import SiteLogo from "./SiteLogo";

export default function WelcomeScreen() {
  // init animateGsap function
  const animateGsap = () => {
    // vinyl animate
    gsap.to("#vinyl-img", {
      rotate: 180,
      duration: 2,
      scrollTrigger: {
        trigger: "#welcome-screen-wrapper",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
    // go down element
    gsap.to(".down-ele", {
      opacity: 0,
      yPercent: 500,
      duration: 3,
      scrollTrigger: {
        trigger: "#welcome-screen-wrapper",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
    // go up element
    gsap.to(".up-ele", {
      opacity: 0,
      yPercent: -200,
      duration: 3,
      scrollTrigger: {
        trigger: "#welcome-screen-wrapper",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
  };
  // call init animateGsap when page loaded
  useEffect(() => {
    animateGsap();
  }, []);

  return (
    <div
      id="welcome-screen-wrapper"
      className="relative h-screen flex flex-col pt-6 bg-[#155FCB] overflow-hidden"
    >
      <div className="px-5">
        <SiteLogo className="down-ele" />
        <FilmOverlay />
      </div>

      {/* welcome message border */}
      <WelcomeMessage />

      {/* vinyl image */}
      <div className="w-full h-full relative z-0">
        <img
          id="vinyl-img"
          className="absolute top-16 -left-[290px] size-[580px] object-contain"
          src="/vinyl.png"
        />
      </div>

      {/* welcome message color */}
      <WelcomeMessage addedClass="z-0 welcome-text-stroke" />

      {/* icon */}
      <div className="up-ele flex flex-col space-y-4 relative bottom-4 z-10">
        <span className="made-dillan text-white text-center">scroll down</span>
        <img className="h-8 animate-bounce" src="arrow.svg" />
      </div>
    </div>
  );
}

function WelcomeMessage({ addedClass = 10 }) {
  return (
    <>
      <h1
        className={`down-ele absolute top-52 left-12 font-bold text-7xl text-[#FE65C5] ml-4 allenoire ${addedClass}`}
      >
        SOUND
      </h1>
      <h1
        className={`down-ele absolute top-72 left-28 font-bold text-7xl text-[#FE65C5] allenoire ${addedClass}`}
      >
        TRACK
      </h1>
      <div
        className={`made-dillan down-ele absolute pt-80 top-12 right-8 font-bold text-4xl text-white`}
      >
        of life
      </div>
    </>
  );
}
