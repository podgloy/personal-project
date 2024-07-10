"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function GenreScreen({ className, id, onBack, onNext }) {
  const images = [
    "/romance.png",
    "/comedy.png",
    "/romance.png",
    "/comedy.png",
    "/romance.png",
    "/comedy.png",
  ];

<<<<<<< HEAD
  return (
    <div
      id={id}
      className={`absolute bottom-0 left-0 h-screen w-screen bg-zinc-900 flex flex-col pt-16 ${className}`}
    >
      {/* question */}
      <div className="question pl-5 pr-5">
        <div className="p-5 flex flex-row justify-between">
          <h1 className="text-white text-m font-bold"> Logo </h1>
          <img src="/4dot.svg" />
        </div>

        <div className="pt-9">
          <h1 className="text-white opacity-50 text-4xl font-bold">
            {" "}
            If your life{" "}
          </h1>
          <h1 className="text-white opacity-50 text-4xl font-bold">
            {" "}
            were a movie,{" "}
          </h1>
        </div>

        {/* 2nd paragraph */}
        <div className="pt-5">
          <h1 className="text-white opacity-60 text-3xl font-bold text-right">
            {" "}
            What{" "}
          </h1>
          <h1 className="pt-3 text-[#DBFC3B] text-6xl font-bold text-right">
            {" "}
            GENRE{" "}
          </h1>
          <h1 className="text-white opacity-60 text-3xl font-bold text-right">
            {" "}
            would it belong to?{" "}
          </h1>
=======
  register();
  const initLenis = () => {
    const lenis = new Lenis({
      duration: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);

    // animate
    gsap.to("#genre-screen-wrapper", {
      // yPercent: -200,
      position: "sticky",
      top: 0,
      ease: "expo.out",
      duration: 0.1,
      scrollTrigger: {
        trigger: "#genre-screen-wrapper",
        start: "top top",
        // end: 0,
        scrub: 1,
      },
    });

    // vinyl animate
    // gsap.to("#vinyl-img", {
    //   rotate: 180,
    //   duration: 2,
    //   scrollTrigger: {
    //     trigger: "",
    //     start: "top top",
    //     end: "bottom top",
    //     scrub: 1,
    //   },
    // });

    useEffect(() => {
      initLenis();
    }, []);

    return (
      <div
        id="genre-screen-wrapper"
        className="h-screen bg-zinc-900 flex flex-col pt-14 z-10 relative"
      >
        <div className="question pl-5 pr-5">
          <div className="flex flex-row justify-between">
            <h1 className="text-white text-m font-bold"> Logo </h1>
            <img src="/4dot.svg" />
          </div>

          <div className="pt-9">
            <h1 className="text-white opacity-50 text-4xl font-bold">
              If your life
            </h1>
            <h1 className="text-white opacity-50 text-4xl font-bold">
              were a movie,
            </h1>
          </div>

          {/* 2nd paragraph */}
          <div className="pt-5">
            <h1 className="text-white opacity-60 text-3xl font-bold text-right">
              What
            </h1>
            <h1 className="pt-3 text-[#DBFC3B] text-6xl font-bold text-right">
              GENRE
            </h1>
            <h1 className="text-white opacity-60 text-3xl font-bold text-right">
              would it belong to?
            </h1>
          </div>
        </div>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.3}
          spaceBetween={35}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 200,
            modifier: 1,
            scale: 1.3,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper h-full w-full !pt-7"
        >
          {images.map((image, i) => (
            <SwiperSlide key={`slide-${i}`}>
              <img className="w-full h-full" src={image} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* navigation */}
        <div className="p-5 flex flex-row justify-end">
          <span className="font-medium text-white pr-3"> next </span>
          <img className="w-8 " src="/arrow2.svg" />
>>>>>>> 745e455c300219704c2a8ce865bb4152ae1b815e
        </div>
      </div>
      {/* swiper */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.4}
        spaceBetween={20}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper h-full w-full !pt-7"
      >
        {images.map((image, i) => (
          <SwiperSlide key={`slide-${i}`}>
            <img className="w-full h-full" src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* button */}
      <div className="flex justify-between">
        <button onClick={onBack} className="p-5 flex space-x-3 items-center">
          <img className="w-8 rotate-180" src="/arrow2.svg" />
          <span className="font-medium text-white"> back </span>
        </button>
        <button onClick={onNext} className="p-5 flex space-x-3 items-center">
          <span className="font-medium text-white"> next </span>
          <img className="w-8 " src="/arrow2.svg" />
        </button>
      </div>
    </div>
  );
}
