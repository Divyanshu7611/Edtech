import React from "react";
import HeadingText from "./HeadingText";
import ButtonComp from "./ButtonComp";
import img1 from "../../../assets/TimeLineLogo/Logo1.svg";
import img2 from "../../../assets/TimeLineLogo/Logo2.svg";
import img3 from "../../../assets/TimeLineLogo/Logo3.svg";
import img4 from "../../../assets/TimeLineLogo/Logo4.svg";
import TimeLine from "./TimeLine";

const SkillSection = () => {
  return (
    <div className="flex flex-col">
      <div className="flex lg:flex-row flex-col justify-between">
        <div className="lg:w-2/4 lg:text-4xl text-3xl font-semibold">
          Get the skills you need for a{" "}
          <HeadingText text={"job that is in demand."} />
        </div>
        <div className="lg:w-2/4 flex flex-col gap-10 mt-5 lg:mt-0">
          <p className="text-base text-richblack-700 lg:font-semibold font-medium">
            The modern StudyNotion is the dictates its own terms. Today, to be a
            competitive specialist requires more than professional skills.
          </p>
          <div className="w-fit">
            <ButtonComp
              children={"Learn More"}
              link={"/signup"}
              active={true}
            />
          </div>
        </div>
      </div>
      {/* next */}
      <div className="flex lg:flex-row flex-col mt-10">
        <div className="flex flex-col lg:w-1/3">
          <div>
            <TimeLine
              heading={"Leadership"}
              subHeading={"Fully committed to the success company"}
              logo={img1}
            />
          </div>
          <div className="border border-richblack-100 h-12 w-0 ml-6 my-3 border-dotted"></div>
          <div>
            <TimeLine
              heading={"Responsibility"}
              subHeading={"Students will always be our top priority"}
              logo={img2}
            />
          </div>
          <div className="border border-richblack-100 w-0 h-12 ml-6 my-3 border-dotted"></div>
          <div>
            <TimeLine
              heading={"Flexibility"}
              subHeading={"The ability to switch is an important skills"}
              logo={img3}
            />
          </div>
          <div className="ml-6 border border-richblack-100 w-0 h-12 my-3 border-dotted"></div>
          <div>
            <TimeLine
              heading={"Solve the problem"}
              subHeading={"Code your way to a solution"}
              logo={img4}
            />
          </div>
        </div>
        <div className="lg:w-2/3 Timeline flex lg:justify-center justify-end items-end">
          <div className="bg-[#014A32] m-3 lg:m-0 relative lg:top-10 p-11 items-center flex lg:flex-row flex-col justify-between lg:h-[128px] lg:w-[511px]">
            <div className="flex gap-5">
              <h1 className="font-bold text-4xl text-white">10</h1>
              <p className="font-medium text-sm text-[#05A77B]">
                YEARS <br></br>EXPERIENCES
              </p>
            </div>
            {/* line */}
            <div className="border lg:border-[#037957] w-0 h-11 border-[#014A32]"></div>
            {/* second box */}
            <div className="flex gap-5">
              <h1 className="font-bold text-4xl text-white">250</h1>
              <p className="font-medium text-sm text-[#05A77B]">
                TYPES OF<br></br>COURSES
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
