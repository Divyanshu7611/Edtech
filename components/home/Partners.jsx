"use client";
import React from "react";

export default function Partners() {
  return (
    <main
      className="flex items-center justify-center flex-col bg-white  text-gray-900 pb-16 pt-16"
      id="partners"
    >
      <h1 className="heading !my-0">
        Our <span className="pinkline">Academic Partners</span>
      </h1>
      <div className="flex w-8/12 items-center justify-center mx-auto md:flex-row flex-col gap-4 md:gap-12 md:h-16 mt-10">
        <div className="md:flex-1 flex justify-center items-center partners transition-all scale-[0.3] h-16">
          <img src="/assets/partners/1.png" alt="" className="" />
        </div>
        <div className="md:flex-1 flex justify-center items-center partners transition-all h-16">
          <img src="/assets/partners/2.png" alt="" className="" />
        </div>
        <div className="md:flex-1 flex justify-center items-center partners transition-all scale-50 h-16">
          <img src="/assets/partners/3.png" alt="" className="" />
        </div>
        <div className="md:flex-1 flex justify-center items-center partners transition-all h-16">
          <img src="/assets/partners/4.png" alt="" className="" />
        </div>
      </div>
    </main>
  );
}
