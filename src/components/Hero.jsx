import React from 'react'

const Hero = ({ darkmode, toggleDarkmode }) => {
  return (
    <div className='w-full flex flex-col items-center justify-center text-center px-4 py-30 '>
      <div className='w-full flex flex-col lg:flex-row items-center justify-center gap-10 '>
        <div className=''>
          {/* Image Section */}
          <div className='hidden md:block'>
            <img src="" alt="" />
          </div>

          {/* text Section */}
          <div className='mx-auto text-center lg:text-left'>
            <button className='py-2 px-4 text-sm bg-[#7B466A] text-white rounded-xl mx-auto mb-8'>Hello!</button>
            <h1 className=' text-5xl font-bold gap-2 flex flex-wrap justify-center leading-tight'>I'm 
              <span className={`text-[#9F6496]`}>Chioma</span>
              <span
                className={`bg-gradient-to-r ${
                  darkmode
                    ? "from-[#7B466A] via-[#8E5C7F] to-[#9F6496]"
                    : "from-[#9F6496] via-[#B47FAE] to-[#7B466A]"
                } bg-clip-text text-transparent block sm:inline`}
              >
                Ekpetere
              </span>
            </h1>

            <p className='text-xl mt-5 mb-10'>Frontend Developer </p>
            <div className='flex flex-col lg:flex-row gap-4 lg:text-left text-white'>
              <button onClick={() => window.open("/Chioma-Ekpetere.pdf")}
               className='px-6 py-3 bg-gradient-to-r from-[#9F6496] to-[#7B466A] rounded-full'>View my Resume</button> 
              <button className='rounded-full px-6 py-3 border bg-gradient-to-r from-[#7B466A] to-[#9F6496]'>Hire Me<span></span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero