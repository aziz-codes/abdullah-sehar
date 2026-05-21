import React from "react";
import { NavLink } from "react-router-dom";
import { motion, type Variants, type Transition } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const SPRING: Transition = { duration: 0.6, ease: EASE };

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: (delay: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { ...SPRING, delay } as Transition,
    }),
};

const cardReveal: Variants = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } as Transition },
};

const drawIn: Variants = {
    hidden: { opacity: 0, scaleX: 0 },
    show: (delay: number = 0) => ({
        opacity: 1,
        scaleX: 1,
        transition: { ...SPRING, delay } as Transition,
    }),
};

const frameReveal: Variants = {
    hidden: { opacity: 0, scaleX: 0.7 },
    show: (delay: number = 0) => ({
        opacity: 1,
        scaleX: 1,
        transition: { duration: 0.7, ease: EASE, delay } as Transition,
    }),
};

const floatTop = {
    y: [0, -8, 0],
    rotate: [0, 2, 0],
    transition: { duration: 5, ease: "easeInOut" as const, repeat: Infinity },
};

const floatBottom = {
    y: [0, -7, 0],
    rotate: [180, 178, 180],
    transition: { duration: 5.5, ease: "easeInOut" as const, repeat: Infinity },
};

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "10px" }}>
        <div style={{ flex: 1, height: "0.5px", background: "rgba(196,164,124,0.3)" }} />
        <span style={{
            fontFamily: "serif", fontSize: "10px", letterSpacing: "0.2em",
            textTransform: "uppercase" as const, color: "#b8936a", whiteSpace: "nowrap" as const,
        }}>
            {children}
        </span>
        <div style={{ flex: 1, height: "0.5px", background: "rgba(196,164,124,0.3)" }} />
    </div>
);

const Ornament: React.FC = () => (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
        <div style={{ width: "40px", height: "0.5px", background: "rgba(196,164,124,0.4)" }} />
        <span style={{ color: "#c4a47c", fontSize: "10px" }}>✦ ✦ ✦</span>
        <div style={{ width: "40px", height: "0.5px", background: "rgba(196,164,124,0.4)" }} />
    </div>
);

