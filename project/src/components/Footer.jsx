import { COLORS } from "../constants/colors";

export function Footer() {
  return (
    <footer
      style={{
        background: COLORS.surfaceLow,
        padding: "48px 60px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 24,
        borderTop: `1px solid rgba(72,72,71,0.2)`,
      }}
    >
      <div
        style={{
          fontFamily: "Lexend, sans-serif",
          fontWeight: 900,
          fontSize: 22,
          letterSpacing: "-0.03em",
          color: COLORS.primary,
        }}
      >
        APEX FORM
      </div>

      <div style={{ display: "flex", gap: 32 }}>
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
              fontFamily: "Manrope, sans-serif",
              fontWeight: 600,
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: COLORS.onSurfaceVariant,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = COLORS.secondary)}
            onMouseLeave={(e) => (e.target.style.color = COLORS.onSurfaceVariant)}
          >
            {label}
          </button>
        ))}
      </div>

      <p
        style={{
          fontFamily: "Manrope, sans-serif",
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
