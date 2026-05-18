import { COLORS } from "../constants/colors";
import { useInView } from "../hooks/useInView";
import { useIsMobile } from "../hooks/useMediaQuery";
import { ExpertiseCard } from "../components/ExpertiseCard";
import { Section } from "../components/layout/Section";
import { Container } from "../components/layout/Container";
import { EXPERTISE_ITEMS } from "../constants/content/expertise";

export function Expertise() {
  const [ref, inView] = useInView();
  const isMobile = useIsMobile();

  return (
    <Section id="expertise" sectionRef={ref}>
      <Container>
        <h2
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 900,
            fontSize: isMobile ? "clamp(26px, 5.5vw, 38px)" : "clamp(34px, 4.6vw, 54px)",
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
            color: COLORS.onSurface,
            lineHeight: 1,
            marginBottom: isMobile ? 36 : 56,
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          Expertise Hub
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: 16,
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
          }}
          className="expertise-grid"
        >
          {EXPERTISE_ITEMS.map((item, i) => (
            <ExpertiseCard key={i} {...item} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
