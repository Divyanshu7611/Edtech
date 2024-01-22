import Link from "next/link";
import React from "react";
import {
  PiInstagramLogo,
  PiTwitterLogo,
  PiLinkedinLogo,
  PiInstagramLogoBold,
  PiTwitterLogoBold,
  PiLinkedinLogoBold,
} from "react-icons/pi";

export default function Footer() {
  return (
    <footer
      className="w-full bg-[--secondary] overflow-hidden"
      style={{
        background: "url('/assets/images/footerBg.png')",
        backgroundPosition: "center top",
      }}
    >
      <div className="max-w-[85rem] py-10 pt-24 px-4 sm:px-6 lg:px-8 mx-auto">
        {/* <!-- Grid --> */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 text-center pb-6">
          <div>
            <Link
              className="flex-none text-xl font-semibold text-black"
              href="/"
              aria-label="Brand"
            >
              {/* <img
                src="/assets/images/logo-white.png"
                alt=""
                className="w-32"
              /> */}
            </Link>
          </div>
          {/* <!-- End Col --> */}

          <ul className="text-center">
            <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300">
              <Link
                className="inline-flex gap-x-2 text-sm text-gray-200 hover:text-[--primary]"
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300">
              <Link
                className="inline-flex gap-x-2 text-sm text-gray-200 hover:text-[--primary]"
                href="#"
              >
                Programs
              </Link>
            </li>
            <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300">
              <Link
                className="inline-flex gap-x-2 text-sm text-gray-200 hover:text-[--primary]"
                href="https://growthlabs.leveluphubs.com/"
                target="blank"
              >
                Growth Labs
              </Link>
            </li>
            <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300">
              <Link
                className="inline-flex gap-x-2 text-sm text-gray-200 hover:text-[--primary]"
                href="/about"
              >
                About
              </Link>
            </li>
            <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300">
              <Link
                className="inline-flex gap-x-2 text-sm text-gray-200 hover:text-[--primary]"
                href="#"
              >
                Contact
              </Link>
            </li>

            <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300">
              <Link
                className="inline-flex gap-x-2 text-sm text-gray-200 hover:text-[--primary]"
                href="#"
              >
                Careers
              </Link>
            </li>
          </ul>
          {/* <!-- End Col --> */}

          {/* <!-- Social Brands --> */}
          <div className="md:text-right space-x-2">
            <Link
              className="inline-flex justify-center items-center w-8 h-8 text-center text-gray-200 hover:bg-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-[--primary] focus:ring-offset-2 focus:ring-offset-white transition"
              target="blank"
              href="https://www.instagram.com/leveluphubs"
            >
              <PiInstagramLogoBold />
            </Link>
            <Link
              className="inline-flex justify-center items-center w-8 h-8 text-center text-gray-200 hover:bg-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-[--primary] focus:ring-offset-2 focus:ring-offset-white transition"
              target="blank"
              href="https://twitter.com/leveluphubs"
            >
              <PiTwitterLogoBold />
            </Link>
            <Link
              className="inline-flex justify-center items-center w-8 h-8 text-center text-gray-200 hover:bg-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-[--primary] focus:ring-offset-2 focus:ring-offset-white transition"
              target="blank"
              href="https://www.linkedin.com/company/leveluphubs"
            >
              <PiLinkedinLogoBold />
            </Link>
          </div>
          {/* <!-- End Social Brands --> */}
        </div>
        {/* <!-- End Grid --> */}
        <div className="text-gray-200 pt-6 flex flex-col-reverse md:flex-row gap-4 items-center justify-between border-t-[1px] border-t-gray-400">
          <p>
            &copy; 2023 Impact IT services™ | Nanda Learnings & Skill Pvt. Ltd.
          </p>
          <ul className="text-center">
            <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300">
              <Link
                className="inline-flex gap-x-2 text-sm text-gray-200 hover:text-[--primary]"
                href="#"
              >
                Terms & Conditions
              </Link>
            </li>
            <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300">
              <Link
                className="inline-flex gap-x-2 text-sm text-gray-200 hover:text-[--primary]"
                href="#"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
