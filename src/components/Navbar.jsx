import React, { useState } from 'react'
import { HiMenu } from "react-icons/hi"
import { HiOutlineX } from "react-icons/hi"
import { HiOutlineMoon } from "react-icons/hi"
import { RxSun } from "react-icons/rx"

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className='w-screen items-center fixed z-10 '>
        <div className='w-full flex justify-center items-center mt-10'>
          <div className='w-110 flex justify-between items-center bg-[#0A0A0A] px-4 py-2 rounded-full shadow-lg text-white'>
            {/* Initial */}
            <h1 className='text-xl font-bold'>CE.</h1>
            {/* Navigation Links */}
            <div className='items-center gap-4 flex text-sm'>
              <a className='cursor-pointer hover:text-blue-900' href="">Home</a>
              <a className='cursor-pointer hover:text-blue-950' href="">About Me</a>
              <a className='cursor-pointer hover:text-blue-950' href="">Projects</a>
              <a className='cursor-pointer hover:text-blue-950' href="">Contact</a>

              <button className='p-2 rounded-full'>
                <RxSun className='w-6 h-6' />
              </button>
            </div>
            <div>
              <p><HiMenu className='w-6 h-6' /></p>
            </div>
          </div>
            
        </div>
    </div>
  )
}

export default Navbar