import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation } from "swiper/modules";
import NewsCard from "./NewsCard";

export default function News() {
  return (
    <section className="text-gray-600 body-font max-w-[75rem] mx-auto bg-gray-100 my-12 shadow-lg rounded-2xl px-16">
      <main
        className="flex items-center justify-center flex-col text-gray-900 pb-20 pt-8 mt-8"
        id="partners"
      >
        <h1 className="text-3xl text-gray-800 font-semibold lg:text-4xl mb-8 raleway max-w-2xl text-center">
          Level up in News!
        </h1>

        <Swiper
          // slidesPerView={4}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            540: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            890: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide className="rounded-2xl">
            <NewsCard />
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl">
            <NewsCard />
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl">
            <NewsCard />
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl">
            <NewsCard />
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl">
            <NewsCard />
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl">
            <NewsCard />
          </SwiperSlide>
          <SwiperSlide className="rounded-2xl">
            <NewsCard />
          </SwiperSlide>
        </Swiper>
      </main>
    </section>
  );
}
