import { faq } from "../../data/faq";
import React from "react";
import FAQCard from "./faq/FAQCard";

export default function Faq() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* <!-- Title --> */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="heading !text-3xl md:!text-5xl">
          Your <span className="pinkline"> Questions, Answered!</span>
        </h2>
        <p className="mt-1 text-gray-600 raleway">
          Answers to the most frequently asked questions.
        </p>
      </div>
      {/* <!-- End Title --> */}

      <div className="max-w-2xl mx-auto">
        {/* <!-- Accordion --> */}
        <div className="hs-accordion-group">
          {faq.map((faq, index) => (
            <FAQCard
              key={index}
              index={index + 1}
              question={faq.question}
              answer={faq.answer}
            />
          ))}

          <div
            className={`hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6`}
            id={`hs-basic-with-title-and-arrow-stretched-heading-${10}`}
          >
            <button
              className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-[--primary]"
              aria-controls={`hs-basic-with-title-and-arrow-stretched-collapse-${10}`}
            >
              What is the refund process?
              <svg
                className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-[--primary]"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <svg
                className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-[--primary]"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <div
              id={`hs-basic-with-title-and-arrow-stretched-collapse-${10}`}
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby={`hs-basic-with-title-and-arrow-stretched-heading-${10}`}
            >
              <div className="text-gray-800 space-y-2">
                <p>
                  If a student requests for a refund before the commencement of
                  classes, they will be eligible for a partial refund, subject
                  to the following conditions:
                </p>

                <ul className="list-disc pl-4">
                  <li>
                    Withdrawal up to 5 days before the start of the course: 80%
                    refund of the course fee.
                  </li>
                  <li>
                    Withdrawal within 5 days of the course start date: 50%
                    refund of the course fee.
                  </li>
                  <li>
                    The registration fee and any fees related to course
                    materials are non-refundable.
                  </li>
                  <li>
                    Refund requests must be made in writing and sent to our
                    administrative team via email or official letter. Refunds
                    will be processed within 30 days from the date of the
                    written refund request.
                  </li>
                </ul>
                <p>
                  If a student requests a refund before the commencement of
                  classes, the refund will be subject to approval. We carefully
                  evaluate each request and consider the circumstances before
                  processing any refunds. The decision to grant a refund will be
                  at the sole discretion of the administration at Level up.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Accordion --> */}
      </div>
    </div>
  );
}
