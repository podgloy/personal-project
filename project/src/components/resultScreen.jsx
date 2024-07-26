"use client";

import { useEffect, useRef, useState } from "react";
import FilmOverlay from "./FilmOverlay";
import SiteLogo from "./SiteLogo";
import domtoimage from "@intactile/dom-to-image-next";
import { saveAs } from "file-saver";
import Link from "next/link";

export default function ResultScreen({
  className,
  id,
  onBack,
  imageResult,
  musicResult,
  isActive,
}) {
  // audio
  useEffect(() => {
    const audio = document.querySelector("audio");
    if (audio && musicResult) {
      audio.src = musicResult; // Ensure the audio source is updated
      if (isActive) {
        audio.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      } else {
        audio.pause();
      }
    }
  }, [isActive, musicResult]);

  const handleRestart = () => {
    window.location.reload();
  };

  // screen capture
  function captureToFile() {
    domtoimage
      .toBlob(document.querySelector(".capture-screen"))
      .then((blob) => {
        // Save the image file and return a promise
        return new Promise((resolve, reject) => {
          window.saveAs(blob, "my-screen.png");
          // Resolve the promise after a short delay to ensure the file save dialog appears
          setTimeout(resolve, 1000); // Adjust the delay as needed
        });
      })
      .then(() => {
        // Navigate to Instagram story camera
        window.location.href = "instagram://story-camera";
      })
      .catch((error) => {
        console.error("An error occurred while capturing the screen:", error);
      });
  }
  // socials share
  let shareURL = "personal-project-six-opal.vercel.app";
  let shareTitle = "Soundtrack of Life";
  let socials = [
    {
      icon: "/icon/facebookIcon.png",
      link: `https://www.facebook.com/sharer/sharer.php?u=${shareURL}&t=${shareTitle}`,
    },
    {
      icon: "/icon/messengerIcon.png",
      link: `https://www.addtoany.com/add_to/facebook_messenger?linkurl=${shareURL}&linkname=${shareTitle}&linknote=${shareTitle}`,
    },
    {
      icon: "/icon/twitterIcon.png",
      link: `https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareURL}`,
    },
    {
      icon: "/icon/lineIcon.png",
      link: `https://social-plugins.line.me/lineit/share?url=https://${shareURL}`,
    },
  ];

  return (
    <div
      id={id}
      className={`capture-screen absolute bottom-0 left-0 h-screen w-full bg-[#155FCB] ${className}`}
    >
      <div className="px-5 flex items-center space-x-3 justify-end">
        {socials.map((social, index) => (
          <Link key={index} href={social.link} target="_blank">
            {/* {`${social.icon} `} */}
            <img className="size-5" src={`${social.icon} `} />
          </Link>
        ))}
      </div>
      {/* header */}

      <FilmOverlay />

      {/* share link */}
      <div>
        <button>
          <img src="" />
        </button>
      </div>

      <h2 className="allenoire pt-3 made-dillan text-[#FE65C5] text-3xl text-center">
        SOUNDTRACK
      </h2>

      <div className="flex flex-row justify-center">
        <h2 className="allenoire pt-3 made-dillan text-white text-3xl text-center">
          of
        </h2>
        <div className="allenoire pt-1 made-dillan text-white text-3xl text-center">
          <input
            className="allenoire w-44 placeholder:italic placeholder:underline focus:placeholder-transparent placeholder:text-[#B9FF46] placeholder:text-4xl text-center text-4xl uppercase text-[#B9FF46] bg-transparent py-1 px-[1/2]"
            placeholder="your...."
            name="input"
            type="text"
            maxLength="6"
          />
        </div>
        <h2 className="allenoire pt-4 made-dillan text-white text-3xl text-center">
          {`'s life`}
        </h2>
      </div>

      {/* music-gen */}
      <audio id="audio"></audio>
      {/* image-gen */}
      <div className="relative w-full">
        <img
          className="absolute animate-spin -left-[7vw] mt-32 z-0 w-[65vw]"
          src={imageResult}
        />
        {/* <img
          className="absolute animate-spin -left-[7vw] mt-32 z-0 w-[65vw]"
          src="/catttt.png"
        /> */}
        <img className="relative z-10  w-[90vw]" src="/vinylresult.png" />
      </div>

      {/* share & download */}
      <button
        onClick={captureToFile}
        className={`flex flex-col items-center space-y-2 absolute right-28 bottom-8 z-20 `}
      >
        <div className="button-shadow h-7 w-9 bg-[#FE65C5] rounded-full" />
        <p className="allenoire text-sm text-center">IG STORY</p>
      </button>
      <button
        onClick={handleRestart}
        className="content-center flex flex-col items-center space-y-2 absolute right-8 bottom-8 z-20"
      >
        <div className="button-shadow  h-7 w-9 bg-[#FE65C5] rounded-full" />
        <p className="allenoire text-sm text-center">RESTART</p>
      </button>
    </div>
  );
}
