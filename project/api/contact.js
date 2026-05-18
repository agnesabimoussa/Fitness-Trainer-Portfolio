// Vercel Serverless Function
// POST /api/contact

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
      if (data.length > 1_000_000) {
        reject(new Error("Payload too large"));
        req.destroy();
      }
    });
    req.on("end", () => {
      if (!data) return resolve({});
      try {
        resolve(JSON.parse(data));
      } catch {
        reject(new Error("Invalid JSON"));
      }
    });
    req.on("error", reject);
  });
}

function json(res, statusCode, payload) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(payload));
}

function isValidEmail(value) {
  if (typeof value !== "string") return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return json(res, 405, { ok: false, error: "Method not allowed" });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO || process.env.REACT_APP_CONTACT_TO || "dibalabimoussa65@gmail.com";
  const from = process.env.CONTACT_FROM;

  if (!resendApiKey) return json(res, 500, { ok: false, error: "Missing RESEND_API_KEY" });
  if (!from) return json(res, 500, { ok: false, error: "Missing CONTACT_FROM" });

  let body;
  try {
    body = req.body && typeof req.body === "object" ? req.body : await readJsonBody(req);
  } catch (err) {
    return json(res, 400, { ok: false, error: err.message || "Invalid request body" });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const goal = typeof body.goal === "string" ? body.goal.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) return json(res, 400, { ok: false, error: "Missing required fields" });
  if (!isValidEmail(email)) return json(res, 400, { ok: false, error: "Invalid email" });

  const subject = `New Coaching Inquiry — ${name || "Website Visitor"}`;
  const text = `Name: ${name}\nEmail: ${email}\nGoal: ${goal}\n\nMessage:\n${message}\n`;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: email,
        subject,
        text,
      }),
    });

    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      const msg = payload?.message || payload?.error || `Resend error (${response.status})`;
      return json(res, 502, { ok: false, error: msg });
    }

    return json(res, 200, { ok: true, id: payload?.id });
  } catch (err) {
    return json(res, 502, { ok: false, error: err.message || "Email provider request failed" });
  }
}

