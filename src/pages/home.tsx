import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence, type Transition } from "framer-motion";
import DevContact from "@/components/dev";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const Main: React.FC = () => {
    const navigate = useNavigate();
    const [isExiting, setIsExiting] = useState(false);

    const handleOpen = () => {
        if (isExiting) return;
        setIsExiting(true);
    };

    return (
        <div className="h-full w-full overflow-hidden">
            <DevContact />
            <AnimatePresence onExitComplete={() => navigate("/details")}>
                {!isExiting && (
                    <motion.div
                        key="main"
                        className="flex flex-col gap-6 justify-center items-center h-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.4, delay: 0.6 } as Transition }}
                    >
                        {/* Heading */}
                        <motion.h1
                            className="text-primary text-center text-2xl font-aston"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: EASE, delay: 0.1 } as Transition}
                        >
                            Abdullah <span className="text-secondary">&</span> Sehar
                        </motion.h1>

                        <motion.h4
                            className="text-secondary text-center text-xl"
                            initial={{ opacity: 0, y: -12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: EASE, delay: 0.2 } as Transition}
                        >
                            31.05.2026
                        </motion.h4>

                        {/* Envelope */}
                        <motion.div
                            className="w-full flex justify-center relative"
                            initial={{ opacity: 0, scale: 0.88, y: 24 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: EASE, delay: 0.3 } as Transition}
                            // On exit: envelope opens upward and fades — contained
                            exit={{
                                scale: 1.12,
                                opacity: 0,
                                transition: { duration: 0.55, ease: EASE } as Transition,
                            }}
                        >
                            <motion.img
                                className="w-sm h-auto"
                                src="/envelope-close.png"
                                alt=""
                                // Subtle idle pulse to invite the click
                                animate={{ scale: [1, 1.025, 1] }}
                                transition={{
                                    duration: 2.4,
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                    repeatDelay: 1,
                                }}
                            />

                            {/* Invisible click zone */}
                            <div
                                onClick={handleOpen}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-transparent cursor-pointer"
                            />
                        </motion.div>

                        <motion.h4
                            className="text-primary text-center text-lg font-normal"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: EASE, delay: 0.45 } as Transition}
                            exit={{ opacity: 0, y: 8, transition: { duration: 0.25 } as Transition }}
                        >
                            Click to open
                        </motion.h4>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Main;