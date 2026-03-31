import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const logos = [
  assets.rdxlogo,
  assets.lyma,
  assets.naseerandspine,
  assets.sethi,
  assets.supremelogo,
  assets.auraking,
];

const Logos = () => {
  return (
    <div className="w-full py-10">

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="font-bold text-3xl sm:text-5xl text-center my-6"
      >
        Brands I have collabroted with
      </motion.h1>

      {/* Slider */}
      <div className="relative w-full overflow-hidden mt-10">
        <motion.div
          className="flex items-center gap-16 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="min-w-[180px] flex justify-center">
              <img
                src={logo}
                alt="brand"
                className="h-20 md:h-24 object-contain opacity-70 hover:opacity-100 transition"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Logos;