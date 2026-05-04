import { NextResponse } from "next/server";
import { SITE } from "@/lib/constants";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function sendWithResend(params: {
  name: string;
  email: string;
  message: string;
}): Promise<{ ok: true } | { ok: false; error: string }> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.RESEND_FROM_EMAIL?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim() || SITE.email;

  if (!apiKey || !from) {
    return { ok: true };
  }

  const subject = `Nieuw bericht via website — ${params.name}`;
  const html = `
    <p><strong>Naam:</strong> ${escapeHtml(params.name)}</p>
    <p><strong>E-mail:</strong> ${escapeHtml(params.email)}</p>
    <p><strong>Bericht:</strong></p>
    <p>${escapeHtml(params.message).replace(/\n/g, "<br/>")}</p>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: params.email,
      subject,
      html,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("[contact] Resend error", res.status, detail);
    return {
      ok: false,
      error: "Bericht kon niet worden verzonden. Probeer later opnieuw.",
    };
  }

  return { ok: true };
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload;
    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const message = (body.message ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Vul alle velden in." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Vul een geldig e-mailadres in." },
        { status: 400 },
      );
    }

    const mail = await sendWithResend({ name, email, message });
    if (!mail.ok) {
      return NextResponse.json(
        { ok: false, error: mail.error },
        { status: 502 },
      );
    }

    if (!process.env.RESEND_API_KEY?.trim()) {
      console.log("[contact] New request (no RESEND_API_KEY)", {
        name,
        email,
        message,
      });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Er ging iets mis. Probeer opnieuw." },
      { status: 500 },
    );
  }
}
