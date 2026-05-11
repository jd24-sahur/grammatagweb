import johnDavid from "../assets/John David I. Elizalde.png";
import johnLlienard from "../assets/John Llienard C. Papa.png";
import luisaMarie from "../assets/Luisa Marie D. Gadie.jpg";
import raegan from "../assets/Raegan John William T. Orias.jpg";

const members = [
  {
    name: "Elizalde, John David I.",
    role: "Document Specialist",
    image: johnDavid,
    description: "Prepares and organizes clear project documents.",
  },
  {
    name: "Gadie, Luisa Marie D.",
    role: "UI/UX Designer",
    image: luisaMarie,
    description: "Supports UI design and project documents.",
  }, 
  {
    name: "Orias, Raegan John William T.",
    role: "Lead Programmer",
    image: raegan,
    description: "Leads programming and core app features.",
  },
  {
    name: "Papa, John Llienard C.",
    role: "Data Analyst",
    image: johnLlienard,
    description: "Analyzes data to improve learning progress.",
  },
 
];

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
        {members.map((member) => (
          <div
            key={member.name}
            className="flex h-full flex-col items-center rounded-3xl bg-white/5 border border-white/10 p-8 text-center shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-pink-200 hover:bg-white/20 hover:shadow-2xl dark:hover:border-pink-400/40 dark:hover:bg-white/10"
          >
            <img
              src={member.image}
              alt={member.name}
              className="mx-auto mb-6 h-24 w-24 rounded-full object-cover"
            />
            <h3 className="flex min-h-14 items-center justify-center text-xl font-semibold leading-snug text-slate-900 dark:text-white">
              {member.name}
            </h3>
            <p className="mt-2 font-semibold text-pink-600 dark:text-pink-300">{member.role}</p>
            <p className="mt-3 text-slate-700 dark:text-gray-300">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
