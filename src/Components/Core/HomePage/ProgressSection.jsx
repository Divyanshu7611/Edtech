import React from "react";
import HeadingText from "./HeadingText";

const ProgressSection = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-24">
      <div className="font-semibold text-4xl text-richblack-900">
        Your swiss knife for <HeadingText text={"learning any language"} />
      </div>
      <p className="text-richblack-700 text-sm font-medium text-center">
        Using spin making learning multiple languages easy. with 20+ languages
        realistic voice-over,<br></br> progress tracking, custom schedule and
        more.
      </p>
    </div>
  );
};

export default ProgressSection;
