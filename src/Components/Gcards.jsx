import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

// Define image sets for each section
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
            setCurrentIndex((prevIndex) => (prevIndex + 1) % 2); // Toggle between 2 images
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='flex flex-col justify-center items-center px-6 py-8 space-y-16'>
            {sections.map((section, index) => (
                <div key={index} className='w-full'>
                    <h3 className='text-4xl font-bold mb-6 mt-5 text-center text-blue-800'>{section.title}</h3>

                    <motion.div 
                        initial={{ opacity: 0, y: 50 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className='flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto rounded-lg'
                    >
                        <motion.div 
                            initial={{ opacity: 0, y: 50 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }} 
                            className="md:w-1/2 w-full flex justify-center p-6 rounded-lg shadow-lg shadow-gray-500"
                        >
                            <img 
                                src={section.images[currentIndex]} 
                                alt={section.title} 
                                className='w-3/4 md:w-3/4 transition-opacity duration-700 ease-in-out' 
                            />
                        </motion.div>

                        <motion.p 
                            initial={{ opacity: 0, y: 50 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }} 
                            className='md:w-1/2 w-full text-lg text-gray-700 leading-relaxed text-center md:text-left p-4'
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
