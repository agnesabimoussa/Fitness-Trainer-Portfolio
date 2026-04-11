import { COLORS } from "../constants/colors";
import { TRANSFORMATIONS_DIRECTORY } from "../constants/transformations";
import { TransformationCard } from "../components/TransformationCard";

export function Transformations() {
  // Smart loader function - reads from the TRANSFORMATIONS_DIRECTORY
  const loadTransformations = () => TRANSFORMATIONS_DIRECTORY;
  const transformations = loadTransformations();

  return (
    <section
      id="transformations"
      style={{
        background: COLORS.surface,
        padding: "120px 60px",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <p
          style={{
            fontFamily: "Manrope, sans-serif",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.6em",
            textTransform: "uppercase",
            color: COLORS.secondary,
            marginBottom: 16,
          }}
        >
          Transformed Lives
        </p>
        <h2
          style={{
            fontFamily: "Lexend, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(36px, 4vw, 56px)",
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
            color: COLORS.onSurface,
          }}
        >
          REAL RESULTS
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 24,
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        {transformations.map((t, i) => (
          <TransformationCard
            key={t.id}
            transformation={t}
            delay={i * 0.12}
          />
        ))}
      </div>

      <p
        style={{
          textAlign: "center",
          fontFamily: "Manrope, sans-serif",
          fontSize: 12,
          color: COLORS.onSurfaceVariant,
          marginTop: 48,
          letterSpacing: "0.05em",
        }}
      >
        {transformations.length} transformations shown · Results are individual and may vary
      </p>
    </section>
  );
}
