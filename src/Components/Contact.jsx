import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar'
import { assets } from '../assets/assets';

const Contact = () => {
    const [status, setStatus] = useState(null);

    const onSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
  
      formData.append("access_key", "aed7d26c-c179-480f-afb7-fc9138d8c7e0");
  
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());
  
      if (res.success) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        event.target.reset();
      } else {
        setStatus({ type: "error", message: "Something went wrong. Try again." });
      }
    };

  return (
    <main className="flex flex-col items-center text-black w-full min-h-screen bg-gray-100">  
      <Navbar />

      <section className='w-full min-h-screen flex flex-col items-center px-6 sm:px-12 md:px-20 lg:px-32 py-10'>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className='font-bold text-4xl sm:text-5xl text-center my-5 sm:my-9'
        >
          Get in Touch
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="text-gray-600">
                <div className="flex items-center mb-2">
                <img src={assets.contact} className='w-5 mr-2'></img>
                  <span className='text-black'>Call Me</span>
                </div>
                <p className="mb-4 font-medium">+923369817273</p>
                <div className="flex items-center mb-2">
                <img src={assets.mail} className='w-5 mr-2'></img>
                  <span className='text-black'>Email me</span>
                </div>
                <p className="mb-4 font-medium">huzairdhool@mail.com</p>
                <div className="flex items-center mb-2">
                <img src={assets.loc_icon} className='w-5 mr-2'></img>
                  <span className='text-black'>Address</span>
                </div>
                <p className='font-medium'>Dhool Khurd Dinga Road Gujrat</p>   
              </div>
            </div>
            <div>
              <form onSubmit={onSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                  <input type="text" id="name" name='name' className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 
                  focus:ring-blue-500" required placeholder="Your Name" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input type="email" id="email" name='mail' className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 
                  focus:ring-blue-500" required placeholder="Your Email" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea id="message" name='message' rows="4" className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 
                  focus:ring-blue-500" required placeholder="Your Message"></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="bg-black hover:scale-transition-200 hover:cursor-pointer hover:font-medium transition-all duration-100 
                  text-white font-bold py-2 px-6 rounded-md">
                    Send Message
                  </button>
                </div>
              </form>

              {status && (
                <div className={`mt-4 text-center p-3 rounded-md ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {status.message}</div>)}
            </div>
          </div>

        </section>
      </main>
  )
}



export default Contact
