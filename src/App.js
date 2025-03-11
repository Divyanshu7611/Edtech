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
import Profile from "./Pages/dashboard/Profile";
import AddCourse from "./Pages/dashboard/AddCourse";
import MyCourse from "./Components/Core/Dashboard/course/instructor/course/MyCourse";

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
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route element={<Dashboard />} path="/dashboard">
        {/* Nested Routing */}
        <Route path="my-profile" index element={<Profile />} />
        <Route path="my-courses" element={<MyCourse />} />
        <Route path="add-course" element={<AddCourse />} />
        <Route path="enrolled-courses" element={<Dashboard />} />
        <Route path="courses" element={<Dashboard />} />
        <Route path="purchase-history" element={<Dashboard />} />
        <Route path="wishlist" element={<Dashboard />} />
        <Route path="settings" element={<Dashboard />} />
        </Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
