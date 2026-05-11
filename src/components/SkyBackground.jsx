import { StarIcon } from "@heroicons/react/24/solid";

function SkyBackground({ children }) {
    return (
        <div className="relative min-h-screen overflow-hidden transition-colors duration-700 pt-20
      bg-gradient-to-b from-sky-200 via-blue-100 to-white
      dark:from-gray-900 dark:via-gray-800 dark:to-black">

            {/* ⭐ STARS (clean + with spin) */}
            <div className="pointer-events-none absolute inset-0 opacity-0 dark:opacity-100 transition duration-700">

                {/* scattered stars */}
                <StarIcon className="absolute top-[10%] left-[12%] w-3 text-white/80 drop-shadow-[0_0_6px_rgba(255,255,255,0.55)] animate-twinkle" />
                <StarIcon className="absolute top-[18%] left-[25%] w-2 text-white/70 drop-shadow-[0_0_5px_rgba(255,255,255,0.45)] animate-twinkleSlow" />
                <StarIcon className="absolute top-[22%] left-[70%] w-4 text-white/75 drop-shadow-[0_0_8px_rgba(255,255,255,0.55)] animate-twinkleSlow animate-[spin_12s_linear_infinite]" />
                <StarIcon className="absolute top-[30%] left-[45%] w-2.5 text-white/65 drop-shadow-[0_0_5px_rgba(255,255,255,0.45)] animate-twinkle" />
                <StarIcon className="absolute top-[35%] left-[40%] w-3 text-white/75 drop-shadow-[0_0_6px_rgba(255,255,255,0.5)] animate-twinkle" />
                <StarIcon className="absolute top-[42%] left-[15%] w-3 text-white/70 drop-shadow-[0_0_6px_rgba(255,255,255,0.45)] animate-twinkleSlow" />
                <StarIcon className="absolute top-[50%] left-[85%] w-3 text-white/70 drop-shadow-[0_0_6px_rgba(255,255,255,0.45)] animate-twinkleSlow" />
                <StarIcon className="absolute top-[60%] left-[55%] w-2 text-white/75 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] animate-twinkle" />
                <StarIcon className="absolute top-[75%] left-[60%] w-3 text-white/70 drop-shadow-[0_0_6px_rgba(255,255,255,0.45)] animate-twinkleSlow" />
                <StarIcon className="absolute top-[12%] left-[82%] w-2 text-white/65 drop-shadow-[0_0_5px_rgba(255,255,255,0.45)] animate-twinkleSlow" />
                <StarIcon className="absolute top-[16%] left-[6%] w-2.5 text-white/65 drop-shadow-[0_0_5px_rgba(255,255,255,0.45)] animate-twinkle" />
                <StarIcon className="absolute top-[28%] left-[92%] w-3 text-white/70 drop-shadow-[0_0_6px_rgba(255,255,255,0.45)] animate-twinkleSlow" />
                <StarIcon className="absolute top-[38%] left-[8%] w-2 text-white/65 drop-shadow-[0_0_5px_rgba(255,255,255,0.45)] animate-twinkle" />
                <StarIcon className="absolute top-[52%] left-[4%] w-2.5 text-white/65 drop-shadow-[0_0_5px_rgba(255,255,255,0.45)] animate-twinkleSlow" />
                <StarIcon className="absolute top-[58%] left-[94%] w-2 text-white/65 drop-shadow-[0_0_5px_rgba(255,255,255,0.45)] animate-twinkle" />
                <StarIcon className="absolute bottom-[2%] left-[10%] w-2.5 text-white/70 drop-shadow-[0_0_6px_rgba(255,255,255,0.45)] animate-twinkle" />
                <StarIcon className="absolute bottom-[4%] left-[24%] w-3 text-white/75 drop-shadow-[0_0_6px_rgba(255,255,255,0.5)] animate-twinkleSlow" />
                <StarIcon className="absolute bottom-[3%] left-[42%] w-2 text-white/65 drop-shadow-[0_0_5px_rgba(255,255,255,0.45)] animate-twinkle" />
                <StarIcon className="absolute bottom-[5%] left-[58%] w-2.5 text-white/70 drop-shadow-[0_0_6px_rgba(255,255,255,0.45)] animate-twinkleSlow" />
                <StarIcon className="absolute bottom-[2%] left-[76%] w-3 text-white/75 drop-shadow-[0_0_6px_rgba(255,255,255,0.5)] animate-twinkle" />
                <StarIcon className="absolute bottom-[6%] left-[90%] w-2 text-white/65 drop-shadow-[0_0_5px_rgba(255,255,255,0.45)] animate-twinkleSlow" />

                {/* glow stars */}
                <StarIcon className="absolute top-[30%] left-[55%] w-5 text-white/55 blur-[1px] drop-shadow-[0_0_12px_rgba(255,255,255,0.65)] animate-twinkleSlow" />
                <StarIcon className="absolute top-[45%] left-[65%] w-4 text-white/45 blur-[1px] drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] animate-twinkle" />
                <StarIcon className="absolute top-[70%] left-[75%] w-5 text-white/45 blur-[1px] drop-shadow-[0_0_12px_rgba(255,255,255,0.6)] animate-twinkle animate-[spin_20s_linear_infinite]" />
                <StarIcon className="absolute top-[8%] left-[38%] w-4 text-white/40 blur-[1px] drop-shadow-[0_0_10px_rgba(255,255,255,0.55)] animate-twinkleSlow" />
                <StarIcon className="absolute bottom-[8%] left-[34%] w-4 text-white/40 blur-[1px] drop-shadow-[0_0_10px_rgba(255,255,255,0.55)] animate-twinkleSlow" />
                <StarIcon className="absolute bottom-[7%] left-[68%] w-4 text-white/40 blur-[1px] drop-shadow-[0_0_10px_rgba(255,255,255,0.55)] animate-twinkle" />

            </div>

            {/* 🌫️ BLOBS (subtle, optional) */}
            <div className="pointer-events-none absolute -top-32 left-1/4 w-72 h-72 
        bg-white/10 dark:bg-gray-700/20 rounded-full blur-3xl" />
            <div className="pointer-events-none absolute top-40 right-1/3 w-80 h-80 
        bg-blue-200/10 dark:bg-gray-800/20 rounded-full blur-3xl" />

            {/* ☀️🌙 Sun → Moon */}
            <div className="pointer-events-none absolute top-24 right-16">
                <div className="relative w-28 h-28">

                    {/* ☀️ Sun */}
                    <div className="absolute inset-0 bg-yellow-300 rounded-full blur-2xl opacity-70 
            dark:opacity-0 transition duration-700"></div>
                    <div className="w-24 h-24 bg-yellow-400 rounded-full shadow-inner 
            dark:opacity-0 transition duration-700"></div>

                    {/* 🌙 Moon */}
                    <div className="absolute inset-0 flex items-center justify-center 
            opacity-0 dark:opacity-100 transition duration-700">
                        <div className="w-24 h-24 bg-gray-300 rounded-full relative shadow-inner">
                            <div className="absolute top-3 left-6 w-4 h-4 bg-gray-400 rounded-full"></div>
                            <div className="absolute top-10 left-12 w-3 h-3 bg-gray-400 rounded-full"></div>
                            <div className="absolute bottom-6 left-8 w-2 h-2 bg-gray-400 rounded-full"></div>
                        </div>
                    </div>

                </div>
            </div>

            {/* ☁️ Clouds (HIDE sa dark mode) */}
            <div className="pointer-events-none absolute top-44 left-10 sm:left-16 animate-floatSlow 
        opacity-100 dark:opacity-0 transition duration-700">
                <div className="relative w-44 h-20">
                    <div className="absolute inset-0 bg-white rounded-full shadow-lg"></div>
                    <div className="absolute -top-8 left-6 w-24 h-24 bg-white rounded-full"></div>
                    <div className="absolute -top-6 left-24 w-20 h-20 bg-white rounded-full"></div>
                    <div className="absolute top-2 left-10 w-28 h-16 bg-white/70 rounded-full blur-sm"></div>
                </div>
            </div>

            <div className="pointer-events-none absolute top-[34rem] left-8 animate-float 
        opacity-90 dark:opacity-0 transition duration-700">
                <div className="relative w-32 h-14">
                    <div className="absolute inset-0 bg-white rounded-full shadow-md"></div>
                    <div className="absolute -top-5 left-5 w-16 h-16 bg-white rounded-full"></div>
                    <div className="absolute -top-4 left-16 w-14 h-14 bg-white rounded-full"></div>
                    <div className="absolute top-1 left-8 w-20 h-10 bg-white/70 rounded-full blur-sm"></div>
                </div>
            </div>

            <div className="pointer-events-none absolute top-44 right-32 animate-float 
        opacity-100 dark:opacity-0 transition duration-700">
                <div className="relative w-56 h-24">
                    <div className="absolute inset-0 bg-white rounded-full shadow-lg"></div>
                    <div className="absolute -top-10 left-10 w-28 h-28 bg-white rounded-full"></div>
                    <div className="absolute -top-6 left-32 w-20 h-20 bg-white rounded-full"></div>
                    <div className="absolute top-3 left-16 w-36 h-16 bg-white/70 rounded-full blur-sm"></div>
                </div>
            </div>

            <div className="pointer-events-none absolute top-[48rem] right-10 sm:right-20 animate-floatSlow 
        opacity-90 dark:opacity-0 transition duration-700">
                <div className="relative w-40 h-16">
                    <div className="absolute inset-0 bg-white rounded-full shadow-md"></div>
                    <div className="absolute -top-6 left-6 w-20 h-20 bg-white rounded-full"></div>
                    <div className="absolute -top-4 left-20 w-16 h-16 bg-white rounded-full"></div>
                    <div className="absolute top-2 left-10 w-24 h-12 bg-white/70 rounded-full blur-sm"></div>
                </div>
            </div>

            <div className="pointer-events-none absolute bottom-40 left-1/3 animate-floatSlow 
        opacity-100 dark:opacity-0 transition duration-700">
                <div className="relative w-36 h-16">
                    <div className="absolute inset-0 bg-white rounded-full shadow-lg"></div>
                    <div className="absolute -top-6 left-6 w-20 h-20 bg-white rounded-full"></div>
                    <div className="absolute top-2 left-10 w-24 h-12 bg-white/70 rounded-full blur-sm"></div>
                </div>
            </div>

            <div className="pointer-events-none absolute bottom-20 right-1/4 animate-float 
        opacity-80 dark:opacity-0 transition duration-700">
                <div className="relative w-28 h-12">
                    <div className="absolute inset-0 bg-white rounded-full shadow-md"></div>
                    <div className="absolute -top-5 left-4 w-14 h-14 bg-white rounded-full"></div>
                    <div className="absolute -top-3 left-14 w-12 h-12 bg-white rounded-full"></div>
                    <div className="absolute top-1 left-6 w-20 h-8 bg-white/70 rounded-full blur-sm"></div>
                </div>
            </div>

            {/* CONTENT */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}

export default SkyBackground;
