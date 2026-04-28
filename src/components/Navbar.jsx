import { useState, useEffect } from "react";

function Navbar() {
    const [dark, setDark] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const root = document.documentElement;
        dark ? root.classList.add("dark") : root.classList.remove("dark");
    }, [dark]);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
    };

    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-md relative">

            {/* 🌈 LOGO */}
            <h1 className="text-xl font-bold flex gap-[2px]">
                <span className="text-red-500">G</span>
                <span className="text-orange-400">r</span>
                <span className="text-yellow-400">a</span>
                <span className="text-green-500">m</span>
                <span className="text-blue-500">m</span>
                <span className="text-indigo-500">a</span>
                <span className="text-purple-500">t</span>
                <span className="text-pink-500">a</span>
                <span className="text-fuchsia-500">g</span>
            </h1>

            {/* 📌 DESKTOP LINKS */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-8 font-medium">
                <button onClick={() => scrollToSection("home")} className="text-gray-800 dark:text-gray-200 hover:text-pink-400">
                    Home
                </button>
                <button onClick={() => scrollToSection("about")} className="text-gray-800 dark:text-gray-200 hover:text-pink-400">
                    About
                </button>
                <button onClick={() => scrollToSection("team")} className="text-gray-800 dark:text-gray-200 hover:text-pink-400">
                    Team
                </button>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-3">

                {/* 🌙 DARK MODE */}
                <button
                    onClick={() => setDark(!dark)}
                    className="px-3 py-1 border rounded dark:border-gray-600"
                >
                    {dark ? "☀️" : "🌙"}
                </button>

                {/* ☰ HAMBURGER (MOBILE ONLY) */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden px-3 py-1 border rounded dark:border-gray-600"
                >
                    ☰
                </button>
            </div>

            {/* 📱 MOBILE MENU */}
            {open && (
                <div className="
    absolute top-full left-0 w-full md:hidden z-50 shadow-xl
    bg-white dark:bg-gray-900
    text-gray-900 dark:text-white
  ">

                    <div className="flex flex-col px-6 py-6">

                        <button
                            onClick={() => scrollToSection("home")}
                            className="text-left py-4 text-lg border-b border-gray-200 dark:border-gray-700 hover:text-pink-400"
                        >
                            Home
                        </button>

                        <button
                            onClick={() => scrollToSection("about")}
                            className="text-left py-4 text-lg border-b border-gray-200 dark:border-gray-700 hover:text-pink-400"
                        >
                            About
                        </button>

                        <button
                            onClick={() => scrollToSection("team")}
                            className="text-left py-4 text-lg hover:text-pink-400"
                        >
                            Team
                        </button>

                    </div>

                </div>
            )}
        </nav>
    );
}

export default Navbar;