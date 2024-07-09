"use client";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import { ReactLenis } from "lenis/react";

export default function LenisProvider({ children, options }) {
  // gsap with lenis
  const lenisRef = useRef();
  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);
    return () => {
      gsap.ticker.remove(update);
    };
  });
  // register plugin
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      autoRaf={false}
      options={{ smoothTouch: true, ...options }}
    >
      {children}
    </ReactLenis>
  );
}
