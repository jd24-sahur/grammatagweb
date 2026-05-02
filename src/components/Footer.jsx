function Footer() {
  return (
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

          <p className="text-sm text-gray-600">
            Learn grammar through fun, colorful, and interactive lessons
            designed for young learners.
          </p>
        </div>

        {/* 🔗 Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-600">
            <li><button onClick={() => document.getElementById("home").scrollIntoView({ behavior: "smooth" })}>Home</button></li>
            <li><button onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}>About</button></li>
            <li><button onClick={() => document.getElementById("team").scrollIntoView({ behavior: "smooth" })}>Team</button></li>
          </ul>
        </div>

        {/* 👨‍🏫 Adviser */}
        <div>
          <h3 className="font-semibold mb-3">Project Adviser</h3>
          <p className="font-medium">Mark Anthony Calilong</p>
          <p className="text-sm text-gray-600 mt-2">
            Guided and supported the development of this project.
          </p>

          <button className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition">
            View Credits
          </button>
        </div>

      </div>

      {/* bottom */}
      <div className="text-center text-sm text-gray-600 mt-10">
        © 2024 Grammatag. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;