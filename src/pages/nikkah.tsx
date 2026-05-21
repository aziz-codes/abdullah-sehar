import { NavLink } from "react-router-dom";

const Nikkah = () => {
    return (
        <div className="min-h-screen w-full flex items-start justify-center py-12 px-4 overflow-y-auto" style={{
            background: "linear-gradient(160deg, #f9f3ec 0%, #fdfbf7 40%, #f5ede0 100%)"
        }}>
            {/* Ambient background orbs */}
            <div style={{
                position: "fixed", top: "-80px", left: "-80px",
                width: "320px", height: "320px", borderRadius: "50%",
                background: "radial-gradient(circle, rgba(196,154,108,0.12) 0%, transparent 70%)",
                pointerEvents: "none", zIndex: 0
            }} />
            <div style={{
                position: "fixed", bottom: "-100px", right: "-60px",
                width: "360px", height: "360px", borderRadius: "50%",
                background: "radial-gradient(circle, rgba(180,130,90,0.10) 0%, transparent 70%)",
                pointerEvents: "none", zIndex: 0
            }} />

            <div className="relative w-full max-w-sm mx-auto z-10" style={{ animation: "fadeUp 0.9s ease both" }}>

                {/* Outer glow border card */}
                <div style={{
                    background: "linear-gradient(170deg, #fffdf9 0%, #fdf8f0 100%)",
                    borderRadius: "24px",
                    boxShadow: "0 8px 60px rgba(180,130,80,0.18), 0 2px 12px rgba(180,130,80,0.10), inset 0 0 0 1px rgba(196,154,108,0.25)",
                    overflow: "visible",
                    position: "relative",
                    padding: "0",
                }}>

                    {/* Decorative corner flowers */}
                    <img
                        src="/flowers-main.png"
                        alt=""
                        style={{
                            position: "absolute", top: "-44px", left: "-40px",
                            width: "120px", height: "auto", zIndex: 20,
                            filter: "drop-shadow(0 4px 12px rgba(160,100,60,0.18))",
                            animation: "floatA 5s ease-in-out infinite"
                        }}
                    />
                    <img
                        src="/flowers-main.png"
                        alt=""
                        style={{
                            position: "absolute", bottom: "-44px", right: "-40px",
                            width: "120px", height: "auto", zIndex: 20,
                            transform: "rotate(180deg)",
                            filter: "drop-shadow(0 4px 12px rgba(160,100,60,0.18))",
                            animation: "floatB 5.5s ease-in-out infinite"
                        }}
                    />

                    {/* Inner card */}
                    <div style={{ padding: "36px 32px 32px", borderRadius: "24px" }}>

                        {/* Top frame */}
                        <img src="/flower-frame.png" alt="" style={{ width: "100%", height: "32px", objectFit: "cover", marginBottom: "24px", opacity: 0.85 }} />

                        {/* Bismillah / ceremony label */}
                        <div style={{ textAlign: "center", marginBottom: "4px" }}>
                            <span style={{
                                fontFamily: "serif",
                                fontSize: "11px",
                                letterSpacing: "0.25em",
                                textTransform: "uppercase",
                                color: "#b8936a",
                                opacity: 0.8
                            }}>In The Name of Allah</span>
                        </div>

                        {/* Title */}
                        <h1 className="font-aston" style={{
                            fontSize: "clamp(2.4rem, 8vw, 3rem)",
                            color: "#7a4f2d",
                            textAlign: "center",
                            lineHeight: 1.15,
                            marginBottom: "4px",
                            letterSpacing: "0.01em",
                        }}>
                            Nikkah
                        </h1>
                        <h2 className="font-aston" style={{
                            fontSize: "clamp(1.4rem, 5vw, 1.7rem)",
                            color: "#b8936a",
                            textAlign: "center",
                            lineHeight: 1.2,
                            marginBottom: "20px",
                            letterSpacing: "0.04em",
                            fontWeight: 400
                        }}>
                            Ceremony
                        </h2>

                        {/* Names */}
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "16px",
                            marginBottom: "28px"
                        }}>
                            <span style={{
                                fontFamily: "'Georgia', serif",
                                fontSize: "clamp(1.15rem, 4vw, 1.4rem)",
                                color: "#5c3a1e",
                                fontWeight: 600,
                                letterSpacing: "0.02em"
                            }}>Abdullah</span>
                            <span style={{ color: "#c4a47c", fontSize: "1.5rem", lineHeight: 1 }}>✦</span>
                            <span style={{
                                fontFamily: "'Georgia', serif",
                                fontSize: "clamp(1.15rem, 4vw, 1.4rem)",
                                color: "#5c3a1e",
                                fontWeight: 600,
                                letterSpacing: "0.02em"
                            }}>Sehar</span>
                        </div>

                        {/* Thin gold rule */}
                        <div style={{
                            display: "flex", alignItems: "center", gap: "10px",
                            marginBottom: "28px", paddingInline: "8px"
                        }}>
                            <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, #c4a47c)" }} />
                            <div style={{
                                width: "6px", height: "6px", borderRadius: "50%",
                                background: "#c4a47c", flexShrink: 0
                            }} />
                            <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, #c4a47c)" }} />
                        </div>

                        {/* Details grid */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "28px" }}>

                            {/* Parents */}
                            <div style={{ textAlign: "center" }}>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "10px" }}>
                                    <div style={{ flex: 1, height: "0.5px", background: "rgba(196,164,124,0.3)" }} />
                                    <span style={{
                                        fontFamily: "'Georgia', serif",
                                        fontSize: "10px",
                                        letterSpacing: "0.2em",
                                        textTransform: "uppercase",
                                        color: "#b8936a",
                                        whiteSpace: "nowrap"
                                    }}>With the blessings of</span>
                                    <div style={{ flex: 1, height: "0.5px", background: "rgba(196,164,124,0.3)" }} />
                                </div>
                                <p style={{ fontFamily: "'Georgia', serif", fontSize: "14px", color: "#6b4c31", marginBottom: "4px", lineHeight: 1.6 }}>
                                    Mr. & Mrs. Haji Farooq Anwar
                                </p>
                                <p style={{ fontFamily: "serif", fontSize: "11px", color: "#a87c52", marginBottom: "8px", letterSpacing: "0.05em" }}>PARENTS OF THE GROOM</p>
                                <p style={{ fontFamily: "'Georgia', serif", fontSize: "14px", color: "#6b4c31", marginBottom: "4px", lineHeight: 1.6 }}>
                                    Mr. & Mrs. Rizwan
                                </p>
                                <p style={{ fontFamily: "serif", fontSize: "11px", color: "#a87c52", letterSpacing: "0.05em" }}>PARENTS OF THE BRIDE</p>
                            </div>

                            {/* Ornamental divider */}
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
                                <div style={{ width: "40px", height: "0.5px", background: "rgba(196,164,124,0.4)" }} />
                                <span style={{ color: "#c4a47c", fontSize: "10px" }}>✦ ✦ ✦</span>
                                <div style={{ width: "40px", height: "0.5px", background: "rgba(196,164,124,0.4)" }} />
                            </div>

                            {/* Date & Time */}
                            <div style={{
                                textAlign: "center",
                                background: "linear-gradient(135deg, rgba(196,164,124,0.08) 0%, rgba(196,164,124,0.04) 100%)",
                                borderRadius: "16px",
                                padding: "18px 20px",
                                border: "1px solid rgba(196,164,124,0.2)",
                                position: "relative",
                                overflow: "hidden"
                            }}>
                                <div style={{
                                    position: "absolute", top: "-1px", left: "50%", transform: "translateX(-50%)",
                                    width: "60px", height: "2px",
                                    background: "linear-gradient(90deg, transparent, #c4a47c, transparent)"
                                }} />
                                <p style={{ fontFamily: "serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#b8936a", marginBottom: "8px" }}>Date & Time</p>
                                <p style={{
                                    fontFamily: "'Georgia', serif",
                                    fontSize: "clamp(1rem, 3.5vw, 1.15rem)",
                                    color: "#5c3a1e",
                                    fontWeight: 600,
                                    marginBottom: "2px",
                                    letterSpacing: "0.01em"
                                }}>Sunday, 31st May 2026</p>
                                <p style={{ fontFamily: "'Georgia', serif", fontSize: "1.1rem", color: "#b8936a", fontWeight: 500 }}>2:00 PM</p>
                            </div>

                            {/* Location */}
                            <div style={{ textAlign: "center" }}>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "10px" }}>
                                    <div style={{ flex: 1, height: "0.5px", background: "rgba(196,164,124,0.3)" }} />
                                    <span style={{
                                        fontFamily: "serif",
                                        fontSize: "10px",
                                        letterSpacing: "0.2em",
                                        textTransform: "uppercase",
                                        color: "#b8936a",
                                        whiteSpace: "nowrap"
                                    }}>Venue</span>
                                    <div style={{ flex: 1, height: "0.5px", background: "rgba(196,164,124,0.3)" }} />
                                </div>
                                <p style={{ fontFamily: "'Georgia', serif", fontSize: "15px", color: "#5c3a1e", fontWeight: 600, marginBottom: "2px" }}>31A Peppering Way</p>
                                <p style={{ fontFamily: "'Georgia', serif", fontSize: "14px", color: "#7a5535" }}>Westminster, Perth</p>
                            </div>

                        </div>

                        {/* Invitation note */}
                        <div style={{
                            textAlign: "center",
                            marginBottom: "28px",
                            padding: "12px 20px",
                            background: "rgba(196,164,124,0.07)",
                            borderRadius: "50px",
                            border: "1px solid rgba(196,164,124,0.2)"
                        }}>
                            <p style={{
                                fontFamily: "'Georgia', serif",
                                fontStyle: "italic",
                                fontSize: "13px",
                                color: "#8c6240",
                                letterSpacing: "0.02em"
                            }}>
                                Invitation is from both sides
                            </p>
                        </div>

                        {/* Bottom frame */}
                        <img src="/flower-frame.png" alt="" style={{
                            width: "100%", height: "32px", objectFit: "cover",
                            transform: "rotate(180deg)", marginBottom: "24px", opacity: 0.85
                        }} />

                        {/* Back button */}
                        <div style={{ textAlign: "center" }}>
                            <NavLink
                                to="/details"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    fontFamily: "serif",
                                    fontSize: "11px",
                                    letterSpacing: "0.25em",
                                    textTransform: "uppercase",
                                    color: "#b8936a",
                                    textDecoration: "none",
                                    padding: "10px 24px",
                                    border: "1px solid rgba(196,164,124,0.35)",
                                    borderRadius: "50px",
                                    transition: "all 0.25s ease",
                                    background: "rgba(196,164,124,0.04)"
                                }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLElement).style.background = "rgba(196,164,124,0.12)";
                                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(196,164,124,0.6)";
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLElement).style.background = "rgba(196,164,124,0.04)";
                                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(196,164,124,0.35)";
                                }}
                            >
                                <span style={{ fontSize: "14px" }}>←</span>
                                <span>Back</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(24px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes floatA {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-8px) rotate(2deg); }
                }
                @keyframes floatB {
                    0%, 100% { transform: rotate(180deg) translateY(0); }
                    50% { transform: rotate(180deg) translateY(-7px); }
                }
            `}</style>
        </div>
    );
};

export default Nikkah;