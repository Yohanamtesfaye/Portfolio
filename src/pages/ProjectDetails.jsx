import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import Section from '../components/layout/Section';
import Button from '../components/ui/Button';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find(p => p.id === id);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <Section className="min-h-screen flex items-center justify-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h2 className="text-3xl font-bold mb-4 dark:text-white">Project Not Found</h2>
                    <Button onClick={() => navigate('/')} variant="primary" icon={FaArrowLeft}>
                        Back to Home
                    </Button>
                </motion.div>
            </Section>
        );
    }

    return (
        <div className="pt-20 pb-12 dark:bg-dark min-h-screen text-gray-900 dark:text-gray-100">
            <Section className="!py-0">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center mb-6"
                    >
                        <Button
                            onClick={() => navigate('/')}
                            variant="ghost"
                            className="pl-0 hover:bg-transparent dark:hover:bg-transparent hover:text-primary transition-all group py-0"
                            icon={FaArrowLeft}
                        >
                            Back
                        </Button>
                    </motion.div>

                    <div className="grid lg:grid-cols-5 gap-12 items-start">
                        {/* Text Content (Left - 2 Columns) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="lg:col-span-2 space-y-6"
                        >
                            <div className="sticky top-24">
                                <h1 className="text-3xl lg:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light">
                                    {project.title}
                                </h1>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-[10px] font-bold px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded-md uppercase tracking-tighter">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                                    {project.fullDescription || project.description}
                                </p>

                                <div className="flex flex-wrap gap-4 pt-4">
                                    {project.demo && (
                                        <Button href={project.demo} target="_blank" icon={FaExternalLinkAlt} className="px-8 shadow-lg shadow-primary/20">
                                            Live Demo
                                        </Button>
                                    )}
                                    {project.github && (
                                        <Button href={project.github} target="_blank" variant="secondary" icon={FaGithub} className="px-8">
                                            View Code
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </motion.div>

                        {/* Image Gallery Grid (Right - 3 Columns) */}
                        <div className="lg:col-span-3 grid grid-cols-2 gap-4">
                            {(project.images || [project.image]).map((img, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => setSelectedImage(img)}
                                    className="rounded-2xl overflow-hidden shadow-xl bg-gray-100 dark:bg-dark-lighter aspect-video group border border-gray-100 dark:border-gray-800 cursor-zoom-in relative"
                                >
                                    <img
                                        src={img}
                                        alt={`${project.title} gallery ${index + 1}`}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                        <span className="opacity-0 group-hover:opacity-100 text-white text-sm font-medium transition-opacity">Zoom</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* Lightbox / Image Zoom Popup */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm cursor-zoom-out"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="relative max-w-5xl w-full"
                        >
                            <img
                                src={selectedImage}
                                alt="Zoomed view"
                                className="w-full h-auto max-h-[85vh] object-contain rounded-xl shadow-2xl"
                            />
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute -top-12 right-0 text-white text-3xl hover:text-primary transition-colors p-2"
                            >
                                <FaTimes />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProjectDetails;
