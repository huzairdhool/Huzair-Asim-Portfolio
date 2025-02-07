import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';



const placeholderImage2 = "https://via.placeholder.com/300";
const placeholderImage3 = "https://via.placeholder.com/300";

const cards = [
    {
        title: "Project One",
        description: "This is a short description of the first project.",
        image:'/p1.png'
    },
    {
        title: "Amazing Design",
        description: "A more detailed explanation of this design concept, showcasing creativity.",
        image: placeholderImage2
    },
    {
        title: "Web Development",
        description: "Building responsive and interactive websites using modern technologies.",
        image: placeholderImage3
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
            className="relative w-fit max-w-lg rounded-xl bg-gradient-to-br from-gray-300 to-gray-400 mb-6 p-4 shadow-lg"
        >
            <div
                style={{
                    transform: "translateZ(50px)",
                    transformStyle: "preserve-3d",
                }}
                className="relative rounded-xl bg-white shadow-md p-4"
            >
                <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg mb-3" />
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-gray-600">{description}</p>
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
