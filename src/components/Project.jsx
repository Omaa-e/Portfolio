import React from 'react'
import img1 from '../assets/restaurant work.png'
import img2 from '../assets/brand work.png'
import img3 from '../assets/netflix work.png'
import img4 from '../assets/finance work.png'
// import img5 from '../assets/blog app work.png'
import { FaGithub } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { LuChevronLeft } from "react-icons/lu";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: 'Restaurant Website',
      description: 'A responsive restaurant website built with HTML, CSS, and JavaScript, featuring a menu, reservation system, and contact form.',
      image: img1,
      status: 'Completed',
      techStack: ['html', 'css', 'javascript', 'bootstrap'],
      liveDemo: 'https://your-live-demo.com',
      codeRepo: 'https://github.com/your-repo',
    },
     {
      id: 2,
      title: 'Brand',
      description: 'A responsive brand website built with React and TailwindCSS, featuring modern design and interactive elements.',
      image: img2,
      status: 'Completed',
      techStack: ['React', 'TailwindCSS'],
      liveDemo: 'https://cloud-management-clone.vercel.app/',
      codeRepo: 'https://github.com/Omaa-e/cloud-management-clone',
    },
     {
      id: 3,
      title: 'Netflix Clone',
      description: 'A non-responsive Netflix clone built with React and TailwindCSS, featuring modern design and interactive elements.',
      image: img3,
      status: 'In Progress',
      techStack: ['React', 'TailwindCSS'],
      liveDemo: 'https://your-live-demo.com',
      codeRepo: 'https://github.com/Omaa-e/NetflixClone',
    },
     {
      id: 4,
      title: 'Finance Website',
      description: 'A minimalistic, clean UI demo inspired by the plum lunar server by figma, designed to showcase layout, and aesthetic consistency.',
      image: img4,
      status: 'Completed',
      techStack: ['html'],
      liveDemo: 'https://finance-kappa-lovat.vercel.app/',
      codeRepo: 'https://github.com/your-repo',
    },
     {
      id: 5,
      title: 'Restaurant Website',
      description: 'Replicated the Vans official website, duplicating its user interface and design patterns for self-improvement',
      image: img1,
      status: 'In Progress',
      techStack: ['html'],
      liveDemo: 'https://your-live-demo.com',
      codeRepo: 'https://github.com/your-repo',
    }
  ]
  return (
    <div name='projects' className='max-w-7xl mx-auto py-10  '>
      <div className='text-center mb-8 border-t border-gray-300 dark:border-gray-600 lg:pt-20 '>
          <h2 className='text-3xl text-semibold mt-8 mb-3 text-[#111827] dark:text-white font-bold'>Featured Projects👩‍🍳🍽</h2>
          <div className='w-24 h-1 bg-gradient-to-r from-[#9F6496] to-[#7B466A] mx-auto rounded-full'></div>  
      </div>
      {/* Projects on small screens */}
      <div className='relative flex flex-col items-center md:hidden'>
        <div className='text-white dark:bg-[#0a0a0a] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-xl'>
          <img className='w-full h-56 object-cover' src={img1} alt="" />
          <div className='absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-medium border bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 border-green-200 dark:border-green-700 '>Completed</div>
          <div className='p-5 text-center'>
            <h3 className='text-lg font-semibold mb-2 text-gray-900 dark:text-white '>Restaurant</h3>
            <p className='text-sm text-gray-600 dark:text-gray-300 mb-4'>sdfghjkgfedsdfghtgrfdcvbgfcvbhgfvbhygfc vbgf</p>
            <div className='flex flex-wrap mb-5 justify-center gap-2'>
              <span className='text-[10px] font-medium bg-gray-100 dark:bg-[#1f1f1f] text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md border border-gray-200 dark:border-gray-700'>html</span>
            </div>
            <div className='flex flex-col sm:flex-row justify-center gap-3 '>
              <a
                href="https://your-live-demo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-gradient-to-r from-[#7B466A] to-[#9F6496] p-[1px] inline-block"
              >
                <span className="flex items-center justify-center gap-2 bg-white dark:bg-[#0a0a0a] rounded-lg px-4 py-2 hover:bg-gradient-to-r hover:from-[#7B466A] hover:to-[#9F6496] hover:text-white transition">
                  <TbExternalLink className="w-4 h-4" /> Live Demo
                </span>
              </a>
              <a href='https://github.com/Omaa-e/restaurant' className='flex items-center justify-center gap-2 bg-gray-100 dark:bg-[#232323] hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-600 transition'><FaGithub className="text-lg" /> Code</a>
            </div>
          </div>
        </div>
      </div>
      {/* Projects on medium and large screens */}
      <div className='hidden md:flex items-center justify-center mb-6'>
        <button className='p-2.5 bg-white dark:bg-black rounded-full shadow-lg hover:bg-gray-200 dark:hover:bg-gray-950'><LuChevronLeft className="text-rose-500" /></button>
        <div className='mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        <div className='bg-white dark:bg-[#0f0f0f] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-xl relative'>
          <img className='w-full h-52 object-cover cursor-pointer hover:scale-105 transition-transform duration-300' src={img1} alt="" />
          {/* to know if the project is complete or not */}
          <div className='absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-medium border bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 border-green-200 dark:border-green-700'><IoMdCheckmarkCircleOutline className="w-3 h-3" />Completed</div>
          {/* description */}
          <div className='p-5'>
            <h3 className='text-lg font-semibold mb-2 text-[#111827] dark:text-white'>Restaurant Website</h3>
            <p className='text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 text-sm'>A responsive restaurant website built with HTML, CSS, and JavaScript, featuring a menu, reservation system, and contact form.</p>
              {/* tech programs */}
            <div className='flex flex-wrap mb-5 gap-1/5 '>
            <span className='text-[10px] font-medium bg-gray-100 dark:bg-[#1f1f1f] text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md border border-gray-200 dark:border-gray-700'>html</span>
            </div>
            {/* buttons */}
            <div className='grid gap-3'>
              <a
                href="https://your-live-demo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-gradient-to-r from-[#7B466A] to-[#9F6496] p-[1px] inline-block"
              >
                <span className="flex items-center justify-center gap-2 bg-white dark:bg-[#0a0a0a] rounded-lg px-4 py-2 hover:bg-gradient-to-r hover:from-[#7B466A] hover:to-[#9F6496] hover:text-white transition">
                  <TbExternalLink className="w-4 h-4" /> Live Demo
                </span>
              </a>

                
              <a href='https://github.com/Omaa-e/restaurant' className='flex items-center justify-center gap-2 bg-gray-100 dark:bg-[#232323] hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-600 transition'><FaGithub className="text-lg" /> Code</a>
              </div>
          </div>
              
        </div>
        </div>
      </div>
            
    </div>
  )
}

export default Project