import React from 'react';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-dark-lighter py-8 border-t border-gray-100 dark:border-gray-800">
            <div className="container mx-auto px-6 text-center">
                <div className="flex justify-center flex-wrap gap-6 mb-4">
                    <a href="https://github.com/Yohanamtesfaye" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/yohana-mekuria-90607a2ab/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="https://t.me/YohanaETH" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                        <FaTelegram size={24} />
                    </a>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                    © {new Date().getFullYear()} Yohana Mekuria. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
