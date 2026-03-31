import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    title: "Graphic Designer",
    company: "Digital Awaken",
    duration: "2022 - 2024",
    description:
      "Designed and developed engaging websites, marketing materials, social media graphics, and logos, enhancing brand identity and user experience.",
  },
  {
    title: "Graphics and UI/UX Designer",
    company: "Ossaf Ali Development Center",
    duration: "2024 - 2025",
    description:
      "Building dynamic, responsive, and user-friendly websites designs with a strong focus on aesthetics and performance using React and Figma.",
  },
  {
    title: "Senior Graphic Designer",
    company: "I Gate Technologies",
    duration: "2025 - Present",
    description:
      "Leading design tasks expanding into video editing and animation using tools like After Effects and Premiere Pro.",
  },
];

const Experience = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center bg-gray-100 py-16 px-6 sm:px-12 md:px-20 lg:px-32">
      
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16">
        Experience
      </h2>

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
                  duration: 0.7,
                  ease: "easeOut",
                }}
                className="bg-black text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:rotate-[1deg]"
              >
                {/* Title */}
                <h3 className="text-xl font-semibold">{exp.title}</h3>

                {/* Company + Duration */}
                <p className="text-sm text-gray-300 mt-1">
                  {exp.company} | {exp.duration}
                </p>

                {/* Description */}
                <p className="mt-4 text-gray-200 leading-relaxed">
                  {exp.description}
                </p>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experience;