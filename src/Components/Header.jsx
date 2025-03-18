import React from 'react';
import Navbar from './Navbar';
import { assets } from '../assets/assets';
import { motion } from "framer-motion";

const Header = () => {
  return (
    <main className="flex flex-col items-center text-black w-full min-h-screen bg-gray-100">
      <Navbar />

      <section className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-6xl px-4 sm:px-8 md:px-12 lg:px-20 py-12">

        <div className="text-center lg:text-left lg:w-1/2 space-y-4 sm:space-y-10">
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 leading-relaxed">
            Hey, I am
          </p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight -my-3"
          >
            Huzair Asim
          </motion.h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed mt-6">
            I am a Web Developer and a Graphic Designer. Explore my projects and discover excellence.
          </p>

          <motion.a
            href="https://drive.google.com/file/d/1ChGTmO1P7UD8q_ifjKFNnKs6KYN_0VdF/view?usp=sharing"
            download="huzair cv.pdf"
            whileHover={{ scale: 1.1, backgroundColor: "#333", y: -8 }}
            whileTap={{ scale: 0.9 }}
            className="inline-block bg-black text-white px-6 py-3 rounded-md transition duration-300 cursor-pointer mt-5"
          >
            My Resume
          </motion.a>
          <motion.a
            href="/Contact"
            whileHover={{ scale: 1.1, backgroundColor: "white", y: -8 }}
            whileTap={{ scale: 0.9 }}
            className="inline-block bg-gray-300 text-black px-6 py-3 rounded-md transition duration-300 cursor-pointer mt-5 ml-3"
          >
            Contact Me
          </motion.a>


        </div>

        <div className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-2/5 flex justify-center mt-6 lg:mt-0">
          <img src={assets.Profile_img_1} alt="Profile" className="w-full h-auto" />
        </div>

      </section>
    </main>
  );
};

export default Header;
