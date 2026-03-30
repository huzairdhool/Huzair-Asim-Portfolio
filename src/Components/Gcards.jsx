import React from "react";
import { motion } from "framer-motion";

const services = [
  { title: "Graphic Designing", link: "#" },
  { title: "UI/UX Designing", link: "#" },
  { title: "Amazon A+ Content", link: "#" },
  { title: "Video Editing", link: "#" },
  { title: "Web Development", link: "#" },
];

const Gcards = () => {
  return (
    <div className="w-full py-16 bg-gray-100 overflow-hidden">
      
       <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className='font-bold text-4xl sm:text-5xl text-center my-5 sm:my-9'
              >
                Things I have Done
              </motion.h1>

      {/* Scrolling */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["100%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "linear",
          }}
        >
          {[...services, ...services].map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="min-w-[220px] bg-white rounded-xl shadow-md px-6 py-4 text-center hover:shadow-xl transition"
            >
              <h3 className="text-lg font-medium">{item.title}</h3>
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Gcards;