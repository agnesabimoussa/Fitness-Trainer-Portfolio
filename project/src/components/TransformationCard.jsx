import { COLORS } from "../constants/colors";
import { useInView } from "../hooks/useInView";

export function TransformationCard({ transformation, delay }) {
  const [ref, inView] = useInView(0.1);

  return (
    <div
      ref={ref}
      style={{
        background: COLORS.surfaceHigh,
        borderRadius: 12,
        overflow: "hidden",
        padding: 24,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(50px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 8,
          marginBottom: 20,
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
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "grayscale(100%)",
            }}
          />
          <span
            style={{
              position: "absolute",
              top: 8,
              left: 8,
              background: "rgba(14,14,14,0.8)",
              fontFamily: "Manrope, sans-serif",
              fontWeight: 700,
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
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <span
            style={{
              position: "absolute",
              top: 8,
              left: 8,
              background: COLORS.primary,
              fontFamily: "Manrope, sans-serif",
              fontWeight: 700,
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
        }}
      >
        <div>
          <h4
            style={{
              fontFamily: "Lexend, sans-serif",
              fontWeight: 800,
              fontSize: 16,
              color: COLORS.onSurface,
              marginBottom: 4,
            }}
          >
            Client: {transformation.clientName}
          </h4>
          <p
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 700,
              fontSize: 9,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: COLORS.secondary,
            }}
          >
            {transformation.program}
          </p>
        </div>
        <div style={{ textAlign: "right" }}>
          <p
            style={{
              fontFamily: "Lexend, sans-serif",
              fontWeight: 900,
              fontSize: 30,
              color: COLORS.primary,
              lineHeight: 1,
            }}
          >
            {transformation.stat}
          </p>
          <p
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 700,
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
