"use client";

import { useEffect, useRef, useState } from "react";
import FilmOverlay from "./FilmOverlay";
import SiteLogo from "./SiteLogo";

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
    if (!isActive) {
      audio.pause();
      return;
    } else {
      console.log(audio);
      audio.play();
    }
  }, [isActive]);
  // video recording
  const [recorder, setRecorder] = useState(null);
  const [displayMedia, setDisplayMedia] = useState(null);
  const startScreenRecording = async () => {
    try {
      // Prompt the user to select a screen or window to share
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: { mediaSource: "screen" },
      });

      const newRecorder = new MediaRecorder(stream);
      setRecorder(newRecorder);
      setDisplayMedia(stream.getVideoTracks()[0]);
      const screenRecordingChunks = [];

      newRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          screenRecordingChunks.push(e.data);
        }
      };

      newRecorder.onstop = () => {
        const blob = new Blob(screenRecordingChunks, { type: "video/webm" });
        const url = URL.createObjectURL(blob);

        // Create a download link and click it programmatically
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = "screen-recording.webm";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);

        // Stop the display media stream
        if (displayMedia) {
          displayMedia.stop();
        }
      };

      // Start the recording
      newRecorder.start();
      setTimeout(() => {
        // Stop the recording after 10 seconds
        newRecorder.stop();
      }, 10000); // 10 seconds
    } catch (err) {
      console.error("Error: " + err);
    }
  };
  return (
    <div
      id={id}
      className={`absolute bottom-0 left-0 h-screen w-full bg-[#155FCB] bg-contain flex flex-col pt-16 ${className}`}
    >
      <button onClick={startScreenRecording}>Start 10s Screen Recording</button>
      {/* header */}
      <div className="px-5">
        <SiteLogo />
        <FilmOverlay />
      </div>
      <h2 className="pt-16 made-dillan text-white text-2xl text-center">
        SOUNDTRACK
      </h2>
      <h2 className="pt-4 made-dillan text-white text-5xl text-center">
        of ........ 's life
      </h2>

      {/* music-gen */}
      {/* <audio>
        <source
          src="https://file-examples.com/storage/fec56f7158669f77293e4db/2017/11/file_example_MP3_700KB.mp3"
          type="audio/mpeg"
        />
      </audio> */}

      <audio>
        <source src={musicResult} type="audio/mpeg" />
      </audio>

      {/* image-gen */}
      <div className="relative mt-8 w-full">
        <img className="absolute pt-40 z-0 w-[60%]" src={imageResult} />
        {/* <img className="absolute pt-40 z-0 w-[60%]" src="/catttt.png" /> */}
        <img className="relative z-10 w-full" src="/resultVinyl.png" />
      </div>

      {/* share & download */}
      <button>
        <div className="absolute right-5 bottom-16 h-10 w-10 bg-white rounded-full" />
        <div className="absolute right-20 bottom-16 h-10 w-10 bg-white rounded-full" />
      </button>

      {/* back button */}
      <button
        onClick={onBack}
        className="absolute bottom-8 p-5 flex space-x-3 items-center"
      >
        <img className="w-8 rotate-180" src="/arrow2.svg" />
        <span className="font-medium text-black"> back </span>
      </button>
    </div>
  );
}
