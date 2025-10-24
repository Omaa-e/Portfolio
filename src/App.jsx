import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";

const App = () => {
  // ✅ When app loads, set default dark mode and remember user's last choice
  useEffect(() => {
    document.documentElement.classList.add("dark"); // default to dark mode
  }, []);

  // ✅ Toggle dark/light and store preference
  const toggleDarkmode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <Router>
      {/* Outer background and text color handled by Tailwind's dark: classes */}
      <div className="min-h-screen transition-all duration-300 bg-white text-black dark:bg-[#0A0A0A] dark:text-white">
        {/* This container keeps everything centered and evenly padded */}
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          {/* Navbar gets the toggle function */}
          <Navbar toggleDarkmode={toggleDarkmode} />

          {/* Route section */}
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                </>
              }
            />
          </Routes>

          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
