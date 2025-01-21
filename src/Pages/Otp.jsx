import React from "react";
import { Link, useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import { useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useDispatch } from "react-redux";
// import { Navigate } from "react-router-dom";
// import { setSignupData } from "../slices/authSlice";
import { useSelector } from "react-redux";
import { signUp } from "../services/operations/authApi";

function Otp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { signupData, loading } = useSelector((state) => state.auth);

  const [otp, setOtp] = useState("");
  const handleVerifyAndSignup = (e) => {
    e.preventDefault();
    const {
      accountType,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = signupData;

    dispatch(
      signUp(
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
        navigate
      )
    );
  };
  
  
  return (
    <div className="min-w-screen min-h-screen bg-[#000814] flex justify-center items-center p-2">
      {loading ? (
        <div className="loader"></div>
      ) : (
        <div className="flex flex-col lg:max-w-[450px] px-4 mx-auto gap-[36px]">
          <h1 className="text-[#F1F2FF] text-2xl md:text-3xl font-semibold">
            Verify Email
          </h1>
          <p className="text-[#AFB2BF] font-normal text-sm md:text-lg">
            A verification code has been sent to you. Enter the code below
          </p>
          <form onSubmit={handleVerifyAndSignup} className="px-2">
            <OtpInput
              value={otp}
              onChange={setOtp}

              numInputs={6}
              renderSeparator={<span className="text-white">-</span>}
              containerStyle={{
                justifyContent: "space-between",
                gap: "0 6px",
              }}
              renderInput={(props) => (
                <input
                  {...props}
                  style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  className="w-[42px] md:w-[48px] border-0 bg-richblack-800 rounded-[0.5rem] text-richblack-5 aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-50"
                  

                />
              )}
            />
            <button
              type="submit"
              className="w-full bg-[#FFD60A] text-[#000814] font-medium text-base text-center p-[12px] rounded-[8px] mt-8 hover:scale-105 transition-all duration-300"
            >
              Verify Email
            </button>
          </form>
          <Link
            to={"/"}
            className="flex text-[#F1F2FF] font-medium text-base gap-3 items-center"
          >
            <FaLongArrowAltLeft />
            <p>Back to Login</p>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Otp;