import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true }) => {
    return (
        <motion.div
            className={`bg-white dark:bg-dark-lighter rounded-2xl p-6 shadow-xl shadow-gray-100/50 dark:shadow-none border border-gray-100 dark:border-gray-800 backdrop-blur-sm ${className}`}
            whileHover={hover ? { y: -5, transition: { duration: 0.2 } } : {}}
        >
            {children}
        </motion.div>
    );
};

export default Card;
