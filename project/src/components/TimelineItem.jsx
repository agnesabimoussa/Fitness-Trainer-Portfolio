import { COLORS } from "../constants/colors";
import { useInView } from "../hooks/useInView";

export function TimelineItem({ years, role, place, description, delay }) {
  const [ref, inView] = useInView(0.2);
  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        gap: 32,
        alignItems: "flex-start",
        position: "relative",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0)" : "translateX(-30px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      <div
        style={{
          flexShrink: 0,
          width: 120,
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 700,
          fontSize: 15,
          color: COLORS.primary,
          paddingTop: 2,
        }}
        className="timeline-year"
      >
        {years}
      </div>
      <div
        style={{
          flex: 1,
          paddingLeft: 32,
          borderLeft: `2px solid rgba(72,72,71,0.3)`,
          paddingBottom: 48,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: -6,
            top: 6,
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: COLORS.secondary,
            boxShadow: `0 0 12px ${COLORS.secondary}40`,
          }}
        />
        <h4
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: COLORS.secondary,
            marginBottom: 6,
          }}
        >
          {role}
        </h4>
        <p
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 600,
            fontSize: 18,
            color: COLORS.onSurface,
            marginBottom: 10,
          }}
        >
          {place}
        </p>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 13,
            lineHeight: 1.7,
            color: COLORS.onSurfaceVariant,
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
