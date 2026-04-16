import { useState, useEffect } from "react";
import { COLORS } from "../constants/colors";

export function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "about", label: "About" },
    { id: "expertise", label: "Expertise" },
    { id: "experience", label: "Experience" },
    { id: "transformations", label: "Results" },
    { id: "brand-deals", label: "Brand Deals" },
    { id: "contact", label: "Contact" },
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding:
          "0 calc(24px + env(safe-area-inset-right)) 0 calc(24px + env(safe-area-inset-left))",
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled
          ? "rgba(14,14,14,0.88)"
          : "rgba(14,14,14,0.3)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        transition: "background 0.4s ease",
        borderBottom: scrolled
          ? `1px solid rgba(72,72,71,0.3)`
          : "1px solid transparent",
      }}
    >
      {/* Brand Name */}
      <div
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontSize: "clamp(14px, 2vw, 18px)",
          fontWeight: 700,
          letterSpacing: "0.08em",
          color: COLORS.onSurface,
          textTransform: "uppercase",
          flex: "0 0 auto",
        }}
        className="brand-name"
      >
        Dibal Abi Moussa
      </div>

      {/* Desktop Nav */}
      <nav
        style={{
          display: "flex",
          gap: 32,
          alignItems: "center",
        }}
        className="desktop-nav"
      >
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollTo(link.id)}
            type="button"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "Inter, sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color:
                activeSection === link.id
                  ? COLORS.primary
                  : COLORS.onSurfaceVariant,
              transition: "color 0.3s ease, transform 0.3s ease, text-shadow 0.3s ease",
              padding: "4px 0",
              borderBottom:
                activeSection === link.id
                  ? `2px solid ${COLORS.primary}`
                  : "2px solid transparent",
            }}
            onMouseEnter={(e) => {
              e.target.style.color = COLORS.primary;
              e.target.style.transform = "scale(1.08)";
              e.target.style.textShadow = `0 0 10px ${COLORS.primary}40`;
            }}
            onMouseLeave={(e) => {
              e.target.style.color = activeSection === link.id ? COLORS.primary : COLORS.onSurfaceVariant;
              e.target.style.transform = "scale(1)";
              e.target.style.textShadow = "none";
            }}
          >
            {link.label}
          </button>
        ))}
        <button
          onClick={() => scrollTo("contact")}
          type="button"
          style={{
            background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDim})`,
            color: COLORS.onPrimary,
            border: "none",
            padding: "10px 20px",
            borderRadius: 999,
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.1) translateY(-2px)";
            e.target.style.boxShadow = `0 12px 24px ${COLORS.primary}50`;
            e.target.style.opacity = "0.95";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1) translateY(0)";
            e.target.style.boxShadow = "none";
            e.target.style.opacity = "1";
          }}
        >
          Book Now
        </button>
      </nav>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        type="button"
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          flexDirection: "column",
          gap: 5,
          padding: 4,
          minHeight: 48,
          minWidth: 48,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: "0 0 auto",
          position: "fixed",
          top: "calc(8px + env(safe-area-inset-top))",
          right: "calc(12px + env(safe-area-inset-right))",
          zIndex: "101",
          pointerEvents: "auto",
        }}
        className="hamburger"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: 22,
              height: 2,
              background: COLORS.onSurface,
              borderRadius: 2,
              transition: "transform 0.2s, opacity 0.2s",
              transform:
                menuOpen && i === 0
                  ? "translateY(7px) rotate(45deg)"
                  : menuOpen && i === 2
                  ? "translateY(-7px) rotate(-45deg)"
                  : "none",
              opacity: menuOpen && i === 1 ? 0 : 1,
            }}
          />
        ))}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          style={{
            position: "fixed",
            top: 64,
            left: 0,
            right: 0,
            background: "rgba(14,14,14,0.97)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            padding:
              "24px calc(24px + env(safe-area-inset-right)) 24px calc(24px + env(safe-area-inset-left))",
            display: "flex",
            flexDirection: "column",
            gap: 8,
            borderBottom: `1px solid rgba(72,72,71,0.4)`,
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              type="button"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "Inter, sans-serif",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color:
                  activeSection === link.id ? COLORS.primary : COLORS.onSurface,
                padding: "14px 12px",
                textAlign: "left",
                borderBottom: `1px solid rgba(72,72,71,0.2)`,
                borderLeft: `3px solid transparent`,
                transition: "color 0.3s ease, transform 0.3s ease, border-color 0.3s ease, background 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = COLORS.primary;
                e.target.style.borderLeftColor = COLORS.primary;
                e.target.style.background = "rgba(16, 185, 129, 0.08)";
                e.target.style.transform = "translateX(4px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = activeSection === link.id ? COLORS.primary : COLORS.onSurface;
                e.target.style.borderLeftColor = "transparent";
                e.target.style.background = "none";
                e.target.style.transform = "translateX(0)";
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            type="button"
            style={{
              background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDim})`,
              color: COLORS.onPrimary,
              border: "none",
              padding: "14px",
              borderRadius: 999,
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              cursor: "pointer",
              marginTop: 8,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.08) translateY(-2px)";
              e.target.style.boxShadow = `0 12px 24px ${COLORS.primary}50`;
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1) translateY(0)";
              e.target.style.boxShadow = "none";
            }}
          >
            Book Now
          </button>
        </div>
      )}
    </header>
  );
}
