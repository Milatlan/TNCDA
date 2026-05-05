import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Founder from "@/components/Founder";
import Benefits from "@/components/Benefits";
import Members from "@/components/Members";
import Gallery from "@/components/Gallery";
import Register from "@/components/Register";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";

export default function Home() {
  return (
    <ScrollRevealProvider>
      <Navbar />

      <main className="overflow-x-hidden">

        {/* HERO */}
        <section id="home">
          <Hero />
        </section>

        {/* ABOUT */}
        <section id="about">
          <About />
        </section>

        {/* FOUNDER */}
        <section id="founder">
          <Founder />
        </section>

        {/* BENEFITS */}
        <section id="benefits">
          <Benefits />
        </section>

        {/* MEMBERS */}
        <section id="members">
          <Members />
        </section>

        {/* GALLERY */}
        <section id="gallery">
          <Gallery />
        </section>

        {/* REGISTER */}
        <section id="register">
          <Register />
        </section>

        {/* FAQ */}
        <section id="faq">
          <FAQ />
        </section>

      </main>

      <Footer />
      <WhatsAppButton />
    </ScrollRevealProvider>
  );
}