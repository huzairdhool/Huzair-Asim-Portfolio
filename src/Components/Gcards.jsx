import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

const sections = [
    { title: "Logo Designing", images: [assets.logo1, assets.logo2], description: "A well-designed logo is the heart of a brand’s identity. I specialize in crafting unique, visually striking, and memorable logos that reflect your brand’s essence. With a blend of creativity and precision, I ensure each design stands out, leaving a lasting impression on your audience." },
    { title: "Flyer Designing", images: [assets.flyer1, assets.flyer2], description: "Flyers are a powerful way to convey your message. I design creative and eye-catching flyers that effectively communicate your brand’s vision and engage your audience with stunning visuals and layouts." },
    { title: "Business Card Designing", images: [assets.card1, assets.card2], description: "A business card is more than just contact info—it's your first impression. I create sleek and professional business card designs that leave a lasting mark, ensuring your brand stands out." },
    { title: "UI/UX Designing", images: [assets.ui1, assets.ui2], description: "User experience matters! I craft intuitive and visually appealing UI/UX designs that enhance usability and elevate your digital products, ensuring a seamless and engaging experience for users." },
];

const Gcards = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % 2);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='flex flex-col justify-center items-center px-4 sm:px-6 lg:px-16 py-8 space-y-12 sm:space-y-16 w-full'>
            {sections.map((section, index) => (
                <div key={index} className='w-full max-w-6xl'>
                    <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold mb-6 mt-5 text-center text-blue-800'>
                        {section.title}
                    </h3>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className='flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 mx-auto rounded-lg'
                    >
                        {/* Image Container */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                            className="w-full sm:w-3/4 lg:w-1/2 flex justify-center items-center p-4 sm:p-6 rounded-lg shadow-lg shadow-gray-500 overflow-hidden"
                        >
                            {/* Fixed-size wrapper prevents movement */}
                            <div className="relative w-[350px] h-[250px] sm:w-[400px] sm:h-[300px] lg:w-[450px] lg:h-[350px] flex justify-center items-center bg-gray-200 rounded-md">
                                {section.images.map((img, imgIndex) => (
                                    <motion.img
                                        key={imgIndex}
                                        src={img}
                                        alt={section.title}
                                        className={`absolute w-full h-full object-contain transition-opacity duration-700 ease-in-out ${
                                            currentIndex === imgIndex ? "opacity-100" : "opacity-0"
                                        }`}
                                    />
                                ))}
                            </div>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
                            className='w-full lg:w-1/2 text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-center lg:text-left p-4'
                        >
                            {section.description}
                        </motion.p>
                    </motion.div>
                </div>
            ))}
        </div>
    );
};

export default Gcards;