const Nikkah: React.FC = () => {
    return (
        <div
            className="min-h-screen w-full flex items-start justify-center py-12 px-4 overflow-y-auto"
            style={{ background: "linear-gradient(160deg, #f9f3ec 0%, #fdfbf7 40%, #f5ede0 100%)" }}
        >
            {/* Ambient orbs */}
            <div style={{ position: "fixed", top: "-80px", left: "-80px", width: "320px", height: "320px", borderRadius: "50%", background: "radial-gradient(circle, rgba(196,154,108,0.12) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
            <div style={{ position: "fixed", bottom: "-100px", right: "-60px", width: "360px", height: "360px", borderRadius: "50%", background: "radial-gradient(circle, rgba(180,130,90,0.10) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

            {/* Card */}
            <motion.div
                className="relative w-full max-w-sm mx-auto z-10"
                variants={cardReveal}
                initial="hidden"
                animate="show"
            >
                <div style={{ background: "linear-gradient(170deg, #fffdf9 0%, #fdf8f0 100%)", borderRadius: "24px", boxShadow: "0 8px 60px rgba(180,130,80,0.18), 0 2px 12px rgba(180,130,80,0.10), inset 0 0 0 1px rgba(196,154,108,0.25)", position: "relative" }}>

                    {/* Top-left flower */}
                    <motion.img
                        src="/flowers-main.png" alt=""
                        style={{ position: "absolute", top: "-44px", left: "-40px", width: "120px", height: "auto", zIndex: 20, filter: "drop-shadow(0 4px 12px rgba(160,100,60,0.18))" }}
                        animate={floatTop}
                    />

                    {/* Bottom-right flower — initial rotate via initial prop */}
                    <motion.img
                        src="/flowers-main.png" alt=""
                        style={{ position: "absolute", bottom: "-44px", right: "-40px", width: "120px", height: "auto", zIndex: 20, filter: "drop-shadow(0 4px 12px rgba(160,100,60,0.18))" }}
                        initial={{ rotate: 180 }}
                        animate={floatBottom}
                    />

                    <div style={{ padding: "36px 32px 32px", borderRadius: "24px" }}>

                        {/* Top frame */}
                        <motion.img
                            src="/flower-frame.png" alt=""
                            style={{ width: "100%", height: "32px", objectFit: "cover", marginBottom: "24px", opacity: 0.85 }}
                            variants={frameReveal}
                            initial="hidden"
                            animate="show"
                            custom={0.1}
                        />

                        {/* Bismillah */}
                        <motion.div style={{ textAlign: "center", marginBottom: "4px" }} variants={fadeUp} initial="hidden" animate="show" custom={0.15}>
                            <span style={{ fontFamily: "serif", fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "#b8936a", opacity: 0.8 }}>
                                In The Name of Allah
                            </span>
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            className="font-aston"
                            style={{ fontSize: "clamp(2.4rem, 8vw, 3rem)", color: "#7a4f2d", textAlign: "center", lineHeight: 1.15, marginBottom: "4px", letterSpacing: "0.01em" }}
                            variants={fadeUp} initial="hidden" animate="show" custom={0.2}
                        >
                            Nikkah
                        </motion.h1>

                        <motion.h2
                            className="font-aston"
                            style={{ fontSize: "clamp(1.4rem, 5vw, 1.7rem)", color: "#b8936a", textAlign: "center", lineHeight: 1.2, marginBottom: "20px", letterSpacing: "0.04em", fontWeight: 400 }}
                            variants={fadeUp} initial="hidden" animate="show" custom={0.25}
                        >
                            Ceremony
                        </motion.h2>

                        {/* Names */}
                        <motion.div
                            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "28px" }}
                            variants={fadeUp} initial="hidden" animate="show" custom={0.3}
                        >
                            <span style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(1.15rem, 4vw, 1.4rem)", color: "#5c3a1e", fontWeight: 600, letterSpacing: "0.02em" }}>Abdullah</span>
                            <span style={{ color: "#c4a47c", fontSize: "1.5rem", lineHeight: 1 }}>✦</span>
                            <span style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(1.15rem, 4vw, 1.4rem)", color: "#5c3a1e", fontWeight: 600, letterSpacing: "0.02em" }}>Sehar</span>
                        </motion.div>

                        {/* Gold rule */}
                        <motion.div
                            style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px", paddingInline: "8px" }}
                            variants={drawIn} initial="hidden" animate="show" custom={0.32}
                        >
                            <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, #c4a47c)" }} />
                            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#c4a47c", flexShrink: 0 }} />
                            <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, #c4a47c)" }} />
                        </motion.div>

                        {/* Details */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "28px" }}>

                            {/* Parents */}
                            <motion.div style={{ textAlign: "center" }} variants={fadeUp} initial="hidden" animate="show" custom={0.35}>
                                <SectionLabel>With the blessings of</SectionLabel>
                                <p style={{ fontFamily: "'Georgia', serif", fontSize: "14px", color: "#6b4c31", marginBottom: "4px", lineHeight: 1.6 }}>Mr. & Mrs. Haji Farooq Anwar</p>
                                <p style={{ fontFamily: "serif", fontSize: "11px", color: "#a87c52", marginBottom: "8px", letterSpacing: "0.05em" }}>PARENTS OF THE GROOM</p>
                                <p style={{ fontFamily: "'Georgia', serif", fontSize: "14px", color: "#6b4c31", marginBottom: "4px", lineHeight: 1.6 }}>Mr. & Mrs. Rizwan</p>
                                <p style={{ fontFamily: "serif", fontSize: "11px", color: "#a87c52", letterSpacing: "0.05em" }}>PARENTS OF THE BRIDE</p>
                            </motion.div>

                            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0.45}>
                                <Ornament />
                            </motion.div>

                            {/* Date & Time */}
                            <motion.div
                                style={{ textAlign: "center", background: "linear-gradient(135deg, rgba(196,164,124,0.08) 0%, rgba(196,164,124,0.04) 100%)", borderRadius: "16px", padding: "18px 20px", border: "1px solid rgba(196,164,124,0.2)", position: "relative", overflow: "hidden" }}
                                variants={fadeUp} initial="hidden" animate="show" custom={0.55}
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div style={{ position: "absolute", top: "-1px", left: "50%", transform: "translateX(-50%)", width: "60px", height: "2px", background: "linear-gradient(90deg, transparent, #c4a47c, transparent)" }} />
                                <p style={{ fontFamily: "serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "#b8936a", marginBottom: "8px" }}>Date & Time</p>
                                <p style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(1rem, 3.5vw, 1.15rem)", color: "#5c3a1e", fontWeight: 600, marginBottom: "2px", letterSpacing: "0.01em" }}>Sunday, 31st May 2026</p>
                                <p style={{ fontFamily: "'Georgia', serif", fontSize: "1.1rem", color: "#b8936a", fontWeight: 500 }}>2:00 PM</p>
                            </motion.div>

                            {/* Venue */}
                            <motion.div style={{ textAlign: "center" }} variants={fadeUp} initial="hidden" animate="show" custom={0.65}>
                                <SectionLabel>Venue</SectionLabel>
                                <p style={{ fontFamily: "'Georgia', serif", fontSize: "15px", color: "#5c3a1e", fontWeight: 600, marginBottom: "2px" }}>31A Peppering Way</p>
                                <p style={{ fontFamily: "'Georgia', serif", fontSize: "14px", color: "#7a5535" }}>Westminster, Perth</p>
                            </motion.div>
                        </div>

                        {/* Invitation note */}
                        <motion.div
                            style={{ textAlign: "center", marginBottom: "28px", padding: "12px 20px", background: "rgba(196,164,124,0.07)", borderRadius: "50px", border: "1px solid rgba(196,164,124,0.2)" }}
                            variants={fadeUp} initial="hidden" animate="show" custom={0.72}
                        >
                            <p style={{ fontFamily: "'Georgia', serif", fontStyle: "italic", fontSize: "13px", color: "#8c6240", letterSpacing: "0.02em" }}>
                                Invitation is from both sides
                            </p>
                        </motion.div>

                        {/* Bottom frame */}
                        <motion.img
                            src="/flower-frame.png" alt=""
                            style={{ width: "100%", height: "32px", objectFit: "cover", transform: "rotate(180deg)", marginBottom: "24px", opacity: 0.85 }}
                            variants={frameReveal}
                            initial="hidden"
                            animate="show"
                            custom={0.78}
                        />

                        {/* Back button */}
                        <motion.div style={{ textAlign: "center" }} variants={fadeUp} initial="hidden" animate="show" custom={0.85}>
                            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} style={{ display: "inline-block" }}>
                                <NavLink
                                    to="/details"
                                    style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontFamily: "serif", fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "#b8936a", textDecoration: "none", padding: "10px 24px", border: "1px solid rgba(196,164,124,0.35)", borderRadius: "50px", background: "rgba(196,164,124,0.04)" }}
                                >
                                    <span style={{ fontSize: "14px" }}>←</span>
                                    <span>Back</span>
                                </NavLink>
                            </motion.div>
                        </motion.div>

                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Nikkah;