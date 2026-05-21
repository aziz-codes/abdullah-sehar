import React from "react";
import { NavLink } from "react-router-dom";
import { motion, type Variants, type Transition } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Photos swing in from the side with a slight rotation
const swingLeft: Variants = {
    hidden: { opacity: 0, x: -80, rotate: -6, scale: 0.9 },
    show: (delay: number = 0) => ({
        opacity: 1, x: 0, rotate: 0, scale: 1,
        transition: { duration: 0.9, ease: EASE, delay } as Transition,
    }),
};

const swingRight: Variants = {
    hidden: { opacity: 0, x: 80, rotate: 6, scale: 0.9 },
    show: (delay: number = 0) => ({
        opacity: 1, x: 0, rotate: 0, scale: 1,
        transition: { duration: 0.9, ease: EASE, delay } as Transition,
    }),
};

// Drops down from above with a bounce
const dropDown: Variants = {
    hidden: { opacity: 0, y: -60, scale: 0.92 },
    show: (delay: number = 0) => ({
        opacity: 1, y: 0, scale: 1,
        transition: { type: "spring", stiffness: 180, damping: 16, delay } as Transition,
    }),
};

// Rises up from below with overshoot
const riseUp: Variants = {
    hidden: { opacity: 0, y: 60, scale: 0.92 },
    show: (delay: number = 0) => ({
        opacity: 1, y: 0, scale: 1,
        transition: { type: "spring", stiffness: 180, damping: 16, delay } as Transition,
    }),
};

// Frames draw in horizontally from center
const drawIn: Variants = {
    hidden: { opacity: 0, scaleX: 0 },
    show: (delay: number = 0) => ({
        opacity: 1, scaleX: 1,
        transition: { duration: 0.7, ease: EASE, delay } as Transition,
    }),
};

// Scale up with a spring pop — for the badge
const popIn: Variants = {
    hidden: { opacity: 0, scale: 0.3, y: 20 },
    show: (delay: number = 0) => ({
        opacity: 1, scale: 1, y: 0,
        transition: { type: "spring", stiffness: 300, damping: 18, delay } as Transition,
    }),
};

// Gentle fade + float up — for smaller decorative elements
const floatIn: Variants = {
    hidden: { opacity: 0, y: 24, scale: 0.8, rotate: -8 },
    show: (delay: number = 0) => ({
        opacity: 1, y: 0, scale: 1, rotate: 0,
        transition: { duration: 0.75, ease: EASE, delay } as Transition,
    }),
};

const Details: React.FC = () => {
    const calculateDaysLeft = (): number => {
        const weddingDate = new Date("2026-05-31T00:00:00");
        const today = new Date();
        const diffTime = weddingDate.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays > 0 ? diffDays : 0;
    };

    const daysLeft = calculateDaysLeft();

    return (
        <div className="flex flex-col items-center relative min-h-screen w-full overflow-y-auto">
            <div className="relative w-md my-auto py-12">

                {/* Envelope — drops in from above */}
                <motion.img
                    className="w-full h-auto"
                    src="/envelope-open.png"
                    alt=""
                    variants={dropDown}
                    initial="hidden"
                    animate="show"
                    custom={0.0}
                />

                {/* Side flowers — swings in from the left */}
                <motion.img
                    className="absolute top-72 -left-14 h-auto w-30 z-10"
                    src="/flowers-main.png"
                    alt=""
                    variants={floatIn}
                    initial="hidden"
                    animate="show"
                    custom={1.3}
                />

                <div className="relative flex items-start gap-0 w-max">
                    <div className="flex flex-col relative -top-12 -left-12">

                        {/* Bride photo — swings in from left */}
                        <motion.img
                            src="/sehar.png"
                            className="h-auto w-68 z-20"
                            variants={swingLeft}
                            initial="hidden"
                            animate="show"
                            custom={0.65}
                        />

                        {/* Floral divider — draws in from center */}
                        <motion.img
                            src="/flower-frame.png"
                            className="w-full object-cover -rotate-180 h-6"
                            variants={drawIn}
                            initial="hidden"
                            animate="show"
                            custom={2.6}
                        />

                        <div className="flex items-center relative">

                            {/* Nikkah photo — rises up */}
                            <motion.img
                                src="nikaah.png"
                                className="w-xs h-auto border-8 border-white z-50"
                                variants={riseUp}
                                initial="hidden"
                                animate="show"
                                custom={3.25}
                            />

                            <div className="relative">
                                <div className="absolute -top-50 left-0 w-xs flex flex-col items-end">

                                    {/* Details CTA — swings in from right */}
                                    <motion.div
                                        className="flex flex-col gap-6 w-full py-10 relative border-r-16 border-primary"
                                        variants={swingRight}
                                        initial="hidden"
                                        animate="show"
                                        custom={3.9}
                                    >
                                        <h4 className="font-aston text-start text-secondary">Click here for details</h4>
                                        <NavLink to="/nikkah" className="text-primary text-3xl font-bold leading-tight text-center underline">
                                            DETAILS
                                        </NavLink>
                                    </motion.div>

                                    {/* Single flower — floats in with rotation */}
                                    <motion.img
                                        src="/single-flower.png"
                                        className="w-16 object-contain z-40 rotate-20 -left-6 h-auto absolute top-15"
                                        variants={floatIn}
                                        initial="hidden"
                                        animate="show"
                                        custom={5.2}
                                    />

                                    {/* Wedding photos — rises up */}
                                    <motion.img
                                        src="/weeding-photos.png"
                                        className="w-full h-auto"
                                        variants={riseUp}
                                        initial="hidden"
                                        animate="show"
                                        custom={5.85}
                                    />

                                    {/* Countdown badge — big spring pop */}
                                    <motion.div
                                        className="relative h-24 w-full flex justify-center mt-4"
                                        variants={popIn}
                                        initial="hidden"
                                        animate="show"
                                        custom={6.5}
                                    >
                                        <img src="/button-frame.png" className="h-full w-full object-contain" alt="" />
                                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                                            <motion.span
                                                className="text-white text-4xl font-serif leading-none"
                                                variants={popIn}
                                                initial="hidden"
                                                animate="show"
                                                custom={7.15}
                                            >
                                                {daysLeft}
                                            </motion.span>
                                            <motion.span
                                                className="text-white text-sm font-aston leading-tight mt-1"
                                                variants={riseUp}
                                                initial="hidden"
                                                animate="show"
                                                custom={7.8}
                                            >
                                                Days to go!
                                            </motion.span>
                                        </div>
                                    </motion.div>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Date frame — swings in from right */}
                    <div className="relative z-20 -top-20 -left-18">
                        <motion.img
                            src="/date-frame.png"
                            className="h-auto w-70"
                            variants={swingRight}
                            initial="hidden"
                            animate="show"
                            custom={1.95}
                        />
                        {/* Bottom flower frame — draws in */}
                        <motion.img
                            src="/flower-frame.png"
                            className="w-70 h-20 absolute -bottom-12 object-contain z-10 -right-4"
                            variants={drawIn}
                            initial="hidden"
                            animate="show"
                            custom={4.55}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;