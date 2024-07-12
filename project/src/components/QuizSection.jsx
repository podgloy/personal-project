"use client";
import GenreScreen from "@/components/GenreScreen";
import gsap from "gsap";
import { useState } from "react";
import ColorScreen from "./ColorScreen";
import FontScreen from "./FontScreen";
import TaglineScreen from "./TaglineScreen";
import LoadingStage from "./LoadingStage";

export default function QuizSection() {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const quizComponents = [
    GenreScreen,
    ColorScreen,
    FontScreen,
    TaglineScreen,
    LoadingStage,
  ];
  function next() {
    if (currentQuiz === quizComponents.length - 1) return;
    gsap.fromTo(
      `#quiz-${currentQuiz}`,
      {
        x: "0",
        scale: 1,
      },
      {
        x: "-100vw",
        scale: 0.8,
        duration: 1,
      }
    );
    gsap.fromTo(
      `#quiz-${currentQuiz + 1}`,
      {
        x: "100vw",
        scale: 0.8,
      },
      {
        x: "0",
        scale: 1,
        duration: 0.6,
      }
    );
    setCurrentQuiz(currentQuiz + 1);
  }
  function back() {
    if (currentQuiz === 0) return;
    gsap.fromTo(
      `#quiz-${currentQuiz}`,
      {
        x: "0",
        scale: 1,
      },
      {
        x: "100vw",
        scale: 0.8,
        duration: 1,
      }
    );
    gsap.fromTo(
      `#quiz-${currentQuiz - 1}`,
      {
        x: "-100vw",
        scale: 0.8,
      },
      {
        x: "0",
        scale: 1,
        duration: 0.6,
      }
    );
    setCurrentQuiz(currentQuiz - 1);
  }

  return (
    <div
      id="quiz-section-wrapper"
      className="relative z-10 h-screen w-screen overflow-hidden"
    >
      {quizComponents.map((Quiz, i) => (
        <Quiz
          key={i}
          className={currentQuiz === i ? "z-10" : "pointer-events-none z-0"}
          id={`quiz-${i}`}
          onNext={() => next()}
          onBack={() => back()}
        />
      ))}
    </div>
  );
}
