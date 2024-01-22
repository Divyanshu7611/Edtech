"use client";

import React from "react";

export default function Modal({ isSubmit, setSubmit }) {
  return (
    <div
      id="hs-task-created-alert"
      className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[160] overflow-x-hidden overflow-y-auto"
    >
      <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
        <div className="relative flex flex-col bg-white shadow-lg rounded-xl ">
          {isSubmit === true && (
            <div className="p-4 sm:p-10 text-center overflow-y-auto">
              <h3 className="mb-2 text-xl font-bold text-gray-800">
                Message Sent Successfully!
              </h3>
              <p className="text-gray-500">
                Thankyou so much! Our representative will get in touch with you
                shortly.
              </p>

              <div className="mt-6 flex justify-center gap-x-4">
                <button
                  type="button"
                  className="btn-primary"
                  data-hs-overlay="#hs-task-created-alert"
                  onClick={() => {
                    // isSubmit = false;
                    setSubmit(false);
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          )}
          {!isSubmit && (
            <div className="p-4 sm:p-10 text-center overflow-y-auto">
              <h3 className="mb-2 text-xl font-bold text-gray-800">
                Wait your message is being sent!
              </h3>
              <div className="h-32 flex items-center justify-center">
                <span id="" className="modalLoader !h-16  !block"></span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
