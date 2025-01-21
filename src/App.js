import React from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./Pages/Home";
import Footer from "./Components/global/Footer";
import Navbar from "./Components/global/Navbar";
import Signup from "./Pages/SignUp";
import Login from "./Pages/Login";
import About from "./Pages/About";
import PasswordForget from "./Pages/PasswordForget";
import Otp from "./Pages/Otp";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <div class="w-screen flex flex-col min-h-screen font-inter bg-richblack-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/signUp" element={<Signup />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/changePassword" element={<PasswordForget />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Routes>
        <Route path="/otp-verification" element={<Otp />} />
      </Routes>



      {/* Dashboard */}
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
