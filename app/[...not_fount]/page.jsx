import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="text-center py-24 px-4 sm:px-6 lg:px-8">
      <h1 className="block text-7xl font-bold text-gray-800 sm:text-9xl ">
        404
      </h1>
      <h1 className="block text-2xl font-bold text-white"></h1>
      <p className="mt-3 text-gray-600 ">Oops, something went wrong.</p>
      <p className="text-gray-600 ">Sorry, we could not find your page.</p>
      <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
        <Link
          className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-full border border-transparent font-semibold text-[--primary] hover:text-[--primary] focus:outline-none focus:ring-2 ring-offset-white focus:ring-[--primary] focus:ring-offset-2 transition-all text-sm py-3 px-4 "
          href="/"
        >
          <svg
            className="w-2.5 h-2.5"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M11.2792 1.64001L5.63273 7.28646C5.43747 7.48172 5.43747 7.79831 5.63273 7.99357L11.2792 13.64"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          Back to home
        </Link>
      </div>
    </div>
  );
}
