import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/card';
import { Code2, Brain, Zap } from 'lucide-react';
import { portfolioData } from '../../mock';

const Stats = () => {
    return (
        <section id="stats" className="stats-section py-20 px-10 max-w-[1400px] mx-auto">
            <div className="stats-grid grid grid-cols-1 md:grid-cols-3 gap-8">
                {portfolioData.stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Card className="stat-card bg-bg-card border border-border-subtle p-10 text-center hover:border-brand-primary hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,255,209,0.1)] transition-all duration-300">
                            <div className="stat-icon text-brand-primary mb-5 flex justify-center">
                                {index === 0 && <Code2 size={32} />}
                                {index === 1 && <Brain size={32} />}
                                {index === 2 && <Zap size={32} />}
                            </div>
                            <div className="stat-value text-5xl font-bold text-brand-primary mb-2 font-mono">
                                {stat.value}
                            </div>
                            <div className="stat-label text-sm text-text-muted uppercase tracking-widest mb-2 font-bold">
                                {stat.label}
                            </div>
                            <div className="stat-context text-xs text-text-muted italic mt-3 leading-relaxed">
                                {stat.context}
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Stats;
