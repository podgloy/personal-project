"use client";
import QuizSection from "@/components/QuizSection";
import WelcomeScreen from "@/components/WelcomeScreen";
import LenisProvider from "@/components/LenisProvider";
import { useState } from "react";
import { useLenis } from "lenis/react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { register } from "swiper/element/bundle";
import { useEffect } from "react";
import { ScrollToPlugin } from "gsap/all";
import GenreScreen from "@/components/GenreScreen";
import GenreScreen2 from "@/components/GenreScreen2";
import FontScreen from "@/components/FontScreen";
import TaglineScreen from "@/components/TaglineScreen";
import LoadingStage from "@/components/LoadingStage";
import ColorScreen from "@/components/ColorScreen";

export default function Home() {
  // state for show welcome screen
  const [isShowWelcomeScreen, setIsShowWelcomeScreen] = useState(true);
  // use lenis to scroll to quiz section
  const lenis = useLenis(
    (e) => {
      if (e.progress > 0.2 && isShowWelcomeScreen) {
        // scroll to #scrren2
        lenis.scrollTo("#quiz-section-wrapper", {
          lerp: 0.06,
          lock: true,
          force: true,
          onComplete: () => setIsShowWelcomeScreen(false),
        });
      }
    },
    [isShowWelcomeScreen]
  );

  return (
    <main className="text-white bg-zinc-900">
      <LenisProvider>
        {isShowWelcomeScreen ? <WelcomeScreen /> : null}
        <QuizSection />
        <ColorScreen />
      </LenisProvider>
    </main>
  );
}
