import { COLORS } from "../constants/colors";
import { useInView } from "../hooks/useInView";
import { useIsMobile } from "../hooks/useMediaQuery";
import { StatBadge } from "../components/StatBadge";

export function About() {
  const [ref, inView] = useInView();
  const isMobile = useIsMobile();

  return (
    <section
      id="about"
      ref={ref}
      style={{
        background: "transparent",
        borderTop: `1px solid rgba(72,72,71,0.18)`,
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          width: "100%",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? 40 : 72,
          alignItems: "center",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
        className="about-grid"
      >
        {!isMobile && (
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
                src={require("../assets/dibal.jpeg")}
                alt="Coach in motion"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

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
              <StatBadge value="5+" label="Specialized Diplomas" />
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
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 900,
                  fontSize: 28,
                  color: COLORS.primary,
                }}
              >
                Hybrid
              </div>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: 9,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: COLORS.onSurfaceVariant,
                }}
              >
                Athlete Coach
              </div>
            </div>
          </div>
        )}

        <div style={{ paddingLeft: isMobile ? 0 : 20 }}>
          {/* <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: COLORS.primary,
              marginBottom: 20,
            }}
          >
            About Me
          </p> */}

          <h2
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(36px, 4vw, 56px)",
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              lineHeight: 0.9,
              marginBottom: 28,
              color: COLORS.onSurface,
            }}
          >
            {isMobile ? (
              "MY STORY"
            ) : (
              <>
                MY
                <br />
                STORY
              </>
            )}
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
                fontFamily: "Inter, sans-serif",
                fontSize: 15,
                lineHeight: 1.8,
                color: COLORS.onSurfaceVariant,
              }}
            >
              My journey in fitness did not start in a gym. It started at home, with limited equipment and a lot of
              trial, discipline, and consistency. That phase built my foundation physically and mentally, and it taught
              me how to stay committed even when conditions are not perfect.
            </p>

            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 15,
                lineHeight: 1.8,
                color: COLORS.onSurfaceVariant,
              }}
            >
              As my passion grew, I moved into the gym and started training like an athlete. I pushed my limits as a
              hybrid athlete, combining strength and conditioning with performance-based work. Along the way, I competed
              in multiple competitions. Those experiences taught me how to perform under pressure, and they shaped the
              way I coach today.
            </p>

            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 15,
                lineHeight: 1.8,
                color: COLORS.onSurfaceVariant,
              }}
            >
              Through years of structured work, I hit the strength milestones that once felt impossible and built the
              physique I used to dream about. Now I bring that same approach to my clients: purposeful training,
              consistency, and guidance that fits the person in front of me.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              marginBottom: 40,
            }}
          >
            {[
              "Personal Training",
              "Sports Nutrition",
              "Strength & Conditioning",
              "Rehab & Injury Management",
              "Pre/Postnatal Training",
            ].map((cert) => (
              <span
                key={cert}
                style={{
                  background: COLORS.surfaceHighest,
                  border: `1px solid rgba(72,72,71,0.4)`,
                  padding: "8px 14px",
                  borderRadius: 4,
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: 9,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: COLORS.onSurfaceVariant,
                  display: "inline-flex",
                  alignItems: "center",
                  transition:
                    "transform 0.2s ease, background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, color 0.2s ease",
                  willChange: "transform",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.background = "rgba(16,185,129,0.10)";
                  e.currentTarget.style.borderColor = "rgba(16,185,129,0.45)";
                  e.currentTarget.style.color = COLORS.onSurface;
                  e.currentTarget.style.boxShadow = "0 12px 26px rgba(16,185,129,0.10)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.background = COLORS.surfaceHighest;
                  e.currentTarget.style.borderColor = "rgba(72,72,71,0.4)";
                  e.currentTarget.style.color = COLORS.onSurfaceVariant;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {cert}
              </span>
            ))}
          </div>

          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              background: "none",
              border: `1px solid rgba(0,227,253,0.4)`,
              color: COLORS.secondary,
              padding: "14px 32px",
              borderRadius: 999,
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              fontSize: 10,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition:
                "background 0.3s ease, color 0.3s ease, border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = COLORS.secondary;
              e.target.style.color = COLORS.onSecondary;
              e.target.style.borderColor = COLORS.secondary;
              e.target.style.transform = "scale(1.05) translateY(-1px)";
              e.target.style.boxShadow = `0 8px 20px ${COLORS.secondary}40`;
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "none";
              e.target.style.color = COLORS.secondary;
              e.target.style.borderColor = "rgba(0,227,253,0.4)";
              e.target.style.transform = "scale(1) translateY(0)";
              e.target.style.boxShadow = "none";
            }}
          >
            Work With Me
          </button>
        </div>
      </div>
    </section>
  );
}
