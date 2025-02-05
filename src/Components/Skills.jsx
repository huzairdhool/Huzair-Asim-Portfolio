import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  { name: "Web & Designing", x: "0", y: "0", bold: true },
  { name: "CSS", x: "100px", y: "-50px" },
  { name: "JavaScript", x: "100px", y: "50px" },
  { name: "React JS", x: "-100px", y: "50px" },
  { name: "Next JS", x: "-100px", y: "-50px" },
  { name: "HTML", x: "-200px", y: "0px" },
  { name: "Iluustrator", x: "200px", y: "0px" },
  { name: "Photoshop", x: "0px", y: "150px" },
  { name: "Python", x: "0px", y: "-150px" },
  { name: "Tailwind CSS", x: "200px", y: "125px" },
  { name: "GitHub", x: "-200px", y: "125px" },
  { name: "Figma", x: "-200px", y: "-125px" },
  { name: "Wordpress", x: "200px", y: "-125px" },
];

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="relative flex flex-col items-center justify-center min-h-screen h-auto bg-gray-100 px-4 sm:px-10 ">
    
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold -mb-10">Skills</h2>

   
      <div className="relative flex items-center justify-center w-full h-[400px] sm:h-[500px] md:h-[600px]">
  
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 0, y: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, x: skill.x, y: skill.y, scale: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className={`absolute bg-black text-white px-4 py-2 text-sm rounded-full shadow-lg ${
              skill.bold ? "text-xl font-bold bg-black px-6 py-3" : ""
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
