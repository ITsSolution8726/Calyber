"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const heroDancer = "./hero-dancer.jpg";
const singaPortrait = "./singa-portrait.jpg";
const foundationVibe = "./foundation-vibe.jpg";
const mentorshipImg = "./mentorship.jpg";
const WHATSAPP_NUMBER = "10000000000";
const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
const WHATSAPP_URL = waLink(
  "Hi CALYBER — I'd like more info about the program.",
);

// Prefilled WhatsApp messages per intent — helps the user & preloads context for the team.
const WA = {
  lightning: waLink(
    "Hi Akash Swami! I'd like to join the LIGHTNING package ($249) — Electro Foundation. Can you send me the next steps?",
  ),
  thunderbolt: waLink(
    "Hi Akash Swami! I'd like to apply for the THUNDERBOLT package ($649) with personal mentorship. Can you tell me if a mentorship spot is still open?",
  ),
  webinar: (name = "", email = "") =>
    waLink(
      `Hi! I want to register for the free CALYBER webinar (Sun, July 12).\nName: ${name}\nEmail: ${email}`,
    ),
  question: waLink("Hi! I have a question about CALYBER before I join."),
  foundation: waLink(
    "Hi! Tell me more about the Electro Foundation WhatsApp library.",
  ),
  mentorship: waLink(
    "Hi Akash Swami! I'd like details on the personal mentorship track (THUNDERBOLT).",
  ),
  float: waLink("Hi CALYBER 👋 I'm on the site and have a quick question."),
};

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!ref.current || shown) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "-10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shown]);
  return { ref, shown };
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}s` }}
      className={`${shown ? "animate-fade-up" : "opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
}

function useCountdown(target: Date) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target.getTime() - now);
  const d = Math.floor(diff / 86_400_000);
  const h = Math.floor((diff % 86_400_000) / 3_600_000);
  const m = Math.floor((diff % 3_600_000) / 60_000);
  const s = Math.floor((diff % 60_000) / 1000);
  return { d, h, m, s };
}

