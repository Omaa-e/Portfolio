import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Email = () => {
  return (
    <div className='w-full min-h-screen py-20 lg:px-20 lg:min-h-[80vh]'>
        <div className='max-w-6xl mx-auto items-center md:items-start gap-16 grid grid-cols-1 lg:grid-cols-2'>
          <div className='px-6 md:px-0'>
            <h2 className='text-4xl font-bold mb-4'>Get in Touch</h2>
            {/* Email and Resume */}
            <p className='mb-4'>Feel free to reach out to me on <a className='underline text-[#9F6496] dark:text-[#814D71] cursor-pointer' href="mailto:ekpeterechioma@gmail.com">ekpeterechioma@gmail.com</a></p>
            <p className='mb-8'>For more info, here's my <a className='underline text-[#9F6496] dark:text-[#814D71] cursor-pointer' href="https://www.linkedin.com/in/yourprofile">Resume</a>.</p>

              {/* Social Media Links */}
            <div className='flex gap-4 text-2xl '>
              <a href="https://github.com/Omaa-e" className=' cursor-pointer'><FaGithub className='hover:text-[#814D71] w-12 h-12' /></a>
              <a href="https://www.linkedin.com/in/yourprofile" className='  cursor-pointer'><FaLinkedin className='hover:text-[#814D71] w-12 h-12' /></a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Email