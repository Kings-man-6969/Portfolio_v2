import React, { useState, useEffect } from 'react';
import { portfolioData } from '../mock';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Mail, MapPin, Github, Linkedin, Twitter, Terminal, Activity, Zap, Code2, Database, Brain, ExternalLink, Send, Menu, X } from 'lucide-react';
import '../styles/portfolio.css';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'skills', 'stats', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

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
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsFormSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsFormSubmitted(false), 3000);
  };

  return (
    <div className="portfolio-container">
      {/* Header */}
      <header className="portfolio-header">
        <div className="header-content">
          <div className="logo-section">
            <Terminal className="logo-icon" />
            <span className="logo-text">PM_SYSTEMS</span>
          </div>
          
          <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <button 
              className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`}
              onClick={() => scrollToSection('hero')}
            >
              Home
            </button>
            <button 
              className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={() => scrollToSection('skills')}
            >
              Skills
            </button>
            <button 
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </button>
            <button 
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </button>
          </nav>

          <button className="mobile-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="grid-overlay"></div>
        <div className="hero-content">
          <div className="system-status">
            <Activity size={16} />
            <span>SYSTEM_ONLINE</span>
          </div>
          
          <h1 className="hero-title">
            <span className="title-prefix">{'>'}</span> {portfolioData.personal.name}
          </h1>
          
          <div className="hero-subtitle">
            {portfolioData.personal.title}
          </div>
          
          <p className="hero-tagline">
            {portfolioData.personal.tagline}
          </p>
          
          <p className="hero-sub-tagline">
            {portfolioData.personal.subTagline}
          </p>
          
          <div className="hero-actions">
            <Button 
              className="btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
              <Code2 size={20} />
            </Button>
            <Button 
              className="btn-secondary"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
              <Send size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="stats-section">
        <div className="stats-grid">
          {portfolioData.stats.map((stat, index) => (
            <Card key={index} className="stat-card">
              <div className="stat-icon">
                {index === 0 && <Code2 size={32} />}
                {index === 1 && <Brain size={32} />}
                {index === 2 && <Zap size={32} />}
              </div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-context">{stat.context}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="philosophy-section">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-prefix">{'>'}</span> SYSTEM_PHILOSOPHY
          </h2>
        </div>

        <div className="philosophy-content">
          {portfolioData.philosophy.map((principle, index) => (
            <div key={index} className="philosophy-item">
              <span className="philosophy-prefix">{'>'}</span>
              <p className="philosophy-text">{principle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Matrix Section */}
      <section id="skills" className="skills-section">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-prefix">{'>'}</span> SKILLS_MATRIX
          </h2>
          <div className="section-subtitle">{portfolioData.skillsIntro}</div>
        </div>

        <div className="skills-grid">
          {portfolioData.skills.map((skillGroup, index) => (
            <Card key={index} className="skill-card">
              <div className="skill-category">
                <Database size={20} />
                <h3>{skillGroup.category}</h3>
              </div>
              
              <div className="skill-items">
                {skillGroup.items.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-container">
                      <div 
                        className="skill-bar-fill" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-prefix">{'>'}</span> FEATURED_PROJECTS
          </h2>
          <div className="section-subtitle">Engineering problems and their solutions</div>
        </div>

        <div className="projects-grid">
          {portfolioData.projects.map((project) => (
            <Card key={project.id} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <ExternalLink size={20} className="project-link-icon" />
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-outcomes">
                <div className="outcomes-title">Key Outcomes:</div>
                <ul className="outcomes-list">
                  {project.outcomes.map((outcome, idx) => (
                    <li key={idx}>{outcome}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-prefix">{'>'}</span> CONTACT_INTERFACE
          </h2>
          <div className="section-subtitle">{portfolioData.contactTagline}</div>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <Card className="info-card">
              <div className="info-item">
                <Mail size={20} />
                <div>
                  <div className="info-label">Email</div>
                  <a href={`mailto:${portfolioData.personal.email}`} className="info-value">
                    {portfolioData.personal.email}
                  </a>
                </div>
              </div>
              
              <div className="info-item">
                <MapPin size={20} />
                <div>
                  <div className="info-label">Location</div>
                  <div className="info-value">{portfolioData.personal.location}</div>
                </div>
              </div>
              
              <div className="info-item">
                <Activity size={20} />
                <div>
                  <div className="info-label">Availability</div>
                  <div className="info-value status-active">{portfolioData.personal.availability}</div>
                </div>
              </div>
            </Card>

            <div className="social-links">
              <a href={portfolioData.personal.social.github} className="social-link" target="_blank" rel="noopener noreferrer">
                <Github size={24} />
              </a>
              <a href={portfolioData.personal.social.linkedin} className="social-link" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} />
              </a>
              <a href={portfolioData.personal.social.twitter} className="social-link" target="_blank" rel="noopener noreferrer">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          <Card className="contact-form-card">
            {isFormSubmitted && (
              <div className="form-success">
                <Activity size={20} />
                <span>Message transmitted successfully!</span>
              </div>
            )}
            
            <form onSubmit={handleFormSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="Enter your name"
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="your.email@example.com"
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  placeholder="Your message here..."
                  required
                  rows={5}
                  className="form-input"
                />
              </div>
              
              <Button type="submit" className="btn-primary btn-submit">
                Send Message
                <Send size={20} />
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="portfolio-footer">
        <div className="footer-content">
          <div className="footer-text">
            <Terminal size={20} />
            <span>© 2025 {portfolioData.personal.name}. All systems operational.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
