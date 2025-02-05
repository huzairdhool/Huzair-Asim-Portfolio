import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
    const location = useLocation();

    return (
        <motion.div
            key={location.pathname}
            initial={{ x: "-100%", opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ x: 0, opacity: 1, scale: 1, rotate: 0 }}
            exit={{ x: "100%", opacity: 0, scale: 0.8, rotate: 10 }}
            transition={{
                duration: 0.8,
                ease: [0.43, 0.13, 0.23, 0.96],
                scale: { type: "spring", stiffness: 100, damping: 20 },
                rotate: { type: "spring", stiffness: 50, damping: 15 },
            }}
        >
            {children}
        </motion.div>

    );
};

export default PageTransition;
