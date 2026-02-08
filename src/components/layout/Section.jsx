import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, className = '', children }) => {
    return (
        <section id={id} className={`py-20 md:py-32 relative overflow-hidden ${className}`}>
            <div className="container mx-auto px-6 relative z-10">
                {children}
            </div>
        </section>
    );
};

export default Section;
