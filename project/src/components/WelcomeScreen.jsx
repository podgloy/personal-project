"use client";
import gsap from "gsap";
import { useEffect } from "react";

export default function WelcomeScreen() {
<<<<<<< HEAD
  // init animateGsap function
  const animateGsap = () => {
=======
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

    // animate

>>>>>>> 745e455c300219704c2a8ce865bb4152ae1b815e
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
<<<<<<< HEAD
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
=======
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
    // gsap.to("#genre-screen-wrapper", {
    //   // yPercent: -200,
    //   position: "sticky",
    //   top: 0,
    //   ease: "expo.out",
    //   duration: 0.1,
    //   scrollTrigger: {
    //     trigger: "#genre-screen-wrapper",
    //     start: "top top",
    //     // end: 0,
    //     scrub: 1,
    //   },
    // });

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
>>>>>>> 745e455c300219704c2a8ce865bb4152ae1b815e
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
      className="p-6 pt-16 relative h-screen flex flex-col"
    >
      {/* <button onClick={() => triggerVinyl()}>Click here</button> */}
      {/* logo */}
      <div className="down-ele h-9 w-16 bg-white" />
      {/* welcome message */}
      <h1 className="down-ele font-bold text-4xl text-white mt-10 ml-6 relative z-10">
        soundtrack of life
      </h1>
      {/* vinyl image */}
      <div className="w-full h-full relative z-0">
        <img
          id="vinyl-img"
          className="absolute top-0 -left-[85vw] size-[160vw] object-contain"
          src="/vinyl2.png"
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
