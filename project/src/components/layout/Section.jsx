const DEFAULT_SECTION_STYLE = {
  background: "transparent",
  borderTop: `1px solid rgba(72,72,71,0.18)`,
};

export function Section({ id, sectionRef, style, children }) {
  return (
    <section id={id} ref={sectionRef} style={{ ...DEFAULT_SECTION_STYLE, ...style }}>
      {children}
    </section>
  );
}

