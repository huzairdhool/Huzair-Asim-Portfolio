import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experiences';
import Logos from './Logos';

const About = () => {
  return (
    <main className="flex flex-col items-center text-black w-full bg-gray-100">

      <section className="w-full min-h-[60vh] lg:min-h-screen flex flex-col items-center px-6 sm:px-12 md:px-20 lg:px-32 py-10">

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="font-bold text-3xl sm:text-5xl text-center my-5 sm:my-9"
        >
          The Person Behind the Pixels
        </motion.h1>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 mt-6">

          <div className="text-center lg:text-left max-w-full lg:max-w-lg">
            <h2 className="text-xl sm:text-2xl font-bold mb-3">About Me</h2>

            <p className="font-medium leading-relaxed">
              Hi, I’m <span className="font-semibold">Huzair Asim</span>, a passionate Graphic Designer,Motion Designer, UI/UX Designer, Amazon content Designer and Video editor with 4 years of hands on experience. I specialize in creating visually compelling designs and building that elevate brands. With a keen eye for detail and a deep understanding of both design and development, I bring creative ideas to life through innovative solutions. Let’s collaborate to turn your vision into reality.
            </p>

            <p className="font-semibold mt-3">
              I believe that every brand has a story to tell, and my job is to bring that story to life through thoughtful design and smart development. With an eye for detail and a passion for innovation, I approach each project with curiosity and dedication, ensuring that every pixel and every line of code serves a purpose. Let’s build something meaningful together.
            </p>
          </div>

          <motion.div
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.3)",
            }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={assets.pf2}
              alt="Profile"
              className="w-64 sm:w-72 md:w-80 h-auto rounded-2xl object-cover"
            />
          </motion.div>

        </div>
      </section>

      <Skills />
      <Experience />
      <Education />
      <Logos />

    </main>
  );
};

export default About;