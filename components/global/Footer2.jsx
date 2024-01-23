import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer2() {
  return (
    <>
      <footer className="bg-[#1d1a49] text-white w-full border-t-[#ffffffa2] border-t-2">
        <div className="mx-auto container p-4 py-6 lg:py-8 ">
          {" "}
          <div className="lg:flex lg:justify-between lg:w-10/12 mx-auto gap-4">
            <div className="mt-12 lg:mb-0">
              <Link href={"/"} className="flex items-center">
                <img src="/assets/images/logo.png" className="h-8 mr-6 mt-2" />
              </Link>
            </div>
            <div className=" flex-grow max-w-lg">
              <h2 className="mt-8 lg:mt-0 mb-6 text-xl font-semibold text-gray-200 uppercase flex items-center justify-start text-left raleway">
                About
              </h2>
              <p className="text-gray-200">
                At Impact IT services, we bridge the gap between the skills that
                industries demand and the skills that colleges offer. At our
                offline centers, we upskill students in various domains such as
                web development, data science, and more, so that they can pursue
                their dream careers.
              </p>
            </div>
            <div className="grid grid-cols-1">
              <div>
                <h2 className="mt-8 lg:mt-0 mb-6 text-gray-200 uppercase text-xl font-semibold raleway">
                  Quick Links
                </h2>
                <ul className="text-gray-300 font-medium flex gap-4 text-sm">
                  <div className="">
                    <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300">
                      <Link className="" href="/">
                        Home
                      </Link>
                    </li>
                    <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300">
                      <Link className="" href="#">
                        Programs
                      </Link>
                    </li>
                    {/* <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300">
                      <Link
                        className=""
                        href="#"
                        // href="https://growthlabs.leveluphubs.com/"
                        target="blank"
                      >
                        Growth Labs
                      </Link>
                    </li> */}
                    <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300">
                      <Link
                        className=""
                        // href="/about"
                        href="#"
                      >
                        About
                      </Link>
                    </li>
                    <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300">
                      <Link className="" href="#">
                        Contact
                      </Link>
                    </li>

                    <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300">
                      <Link className="" href="#">
                        Careers
                      </Link>
                    </li>
                  </div>
                  {/* <div className="">
                    <li>
                      <Link href="/" className="hover:text-pink-500">
                        Brainy Champs
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://growthlabs.leveluphubs.com"
                        className="hover:text-pink-500"
                      >
                        Growth Labs
                      </Link>
                    </li>
                  </div> */}
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between max-w-screen-xl mx-auto">
            <span className="text-lg text-gray-300 sm:text-center">
              © 2023{" "}
              <Link href={"/"} className="hover:text-pink-500">
                Impact IT services™
              </Link>{" "}
              | All Rights Reserved
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0 text-lg">
              <a href="#" className="text-gray-300 hover:text-pink-600">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-300 hover:text-pink-600">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-300 hover:text-pink-600">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-300 hover:text-pink-600">
                <FaYoutube />
              </a>
              <a href="#" className="text-gray-300 hover:text-pink-600">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* <div className="w-full flex items-end overflow-hidden justify-center">
          <h1 className="text-[10rem] font-light text-white opacity-30 leading-none">
            level UP
          </h1>
        </div> */}
      </footer>
    </>
  );
}
