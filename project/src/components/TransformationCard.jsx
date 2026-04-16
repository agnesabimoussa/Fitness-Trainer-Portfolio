import { COLORS } from "../constants/colors";
import { useInView } from "../hooks/useInView";
import { useState } from "react";

export function TransformationCard({ transformation, delay }) {
  const [ref, inView] = useInView(0.1);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      style={{
        background: COLORS.surfaceHigh,
        borderRadius: 12,
        overflow: "hidden",
        padding: 24,
        border: hovered ? `1px solid rgba(0,227,253,0.28)` : `1px solid rgba(72,72,71,0.22)`,
        boxShadow: hovered ? "0 26px 60px rgba(0,0,0,0.40)" : "0 18px 44px rgba(0,0,0,0.26)",
        opacity: inView ? 1 : 0,
        transform: inView ? (hovered ? "translateY(-6px)" : "translateY(0)") : "translateY(50px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease`,
        cursor: "default",
        position: "relative",
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
            "radial-gradient(700px 340px at 18% 10%, rgba(0,227,253,0.08) 0%, transparent 58%), radial-gradient(900px 420px at 85% 110%, rgba(16,185,129,0.10) 0%, transparent 60%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.22s ease",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 8,
          marginBottom: 20,
          position: "relative",
        }}
      >
        {/* Before */}
        <div
          style={{
            aspectRatio: "3/4",
            borderRadius: 8,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src={transformation.beforeUrl}
            alt={transformation.beforeAlt}
            loading="lazy"
            decoding="async"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "grayscale(100%)",
              transform: hovered ? "scale(1.02)" : "scale(1)",
              transition: "transform 0.22s ease",
            }}
          />
          <span
            style={{
              position: "absolute",
              top: 8,
              left: 8,
              background: "rgba(14,14,14,0.8)",
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: 9,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: COLORS.onSurface,
              padding: "4px 8px",
              borderRadius: 3,
            }}
          >
            Before
          </span>
        </div>

        {/* After */}
        <div
          style={{
            aspectRatio: "3/4",
            borderRadius: 8,
            overflow: "hidden",
            position: "relative",
            border: `2px solid ${COLORS.primary}`,
          }}
        >
          <img
            src={transformation.afterUrl}
            alt={transformation.afterAlt}
            loading="lazy"
            decoding="async"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: hovered ? "scale(1.02)" : "scale(1)",
              transition: "transform 0.22s ease",
            }}
          />
          <span
            style={{
              position: "absolute",
              top: 8,
              left: 8,
              background: COLORS.primary,
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: 9,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: COLORS.onPrimary,
              padding: "4px 8px",
              borderRadius: 3,
            }}
          >
            After
          </span>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          position: "relative",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: 9,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: COLORS.secondary,
              opacity: hovered ? 1 : 0.88,
              transition: "opacity 0.22s ease",
            }}
          >
            {transformation.program}
          </p>
        </div>
        <div style={{ textAlign: "right" }}>
          <p
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 900,
              fontSize: 30,
              color: COLORS.primary,
              lineHeight: 1,
              textShadow: hovered ? `0 0 18px rgba(16,185,129,0.22)` : "none",
              transition: "text-shadow 0.22s ease",
            }}
          >
            {transformation.stat}
          </p>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: 9,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: COLORS.onSurfaceVariant,
            }}
          >
            {transformation.statLabel}
          </p>
        </div>
      </div>
    </div>
  );
}
