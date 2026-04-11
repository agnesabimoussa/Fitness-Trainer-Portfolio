import { COLORS } from "../constants/colors";
import { useInView } from "../hooks/useInView";
import { ExpertiseCard } from "../components/ExpertiseCard";

export function Expertise() {
  const [ref, inView] = useInView();

  const items = [
    {
      icon: "⚡",
      title: "HIIT",
      description:
        "Metabolic conditioning designed to push VO2 max limits and incinerate adipose tissue through high-intensity intervals.",
    },
    {
      title: "STRENGTH TRAINING",
      description:
        "The core of performance. Progressive overload protocols focused on compound movements and neuromuscular efficiency.",
      imageUrl:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=400&fit=crop",
      wide: true,
    },
    {
      icon: "🥗",
      title: "NUTRITION COACHING",
      description:
        "Precision fueling is 70% of the battle. Bespoke macronutrient mapping tailored to your specific metabolic rate and performance goals.",
      wide: true,
    },
    {
      icon: "🧘",
      title: "MOBILITY & RECOVERY",
      description:
        "Systematic mobility protocols and evidence-based recovery strategies to keep you training at peak capacity long-term.",
    },
  ];

  return (
    <section
      id="expertise"
      ref={ref}
      style={{
        background: COLORS.surface,
        padding: "120px 60px",
      }}
    >
      <p
        style={{
          fontFamily: "Manrope, sans-serif",
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.4em",
          textTransform: "uppercase",
          color: COLORS.primary,
          marginBottom: 48,
          opacity: inView ? 1 : 0,
          transform: inView ? "none" : "translateY(20px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        Expertise Hub
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
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
    </section>
  );
}
