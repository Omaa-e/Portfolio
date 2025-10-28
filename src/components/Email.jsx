import React, {useState} from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


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
      // shows form data in console
    console.log (formData);
    alert('Form submitted successfully!')
  };

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
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className='mt-8'>
              {/* Name */}
              <div>
                <label htmlFor="name">Name</label>
                <input type="text"
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                />
              </div>

               {/* Email */}
              <div>
                <label htmlFor="email">Email</label>
                <input type="email"
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                />
              </div>

               {/* Subject */}
              <div>
                <label htmlFor="subject">Subject</label>
                <input type="text"
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                required
                />
              </div>
               {/* Message */}
              <div>
                <label htmlFor="message">Message</label>
                <textarea className='w-full p-4 border  rounded-md' rows="4"
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
                ></textarea>
              </div>

              
            </form>
        </div>
    </div>
  )
}

export default Email