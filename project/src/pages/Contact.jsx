import { useState } from "react";
import { COLORS } from "../constants/colors";
import { useInView } from "../hooks/useInView";
import { useIsMobile } from "../hooks/useMediaQuery";
import { Section } from "../components/layout/Section";
import { Container } from "../components/layout/Container";

export function Contact() {
  const [ref, inView] = useInView();
  const isMobile = useIsMobile();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    goal: "Strength Gain",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitDebug, setSubmitDebug] = useState("");

  const recipient = process.env.REACT_APP_CONTACT_TO || "dibalabimoussa65@gmail.com";
  const apiUrl = process.env.REACT_APP_CONTACT_API_URL || "/api/contact";
  const mailtoHref = `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(
    "New Coaching Inquiry"
  )}&body=${encodeURIComponent(
    `Name: ${formState.name}\nEmail: ${formState.email}\nGoal: ${formState.goal}\n\n${formState.message}`
  )}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    setSubmitError("");
    setSubmitDebug("");

    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          goal: formState.goal,
          message: formState.message,
        }),
      });

      let payload = null;
      try {
        payload = await res.json();
      } catch {
        // Ignore JSON parse failures; fall back to status handling.
      }

      if (!res.ok) {
        const detail = payload?.message || payload?.error || "Submission failed";
        throw new Error(detail);
      }

      if (payload && payload.ok === false) throw new Error(payload.error || "Submission failed");

      setSubmitted(true);
    } catch (err) {
      setSubmitError("Something went wrong sending your message. Please try again.");
      if (err?.message) setSubmitDebug(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle = {
    width: "100%",
    background: COLORS.surfaceHigh,
    border: "none",
    borderBottom: `2px solid transparent`,
    padding: "16px 20px",
    borderRadius: 12,
    fontFamily: "Inter, sans-serif",
    fontSize: 14,
    color: COLORS.onSurface,
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
  };

  return (
    <Section id="contact" sectionRef={ref} style={{ position: "relative", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          top: "-20%",
          right: "-15%",
          width: "50%",
          height: "70%",
          background: `radial-gradient(ellipse, rgba(0,227,253,0.04) 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth={580}
        style={{
          position: "relative",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: isMobile ? 40 : 60 }}>
          <h2
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 900,
              fontSize: isMobile ? "clamp(28px, 5vw, 36px)" : "clamp(36px, 5vw, 60px)",
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              color: COLORS.onSurface,
              marginBottom: 16,
            }}
          >
            GET STARTED
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: isMobile ? 13 : 15,
              color: COLORS.onSurfaceVariant,
              lineHeight: 1.6,
            }}
          >
            The first step is often the heaviest. Let's make it count.
          </p>
        </div>

        {submitted ? (
          <div
            style={{
              textAlign: "center",
              padding: "60px 40px",
              background: COLORS.surfaceLow,
              borderRadius: 16,
              border: `1px solid rgba(0,227,253,0.2)`,
            }}
          >
            <div
              aria-hidden="true"
              style={{
                width: 56,
                height: 56,
                margin: "0 auto 18px auto",
                borderRadius: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(0,227,253,0.10)",
                border: "1px solid rgba(0,227,253,0.22)",
                boxShadow: "0 18px 44px rgba(0,0,0,0.30)",
              }}
            >
              <span style={{ fontSize: 22, color: COLORS.secondary, fontWeight: 900, lineHeight: 1 }}>✓</span>
            </div>
            <h3
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 800,
                fontSize: 24,
                color: COLORS.secondary,
                marginBottom: 12,
              }}
            >
              Thank you for your interest.
            </h3>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 14,
                color: COLORS.onSurfaceVariant,
              }}
            >
              We will get in touch soon. If you don't hear back, please check your spam folder or reach out on social.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: 20 }}
            className="contact-grid"
          >
            {submitError ? (
              <div
                style={{
                  padding: "14px 16px",
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: COLORS.onSurfaceVariant,
                  fontFamily: "Inter, sans-serif",
                  fontSize: 13,
                  lineHeight: 1.5,
                }}
              >
                {submitError}
                {submitDebug ? (
                  <div style={{ marginTop: 8, opacity: 0.8, fontSize: 12, wordBreak: "break-word" }}>
                    {submitDebug}
                  </div>
                ) : null}
                <a
                  href={mailtoHref}
                  style={{
                    display: "inline-block",
                    marginTop: 10,
                    fontSize: 12,
                    color: COLORS.primary,
                    textDecoration: "none",
                    letterSpacing: "0.02em",
                  }}
                >
                  Or email us directly
                </a>
              </div>
            ) : null}

            <div>
              <label
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 9,
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: COLORS.primary,
                  display: "block",
                  marginBottom: 8,
                  marginLeft: 4,
                }}
              >
                Full Name
              </label>
              <input
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderBottomColor = COLORS.primary)}
                onBlur={(e) => (e.target.style.borderBottomColor = "transparent")}
              />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                gap: 16,
              }}
            >
              <div>
                <label
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 9,
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: COLORS.primary,
                    display: "block",
                    marginBottom: 8,
                    marginLeft: 4,
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderBottomColor = COLORS.primary)}
                  onBlur={(e) => (e.target.style.borderBottomColor = "transparent")}
                />
              </div>

              <div>
                <label
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 9,
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: COLORS.primary,
                    display: "block",
                    marginBottom: 8,
                    marginLeft: 4,
                  }}
                >
                  Primary Goal
                </label>
                <select
                  value={formState.goal}
                  onChange={(e) => setFormState({ ...formState, goal: e.target.value })}
                  style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
                  onFocus={(e) => (e.target.style.borderBottomColor = COLORS.primary)}
                  onBlur={(e) => (e.target.style.borderBottomColor = "transparent")}
                >
                  <option>Strength Gain</option>
                  <option>Fat Loss</option>
                  <option>Athletic Performance</option>
                  <option>Mobility & Recovery</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div>
              <label
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 9,
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: COLORS.primary,
                  display: "block",
                  marginBottom: 8,
                  marginLeft: 4,
                }}
              >
                Message
              </label>
              <textarea
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                style={{ ...inputStyle, resize: "vertical" }}
                onFocus={(e) => (e.target.style.borderBottomColor = COLORS.primary)}
                onBlur={(e) => (e.target.style.borderBottomColor = "transparent")}
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              style={{
                width: "100%",
                background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDim})`,
                color: COLORS.onPrimary,
                border: "none",
                padding: isMobile ? "18px 20px" : "20px",
                borderRadius: 999,
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 800,
                fontSize: isMobile ? 10 : 11,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                cursor: "pointer",
                boxShadow: `0 20px 60px ${COLORS.primary}30`,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                marginTop: 8,
                opacity: submitting ? 0.7 : 1,
              }}
              onMouseEnter={(e) => {
                if (submitting) return;
                e.target.style.transform = "scale(1.08) translateY(-3px)";
                e.target.style.boxShadow = `0 28px 60px ${COLORS.primary}50`;
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1) translateY(0)";
                e.target.style.boxShadow = `0 20px 60px ${COLORS.primary}30`;
              }}
            >
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </Container>
    </Section>
  );
}
