import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const education = [
    {
        degree: "Bachelor of Science in Computer science",
        institution: "Superior College Gujrat (GCUF)",
        duration: "2020 - 2024",
        description:
          "Bachelor of Science in Computer Science provides a comprehensive foundation in programming, algorithms, data structures, and software development.",
      },
  {
    degree: "Diploma in Graphic Designing",
    institution: "Digi Skills",
    duration: "2020",
    description:
      "Completed Courses of graphic designer, I specialize in creating unique logos and impactful designs using industry-standard tools like Adobe Illustrator, Photoshop, Figma, and XD to enhance brand identity and user experience",
  },
  {
    degree: "Diploma in Web Development",
    institution: "Adan IT centre",
    duration: "2022",
    description:
      "Completed courses in HTML, CSS, JavaScript, and React. Gained hands-on experience in building dynamic websites and applications.",
  },
];

const Education = () => {
  return (
    <section className="w-full min-fit flex flex-col items-center bg-gray-100 py-16 px-6 sm:px-12 md:px-20 lg:px-32">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-20">Education</h2>
      <div className="w-full max-w-6xl">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {education.map((edu, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.2,
            });

            return (
              <motion.li
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: inView ? 1 : 0,
                  y: inView ? 0 : 30,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="bg-black text-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:rotate-[1deg]"
              >
                
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p>{edu.institution} | {edu.duration}</p>

                
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{
                    opacity: inView ? 1 : 0,
                    y: inView ? 0 : 30,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.2,
                  }}
                  className="mt-4 p-4 bg-black text-white"
                >
                  {edu.description}
                </motion.p>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Education;
