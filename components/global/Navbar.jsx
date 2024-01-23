"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Navbar() {
  const navLinks = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Programs",
      link: "#programs",
    },
    {
      title: "Growth Labs",
      // link: "https://growthlabs.leveluphubs.com/",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];

  React.useEffect(() => {
    const navbar = document.querySelector("#navbar");
    // const contact_btn = document.querySelector("#contact_btn");
    window.addEventListener("scroll", (e) => {
      if (window.scrollY >= 70) {
        navbar.style.background = "#fff";
        navbar.style.paddingBlock = "0.5rem";
        navbar.querySelectorAll(".navlinks").forEach((link) => {
          link.style.color = "black";
        });
        navbar.querySelector("#logo").style.display = "inline-flex";
        navbar.querySelector("#whiteLogo").style.display = "none";
      }
      if (window.scrollY <= 70) {
        navbar.style.background = "#31295e";
        navbar.style.paddingBlock = "1.5rem";
        navbar.querySelectorAll(".navlinks").forEach((link) => {
          link.style.color = "white";
        });
        navbar.querySelector("#logo").style.display = "none";
        navbar.querySelector("#whiteLogo").style.display = "inline-flex";
      }
    });
  }, []);

  return (
    <header
      className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm sm:py-0 fixed top-0 transition-all"
      id="navbar"
    >
      <nav
        className="relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 "
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Link className="hidden" href="#" aria-label="Brand" id="logo">
            {/* <img
              src="/assets/images/logo.png"
              alt=""
              className="w-32 md:w-40"
            /> */}
          </Link>
          <Link className="" href="#" aria-label="Brand" id="whiteLogo">
            {/* <img src="/assets/images/logo-white.png" alt="" className="w-40" /> */}
          </Link>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                className="hs-collapse-open:block hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 grow sm:flex items-center justify-center"
        >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-center sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
            {navLinks.map((link) => (
              <a
                className="font-semibold sm:py-2 hover:text-[--primary] navlinks text-sm raleway text-white"
                href={link.link}
                aria-current="page"
                key={link.link}
              >
                {link.title}
              </a>
            ))}
            <a className="flex sm:hidden items-center sm:my-4" href="#">
              <span className="btn-fill-lg" data-hs-overlay="#hs-modal-signup">
                Get Started
              </span>
            </a>
          </div>
        </div>
        <a
          className="hidden sm:inline-block items-center font-medium sm:my-4"
          href="#"
        >
          <span className="btn-fill-lg" data-hs-overlay="#hs-modal-signup">
            Get Started
          </span>
        </a>
      </nav>
    </header>
  );
}
