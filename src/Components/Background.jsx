import React from "react";
import { motion } from "framer-motion";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gray-100">

      {/* Blob 1 */}
      <motion.div
        className="absolute w-[300px] h-[300px] bg-blue-300/30 rounded-full blur-3xl top-20 left-10"
        animate={{
          x: [0, 80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blob 2 */}
      <motion.div
        className="absolute w-[400px] h-[400px] bg-purple-300/30 rounded-full blur-3xl bottom-10 right-10"
        animate={{
          x: [0, -100, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blob 3 */}
      <motion.div
        className="absolute w-[250px] h-[250px] bg-pink-300/30 rounded-full blur-3xl top-1/2 left-1/2"
        animate={{
          x: [0, 50, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

    </div>
  );
};

export default Background;