import React from 'react';
import Section from '../layout/Section';
import Card from '../ui/Card';
import { FaHandHoldingHeart, FaAward, FaChalkboardTeacher } from 'react-icons/fa';

const Mentorship = () => {
    const mentoring = [
        {
            title: "Mentoring",
            role: "Mentor",
            org: "SheCodes AASTU & GDG on Campus",
            description: "Sharing knowledge and guiding aspiring developers through their learning journey. Helping students understand core programming concepts.",
            icon: FaChalkboardTeacher
        },
        {
            title: "Volunteering",
            role: "President",
            org: "AASTU Charity Club",
            description: "Leading charitable initiatives and community service projects. Also volunteered with Askal Charity and HighSchool Charity.",
            icon: FaHandHoldingHeart
        }
    ];

    const awards = [
        "3rd Place - GDSC AASTU Hackathon (Abugida Tutors)",
        "Winner - Gaithon Placement",
        "Participant - Ethiopia's First Hospitality Hackathon"
    ];

    return (
        <Section id="mentorship" className="bg-gray-50 dark:bg-dark">
            
            <div className="grid md:grid-cols-2 gap-12">
                
                {/* Mentorship & Volunteering */}
                <div>
                    <h2 className="text-3xl font-bold mb-8 dark:text-white text-center md:text-left">Community & Leadership</h2>
                    <div className="space-y-6">
                        {mentoring.map((item, index) => (
                            <Card key={index} className="flex gap-4 items-start">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary mt-1">
                                    <item.icon size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                                    <p className="text-sm text-primary font-medium mb-2">{item.role} @ {item.org}</p>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Awards */}
                <div>
                    <h2 className="text-3xl font-bold mb-8 dark:text-white text-center md:text-left">Achievements</h2>
                    <div className="space-y-4">
                        {awards.map((award, index) => (
                            <Card key={index} className="flex items-center gap-4 !py-4 hover:border-primary/50 transition-colors">
                                <FaAward className="text-yellow-500 text-xl flex-shrink-0" />
                                <span className="font-medium text-gray-800 dark:text-gray-200">{award}</span>
                            </Card>
                        ))}
                    </div>

                    {/* Additional "Services" summary from original design if needed, 
                         but "Mentoring" covers the key service aspect. 
                         We can add a small "What I do" block if requested. */}
                </div>
            </div>
        </Section>
    );
};

export default Mentorship;
