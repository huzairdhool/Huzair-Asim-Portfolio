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
    <div className="w-full py-10 overflow-hidden">

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="font-bold text-3xl sm:text-5xl text-center my-6"
      >
        Brands I have collaborated with
      </motion.h1>

      {/* Marquee */}
      <div className="relative w-full mt-10 overflow-hidden">

        <motion.div
          className="flex items-center gap-16 w-max"
          animate={{
            x: ["0%", "-50%"]
          }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >

          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="min-w-[180px] flex justify-center">
              <img
                src={logo}
                alt="brand"
                className="h-16 md:h-20 object-contain opacity-70 hover:opacity-100 transition"
              />
            </div>
          ))}

        </motion.div>

      </div>
    </div>
  );
};

export default Logos;