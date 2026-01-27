import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            onClick={toggleTheme}
            className="fixed right-6 bottom-6 z-50 p-3 bg-bg-card border border-border-subtle rounded-full text-text-primary hover:border-brand-primary hover:text-brand-primary transition-all duration-300 shadow-lg group"
            aria-label="Toggle theme"
        >
            <div className="relative w-6 h-6">
                <motion.div
                    initial={false}
                    animate={{
                        scale: theme === 'dark' ? 1 : 0,
                        rotate: theme === 'dark' ? 0 : 90,
                        opacity: theme === 'dark' ? 1 : 0
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0"
                >
                    <Moon size={24} />
                </motion.div>

                <motion.div
                    initial={false}
                    animate={{
                        scale: theme === 'light' ? 1 : 0,
                        rotate: theme === 'light' ? 0 : -90,
                        opacity: theme === 'light' ? 1 : 0
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0"
                >
                    <Sun size={24} />
                </motion.div>
            </div>

            {/* Tooltip */}
            <span className="absolute left-full ml-4 px-2 py-1 bg-bg-card border border-border-subtle text-xs font-mono text-text-muted rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
            </span>
        </motion.button>
    );
};

export default ThemeToggle;
