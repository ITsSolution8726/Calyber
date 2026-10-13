"use client";

import { useEffect, useState, type FormEvent } from "react";
import { WA } from "@/lib/whatsapp";

export default function WelcomePopup() {
  const [open, setOpen] = useState(false);
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [preferredDate, setPreferredDate] = useState("");

  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    // Set today's date as the earliest selectable date.
    const today = new Date();
    const localDate = [
      today.getFullYear(),
      String(today.getMonth() + 1).padStart(2, "0"),
      String(today.getDate()).padStart(2, "0"),
    ].join("-");

    setMinDate(localDate);

    try {
      if (localStorage.getItem("el_popup_dismissed") === "1") {
        return;
      }
    } catch {
      // Continue if browser storage is unavailable.
    }

    const timer = window.setTimeout(() => setOpen(true), 5000);

    return () => window.clearTimeout(timer);
  }, []);

  const close = () => {
    setOpen(false);

    try {
      localStorage.setItem("el_popup_dismissed", "1");
    } catch {
      // The popup still closes if storage is unavailable.
    }
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = `${first.trim()} ${last.trim()}`.trim();

    const formattedDate = new Date(
      `${preferredDate}T12:00:00`,
    ).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    const url = WA.liveDemo(name, email.trim(), formattedDate);

    window.open(url, "_blank", "noopener,noreferrer");

    close();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex animate-fade-in items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm">
      <div className="relative my-auto w-full max-w-md animate-scale-in overflow-hidden rounded-3xl border border-white/10 bg-[oklch(0.19_0.02_40)] p-5 shadow-[0_40px_120px_-20px_var(--primary)] sm:p-8">
        {/* Close Button */}
        <button
          type="button"
          onClick={close}
          aria-label="Close registration popup"
          className="absolute right-4 top-4 z-10 rounded-full p-2 text-foreground/60 transition hover:bg-white/10 hover:text-foreground"
        >
          ✕
        </button>

        {/* Decorative Glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/30 blur-3xl" />

        {/* Heading */}
        <div className="relative">
          <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-primary sm:text-xs">
            Free Live Demo
          </span>

          <h3 className="mt-4 font-display text-2xl font-black sm:text-3xl">
            Experience CALYBER
          </h3>

          <p className="mt-2 text-sm leading-6 text-foreground/60">
            Discover your rhythm, learn new moves, and experience our
            dance training in a live demo class.
          </p>

          <p className="mt-3 text-xs font-medium text-primary">
            Choose your preferred date below.
          </p>
        </div>

        {/* Registration Form */}
        <form className="relative mt-6 grid gap-3" onSubmit={submit}>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <input
              required
              value={first}
              onChange={(event) => setFirst(event.target.value)}
              placeholder="First name"
              autoComplete="given-name"
              aria-label="First name"
              className="min-w-0 rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none transition focus:border-primary"
            />

            <input
              required
              value={last}
              onChange={(event) => setLast(event.target.value)}
              placeholder="Last name"
              autoComplete="family-name"
              aria-label="Last name"
              className="min-w-0 rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none transition focus:border-primary"
            />
          </div>

          <input
            required
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email address"
            autoComplete="email"
            aria-label="Email address"
            className="w-full min-w-0 rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none transition focus:border-primary"
          />

          {/* Calendar Date Picker */}
          <div className="grid gap-2">
            <label
              htmlFor="demo-date"
              className="text-xs font-semibold text-foreground/70"
            >
              Preferred demo date
            </label>

            <input
              id="demo-date"
              required
              type="date"
              min={minDate || undefined}
              value={preferredDate}
              onChange={(event) => setPreferredDate(event.target.value)}
              aria-label="Preferred demo date"
              className="w-full min-w-0 rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary [color-scheme:dark]"
            />
          </div>

          <button
            type="submit"
            className="mt-2 flex min-h-14 w-full items-center justify-center rounded-full bg-primary px-4 py-4 text-center text-sm font-bold uppercase tracking-[0.1em] text-primary-foreground transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:text-base"
          >
            Register via WhatsApp
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </button>

          <p className="text-center text-xs leading-5 text-foreground/50">
            Your details will be sent to WhatsApp so we can help arrange
            your demo class.
          </p>
        </form>
      </div>
    </div>
  );
}
