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
    <div className='fixed top-6 left-1/2 -translate-x-1/2 z-10 flex justify-center items-center '>
        {/* <div className='w-full flex justify-center items-center mt-10'> */}
          <div className={`${expanded ? "w-[450px]" : "w-[240px]"} ${darkmode? "text-white bg-[#0A0A0A]" :  "text-black bg-white"} flex justify-between items-center px-4 py-2 rounded-full shadow-lg`}>
            {/* Initial */}
            <h1 className='text-xl font-bold'>CE.</h1>
            {/* Navigation Links */}
            <div className={`${expanded ? "flex" : "hidden"} items-center gap-4 flex text-xs}`}>
              <a className={`${darkmode ? "text-white hover:text-[#7B466A]" : "text-black hover:text-[#9F6496]"} cursor-pointer`} href="">Home</a>
              <a className={`${darkmode ? "text-white hover:text-[#7B466A]" : "text-black hover:text-[#9F6496]"} cursor-pointer`} href="">About Me</a>
              <a className={`${darkmode ? "text-white hover:text-[#7B466A]" : "text-black hover:text-[#9F6496]"} cursor-pointer`} href="">Projects</a>
              <a className={`${darkmode ? "text-white hover:text-[#7B466A]" : "text-black hover:text-[#9F6496]"} cursor-pointer`} href="">Contact</a>

              <button onClick={toggleDarkmode} className='p-2 '>
                {darkmode ? <RxSun className='w-6 h-6' /> : <HiOutlineMoon className='w-6 h-6' />}
              </button>
            </div>
            {/* Menu button */}
            <div onClick={toggleMenu}>
              {expanded ? <HiOutlineX className='w-6 h-6' /> : <HiMenu className='w-6 h-6' />}
            </div>
          </div>
            
        {/* </div> */}
    </div>
  )
}

export default Navbar