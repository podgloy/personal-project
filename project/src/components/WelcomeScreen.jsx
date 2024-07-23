"use client";
import gsap from "gsap";
import Image from "next/image";
import { useEffect } from "react";

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

  // function triggerVinyl() {
  //   gsap.to("#vinyl-img", {
  //     scale: 1.5,
  //     duration: 1,
  //   });
  // }

  return (
    <div
      id="welcome-screen-wrapper"
      className="p-6 relative h-screen flex flex-col bg-[#155FCB] overflow-hidden"
    >
      {/* logo */}
      <Image
        src="/stol-logo.png"
        alt="Logo Image"
        width="120"
        height="60"
        className="down-ele"
      />
      {/* welcome message */}
      <h1 className="down-ele absolute top-48 font-bold text-8xl text-[#FE65C5] ml-4 z-10 allenoire">
        sound
      </h1>
      <h1 className="down-ele absolute top-72 left-32 font-bold text-8xl text-[#FE65C5] z-10 allenoire">
        track
      </h1>
      <div className="made-dillan down-ele absolute pt-80 top-20 right-8 font-bold text-4xl text-white z-10">
        of life
      </div>
      {/* vinyl image */}
      <div className="w-full h-full relative z-0">
        <img
          id="vinyl-img"
          className="absolute top-10 -left-[85vw] size-[160vw] object-contain"
          src="/vinyl.png"
        />
      </div>
      {/* icon */}
      <div className="up-ele flex flex-col space-y-4 relative z-10">
        <span className="text-white text-center">scroll down</span>
        <img className="h-8 animate-bounce" src="arrow.svg" />
      </div>
      {/* Overlay */}
      <img
        src="/film-grain.png"
        className="absolute w-full h-full top-0 left-0 object-cover opacity-50"
      />
    </div>
  );
}
