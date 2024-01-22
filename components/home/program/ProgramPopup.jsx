import React from "react";

export default function ProgramPopup({ heading, index, data, image }) {
  // console.log(data);

  return (
    <div
      id={`hs-${index}`}
      className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
    >
      <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all lg:max-w-4xl lg:w-full m-3 lg:mx-auto">
        <div
          className="flex flex-col bg-white border shadow-sm rounded-xl"
          style={{
            background:
              "radial-gradient(361.16% 199.20% at 140.43% 141.29%, #e7b5e9 0%, #FFF 100%)",
          }}
        >
          <button
            type="button"
            className="btn-primary aspect-square !rounded-full absolute right-4 top-2 text-white font-bold text-xl"
            data-hs-overlay={`#hs-${index}`}
          >
            ✕
          </button>
          <div className="flex justify-between items-center py-3 pb-0 px-4 border-b relative flex-wrap mb-4 md:mb-0">
            <h3
              className="heading !text-4xl !m-0 !text-gray-800 
            !text-left"
            >
              <span className="headingLabel">Bestseller</span>
              <br />
              {heading}
            </h3>

            <div className="ring-1 ring-gray-400 rounded-2xl p-4">
              <p>8 Weeks</p>
              <p>Live Included</p>
            </div>
          </div>
          <div className="px-4 text-gray-600">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              laborum, sint sed inventore consequuntur aliquam.
            </p>
          </div>
          <div className="px-4 py-2 overflow-y-auto flex flex-col md:flex-row items-stretch gap-4 flex-wrap">
            <img
              src={`/assets/programs/${image}.png`}
              alt=""
              className="rounded-2xl object-fit object-center object-cover ring-1 ring-[--primary]"
            />
            <div className="ring-1 ring-gray-400 rounded-2xl p-2 px-4 max-w-sm">
              {data.map((data) => (
                <div className="py-1 flex gap-2 items-center" key={data.name}>
                  <span className="h-2 w-2 aspect-square rounded-full bg-gray-400"></span>
                  <h4 className="text-gray-600">{data.name}</h4>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full flex items-center justify-end py-6 px-6 gap-2">
            {/* <button className="btn-fill"> Download Brochure </button> */}
            <button className="btn-fill-secondary"> Download Brochure </button>
          </div>
        </div>
      </div>
    </div>
  );
}
