import { useState } from "react";
import { COLORS } from "../constants/colors";
import { useIsMobile } from "../hooks/useMediaQuery";

export function ExpertiseCard({ icon, title, description, wide, imageUrl }) {
  const isMobile = useIsMobile();
  const [hovered, setHovered] = useState(false);

  if (imageUrl) {
    return (
      <div
        style={{
          gridColumn: isMobile ? "span 1" : wide ? "span 2" : "span 1",
          position: "relative",
          borderRadius: 12,
          overflow: "hidden",
          minHeight: isMobile ? 240 : 280,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={wide ? "expertise-wide" : ""}
      >
        <img
          src={imageUrl}
          alt={title}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: hovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.7s ease",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)",
            padding: isMobile ? "24px" : "32px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <h3
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 900,
              fontSize: isMobile ? 22 : 26,
              letterSpacing: "-0.02em",
              color: COLORS.onSurface,
              marginBottom: 8,
            }}
          >
            {title}
          </h3>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 13,
              lineHeight: 1.6,
              color: COLORS.onSurfaceVariant,
              maxWidth: 480,
            }}
          >
            {description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        gridColumn: "span 1",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)",
        borderRadius: 12,
        padding: isMobile ? "24px" : "32px",
        minHeight: 280,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: `1px solid rgba(72,72,71,0.28)`,
        borderBottom: `3px solid rgba(16,185,129,0.55)`,
        boxShadow: hovered ? "0 26px 60px rgba(0,0,0,0.38)" : "0 18px 44px rgba(0,0,0,0.26)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease, background 0.22s ease",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Sheen */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(700px 320px at 20% 10%, rgba(0,227,253,0.10) 0%, transparent 55%), radial-gradient(800px 360px at 80% 110%, rgba(16,185,129,0.10) 0%, transparent 55%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.22s ease",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative" }}>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: 16,
            marginBottom: 14,
          }}
        >
          <div
            style={{
              fontFamily: "Sora, sans-serif",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              fontSize: 12,
              color: COLORS.onSurfaceVariant,
              opacity: hovered ? 0.95 : 0.75,
              transition: "opacity 0.22s ease, color 0.22s ease",
            }}
          >
            {icon}
          </div>
          <div
            aria-hidden="true"
            style={{
              width: 44,
              height: 2,
              borderRadius: 999,
              background: hovered ? COLORS.secondary : "rgba(255,255,255,0.10)",
              boxShadow: hovered ? `0 0 16px rgba(0,227,253,0.25)` : "none",
              transition: "background 0.22s ease, box-shadow 0.22s ease",
            }}
          />
        </div>

        <h3
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 800,
            fontSize: isMobile ? 18 : 20,
            color: hovered ? COLORS.onSurface : "rgba(255,255,255,0.92)",
            marginBottom: 10,
            letterSpacing: "-0.02em",
            transition: "color 0.22s ease",
          }}
        >
          {title}
        </h3>
      </div>

      <div>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 13,
            lineHeight: 1.6,
            color: COLORS.onSurfaceVariant,
            opacity: hovered ? 0.98 : 0.88,
            transition: "opacity 0.22s ease",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
