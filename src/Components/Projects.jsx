import React from 'react'
import Navbar from './Navbar'
import Cards from './Cards';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <main className="flex flex-col items-center text-black w-full min-h-screen bg-gray-100">  
      <Navbar />

      <section className='w-full min-h-screen flex flex-col items-center px-6 sm:px-12 md:px-20 lg:px-32 py-10'>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className='font-bold text-4xl sm:text-5xl text-center my-5 sm:my-9'
        >
          Things I have Done
        </motion.h1>
        <Cards/>
        </section>
      </main>
  )
}

export default Projects
