import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import MenotrCard from "./MentorCard";
import { mentors } from "../../../data/mentors";

export default function Menotrs() {
  return (
    <section className="text-gray-600 body-font mx-auto my-12 px-4 md:px-16 pb-0">
      <main
        className="flex items-center justify-center flex-col text-gray-900 pb-0 pt-8 mt-8"
        id="partners"
      >
        <h1 className="heading max-w-4xl !text-3xl md:!text-5xl">
          Learn directly <div className="pinkline">from CXOs, founders</div> and
          senior leaders at startups
        </h1>

        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          spaceBetween={10}
          // navigation={true}
          modules={[Pagination]}
          className="mySwiper !py-12 !max-w-[85rem]"
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
          {mentors.map((mentor, index) => (
            <SwiperSlide className="rounded-2xl" key={mentor.name}>
              <MenotrCard
                name={mentor.name}
                deg={mentor.deg}
                linkedin={mentor.linkedin}
                image={mentor.image}
                index={index}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </section>
  );
}
