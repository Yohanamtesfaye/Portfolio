import React, { useState } from 'react';
import Section from '../layout/Section';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { FaPaperPlane, FaSpinner } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission for UI feedback
        // In reality, this opens the mailto link as per original code
        const formData = new FormData(e.target);
        const subject = formData.get("subject");
        const message = formData.get("message");

        setTimeout(() => {
            window.location.href = `mailto:yohanatesfaye24@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
            setIsSubmitting(false);
            setStatus('success');
            e.target.reset();

            setTimeout(() => setStatus(null), 5000);
        }, 1000);
    };

    return (
        <Section id="contact" className="bg-white dark:bg-dark-lighter">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl dark:text-white md:text-4xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        Have a project in mind or want to say hi? I'd love to hear from you.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-1 space-y-8">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Email</h3>
                            <a href="mailto:yohanatesfaye24@gmail.com" className="text-primary hover:underline">yohanatesfaye24@gmail.com</a>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Phone</h3>
                            <p className="text-gray-600 dark:text-gray-400">+251-900118533</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Location</h3>
                            <p className="text-gray-600 dark:text-gray-400">Addis Ababa, Ethiopia</p>
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6 mb-4">
                                <Input label="Name" placeholder="" required />
                                <Input label="Email" type="email" placeholder="" required />
                            </div>
                            <Input label="Subject" placeholder="Project Inquiry" required />
                            <Input label="Message" type="textarea" placeholder="Tell me about your project..." rows={6} required />

                            <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
                                {isSubmitting ? (
                                    <>
                                        <FaSpinner className="animate-spin mr-2" /> Sending...
                                    </>
                                ) : (
                                    <>
                                        <FaPaperPlane className="mr-2" /> Send Message
                                    </>
                                )}
                            </Button>
                        </form>

                        <AnimatePresence>
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg text-center"
                                >
                                    Message prepared! Opening your email client...
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
