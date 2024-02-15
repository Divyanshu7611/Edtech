import React from "react";
import { Link } from "react-router-dom";

const ButtonComp = ({ children, active, link }) => {
  return (
    <Link to={link}>
      <div
        className={`${
          active
            ? "bg-yellow-50 text-richblack-900"
            : "bg-richblack-800 shadow-sm shadow-richblack-200 text-white"
        } text-center px-5 py-3 rounded-lg hover:scale-95 transition-all duration-200 font-semibold`}
      >
        {/* Learn button */}

        {children}
      </div>
    </Link>
  );
};

export default ButtonComp;
