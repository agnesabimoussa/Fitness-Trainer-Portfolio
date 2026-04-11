import { useState } from "react";
import { COLORS } from "../constants/colors";

export function ExpertiseCard({ icon, title, description, wide, imageUrl }) {
  const [hovered, setHovered] = useState(false);
  const isMobile = window.innerWidth < 768;

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
        background: COLORS.surfaceHighest,
        borderRadius: 12,
        padding: isMobile ? "24px" : "32px",
        minHeight: 280,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderBottom: `4px solid ${COLORS.primary}`,
        transition: "transform 0.2s",
        cursor: "default",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform = "translateY(-4px)")
      }
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      <span style={{ fontSize: 32 }}>{icon}</span>
      <div>
        <h3
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            fontSize: isMobile ? 18 : 20,
            color: COLORS.onSurface,
            marginBottom: 10,
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
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
