import { COLORS } from "../constants/colors";
import { useInView } from "../hooks/useInView";
import { StatBadge } from "../components/StatBadge";

export function About() {
  const [ref, inView] = useInView();

  return (
    <section
      id="about"
      ref={ref}
      style={{
        background: COLORS.surfaceLow,
        padding: "120px 40px 120px 60px",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
        className="about-grid"
      >
        {/* Image column */}
        <div style={{ position: "relative" }}>
          <div
            style={{
              aspectRatio: "1",
              borderRadius: 12,
              overflow: "hidden",
              filter: "grayscale(100%)",
              transition: "filter 0.7s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.filter = "grayscale(0%)")}
            onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(100%)")}
          >
            <img
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=700&h=700&fit=crop"
              alt="Coach in motion"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Stat badges */}
          <div
            style={{
              position: "absolute",
              bottom: -20,
              right: -20,
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
            className="stat-badges"
          >
            <StatBadge value="12+" label="Years of Form" />
          </div>
          <div
            style={{
              position: "absolute",
              top: 24,
              left: -20,
              background: COLORS.surfaceHighest,
              border: `1px solid rgba(72,72,71,0.3)`,
              padding: "16px 20px",
              borderRadius: 12,
            }}
            className="stat-badge-left"
          >
            <div
              style={{
                fontFamily: "Lexend, sans-serif",
                fontWeight: 900,
                fontSize: 28,
                color: COLORS.primary,
              }}
            >
              500+
            </div>
            <div
              style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 700,
                fontSize: 9,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: COLORS.onSurfaceVariant,
              }}
            >
              Clients Trained
            </div>
          </div>
        </div>

        {/* Text column */}
        <div style={{ paddingLeft: 20 }}>
          <p
            style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: COLORS.primary,
              marginBottom: 20,
            }}
          >
            The Philosophy
          </p>
          <h2
            style={{
              fontFamily: "Lexend, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(36px, 4vw, 56px)",
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              lineHeight: 0.9,
              marginBottom: 32,
              color: COLORS.onSurface,
            }}
          >
            THE
            <br />
            COACH
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
              marginBottom: 40,
            }}
          >
            <p
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: 15,
                lineHeight: 1.8,
                color: COLORS.onSurfaceVariant,
              }}
            >
              My philosophy is built on the intersection of biological science
              and raw athletic grit. I don't believe in "working out"—I believe
              in{" "}
              <strong style={{ color: COLORS.onSurface }}>
                engineered training.
              </strong>
            </p>
            <p
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: 15,
                lineHeight: 1.8,
                color: COLORS.onSurfaceVariant,
              }}
            >
              From competitive powerlifting to high-performance mobility
              coaching, my journey has been a relentless pursuit of perfect
              form. Every movement has a purpose; every rep is a calculation.
            </p>
          </div>

          {/* Certifications row */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              marginBottom: 40,
            }}
          >
            {["NASM-CPT", "CrossFit L2", "BSc Kinesiology", "PN1 Nutrition"].map(
              (cert) => (
                <span
                  key={cert}
                  style={{
                    background: COLORS.surfaceHighest,
                    border: `1px solid rgba(72,72,71,0.4)`,
                    padding: "8px 14px",
                    borderRadius: 4,
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 700,
                    fontSize: 9,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: COLORS.onSurfaceVariant,
                  }}
                >
                  {cert}
                </span>
              )
            )}
          </div>

          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            style={{
              background: "none",
              border: `1px solid rgba(0,227,253,0.4)`,
              color: COLORS.secondary,
              padding: "14px 32px",
              borderRadius: 999,
              fontFamily: "Lexend, sans-serif",
              fontWeight: 700,
              fontSize: 10,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "background 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = COLORS.secondary;
              e.target.style.color = COLORS.onSecondary;
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "none";
              e.target.style.color = COLORS.secondary;
            }}
          >
            Work With Me
          </button>
        </div>
      </div>
    </section>
  );
}
