import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    title: "Graphic Designer",
    company: "Freelancer",
    duration: "2020 - Present",
    description:
      "Bringing ideas to life through compelling visuals and designs. Specialized in Logos, using Illustrator, Figma, Photoshop, and XD.",
  },
  {
    title: "Frontend Developer",
    company: "Freelancer",
    duration: "2022 - Present",
    description:
      "Building dynamic, responsive, and user-friendly websites with a strong focus on aesthetics and performance using React.js, Next.js, and Tailwind CSS.",
  },
  {
    title: "Graphic Designer & Junior Frontend Developer",
    company: "Digital Awaken",
    duration: "2023 - 2024",
    description:
      "Designed and developed engaging websites, marketing materials, social media graphics, and logos, enhancing brand identity and user experience.",
  },
  {
    title: "Frontend Developer & Graphic Designer",
    company: "Ossaf Ali Development Center",
    duration: "2024 - Present",
    description:
      "Building dynamic, responsive, and user-friendly websites and designs using different available technologies.",
  },
];

const Experience = () => {
  return (
    <section className="w-full min-fit flex flex-col items-center bg-gray-100 py-16 px-6 sm:px-12 md:px-20 lg:px-32">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-20">Experience</h2>
      <div className="w-full max-w-6xl">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {experiences.map((exp, index) => {
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
                {/* Title and Company Outside Box */}
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p>{exp.company} | {exp.duration}</p>

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
                  {exp.description}
                </motion.p>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
