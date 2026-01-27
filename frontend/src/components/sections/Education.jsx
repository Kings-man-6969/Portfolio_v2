import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/card';
import { GraduationCap } from 'lucide-react';
import { portfolioData } from '../../mock';

const Education = () => {
    return (
        <section id="education" className="education-section py-20 px-10 max-w-[1400px] mx-auto">
            <div className="section-header text-center mb-16">
                <h2 className="section-title text-4xl font-bold tracking-tighter mb-4">
                    <span className="title-prefix text-brand-primary mr-2">{'>'}</span> EDUCATION
                </h2>
                <div className="section-subtitle text-base text-text-muted max-w-2xl mx-auto leading-relaxed font-mono">
                    Academic background and qualifications
                </div>
            </div>

            <div className="education-grid flex flex-col gap-6 max-w-4xl mx-auto">
                {portfolioData.education.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Card className="education-card bg-bg-card border border-border-subtle p-8 transition-all duration-300 hover:border-brand-primary hover:shadow-[0_8px_32px_rgba(0,255,209,0.1)]">
                            <div className="education-content flex gap-6">
                                <div className="education-icon flex-shrink-0">
                                    <div className="icon-wrapper w-12 h-12 flex items-center justify-center bg-brand-hover border border-brand-primary">
                                        <GraduationCap className="text-brand-primary" size={24} />
                                    </div>
                                </div>
                                
                                <div className="education-details flex-1">
                                    <h3 className="education-degree text-lg font-bold text-text-primary mb-2">
                                        {edu.degree}
                                    </h3>
                                    <p className="education-institution text-sm text-text-secondary mb-3">
                                        {edu.institution}
                                    </p>
                                    <div className="education-meta flex flex-wrap gap-4 items-center">
                                        <span className="education-score text-xs font-bold text-brand-primary uppercase tracking-wider px-3 py-1 bg-brand-hover border border-brand-primary">
                                            {edu.score}
                                        </span>
                                        {edu.year && (
                                            <span className="education-year text-xs text-text-muted">
                                                {edu.year}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;
