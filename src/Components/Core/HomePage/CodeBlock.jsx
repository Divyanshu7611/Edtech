import React, { Children } from "react";
import HeadingText from "./HeadingText";
import ButtonComp from "./ButtonComp";
import { FaArrowRight } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";

const CodeBlock = ({
  heading,
  subHeading,
  button1,
  button2,
  positions,
  background,
  link1,
  link2,
  codeblock,
  codeColor,
}) => {
  return (
    <div className={`flex w-[90%] justify-between mx-auto ${positions}`}>
      <div className="lg:w-2/4 lg:px-12 px-6 font-inter flex flex-col h-full justify-between gap-10">
        <div className="font-bold text-4xl text-richblack-5">{heading}</div>
        <div className="text-base text-richblack-300 mt-3">{subHeading}</div>
        {/* buttons */}
        <div className="flex gap-7">
          <ButtonComp
            children={
              <div className="flex justify-between items-center font-semibold">
                <div>{button1}</div>
                <FaArrowRight />
              </div>
            }
            link={link1}
            active={true}
          />
          <ButtonComp children={button2} active={false} link={link2} />
        </div>
      </div>
      {/* code section */}
      {/* <div className="backShadow"></div> */}
      <div className="flex lg:w-[40%] w-fit items-baseline gap-2 shadow-sm shadow-richblack-200 bg-richblack-800 py-2 px-4 opacity-60">
        <div className="flex flex-col font-inter gap-1 text-xs text-richblack-400">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
        </div>
        {/* cod */}

        <div
          className={`flex flex-col font-mono text-bold text-sm ${codeColor} `}
        >
          <TypeAnimation
            sequence={[codeblock, 2000, ""]}
            repeat={Infinity}
            cursor={true}
            style={{
              whiteSpace: "pre-line",
              display: "block",
            }}
            omitDeletionAnimation={true}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;
