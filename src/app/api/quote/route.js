import { SITE } from "@/lib/site";

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const company = String(body.company || "").trim();
  const phone = String(body.phone || "").trim();
  const message = String(body.message || "").trim();

  if (!name || !email) {
    return Response.json({ error: "Name and work email are required." }, { status: 400 });
  }
  if (!isEmail(email)) {
    return Response.json({ error: "Please enter a valid work email." }, { status: 400 });
  }

  const payload = {
    name,
    email,
    company,
    phone,
    message,
    receivedAt: new Date().toISOString(),
    source: SITE.url,
  };

  if (process.env.QUOTE_WEBHOOK_URL) {
    const response = await fetch(process.env.QUOTE_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      return Response.json(
        { error: "We could not deliver that just now. Please email info@terioatinfotech.com." },
        { status: 502 },
      );
    }
  } else {
    console.info("[quote]", payload);
  }

  return Response.json({ ok: true });
}
