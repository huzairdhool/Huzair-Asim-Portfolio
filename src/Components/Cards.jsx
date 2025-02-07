import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';


const cards = [
    {
        title: "Ossaf Ali Property Center",
        description: "A modern, responsive website built with React and Tailwind CSS, offering a seamless user experience with fast performance and sleek design.",
        image:'/p1.png'
    },
    {
        title: "Dhool Ceiling & Electric store",
        description: "A Portfolio and informational website for small business using Javascript, css and html.",
        image: '/p1.png'
    },
    {
        title: "Amazone Clone",
        description: "Building responsive and interactive websites using modern technologies.",
        image: '/p1.png'
    }
];

const Card = ({ title, description, image }) => {
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
            onMouseMove={handleMouseMove}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="relative max-w-lg rounded-xl bg-gradient-to-br from-gray-300 to-gray-400 mb-6 p-4 shadow-lg hover:shadow-2xl"
        >
            <div
                style={{
                    transform: "translateZ(50px)",
                    transformStyle: "preserve-3d",
                }}
                className="relative rounded-xl bg-white shadow-md p-4 flex flex-row w-full"
            >
                <img src={image} alt={title} className="w-full h-60 object-cover rounded-lg mb-3" />
                <div className='place-content-center ml-3'>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-gray-600">{description}</p>
                </div>
            </div>
        </motion.div>
    );
};

const Cards = () => {
    return (
        <div className="flex flex-col items-center w-full py-10">
            {cards.map((card, index) => (
                <Card key={index} title={card.title} description={card.description} image={card.image} />
            ))}
        </div>
    );
};

export default Cards;
