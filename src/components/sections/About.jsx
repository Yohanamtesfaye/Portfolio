import React from 'react';
import Section from '../layout/Section';
import Card from '../ui/Card';
import {
    FaReact, FaPython, FaRust, FaNodeJs, FaDatabase
} from 'react-icons/fa';
import {
    SiNextdotjs, SiTailwindcss, SiSolidity, SiStellar, SiDjango, SiFlutter, SiMongodb
} from 'react-icons/si';

const About = () => {
    const techStack = [
        { name: "React", icon: FaReact, color: "text-blue-400" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
        { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
        { name: "Rust", icon: FaRust, color: "text-orange-600" },
        { name: "Soroban", icon: SiStellar, color: "text-purple-500" }, // Using Stellar icon as proxy or text
        { name: "Stellar", icon: SiStellar, color: "text-gray-900 dark:text-white" },
        { name: "Solidity", icon: SiSolidity, color: "text-gray-600 dark:text-gray-300" },
        { name: "Python", icon: FaPython, color: "text-blue-500" },
        { name: "Django", icon: SiDjango, color: "text-green-700" },
        { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
        { name: "Flutter", icon: SiFlutter, color: "text-blue-400" },
    ];

    return (
        <Section id="about" className="bg-white dark:bg-dark-lighter">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl dark:text-white md:text-4xl font-bold mb-8">Tech Stack</h2>

                
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {techStack.map((tech, index) => (
                        <Card key={index} className="flex flex-col items-center justify-center p-4 !bg-gray-50 dark:!bg-dark hover:!bg-white dark:hover:!bg-gray-800 transition-colors">
                            <tech.icon className={`text-3xl mb-3 ${tech.color}`} />
                            <span className="font-medium text-sm text-gray-700 dark:text-gray-300">{tech.name}</span>
                        </Card>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default About;
