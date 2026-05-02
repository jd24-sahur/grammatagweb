import Hero from "../components/Hero";
import Features from "../components/Features";
import SkyBackground from "../components/SkyBackground";
import Team from "./Team";

function Home() {
  return (
    <SkyBackground>

      <section id="home" className="min-h-screen flex items-center justify-center scroll-mt-24">
        <Hero />
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center scroll-mt-24">
        <Features />
      </section>

      <section id="team" className="min-h-screen flex items-start justify-center scroll-mt-24 pt-24 pb-24">
        <Team />
      </section>

    </SkyBackground>
  );
}

export default Home;