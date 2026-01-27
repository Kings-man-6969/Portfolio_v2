import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Terminal } from 'lucide-react';
import { portfolioData } from '../mock';
import '../styles/portfolio.css';

// Components
import Navbar from '../components/Navbar';
import Hero from '../components/sections/Hero';
import Stats from '../components/sections/Stats';
import Philosophy from '../components/sections/Philosophy';
import Education from '../components/sections/Education';
import Skills from '../components/sections/Skills';
import Certifications from '../components/sections/Certifications';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';
import ThemeToggle from '../components/ThemeToggle';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 300; // Offset for better triggering

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Custom smooth scroll implementation or use built-in
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio-container bg-bg-primary min-h-screen text-text-primary font-mono selection:bg-brand-primary selection:text-black">
      <Helmet>
        <title>{portfolioData.personal.name} | {portfolioData.personal.title}</title>
        <meta name="description" content={portfolioData.personal.tagline} />
        <meta name="theme-color" content="#000000" />
      </Helmet>

      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <ThemeToggle />

      <main>
        <Hero scrollToSection={scrollToSection} />
        <Stats />
        <Philosophy />
        <Education />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </main>

      <footer className="portfolio-footer bg-bg-secondary border-t border-border-subtle py-10 px-10">
        <div className="footer-content max-w-[1400px] mx-auto flex justify-center items-center">
          <div className="footer-text flex items-center gap-3 text-sm text-text-muted">
            <Terminal size={20} className="text-brand-primary" />
            <span>© 2025 {portfolioData.personal.name}. All systems operational.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
