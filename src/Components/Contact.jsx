import React from 'react'
import { motion } from 'framer-motion';
import Navbar from './Navbar'

const Contact = () => {
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

        </section>
      </main>
  )
}

export default Contact
