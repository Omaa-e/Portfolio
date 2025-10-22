import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";


const App = () => {
  const [darkmode, setDarkmode] = useState(true);

  const toggleDarkmode = () => setDarkmode(!darkmode);

  return (
    // 👇 This wrapper div controls the WHOLE page color
    <div
      className={`min-h-screen transition-all duration-300 px-4 ${
        darkmode ? "bg-[#0A0A0A] text-white" : "bg-white text-black"
      }`}
    >
      {/* Navbar receives both props */}
      <Navbar darkmode={darkmode} toggleDarkmode={toggleDarkmode} />

      {/* Other components can go here */}
      <Hero/>
      <Footer/>
    </div>
  );
};

export default App;
