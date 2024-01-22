import React from "react";

export default function CTA() {
  return (
    <section className="text-gray-600 body-font max-w-[75rem] mx-auto bg-gray-100 my-12 shadow-lg rounded-2xl">
      <div className="container mx-auto flex px-10 py-16 md:flex-row flex-col gap-8 items-stretch">
        <div className="lg:max-w-lg lg:w-full md:w-4/5 w-full mx-auto">
          <img
            className="h-full object-cover object-left rounded-2xl"
            alt="CTA"
            src="/assets/images/cta.png"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p className="headingLabel">Growth Labs Presents</p>
          <h1 className="heading  md:!text-left">
            How to start with Digital{" "}
            <span className="pinkline">Marketing</span>
          </h1>
          <p className="mb-8">
            This workshop is designed to help you master the latest digital
            marketing skills and roadmap. Perfect for individuals or
            professionals looking to Impact IT services.
          </p>
          <div className="flex justify-center">
            <a
              href="https://growthlabs.leveluphubs.com"
              target="blank"
              className="btn-fill-secondary"
            >
              Know more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
