"use client";
import gsap from "gsap";
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
      className="p-6 pt-16 relative h-screen flex flex-col bg-[#155FCB]"
    >
      {/* <button onClick={() => triggerVinyl()}>Click here</button> */}
      {/* logo */}
      <div className="down-ele h-9 w-16 bg-white" />
      {/* welcome message */}
      <h1 className="down-ele font-bold text-4xl text-[#FE65C5] mt-10 ml-6 relative z-10">
        soundtrack of life
      </h1>
      {/* vinyl image */}
      <div className="w-full h-full relative z-0">
        <img
          id="vinyl-img"
          className="absolute top-0 -left-[85vw] size-[160vw] object-contain"
          src="/vinyl.png"
        />
      </div>
      {/* icon */}
      <div className="up-ele flex flex-col space-y-4 relative z-10">
        <span className="text-white text-center">scroll down</span>
        <img className="h-8 animate-bounce" src="arrow.svg" />
      </div>
    </div>
  );
}
