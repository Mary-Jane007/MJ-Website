import { NextResponse } from "next/server";
import { SITE } from "@/lib/constants";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

const MAX_BODY_BYTES = 65_536;
const MAX_NAME = 120;
const MAX_EMAIL = 254;
const MAX_MESSAGE = 6_000;
const RATE_WINDOW_MS = 15 * 60 * 1000;
const RATE_MAX = 12;

declare global {
  // eslint-disable-next-line no-var
  var __contactRateBuckets:
    | Map<string, { count: number; resetAt: number }>
    | undefined;
}

function getBuckets() {
  if (!globalThis.__contactRateBuckets) {
    globalThis.__contactRateBuckets = new Map();
  }
  return globalThis.__contactRateBuckets;
}

function clientIp(req: Request) {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  return req.headers.get("x-real-ip")?.trim() || "unknown";
}

function allowRate(ip: string): boolean {
  const now = Date.now();
  const buckets = getBuckets();
  let b = buckets.get(ip);
  if (!b || now > b.resetAt) {
    b = { count: 0, resetAt: now + RATE_WINDOW_MS };
    buckets.set(ip, b);
  }
  b.count += 1;
  if (b.count > RATE_MAX) return false;
  if (buckets.size > 10_000) buckets.clear();
  return true;
}

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

function truncate(s: string, max: number) {
  if (s.length <= max) return s;
  return `${s.slice(0, max - 1)}…`;
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
    return { ok: false, error: "E-mail is niet geconfigureerd op de server." };
  }

  const subject = truncate(
    `Nieuw bericht via website — ${params.name}`,
    200,
  );
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

export async function GET() {
  return NextResponse.json(
    { ok: false, error: "Method not allowed." },
    { status: 405, headers: { Allow: "POST" } },
  );
}

export async function POST(req: Request) {
  try {
    const len = req.headers.get("content-length");
    if (len && Number.parseInt(len, 10) > MAX_BODY_BYTES) {
      return NextResponse.json(
        { ok: false, error: "Bericht is te groot." },
        { status: 413 },
      );
    }

    const ip = clientIp(req);
    if (!allowRate(ip)) {
      return NextResponse.json(
        { ok: false, error: "Te veel verzoeken. Probeer het later opnieuw." },
        { status: 429 },
      );
    }

    const isProd = process.env.NODE_ENV === "production";
    const hasResend =
      Boolean(process.env.RESEND_API_KEY?.trim()) &&
      Boolean(process.env.RESEND_FROM_EMAIL?.trim());

    if (isProd && !hasResend) {
      console.error("[contact] Production but Resend env vars missing");
      return NextResponse.json(
        {
          ok: false,
          error:
            "Het contactformulier is tijdelijk niet beschikbaar. Mail direct of probeer later opnieuw.",
        },
        { status: 503 },
      );
    }

    const body = (await req.json()) as ContactPayload;
    const name = truncate((body.name ?? "").trim(), MAX_NAME);
    const email = truncate((body.email ?? "").trim(), MAX_EMAIL);
    const message = truncate((body.message ?? "").trim(), MAX_MESSAGE);

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

    if (isProd) {
      const mail = await sendWithResend({ name, email, message });
      if (!mail.ok) {
        return NextResponse.json(
          { ok: false, error: mail.error },
          { status: 502 },
        );
      }
    } else if (hasResend) {
      const mail = await sendWithResend({ name, email, message });
      if (!mail.ok) {
        return NextResponse.json(
          { ok: false, error: mail.error },
          { status: 502 },
        );
      }
    } else {
      console.log("[contact] Dev — Resend niet ingesteld; bericht niet verstuurd.");
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Er ging iets mis. Probeer opnieuw." },
      { status: 500 },
    );
  }
}
