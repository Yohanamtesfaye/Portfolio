import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Section from '../layout/Section';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

// Assets
import me from "../../../public/Me.png";
import resume from "../../../public/Yohana-Mekuria.pdf";

const Hero = () => {
    const socialLinks = [
        { icon: FaLinkedin, href: "https://www.linkedin.com/in/yohana-mekuria-90607a2ab/" },
        { icon: FaGithub, href: "https://github.com/Yohanamtesfaye" },
        { icon: FaTelegram, href: "https://t.me/YohanaETH" },
    ];

    return (
        <Section id="home" className="flex items-center justify-center min-h-screen !py-0 pt-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="order-2 md:order-1 text-center md:text-left">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-lg md:text-xl font-medium text-primary mb-4 tracking-wide"
                    >
                        Hello, I'm
                    </motion.h2>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white"
                    >
                        Yohana Mekuria
                    </motion.h1>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-8"
                    >
                        Full-Stack Developer
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-gray-600 dark:text-gray-400 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed"
                    >
                        Building digital experiences with modern technologies. Passionate about creating clean, performant, and user-centric applications.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                    >
                      
                        <Button href="https://flowcv.com/resume/l8iituowsl" target="_blank" icon={HiDownload}>
                            View CV
                        </Button>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <Button
                                    key={index}
                                    href={social.href}
                                    variant="secondary"
                                    target="_blank"
                                    className="!p-3"
                                >
                                    <social.icon size={20} />
                                </Button>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="order-1 md:order-2 flex justify-center"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                        <div className="relative w-full h-full rounded-full border-4 border-white dark:border-gray-800 overflow-hidden shadow-2xl animate-float">
                            <img
                                src={me}
                                alt="Yohana Mekuria"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default Hero;
