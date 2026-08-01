// src/components/Features.jsx
import { useRef } from "react";

// 👉 small tilt wrapper (no library needed)
function TiltCard({ children }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const card = ref.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y - rect.height / 2) / rect.height) * -12;
    const rotateY = ((x - rect.width / 2) / rect.width) * 12;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
  };

  const reset = () => {
    const card = ref.current;
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="transition-transform duration-300 will-change-transform"
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}

function Features() {
  return (
    <section className="py-20 px-6">

      {/* TITLE */}
      <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Why Choose <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">Grammatag?</span>
        </h2>

        <p className="mt-6 text-gray-600 dark:text-gray-300 text-lg leading-8">
          Empower Grade 3 learners to master English grammar through an engaging, offline mobile learning experience designed to make lessons interactive, accessible, and effective.
        </p>
      </div>

      {/* GRID */}
      <div className="mt-16 grid auto-rows-fr gap-8 max-w-6xl mx-auto md:grid-cols-2 lg:grid-cols-3">

        <TiltCard>
          <div className="h-full flex flex-col justify-between p-6 rounded-3xl border border-sky-200 dark:border-sky-500/30 bg-sky-50 dark:bg-sky-500/10">
            <div className="text-3xl mb-4">📴</div>
            <h3 className="text-xl font-bold text-sky-700 dark:text-sky-300">Offline Learning</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-3">
              Learn anytime, anywhere without internet access. GrammaTag ensures continuous learning through fully offline lessons and activities.
            </p>
          </div>
        </TiltCard>

        <TiltCard>
          <div className="h-full flex flex-col justify-between p-6 rounded-3xl border border-indigo-200 dark:border-indigo-500/30 bg-indigo-50 dark:bg-indigo-500/10">
            <div className="text-3xl mb-4">📝</div>
            <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-300">Grammar-Focused Lessons</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-3">
              Target key grammar challenges such as sentence construction, verb usage, and grammar awareness through structured and guided lessons.
            </p>
          </div>
        </TiltCard>

        <TiltCard>
          <div className="h-full flex flex-col justify-between p-6 rounded-3xl border border-amber-200 dark:border-amber-500/30 bg-amber-50 dark:bg-amber-500/10">
            <div className="text-3xl mb-4">🧩</div>
            <h3 className="text-xl font-bold text-amber-700 dark:text-amber-300">Interactive Activities</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-3">
              Practice grammar through engaging exercises, mini-games, and real-time feedback that reinforce understanding.
            </p>
          </div>
        </TiltCard>

        <TiltCard>
          <div className="h-full flex flex-col justify-between p-6 rounded-3xl border border-fuchsia-200 dark:border-fuchsia-500/30 bg-fuchsia-50 dark:bg-fuchsia-500/10">
            <div className="text-3xl mb-4">🏅</div>
            <h3 className="text-xl font-bold text-fuchsia-700 dark:text-fuchsia-300">Gamified Learning Experience</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-3">
              Earn coins, unlock modules, and gain rewards while learning—making grammar practice fun and motivating.
            </p>
          </div>
        </TiltCard>

        <TiltCard>
          <div className="h-full flex flex-col justify-between p-6 rounded-3xl border border-emerald-200 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10">
            <div className="text-3xl mb-4">📈</div>
            <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-300">Progress Tracking & Achievements</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-3">
              Monitor performance through scores, stars, and certificates that recognize learner progress and mastery.
            </p>
          </div>
        </TiltCard>

        <TiltCard>
          <div className="h-full flex flex-col justify-between p-6 rounded-3xl border border-teal-200 dark:border-teal-500/30 bg-teal-50 dark:bg-teal-500/10">
            <div className="text-3xl mb-4">📘</div>
            <h3 className="text-xl font-bold text-teal-700 dark:text-teal-300">Curriculum-Aligned Content</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-3">
              Lessons are based on MELC and aligned with MATATAG competencies to support classroom learning effectively.
            </p>
          </div>
        </TiltCard>

      </div>
    </section>
  );
}

export default Features;