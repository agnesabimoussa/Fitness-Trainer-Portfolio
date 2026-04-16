import { COLORS } from "../constants/colors";
import { useInView } from "../hooks/useInView";
import { useIsMobile } from "../hooks/useMediaQuery";
import { ExpertiseCard } from "../components/ExpertiseCard";

export function Expertise() {
  const [ref, inView] = useInView();
  const isMobile = useIsMobile();

  const items = [
    {
      icon: "01",
      title: "Strength & Conditioning",
      description:
        "Build strength that carries over. Progressive programming for power, performance, and long-term resilience.",
    },
    {
      icon: "02",
      title: "Post Rehabilitation",
      description:
        "Return to training with confidence. Smart progressions that respect injuries, limitations, and movement quality.",
    },
    {
      icon: "03",
      title: "Weight Training",
      description:
        "Technique-first lifting with structure. Hypertrophy, strength, and consistency without guesswork.",
    },
    {
      icon: "04",
      title: "Calisthenics",
      description:
        "Master control and bodyweight strength. Pull-ups, dips, levers, and clean movement patterns built step by step.",
    },
    {
      icon: "05",
      title: "Pre / Postnatal Specialist",
      description:
        "Supportive, safe training through every phase. Strength, posture, and core work tailored to your needs.",
    },
    {
      icon: "06",
      title: "Sports Nutrition",
      description:
        "Fuel for performance and physique. Simple nutrition systems that fit your lifestyle and training demands.",
    },
  ];

  return (
    <section
      id="expertise"
      ref={ref}
      style={{
        background: "transparent",
        borderTop: `1px solid rgba(72,72,71,0.18)`,
      }}
    >
      <div style={{ maxWidth: 1100, width: "100%", margin: "0 auto" }}>
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
          {items.map((item, i) => (
            <ExpertiseCard key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
