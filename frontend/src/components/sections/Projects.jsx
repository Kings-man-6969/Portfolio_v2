import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/card';
import { ExternalLink } from 'lucide-react';
import { portfolioData } from '../../mock';

const Projects = () => {
    return (
        <section id="projects" className="projects-section py-20 px-10 max-w-[1400px] mx-auto">
            <div className="section-header text-center mb-16">
                <h2 className="section-title text-4xl font-bold tracking-tighter mb-4">
                    <span className="title-prefix text-brand-primary mr-2">{'>'}</span> FEATURED_PROJECTS
                </h2>
                <div className="section-subtitle text-base text-text-muted max-w-2xl mx-auto leading-relaxed">
                    Engineering problems and their solutions
                </div>
            </div>

            <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioData.projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex"
                    >
                        <Card className="project-card bg-bg-card border border-border-subtle p-8 transition-all duration-300 hover:border-brand-primary hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,255,209,0.2)] flex flex-col h-full group">
                            <div className="project-header flex justify-between items-start mb-4">
                                <h3 className="project-title text-xl font-bold text-text-primary leading-tight flex-1 group-hover:text-brand-primary transition-colors">
                                    {project.title}
                                </h3>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-icon text-brand-primary hover:text-white transition-colors transform hover:translate-x-1 hover:-translate-y-1">
                                    <ExternalLink size={20} />
                                </a>
                            </div>

                            <p className="project-description text-sm text-text-muted mb-5 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="project-tech flex flex-wrap gap-2 mb-6">
                                {project.tech.map((tech, idx) => (
                                    <span key={idx} className="tech-tag text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-brand-hover border border-brand-primary text-brand-primary rounded-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="project-outcomes mt-auto pt-5 border-t border-border-subtle">
                                <div className="outcomes-title text-xs text-brand-primary font-bold uppercase tracking-widest mb-3">Key Outcomes:</div>
                                <ul className="outcomes-list flex flex-col gap-2">
                                    {project.outcomes.map((outcome, idx) => (
                                        <li key={idx} className="text-xs text-text-muted pl-5 relative before:content-['>'] before:absolute before:left-0 before:text-brand-primary before:font-bold">
                                            {outcome}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
