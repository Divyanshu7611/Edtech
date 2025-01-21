import React from "react";

const stats = [
  {
    Number: "5K",
    title: "Active Students",
  },
  {
    Number: "10+",
    title: "Mentors",
  },
  {
    Number: "200+",
    title: "Courses",
  },
  {
    Number: "50+",
    title: "Awards",
  },
];
function Stats() {
  return (
    <div className="bg-[#161D29] min-w-screen p-12 border border-[#2C333F]">
      <div className="flex flex-row justify-between max-w-[1050px] mx-auto">
        {stats.map((stat, index) => (
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-[30px] text-[#F1F2FF]">
              {stat.Number}
            </h1>
            <p className="text-[#585D69] text-base font-semibold">
              {stat.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stats;
