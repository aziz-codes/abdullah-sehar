import { NavLink } from "react-router-dom";

const Nikkah = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full py-2 overflow-y-auto">
            <div className="relative flex flex-col items-center bg-[#fdfbf7]/95 w-[90%] max-w-md shadow-2xl p-8 rounded-xl border-2 border-primary/20 my-auto">
                {/* Corner Floral Decorations */}
                <img className="absolute -top-10 -left-10 h-auto w-32 z-10" src='/flowers-main.png' alt="Flowers" />
                <img className="absolute -bottom-10 -right-10 h-auto w-32 z-10 rotate-180" src='/flowers-main.png' alt="Flowers" />

                {/* Top Floral Frame */}
                <img src="/flower-frame.png" className="w-full object-contain h-8 mb-6" alt="Frame Decoration" />

                {/* Main Content */}
                <h1 className="text-4xl md:text-5xl font-aston text-primary mb-2 mt-2 text-center leading-tight">Nikkah Ceremony</h1>
                <h2 className="text-xl md:text-2xl font-serif text-secondary mb-8 text-center font-semibold tracking-wide">Abdullah & Sehar</h2>

                <div className="flex flex-col gap-6 text-gray-700 font-serif w-full mb-8 z-20 text-center relative">
                    <div>
                        <h3 className="text-lg md:text-xl text-primary font-bold mb-2">Parents</h3>
                        <p className="text-sm md:text-base mb-1">Mr. & Mrs. Haji Farooq Anwar (Groom)</p>
                        <p className="text-sm md:text-base">Mr. & Mrs. Rizwan (Bride)</p>
                    </div>

                    <div className="w-2/3 mx-auto border-t-2 border-primary/10"></div>

                    <div>
                        <h3 className="text-lg md:text-xl text-primary font-bold mb-2">When</h3>
                        <p className="text-sm md:text-base mb-1">Sunday, 31st May 2026</p>
                        <p className="text-sm md:text-base">2:00 PM</p>
                    </div>

                    <div className="w-2/3 mx-auto border-t-2 border-primary/10"></div>

                    <div>
                        <h3 className="text-lg md:text-xl text-primary font-bold mb-2">Where</h3>
                        <p className="text-sm md:text-base">31A Peppering Way</p>
                        <p className="text-sm md:text-base">Westminster, Perth</p>
                    </div>
                </div>

                <div className="mb-8 z-20 bg-primary/5 px-6 py-3 rounded-full border border-primary/10">
                    <p className="italic text-sm md:text-base text-primary font-medium">Invitation is from both sides</p>
                </div>

                {/* Bottom Floral Frame */}
                <img src="/flower-frame.png" className="w-full object-contain h-8 rotate-180 mb-6 z-20" alt="Frame Decoration" />

                <NavLink to="/details" className="text-primary text-2xl font-bold leading-tight text-center underline font-aston tracking-widest hover:text-secondary transition-colors z-20">
                    BACK
                </NavLink>
            </div>
        </div>
    );
};

export default Nikkah;
