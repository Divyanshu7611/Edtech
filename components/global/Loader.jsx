import React from "react";

export default function Loader() {
  return (
    <div className="fixed top-0 inset-0 bg-[#1d1a49] flex items-center justify-center z-[999]">
      {" "}
      <div className="rotate-90">
        <span className="loader"></span>
      </div>
    </div>
  );
}
