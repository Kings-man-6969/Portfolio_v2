import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Mail, MapPin, Activity, Github, Linkedin, Twitter, Download, Send, Loader2 } from 'lucide-react';
import { portfolioData } from '../../mock';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

const Contact = () => {
    const formRef = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            toast.error("EmailJS configuration missing. Please check your .env file.");
            console.error("Missing EmailJS credentials. Please check your .env file.");
            setIsLoading(false);
            return;
        }

        try {
            const templateParams = {
                name: formData.name,
                email: formData.email,
                message: formData.message
            };

            await emailjs.send(
                serviceId,
                templateId,
                templateParams,
                { publicKey: publicKey }
            );

            setIsFormSubmitted(true);
            toast.success("Message sent successfully!");
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setIsFormSubmitted(false), 5000);
        } catch (error) {
            console.error("EmailJS error:", error);
            console.error("Status:", error.status);
            console.error("Text:", error.text);

        } finally {
            setIsLoading(false);
        }
    };

    const handleResumeDownload = () => {
        const link = document.createElement('a');
        link.href = portfolioData.personal.resumeFile;
        link.download = portfolioData.personal.resumeFileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="contact" className="contact-section py-20 px-10 max-w-[1400px] mx-auto pb-32">
            <div className="section-header text-center mb-16">
                <h2 className="section-title text-4xl font-bold tracking-tighter mb-4">
                    <span className="title-prefix text-brand-primary mr-2">{'>'}</span> CONTACT_INTERFACE
                </h2>
                <div className="section-subtitle text-base text-text-muted max-w-2xl mx-auto leading-relaxed">
                    {portfolioData.contactTagline}
                </div>
            </div>

            <div className="contact-grid grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 mt-16">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="contact-info flex flex-col gap-8"
                >
                    <Card className="info-card bg-bg-card border border-border-subtle p-8 flex flex-col gap-7">
                        <div className="info-item flex gap-4 items-start">
                            <Mail size={20} className="text-brand-primary mt-0.5" />
                            <div>
                                <div className="info-label text-xs text-text-muted uppercase tracking-widest font-bold mb-1">Email</div>
                                <a href={`mailto:${portfolioData.personal.email}`} className="info-value text-sm text-text-secondary hover:text-brand-primary transition-colors">
                                    {portfolioData.personal.email}
                                </a>
                            </div>
                        </div>

                        <div className="info-item flex gap-4 items-start">
                            <MapPin size={20} className="text-brand-primary mt-0.5" />
                            <div>
                                <div className="info-label text-xs text-text-muted uppercase tracking-widest font-bold mb-1">Location</div>
                                <div className="info-value text-sm text-text-secondary">{portfolioData.personal.location}</div>
                            </div>
                        </div>

                        <div className="info-item flex gap-4 items-start">
                            <Activity size={20} className="text-brand-primary mt-0.5" />
                            <div>
                                <div className="info-label text-xs text-text-muted uppercase tracking-widest font-bold mb-1">Availability</div>
                                <div className="info-value text-sm font-bold text-brand-primary">{portfolioData.personal.availability}</div>
                            </div>
                        </div>
                    </Card>

                    <div className="social-links flex gap-4">
                        <a href={portfolioData.personal.social.github} target="_blank" rel="noopener noreferrer" className="social-link w-12 h-12 flex items-center justify-center bg-white/5 border border-border-subtle text-text-primary hover:bg-brand-primary hover:text-black hover:border-brand-primary hover:-translate-y-1 transition-all duration-300">
                            <Github size={24} />
                        </a>
                        <a href={portfolioData.personal.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-link w-12 h-12 flex items-center justify-center bg-white/5 border border-border-subtle text-text-primary hover:bg-brand-primary hover:text-black hover:border-brand-primary hover:-translate-y-1 transition-all duration-300">
                            <Linkedin size={24} />
                        </a>
                        <a href={portfolioData.personal.social.twitter} target="_blank" rel="noopener noreferrer" className="social-link w-12 h-12 flex items-center justify-center bg-white/5 border border-border-subtle text-text-primary hover:bg-brand-primary hover:text-black hover:border-brand-primary hover:-translate-y-1 transition-all duration-300">
                            <Twitter size={24} />
                        </a>
                    </div>

                    <Button
                        className="btn-primary btn-resume-download w-full bg-brand-primary text-black hover:bg-brand-hover hover:text-brand-primary border border-transparent hover:border-brand-primary transition-all duration-300 py-6 font-bold flex justify-center items-center gap-2 mt-2"
                        onClick={handleResumeDownload}
                    >
                        Download Resume
                        <Download size={20} />
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <Card className="contact-form-card bg-bg-card border border-border-subtle p-10 relative overflow-hidden">
                        {isFormSubmitted && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="form-success absolute top-5 right-5 flex items-center gap-2 px-5 py-3 bg-brand-hover border border-brand-primary text-brand-primary text-xs font-bold"
                            >
                                <Activity size={20} />
                                <span>Message transmitted successfully!</span>
                            </motion.div>
                        )}

                        <form ref={formRef} onSubmit={handleFormSubmit} className="contact-form flex flex-col gap-6">
                            <div className="form-group flex flex-col gap-2">
                                <label htmlFor="name" className="form-label text-xs text-text-muted uppercase tracking-widest font-bold">Name</label>
                                <Input
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleFormChange}
                                    placeholder="Enter your name"
                                    required
                                    disabled={isLoading}
                                    className="form-input bg-white/5 border-border-subtle text-text-primary py-6 px-4 font-mono focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20 rounded-none transition-all duration-300 disabled:opacity-50"
                                />
                            </div>

                            <div className="form-group flex flex-col gap-2">
                                <label htmlFor="email" className="form-label text-xs text-text-muted uppercase tracking-widest font-bold">Email</label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleFormChange}
                                    placeholder="your.email@example.com"
                                    required
                                    disabled={isLoading}
                                    className="form-input bg-white/5 border-border-subtle text-text-primary py-6 px-4 font-mono focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20 rounded-none transition-all duration-300 disabled:opacity-50"
                                />
                            </div>

                            <div className="form-group flex flex-col gap-2">
                                <label htmlFor="message" className="form-label text-xs text-text-muted uppercase tracking-widest font-bold">Message</label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleFormChange}
                                    placeholder="Your message here..."
                                    required
                                    rows={5}
                                    disabled={isLoading}
                                    className="form-input bg-white/5 border-border-subtle text-text-primary p-4 font-mono focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20 rounded-none transition-all duration-300 min-h-[150px] disabled:opacity-50"
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={isLoading}
                                className="btn-primary btn-submit w-full bg-brand-primary text-black hover:bg-brand-hover hover:text-brand-primary border border-transparent hover:border-brand-primary transition-all duration-300 py-6 font-bold flex justify-center items-center gap-2 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={20} />
                                    </>
                                )}
                            </Button>
                        </form>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
