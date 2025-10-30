import React from 'react'
import img1 from '../assets/html.png'
import img2 from '../assets/css.png'
import img3 from '../assets/js logo.png'
import img4 from '../assets/react.png'
import img5 from '../assets/tailwindcss.png'
import img6 from '../assets/bootstrap.png'

const About = () => {
  const aboutData = [
    {
      id:1,
      image: img1,
      title: 'HTML',
    },
    {
      id:2,
      image: img2,
      title: 'CSS',
    },
    {
      id:3,
      image: img3,
      title: 'JavaScript',
    },
    {
      id:4,
      image: img4,
      title: 'React',
    },
    {
      id:5,
      image: img5,
      title: 'Tailwind CSS',
    },
    {
      id:6,
      image: img6,
      title: 'Bootstrap',
    }
  ]

  return (
    <div name='about'>
      <div className='max-w-7xl mx-auto'>
        <div className=" lg:pt-24 min-h-[60vh]">
          {/* About Me Section */}
          <h1 className="w-full text-center font-extrabold border-t border-gray-300 dark:border-gray-600 text-3xl pt-10 lg:pt-20 dark:text-white text-[#111827]">About Me 👋</h1>
          <div className="max-w-3xl text-center mx-auto px-4 mb">
            {/* About Me Content */}
            <p className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">Hi there! I'm <span className='dark:text-[#0d2f5f] text-[#4766b9] font-semibold'>Chioma</span>, a <span className='dark:text-[#F472B6] text-[#DB2788] font-semibold'>Frontend Developer</span> passionate about building clean, interactive web experiences. I hold a <span className='font-semibold dark:text-[#8E5C7F] text-[#9F6496]'>Bachelor's degree in Computer Science</span> from Babcock University, Nigeria. Over the past year, I've developed my skills in React and modern JavaScript by building real-world projects, focusing on <span className='font-semibold dark:text-[#b4101e] text-[#E81224]'>responsive design</span>, and <span className='font-semibold dark:text-[#2da059] text-[#58B78E]'>user-friendly interfaces</span>. I love the challenge of turning designs into <span className='font-semibold dark:text-[#60A5FA] text-[#326FEC]'>polished, functional websites</span> and take pride in writing maintainable code. I'm excited to bring my technical skills and enthusiasm to a development team.</p>
           
          </div>
           {/* tech stack */}
          <h1 className='py-10 text-2xl font-extrabold text-[#111827] dark:text-white text-center'>My Tech Stack</h1>
            {/* frontend Languages and technologies */}
            <div className="overflow-hidden relative w-full">
              <div className="scroll-container gap-12">
                {/* Triple the array for seamless loop */}
                {[...aboutData, ...aboutData, ...aboutData, ...aboutData].map((about, id) => (
                  <div
                    key={about.id} // Fixed key
                    className="flex-shrink-0 rounded-xl bg-gray-50 dark:bg-[#1A1A23] w-28 h-28 flex flex-col items-center justify-center hover:scale-110 transition-transform shadow-md"
                  >
                    <img className="w-16 h-12 object-contain" src={about.image} alt={about.title} />
                    <h1 className="text-sm mt-2 text-center font-medium font-mono">{about.title}</h1>
                  </div>
                ))}
              </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default About