function Dot({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-block h-1.5 w-1.5 rounded-full bg-primary ${className}`}
    />
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/3 px-3 py-1.5 text-xs uppercase tracking-[0.14em] text-foreground/80">
      <Dot />
      {children}
    </span>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-display text-sm font-black tracking-[0.14em]"
        >
          <span className="text-primary">CALYBER</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-foreground/80 md:flex">
          <a href="#pricing" className="hover:text-foreground">
            Pricing
          </a>
          <a href="#foundation" className="hover:text-foreground">
            Foundation
          </a>
          <a href="#mentorship" className="hover:text-foreground">
            Mentorship
          </a>
          <a href="#about" className="hover:text-foreground">
            About
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden overflow-hidden rounded-full border border-white/15 text-xs md:flex">
            <button className="bg-primary px-3 py-1.5 font-semibold text-primary-foreground">
              EN
            </button>
            <button className="px-3 py-1.5 text-foreground/70">RU</button>
          </div>
          <a
            href="#pricing"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_-8px_var(--primary)] transition hover:brightness-110"
          >
            Choose access →
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${heroDancer})` }}
      />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-background/70 via-background/60 to-background" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute -right-40 top-0 h-150 w-150 animate-float-slow rounded-full bg-primary/25 blur-[140px]" />
      <div
        className="pointer-events-none absolute -left-40 bottom-0 h-125 w-125 animate-float-slow rounded-full bg-lightning/20 blur-[140px]"
        style={{ animationDelay: "1.5s" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-24">
        <div className="animate-fade-up">
          <Chip>Two packages · 3 months WhatsApp access</Chip>
        </div>
        <h1
          className="mt-8 animate-fade-up font-display text-[15vw] font-black leading-[0.9] tracking-tight md:text-[10rem]"
          style={{ animationDelay: "0.1s" }}
        >
          {/* <span className="block">ELECTRO</span> */}
          <span className="block italic text-shimmer drop-shadow-[0_0_40px_var(--primary)]">
            CALYBER<span className="text-foreground">.</span>
          </span>
        </h1>
        <p
          className="mt-10 max-w-2xl animate-fade-up text-2xl font-semibold md:text-3xl"
          style={{ animationDelay: "0.25s" }}
        >
          Build your foundation.{" "}
          <span className="italic text-pink">Find your own style.</span>
        </p>
        <p
          className="mt-6 max-w-xl animate-fade-up text-base text-foreground/70"
          style={{ animationDelay: "0.35s" }}
        >
          A private WhatsApp library, weekly live group Zoom calls and an
          international practice community — with an optional personal
          mentorship track.
        </p>

        <div
          className="mt-12 grid animate-fade-up gap-5 md:grid-cols-2"
          style={{ animationDelay: "0.45s" }}
        >
          <PackageCard
            tone="lightning"
            title="LIGHTNING"
            price="$249"
            old="$279"
            body="Electro Foundation — private WhatsApp library + weekly group Zoom."
            cta="Join lightning →"
            href={WA.lightning}
          />
          <PackageCard
            tone="bolt"
            title="THUNDERBOLT"
            price="$649"
            old="$749"
            badge="Mentorship"
            body="Everything in LIGHTNING + personal WhatsApp support and 1-on-1 mentorship."
            cta="Apply for thunderbolt →"
            href={WA.thunderbolt}
          />
        </div>

        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.14em] text-foreground/60">
          <span>· ENG / RUS</span>
          <span>· 3 months WhatsApp access</span>
          <span>· 4 live group Zoom calls</span>
          <span>· By Akash Swami (Move&Prove)</span>
        </div>

        <div
          className="mt-14 grid animate-fade-up grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-4"
          style={{ animationDelay: "0.6s" }}
        >
          {[
            { k: "15+", v: "Years in the style" },
            { k: "3×", v: "World Champion 1×1" },
            { k: "20+", v: "Countries taught" },
            { k: "500+", v: "Dancers mentored" },
          ].map((s) => (
            <div key={s.v} className="bg-background p-5">
              <div className="font-display text-2xl font-black text-primary md:text-3xl">
                {s.k}
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.14em] text-foreground/60">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemSolution() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <Chip>Why CALIBAR</Chip>

          <h2 className="mt-6 font-display text-4xl font-black leading-tight md:text-6xl">
            Most beginners don't have a
            <span className="text-primary"> talent problem.</span>
            <br />
            They have a
            <span className="text-lightning"> learning system problem.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-foreground/70">
            Most dance classes teach choreography first. Students memorize
            shapes without understanding rhythm, groove or body control. CALIBAR
            changes that by teaching the foundation before the moves.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {/* OLD WAY */}

          <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-8">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/10 text-xl text-red-400">
                ✕
              </div>

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-red-400">
                The Old Way
              </span>
            </div>

            <h3 className="text-3xl font-display font-black">
              Learn Choreography First
            </h3>

            <div className="mt-8 space-y-5">
              {[
                "Copy combinations without understanding music.",
                "Poor rhythm and weak body control.",
                "Forget routines after a few weeks.",
                "Progress becomes slow and frustrating.",
                "Freestyle feels impossible.",
              ].map((item) => (
                <div key={item} className="flex gap-4">
                  <div className="mt-2 h-2.5 w-2.5 rounded-full bg-red-400" />

                  <p className="text-foreground/75">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CALIBAR */}

          <div className="rounded-3xl border border-primary/30 bg-primary/5 p-8 shadow-[0_0_60px_rgba(112,82,255,.08)]">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                ✓
              </div>

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                The CALIBAR Way
              </span>
            </div>

            <h3 className="text-3xl font-display font-black">
              Build the System First
            </h3>

            <div className="mt-8 space-y-5">
              {[
                "Understand rhythm before choreography.",
                "Develop groove, bounce and musicality.",
                "Train body control step by step.",
                "Build confidence through repetition.",
                "Freestyle becomes natural.",
              ].map((item) => (
                <div key={item} className="flex gap-4">
                  <div className="mt-2 h-2.5 w-2.5 rounded-full bg-primary" />

                  <p className="text-foreground/75">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BeginnerExperience() {
  return (
    <section id="beginner" className="relative overflow-hidden py-28">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
      <div className="pointer-events-none absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-primary/20 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-primary/10 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.2fr_0.9fr]">
        {/* LEFT CONTENT */}

        <div>
          <span className="text-xs font-bold uppercase tracking-[0.35em] text-primary">
            Beginner Experience
          </span>

          <h2 className="mt-6 font-display text-5xl font-black leading-tight md:text-7xl">
            Feel the <span className="text-primary">CALYBER</span> system in
            <br />
            just 2 sessions.
          </h2>

          <h3 className="mt-4 text-4xl font-black text-foreground/40 md:text-5xl">
            For just ₹99.
          </h3>

          <p className="mt-8 max-w-xl text-lg leading-8 text-foreground/70">
            Experience our structured dance learning system before joining the
            complete program. Learn directly from
            <span className="font-semibold text-primary"> Akash Swami</span>,
            receive personal guidance and discover how CALYBER helps dancers
            improve faster.
          </p>

          <div className="mt-10 grid gap-5">
            {[
              "2 Live Interactive Zoom Sessions",
              "Personal Dance Assessment",
              "CALYBER Learning System Explained",
              "Custom Practice Roadmap",
              "Live Feedback from Akash Swami",
              "Private Community Access",
            ].map((item) => (
              <div key={item} className="flex items-center gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15">
                  <span className="text-primary">✓</span>
                </div>

                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CARD */}

        <div className="relative">
          <div className="absolute -inset-4 rounded-[40px] bg-primary/15 blur-3xl" />

          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-xl">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">
              From
            </span>

            <div className="mt-3 flex items-end gap-4">
              <span className="font-display text-7xl font-black">₹99</span>

              <span className="mb-3 text-xl text-foreground/40 line-through">
                ₹499
              </span>
            </div>

            <p className="mt-3 text-sm text-foreground/60">
              Introductory pricing • Limited seats available
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-foreground/60">Format</span>

                <span className="font-semibold">2 Live Zoom Sessions</span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-foreground/60">Duration</span>

                <span className="font-semibold">60 Minutes Each</span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-foreground/60">Batch Size</span>

                <span className="font-semibold">Max 25 Students</span>
              </div>

              <div className="flex justify-between pb-2">
                <span className="text-foreground/60">Includes</span>

                <span className="font-semibold">Roadmap + Community</span>
              </div>
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

function PackageCard({
  tone,
  title,
  price,
  old,
  badge,
  body,
  cta,
  href,
}: {
  tone: "lightning" | "bolt";
  title: string;
  price: string;
  old: string;
  badge?: string;
  body: string;
  cta: string;
  href: string;
}) {
  const bg =
    tone === "lightning"
      ? "bg-[color:var(--lightning)] text-[color:var(--lightning-foreground)]"
      : "bg-[color:var(--bolt)] text-[color:var(--bolt-foreground)]";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative block overflow-hidden rounded-3xl p-6 ${bg} shadow-[0_20px_80px_-30px_rgba(0,0,0,0.7)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_100px_-30px_rgba(0,0,0,0.9)]`}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      {badge && (
        <span className="absolute right-4 top-4 rounded-full bg-black/25 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em]">
          {badge}
        </span>
      )}
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-2xl font-black tracking-tight">
          {title}
        </h3>
        <div className="text-right">
          <div className="font-display text-3xl font-black">{price}</div>
          <div className="text-xs line-through opacity-60">{old}</div>
        </div>
      </div>
      <p className="mt-6 max-w-sm text-sm opacity-90">{body}</p>
      <div className="mt-10 flex items-center justify-between border-t border-black/15 pt-4 text-sm font-bold uppercase tracking-[0.14em]">
        <span>{cta.replace(" →", "")}</span>
        <span className="transition group-hover:translate-x-1">→</span>
      </div>
    </a>
  );
}

function WebinarBar() {
  const start = new Date();
  start.setDate(start.getDate() + 2);
  start.setHours(start.getHours() + 7);
  const c = useCountdown(start);
  return (
    <section className="border-y border-white/10 bg-white/[0.02]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-4 text-xs uppercase tracking-[0.14em] text-foreground/80">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          <span>Program starts</span>
          <span className="rounded-full border border-primary/60 px-2 py-0.5 text-primary">
            July 17
          </span>
        </div>
        <div className="flex items-baseline gap-1 font-mono tabular-nums">
          <span>
            {String(c.d).padStart(2, "0")}
            <sub className="text-[9px]">d</sub>
          </span>
          <span>:</span>
          <span>
            {String(c.h).padStart(2, "0")}
            <sub className="text-[9px]">h</sub>
          </span>
          <span>:</span>
          <span>
            {String(c.m).padStart(2, "0")}
            <sub className="text-[9px]">m</sub>
          </span>
          <span>:</span>
          <span>
            {String(c.s).padStart(2, "0")}
            <sub className="text-[9px]">s</sub>
          </span>
        </div>
      </div>
    </section>
  );
}

function Webinar() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <div className="relative mx-auto max-w-5xl px-6">
        <Chip>Free live webinar · Sunday, July 12</Chip>
        <h2 className="mt-6 font-display text-3xl font-black uppercase leading-tight tracking-tight md:text-5xl">
          Live free Electro Foundation webinar
        </h2>
        <p className="mt-4 text-sm uppercase tracking-[0.14em] text-foreground/60">
          11 AM New York · 5 PM Paris · 6 PM Moscow
        </p>
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            "What Electro foundation actually is",
            "What it is built on",
            "A strategy for training and studying",
          ].map((t) => (
            <li
              key={t}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-sm"
            >
              <span className="mr-2 text-primary">✦</span>
              {t}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-foreground/60">
          Plus info about the CALYBER project starting mid-July.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#register"
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_-8px_var(--primary)] hover:brightness-110"
          >
            Register →
          </a>
          <span className="text-xs uppercase tracking-[0.14em] text-foreground/60">
            Free · Live · Zoom
          </span>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Chip>Pick your access</Chip>
        <h2 className="mt-6 max-w-3xl font-display text-4xl font-black leading-[1] md:text-6xl">
          Two ways to join{" "}
          <span className="italic text-primary">the program.</span>
        </h2>
        <p className="mt-6 max-w-2xl text-foreground/70">
          Both packages share the same Electro Foundation. THUNDERBOLT adds
          direct personal mentorship from Singa.
        </p>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <PricingCard
            tone="lightning"
            title="LIGHTNING"
            price="$249"
            old="$279"
            payment="or 2 payments of $135"
            label="Electro Foundation"
            heading="Build your Electro foundation"
            desc="Build your Electro foundation through a structured private WhatsApp library, weekly live guidance, and an international practice community."
            features={[
              "3 months of access to the Electro library",
              "Private WhatsApp channel and community chat",
              "4 live group Zoom calls during the first month",
              "Active group support from Singa during the first month",
              "Recorded lessons, concepts, practice tools, music packs & history",
            ]}
            cta="Join lightning · $249"
            href={WA.lightning}
          />
          <PricingCard
            tone="bolt"
            title="THUNDERBOLT"
            price="$649"
            old="$749"
            payment="or 2 payments of $350"
            label="Electro Foundation + Personal Mentorship"
            heading="Foundation + personal guidance"
            desc="Get the complete Electro foundation plus direct personal feedback, accountability, and a clear strategy for your development."
            features={[
              "Everything in Lightning",
              "4 live group Zoom calls during the first month",
              "Personal WhatsApp support within 48 hours",
              "4 private one-hour mentorship calls",
              "Individual feedback and training strategy",
            ]}
            footnote="Limited mentorship spots available."
            cta="Apply for thunderbolt · $649"
            href={WA.thunderbolt}
          />
        </div>
      </div>
    </section>
  );
}

function PricingCard({
  tone,
  title,
  price,
  old,
  payment,
  label,
  heading,
  desc,
  features,
  footnote,
  cta,
  href,
}: {
  tone: "lightning" | "bolt";
  title: string;
  price: string;
  old: string;
  payment: string;
  label: string;
  heading: string;
  desc: string;
  features: string[];
  footnote?: string;
  cta: string;
  href: string;
}) {
  const bg =
    tone === "lightning"
      ? "bg-[color:var(--lightning)] text-[color:var(--lightning-foreground)]"
      : "bg-[color:var(--bolt)] text-[color:var(--bolt-foreground)]";
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl p-8 ${bg} shadow-[0_30px_120px_-40px_rgba(0,0,0,0.7)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_50px_140px_-40px_rgba(0,0,0,0.9)]`}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="flex items-start justify-between gap-6">
        <h3 className="font-display text-3xl font-black tracking-tight">
          {title}
        </h3>
        <div className="text-right">
          <div className="font-display text-4xl font-black leading-none">
            {price}
          </div>
          <div className="mt-2 text-[10px] uppercase tracking-[0.2em] opacity-80">
            Early bird · <span className="line-through">{old}</span>
          </div>
          <div className="mt-1 text-xs opacity-70">{payment}</div>
        </div>
      </div>
      <div className="mt-6 text-xs font-bold uppercase tracking-[0.2em] opacity-80">
        {label}
      </div>
      <h4 className="mt-2 font-display text-2xl font-bold">{heading}</h4>
      <p className="mt-3 max-w-lg text-sm opacity-90">{desc}</p>
      <ul className="mt-8 space-y-3 border-t border-black/15 pt-6">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm">
            <span className="mt-0.5 text-black/70">✦</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      {footnote && (
        <div className="mt-6 text-xs font-bold uppercase tracking-[0.2em] opacity-80">
          {footnote}
        </div>
      )}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-black/85 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-black"
      >
        {cta}
        <span aria-hidden>→</span>
      </a>
    </div>
  );
}

function Foundation() {
  return (
    <section
      id="foundation"
      className="relative overflow-hidden bg-(--lightning)/15 py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2">
        <div>
          <Chip>The course · in WhatsApp</Chip>
          <h2 className="mt-6 font-display text-4xl font-black leading-[1.05] md:text-5xl">
            Build your{" "}
            <span className="text-primary italic">CALYBER Foundation</span> —
            the full library, hosted in a private WhatsApp channel.
          </h2>
          <p className="mt-6 text-foreground/80">
            The complete Electro library is stored in a private WhatsApp
            channel. Participants receive access for 3 months from the official
            cohort start date — recorded lessons, concepts, practice tools,
            music packs and historical materials.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Private Learning",
                desc: "Lifetime access during your plan through WhatsApp.",
                icon: "💬",
              },
              {
                title: "Live Sessions",
                desc: "Weekly Zoom sessions with Akash Swami.",
                icon: "🎥",
              },
              {
                title: "Practice Roadmap",
                desc: "Step-by-step learning path.",
                icon: "📈",
              },
              {
                title: "Community",
                desc: "Get feedback & grow together.",
                icon: "🤝",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-primary/40 hover:bg-primary/5"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl">
                  {item.icon}
                </div>

                <h4 className="font-semibold">{item.title}</h4>

                <p className="mt-2 text-sm text-foreground/65">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.14em]">
            <span className="rounded-full bg-[color:var(--lightning)] px-3 py-1.5 font-bold text-[color:var(--lightning-foreground)]">
              Included in Lightning
            </span>
            <span className="text-foreground/60">and in Thunderbolt</span>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-black/30 p-4">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950">
            <img
              src={foundationVibe}
              alt="Electro dancer light trails"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
            <div className="absolute left-4 top-4 rounded-full bg-[#25D366] px-3 py-1 text-xs font-bold text-black">
              💬 WHATSAPP
            </div>
            <div className="absolute inset-x-4 bottom-4 flex items-end justify-between text-xs uppercase tracking-[0.14em] text-white/90">
              <span>Lesson preview · 02 / 03</span>
              <span>·</span>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.14em] text-foreground/60">
            <span>Private WhatsApp channel</span>
            <span>· Weekly video lessons</span>
          </div>
          <StudyList />
        </div>
      </div>
    </section>
  );
}

function StudyList() {
  const sections = [
    {
      title: "Basic Elements",
      items: [
        "Point",
        "Rotor",
        "Slide",
        "Haircut",
        "Butterfly",
        "Space",
        "Hand Rotor",
        "Big Rotor",
        "Roll",
        "…and more",
      ],
    },
    {
      title: "Steps & Grooves",
      items: [
        "Bounce",
        "Wave",
        "Step Variations",
        "Foot Control",
        "Body Isolation",
      ],
    },
    {
      title: "Classic Combination Patterns",
      items: ["Combo 1", "Combo 2", "Combo 3", "Transitions"],
    },
    {
      title: "Bonus Classes",
      items: ["Freestyle Tips", "Performance Mindset", "Stretching"],
    },
    {
      title: "Music for Training",
      items: ["Practice Playlist", "Battle Music", "Warm-up Tracks"],
    },
    {
      title: "History of the Style",
      items: ["Origins", "Evolution", "Important Crews"],
    },
  ];

  const [open, setOpen] = useState<number>(0);

  return (
    <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5 backdrop-blur-md">
      <div className="mb-4 flex items-center justify-between">
        <h4 className="font-display text-lg font-bold">What we will study</h4>

        <span className="text-xs uppercase tracking-[0.14em] text-foreground/60">
          Click to expand
        </span>
      </div>

      <div className="space-y-2">
        {sections.map((section, index) => {
          const isOpen = open === index;

          return (
            <div
              key={section.title}
              className="overflow-hidden rounded-xl border border-white/10 bg-white/5"
            >
              <button
                onClick={() => setOpen(isOpen ? -1 : index)}
                className="flex w-full items-center justify-between px-4 py-4 text-left transition hover:bg-white/5"
              >
                <span className="font-semibold">{section.title}</span>

                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="grid grid-cols-2 gap-2 px-4 pb-4 text-sm text-foreground/70">
                    {section.items?.map((item) => (
                      <div
                        key={item}
                        className="rounded-lg bg-white/5 px-3 py-2"
                      >
                        • {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Mentorship() {
  return (
    <section
      id="mentorship"
      className="relative overflow-hidden py-24"
      style={{
        background:
          "radial-gradient(ellipse at top left, oklch(0.55 0.22 320) 0%, oklch(0.28 0.15 305) 60%, oklch(0.2 0.08 300) 100%)",
      }}
    >
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 lg:order-2">
          <img
            src={mentorshipImg}
            alt="Dancers practicing in studio"
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute inset-x-6 bottom-6 text-xs uppercase tracking-[0.2em] text-white/90">
            One-on-one · Personal feedback
          </div>
        </div>
        <div>
          <Chip>Thunderbolt · Personal Mentorship</Chip>
          <h2 className="mt-6 font-display text-4xl font-black leading-[1.05] md:text-5xl">
            For dancers who don't want to guess{" "}
            <span className="italic">what to work on next.</span>
          </h2>
          <p className="mt-6 text-white/90">
            Personal WhatsApp support from Singa (replies within 48 hours) and
            one private 60-minute mentorship call every week during the first
            month — feedback on technique, musicality, choreography, freestyle
            and creative direction, plus an individual training strategy built
            around your level, goals and challenges.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-white/90">
            {[
              "Personal WhatsApp support · replies within 48 hours",
              "4 private one-hour mentorship calls (first month)",
              "Feedback on your videos, technique & musicality",
              "Individual training strategy",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white" />
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.14em]">
            <span className="rounded-full bg-white px-3 py-1.5 font-bold text-black">
              Included in Thunderbolt
            </span>
            <span className="text-white/70">
              Limited mentorship spots available
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Idea() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Chip>The idea behind it</Chip>
        <h2 className="mt-6 max-w-4xl font-display text-4xl font-black leading-[1.05] md:text-6xl">
          Electro is more than{" "}
          <span className="italic text-primary">a set of moves.</span>
        </h2>
        <div className="mt-10 grid gap-8 text-foreground/80 md:grid-cols-2">
          <p>
            Behind every element there is a concept, a timing, a way of using
            space, rhythm and energy.
          </p>
          <p>
            Inside ELECTRO LAB we study how movements look, how they work, how
            to develop them and how to use them as tools for your own dance. A
            system of knowledge — not a pile of random moves.
          </p>
        </div>
      </div>
    </section>
  );
}

function Compare() {
  const rows: [string, string, string][] = [
    ["Private WhatsApp library (Electro Foundation)", "✓", "✓"],
    ["Private WhatsApp community chat", "✓", "✓"],
    ["Recorded lessons, concepts, practice tools & music packs", "✓", "✓"],
    ["History & cultural materials", "✓", "✓"],
    ["Live group Zoom calls (first month)", "4 calls", "4 calls"],
    ["Active group support from Singa (first month)", "✓", "✓"],
    ["Personal WhatsApp support · replies within 48 hours", "—", "First month"],
    ["Private 1-on-1 mentorship calls (60 min)", "—", "4 calls"],
    ["Individual feedback & training strategy", "—", "✓"],
    ["WhatsApp library access", "3 months", "3 months"],
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Chip>Compare</Chip>
        <h2 className="mt-6 font-display text-4xl font-black md:text-5xl">
          Everything side by side.
        </h2>
        <div className="mt-10 overflow-hidden rounded-3xl border border-white/10">
          <div className="grid grid-cols-[1.5fr_1fr_1fr] bg-white/[0.03] text-xs uppercase tracking-[0.14em] text-foreground/70">
            <div className="p-4">Feature</div>
            <div className="p-4 text-center text-[color:var(--lightning)]">
              Lightning
            </div>
            <div className="p-4 text-center text-[color:var(--bolt)]">
              Thunderbolt
            </div>
          </div>
          {rows.map(([f, a, b], i) => (
            <div
              key={f}
              className={`grid grid-cols-[1.5fr_1fr_1fr] border-t border-white/5 text-sm ${
                i % 2 ? "bg-white/[0.015]" : ""
              }`}
            >
              <div className="p-4 text-foreground/90">{f}</div>
              <div className="p-4 text-center">{a}</div>
              <div className="p-4 text-center font-semibold">{b}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ForYou() {
  const items = [
    "You want to understand Electro beyond random movements",
    "You are just starting and need a clear system",
    "You already dance but want to rebuild your foundation",
    "You want to understand concepts behind the form",
    "You want more ideas for labbing and freestyle",
    "You want to develop your own movement language",
    "You want to study with materials in ENG or RUS",
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Chip>Who is it for</Chip>
        <h2 className="mt-6 max-w-3xl font-display text-4xl font-black md:text-5xl">
          This project is for you{" "}
          <span className="italic text-primary">if…</span>
        </h2>
        <ol className="mt-12 grid gap-4 md:grid-cols-2">
          {items.map((t, i) => (
            <li
              key={t}
              className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5"
            >
              <span className="font-display text-2xl font-black text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm text-foreground/85">{t}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function How() {
  const steps = [
    "Choose your access: LIGHTNING or THUNDERBOLT",
    "Get invited to the private WhatsApp channel and community chat",
    "The full course library is available for 3 months from the cohort start date",
    "Join one 60-minute live group Zoom call per week during the first month (4 calls total)",
    "Get active group support from Singa in the community chat during the first month",
    "THUNDERBOLT: get personal WhatsApp support (48h replies) and one private 60-min mentorship call each week during the first month",
    "Keep practicing and revisiting the WhatsApp library at your own pace",
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Chip>How it works</Chip>
        <h2 className="mt-6 font-display text-4xl font-black md:text-5xl">
          Simple, structured,{" "}
          <span className="italic text-primary">yours.</span>
        </h2>
        <ol className="mt-12 space-y-3">
          {steps.map((s, i) => (
            <li
              key={s}
              className="flex gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-5"
            >
              <span className="font-display text-xl font-black text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm text-foreground/85">{s}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* Image */}

          <div className="lg:col-span-4">
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <img
                src={singaPortrait}
                alt="Akash Swami"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground">
                Akash Swami
              </div>
            </div>
          </div>

          {/* About */}

          <div className="lg:col-span-4">
            <Chip>Meet Your Coach</Chip>

            <h2 className="mt-6 font-display text-4xl font-black italic text-primary sm:text-5xl lg:text-6xl">
              Akash Swami
            </h2>

            <p className="mt-6 text-base leading-8 text-foreground/80">
              Professional dance coach and founder of <b>CALYBER</b>. Helping
              students build confidence, improve technique, and develop their
              own dance style through a structured learning system.
            </p>

            <p className="mt-5 text-base leading-8 text-foreground/70">
              Through live classes, personalized feedback and years of teaching
              experience, Akash has helped hundreds of students understand dance
              beyond just copying choreography.
            </p>
          </div>

          {/* Stats */}

          <div className="lg:col-span-4">
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  k: "500+",
                  v: "Students Trained",
                },
                {
                  k: "8+",
                  v: "Years Experience",
                },
                {
                  k: "100+",
                  v: "Live Workshops",
                },
                {
                  k: "Founder",
                  v: "CALYBER",
                },
              ].map((item) => (
                <div
                  key={item.v}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center transition hover:border-primary/30 hover:bg-white/[0.05]"
                >
                  <div className="font-display text-3xl font-black text-primary sm:text-4xl">
                    {item.k}
                  </div>

                  <div className="mt-3 text-sm leading-6 text-foreground/70">
                    {item.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReadyForMore() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-grid opacity-10" />

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl md:p-14">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            Continue Your Journey
          </span>

          <h2 className="mt-5 font-display text-4xl font-black leading-tight md:text-6xl">
            Loved the{" "}
            <span className="italic text-primary">
              ₹99 Beginner Experience?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-foreground/70 md:text-lg">
            If you've completed the Beginner Experience and enjoyed learning
            with CALYBER, unlock the complete dance system with advanced
            concepts, live mentorship, structured roadmap and an active
            community.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="rounded-2xl border border-primary/30 bg-primary/10 px-8 py-5">
              <div className="text-sm uppercase tracking-widest text-foreground/60">
                Complete Program
              </div>

              <div className="mt-1 font-display text-5xl font-black text-primary">
                ₹899
              </div>
            </div>

            <a
              href="#pricing"
              className="rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground transition hover:brightness-110"
            >
              Explore Complete Program →
            </a>
          </div>

          <p className="mt-6 text-sm text-foreground/50">
            No pressure. Start with ₹99. Upgrade anytime when you're ready.
          </p>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    [
      "Where is the course hosted?",
      "In a private WhatsApp channel with a separate community chat.",
    ],
    [
      "How long do I have access to the materials?",
      "3 months from the official cohort start date.",
    ],
    [
      "Are live classes included?",
      "Yes — 4 live group Zoom calls during the first month.",
    ],
    [
      "How long is Singa's active support included?",
      "The first month of the program.",
    ],
    [
      "What is included in THUNDERBOLT mentorship?",
      "Personal WhatsApp support (48h replies) and 4 private one-hour mentorship calls.",
    ],
    [
      "Can I send videos of my progress?",
      "Yes — THUNDERBOLT includes personal video feedback.",
    ],
    ["Which languages are available?", "Materials in English and Russian."],
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <Chip>FAQ</Chip>
        <h2 className="mt-6 font-display text-4xl font-black md:text-5xl">
          Good <span className="italic text-primary">questions.</span>
        </h2>
        <div className="mt-10 divide-y divide-white/10 rounded-3xl border border-white/10">
          {items.map(([q, a]) => (
            <details key={q} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold">
                {q}
                <span className="text-primary transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-foreground/70">{a}</p>
            </details>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-sm">
          <span className="text-foreground/70">
            Still not sure? Ask Singa directly.
          </span>
          <a
            href={WA.question}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-black transition hover:brightness-110"
          >
            💬 Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-primary/25 blur-[140px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-lightning/20 blur-[140px]" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <h2 className="font-display text-4xl font-black leading-tight md:text-6xl">
          Build your foundation.{" "}
          <span className="italic text-primary">Find your own style.</span>
        </h2>
        <p className="mt-6 text-foreground/70">
          Two packages · 3 months WhatsApp access · Live group Zoom calls ·
          Optional personal mentorship.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#pricing"
            className="rounded-2xl bg-[color:var(--lightning)] px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[color:var(--lightning-foreground)]"
          >
            Join lightning · $249
          </a>
          <a
            href="#pricing"
            className="rounded-2xl bg-[color:var(--bolt)] px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[color:var(--bolt-foreground)]"
          >
            Apply for thunderbolt · $649
          </a>
        </div>
      </div>
    </section>
  );
}

function Register() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(WA.webinar(`${first} ${last}`.trim(), email), "_blank");
  };
  return (
    <section id="register" className="py-24">
      <div className="mx-auto max-w-2xl px-6">
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 shadow-[0_30px_120px_-40px_var(--primary)]">
          <h3 className="font-display text-2xl font-black md:text-3xl">
            Register for the webinar
          </h3>
          <p className="mt-2 text-sm text-foreground/60">
            Sunday, July 12 · Free · Live on Zoom
          </p>
          <form className="mt-8 grid gap-4" onSubmit={submit}>
            <div className="grid gap-4 md:grid-cols-2">
              <input
                required
                value={first}
                onChange={(e) => setFirst(e.target.value)}
                placeholder="First name"
                className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-primary"
              />
              <input
                required
                value={last}
                onChange={(e) => setLast(e.target.value)}
                placeholder="Last name"
                className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-primary"
              />
            </div>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              type="email"
              className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-primary"
            />
            <button className="mt-2 animate-pulse-glow rounded-xl bg-[#25D366] py-4 text-sm font-bold uppercase tracking-[0.14em] text-black transition hover:brightness-110">
              Continue in WhatsApp →
            </button>
            <p className="text-center text-xs text-foreground/50">
              You'll be redirected to our WhatsApp bot to confirm your spot.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function VideoShowcase() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Chip>See it in motion</Chip>
        <h2 className="mt-6 max-w-3xl font-display text-4xl font-black md:text-5xl">
          A glimpse of the <span className="italic text-primary">energy.</span>
        </h2>
        <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-black shadow-[0_40px_120px_-40px_var(--primary)]">
          <div className="relative aspect-video">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/videoseries?list=PLp0d8xTFbEwWQZQGWSCS8P7GNRHRuq2fu&autoplay=0&mute=1&loop=1"
              title="Electro dance showcase"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function WelcomePopup() {
  const [open, setOpen] = useState(false);
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem("el_popup_dismissed") === "1") return;
    const t = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setOpen(false);
    try {
      localStorage.setItem("el_popup_dismissed", "1");
    } catch {}
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(WA.webinar(`${first} ${last}`.trim(), email), "_blank");
    close();
  };

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex animate-fade-in items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md animate-scale-in overflow-hidden rounded-3xl border border-white/10 bg-[oklch(0.19_0.02_40)] p-8 shadow-[0_40px_120px_-20px_var(--primary)]">
        <button
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
              onChange={(e) => setFirst(e.target.value)}
              placeholder="First name"
              className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none focus:border-primary"
            />
            <input
              required
              value={last}
              onChange={(e) => setLast(e.target.value)}
              placeholder="Last name"
              className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none focus:border-primary"
            />
          </div>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none focus:border-primary"
          />
          <button className="mt-2 rounded-full bg-primary py-4 text-sm font-bold uppercase tracking-[0.14em] text-primary-foreground transition hover:brightness-110">
            Continue in WhatsApp →
          </button>
          <p className="text-center text-xs text-foreground/50">
            You'll be redirected to WhatsApp to confirm your spot.
          </p>
        </form>
      </div>
    </div>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WA.float}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] py-3 pl-3 pr-4 text-sm font-bold text-black shadow-[0_10px_40px_-10px_#25D366] transition hover:scale-105"
    >
      <span
        className="flex h-8 w-8 animate-pulse-glow items-center justify-center rounded-full bg-black/10 text-lg"
        aria-hidden
      >
        {" "}
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>WhatsApp</title>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>{" "}
      </span>
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center md:flex-row md:text-left">
        {/* Left */}
        <div>
          <div className="text-xs uppercase tracking-[0.14em] text-foreground/50">
            CALYBER · By Akash Swami
          </div>

          <div className="mt-2 text-xs text-foreground/40">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>

        {/* Right */}
        <div className="text-xs text-foreground/40">
          Designed &amp; Developed by{" "}
          <a
            href="https://itssolution.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary transition hover:text-primary/80"
          >
            IT's Solution
          </a>
        </div>
      </div>
    </footer>
  );
}

function Testimonials() {
  const items = [
    {
      q: "Singa breaks down Electro like nobody else. My foundation finally feels solid.",
      n: "Alex · Berlin",
    },
    {
      q: "The WhatsApp library is gold — I can revisit any concept any time.",
      n: "Marina · Moscow",
    },
    {
      q: "The mentorship calls changed the way I train. Way more intentional now.",
      n: "Julien · Paris",
    },
    {
      q: "Best structured Electro course I've ever taken. Clear system, not random moves.",
      n: "Kai · Tokyo",
    },
    {
      q: "I went from copying steps to building my own style. That's the shift.",
      n: "Sasha · Kyiv",
    },
    {
      q: "The community chat alone is worth it. Real dancers, real feedback.",
      n: "Nia · London",
    },
  ];
  const row = [...items, ...items];
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-white/2 py-20">
      <div className="mx-auto mb-10 max-w-7xl px-6">
        <Chip>What dancers say</Chip>
        <h2 className="mt-6 font-display text-3xl font-black md:text-5xl">
          Voices from the <span className="italic text-primary">lab.</span>
        </h2>
      </div>
      <div className="group relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-background to-transparent" />
        <div className="flex w-max animate-marquee gap-5 group-hover:paused">
          {row.map((t, i) => (
            <figure
              key={i}
              className="w-85 shrink-0 rounded-2xl border border-white/10 bg-background/60 p-6"
            >
              <div className="text-primary">★★★★★</div>
              <blockquote className="mt-3 text-sm text-foreground/85">
                "{t.q}"
              </blockquote>
              <figcaption className="mt-4 text-xs uppercase tracking-[0.14em] text-foreground/50">
                — {t.n}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <ProblemSolution />
      <BeginnerExperience />
      <WebinarBar />
      <Webinar />
      <VideoShowcase />
      <Pricing />
      <Foundation />
      <Mentorship />
      <Idea />
      <Testimonials />
      <Compare />
      <ForYou />
      <How />
      <About />
      <ReadyForMore />
      <FAQ />
      <FinalCTA />
      <Register />
      <Footer />
      <FloatingWhatsApp />
      <WelcomePopup />
    </div>
  );
}
