"use client";

export default function ResultScreen({ className, id, onNext, onBack }) {
  return (
    <div
      id={id}
      className={`absolute bottom-0 left-0 h-screen w-screen bg-[url('/bg/BlueBG.png')] bg-contain flex flex-col pt-16 ${className}`}
    >
      {/* header */}
      <p className="pt-16 made-dillan text-white text-2xl text-center">
        SOUNDTRACK
      </p>
      <p className="pt-4 made-dillan text-white text-5xl text-center">
        of ........ 's life
      </p>

      {/* vinyl image */}
      <img className="mt-12 w-full" src="/resultVinyl.png" />

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
