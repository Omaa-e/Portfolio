import React, {useState} from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import emailjs from '@emailjs/browser';



const Email = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // function to handle typing inputs
  const handleChange = (event) => {
    const {name, value} = event.target;
     setFormData({
      ...formData,
      [name]: value,
     })
  }

  // handle form submission
  const handleSubmit = (event) => {
    // prevents the page from refreshing on submit
    event.preventDefault();
     emailjs.send(
    'service_gcpy8fm', 
    'template_ht942gl', 
    formData,
    'LCnH6ef55-OpO0cnv'
  ).then(
    (result) => {
      console.log('Success:', result.text);
      setFormData({ name: "", email: "", subject: "", message: "" });
      alert('Email sent successfully!');
    },
    (error) => {
      console.log('Error:', error.text);
      alert('Something went wrong.');
    }
  );
  };

  return (
    <div name='contact' className='w-full min-h-screen py-20 lg:px-20 lg:min-h-[80vh]'>
        <div className='max-w-6xl mx-auto items-center md:items-start gap-16 grid grid-cols-1 lg:grid-cols-2'>
          <div className='px-6 md:px-0'>
            <h2 className='text-4xl font-bold mb-4'>Get in Touch</h2>
            {/* Email and Resume */}
            <p className='mb-4 text-lg'>Feel free to reach out to me on <a className='underline text-[#9F6496] dark:text-[#814D71] cursor-pointer' href="mailto:ekpeterechioma@gmail.com">ekpeterechioma@gmail.com</a></p>
            <p className='mb-8'>For more info, here's my <a className='underline text-[#9F6496] dark:text-[#814D71] cursor-pointer' href="/Chioma-Ekpetere.pdf" target="_blank" rel="noopener noreferrer">Resume</a>.</p>

              {/* Social Media Links */}
            <div className='flex gap-4 text-2xl '>
              <a href="https://github.com/Omaa-e" className=' cursor-pointer'><FaGithub className='hover:text-[#814D71] w-12 h-12' /></a>
              <a href="https://www.linkedin.com/in/chioma-favour/" className='  cursor-pointer'><FaLinkedin className='hover:text-[#814D71] w-12 h-12' /></a>
            </div>
          </div>
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className='px-4 rounded-lg space-y-4'>
              {/* Name */}
              <div>
                <label className='mb-1 font-medium' htmlFor="name">Name</label>
                <input type="text"
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='w-full px-4 py-2 rounded border mb-4 focus:border-[#804E74] focus:outline-none dark:bg-[#0f0f0f] border-gray-700'
                required
                />
              </div>

               {/* Email */}
              <div>
                <label className='mb-1 font-medium' htmlFor="email">Email</label>
                <input type="email"
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='w-full px-4 py-2 rounded border mb-4 focus:border-[#804E74] focus:outline-none dark:bg-[#0f0f0f]  border-gray-700'
                required
                />
              </div>

               {/* Subject */}
              <div>
                <label className='mb-1 font-medium' htmlFor="subject">Subject</label>
                <input type="text"
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                className='w-full px-4 py-2 rounded border border-gray-700 mb-4  dark:bg-[#0f0f0f] focus:border-[#804E74] focus:outline-none'
                required
                />
              </div>

               {/* Message */}
              <div>
                <label className='mb-1 font-medium' htmlFor="message">Message</label>
                <textarea  rows="4"
                name='message'
                value={formData.message}
                onChange={handleChange}
                className='w-full px-4 py-2 rounded border mb-4 focus:border-[#804E74] focus:outline-none dark:bg-[#0f0f0f]  border-gray-700'
                required
                ></textarea>
              </div>
              <button type='submit' className='w-full md:w-40 relative p-[1px] focus:outline-none bg-gradient-to-r from-[#814D71] to-[#7E2A53] hover:scale-110 transition-transform rounded-full disabled:opacity-60'>
                <span className='w-full block rounded-full font-semibold dark:bg-[#0f0f0f] py-3 transition-colors bg-white text-center'>Submit</span>
              </button>

              
            </form>
        </div>
    </div>
  )
}

export default Email