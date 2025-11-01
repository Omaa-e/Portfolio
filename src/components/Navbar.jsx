import React, { useState } from "react";
import { HiMenu, HiOutlineX, HiOutlineMoon } from "react-icons/hi";
import { RxSun } from "react-icons/rx";
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggleDarkmode }) => {
  const [expanded, setExpanded] = useState(false);

  // Toggle menu open/close
  const toggleMenu = () => setExpanded(!expanded);

  // Close menu after clicking any link
  const handleClose = () => setExpanded(false);


  return (
   <div >
     <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex justify-center items-center mt-10">
      <div
        className={`${
          expanded ? "w-[410px]" : "w-[219px]"
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
          <a className="hover:text-[#9F6496] dark:hover:text-[#7B466A]">
             <Link onClick={handleClose}
                to="home" 
                smooth={true}  
                duration={500} 
              >Home</Link>
          </a>
          <a className="hover:text-[#9F6496] dark:hover:text-[#7B466A]">
           <Link onClick={handleClose}  
                  to="about" 
                  smooth={true} 
                  offset={-200} 
                  duration={500} 
                >About Me</Link>
          </a>
          <a className="hover:text-[#9F6496] dark:hover:text-[#7B466A]">
            <Link  onClick={handleClose}
               to="projects" 
               smooth={true} 
               offset={-100} 
               duration={500} 
             >Projects</Link>
          </a>
          <a className="hover:text-[#9F6496] dark:hover:text-[#7B466A]">
            <Link onClick={handleClose} 
               to="contact" 
               smooth={true}
               offset={-50}  
               duration={500} 
             >Contact</Link>
          </a>

          {/* Dark Mode Toggle */}
          <button onClick={() => {toggleDarkmode();handleClose(); // closes navbar too
            }} className="p-2 cursor-pointer">
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
   </div>
  );
};

export default Navbar;
