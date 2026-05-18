export function Container({ maxWidth = 1100, style, className, children }) {
  return (
    <div
      className={className}
      style={{
        maxWidth,
        width: "100%",
        margin: "0 auto",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

