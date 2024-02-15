import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./Pages/Home";

function App() {
  return (
    <div class="w-screen flex flex-col min-h-screen font-inter bg-richblack-900">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
