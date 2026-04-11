import { COLORS } from "../constants/colors";

export function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "0 40px 100px 60px",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&h=1000&fit=crop"
          alt="Gym environment"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.35,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, #0e0e0e 30%, rgba(14,14,14,0.5) 65%, rgba(14,14,14,0.1) 100%)",
          }}
        />
        {/* Accent glow */}
        <div
          style={{
            position: "absolute",
            bottom: "30%",
            left: "-10%",
            width: "60%",
            height: "40%",
            background: `radial-gradient(ellipse, rgba(255,143,111,0.08) 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: 700 }}>
        <p
          style={{
            fontFamily: "Manrope, sans-serif",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.5em",
            textTransform: "uppercase",
            color: COLORS.secondary,
            marginBottom: 24,
            animation: "fadeUp 0.8s ease 0.2s both",
          }}
        >
          Kinetic Precision Training
        </p>

        <h1
          style={{
            fontFamily: "Lexend, sans-serif",
            fontSize: "clamp(52px, 9vw, 110px)",
            fontWeight: 900,
            lineHeight: 0.88,
            letterSpacing: "-0.03em",
            color: COLORS.onSurface,
            marginBottom: 28,
            animation: "fadeUp 0.8s ease 0.35s both",
          }}
        >
          TRAIN WITH
          <br />
          <span
            style={{
              color: COLORS.primary,
              fontStyle: "italic",
              display: "block",
            }}
          >
            APEX
          </span>
        </h1>

        <p
          style={{
            fontFamily: "Manrope, sans-serif",
            fontSize: 17,
            lineHeight: 1.7,
            color: COLORS.onSurfaceVariant,
            maxWidth: 380,
            marginBottom: 40,
            animation: "fadeUp 0.8s ease 0.5s both",
          }}
        >
          Engineering elite performance through kinetic precision and
          disciplined movement.
        </p>

        <div
          style={{
            display: "flex",
            gap: 16,
            alignItems: "center",
            marginBottom: 48,
            animation: "fadeUp 0.8s ease 0.6s both",
          }}
        >
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            style={{
              background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDim})`,
              color: COLORS.onPrimary,
              border: "none",
              padding: "16px 36px",
              borderRadius: 999,
              fontFamily: "Lexend, sans-serif",
              fontWeight: 800,
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              cursor: "pointer",
              boxShadow: `0 20px 60px rgba(255,143,111,0.2)`,
              transition: "transform 0.15s, box-shadow 0.15s",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = `0 28px 60px rgba(255,143,111,0.35)`;
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = `0 20px 60px rgba(255,143,111,0.2)`;
            }}
          >
            Start Training
          </button>
          <button
            onClick={() =>
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
            }
            style={{
              background: "none",
              color: COLORS.onSurface,
              border: `1px solid rgba(72,72,71,0.5)`,
              padding: "16px 36px",
              borderRadius: 999,
              fontFamily: "Lexend, sans-serif",
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = COLORS.secondary;
              e.target.style.color = COLORS.secondary;
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = "rgba(72,72,71,0.5)";
              e.target.style.color = COLORS.onSurface;
            }}
          >
            Meet the Coach
          </button>
        </div>

        {/* Accent bars */}
        <div
          style={{
            display: "flex",
            gap: 8,
            animation: "fadeUp 0.8s ease 0.7s both",
          }}
        >
          <div
            style={{ height: 3, width: 80, background: COLORS.primary, borderRadius: 2 }}
          />
          <div
            style={{ height: 3, width: 30, background: COLORS.secondary, borderRadius: 2 }}
          />
          <div
            style={{ height: 3, width: 12, background: COLORS.outlineVariant, borderRadius: 2 }}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 36,
          right: 40,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          animation: "fadeUp 0.8s ease 1s both",
        }}
      >
        <div
          style={{
            fontFamily: "Manrope, sans-serif",
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: COLORS.onSurfaceVariant,
            writingMode: "vertical-rl",
          }}
        >
          Scroll
        </div>
        <div
          style={{
            width: 1,
            height: 48,
            background: `linear-gradient(to bottom, ${COLORS.outlineVariant}, transparent)`,
            animation: "pulse 2s ease infinite",
          }}
        />
      </div>
    </section>
  );
}
