
"use client";

import { WA } from "@/lib/whatsapp";

const benefits = [
  "16 Live Classes Over 8 Weeks",
  "Weekly Practice Plans & Assignments",
  "Recorded Sessions for Revision",
  "Progress Tracking & Community Support",
  "Certificate on Completion",
];

const pricingDetails = [
  { label: "Format", value: "2 Live Zoom Sessions" },
  { label: "Duration", value: "60 Minutes Each" },
  { label: "Batch Size", value: "Max 25 Students" },
  { label: "Includes", value: "Roadmap + Community" },
];

export default function BeginnerExperience() {
  return (
    <section id="beginner" className="relative overflow-hidden py-28">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
      <div className="pointer-events-none absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-primary/20 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-primary/10 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.2fr_0.9fr]">
        {/* LEFT CONTENT */}
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
            CALYBER Foundation Program
          </span>

          <h2 className="mt-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Master the
            <span className="text-primary"> Basics.</span>
            <br />
            Dance with Confidence.
          </h2>

          <h3 className="mt-4 text-2xl font-black text-foreground/40 md:text-3xl">
            8 Weeks. 16 Live Classes.
          </h3>

          <p className="mt-5 max-w-xl text-base leading-7 text-foreground/70 md:text-lg">
            Build your hip-hop dance foundation with CALYBER's structured
            beginner program. Develop rhythm, movement, and body control
            through guided classes, practical assignments, and consistent
            feedback.
          </p>

          <div className="mt-8 grid gap-4">
            {benefits.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15">
                  <span className="text-sm text-primary">✓</span>
                </div>

                <span className="text-sm leading-6 text-foreground/85 md:text-base">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT PRICING CARD — UNCHANGED */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-[40px] bg-primary/15 blur-3xl" />

          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-xl">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">
              From
            </span>

            <div className="mt-3 flex items-end gap-4">
              <span className="font-display text-7xl font-black">₹2,499</span>

              <span className="mb-3 text-xl text-foreground/40 line-through">
                ₹4,499
              </span>
            </div>

            <p className="mt-3 text-sm text-foreground/60">
              Introductory pricing • Limited seats available
            </p>

            <div className="mt-10 space-y-6">
              {pricingDetails.map((detail, index) => (
                <div
                  key={detail.label}
                  className={`flex justify-between gap-4 ${index === pricingDetails.length - 1
                    ? "pb-2"
                    : "border-b border-white/10 pb-4"
                    }`}
                >
                  <span className="text-foreground/60">
                    {detail.label}
                  </span>

                  <span className="text-right font-semibold">
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>

            <a
              href={WA.lightning}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 flex h-16 w-full items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground transition hover:scale-[1.02] hover:brightness-110"
            >
              Reserve My Seat →
            </a>

            <p className="mt-5 text-center text-xs text-foreground/40">
              No spam. Just workshop details.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}