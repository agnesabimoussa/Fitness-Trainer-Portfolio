import { COLORS } from "../constants/colors";
import { useIsMobile } from "../hooks/useMediaQuery";

export function HeroSection() {
  const isMobile = useIsMobile();

  const heroContent = (
    <div className="hero-content" style={{ position: "relative", zIndex: 1 }}>
      <h1
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontSize: "clamp(42px, 5vw, 80px)",
          fontWeight: 900,
          lineHeight: 1.1,
          letterSpacing: "-0.03em",
          color: COLORS.onSurface,
          marginBottom: 24,
          animation: "fadeUp 0.8s ease 0.2s both",
        }}
      >
        Train With Purpose
        <br />
        <span
          style={{
            color: COLORS.primary,
            fontStyle: "italic",
            display: "block",
          }}
        >
          Move With Power
        </span>
      </h1>

      <div
        className="hero-actions"
        style={{
          display: "flex",
          gap: 16,
          alignItems: "center",
          marginBottom: 48,
          animation: "fadeUp 0.8s ease 0.5s both",
        }}
      >
        <button
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          style={{
            background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDim})`,
            color: COLORS.onPrimary,
            border: "none",
            padding: "16px 36px",
            borderRadius: 999,
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            fontSize: 11,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            cursor: "pointer",
            boxShadow: `0 20px 60px ${COLORS.primary}30`,
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.08) translateY(-3px)";
            e.target.style.boxShadow = `0 28px 60px ${COLORS.primary}50`;
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1) translateY(0)";
            e.target.style.boxShadow = `0 20px 60px ${COLORS.primary}30`;
          }}
        >
          Start Training
        </button>
        <button
          onClick={() => document.getElementById("transformations")?.scrollIntoView({ behavior: "smooth" })}
          style={{
            background: "none",
            color: COLORS.onSurface,
            border: `1px solid rgba(72,72,71,0.5)`,
            padding: "16px 36px",
            borderRadius: 999,
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 600,
            fontSize: 11,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "border-color 0.3s ease, color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.borderColor = COLORS.secondary;
            e.target.style.color = COLORS.secondary;
            e.target.style.transform = "scale(1.05) translateY(-2px)";
            e.target.style.boxShadow = `0 8px 20px ${COLORS.secondary}30`;
          }}
          onMouseLeave={(e) => {
            e.target.style.borderColor = "rgba(72,72,71,0.5)";
            e.target.style.color = COLORS.onSurface;
            e.target.style.transform = "scale(1) translateY(0)";
            e.target.style.boxShadow = "none";
          }}
        >
          View Results
        </button>
      </div>
    </div>
  );

  const heroImage = (
    <div
      className="hero-image"
      style={{
        position: "relative",
        width: "clamp(300px, 100%, 600px)",
        maxWidth: isMobile ? 420 : undefined,
        margin: isMobile ? "0" : undefined,
        aspectRatio: "1",
        borderRadius: "50%",
        overflow: "hidden",
        animation: "fadeUp 0.8s ease 0.3s both",
      }}
    >
      <img
        src={require("../assets/dibal.jpeg")}
        alt="Coach Dibal"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 15%",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          border: `2px solid ${COLORS.primary}`,
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
    </div>
  );

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        gap: 60,
        padding: "100px 60px",
        overflow: "hidden",
        background: "transparent",
      }}
    >
      {isMobile ? (
        <>
          {heroImage}
          {heroContent}
        </>
      ) : (
        <>
          {heroContent}
          {heroImage}
        </>
      )}
    </section>
  );
}
