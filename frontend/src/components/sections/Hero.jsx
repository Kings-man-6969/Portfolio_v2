import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Activity, Code2, Download, Send } from 'lucide-react';
import { Terminal, TypingAnimation, AnimatedSpan } from '../ui/Terminal';
import { portfolioData } from '../../mock';

const Hero = ({ scrollToSection }) => {
    const handleResumeDownload = () => {
        const link = document.createElement('a');
        link.href = portfolioData.personal.resumeFile;
        link.download = portfolioData.personal.resumeFileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="hero" className="hero-section min-h-screen flex items-center justify-center relative px-6 md:px-10 py-32 overflow-hidden">
            <div className="grid-overlay absolute inset-0 pointer-events-none"></div>

            {/* Background decoration */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                    className="w-[800px] h-[800px] border border-brand-primary rounded-full border-dashed"
                />
            </div>

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-content text-left max-w-2xl mx-auto lg:mx-0"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="system-status inline-flex items-center gap-2 px-4 py-2 bg-brand-hover border border-brand-primary text-brand-primary text-xs font-bold tracking-widest mb-8"
                    >
                        <Activity size={16} className="animate-pulse" />
                        <span className="animate-pulse">SYSTEM_ONLINE</span>
                    </motion.div>

                    <h1 className="hero-title text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tighter flex items-center justify-center lg:justify-start gap-3">
                        <span className="title-prefix text-brand-primary">{'>'}</span>
                        <TypingAnimation
                            className="text-text-primary"
                            duration={100}
                            delay={1000}
                        >
                            {portfolioData.personal.name}
                        </TypingAnimation>
                    </h1>

                    <div className="hero-subtitle text-xl md:text-2xl text-text-secondary mb-6 leading-relaxed font-mono">
                        {portfolioData.personal.title}
                    </div>

                    <p className="hero-tagline text-lg text-text-muted mb-4 max-w-xl leading-relaxed">
                        {portfolioData.personal.tagline}
                    </p>

                    <p className="hero-sub-tagline text-base text-brand-active mb-12 italic font-mono">
                        {portfolioData.personal.subTagline}
                    </p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="hero-actions flex gap-5 flex-wrap"
                    >
                        <Button
                            className="btn-primary bg-brand-primary text-black hover:bg-brand-hover hover:text-brand-primary border border-transparent hover:border-brand-primary transition-all duration-300 px-8 py-6 text-base font-bold flex items-center gap-3 rounded-none"
                            onClick={() => scrollToSection('projects')}
                        >
                            View Projects
                            <Code2 size={20} />
                        </Button>
                        <Button
                            className="btn-secondary bg-white/5 text-white border border-border-medium hover:bg-white hover:text-black transition-all duration-300 px-8 py-6 text-base font-bold flex items-center gap-3 rounded-none"
                            onClick={handleResumeDownload}
                        >
                            Resume
                            <Download size={20} />
                        </Button>
                        <Button
                            className="btn-secondary bg-white/5 text-white border border-border-medium hover:bg-white hover:text-black transition-all duration-300 px-8 py-6 text-base font-bold flex items-center gap-3 rounded-none"
                            onClick={() => scrollToSection('contact')}
                        >
                            Get In Touch
                            <Send size={20} />
                        </Button>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="hidden lg:flex justify-end"
                >
                    <Terminal className="bg-bg-card text-text-primary border-border-subtle shadow-[0_0_50px_rgba(0,0,0,0.3)] w-full max-w-[550px]">
                        <TypingAnimation delay={500} className="text-text-muted">
                            $ initializing_portfolio_system...
                        </TypingAnimation>

                        <AnimatedSpan delay={1500} className="text-brand-primary">
                            ➜ Loading modules:
                        </AnimatedSpan>

                        <AnimatedSpan delay={2000} className="text-text-secondary">
                            <span className="text-green-500 mr-2">✓</span> {portfolioData.personal.name} loaded
                        </AnimatedSpan>

                        <AnimatedSpan delay={2500} className="text-text-secondary">
                            <span className="text-green-500 mr-2">✓</span> {portfolioData.personal.title} initialized
                        </AnimatedSpan>

                        <AnimatedSpan delay={3000} className="text-text-secondary">
                            <span className="text-green-500 mr-2">✓</span> Skills matrix mounted
                        </AnimatedSpan>

                        <AnimatedSpan delay={3500} className="text-text-secondary">
                            <span className="text-green-500 mr-2">✓</span> Projects database connected
                        </AnimatedSpan>

                        <AnimatedSpan delay={4200} className="text-brand-primary mt-4">
                            ➜ Current status:
                        </AnimatedSpan>

                        <AnimatedSpan delay={4800} className="text-text-secondary">
                            Location: {portfolioData.personal.location}
                        </AnimatedSpan>

                        <AnimatedSpan delay={5200} className="text-text-secondary">
                            Status: <span className="text-green-400">{portfolioData.personal.availability}</span>
                        </AnimatedSpan>

                        <AnimatedSpan delay={6000} className="text-brand-primary mt-4">
                            $ ready_for_interaction
                        </AnimatedSpan>
                        <AnimatedSpan delay={6500} className="text-text-muted animate-pulse">
                            _
                        </AnimatedSpan>
                    </Terminal>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
