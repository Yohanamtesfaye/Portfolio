import React from 'react';
import Section from '../layout/Section';
import Card from '../ui/Card';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';

const Projects = () => {
    return (
        <Section id="projects" className="bg-gray-50 dark:bg-dark">
            <div className="text-center mb-16">
                <h2 className="text-3xl dark:text-white md:text-4xl font-bold mb-4">Featured Projects</h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    A selection of projects ranging from web applications to IoT solutions.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <Link to={`/project/${project.id}`} key={index} className="block h-full">
                        <Card className="flex flex-col h-full !p-0 overflow-hidden group hover:shadow-2xl transition-all duration-300">
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <span className="text-white font-medium border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
                                        View Details
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.slice(0, 3).map((tag, i) => (
                                        <span key={i} className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
