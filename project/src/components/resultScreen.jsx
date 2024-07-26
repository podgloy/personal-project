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
    if (!isActive) {
      audio.pause();
      return;
    } else {
      console.log(audio);
      audio.play();
    }
  }, [isActive]);
  // video recording [faied on mobile]
  const [recorder, setRecorder] = useState(null);
  const [displayMedia, setDisplayMedia] = useState(null);
  const startScreenRecording = async () => {
    alert("click");

    try {
      // Prompt the user to select a screen or window to share
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: { mediaSource: "screen" },
        audio: true,
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
      alert(err, "error");
      console.error("Error: " + err);
    }
  };

  const handleRestart = () => {
    window.location.reload();
  };

  // screen capture
  function captureToFile() {
    console.log("click");
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
      text: "facebook",
      link: `https://www.facebook.com/sharer/sharer.php?u=${shareURL}&t=${shareTitle}`,
    },
    {
      text: "facebook messenger",
      link: `https://www.addtoany.com/add_to/facebook_messenger?linkurl=${shareURL}&linkname=${shareTitle}&linknote=${shareTitle}`,
    },
    {
      text: "twitter",
      link: `https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareURL}`,
    },
    {
      text: "line",
      link: `https://social-plugins.line.me/lineit/share?url=https://${shareURL}`,
    },
  ];

  return (
    <div
      id={id}
      className={`capture-screen absolute bottom-0 left-0 h-screen w-full bg-[#155FCB] ${className}`}
    >
      {/* <button onClick={captureToFile}>share result to instagram</button> */}
      {socials.map((social, index) => (
        <Link key={index} href={social.link} target="_blank">
          {`${social.text} >>`}
        </Link>
      ))}
      {/* header */}

      <FilmOverlay />

      <h2 className="allenoire pt-4 made-dillan text-[#FE65C5] text-3xl text-center">
        SOUNDTRACK
      </h2>

      <div className="flex flex-row justify-center">
        <h2 className="allenoire pt-4 made-dillan text-white text-3xl text-center">
          of
        </h2>
        <div className="allenoire pt-2 made-dillan text-white text-3xl text-center">
          <input
            className="allenoire w-44 placeholder:italic placeholder:underline focus:placeholder-transparent placeholder:text-[#B9FF46] placeholder:text-4xl text-center text-4xl uppercase text-[#B9FF46] bg-transparent py-1 px-[1/2]"
            placeholder="your...."
            name="input"
            type="text"
            maxLength="6"
          />
        </div>
        <h2 className="allenoire pt-4 made-dillan text-white text-3xl text-center">
          life
        </h2>
      </div>

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
      <div className="relative w-full">
        <img
          className="absolute animate-spin -left-[7vw] mt-32 z-0 w-[65vw]"
          src={imageResult}
        />
        {/* <img
          className="absolute animate-spin -left-[7vw] mt-32 z-0 w-[65vw]"
          src="/catttt.png"
        /> */}
        <img className="relative z-0 pr-6 w-full" src="/resultVinyl.png" />
      </div>

      {/* share & download */}
      <button onClick={captureToFile} className="flex justify-center">
        <div className="button-shadow absolute right-32 bottom-16 h-7 w-9 bg-[#FE65C5] rounded-full" />
        <p className="absolute allenoire bottom-8 right-32 text-sm text-center">
          SHARE
        </p>
      </button>
      <button onClick={handleRestart} className="content-center">
        <div className="button-shadow absolute right-12 bottom-16 h-7 w-9 bg-[#FE65C5] rounded-full" />
        <p className="absolute allenoire bottom-8 right-8 text-sm text-center">
          RESTART
        </p>
      </button>
    </div>
  );
}
