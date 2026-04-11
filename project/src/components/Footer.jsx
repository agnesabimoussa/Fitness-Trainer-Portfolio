import { COLORS } from "../constants/colors";

export function Footer() {
  const isMobile = window.innerWidth < 768;

  return (
    <footer
      style={{
        background: COLORS.surfaceLow,
        padding: isMobile ? "40px 24px" : "48px 60px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 24,
        borderTop: `1px solid rgba(72,72,71,0.2)`,
      }}
    >
      <div
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 800,
          fontSize: isMobile ? 18 : 22,
          letterSpacing: "-0.01em",
          color: COLORS.primary,
        }}
      >
        APEX FORM
      </div>

      <div style={{ display: "flex", gap: isMobile ? 16 : 32, flexWrap: "wrap", justifyContent: "center" }}>
        {["About", "Expertise", "Results", "Contact"].map((label) => (
          <button
            key={label}
            onClick={() =>
              document
                .getElementById(label.toLowerCase().replace("results", "transformations"))
                ?.scrollIntoView({ behavior: "smooth" })
            }
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: COLORS.onSurfaceVariant,
              transition: "color 0.3s ease, transform 0.3s ease, text-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.color = COLORS.secondary;
              e.target.style.transform = "translateY(-2px) scale(1.08)";
              e.target.style.textShadow = `0 0 8px ${COLORS.secondary}40`;
            }}
            onMouseLeave={(e) => {
              e.target.style.color = COLORS.onSurfaceVariant;
              e.target.style.transform = "translateY(0) scale(1)";
              e.target.style.textShadow = "none";
            }}
          >
            {label}
          </button>
        ))}
      </div>

      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: 10,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: COLORS.outlineVariant,
        }}
      >
        © 2026 KINETIC PRECISION. ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
}
