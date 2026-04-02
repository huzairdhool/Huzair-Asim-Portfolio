import React from 'react';
import { motion } from "framer-motion";
import { assets } from '../assets/assets'; 

{/*const cards = [
    {
        title: "Ossaf Ali Property Center",
        description: "A modern, responsive website built with React and Tailwind CSS, offering a seamless user experience with fast performance and sleek design.",
        image: '/p1.png'
    },
    {
        title: "Dhool Ceiling & Electric store",
        description: "A Portfolio and informational website for small business using Javascript, css and html.",
        image: '/p2.png'
    },
    {
        title: "Amazone Clone",
        description: "Building responsive and interactive websites using modern technologies.",
        image: '/p3.png'
    },
    // {
    //     title: "Logo Designing",
    //     description: "Designing unique and impactful logos using Adobe Illustrator to establish a strong brand identity.",
    //     image: '/logos.png'
    // },
    // {
    //     title: "UI/UX Designing",
    //     description: "Crafting intuitive, user-centered designs using tools like Figma and Adobe XD to seamlessly blend aesthetics and functionality for an exceptional digital experience.",
    //     image: '/ui.png'
    // }
];

const Card = ({ title, description, image, index }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    return (
        <motion.div
            className="relative max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-xl bg-gradient-to-br from-gray-300 to-gray-400 mb-6 p-4 shadow-lg hover:shadow-2xl w-full"
        >
            <div
                className="relative rounded-xl bg-white shadow-md p-4 flex flex-col md:flex-row w-full"
            >
                <motion.img
                    src={image}
                    alt={title}
                    className="w-full h-full md:h-60 object-cover rounded-lg mb-3 md:mb-0 md:w-1/2"
                    style={{
                        rotateX,
                        rotateY,
                        transformStyle: "preserve-3d",
                        x: mouseXSpring,
                        y: mouseYSpring,
                    }}
                    onMouseMove={handleMouseMove}
                />
                <div className='place-content-center ml-0 md:ml-3 md:w-1/2'>
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className="text-gray-600 text-sm md:text-base">{description}</p>

                    <div className="flex gap-4 mt-3 justify-center md:justify-start">
                        {index < 3 ? (
                            <>
                                <motion.a href="https://github.com/huzairdhool" target="_blank" rel="noopener noreferrer" whileHover={{ y: -2 }}>
                                    <img src={assets.github} alt="GitHub" className="w-6 h-6" /> 
                                </motion.a>
                                <motion.a href="/Contact" whileHover={{ y: -2 }}> 
                                    <img src={assets.call} alt="Call" className="w-4 h-6" />
                                </motion.a>
                            </>
                        ) : (
                            <>
                                <motion.a href="https://www.instagram.com/dhool_graphics/" target="_blank" rel="noopener noreferrer" whileHover={{ y: -2 }}> {/* Example link
                                    <img src={assets.instagram} alt="Instagram" className="w-6 h-6" />
                                </motion.a>
                                <motion.a href="/Contact" whileHover={{ y: -2 }}>
                                    <img src={assets.call} alt="Call" className="w-4 h-6" /> 
                                </motion.a>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Cards = () => {
    return (
        <div className="flex flex-col items-center w-full py-10 px-4 md:px-0">
            {cards.map((card, index) => (
                <Card key={index} title={card.title} description={card.description} image={card.image} index={index} />
            ))}
        </div>
    );
};

export default Cards;*/}
const cards = [
  {
    title: "Aura King",
    description:
      "A modern and visually appealing website built with React and Tailwind, focused on clean UI and smooth user experience.",
    image: "/p1.png",
    tag: "Complete Branding and Product Design",
  },
  {
    title: "Supreme AC Maintenance",
    description:
      "Created a logo and complete branding for an AC repair and maintenance company in Dubai, designed with performance, trends, and conversion in mind.",
    image: "/p2.png",
    tag: "Branding and Video Editing",
  },
  {
    title: "Punjab Karhai",
    description:
      "Developed full branding from logo to restaurant website, including video and motion posts showcasing menu, branding, and user-friendly layout.",
    image: "/p3.png",
    tag: "Branding, Video Editing and UI/UX",
  },
];

const Cards = () => {
  return (
    <div className="w-full py-16 px-4 bg-gray-100">
      <div className="flex flex-col gap-10 max-w-5xl mx-auto">

        {cards.map((card, index) => (
          
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row gap-8 items-center"
          >

            {/* Image Hover Only */}
            <motion.div
              whileHover={{
                scale: 1.08,
                y: -10,
                boxShadow: "0px 25px 50px rgba(0,0,0,0.25)",
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full md:w-1/2"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full aspect-square object-contain bg-gray-50 rounded-xl p-4"
              />
            </motion.div>

            {/* Content (unchanged) */}
            <div className="flex-1 flex flex-col justify-center">

              <span className="bg-gray-200 px-3 py-1 rounded-full text-xs w-fit mb-3">
                {card.tag}
              </span>

              <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                {card.title}
              </h3>

              <p className="text-gray-600 text-base md:text-lg mb-5 leading-relaxed">
                {card.description}
              </p>

              {/* Icons */}
              <div className="flex gap-5">
                <a
                  href="https://www.behance.net/huzairasimdhool"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={assets.insta2}
                    alt="GitHub"
                    className="w-6 h-6 hover:scale-110 transition"
                  />
                </a>

                <a href="/Contact">
                  <img
                    src={assets.call}
                    alt="Contact"
                    className="w-6 h-6 hover:scale-110 transition"
                  />
                </a>
              </div>

            </div>

          </div>

        ))}

      </div>
    </div>
  );
};

export default Cards;