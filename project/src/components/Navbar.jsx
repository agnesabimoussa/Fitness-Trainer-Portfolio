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
        padding: "0 24px",
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled
          ? "rgba(14,14,14,0.88)"
          : "rgba(14,14,14,0.3)",
        backdropFilter: "blur(20px)",
        transition: "background 0.4s ease",
        borderBottom: scrolled
          ? `1px solid rgba(72,72,71,0.3)`
          : "1px solid transparent",
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            border: `2px solid ${COLORS.primary}`,
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=72&h=72&fit=crop&crop=face"
            alt="Coach"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <span
          style={{
            fontFamily: "Lexend, sans-serif",
            fontWeight: 900,
            fontSize: 18,
            letterSpacing: "-0.03em",
            color: COLORS.primary,
          }}
        >
          APEX FORM
        </span>
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
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "Manrope, sans-serif",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color:
                activeSection === link.id
                  ? COLORS.primary
                  : COLORS.onSurfaceVariant,
              transition: "color 0.2s",
              padding: "4px 0",
              borderBottom:
                activeSection === link.id
                  ? `2px solid ${COLORS.primary}`
                  : "2px solid transparent",
            }}
          >
            {link.label}
          </button>
        ))}
        <button
          onClick={() => scrollTo("contact")}
          style={{
            background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDim})`,
            color: COLORS.onPrimary,
            border: "none",
            padding: "10px 20px",
            borderRadius: 999,
            fontFamily: "Lexend, sans-serif",
            fontWeight: 700,
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "transform 0.15s, opacity 0.15s",
          }}
          onMouseEnter={(e) => (e.target.style.opacity = "0.88")}
          onMouseLeave={(e) => (e.target.style.opacity = "1")}
        >
          Book Now
        </button>
      </nav>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: "none",
          background: "none",
          border: "none",
          cursor: "pointer",
          flexDirection: "column",
          gap: 5,
          padding: 4,
        }}
        className="hamburger"
        aria-label="Toggle menu"
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
          style={{
            position: "fixed",
            top: 64,
            left: 0,
            right: 0,
            background: "rgba(14,14,14,0.97)",
            backdropFilter: "blur(20px)",
            padding: "24px",
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
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "Manrope, sans-serif",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color:
                  activeSection === link.id ? COLORS.primary : COLORS.onSurface,
                padding: "14px 0",
                textAlign: "left",
                borderBottom: `1px solid rgba(72,72,71,0.2)`,
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            style={{
              background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDim})`,
              color: COLORS.onPrimary,
              border: "none",
              padding: "14px",
              borderRadius: 999,
              fontFamily: "Lexend, sans-serif",
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              cursor: "pointer",
              marginTop: 8,
            }}
          >
            Book Now
          </button>
        </div>
      )}
    </header>
  );
}
