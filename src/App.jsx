import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";
import Project from "./components/Project";
import Email from "./components/Email";

const App = () => {
  // ✅ When app loads, set default dark mode and remember user's last choice
  useEffect(() => {
     const html = document.documentElement;
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark" || !storedTheme) {
      html.classList.add("dark"); // dark is default
    } else {
      html.classList.remove("dark");
    }
  }, []);

  // ✅ Toggle dark/light and store preference
  const toggleDarkmode = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <Router>
      {/* Outer background and text color handled by Tailwind's dark: classes */}
      <div className="transition-all duration-300 bg-white text-[#111827] dark:bg-[#0A0A0A] dark:text-[#e5e7eb] w-full px-6 lg:px-15">
        {/* This container keeps everything centered and evenly padded */}
        <div className="">
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
                  <Project/>
                  <Email/>
                  <Footer />
                </>
              }
            />
          </Routes>
        </div>
         

         
      </div>
    </Router>
  );
};

export default App;
