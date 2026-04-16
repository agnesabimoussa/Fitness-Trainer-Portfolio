import { COLORS } from "../constants/colors";
import { useIsMobile } from "../hooks/useMediaQuery";

export function Footer() {
  const isMobile = useIsMobile();

  return (
    <footer
      style={{
        background: "transparent",
        padding: isMobile ? "44px 24px" : "54px 60px",
        borderTop: `1px solid rgba(72,72,71,0.18)`,
      }}
    >
      <div style={{ maxWidth: 1100, width: "100%", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: isMobile ? "stretch" : "center",
            justifyContent: "space-between",
            gap: 18,
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "Sora, sans-serif",
                fontWeight: 800,
                fontSize: isMobile ? 18 : 20,
                letterSpacing: "-0.03em",
                color: COLORS.onSurface,
                marginBottom: 10,
              }}
            >
              Dibal Abi Moussa
            </div>
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 12,
                lineHeight: 1.6,
                color: COLORS.onSurfaceVariant,
                maxWidth: 420,
                letterSpacing: "0.01em",
              }}
            >
              Train with purpose. Build strength that carries over to real life.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              justifyContent: isMobile ? "flex-start" : "flex-end",
              flexWrap: "wrap",
            }}
          >
            {[
              {
                label: "Instagram",
                href: "https://www.instagram.com/dibal_hybridcoach?igsh=MWl3MGQ4b3J2YmM0Mw==",
                icon: (
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 2.2A1.8 1.8 0 1 1 12 13.8 1.8 1.8 0 0 1 12 10.2z" />
                ),
              },
              {
                label: "TikTok",
                href: "https://www.tiktok.com/@dibalhybridcoach?_r=1&_t=ZS-95aiFCu1Z7U",
                icon: (
                  <path d="M14 3v10.6a4.8 4.8 0 1 1-4.2-4.8V6.2a7.3 7.3 0 0 0 4.2 1.3c.7 0 1.3-.1 2-.3V4.9c-.7-.3-1.4-.8-2-1.9z" />
                ),
              },
              {
                label: "Email",
                href: "mailto:dibal.abimoussa@hotmail.com",
                icon: (
                  <path d="M4 6h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm0 2 8 5 8-5M4 18h16" />
                ),
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={item.label}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 999,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: `1px solid rgba(72,72,71,0.28)`,
                  background: "rgba(255,255,255,0.03)",
                  color: COLORS.onSurface,
                  textDecoration: "none",
                  transition: "transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.borderColor = "rgba(0,227,253,0.34)";
                  e.currentTarget.style.boxShadow = "0 14px 30px rgba(0,0,0,0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(72,72,71,0.28)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {item.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
            flexDirection: isMobile ? "column" : "row",
            marginTop: isMobile ? 26 : 30,
            paddingTop: 18,
            borderTop: `1px solid rgba(72,72,71,0.16)`,
          }}
        >
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 11,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: COLORS.outlineVariant,
              textAlign: isMobile ? "center" : "left",
            }}
          >
            (c) {new Date().getFullYear()} Dibal Abi Moussa. All rights reserved.
          </div>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              background: "none",
              border: `1px solid rgba(72,72,71,0.28)`,
              color: COLORS.onSurfaceVariant,
              padding: "10px 14px",
              borderRadius: 999,
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: 10,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "transform 0.22s ease, border-color 0.22s ease, color 0.22s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.borderColor = "rgba(16,185,129,0.40)";
              e.currentTarget.style.color = COLORS.onSurface;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "rgba(72,72,71,0.28)";
              e.currentTarget.style.color = COLORS.onSurfaceVariant;
            }}
          >
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
