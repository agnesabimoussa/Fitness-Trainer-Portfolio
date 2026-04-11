import { COLORS } from "../constants/colors";
import { TimelineItem } from "../components/TimelineItem";

export function Experience() {
  const isMobile = window.innerWidth < 768;
  const timeline = [
    {
      years: "2020–2024",
      role: "Elite Performance Lead",
      place: "Vanguard Athletics, NYC",
      description:
        "Managing a roster of 40+ professional athletes and executive clients with a focus on longevity, power, and peak metabolic output.",
    },
    {
      years: "2016–2020",
      role: "Head Strength Coach",
      place: "The Iron Vault",
      description:
        "Developed the 'Kinetic Precision' framework for amateur bodybuilders and powerlifters. Built the program from 12 to 200+ members.",
    },
    {
      years: "2012–2016",
      role: "Movement Specialist",
      place: "Global Fitness Group",
      description:
        "Consulted on biomechanics for group training programs and recovery protocols across 8 international locations.",
    },
  ];

  return (
    <section
      id="experience"
      style={{
        background: COLORS.surfaceLow,
        padding: isMobile ? "60px 24px" : "120px 60px",
        overflow: "hidden",
      }}
    >
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

      <div style={{ maxWidth: 700 }} className="experience-grid">
        {timeline.map((item, i) => (
          <TimelineItem key={i} {...item} delay={i * 0.15} />
        ))}
      </div>
    </section>
  );
}
