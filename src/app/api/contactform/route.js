import { prisma } from "@/lib/prisma";
import { SITE } from "@/lib/site";
import { Resend } from "resend";

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not set.");
  }
  return new Resend(apiKey);
}

function emailErrorMessage(error) {
  if (error && typeof error === "object" && "message" in error && error.message) {
    return String(error.message);
  }
  if (error instanceof Error && error.message) {
    return error.message;
  }
  return "We could not send your enquiry. Please email us instead.";
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
    return Response.json(
      { error: "Name and work email are required." },
      { status: 400 }
    );
  }

  if (!isEmail(email)) {
    return Response.json(
      { error: "Please enter a valid work email." },
      { status: 400 }
    );
  }

  const to = process.env.QUOTE_EMAIL;
  const from =
    process.env.RESEND_FROM || `${SITE.name} <onboarding@resend.dev>`;

  if (!to || !isEmail(to)) {
    console.error("[contactform] QUOTE_EMAIL is missing or invalid");
    return Response.json(
      { error: "QUOTE_EMAIL is not configured." },
      { status: 502 }
    );
  }

  try {
    await prisma.contactForm.create({
      data: {
        name,
        company: company || null,
        workEmail: email,
        phone: phone || null,
        projectDescription: message || "Not provided",
      },
    });
  } catch (error) {
    console.error("[contactform] Failed to save enquiry", error);
    return Response.json(
      { error: "We could not save your enquiry. Please try again." },
      { status: 502 }
    );
  }

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2>New Quote Request</h2>
      <p>You have received a new enquiry from your website.</p>
      <hr />
      <p><strong>Name:</strong><br />${escapeHtml(name)}</p>
      <p><strong>Work Email:</strong><br />${escapeHtml(email)}</p>
      <p><strong>Company:</strong><br />${escapeHtml(company || "Not provided")}</p>
      <p><strong>Phone:</strong><br />${escapeHtml(phone || "Not provided")}</p>
      <p><strong>What are they looking to build?</strong><br />${escapeHtml(message || "Not provided").replaceAll("\n", "<br />")}</p>
      <hr />
      <p><strong>Website:</strong> ${escapeHtml(SITE.url)}</p>
    </div>
  `;

  try {
    const { error } = await getResend().emails.send({
      from,
      to,
      replyTo: email,
      subject: `New Quote Request from ${name}`,
      html,
    });

    if (error) {
      console.error("[contactform] Failed to send email", error);
      return Response.json(
        { error: emailErrorMessage(error) },
        { status: 502 }
      );
    }
  } catch (error) {
    console.error("[contactform] Failed to send email", error);
    return Response.json(
      { error: emailErrorMessage(error) },
      { status: 502 }
    );
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
    try {
      const response = await fetch(process.env.QUOTE_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        console.error("[contactform] Webhook failed:", response.status);
      }
    } catch (error) {
      console.error("[contactform] Webhook request failed", error);
    }
  }

  return Response.json({ ok: true });
}
