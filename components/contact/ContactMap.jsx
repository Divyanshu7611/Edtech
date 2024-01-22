import React from "react";

export default function ContactMap() {
  return (
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe
        width="100%"
        height="100%"
        className="absolute inset-0"
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2005.713772625219!2d75.81449071152147!3d26.908305433005363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db7014dfc1693%3A0x53d6751a2228cb7d!2sR-CAT!5e0!3m2!1sen!2sin!4v1690355808648!5m2!1sen!2sin"
        // style="filter: grayscale(1) contrast(1.2) opacity(0.4);"
      ></iframe>
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            ADDRESS
          </h2>
          <p className="mt-1">
            R-CAT, Tonk Rd, Panch Batti, Sangram Colony, Ashok Nagar, Jaipur,
            Rajasthan 302007
          </p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            EMAIL
          </h2>
          <a
            className="text-[--secondary] leading-relaxed"
            href="mailto:support@leveluphubs.com"
          >
            support@leveluphubs.com
          </a>
          {/* <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
      PHONE
    </h2>
    <p className="leading-relaxed">123-456-7890</p> */}
        </div>
      </div>
    </div>
  );
}
