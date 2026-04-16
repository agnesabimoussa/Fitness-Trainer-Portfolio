import { useState, useEffect } from "react";
import { COLORS } from "../constants/colors";

export function IntroOverlay({ onComplete }) {
  const [phase, setPhase] = useState(0);
  // 0 = black, 1 = name appears, 2 = name glows, 3 = fade out

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 400);
    const t2 = setTimeout(() => setPhase(2), 1400);
    const t3 = setTimeout(() => setPhase(3), 2600);
    const t4 = setTimeout(() => onComplete(), 3400);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999,
        background: "#000000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 16,
        opacity: phase === 3 ? 0 : 1,
        transition: phase === 3 ? "opacity 0.8s ease" : "none",
        pointerEvents: phase === 3 ? "none" : "all",
      }}
    >
      <div
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 900,
          fontSize: "clamp(28px, 6vw, 72px)",
          letterSpacing: "-0.02em",
          textTransform: "uppercase",
          color: COLORS.primary,
          opacity: phase >= 1 ? 1 : 0,
          transform: phase >= 1 ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
          textShadow:
            phase >= 2
              ? `0 0 60px rgba(255,143,111,0.6), 0 0 120px rgba(255,143,111,0.3)`
              : "none",
        }}
      >
        Dibal Abi Moussa
      </div>
      <div
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          fontSize: "clamp(10px, 1.5vw, 13px)",
          letterSpacing: "0.5em",
          textTransform: "uppercase",
          color: COLORS.onSurfaceVariant,
          opacity: phase >= 2 ? 1 : 0,
          transform: phase >= 2 ? "translateY(0)" : "translateY(10px)",
          transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
        }}
      >
        Fitness Coach and Athlete
      </div>

      {/* Loading bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: 2,
          background: COLORS.primary,
          width: phase === 0 ? "0%" : phase === 1 ? "40%" : phase === 2 ? "80%" : "100%",
          transition: "width 0.9s ease",
          boxShadow: `0 0 20px ${COLORS.primary}`,
        }}
      />
    </div>
  );
}
