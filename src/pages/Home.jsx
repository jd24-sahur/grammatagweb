import Hero from "../components/Hero";
import SkyBackground from "../components/SkyBackground";

function Home() {
  return (
    <SkyBackground>

      <section id="home" className="min-h-screen flex items-center justify-center">
        <Hero />
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl text-gray-900 dark:text-white">ABOUT SECTION</h1>
      </section>

      <section id="team" className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl text-gray-900 dark:text-white">TEAM SECTION</h1>
      </section>

    </SkyBackground>
  );
}

export default Home;