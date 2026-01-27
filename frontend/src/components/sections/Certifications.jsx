import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/card';
import { Award, ExternalLink } from 'lucide-react';
import { portfolioData } from '../../mock';

const Certifications = () => {
    const hasCertifications = portfolioData.certifications && portfolioData.certifications.length > 0;

    return (
        <section id="certifications" className="certifications-section py-20 px-10 max-w-[1400px] mx-auto">
            <div className="section-header text-center mb-16">
                <h2 className="section-title text-4xl font-bold tracking-tighter mb-4">
                    <span className="title-prefix text-brand-primary mr-2">{'>'}</span> CERTIFICATIONS
                </h2>
                <div className="section-subtitle text-base text-text-muted max-w-2xl mx-auto leading-relaxed font-mono">
                    Professional certifications and achievements
                </div>
            </div>

            {hasCertifications ? (
                <div className="certifications-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolioData.certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="certification-card bg-bg-card border border-border-subtle p-6 transition-all duration-300 hover:border-brand-primary hover:shadow-[0_8px_32px_rgba(0,255,209,0.1)] h-full flex flex-col">
                                <div className="certification-header flex items-start gap-3 mb-4">
                                    <Award className="text-brand-primary flex-shrink-0 mt-1" size={20} />
                                    <div className="flex-1">
                                        <h3 className="certification-title text-base font-bold text-text-primary mb-2 leading-tight">
                                            {cert.title}
                                        </h3>
                                        <p className="certification-issuer text-sm text-text-muted">
                                            {cert.issuer}
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="certification-footer mt-auto pt-4 border-t border-border-subtle flex justify-between items-center">
                                    <span className="certification-date text-xs text-text-muted">
                                        {cert.date}
                                    </span>
                                    {cert.link && cert.link !== "#" && (
                                        <a 
                                            href={cert.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="certification-link text-brand-primary hover:text-brand-active transition-colors"
                                        >
                                            <ExternalLink size={16} />
                                        </a>
                                    )}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            ) : (
                <div className="certifications-placeholder max-w-4xl mx-auto">
                    <Card className="bg-bg-card border border-border-subtle border-dashed p-16 text-center">
                        <Award className="text-brand-primary mx-auto mb-6" size={48} />
                        <h3 className="text-xl font-bold text-text-primary mb-3">
                            Certifications Coming Soon
                        </h3>
                        <p className="text-sm text-text-muted max-w-md mx-auto leading-relaxed">
                            This section is ready for your professional certifications. Update the <code className="text-brand-primary bg-brand-hover px-2 py-1">certifications</code> array in <code className="text-brand-primary bg-brand-hover px-2 py-1">mock.js</code> to display your achievements.
                        </p>
                        <div className="mt-8 text-left max-w-lg mx-auto bg-bg-secondary border border-border-subtle p-6">
                            <p className="text-xs text-text-muted mb-3 uppercase tracking-wider font-bold">Example Format:</p>
                            <pre className="text-xs text-brand-primary font-mono overflow-x-auto">
{`{
  title: "AWS Certified Solutions Architect",
  issuer: "Amazon Web Services",
  date: "Jan 2024",
  link: "https://..."
}`}
                            </pre>
                        </div>
                    </Card>
                </div>
            )}
        </section>
    );
};

export default Certifications;
