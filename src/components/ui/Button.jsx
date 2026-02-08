import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
    children,
    onClick,
    variant = 'primary',
    className = '',
    href,
    target,
    type = 'button',
    icon: Icon
}) => {
    const baseStyle = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/25 hover:shadow-primary/40 focus:ring-primary",
        secondary: "bg-white dark:bg-dark-lighter text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary-light",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
        ghost: "text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light hover:bg-gray-100 dark:hover:bg-gray-800"
    };

    const Component = href ? motion.a : motion.button;

    return (
        <Component
            href={href}
            target={target}
            rel={target === '_blank' ? "noopener noreferrer" : undefined}
            type={!href ? type : undefined}
            onClick={onClick}
            className={`${baseStyle} ${variants[variant]} px-6 py-3 ${className}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            {Icon && <Icon className="mr-2 text-xl" />}
            {children}
        </Component>
    );
};

export default Button;
