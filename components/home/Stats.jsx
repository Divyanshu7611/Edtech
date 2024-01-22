import React from "react";

export default function Stats() {
  return (
    <section className="text-gray-600 body-font max-w-[75rem] mx-auto my-24">
      <div className="flex items-start justify-center gap-8 flex-wrap px-4">
        <div className="flex flex-col items-start justify-center">
          <div className="flex items-end gap-2 ">
            <img src="/assets/images/stats.png" alt="" className="w-32" />
            <h1 className="headingLabel">Statistics</h1>
          </div>
          <h1 className="heading !my-2">
            <span className="pinkline">Numbers</span> We Proud
          </h1>
          <p className="max-w-md raleway text-base">
            Students will get the opportunity to learn directly from industry
            experts who have years of experience and knowledge in their fields.
            At Impact IT services, students will not only learn the theoretical
            concepts but also apply them in real-world scenarios.
          </p>
        </div>
        <img
          src="/assets/images/statsNumbers.png"
          alt=""
          className="w-80 md:max-w-[30rem]"
        />
      </div>
    </section>
  );
}
