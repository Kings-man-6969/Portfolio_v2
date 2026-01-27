import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/card';
import { Database } from 'lucide-react';
import { portfolioData } from '../../mock';

const Skills = () => {
    return (
        <section id="skills" className="skills-section py-20 px-10 max-w-[1400px] mx-auto">
            <div className="section-header text-center mb-16">
                <h2 className="section-title text-4xl font-bold tracking-tighter mb-4">
                    <span className="title-prefix text-brand-primary mr-2">{'>'}</span> SKILLS_MATRIX
                </h2>
                <div className="section-subtitle text-base text-text-muted max-w-2xl mx-auto leading-relaxed font-mono">
                    {portfolioData.skillsIntro}
                </div>
            </div>

            <div className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioData.skills.map((skillGroup, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Card className="skill-card bg-bg-card border border-border-subtle p-8 transition-all duration-300 hover:border-brand-primary hover:shadow-[0_8px_32px_rgba(0,255,209,0.1)] h-full">
                            <div className="skill-category flex items-center gap-3 mb-6 pb-4 border-b border-border-subtle text-brand-primary">
                                <Database size={20} />
                                <h3 className="text-lg font-bold text-text-primary">{skillGroup.category}</h3>
                            </div>

                            <div className="skill-items flex flex-col gap-5">
                                {skillGroup.items.map((skill, idx) => (
                                    <div key={idx} className="skill-item flex flex-col gap-2">
                                        <div className="skill-header flex justify-between items-center">
                                            <span className="skill-name text-sm text-text-secondary">{skill.name}</span>
                                            <span className="skill-percentage text-xs text-brand-primary font-bold">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar-container w-full h-1.5 bg-white/5 overflow-hidden rounded-full">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: 0.2 + (idx * 0.1) }}
                                                viewport={{ once: true }}
                                                className="skill-bar-fill h-full bg-brand-primary shadow-[0_0_10px_var(--brand-primary)]"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
