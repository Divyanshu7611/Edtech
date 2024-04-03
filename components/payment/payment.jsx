"use client";
import React, { useState } from "react";
import QRCodeComponent from "./QRCodeComponent";
import { ImCross } from "react-icons/im";
import { MdCheckCircleOutline } from "react-icons/md";

const Payment = ({ formData }) => {
  const [txnID, setTxnID] = useState("");
  const [submitStatus, setSubmitStatus] = useState(null); // State for submit status
  const [submitted, setSubmitted] = useState(false); // State for tracking whether form submitted

  const handleChange = (e) => {
    setTxnID(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const upiFormData = {
      TxnID: txnID,
      email: formData.email,
    };

    try {
      const response = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(upiFormData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("Data sent successfully:", responseData);
        setSubmitStatus("success");
        setSubmitted(true);
        // Handle success
      } else {
        console.error("Error sending data:", response.status);
        setSubmitStatus("error");
        setSubmitted(true);
        // Handle error
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
      setSubmitted(true);
      // Handle error
    }
  };

  return (
    <div className="mx-auto flex flex-col justify-center items-center">
      {submitStatus === "success" && ( // Render the success alert if submitStatus is success
        <div className="alert transition-all duration-200 scale-125">
          <MdCheckCircleOutline className="text-6x" />
          <h1>Form Submitted Successfully</h1>
        </div>
      )}
      {submitStatus === "error" && ( // Render the error alert if submitStatus is error
        <div
          variant="filled"
          severity="error"
          className="alert transition-all duration-200 scale-125"
        >
          <ImCross className="text-6xl border-2 rounded-full border-black p-1" />
          <h1>Already Submitted the Form</h1>
        </div>
      )}
      <h1 className="text-xl font-bold mb-5">Make Payment</h1>
      <QRCodeComponent />
      <form onSubmit={handleSubmit} className="flex flex-col mt-5">
        <label className="flex items-center justify-between gap-2">
          Txn ID
          <input
            type="text"
            value={txnID}
            onChange={handleChange}
            placeholder="Transaction Id"
            required
            disabled={submitted}
            className="border-2 border-black"
          />
        </label>

        <button
          type="submit"
          className="border bg-blue-700 mt-5 rounded-lg text-bold hover:bg-blue-800 text-white"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Payment;
