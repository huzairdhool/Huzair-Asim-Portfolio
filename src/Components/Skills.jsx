import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  { name: "Web & Designing", x: "0vw", y: "0vh", bold: true },
  { name: "CSS", x: "15vw", y: "-7.5vh" }, 
  { name: "JavaScript", x: "15vw", y: "7.5vh" }, 
  { name: "React JS", x: "-15vw", y: "7.5vh" }, 
  { name: "Next JS", x: "-15vw", y: "-7.5vh" }, 
  { name: "HTML", x: "-25vw", y: "0vh" }, 
  { name: "Illustrator", x: "25vw", y: "0vh" }, 
  { name: "Photoshop", x: "0vw", y: "22.5vh" }, 
  { name: "Python", x: "0vw", y: "-22.5vh" }, 
  { name: "Tailwind CSS", x: "25vw", y: "18.75vh" }, 
  { name: "GitHub", x: "-25vw", y: "18.75vh" },
  { name: "Figma", x: "-25vw", y: "-18.75vh" }, 
  { name: "Wordpress", x: "25vw", y: "-18.75vh" }, 
];

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="relative flex flex-col items-center justify-center min-w-auto min-h-screen bg-gray-100 mb-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-20 ">Skills</h2>

      <div className="relative flex items-center justify-center w-full h-[50vh] sm:h-[55vh] md:h-[40vh]">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 0, y: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, x: skill.x, y: skill.y, scale: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className={`absolute bg-black text-white px-4 py-2 text-xs sm:px-3 sm:py-1 sm:text-xs md:px-4 md:py-2 md:text-sm rounded-full shadow-lg ${
              skill.bold ? "text-lg sm:text-base font-bold bg-black px-6 py-3 text-center" : ""
            }`}
          >
            {skill.name}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

