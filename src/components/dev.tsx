import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, type Transition } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const EMAIL = "aziz.codes42@gmail.com";

const DevContact: React.FC = () => {
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Close on outside click
    useEffect(() => {
        if (!open) return;
        const handleClick = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [open]);

    return (
        <div className="dev-contact" ref={containerRef}>
            {/* Expanded card */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        key="card"
                        className="dev-card"
                        initial={{ opacity: 0, y: 12, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.92 }}
                        transition={{ duration: 0.3, ease: EASE } as Transition}
                    >
                        <p className="dev-card-tagline">
                            ✨ Loved this invitation?
                        </p>
                        <p className="dev-card-sub">
                            Get a custom one crafted for your special day
                        </p>
                        <a href={`mailto:${EMAIL}`} className="dev-card-email">
                            {EMAIL}
                        </a>
                        <a
                            href={`mailto:${EMAIL}?subject=Custom%20Wedding%20Invitation&body=Hi!%20I'd%20love%20to%20get%20a%20custom%20wedding%20invitation%20designed.`}
                            className="dev-card-cta font-aston"
                        >
                            Let's create yours →
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating trigger button */}
            <motion.button
                className="dev-trigger"
                onClick={() => setOpen((v) => !v)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                transition={{ duration: 0.2, ease: EASE } as Transition}
                aria-label="Contact developer"
            >
                <span className="dev-trigger-ring" />
                <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="dev-trigger-icon"
                >
                    <rect x="0.75" y="0.75" width="14.5" height="10.5" rx="2" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M1.5 1.5L8 7L14.5 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </motion.button>
        </div>
    );
};

export default DevContact;