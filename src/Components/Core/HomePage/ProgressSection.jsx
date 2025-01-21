import React from "react";
import HeadingText from "./HeadingText";
import photo1 from "../../../assets/Images/Know_your_progress.svg";
import photo2 from "../../../assets/Images/Compare_with_others.svg";
import photo3 from "../../../assets/Images/Plan_your_lessons.svg";
import ButtonComp from "./ButtonComp";

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
      {/* /////photo sectionm */}
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <img src={photo1} alt="" className="relative lg:left-28 -z-0" />
        <img
          src={photo2}
          alt=""
          className="z-10 relative bottom-12 lg:bottom-0"
        />
        <img
          src={photo3}
          alt=""
          className="relative lg:right-36 z-20 bottom-32 lg:bottom-0"
        />
      </div>
      <div>
        <ButtonComp children={"Learn More"} active={true} link={"/signup"} />
      </div>
    </div>
  );
};

export default ProgressSection;
