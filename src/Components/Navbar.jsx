import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="w-full px-6 md:px-32 py-6 font-medium flex items-center justify-between relative z-20">

      {/* Mobile Button */}
      <button
        className="md:hidden w-8 h-8 z-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <img
          src={menuOpen ? assets.cross_icon : assets.bars_icon}
          alt="Menu"
          className="w-full h-full"
        />
      </button>

      {/* MOBILE MENU */}
      <nav
        className={`absolute md:hidden top-16 left-0 w-full bg-white/80 backdrop-blur-md shadow-md transition-all duration-300 z-40 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col items-center space-y-6 py-6">

          <a href="#home" onClick={closeMenu} className="hover:scale-105 transition">
            Home
          </a>

          <a href="#about" onClick={closeMenu} className="hover:scale-105 transition">
            About
          </a>

          <a href="#projects" onClick={closeMenu} className="hover:scale-105 transition">
            Projects
          </a>

          <a href="/contact" onClick={closeMenu} className="hover:scale-105 transition">
            Contact
          </a>

          {/* Socials */}
          <div className="flex space-x-4 pt-4">
            <a href="https://www.instagram.com/huzair_asim/" target="_blank">
              <img src={assets.instagram} className="w-6 h-6" />
            </a>
            <a href="https://www.behance.net/huzairasimdhool" target="_blank">
              <img src={assets.insta2} className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/huzair-asim-68a3291a3/" target="_blank">
              <img src={assets.linkdin} className="w-6 h-6" />
            </a>
            <a href="https://github.com/huzairdhool" target="_blank">
              <img src={assets.github} className="w-6 h-6" />
            </a>
          </div>

        </div>
      </nav>

      {/* DESKTOP LINKS */}
      <nav className="hidden md:flex space-x-6 ml-6">
        <a href="#home" className="hover:underline">Home</a>
        <a href="#about" className="hover:underline">About</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </nav>

      {/* DESKTOP SOCIALS */}
      <nav className="hidden md:flex space-x-6 mr-6">
        <motion.a whileHover={{ y: -2 }} href="https://www.instagram.com/huzair_asim/" target="_blank">
          <img src={assets.instagram} className="w-6 h-6" />
        </motion.a>

        <motion.a whileHover={{ y: -2 }} href="https://www.behance.net/huzairasimdhool" target="_blank">
          <img src={assets.insta2} className="w-6 h-6" />
        </motion.a>

        <motion.a whileHover={{ y: -2 }} href="https://www.linkedin.com/in/huzair-asim-68a3291a3/" target="_blank">
          <img src={assets.linkdin} className="w-6 h-6" />
        </motion.a>

        <motion.a whileHover={{ y: -2 }} href="https://github.com/huzairdhool" target="_blank">
          <img src={assets.github} className="w-6 h-6" />
        </motion.a>
      </nav>

    </header>
  );
};

export default Navbar;