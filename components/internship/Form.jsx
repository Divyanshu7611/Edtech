"use client";
import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import { ImCross } from "react-icons/im";
import { MdCheckCircleOutline } from "react-icons/md";
import Payment from "../payment/payment";

function Form() {
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    Phone: "",
    CollegeName: "",
    Branch: "",
    Year: "",
    Domain: "Full Stack Developer",
  });
  const [submitStatus, setSubmitStatus] = useState(null); // State for submit status
  const [submitted, setSubmitted] = useState(false); // State for tracking whether form submitted

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("Data sent successfully:", responseData);

        setSubmitStatus("success"); // Set submit status to success
        setSubmitted(true);
      } else {
        console.error("Error sending data:", response.status);
        setSubmitStatus("error"); // Set submit status to error
        // setSubmitted(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
      // setSubmitted(true);
    }
  };

  return (
    <div>
      {/* {submitStatus === "success" && ( // Render the success alert if submitStatus is success
        <div className="alert transition-all duration-200 scale-125">
          <MdCheckCircleOutline className="text-6x" />
          <h1>Form Submitted Successfully</h1>
        </div>
      )} */}
      {submitStatus === "error" && ( // Render the error alert if submitStatus is error
        <div
          variant="filled"
          severity="error"
          className="alert transition-all duration-200 scale-125"
        >
          <ImCross className="text-6xl border-2 rounded-full border-black p-1" />
          <h1>Something Wrong! try again later</h1>
        </div>
      )}
      {submitted === false && (
        <form
          onSubmit={HandleSubmit}
          className="max-w-md mx-auto mt-36 mb-24 border-4 bg-slate-200 border-black p-10 rounded-xl"
        >
          <table className="w-full">
            <tbody>
              <tr>
                <td className="pr-4">
                  <label>Name</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="Name"
                    value={formData.Name}
                    onChange={handleChange}
                    required
                    disabled={submitted}
                    className="border-2 border-black w-full"
                  />
                </td>
              </tr>
              <tr>
                <td className="pr-4">
                  <label>Email</label>
                </td>
                <td>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={submitted}
                    className="border-2 border-black w-full"
                  />
                </td>
              </tr>
              <tr>
                <td className="pr-4">
                  <label>Phone</label>
                </td>
                <td>
                  <input
                    type="number"
                    name="Phone"
                    value={formData.Phone}
                    onChange={handleChange}
                    required
                    disabled={submitted}
                    className="border-2 border-black w-full"
                  />
                </td>
              </tr>
              <tr>
                <td className="pr-4">
                  <label>College</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="CollegeName"
                    value={formData.CollegeName}
                    onChange={handleChange}
                    required
                    disabled={submitted}
                    className="border-2 border-black w-full"
                  />
                </td>
              </tr>
              <tr>
                <td className="pr-4">
                  <label>Branch</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="Branch"
                    value={formData.Branch}
                    onChange={handleChange}
                    required
                    disabled={submitted}
                    className="border-2 border-black w-full"
                  />
                </td>
              </tr>
              <tr>
                <td className="pr-4">
                  <label>Graduating Year</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="Year"
                    value={formData.Year}
                    onChange={handleChange}
                    required
                    disabled={submitted}
                    className="border-2 border-black w-full"
                  />
                </td>
              </tr>
              <tr>
                <td className="pr-4">
                  <label>Domain</label>
                </td>
                <td>
                  <select
                    onChange={handleChange}
                    value={formData.Domain}
                    name="Domain"
                    required
                    className="border-2 border-black w-full"
                    disabled={submitted}
                  >
                    <option value="Full Stack Developer">
                      Full Stack Developer
                    </option>
                    <option value="Fronted Developer">Fronted Developer</option>
                    <option value="Backend Developer">Backend Developer</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Data Analytics">Data Analytics</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>

          <button
            type="submit"
            className={`border w-full py-1 px-5 text-white bg-blue-500 hover:bg-blue-800 hover:text-white mt-10 rounded-lg text-bold  ${
              submitted ? "hidden" : ""
            }`}
          >
            Next
          </button>
        </form>
      )}

      {submitStatus === "success" && (
        <div className="flex shadow-2xl bg-slate-200 flex-col justify-center max-w-md mx-auto mt-36 mb-24 border-4 border-black p-10 rounded-xl">
          <Payment formData={formData} />
        </div>
      )}
    </div>
  );
}

export default Form;
