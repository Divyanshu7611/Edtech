"use client";

import React, { useState } from "react";
import Modal from "./Modal";

export default function ContactForm() {
  //   const isSubmit = React.useRef(false);

  const [isSubmit, setSubmit] = useState(false);

  async function submitForm(data, e) {
    e.target.querySelector("#modalButton").click();

    for (const key in data) {
      if (data[key].length < 3) {
        return false;
      }
    }

    const request = await fetch("/api/contact", {
      method: "post",
      body: JSON.stringify(data),
    });

    const result = await request.json();

    if (result.code === 200) {
      //   isSubmit.current = true;
      setSubmit(true);
    }
  }

  return (
    <form
      className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
      onSubmit={(e) => {
        e.preventDefault();
        let data = {
          name: e.target.name.value,
          email: e.target.email.value,
          phone: e.target.phone.value,
          message: e.target.message.value,
        };
        submitForm(data, e);
      }}
    >
      <h2 className="text-gray-900 text-2xl mb-1 font-semibold raleway">
        Contact Us
      </h2>

      <div className="relative mb-4">
        <label htmlhtmlFor="name" className="leading-7 text-sm text-gray-600">
          Name
        </label>
        <input
          required
          type="text"
          id="name"
          name="name"
          className="w-full bg-white rounded border border-gray-300 focus:border-[--secondary] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlhtmlFor="email" className="leading-7 text-sm text-gray-600">
          Phone
        </label>
        <input
          required
          type="tel"
          id="phone"
          name="phone"
          className="w-full bg-white rounded border border-gray-300 focus:border-[--secondary] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlhtmlFor="email" className="leading-7 text-sm text-gray-600">
          Email
        </label>
        <input
          required
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-[--secondary] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>

      <div className="relative mb-4">
        <label
          htmlhtmlFor="message"
          className="leading-7 text-sm text-gray-600"
        >
          Message
        </label>
        <textarea
          required
          id="message"
          name="message"
          className="w-full bg-white rounded border border-gray-300 focus:border-[--secondary] focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
        ></textarea>
      </div>

      <div className="" id="modalButton">
        <button
          className="btn-fill-secondary"
          data-hs-overlay="#hs-task-created-alert"
        >
          Submit
        </button>
      </div>
      <Modal isSubmit={isSubmit} setSubmit={setSubmit} />
    </form>
  );
}
