"use client";

import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { register } from "swiper/element/bundle";
import { useEffect } from "react";

import GenreScreen from "@/components/GenreScreen";
import GenreScreen2 from "@/components/GenreScreen2";

import WelcomeScreen from "@/components/WelcomeScreen";
import { ScrollToPlugin } from "gsap/all";

export default function Home() {
  return (
    <main className="text-white bg-zinc-900">
      <WelcomeScreen />

      {/* <div className="blackBG bg-zinc-900 w-full h-[80vh]"></div> */}

      <GenreScreen />
      <GenreScreen2 />

      {/* <WelcomeSection /> */}
    </main>
  );
}
