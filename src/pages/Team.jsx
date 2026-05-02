function Team() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 pt-32 pb-20">
      <div className="text-center mb-50 md:mb-28">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
          Meet the creative team powering the project
        </h2>
        <p className="mt-4 text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
          A team of committed proponents collaborating to build an effective and interactive e-learning platform.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-4">
        <div className="rounded-3xl bg-white/5 border border-white/10 p-8 text-center shadow-xl">
          <div className="mx-auto mb-6 h-24 w-24 rounded-full bg-slate-900 flex items-center justify-center text-3xl text-white">
            AL
          </div>
          <h3 className="text-xl font-semibold text-emerald-500">Arielle Lang</h3>
          <p className="mt-2 text-yellow-300 font-semibold">Product Designer</p>
          <p className="mt-3 text-gray-300">
            Shapes intuitive interfaces and polished interactions for young learners.
          </p>
        </div>

        <div className="rounded-3xl bg-white/5 border border-white/10 p-8 text-center shadow-xl">
          <div className="mx-auto mb-6 h-24 w-24 rounded-full bg-slate-900 flex items-center justify-center text-3xl text-white">
            JT
          </div>
          <h3 className="text-xl font-semibold text-emerald-500">Jules Tran</h3>
          <p className="mt-2 text-yellow-300 font-semibold">Lead Engineer</p>
          <p className="mt-3 text-gray-300">
            Builds the app architecture and ensures every feature works smoothly.
          </p>
        </div>

        <div className="rounded-3xl bg-white/5 border border-white/10 p-8 text-center shadow-xl">
          <div className="mx-auto mb-6 h-24 w-24 rounded-full bg-slate-900 flex items-center justify-center text-3xl text-white">
            NN
          </div>
          <h3 className="text-xl font-semibold text-emerald-500">Noor Navarro</h3>
          <p className="mt-2 text-yellow-300 font-semibold">Learning Analyst</p>
          <p className="mt-3 text-gray-300">
            Tunes content and metrics to make lessons engaging and rewarding.
          </p>
        </div>

        <div className="rounded-3xl bg-white/5 border border-white/10 p-8 text-center shadow-xl">
          <div className="mx-auto mb-6 h-24 w-24 rounded-full bg-slate-900 flex items-center justify-center text-3xl text-white">
            MS
          </div>
          <h3 className="text-xl font-semibold text-emerald-500">Mila Santos</h3>
          <p className="mt-2 text-yellow-300 font-semibold">Product Strategist</p>
          <p className="mt-3 text-gray-300">
            Guides the roadmap and keeps the team aligned on user-first outcomes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;