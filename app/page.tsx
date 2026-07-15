import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Companies from "@/components/landing/Companies";
import Features from "@/components/landing/Features";
import Security from "@/components/landing/Security";
import Footer from "@/components/landing/Footer";
import Reward from "@/components/landing/reward";

export default function Page1() {
  return (
    <main className="bg-slate-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section id="home">
        <Hero />
      </section>

      {/* Trusted Companies */}
      <section id="companies">
        <Companies />
      </section>

      {/* Features */}
      <section id="features">
        <Features />
      </section>

      {/* Reward */}
      <section id="reward">
        <Reward />
      </section>

      {/* Security */}
      <section id="security">
        <Security />
      </section>

      {/* Footer */}
      <section id="contact">
        <Footer />
      </section>
    </main>
  );
}