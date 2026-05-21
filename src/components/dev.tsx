import React, { useState } from "react";
import { motion, AnimatePresence, type Transition } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const DevContact: React.FC = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">

            {/* Tooltip */}
            <AnimatePresence>
                {hovered && (
                    <motion.div
                        key="tooltip"
                        initial={{ opacity: 0, y: 8, scale: 0.92 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.92 }}
                        transition={{ duration: 0.25, ease: EASE } as Transition}
                        style={{
                            background: "linear-gradient(135deg, #fffdf9, #fdf5e8)",
                            border: "1px solid rgba(196,164,124,0.35)",
                            borderRadius: "10px",
                            padding: "8px 14px",
                            boxShadow: "0 4px 20px rgba(180,130,80,0.15)",
                            whiteSpace: "nowrap",
                        }}
                    >
                        <p style={{
                            fontFamily: "serif",
                            fontSize: "11px",
                            color: "#8c6240",
                            letterSpacing: "0.04em",
                            marginBottom: "1px",
                        }}>
                            ✨ Want one just like this?
                        </p>
                        <a
                            href="mailto:developer@email.com"
                            style={{
                                fontFamily: "'Georgia', serif",
                                fontSize: "12px",
                                fontWeight: 600,
                                color: "#7a4f2d",
                                textDecoration: "none",
                                letterSpacing: "0.02em",
                            }}
                        >
                            Let's make it happen →
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mail button */}
            <motion.a
                href="mailto:developer@email.com"
                onHoverStart={() => setHovered(true)}
                onHoverEnd={() => setHovered(false)}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.92 }}
                transition={{ duration: 0.2, ease: EASE } as Transition}
                style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #fffdf9, #fdf5e8)",
                    border: "1px solid rgba(196,164,124,0.4)",
                    boxShadow: "0 2px 12px rgba(180,130,80,0.18)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    textDecoration: "none",
                }}
            >
                <svg
                    width="15"
                    height="11"
                    viewBox="0 0 15 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect x="0.5" y="0.5" width="14" height="10" rx="1.5" stroke="#b8936a" strokeWidth="1" />
                    <path d="M1 1L7.5 6.5L14 1" stroke="#b8936a" strokeWidth="1" strokeLinecap="round" />
                </svg>
            </motion.a>
        </div>
    );
};

export default DevContact;