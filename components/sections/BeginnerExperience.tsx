
"use client";

import { useEffect, useState } from "react";
import { WA } from "@/lib/whatsapp";

type PricingRegion = "loading" | "india" | "international" | "unavailable";

const benefits = [
  "16 Live Classes Over 8 Weeks",
  "Weekly Practice Plans & Assignments",
  "Recorded Sessions for Revision",
  "Progress Tracking & Community Support",
  "Certificate on Completion",
];

const pricingDetails = [
  { label: "Format", value: "3 Live Zoom Sessions / week" },
  { label: "Duration", value: "60+ Minutes Each" },
  { label: "Batch Size", value: "Max 15 Students" },
  { label: "Includes", value: "Roadmap + Feedback + Community" },
];

export default function BeginnerExperience() {
  const [region, setRegion] = useState<PricingRegion>("loading");

  useEffect(() => {
    const controller = new AbortController();

    async function detectCountry() {
      try {
        const response = await fetch("/api/visitor-country", {
          cache: "no-store",
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Country detection unavailable");
        }

        const data: { country?: string } = await response.json();

        if (!data.country || !/^[A-Z]{2}$/.test(data.country)) {
          throw new Error("Invalid country code");
        }

        setRegion(data.country === "IN" ? "india" : "international");
      } catch {
        if (!controller.signal.aborted) {
          setRegion("unavailable");
        }
      }
    }

    detectCountry();

    return () => controller.abort();
  }, []);

  const isIndia = region === "india";
  const hasPricing = region === "india" || region === "international";

  const price = isIndia ? "₹1,999" : "$49";
  const originalPrice = isIndia ? "₹4,499" : "$89";
  const currency = isIndia ? "INR" : "USD";
  const savings = isIndia ? "Save ₹2,500" : "Save $40";

  const whatsappUrl = hasPricing
    ? WA.foundationPricing(price, originalPrice, currency)
    : WA.question;

  return (
    <section
      id="beginner"
      className="relative isolate overflow-hidden py-14 sm:py-20 md:py-24 lg:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-20" />

      <div className="pointer-events-none absolute -left-32 top-0 -z-10 h-64 w-64 rounded-full bg-primary/20 blur-[100px] sm:-left-40 sm:h-80 sm:w-80 sm:blur-[120px] lg:h-[400px] lg:w-[400px] lg:blur-[140px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-[100px] sm:-right-40 sm:h-96 sm:w-96 sm:blur-[120px] lg:h-[450px] lg:w-[450px] lg:blur-[140px]" />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:gap-12 sm:px-6 md:gap-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] lg:gap-12 lg:px-8 xl:gap-16">
        {/* LEFT CONTENT */}
        <div className="min-w-0">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-primary sm:text-xs sm:tracking-[0.3em]">
            CALYBER Foundation Program
          </span>

          <h2 className="mt-4 break-words font-display text-3xl font-black leading-[1.1] sm:mt-5 sm:text-4xl sm:leading-tight md:text-5xl lg:text-5xl xl:text-6xl">
            Master the{" "}
            <span className="text-primary">Basics.</span>
            <br className="hidden sm:block" />{" "}
            <span className="sm:whitespace-nowrap">
              Dance with Confidence.
            </span>
          </h2>

          <h3 className="mt-4 text-xl font-black leading-snug text-foreground/40 sm:text-2xl md:text-3xl">
            8 Weeks. 16 Live Classes.
          </h3>

          <p className="mt-4 max-w-xl text-sm leading-6 text-foreground/70 sm:mt-5 sm:text-base sm:leading-7 md:text-lg">
            Build your hip-hop dance foundation with CALYBER&apos;s structured
            beginner program. Develop rhythm, movement, and body control
            through guided classes, practical assignments, and consistent
            feedback.
          </p>

          {/* Benefits */}
          <div className="mt-7 grid gap-3 sm:mt-8 sm:gap-4">
            {benefits.map((item) => (
              <div
                key={item}
                className="flex min-w-0 items-start gap-3 sm:items-center sm:gap-4"
              >
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 sm:mt-0 sm:h-7 sm:w-7">
                  <span className="text-xs text-primary sm:text-sm">✓</span>
                </div>

                <span className="min-w-0 text-sm leading-6 text-foreground/85 sm:text-base">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT PRICING CARD */}
        <div className="relative mx-auto w-full min-w-0 max-w-xl lg:max-w-none">
          <div className="pointer-events-none absolute -inset-2 rounded-[28px] bg-primary/15 blur-2xl sm:-inset-4 sm:rounded-[40px] sm:blur-3xl" />

          <div className="relative min-w-0 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl sm:rounded-[32px] sm:p-7 md:p-8 lg:rounded-[36px] lg:p-8 xl:p-10">
            {/* Offer Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-4 py-2 shadow-[0_0_25px_var(--primary)] sm:mb-6">
              <span
                className="text-base"
                aria-hidden="true"
              >
                🎉
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.15em] text-primary sm:text-xs sm:tracking-[0.2em]">
                Durga Puja Special Offer
              </span>
            </div>

            <span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/50 sm:text-xs sm:tracking-[0.3em]">
              {region === "loading"
                ? "Checking Regional Price"
                : region === "unavailable"
                  ? "Contact Us for Pricing"
                  : isIndia
                    ? "India Offer Price · INR"
                    : "International Offer Price · USD"}
            </span>

            {/* Price: never show a regional price before detection */}
            {region === "loading" ? (
              <div
                className="mt-3 space-y-3"
                role="status"
                aria-live="polite"
              >
                <div className="h-14 w-48 animate-pulse rounded-xl bg-white/10 sm:h-16" />
                <p className="text-sm text-foreground/60">
                  Finding the correct price for your location…
                </p>
              </div>
            ) : hasPricing ? (
              <>
                <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1 sm:gap-x-4">
                  <span className="font-display text-5xl font-black leading-none tracking-tight sm:text-6xl md:text-7xl">
                    {price}
                  </span>

                  <span className="text-base text-foreground/40 line-through sm:text-lg md:text-xl">
                    {originalPrice}
                  </span>
                </div>

                <p className="mt-3 flex flex-wrap items-center gap-2 text-xs leading-5 sm:text-sm">
                  <span className="rounded-md bg-green-500/15 px-2 py-1 font-bold text-green-400">
                    {savings}
                  </span>
                  <span className="text-foreground/60">
                    Limited seats available
                  </span>
                </p>
              </>
            ) : (
              <p className="mt-4 text-sm leading-6 text-foreground/70">
                We couldn&apos;t determine your regional pricing automatically.
                Contact us on WhatsApp to confirm the correct price for your
                location.
              </p>
            )}

            {/* Pricing Details */}
            <div className="mt-7 space-y-0 sm:mt-9">
              {pricingDetails.map((detail, index) => (
                <div
                  key={detail.label}
                  className={`grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] items-start gap-3 py-4 sm:gap-4 ${
                    index !== pricingDetails.length - 1
                      ? "border-b border-white/10"
                      : ""
                  }`}
                >
                  <span className="text-sm leading-6 text-foreground/60">
                    {detail.label}
                  </span>

                  <span className="break-words text-right text-sm font-semibold leading-6 sm:text-base">
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={region === "loading"}
              onClick={(event) => {
                if (region === "loading") {
                  event.preventDefault();
                }
              }}
              className={`mt-6 flex min-h-14 w-full items-center justify-center rounded-full px-4 py-4 text-center text-sm font-bold leading-5 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:mt-8 sm:min-h-16 sm:px-6 sm:text-base md:text-lg ${
                region === "loading"
                  ? "cursor-wait bg-primary/40 text-primary-foreground/70"
                  : "bg-primary text-primary-foreground hover:brightness-110"
              }`}
            >
              {region === "loading"
                ? "Checking Price…"
                : hasPricing
                  ? "Reserve My Seat"
                  : "Ask for Pricing"}
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </a>

            <p className="mt-4 text-center text-[11px] leading-5 text-foreground/40 sm:mt-5 sm:text-xs">
              {hasPricing
                ? `Prices shown in ${currency}. Contact us for enrollment details.`
                : "We'll help you confirm pricing and enrollment details."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
