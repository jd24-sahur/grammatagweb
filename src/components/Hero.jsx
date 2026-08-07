import icon from "../assets/icon.png";

function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-7xl px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">

                {/* LEFT */}
                <div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 dark:text-white">
                        Learn Grammar
                        <br />
                        <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">
                            with Grammatag!
                        </span>
                    </h1>

                    <p className="mt-6 text-gray-700 dark:text-gray-300 text-base md:text-lg max-w-lg">
                        Learn grammar in a fun and interactive way through videos,
                        activities, and engaging lessons designed for young learners.
                    </p>

                    {/* BUTTON */}
                    <div className="mt-6">
                        <a
                            href="https://www.mediafire.com/file/0kwfjs90d2fr1bd/Grammatag_%25281%2529.apk/file"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-pink-300 text-black px-6 py-3 rounded-xl font-semibold transition-all duration-300
    hover:bg-pink-400 hover:scale-105 hover:-translate-y-1 hover:shadow-lg
    active:scale-95
    dark:bg-pink-400 dark:hover:bg-pink-500"
                        >
                            📱 Download for Android →
                        </a>
                    </div>

                    {/* STATS */}
                    <div className="mt-12 grid grid-cols-3 text-center max-w-md">

                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-purple-400">7</h2>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                                Modules
                            </p>
                        </div>

                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-blue-400">20</h2>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                                Video Lessons
                            </p>
                        </div>

                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-orange-300">20</h2>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                                Activities
                            </p>
                        </div>

                    </div>
                </div>

                {/* RIGHT – ICON LANG */}
                <div className="flex justify-center md:justify-end">
                    <img
                        src={icon}
                        alt="GrammaTag Mascot"
                        className="w-[220px] sm:w-[280px] md:w-[360px] lg:w-[420px] drop-shadow-2xl animate-[float_3s_ease-in-out_infinite]"
                    />
                </div>

            </div>
        </section>
    );
}

export default Hero;