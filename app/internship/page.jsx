import React from "react";
import Navbar from "../../components/global/Navbar";
// import Footer from "@/components/global/Footer";
import Hero from "../../components/internship/hero";
import Program from "../../components/internship/program/Programs";
function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Program />
      {/* <Footer /> */}
    </div>
  );
}

export default page;
