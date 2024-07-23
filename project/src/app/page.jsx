"use client";
import QuizSection from "@/components/QuizSection";
import WelcomeScreen from "@/components/WelcomeScreen";
import LenisProvider from "@/components/LenisProvider";
import { useState } from "react";
import { useLenis } from "lenis/react";

export default function Home() {
  // state for show welcome screen
  const [isShowWelcomeScreen, setIsShowWelcomeScreen] = useState(true);
  // use lenis to scroll to quiz section
  const lenis = useLenis(
    (e) => {
      if (e.progress > 0.2 && isShowWelcomeScreen) {
        // scroll to #screen2
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
      </LenisProvider>
    </main>
  );
}
