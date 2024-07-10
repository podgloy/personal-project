import React from "react";

export default function WelcomeScreen() {
  return (
    <div className="pl-5 pr-5 pt-14 h-screen bg-zinc-900 flex flex-col">
      <div className="flex flex-row justify-between">
        {/* logo */}
        <h1 className="text-white text-m font-bold"> Logo </h1>
        <img src="/4dot.svg" />
      </div>

      {/* vinyl image */}
      <img
        className="mt-44 place-self-center animate-spin size-[70vw]"
        src="/vinyl2.png"
      />

      {/* loading */}
      <p className="pt-20 font-semibold text-3xl text-center">loading...</p>
      <div className="flex flex-row px-20">
        <div className="mt-4 h-1 w-40 bg-zinc-300 rounded-full place-self-center" />
        <div className="mt-4 h-1 w-60 bg-zinc-700 rounded-full place-self-center" />
      </div>
    </div>
  );
}
