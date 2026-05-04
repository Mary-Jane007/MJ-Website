"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Loader2, Send } from "lucide-react";

type Props = {
  compact?: boolean;
};

type Status =
  | { kind: "idle" }
  | { kind: "success"; message: string }
  | { kind: "error"; message: string };

export function ContactForm({ compact }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    setSubmitting(true);
    setStatus({ kind: "idle" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await res.json()) as { ok: boolean; error?: string };

      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? "Er ging iets mis. Probeer opnieuw.");
      }

      form.reset();
      setStatus({
        kind: "success",
        message: "Bedankt! Ik neem zo snel mogelijk contact met je op.",
      });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Er ging iets mis. Probeer opnieuw.";
      setStatus({ kind: "error", message });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`mx-auto w-full max-w-md space-y-4 ${compact ? "" : "max-w-lg"}`}
    >
      <div>
        <label htmlFor="name" className="mb-1 block text-sm text-earth/70">
          Naam
        </label>
        <input
          id="name"
          name="name"
          required
          className="w-full rounded-card border border-taupe/30 bg-cream px-4 py-3 text-earth outline-none ring-blush/40 transition focus:border-blush focus:ring-2"
          placeholder="Jouw naam"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm text-earth/70">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-card border border-taupe/30 bg-cream px-4 py-3 text-earth outline-none ring-blush/40 transition focus:border-blush focus:ring-2"
          placeholder="jouw@email.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm text-earth/70">
          Bericht
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={compact ? 4 : 6}
          className="w-full resize-none rounded-card border border-taupe/30 bg-cream px-4 py-3 text-earth outline-none ring-blush/40 transition focus:border-blush focus:ring-2"
          placeholder="Vertel kort over je project of wens..."
        />
      </div>
      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={submitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-card-lg bg-earth px-6 py-3.5 font-medium text-cream transition hover:bg-taupe disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Verzenden...
          </>
        ) : (
          <>
            <Send size={18} />
            Verstuur
          </>
        )}
      </motion.button>

      {status.kind === "success" && (
        <p className="text-center text-sm text-blush">{status.message}</p>
      )}
      {status.kind === "error" && (
        <p className="text-center text-sm text-red-700">{status.message}</p>
      )}
    </form>
  );
}
