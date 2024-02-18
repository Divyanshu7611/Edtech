import React from "react";

const TimeLine = ({ logo, heading, subHeading }) => {
  return (
    <div className=" flex gap-5">
      <div className="rounded-full p-[15px] flex bg-white">
        <img src={logo} alt="" className="h-[24px] w-[24px]" />
      </div>
      <div className="flex flex-col">
        <h2 className="text-richblack-800 text-lg font-semibold">{heading}</h2>
        <p className="text-richblack-700 font-normal text-sm">{subHeading}</p>
      </div>
    </div>
  );
};

export default TimeLine;
