import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Skills from './Skills';

const About = () => {
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
          The Person Behind the Pixels
        </motion.h1>

        <div className='flex flex-col md:flex-row items-center justify-center w-full gap-10 md:gap-16 lg:gap-20 mt-6 sm:mt-6'>
          <div className='text-center md:text-left max-w-md sm:max-w-lg'>
            <h2 className='text-xl sm:text-2xl font-bold mb-3'>About Me</h2>
            <p className='font-medium leading-relaxed'>
              Hi, I’m <span className="font-semibold">Huzair Asim</span>, a passionate Graphic Designer and Web Developer
              with 4 years of hands-on experience. I specialize in creating visually compelling designs and building
              user-friendly websites that elevate brands. With a keen eye for detail and a deep understanding of both
              design and development, I bring creative ideas to life through innovative solutions. Let’s collaborate
              to turn your vision into reality.
            </p>
            <p className="font-semibold mt-3">
              I believe that every brand has a story to tell, and my job is to bring that story to life through thoughtful
              design and smart development. With an eye for detail and a passion for innovation, I approach each project
              with curiosity and dedication, ensuring that every pixel and every line of code serves a purpose. Let’s build
              something meaningful together.
            </p>
          </div>

          <motion.div
            whileHover={{
              scale: 1.1,
              y: -5,
              boxShadow: "0px 30px 60px rgba(0, 0, 0, 0.4)",
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="relative"
          >
            <img
              src={assets.pf}
              alt="Profile"
              className="h-fit w- rounded-2xl object-contain"
            />
          </motion.div>
        </div>
      </section>
      <Skills/>
    </main>
  );
};

export default About;
