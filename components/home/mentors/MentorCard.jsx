import React from "react";
import { BsLinkedin } from "react-icons/bs";

export default function MenotrCard({ name, deg, linkedin, image, index }) {
  return (
    <div className="max-w-sm mentorCard">
      <div className="p-4 shadow-2xl shadows">
        <div
          className="rounded-2xl rounded-tr-[65px] rounded-bl-[65px] overflow-hidden hover:!bg-gray-300 transition-all"
          style={{
            background: index % 2 == 0 ? "var(--primary)" : "var(--secondary)",
          }}
        >
          <img
            src={`/assets/speakers/${image}.png`}
            alt=""
            className="mentorImage object-cover object-center !h-[260px]"
          />
        </div>
        <div className="flex flex-col mt-2 items-start justify-end">
          <h1 className="text-2xl font-semibold raleway text-[--secondary]">
            {name}
          </h1>
          <p className="text-base raleway text-left h-6">{deg}</p>
          <div className="w-full mx-auto flex items-center justify-start mt-6">
            <a target="blank" href={linkedin} className="text-[#0a66c2]">
              <BsLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
