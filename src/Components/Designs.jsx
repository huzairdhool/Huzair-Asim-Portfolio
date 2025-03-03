import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import Gcards from './Gcards';

const Designs = () => {
    return (
        <main className="flex flex-col items-center text-black w-full min-h-screen bg-gray-100">
            <Navbar />
            <section className='w-full min-h-screen flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-8 sm:py-12'>

                <motion.h1
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.8, ease: "easeOut" }}
                    className='font-bold text-3xl sm:text-4xl md:text-5xl text-center my-4 sm:my-8'
                >
                    Things I can Design
                </motion.h1>      
                <Gcards />
            </section>
        </main>
    );
};

export default Designs;

