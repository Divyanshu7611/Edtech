"use client";

import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <div
      className="relative w-full mx-auto min-h-screen flex items-center justify-start gap-12 rounded-bl-[75px] heroContainer"
      id="home"
    >
      <div className="flax flex-col items-start justify-between max-w-max px-8 md:px-24">
        <div className="raleway text-white font-semibold text-base ml-1">
          Impact IT services
        </div>
        <div className="text-5xl font-semibold md:text-8xl text-[white]">
          Experience the
          <br />
          <div className="pinkline after:!w-full after:!bg-[100% 100%] relative w-max">
            Difference
          </div>
        </div>
        <p className="max-w-xl my-4 md:my-8 font-light text-sm md:text-base raleway tracking-wide text-white">
          Our world-class modern learning infrastructure, expert course
          creators, and placement support will help you achieve your goals and
          reach new heights. Join us at our Hubs and experience the difference!!
        </p>
        <Link
          className="btn-fill-lg"
          href="https://forms.gle/ugDehPTR52iRUFns6"
        >
          Impact IT services
        </Link>
      </div>
      {/* <div className="ladder">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div> */}
    </div>
  );
}
