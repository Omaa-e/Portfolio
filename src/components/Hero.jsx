import React from 'react'
import img from '../assets/hero-portfolio.jpg'
import { HiChevronRight } from "react-icons/hi";
import { Link } from "react-scroll";


const Hero = () => {
  return (
    <div name='home'>
      <section className="flex flex-col items-center justify-center text-center px-4 lg:px-10 max-w-7xl mx-auto min-h-screen">
      <div className="w-full flex flex-col lg:flex-row-reverse items-center lg:justify-center gap-10">
        {/* Image Section */}
        <div className='flex-1 hidden md:flex justify-end'>
          <div className='relative w-72 h-72 md:w-80 md:h-80  '>
             <div className="w-full h-full rounded-full overflow-hidden border-2 border-gradient-to-r from-[#9F6496] to-[#7B466A]">
            <img src={img} className='w-full h-full object-cover' alt="Chioma Ekpetere" />
        </div>
          </div>
         
        </div>
        

        {/* Text Section */}
        <div className="text-center lg:text-left flex-1 ">
          <button className="py-2 px-4 text-sm bg-[#7B466A] text-white rounded-xl mx-auto mb-8 font-medium">
            Hello!
          </button>

          <h1 className="text-5xl font-bold gap-2 justify-center flex flex-wrap lg:justify-start leading-tight">
            I’m
            <span className="text-[#9F6496] pl-3">Chioma</span>
            <span
              className="bg-gradient-to-r from-[#9F6496] via-[#B47FAE] to-[#7B466A] 
                         dark:from-[#7B466A] dark:via-[#8E5C7F] dark:to-[#9F6496] 
                         bg-clip-text text-transparent block md:inline"
            >
              Ekpetere
            </span>
          </h1>

          <p className="text-xl mt-5 mb-10 text-gray-800 dark:text-gray-300">
            Frontend Developer <span>|</span> Problem Solver
          </p>

          <div className="flex flex-col lg:flex-row gap-4 lg:text-left text-white justify-center lg:justify-start">
            <button
              onClick={() => window.open('/Chioma-Ekpetere.pdf')}
              className="px-6 py-3 bg-gradient-to-r from-[#9F6496] to-[#7B466A] rounded-full hover:opacity-90 font-medium"
            >
              View my Resume
            </button>

             
             <Link
                to="email" // make sure your Email section has name="email"
                smooth={true}
                duration={500}
                offset={-80}
                className="rounded-full font-medium bg-white text-black hover:text-white border border-[#9F6496] hover:bg-gradient-to-r from-[#7B466A] to-[#9F6496] transition-all duration-200 px-8 py-3 dark:bg-[#0f0f0f] hover:scale-110 hover:opacity-90 dark:hover:bg-gray-800 flex items-center justify-center dark:text-white">
                Hire Me <span className="ml-2 w-4 h-4"><HiChevronRight /></span>
              </Link>
            
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Hero
