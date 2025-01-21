import React, { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
const links = [
  "Free",
  "New to Coding",
  "Most Popular",
  "Skills paths",
  "Career paths",
];

const Cards = () => {
  const [course, setCourse] = useState(null);
  const [category, setCategory] = useState(HomePageExplore[0].tag);
  return (
    <div className="flex justify-center">
      <div className="border-2 border-white w-fit flex gap-16 py-3 px-5 bg-richblack-800">
        {links.map((index) => (
          <ul key={index}>
            <li
              className={`text-richblack-100 ${
                index === category ? "bg-black text-white" : "bg-transparent"
              } `}
            >
              <button>{index}</button>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Cards;
