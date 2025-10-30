import React from 'react'
import img1 from '../assets/restaurant work.png'

const Project = () => {
  return (
    <div name='projects' className='max-w-7xl mx-auto py-10  '>
        <div className='text-center mb-8 border-t border-gray-300 dark:border-gray-600 lg:pt-20 '>
            <h2 className='text-3xl text-semibold mt-8 mb-3 text-[#111827] dark:text-white font-bold'>Featured Projects👩‍🍳🍽</h2>
            <div className='w-24 h-1 bg-gradient-to-r from-[#9F6496] to-[#7B466A] mx-auto rounded-full'></div>  
        </div>
        <div className='hidden md:flex items-center justify-center mb-6'>
             <div className='mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
              <div className='bg-white dark:bg-[#0f0f0f] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-xl  relative'>
                <img className='w-full h-52 object-cover cursor-pointer hover:scale-105 transition-transform duration-300' src={img1} alt="" />
                <div className='p-5'>
                  <h3 className='text-lg font-semibold mb-2 text-[#111827] dark:text-white'>Restaurant Website</h3>
                  <p className='text-gray-600 dark:text-gray-300 mb-4 line-clamp-4 text-sm'>A responsive restaurant website built with HTML, CSS, and JavaScript, featuring a menu, reservation system, and contact form.</p>
                
                  <div className='flex flex-wrap mb-5 gap-1/5 '>
                  <span className='text-[10px] font-medium bg-gray-100 dark:bg-[#1f1f1f] text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md border border-gray-200 dark:border-gray-700'>html</span>
                  </div>
                  <div className='grid gap-3'>

                    </div>
                </div>
                    
              </div>
             </div>
            </div>
            
    </div>
  )
}

export default Project