import React from 'react'

const About = () => {
  return (
    <div>
      <div className='max-w-7xl mx-auto'>
        <div className=" lg:pt-24 min-h-[60vh]">
          {/* About Me Section */}
          <h1 className="w-full text-center font-extrabold text-3xl pt-10 lg:pt-20 text-white">About Me</h1>
          <div className="max-w-3xl text-center mx-auto px-4 mb">
            {/* About Me Content */}
            <p className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">Hi there! I'm <span className='dark:text-[#0d2f5f] text-[#4766b9] font-semibold'>Chioma</span>, a <span className='dark:text-[#F472B6] text-[#DB2788] font-semibold'>Frontend Developer</span> passionate about building clean, interactive web experiences. I hold a <span className='font-semibold dark:text-[#8E5C7F] text-[#9F6496]'>Bachelor's degree in Computer Science</span> from Babcock University, Nigeria. Over the past year, I've developed my skills in React and modern JavaScript by building real-world projects, focusing on <span className='font-semibold dark:text-[#b4101e] text-[#E81224]'>responsive design</span>, and <span className='font-semibold dark:text-[#2da059] text-[#58B78E]'>user-friendly interfaces</span>. I love the challenge of turning designs into <span className='font-semibold dark:text-[#60A5FA] text-[#326FEC]'>polished, functional websites</span> and take pride in writing maintainable code. I'm excited to bring my technical skills and enthusiasm to a development team.</p>
            <h1 className='py-10 text-2xl'>My Tech Stack</h1>
            <div></div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default About