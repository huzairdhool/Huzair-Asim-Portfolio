import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Graphic Designing",
    link: "https://www.behance.net/huzairasimdhool",
    description:
      "Creating visually compelling designs, logos, and branding that communicate ideas effectively and leave a lasting impression.",
  },
  {
    title: "UI/UX Designing",
    link: "https://www.behance.net/huzairasimdhool",
    description:
      "Designing user-friendly and modern interfaces with a focus on user experience, usability, and clean aesthetics.",
  },
  {
    title: "Amazon A+ Content",
    link: "https://www.behance.net/huzairasimdhool",
    description:
      "Building high-converting Amazon A+ content, Listing images and EBC with engaging visuals that boost product appeal and sales.",
  },
  {
    title: "Video Editing",
    link: "https://www.behance.net/huzairasimdhool",
    description:
      "Editing high-quality videos with smooth transitions, effects, and storytelling to engage and captivate audiences.",
  },
  {
    title: "Web Development",
    link: "https://www.behance.net/huzairasimdhool",
    description:
      "Developing responsive and fast websites using modern technologies like React and Tailwind CSS.",
  },
];

const Gcards = () => {
  return (
    <div className="w-full py-20 bg-gray-100 overflow-hidden">

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="font-bold text-4xl sm:text-5xl text-center mb-16"
      >
        One guy and many skills
      </motion.h1>

      {/* Infinite Scroll */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-8 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...services, ...services].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[380px] md:min-w-[420px] bg-black text-white rounded-2xl px-8 py-8 shadow-xl hover:scale-105 transition"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Gcards;