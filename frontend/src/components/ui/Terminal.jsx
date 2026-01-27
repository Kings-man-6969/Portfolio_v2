import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";

export const AnimatedSpan = ({ children, delay = 0, className, ...props }) => (
    <motion.div
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: delay / 1000 }}
        className={cn("grid text-sm font-normal tracking-tight", className)}
        {...props}
    >
        {children}
    </motion.div>
);

export const TypingAnimation = ({
    children,
    className,
    duration = 60,
    delay = 0,
    as: Component = "span",
    showCursor = true, // Added cursor prop
    ...props
}) => {
    if (typeof children !== "string") {
        throw new Error("TypingAnimation: children must be a string. Received: " + children);
    }

    const MotionComponent = motion(Component);

    const [displayedText, setDisplayedText] = useState("");
    const [started, setStarted] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setStarted(true);
        }, delay);
        return () => clearTimeout(startTimeout);
    }, [delay]);

    useEffect(() => {
        if (!started) return;

        let i = 0;
        const typingEffect = setInterval(() => {
            if (i < children.length) {
                setDisplayedText(children.substring(0, i + 1));
                i++;
            } else {
                clearInterval(typingEffect);
            }
        }, duration);

        return () => {
            clearInterval(typingEffect);
        };
    }, [children, duration, started]);

    return (
        <MotionComponent
            ref={elementRef}
            className={cn("font-normal tracking-tight", className)} // Removed text-sm
            {...props}
        >
            {displayedText}
            {showCursor && (
                <span className="ml-1 inline-block w-[2px] h-[1em] bg-current animate-blink align-text-bottom" />
            )}
        </MotionComponent>
    );
};

export const Terminal = ({ children, className }) => {
    return (
        <div
            className={cn(
                "z-10 h-full w-full max-w-lg rounded-xl border border-border bg-bg-card shadow-2xl relative overflow-hidden",
                className
            )}
        >
            <div className="flex flex-col gap-y-2 border-b border-border p-4 bg-bg-secondary/50 backdrop-blur-sm">
                <div className="flex flex-row gap-x-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
                </div>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed overflow-hidden min-h-[300px]">
                <code className="grid gap-y-2">{children}</code>
            </div>

            {/* Scanline effect */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-black/5" style={{ backgroundSize: '100% 4px' }}></div>
        </div>
    );
};
