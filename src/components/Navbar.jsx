import React, { useState } from "react";
import { HiMenu, HiOutlineX, HiOutlineMoon } from "react-icons/hi";
import { RxSun } from "react-icons/rx";

const Navbar = ({ toggleDarkmode }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleMenu = () => setExpanded(!expanded);

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex justify-center items-center">
      <div
        className={`${
          expanded ? "w-[410px]" : "w-[220px]"
        } flex justify-between items-center p-2 rounded-full shadow-xl shadow-slate-900 
           transition-all duration-300 bg-white dark:bg-[#0A0A0A] text-black dark:text-white`}
      >
        {/* Logo */}
        <h1 className="text-xl font-bold mr-3">CE.</h1>

        {/* Nav Links */}
        <div
          className={`${
            expanded ? "flex" : "hidden"
          } items-center gap-4 text-sm cursor-pointer transition-all duration-300`}
        >
          <a href="#" className="hover:text-[#9F6496] dark:hover:text-[#7B466A]">
            Home
          </a>
          <a href="#" className="hover:text-[#9F6496] dark:hover:text-[#7B466A]">
            About Me
          </a>
          <a href="#" className="hover:text-[#9F6496] dark:hover:text-[#7B466A]">
            Projects
          </a>
          <a href="#" className="hover:text-[#9F6496] dark:hover:text-[#7B466A]">
            Contact
          </a>

          {/* Dark Mode Toggle */}
          <button onClick={toggleDarkmode} className="p-2 cursor-pointer">
            {/* Show moon in light mode, sun in dark mode */}
            <HiOutlineMoon className="w-6 h-6 block dark:hidden" />
            <RxSun className="w-6 h-6 hidden dark:block" />
          </button>
        </div>

        {/* ☰ Menu Toggle */}
        <div onClick={toggleMenu} className="outline-none">
          {expanded ? (
            <HiOutlineX className="w-6 h-6 cursor-pointer" />
          ) : (
            <HiMenu className="w-6 h-6 cursor-pointer" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
