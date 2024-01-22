import React from "react";

export default function BenifitCard({ index, heading, desc }) {
  return (
    <div className=" relative flex">
      <div className="pl-4 md:pl-8">
        <h3 className="text-2xl font-semibold text-gray-800 raleway">
          {heading}
        </h3>
        <p className="mt-1 text-gray-600 ">{desc}</p>
      </div>
      <div className="absolute h-8 ring-4 ring-[--secondary] aspect-square bg-white rounded-full -translate-x-1/2 left-0 top-0 z-10 grid place-items-center font-bold text-lg text-[--primary] raleway">
        {index}
      </div>
      {index === 3 && (
        <div className="absolute h-full bg-white w-2 left-0 top-0 -translate-x-1/2 z-[9]"></div>
      )}
    </div>
  );
}
