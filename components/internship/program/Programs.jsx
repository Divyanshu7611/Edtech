"use client";
import { useState } from "react";
import ProgramCardSection from "./ProgramCardSection";
import { programs } from "../../../data/intern";

export default function Programs() {
  const [currentData, setCurrentData] = useState(programs.all);

  return (
    <main
      className="flex items-center justify-center flex-col text-black py-16"
      id="programs"
    >
      <div className="heading">
        <span className="pinkline">Internships</span> we offer
      </div>
      <div className="">
        <div className="flex items-center justify-center mb-8 gap-4 flex-wrap">
          <button
            className="filterBtn-active filterMark"
            id="all"
            onClick={(e) => {
              e.preventDefault();
              setCurrentData(programs.all);
              document.querySelectorAll(".filterMark").forEach((btn) => {
                btn.classList.remove("filterBtn-active");
                btn.classList.add("filterBtn");
              });
              e.target.classList.remove("filterBtn");
              e.target.classList.add("filterBtn-active");
            }}
          >
            All Programs
          </button>
          <button
            className="filterBtn filterMark"
            id="web"
            onClick={(e) => {
              e.preventDefault();
              setCurrentData(programs.web);

              document.querySelectorAll(".filterMark").forEach((btn) => {
                btn.classList.remove("filterBtn-active");
                btn.classList.add("filterBtn");
              });
              e.target.classList.remove("filterBtn");
              e.target.classList.add("filterBtn-active");
            }}
          >
            Full Stack Development
          </button>
          <button
            className="filterBtn filterMark"
            id="ds"
            onClick={(e) => {
              e.preventDefault();
              setCurrentData(programs.ds);

              document.querySelectorAll(".filterMark").forEach((btn) => {
                btn.classList.remove("filterBtn-active");
                btn.classList.add("filterBtn");
              });
              e.target.classList.remove("filterBtn");
              e.target.classList.add("filterBtn-active");
            }}
          >
            Data Science
          </button>
          <button
            className="filterBtn filterMark"
            id="dm"
            onClick={(e) => {
              e.preventDefault();
              setCurrentData(programs.dm);

              document.querySelectorAll(".filterMark").forEach((btn) => {
                btn.classList.remove("filterBtn-active");
                btn.classList.add("filterBtn");
              });
              e.target.classList.remove("filterBtn");
              e.target.classList.add("filterBtn-active");
            }}
          >
            Digital Marketing
          </button>
        </div>
        <ProgramCardSection data={currentData} />
      </div>
    </main>
  );
}
