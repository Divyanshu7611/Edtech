"use client";

import React from "react";
import Link from "next/link";
// import { url } from "inspector";

export default function Hero() {
  return (
    <div
      className="relative w-full mx-auto min-h-screen flex items-center justify-start gap-12 rounded-bl-[75px] heroContainer1"
      id="home1"
    >
      <div className="flax flex-col items-start justify-between max-w-max px-8 md:px-24">
        <div className="raleway text-white font-black text-base ml-1 ">
          Impact IT services
        </div>
        <div className="text-5xl font-semibold md:text-8xl text-white">
          LevelUp Your
          <br />
          <div className="pinkline after:!w-full after:!bg-[100% 100%] relative w-max">
            Skills
          </div>
        </div>
        <p className="max-w-xl my-4 md:my-8 font-light text-sm md:text-base raleway tracking-wide text-white opacity-0 lg:opacity-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet harum
          necessitatibus similique sequi! Architecto asperiores consequatur,
          omnis corporis, ratione dolore id, ab accusantium nostrum quisquam hic
          ad fugiat sequi repudiandae?
        </p>
        <Link
          className="bg-yellow-500 text-xl font-bold px-6 py-2 rounded-lg hover:scale-110 hover:bg-blue-500 hover:text-white transition-all text-gray-800 border border-black shadow-lg"
          href="/register"
        >
          APPLY NOW
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
