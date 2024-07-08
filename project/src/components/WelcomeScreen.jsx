import React from "react";
import gsap from "gsap";
import Lenis from "lenis";
import { ScrollToPlugin } from "gsap/all";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { register } from "swiper/element/bundle";
import { useEffect } from "react";

export default function WelcomeScreen() {
  register();
  const initLenis = () => {
    const lenis = new Lenis({
      duration: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);

    ScrollTrigger.create({
      start: "top-=100px",
      onEnter: () => {
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: "#genre-screen-wrapper",
            offsetY: 0,
          },
          ease: "power2.inOut",
        });
      },
      once: true,
    });

    // animate

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

    // text-opacity
    gsap.to(".opa-ele", {
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

    // welcome screen animate
    gsap.to("#welcome-screen-wrapper", {
      height: 0,
      padding: 0,
      scrollTrigger: {
        trigger: "#welcome-screen-wrapper",
        start: "bottom bottom",
        end: "bottom",
        scrub: 1,
      },
    });

    // gsap.to("#blackBG", {
    //   yPercent: -200,
    //   scrollTrigger: {
    //     trigger: "#blackBG",
    //     start: 200,
    //     end: "bottom bottom",
    //     scrub: 1,
    //   },
    // });

    // genre screen animate
    gsap.to("#genre-screen-wrapper", {
      // yPercent: -200,
      position: "sticky",
      top: 0,
      ease: "expo.out",
      duration: 0.1,
      scrollTrigger: {
        trigger: "#genre-screen-wrapper",
        start: "top top",
        // end: 0,
        scrub: 1,
      },
    });
    // gsap.to(window, {
    //   duration: 1,
    //   ease: "expo.out",
    //   scrollTo: "#genre-screen-wrapper",

    // scrollTrigger: {
    //   trigger: "#genre-screen-wrapper",
    //   start: "top top",
    //   // end: 0,
    //   scrub: 1,
    // },
    // });
  };

  useEffect(() => {
    initLenis();
  }, []);

  return (
    <div
      id="welcome-screen-wrapper"
      className="p-6 pt-16 relative h-screen flex flex-col"
    >
      {/* logo */}
      <div className="opa-ele h-9 w-16 bg-white" />
      {/* welcome message */}
      <h1 className="opa-ele font-bold text-4xl text-white mt-10 ml-6 z-10">
        {" "}
        soundtrack of life{" "}
      </h1>

      <div className=" w-full h-full relative z-0">
        {/* vinyl image */}
        <img
          id="vinyl-img"
          className="absolute top-0 -left-[85vw] size-[160vw] object-contain"
          src="/vinyl2.png"
        />
      </div>

      {/* icon */}
      <div className="opa-ele flex flex-col space-y-2">
        <span className="text-s text-white text-center"> scroll down </span>
        <img className="h-8 animate-bounce" src="arrow.svg" />
      </div>
    </div>
  );
}
