import { COLORS } from "../constants/colors";
import { useIsMobile } from "../hooks/useMediaQuery";
import { TimelineItem } from "../components/TimelineItem";

export function Experience() {
  const isMobile = useIsMobile();

  const timeline = [
    {
      years: "2024",
      role: "Personal Trainer Certification",
      place: "Sports Academy School, Lebanon",
      description:
        "Completed formal personal trainer certification, qualifying as a certified coach with expertise in program design, client assessment, and training methodology.",
    },
    {
      years: "2025",
      role: "Sport Nutrition Specialist",
      place: "CIS College",
      description:
        "Specialized training in sports nutrition, enabling evidence-based nutritional guidance across diverse athletic populations and fitness goals.",
    },
    {
      years: "2025",
      role: "Post-Rehabilitation Specialist",
      place: "Performex Academy of Health & Fitness",
      description:
        "Advanced workshop in post-rehabilitation techniques from the American Council on Exercise, enabling safe progression for recovering clients.",
    },
    {
      years: "2025",
      role: "Fitness & Tech Summit Attendee",
      place: "NCSF Middle East (Miami Fitness Factory)",
      description:
        "Professional development in cutting-edge fitness technology and innovation, earning 3 NCSF CEUs and staying current with industry trends.",
    },
    {
      years: "Active",
      role: "EREPS Registered Professional",
      place: "EREPS (European Register of Exercise Professionals)",
      description:
        "Internationally registered Exercise Professional specializing in Exercise in Pregnancy and PostPartum (EQF Level 5). Meets European standards and is bound by code of ethical practice.",
    },
    {
      years: "Current",
      role: "Freelance Coach & Performance Specialist",
      place: "Independent Practice",
      description:
        "Training 500+ clients with expertise in body recomposition, strength & conditioning, post-rehabilitation, prenatal/postnatal training, and sports nutrition. Delivering personalized, evidence-based programming.",
    },
  ];

  return (
    <section
      id="experience"
      style={{
        background: "transparent",
        borderTop: `1px solid rgba(72,72,71,0.18)`,
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1100, width: "100%", margin: "0 auto" }}>
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
          {timeline.map((item, i) => (
            <TimelineItem key={i} {...item} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}
