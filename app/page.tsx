import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Workflow from "@/components/landing/Workflow";
import Technology from "@/components/landing/Technology";
import Reward from "@/components/landing/reward";
import Security from "@/components/landing/Security";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="bg-[#07111F] overflow-x-hidden">
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="workflow">
        <Workflow />
      </section>

      <section id="technology">
        <Technology />
      </section>

      <section id="reward">
        <Reward />
      </section>

      <section id="security">
        <Security />
      </section>

      <section id="cta">
        <CTA />
      </section>

      <Footer />
    </main>
  );
}