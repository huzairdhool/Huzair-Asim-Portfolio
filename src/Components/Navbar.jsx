import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full px-6 md:px-32 py-6 font-medium flex items-center justify-between relative z-20">
      
      <button 
        className="md:hidden w-8 h-8 focus:outline-none z-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <img src={menuOpen ? assets.cross_icon : assets.bars_icon} alt="Menu" className="w-full h-full" />
      </button>

      <nav 
        className={`absolute md:hidden top-16 left-0 w-full bg-white bg-opacity-70 backdrop-blur-md shadow-md transition-all duration-300 z-40 ${menuOpen ? "block" : "hidden"}`}
        style={{ backdropFilter: 'blur(5px)' }}
      >
        <div className="flex flex-col items-center space-y-6 py-6">
          <Link to="/" className="relative group">
            Home
            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <Link to="/about" className="relative group">
            About
            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <Link to="/projects" className="relative group">
            Projects
            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <Link to="/contact" className="relative group">
            Contact
            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>

          {/* Desktop Menu  */}
          <div className="flex space-x-4">
            <motion.a href="https://www.instagram.com/huzair_asim/" target="_blank" rel="noopener noreferrer" whileHover={{ y: -2 }}>
              <img src={assets.instagram} alt="Instagram" className="w-6 h-6"/>
            </motion.a>
            <motion.a href="https://www.instagram.com/dhool_graphics/" target="_blank" rel="noopener noreferrer" whileHover={{ y: -2 }}>
              <img src={assets.insta2} alt="Instagram Portfolio" className="w-6 h-6"/>
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/huzair-asim-68a3291a3/" target="_blank" rel="noopener noreferrer" whileHover={{ y: -2 }}>
              <img src={assets.linkdin} alt="LinkedIn" className="w-6 h-6"/>
            </motion.a>
            <motion.a href="https://github.com/huzairdhool" target="_blank" rel="noopener noreferrer" whileHover={{ y: -2 }}>
              <img src={assets.github} alt="GitHub" className="w-6 h-6"/>
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Desktop navigation links */}
      <nav className="hidden md:flex space-x-6 ml-6">
        <Link to="/" className="relative group">
          Home
          <span className="absolute left-0 bottom-0 w-full h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </Link>
        <Link to="/about" className="relative group">
          About
          <span className="absolute left-0 bottom-0 w-full h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </Link>
        <Link to="/projects" className="relative group">
          Projects
          <span className="absolute left-0 bottom-0 w-full h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </Link>
        <Link to="/contact" className="relative group">
          Contact
          <span className="absolute left-0 bottom-0 w-full h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </Link>
      </nav>

      {/* Desktop social links */}
      <nav className="hidden md:flex space-x-6 mr-6">
        <motion.a href="https://www.instagram.com/huzair_asim/" target="_blank" rel="noopener noreferrer" whileHover={{ y: -2 }}>
          <img src={assets.instagram} alt="Instagram" className="w-6 h-6"/>
        </motion.a>
        <motion.a href="https://www.instagram.com/dhool_graphics/" target="_blank" rel="noopener noreferrer" whileHover={{ y: -2 }}>
          <img src={assets.insta2} alt="Instagram Portfolio" className="w-6 h-6"/>
        </motion.a>
        <motion.a href="https://www.linkedin.com/in/huzair-asim-68a3291a3/" target="_blank" rel="noopener noreferrer" whileHover={{ y: -2 }}>
          <img src={assets.linkdin} alt="LinkedIn" className="w-6 h-6"/>
        </motion.a>
        <motion.a href="https://github.com/huzairdhool" target="_blank" rel="noopener noreferrer" whileHover={{ y: -2 }}>
          <img src={assets.github} alt="GitHub" className="w-6 h-6"/>
        </motion.a>
      </nav>
    </header>
  );
};

export default Navbar;
