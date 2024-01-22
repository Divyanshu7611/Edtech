import React from "react";
import BenifitCard from "./BenifitCard";

export default function Benifits() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-16 mx-auto">
      <div className="flex items-stretch justify-center">
        <img
          src="/assets/benifits/benifit.png"
          alt=""
          className="hidden md:block max-w-md mr-0 md:mr-8l"
        />
        <div className="flex flex-col items-start py-8">
          <h2 className="headingLabel mx-auto md:mb-4 md:mx-0">Education</h2>
          <h1 className="heading ">
            Impact IT services is more{" "}
            <span className="pinkline">than education</span>
          </h1>
          <ul className="space-y-10">
            <li className="flex items-center gap-8">
              <img
                src="/assets/benifits/1.png"
                alt=""
                className="shadow-lg rounded-full"
              />
              <span className="text-[18px] text-gray-500 raleway">
                Learn directly from Industry experts
              </span>
            </li>
            <li className="flex items-center gap-8">
              <img
                src="/assets/benifits/2.png"
                alt=""
                className="shadow-lg rounded-full"
              />
              <span className="text-[18px] text-gray-500 raleway">
                Hands-on Practical Learning Experience
              </span>
            </li>
            <li className="flex items-center gap-8">
              <img
                src="/assets/benifits/3.png"
                alt=""
                className="shadow-lg rounded-full"
              />
              <span className="text-[18px] text-gray-500 raleway">
                Placement Support and Career Guidance
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
