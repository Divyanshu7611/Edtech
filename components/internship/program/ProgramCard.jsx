import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import ProgramPopup from "./ProgramPopup";

export default function ProgramCard({
  heading,
  image,
  points,
  index,
  students,
  data,
}) {
  return (
    <>
      <div className="w-[296px] rounded-2xl overflow-hidden shadows">
        <img
          src={`/assets/programs/${image}.png`}
          alt=""
          className="h-52 object-cover"
        />
        <div className="p-4 relative">
          <div className="w-8/12 h-8 rounded-full bg-gray-200 mx-auto absolute -top-5 flex items-center justify-center raleway left-1/2 -translate-x-1/2">
            <div className="-space-x-1">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gray-600">
                <span className="text-xs font-medium text-white leading-none">
                  HS
                </span>
              </span>
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-600">
                <span className="text-xs font-medium text-white leading-none">
                  AS
                </span>
              </span>
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-600">
                <span className="text-xs font-medium text-white leading-none">
                  NS
                </span>
              </span>
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gray-600">
                <span className="text-xs font-medium text-white leading-none">
                  SM
                </span>
              </span>
            </div>
            {"  "}
            <span className="ml-2 font-medium text-xs">
              {" "}
              +{students} Students
            </span>
          </div>
          <h1 className="subheading mt-6">
            {heading || "Full Stack Web Development"}
          </h1>
          <ul className="raleway my-2 space-y-2 max-h-24">
            {!points && (
              <li className="flex space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-[#fd0f73]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-base font-normal leading-tight text-gray-900 ">
                  2 team members
                </span>
              </li>
            )}
            {points &&
              points.map((point) => (
                <li className="flex space-x-3" key={point}>
                  {/* <!-- Icon --> */}
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-5 h-5 text-[--secondary]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-900 ">
                    {point}
                  </span>
                </li>
              ))}
          </ul>
          <div className="flex justify-between">
            <div>
              <a
                href="https://drive.google.com/file/d/1OgRf2t-J0FermcPdeV_npN3gew8qWqN7/view?usp=sharing"
                className="flex gap-2 items-center justify-center btn-fill-secondary mt-4"
              >
                Know More <AiOutlineArrowRight />
              </a>
            </div>
            <Link
              className="flex gap-2 items-center justify-center btn-fill-secondary mt-4"
              href="/register"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
      <ProgramPopup index={index} heading={heading} data={data} image={image} />
    </>
  );
}
