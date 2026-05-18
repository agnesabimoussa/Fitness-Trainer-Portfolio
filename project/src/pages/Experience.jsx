import { COLORS } from "../constants/colors";
import { useIsMobile } from "../hooks/useMediaQuery";
import { TimelineItem } from "../components/TimelineItem";
import { Section } from "../components/layout/Section";
import { Container } from "../components/layout/Container";
import { EXPERIENCE_TIMELINE } from "../constants/content/experience";

export function Experience() {
  const isMobile = useIsMobile();

  return (
    <Section id="experience" style={{ overflow: "hidden" }}>
      <Container>
        <h2
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 900,
            fontSize: isMobile ? "clamp(32px, 5vw, 48px)" : "clamp(40px, 5vw, 64px)",
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
            color: COLORS.onSurface,
            marginBottom: isMobile ? 40 : 64,
          }}
        >
          EXPERIENCE
        </h2>

        <div style={{ maxWidth: 760 }} className="experience-grid">
          {EXPERIENCE_TIMELINE.map((item, i) => (
            <TimelineItem key={i} {...item} delay={i * 0.15} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
