import { COLORS } from "../constants/colors";

export function StatBadge({ value, label }) {
  return (
    <div
      style={{
        background: COLORS.secondary,
        padding: "20px 24px",
        borderRadius: 12,
        textAlign: "center",
        minWidth: 100,
      }}
    >
      <div
        style={{
          fontFamily: "Lexend, sans-serif",
          fontWeight: 900,
          fontSize: 36,
          color: COLORS.onSecondary,
          lineHeight: 1,
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontFamily: "Manrope, sans-serif",
          fontWeight: 700,
          fontSize: 9,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: COLORS.onSecondary,
          marginTop: 4,
          opacity: 0.8,
        }}
      >
        {label}
      </div>
    </div>
  );
}
