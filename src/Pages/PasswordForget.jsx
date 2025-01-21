import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";

function PasswordForget() {
  const [isEmail, setEmail] = useState("");
  const { register, handleSubmit } = useForm();
  const submitHandler = (data) => {
    console.log(data);
    setEmail(data.Email);
    console.log(isEmail);
  };
  return (
    <div className="min-w-screen min-h-screen bg-[#000814] flex justify-center items-center">
      <div className="flex flex-col max-w-[400px] mx-auto gap-[36px]">
        <div>
          {isEmail ? (
            <h1 className="text-[#F1F2FF] text-3xl font-semibold">
              Check Email
            </h1>
          ) : (
            <h1 className="text-[#F1F2FF] text-3xl font-semibold">
              Reset Your Password
            </h1>
          )}
        </div>
        {/* para */}
        <div>
          {isEmail ? (
            <p className="text-[#AFB2BF] font-normal text-lg">
              We have sent the reset email to {isEmail}
            </p>
          ) : (
            <p className="text-[#AFB2BF] font-normal text-lg">
              Have no fear. We’ll email you instructions to reset your password.
              If you dont have access to your email we can try account recovery
            </p>
          )}
        </div>
        {/* text */}
        <div>
          {isEmail ? (
            <button className="w-full bg-[#FFD60A] text-[#000814] font-medium text-base text-center p-[12px] rounded-[8px] mt-8 hover:scale-105 transition-all duration-300">
              Resend Email
            </button>
          ) : (
            <div>
              <form onSubmit={handleSubmit(submitHandler)}>
                <p className="text-[#F1F2FF] text-sm">Email Address *</p>
                <input
                  className="w-full bg-[#161D29] p-[12px] rounded-[8px] text-white mt-2"
                  placeholder="divyanshu@gmail.com"
                  type="email"
                  name="Email"
                  {...register("Email", { required: true })}
                />
                <button
                  className="w-full bg-[#FFD60A] text-[#000814] font-medium text-base text-center p-[12px] rounded-[8px] mt-8 hover:scale-105 transition-all duration-300"
                  type="submit"
                >
                  Reset Password
                </button>
              </form>
            </div>
          )}
        </div>
        {/* links */}
        <Link
          to={"/"}
          className="flex text-[#F1F2FF] font-medium text-base gap-3 items-center"
        >
          <FaLongArrowAltLeft />
          <p>Back to Login</p>
        </Link>
      </div>
    </div>
  );
}

export default PasswordForget;
