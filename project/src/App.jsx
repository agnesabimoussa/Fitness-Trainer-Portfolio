import { useState, useEffect } from "react";
import { COLORS } from "./constants/colors";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { Footer } from "./components/Footer";
import { IntroOverlay } from "./components/IntroOverlay";
import { About } from "./pages/About";
import { Expertise } from "./pages/Expertise";
import { Experience } from "./pages/Experience";
import { Transformations } from "./pages/Transformations";
import { Contact } from "./pages/Contact";

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = ["hero", "about", "expertise", "experience", "transformations", "contact"];
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
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700;800;900&family=Manrope:wght@400;500;600;700;800&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background: ${COLORS.surface};
          color: ${COLORS.onSurface};
          font-family: 'Manrope', sans-serif;
          line-height: 1.5;
          overflow-x: hidden;
        }

        html { scroll-behavior: smooth; }

        h1, h2, h3, h4 { font-family: 'Lexend', sans-serif; }

        ::selection { background: ${COLORS.primary}; color: ${COLORS.onPrimary};
 }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: ${COLORS.surface}; }
        ::-webkit-scrollbar-thumb { background: ${COLORS.outlineVariant}; border
-radius: 2px; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !import
ant; }
          .expertise-grid { grid-template-columns: 1fr !important; }
          .expertise-wide { grid-column: span 1 !important; }
          .stat-badges { position: static !important; margin-top: 16px; }       
          .stat-badge-left { display: none !important; }
          .timeline-year { display: none !important; }
          section { padding-left: 24px !important; padding-right: 24px !importan
t; }
          #expertise { padding-left: 24px !important; padding-right: 24px !impor
tant; }
          #experience { padding-left: 24px !important; padding-right: 24px !impo
rtant; }
          #contact { padding-left: 24px !important; padding-right: 24px !importa
nt; }
          #transformations { padding-left: 24px !important; padding-right: 24px 
!important; }
          #about { padding-left: 24px !important; padding-right: 24px !important
; }
          footer { padding-left: 24px !important; padding-right: 24px !important
; }
          #hero { padding-left: 24px !important; padding-right: 24px !important;
 padding-bottom: 80px !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

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
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
