"use client";

import { useState } from "react";
import ModalInput from "./ModalInput";

export default function RegisterModal() {
  const [isSubmit, setSubmit] = useState(0);

  async function submitForm(e) {
    let data = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      city: e.target.city.value,
      state: e.target.state.value,
      linkedin: e.target.linkedin.value,
    };

    e.target.querySelector("#submitText").style.display = "none";
    e.target.querySelector("#submitSpin").style.display = "inline-block";
    e.target.querySelector("#modalForm > *").style.userSelect = "none";

    for (const key in data) {
      if (data[key].length < 3) {
        e.target.querySelector("#submitText").style.display = "inline-block";
        e.target.querySelector("#submitSpin").style.display = "none";
        e.target.querySelector("#modalForm > *").style.userSelect = "auto";
        return false;
      }
    }

    const request = await fetch("/api/inquire", {
      method: "post",
      body: JSON.stringify(data),
    });

    const result = await request.json();

    if (result.code == 200) {
      e.target.querySelector("#submitText").style.display = "inline-block";
      e.target.querySelector("#submitSpin").style.display = "none";
      e.target.querySelector("#modalForm > *").style.userSelect = "auto";

      setSubmit(1);
      // console.log(isSubmit);
    }
  }

  return (
    <div
      id="hs-modal-signup"
      className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
      onClick={() => {
        // setSubmit(1);
        // console.log(isSubmit);
      }}
    >
      <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-md sm:w-full m-3 sm:mx-auto">
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm relative  ">
          <div className="p-4">
            <div className="">
              <button
                type="submit"
                className="btn-primary aspect-square !rounded-full absolute right-4 top-4"
                data-hs-overlay="#hs-modal-signup"
                onClick={() => {
                  setSubmit(0);
                }}
              >
                ✕
              </button>

              {isSubmit === 0 && (
                <div className="flex justify-between items-center">
                  <h2 className="block text-3xl font-bold text-gray-800 raleway max-w-sm">
                    Please enter your details.
                  </h2>
                </div>
              )}
              {isSubmit == 1 && (
                <div className="p-4 sm:p-10 text-center overflow-y-auto">
                  <h3 className="mb-2 text-xl font-bold text-gray-800">
                    Inquiry Sent Successfully!
                  </h3>
                  <p className="text-gray-500">
                    Thankyou so much! Our representative will get in touch with
                    you shortly.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-5">
              {/* <!-- Form --> */}
              <form
                id="modalForm"
                onSubmit={(e) => {
                  e.preventDefault();

                  submitForm(e);
                }}
              >
                {isSubmit === 0 && (
                  <div className="flex flex-none items-center justify-center gap-y-2 flex-col">
                    {/* <!-- Form Group --> */}
                    <ModalInput
                      id={"name"}
                      name={"name"}
                      label={"Full Name"}
                      type={"text"}
                    />
                    <ModalInput
                      id={"email"}
                      name={"email"}
                      label={"Email"}
                      type={"email"}
                    />
                    <ModalInput
                      id={"phone"}
                      name={"phone"}
                      label={"Phone Number"}
                      type={"tel"}
                    />
                    <ModalInput
                      id={"city"}
                      name={"city"}
                      label={"City"}
                      type={"text"}
                    />
                    <ModalInput
                      id={"state"}
                      name={"state"}
                      label={"State"}
                      type={"text"}
                    />
                    <ModalInput
                      id={"linkedin"}
                      name={"linkedin"}
                      label={"LinkedIn Url"}
                      type={"text"}
                    />
                    <button
                      type="submit"
                      id="submitBtn"
                      className="btn-fill-secondary w-full max-w-sm mt-4"
                    >
                      <span id="submitText">Submit</span>
                      <span id="submitSpin" className="modalLoader"></span>
                    </button>
                  </div>
                )}
              </form>

              {/* <!-- End Form --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
