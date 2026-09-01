import React, { useState } from "react";

function Footer() {
  const [showCredits, setShowCredits] = useState(false);

  return (
    <>
      <footer className="bg-blue-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 pt-10 pb-6 transition-colors duration-700">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          {/* 🌈 Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-2 flex gap-[2px]">
              <span className="text-red-500">G</span>
              <span className="text-orange-400">r</span>
              <span className="text-yellow-400">a</span>
              <span className="text-green-500">m</span>
              <span className="text-blue-500">m</span>
              <span className="text-indigo-500">a</span>
              <span className="text-purple-500">t</span>
              <span className="text-pink-500">a</span>
              <span className="text-fuchsia-500">g</span>
            </h2>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              Learn grammar through fun, colorful, and interactive lessons
              designed for young learners.
            </p>
          </div>

          {/* 🔗 Quick Links */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li><button onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}>Home</button></li>
              <li><button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>About</button></li>
              <li><button onClick={() => document.getElementById("team")?.scrollIntoView({ behavior: "smooth" })}>Team</button></li>
            </ul>
          </div>

          {/* 👨‍🏫 Adviser */}
          <div>
            <h3 className="font-semibold mb-3">Project Adviser</h3>
            <p className="font-medium">Mark Anthony Calilong</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Guided and supported the development of this project.
            </p>

            <button 
              onClick={() => setShowCredits(true)}
              className="mt-4 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 px-5 py-2.5 font-semibold text-gray-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 focus:ring-offset-blue-100 dark:from-pink-400 dark:via-purple-400 dark:to-blue-400 dark:text-gray-950 dark:focus:ring-pink-400 dark:focus:ring-offset-gray-900"
            >
              View Credits
            </button>
          </div>

        </div>

        {/* bottom */}
        <div className="text-center text-sm text-gray-600 dark:text-gray-400 mt-10">
          © {new Date().getFullYear()} Grammatag. All rights reserved.
        </div>
      </footer>

      {/* 🎨 Hardcoded Custom Credits Modal */}
      {showCredits && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-sm rounded-[32px] bg-sky-400 p-3 shadow-2xl border-4 border-sky-300">
            
            {/* Close Button */}
            <button
              onClick={() => setShowCredits(false)}
              className="absolute -top-3 -right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 text-white font-black text-xl shadow-md transition-transform hover:scale-110 active:scale-95 border-2 border-white"
            >
              ✕
            </button>

            {/* Modal Title Header */}
            <div className="py-2 text-center">
              <h2 className="text-2xl font-black text-gray-900 tracking-wide">
                Credits
              </h2>
            </div>

            {/* Inner White Container */}
            <div className="max-h-[70vh] overflow-y-auto rounded-[24px] bg-white p-6 text-center shadow-inner space-y-6 text-gray-800">
              
              {/* Project Title */}
              <div>
                <h3 className="text-sm font-black uppercase tracking-wider leading-snug text-gray-900">
                  GRAMMATAG: A GAMIFIED E-LEARNING APPLICATION FOR GRADE 3 ENGLISH GRAMMAR
                </h3>
              </div>

              {/* Proponents */}
              <div className="space-y-1">
                <h4 className="text-xs font-black tracking-widest text-gray-900 uppercase">
                  PROPONENTS
                </h4>
                <div className="text-sm font-medium text-gray-700 space-y-0.5">
                  <p>Elizalde, John David I.</p>
                  <p>Gadie, Luisa Marie D.</p>
                  <p>Orias, Raegan John William T.</p>
                  <p>Papa, John Llienard C.</p>
                </div>
              </div>

              {/* Capstone Adviser */}
              <div className="space-y-1">
                <h4 className="text-xs font-black tracking-widest text-gray-900 uppercase">
                  CAPSTONE ADVISER
                </h4>
                <p className="text-sm font-medium text-gray-700">
                  Mr. Mark Anthony G. Calilong
                </p>
              </div>

              {/* Assets Used */}
              <div className="space-y-1">
                <h4 className="text-xs font-black tracking-widest text-gray-900 uppercase">
                  ASSETS USED
                </h4>
                <div className="text-xs text-gray-600 space-y-1 leading-relaxed">
                  <p>Audio – royalty-free sounds from Pixabay</p>
                  <p>UI Icons – from Flaticon</p>
                  <p>Graphics – free elements from Canva</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;