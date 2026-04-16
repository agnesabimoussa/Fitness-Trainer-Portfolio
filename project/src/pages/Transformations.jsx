import { COLORS } from "../constants/colors";
import { useIsMobile } from "../hooks/useMediaQuery";
import { TRANSFORMATIONS_DIRECTORY } from "../constants/transformations";
import { TransformationCard } from "../components/TransformationCard";

export function Transformations() {
  const transformations = TRANSFORMATIONS_DIRECTORY;
  const isMobile = useIsMobile();

  return (
    <section
      id="transformations"
      style={{
        background: "transparent",
        borderTop: `1px solid rgba(72,72,71,0.18)`,
      }}
    >
      <div style={{ maxWidth: 1100, width: "100%", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: isMobile ? 40 : 64 }}>
          {/* <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: isMobile ? 8 : 10,
              fontWeight: 600,
              letterSpacing: "0.6em",
              textTransform: "uppercase",
              color: COLORS.secondary,
              marginBottom: 16,
            }}
          >
            Transformed Lives
          </p> */}
          <h2
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 900,
              fontSize: isMobile ? "clamp(28px, 4vw, 36px)" : "clamp(36px, 4vw, 56px)",
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              color: COLORS.onSurface,
            }}
          >
            CLIENTS TRANSFORMATIONS
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(300px, 1fr))",
            gap: isMobile ? 16 : 24,
          }}
          className="transformations-grid"
        >
          {transformations.map((t, i) => (
            <TransformationCard key={t.id} transformation={t} delay={i * 0.12} />
          ))}
        </div>

        {/* <p
          style={{
            textAlign: "center",
            fontSize: isMobile ? 11 : 12,
            color: COLORS.onSurfaceVariant,
            marginTop: isMobile ? 32 : 48,
            letterSpacing: "0.05em",
          }}
        >
          {transformations.length} transformations shown - Results are individual and may vary
        </p> */}
      </div>
    </section>
  );
}
