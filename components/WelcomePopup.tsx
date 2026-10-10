"use client";

import { useEffect, useState, type FormEvent } from "react";
import { WA } from "@/lib/whatsapp";

export default function WelcomePopup() {
  const [open, setOpen] = useState(false);
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    try {
      if (localStorage.getItem("el_popup_dismissed") === "1") return;
    } catch {
      // Continue if browser storage is unavailable.
    }

    const timer = window.setTimeout(() => setOpen(true), 1200);

    return () => window.clearTimeout(timer);
  }, []);

  const close = () => {
    setOpen(false);

    try {
      localStorage.setItem("el_popup_dismissed", "1");
    } catch {
      // The popup still closes if browser storage is unavailable.
    }
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const url = WA.webinar(`${first} ${last}`.trim(), email);
    window.open(url, "_blank", "noopener,noreferrer");

    close();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex animate-fade-in items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md animate-scale-in overflow-hidden rounded-3xl border border-white/10 bg-[oklch(0.19_0.02_40)] p-8 shadow-[0_40px_120px_-20px_var(--primary)]">
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-full p-1 text-foreground/60 transition hover:bg-white/10 hover:text-foreground"
        >
          ✕
        </button>

        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/30 blur-3xl" />

        <h3 className="relative font-display text-2xl font-black">
          Register for the webinar
        </h3>

        <p className="relative mt-2 text-sm text-foreground/60">
          Sunday, July 12 · Free · Live on Zoom
        </p>

        <form className="relative mt-6 grid gap-3" onSubmit={submit}>
          <div className="grid gap-3 md:grid-cols-2">
            <input
              required
              value={first}
              onChange={(event) => setFirst(event.target.value)}
              placeholder="First name"
              autoComplete="given-name"
              className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none focus:border-primary"
            />

            <input
              required
              value={last}
              onChange={(event) => setLast(event.target.value)}
              placeholder="Last name"
              autoComplete="family-name"
              className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none focus:border-primary"
            />
          </div>

          <input
            required
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
            className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none focus:border-primary"
          />

          <button
            type="submit"
            className="mt-2 rounded-full bg-primary py-4 text-sm font-bold uppercase tracking-[0.14em] text-primary-foreground transition hover:brightness-110"
          >
            Continue in WhatsApp →
          </button>

          <p className="text-center text-xs text-foreground/50">
            You&apos;ll be redirected to WhatsApp to confirm your spot.
          </p>
        </form>
      </div>
    </div>
  );
}