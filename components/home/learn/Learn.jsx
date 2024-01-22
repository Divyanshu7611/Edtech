import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation } from "swiper/modules";

export default function Learn() {
  return (
    <section className="text-gray-600 body-font max-w-[75rem] mx-auto my-12 px-4 md:px-16">
      <main
        className="flex items-center justify-center flex-col text-gray-900 pb-20 pt-8 mt-8"
        id="partners"
      >
        <h1 className="heading text-center !text-3xl md:!text-5xl">
          Learn from experts working at companies which could be your future{" "}
          <span className="pinkline">employers!</span>
        </h1>

        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="md:max-w-[75rem] w-full "
        >
          <SwiperSlide className="w-full rounded-2xl">
            <img
              src="/assets/images/learn/learn-mob-1.jpg"
              alt=""
              className="rounded-2xl md:!hidden !block"
            />
            <img
              src="/assets/images/learn/learn-1.png"
              alt=""
              className="rounded-2xl !hidden md:!block"
            />
          </SwiperSlide>
          <SwiperSlide className="w-full rounded-2xl">
            <img
              src="/assets/images/learn/learn-mob-2.jpg"
              alt=""
              className="rounded-2xl md:!hidden !block"
            />
            <img
              src="/assets/images/learn/learn-2.png"
              alt=""
              className="rounded-2xl !hidden md:!block"
            />
          </SwiperSlide>
        </Swiper>
      </main>
    </section>
  );
}
