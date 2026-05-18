import { useMemo, useState } from "react";
import { COLORS } from "../constants/colors";
import { useInView } from "../hooks/useInView";
import { useIsMobile } from "../hooks/useMediaQuery";
import { Section } from "../components/layout/Section";
import { Container } from "../components/layout/Container";
import { BRAND_DEALS } from "../constants/content/brandDeals";

export function BrandDeals() {
  const [ref, inView] = useInView();
  const isMobile = useIsMobile();
  const [copiedId, setCopiedId] = useState(null);

  const deals = useMemo(
    () =>
      BRAND_DEALS.map((deal) => ({
        ...deal,
        accent:
          deal.accentKind === "secondary"
            ? `linear-gradient(135deg, ${COLORS.secondary}, ${COLORS.primary})`
            : `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDim})`,
      })),
    []
  );

  const copyCode = async (deal) => {
    try {
      await navigator.clipboard.writeText(deal.code);
    } catch {
      // Clipboard can be blocked by permissions; fall back silently.
    }
    setCopiedId(deal.id);
    window.clearTimeout(copyCode._t);
    copyCode._t = window.setTimeout(() => setCopiedId(null), 1200);
  };

  return (
    <Section id="brand-deals" sectionRef={ref} style={{ position: "relative", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(900px 500px at 10% 20%, rgba(16,185,129,0.08) 0%, transparent 55%), radial-gradient(700px 400px at 90% 40%, rgba(0,227,253,0.06) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <Container
        style={{
          position: "relative",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(36px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        <div style={{ textAlign: isMobile ? "left" : "center", marginBottom: isMobile ? 36 : 56 }}>
          {/* <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: isMobile ? 9 : 10,
              fontWeight: 700,
              letterSpacing: "0.45em",
              textTransform: "uppercase",
              color: COLORS.secondary,
              marginBottom: 14,
            }}
          >
            Partner Codes
          </p> */}
          <h2
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 900,
              fontSize: isMobile ? "clamp(30px, 6vw, 44px)" : "clamp(40px, 5vw, 64px)",
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              color: COLORS.onSurface,
              lineHeight: 1,
              marginBottom: 14,
            }}
          >
            BRAND DEALS
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: isMobile ? 13 : 15,
              lineHeight: 1.7,
              color: COLORS.onSurfaceVariant,
              maxWidth: 780,
              margin: isMobile ? "0" : "0 auto",
            }}
          >
            Use the promo codes below to save with brands I trust
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, minmax(0, 1fr))",
            gap: isMobile ? 14 : 18,
          }}
          className="brand-deals-grid"
        >
          {deals.map((deal) => (
            <div
              key={deal.id}
              style={{
                background: COLORS.surfaceHigh,
                borderRadius: 16,
                overflow: "hidden",
                border: `1px solid rgba(72,72,71,0.28)`,
                boxShadow: "0 26px 60px rgba(0,0,0,0.35)",
              }}
            >
              <div style={{ height: 6, background: deal.accent }} />

              <div style={{ padding: isMobile ? 18 : 22 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    marginBottom: 12,
                    flexWrap: "wrap",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div
                      aria-hidden="true"
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 12,
                        background: "rgba(255,255,255,0.04)",
                        border: `1px solid rgba(255,255,255,0.06)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "Sora, sans-serif",
                        fontWeight: 800,
                        letterSpacing: "-0.03em",
                        color: COLORS.onSurface,
                      }}
                    >
                      {deal.brand.slice(0, 1).toUpperCase()}
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "Sora, sans-serif",
                          fontWeight: 800,
                          fontSize: 16,
                          letterSpacing: "-0.02em",
                          color: COLORS.onSurface,
                        }}
                      >
                        {deal.brand}
                      </div>
                      <div
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 600,
                          fontSize: 11,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: COLORS.onSurfaceVariant,
                        }}
                      >
                        {deal.perk}
                      </div>
                    </div>
                  </div>

                  <span
                    style={{
                      background: "rgba(16,185,129,0.10)",
                      border: `1px solid rgba(16,185,129,0.35)`,
                      color: COLORS.primary,
                      borderRadius: 999,
                      padding: "8px 12px",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 700,
                      fontSize: 10,
                      letterSpacing: "0.22em",
                      // textTransform: "uppercase",
                      whiteSpace: "nowrap",
                    }}
                  >
                    CODE: {deal.code}
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: 10,
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    marginTop: 14,
                  }}
                >
                  <button
                    type="button"
                    onClick={() => copyCode(deal)}
                    style={{
                      background: "none",
                      border: `1px solid rgba(0,227,253,0.34)`,
                      color: COLORS.secondary,
                      padding: "12px 16px",
                      borderRadius: 999,
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 800,
                      fontSize: 10,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      transition: "transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "translateY(-2px)";
                      e.target.style.background = "rgba(0,227,253,0.08)";
                      e.target.style.boxShadow = `0 14px 28px rgba(0,227,253,0.18)`;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "translateY(0)";
                      e.target.style.background = "none";
                      e.target.style.boxShadow = "none";
                    }}
                  >
                    {copiedId === deal.id ? "Copied" : "Copy Code"}
                  </button>

                  <a
                    href={deal.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDim})`,
                      color: COLORS.onPrimary,
                      padding: "12px 16px",
                      borderRadius: 999,
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 900,
                      fontSize: 10,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      boxShadow: `0 18px 50px ${COLORS.primary}2A`,
                      transition: "transform 0.25s ease, box-shadow 0.25s ease, opacity 0.25s ease",
                      whiteSpace: "nowrap",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px) scale(1.02)";
                      e.currentTarget.style.boxShadow = `0 22px 60px ${COLORS.primary}40`;
                      e.currentTarget.style.opacity = "0.98";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0) scale(1)";
                      e.currentTarget.style.boxShadow = `0 18px 50px ${COLORS.primary}2A`;
                      e.currentTarget.style.opacity = "1";
                    }}
                  >
                    Visit Site
                    <span aria-hidden="true" style={{ fontSize: 14, lineHeight: 1 }}>
                      ↗
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <p
          style={{
            textAlign: isMobile ? "left" : "center",
            fontFamily: "Inter, sans-serif",
            fontSize: 12,
            color: COLORS.onSurfaceVariant,
            marginTop: isMobile ? 28 : 44,
            letterSpacing: "0.02em",
          }}
        >
          Deals and codes are placeholders for now. You can replace them anytime.
        </p> */}
      </Container>
    </Section>
  );
}
