"use client";
import GenreScreen from "@/components/GenreScreen";
import gsap from "gsap";
import { useState, useEffect } from "react";
import ColorScreen from "./ColorScreen";
import FontScreen from "./FontScreen";
import TaglineScreen from "./TaglineScreen";
import LoadingStage from "./LoadingStage";
import ResultScreen from "./resultScreen";
import axios from "axios";

export default function QuizSection() {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [answers, setAnswers] = useState({});
  const [imageResult, setImageResult] = useState("");
  const [musicResult, setMusicResult] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const quizComponents = [
    GenreScreen,
    ColorScreen,
    FontScreen,
    TaglineScreen,
    LoadingStage,
    ResultScreen,
  ];
  function next() {
    if (currentQuiz === quizComponents.length - 1) return;
    gsap.fromTo(
      `#quiz-${currentQuiz}`,
      {
        x: "0%",
        scale: 1,
        opacity: 1,
      },
      {
        x: "-100%",
        scale: 0.8,
        duration: 1,
        opacity: 1,
      }
    );
    gsap.fromTo(
      `#quiz-${currentQuiz + 1}`,
      {
        x: "100%",
        scale: 0.8,
        opacity: 1,
      },
      {
        x: "0%",
        scale: 1,
        duration: 0.6,
        opacity: 1,
      }
    );
    setCurrentQuiz(currentQuiz + 1);
    console.log(answers, "answers");
  }
  function back() {
    if (currentQuiz === 0) return;
    gsap.fromTo(
      `#quiz-${currentQuiz}`,
      {
        x: "0%",
        scale: 1,
      },
      {
        x: "100%",
        scale: 0.8,
        duration: 1,
      }
    );
    gsap.fromTo(
      `#quiz-${currentQuiz - 1}`,
      {
        x: "-100%",
        scale: 0.8,
      },
      {
        x: "0%",
        scale: 1,
        duration: 0.6,
      }
    );
    setCurrentQuiz(currentQuiz - 1);
  }
  function onSelect(name, val) {
    answers[name] = val;
    setAnswers(answers);
  }

  // Submit answers to API
  useEffect(() => {
    if (currentQuiz === 4) {
      setIsLoading(true);

      // image
      async function createImage() {
        const genre = JSON.stringify(answers.genre);
        const color = JSON.stringify(answers.color);
        const font = answers.font;
        const tagline = answers.tagline;
        try {
          const response = await axios.post("/api/gen-img", {
            genre,
            color,
            font,
            tagline,
          });
          setImageResult(response.data.answer);
        } catch (error) {
          console.error("Error creating image:", error);
        }
      }
      createImage();

      // Music
      async function createMusic() {
        const genre = JSON.stringify(answers.genre);
        const color = JSON.stringify(answers.color);
        const font = answers.font;
        const tagline = answers.tagline;
        try {
          const response = await axios.post("/api/gen-music", {
            genre,
            color,
            font,
            tagline,
          });
          // .then((response) => response.blob())
          // .then((blob) => {
          //   window.saveAs(blob, "my-music.mp3");
          //   // Resolve the promise after a short delay to ensure the file save dialog appears
          //   return new Promise((resolve, reject) => {
          //     setTimeout(resolve, 1000); // Adjust the delay as needed
          //   });
          // })
          // .then(() => {
          //   // Navigate to Instagram story camera
          //   window.location.href = "instagram://story-camera";
          // })
          // .catch((error) => {
          //   console.error(
          //     "An error occurred while saving the music file:",
          //     error
          //   );
          // });
          setMusicResult(response.data.answer);
        } catch (error) {
          console.error("Error creating music:", error);
        }
      }
      createMusic();

      //////////////////
      setTimeout(() => {
        setIsLoading(false);
        next();
      }, 10000);
    }
  }, [currentQuiz, answers]);

  return (
    <div id="quiz-section-wrapper" className="relative z-10 h-screen">
      {quizComponents.map((Quiz, i) => (
        <Quiz
          key={i}
          className={`overflow-hidden absolute bottom-0 left-0 h-screen w-full flex flex-col justify-between pt-6 ${
            currentQuiz === i ? "z-10" : "pointer-events-none z-0 opacity-0"
          }`}
          id={`quiz-${i}`}
          onNext={() => next()}
          onBack={() => back()}
          onSelect={(name, val) => onSelect(name, val)}
          imageResult={imageResult}
          musicResult={musicResult}
          isActive={currentQuiz === i}
        />
      ))}
    </div>
  );
}
