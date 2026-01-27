import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ activeSection, scrollToSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { id: 'hero', label: 'Home' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' },
    ];

    const handleNavClick = (id) => {
        scrollToSection(id);
        setIsMenuOpen(false);
    };

    return (
        <header className={`portfolio-header fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-bg-primary/95 backdrop-blur-md border-b border-border-subtle py-4' : 'bg-transparent py-6'}`}>
            <div className="header-content max-w-[1400px] mx-auto px-10 flex items-center justify-between">
                <div
                    className="logo-section flex items-center gap-3 cursor-pointer group"
                    onClick={() => scrollToSection('hero')}
                >
                    <Terminal className="logo-icon text-brand-primary w-7 h-7 transition-transform group-hover:rotate-12" />
                    <span className="logo-text text-xl font-bold tracking-widest text-text-primary group-hover:text-brand-primary transition-colors">PM_SYSTEMS</span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            className={`nav-link text-base font-mono transition-colors relative hover:text-brand-primary ${activeSection === link.id ? 'text-brand-primary' : 'text-text-muted'}`}
                            onClick={() => scrollToSection(link.id)}
                        >
                            <span className="mr-1 opacity-0 transition-opacity hover:opacity-100">&lt;</span>
                            {link.label}
                            <span className="ml-1 opacity-0 transition-opacity hover:opacity-100">/&gt;</span>
                            {activeSection === link.id && (
                                <motion.div
                                    layoutId="active-nav"
                                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-brand-primary"
                                />
                            )}
                        </button>
                    ))}
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="mobile-menu-toggle md:hidden text-text-primary hover:text-brand-primary transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-bg-card border-b border-border-subtle overflow-hidden"
                    >
                        <nav className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    className={`text-left py-3 px-4 rounded-sm transition-colors font-mono ${activeSection === link.id ? 'bg-brand-primary/10 text-brand-primary font-bold' : 'text-text-muted hover:bg-white/5 hover:text-text-primary'}`}
                                    onClick={() => handleNavClick(link.id)}
                                >
                                    {link.label}
                                </button>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
