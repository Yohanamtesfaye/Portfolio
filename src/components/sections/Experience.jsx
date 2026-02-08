import React from 'react';
import Section from '../layout/Section';
import Card from '../ui/Card';

const Experience = () => {
    const experiences = [
        {
            role: "Frontend Developer",
            company: "ETTA Solutions",
            period: "2024 - Present", // Estimated based on context, user can update
            description: "Redesigned the Zmall mini app integrated with Dashen Bank. Built the entire frontend and deployed it within three months. Currently handling thousands of daily users.",
            metrics: ["Thousands of daily users", "3-month deployment"]
        },
        {
            role: "Full Stack Developer",
            company: "Kuriftu Resorts",
            period: "Project Based",
            description: "Developed a full-stack Gena discount platform. Integrated Addis Pay payments, transportation system, and admin dashboard.",
            metrics: ["2.5M+ ETB processed", "Live production"]
        },
        {
            role: "Web Developer",
            company: "Askal Charity",
            period: "Volunteer",
            description: "Designed and developed the official website with multilingual support for 7 languages, volunteer management, and member management systems.",
            metrics: ["7 languages supported", "Volunteer System"]
        }
    ];

    return (
        <Section id="experience" className="bg-white dark:bg-dark-lighter">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-8">
                {experiences.map((exp, index) => (
                    <div key={index} className="relative pl-8 md:pl-0">
                        {/* Timeline Line (Desktop) */}
                        <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 -translate-x-1/2"></div>

                        <div className={`md:flex items-center justify-between gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            {/* Dot */}
                            <div className="absolute left-0 top-6 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-dark md:left-[50%] md:-translate-x-1/2 z-10"></div>

                            {/* Content */}
                            <div className="w-full md:w-[45%] mb-8 md:mb-0">
                                <Card className="!p-6 hover:!translate-y-0">
                                    <span className="text-sm font-medium text-primary mb-2 block">{exp.period}</span>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.role}</h3>
                                    <h4 className="text-lg text-gray-600 dark:text-gray-400 mb-4">{exp.company}</h4>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                        {exp.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.metrics.map((metric, i) => (
                                            <span key={i} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-gray-600 dark:text-gray-400">
                                                {metric}
                                            </span>
                                        ))}
                                    </div>
                                </Card>
                            </div>

                            {/* Empty Space for alternate side */}
                            <div className="hidden md:block w-[45%]"></div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Experience;
