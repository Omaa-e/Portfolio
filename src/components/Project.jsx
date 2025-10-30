import React from 'react'
import img1 from '../assets/finance work.png'

const Project = () => {
  return (
    <div name='projects' className='max-w-7xl mx-auto py-10  '>
        <div className='text-center mb-8 border-t border-gray-300 dark:border-gray-600 lg:pt-20 '>
            <h2 className='text-3xl text-semibold mt-8 mb-3 text-[#111827] dark:text-white font-bold'>Featured Projects👩‍🍳🍽</h2>
            <div className='w-24 h-1 bg-gradient-to-r from-[#9F6496] to-[#7B466A] mx-auto rounded-full'></div>  
        </div>
        <div className='hidden md:flex items-center justify-center mb-6'>
             <div className='mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
               <div className='bg-white dark:bg-[#0f0f0f] rounded overflow-hidden border border-gray-200 dark:border-gray-800 shadow-xl relative'>
              <img className='w-full h-52 hover:scale-105 transition-transform duration-300 object-contain cursor-pointer ' src={img1} alt="" />

            </div>
             </div>
            </div>
            
    </div>
  )
}

export default Project