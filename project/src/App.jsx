import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { Footer } from "./components/Footer";
import { IntroOverlay } from "./components/IntroOverlay";
import { About } from "./pages/About";
import { Expertise } from "./pages/Expertise";
import { Experience } from "./pages/Experience";
import { Transformations } from "./pages/Transformations";
import { BrandDeals } from "./pages/BrandDeals";
import { Contact } from "./pages/Contact";

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = ["hero", "about", "expertise", "experience", "transformations", "brand-deals", "contact"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, [introComplete]);

  return (
    <>
      {!introComplete && (
        <IntroOverlay onComplete={() => setIntroComplete(true)} />
      )}

      <div
        style={{
          opacity: introComplete ? 1 : 0,
          transition: "opacity 0.6s ease",
        }}
      >
        <Navbar activeSection={activeSection} />
        <main>
          <HeroSection />
          <About />
          <Expertise />
          <Experience />
          <Transformations />
          <BrandDeals />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
