import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../mock';

const Philosophy = () => {
    return (
        <section id="philosophy" className="philosophy-section py-20 px-10 max-w-4xl mx-auto">
            <div className="section-header mb-12 text-center">
                <h2 className="section-title text-4xl font-bold tracking-tighter mb-4">
                    <span className="title-prefix text-brand-primary mr-2">{'>'}</span> SYSTEM_PHILOSOPHY
                </h2>
            </div>

            <div className="philosophy-content flex flex-col gap-7 bg-bg-card border border-border-subtle p-12 relative">
                {/* Decorative corner markers */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-brand-primary"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-brand-primary"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-brand-primary"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-brand-primary"></div>

                {portfolioData.philosophy.map((principle, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        viewport={{ once: true }}
                        className="philosophy-item flex gap-5 items-start bg-white/5 p-4 rounded-sm border-l-2 border-transparent hover:border-brand-primary transition-colors duration-300"
                    >
                        <span className="philosophy-prefix text-brand-primary text-xl font-bold mt-0.5">{'>'}</span>
                        <p className="philosophy-text text-base text-text-secondary leading-relaxed m-0 font-mono">
                            {principle}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Philosophy;
