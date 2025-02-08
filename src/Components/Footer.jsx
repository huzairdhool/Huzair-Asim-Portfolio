import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="w-full py-8 text-black flex flex-col md:flex-row items-center justify-between border-t-2 border-black px-6 md:px-12">
      
      <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
        <motion.img 
          src={assets.text} 
          alt="Rotating-text" 
          className="w-full h-full animate-spin" 
          style={{ animationDuration: "10s" }} 
        />
      </div> 

      <div className="flex flex-col items-center text-center">
        <motion.h1
          className="text-2xl md:text-3xl font-bold"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Huzair Asim
        </motion.h1>
        <motion.p
          className="mt-2 text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          &copy; {new Date().getFullYear()} Huzair Asim. All rights reserved.
        </motion.p>
      </div>

      <div className="flex space-x-4 mt-4 md:mt-0">
        <motion.a
          href="https://www.instagram.com/huzair_asim/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src={assets.instagram} alt="Instagram" className="w-8 h-8" />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/dhool_graphics/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src={assets.insta2} alt="Instagram Portfolio" className="w-8 h-8" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/huzair-asim-68a3291a3/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src={assets.linkdin} alt="LinkedIn" className="w-8 h-8" />
        </motion.a>
        <motion.a
          href="https://github.com/huzairdhool"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src={assets.github} alt="GitHub" className="w-8 h-8" />
        </motion.a>
        <motion.a
          href="https://www.fiverr.com/huzairasim/buying?source=avatar_menu_profile"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src={assets.fiverr} alt="Fiverr" className="w-8 h-8" />
        </motion.a>
      </div>

    </footer>
  );
};

export default Footer;
