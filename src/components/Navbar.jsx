import React, { useState } from 'react'
import { HiMenu } from "react-icons/hi"
import { HiOutlineX } from "react-icons/hi"
import { HiOutlineMoon } from "react-icons/hi"
import { RxSun } from "react-icons/rx"

const Navbar = ({ darkmode, toggleDarkmode }) => {
  const [expanded, setExpanded] = useState(false);
  
  const toggleMenu = () => {
    // Toggle the expanded state
    setExpanded(!expanded);
  }
  
  return (
    <div className='w-screen items-center fixed z-10 '>
        <div className='w-full flex justify-center items-center mt-10'>
          <div className={`${expanded ? "w-110" : "w-59"} ${darkmode? "text-white bg-[#0A0A0A]" :  "text-black bg-white"} flex justify-between items-center px-4 py-2 rounded-full shadow-lg`}>
            {/* Initial */}
            <h1 className='text-xl font-bold'>CE.</h1>
            {/* Navigation Links */}
            <div className={`${expanded ? "flex" : "hidden"} items-center gap-4 flex text-sm}`}>
              <a className={`${darkmode ? "text-white" : "text-black"} cursor-pointer hover:text-[#83404C]`} href="">Home</a>
              <a className={`${darkmode ? "text-white" : "text-black"} cursor-pointer hover:text-[#83404C]`} href="">About Me</a>
              <a className={`${darkmode ? "text-white" : "text-black"} cursor-pointer hover:text-[#83404C]`} href="">Projects</a>
              <a className={`${darkmode ? "text-white" : "text-black"} cursor-pointer hover:text-[#83404C]`} href="">Contact</a>

              <button onClick={toggleDarkmode} className='p-2 '>
                {darkmode ? <RxSun className='w-6 h-6' /> : <HiOutlineMoon className='w-6 h-6' />}
              </button>
            </div>
            {/* Menu button */}
            <div onClick={toggleMenu}>
              {expanded ? <HiOutlineX className='w-6 h-6' /> : <HiMenu className='w-6 h-6' />}
            </div>
          </div>
            
        </div>
    </div>
  )
}

export default Navbar