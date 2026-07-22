"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ArrowRight,
  CalendarDays,
  Star,
  Crown,
  CheckCircle2,
  Brain,
  Footprints,
  Heart,
  Waves,
  PlayCircle,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import JoinModal from "@/components/JoinModal";

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
          <a href="#testimonials" className="hover:text-foreground">
            Testimonials
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
    <section
      id="top"
      className="relative overflow-hidden bg-black min-h-screen flex items-center"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35"
        style={{ backgroundImage: `url(${heroDancer})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />

      {/* Glow */}
      <div className="absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-primary/15 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-primary/10 blur-[180px]" />

      <div className="relative mx-auto flex max-w-7xl items-center px-6 py-24 lg:min-h-screen">

        <div className="max-w-7xl">

          <Reveal>
            <Chip>India's Beginner Hip-Hop Dance System</Chip>
          </Reveal>
          <h1
            className="mt-8 animate-fade-up font-display text-[15vw] font-black leading-[0.9] tracking-tight md:text-[10rem]"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="block italic text-shimmer drop-shadow-[0_0_40px_var(--primary)]">
              CALYBER<span className="text-foreground">.</span>
            </span>
          </h1>

          <Reveal delay={0.15}>
            <h2 className="mt-10 font-display text-5xl font-black leading-[0.95] md:text-7xl xl:text-8xl">
              BEFORE YOU
              <br />
              LEARN STEPS,
              <br />
              <span className="text-primary">
                LEARN
                <br />
                YOURSELF.
              </span>
            </h2>
          </Reveal>


          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-lg leading-8 text-white/70">
              We don't teach choreography.
              <br />
              We build dancers from the inside out.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#pricing"
                className="group inline-flex items-center gap-3 rounded-xl bg-primary px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-black transition-all duration-300 hover:scale-105"
              >
                Start Your Journey
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>

              <a
                href={WA.question}
                target="_blank"
                className="group inline-flex items-center gap-3 rounded-xl border border-white/20 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-primary hover:bg-primary/10"
              >
                <PlayCircle className="h-5 w-5 text-primary" />
                Watch Intro
              </a>

            </div>
          </Reveal>

          {/* Stats */}

          <Reveal delay={0.45}>
            <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">

              {[
                {
                  number: "10,000+",
                  label: "Students Transformed",
                },
                {
                  number: "50+",
                  label: "Cities",
                },
                {
                  number: "1",
                  label: "Learning System",
                },
                {
                  number: "100%",
                  label: "Beginner Focused",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur"
                >
                  <h3 className="font-display text-3xl font-black text-primary">
                    {item.number}
                  </h3>

                  <p className="mt-2 text-xs uppercase tracking-[0.14em] text-white/55">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

        </div>
      </div>

      {/* Scroll Indicator */}

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-primary/80" />
      </div>
    </section>
  );
}

function ProblemSolution() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <Chip>Why CALYBER</Chip>

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


const programs = [
  {
    icon: CalendarDays,
    title: "Beginner",
    subtitle: "Experience",
    price: "₹99",
    duration: "2 Hour Live Workshop",
    description:
      "The perfect first step for complete beginners. Learn the fundamentals and discover how the CALYBER learning system works.",

    button: "Join Now",

    href: "#",

    features: [
      "2-Hour Live Session",
      "Rhythm Basics",
      "Movement Fundamentals",
      "Beginner Practice Guide",
      "Q&A Session",
    ],
  },

  {
    icon: Star,
    title: "Foundation",
    subtitle: "Program",
    popular: true,

    price: "₹1,999",

    duration: "8 Weeks • 16 Classes",

    description:
      "The complete beginner transformation system with structured learning, assignments and community support.",

    button: "Join Now",

    href: "#",

    features: [
      "16 Live Classes",
      "Weekly Practice Plan",
      "WhatsApp Community",
      "Recorded Sessions",
      "Assignments",
      "Progress Tracking",
      "Certificate",
    ],
  },

  {
    icon: Crown,

    title: "Elite",

    subtitle: "Coaching",

    price: "Custom",

    duration: "Personal Coaching",

    description:
      "Personal mentorship for serious learners who want faster improvement with individual guidance.",

    button: "Apply Now",

    href: "#",

    features: [
      "1-on-1 Coaching",
      "Personal Feedback",
      "Custom Roadmap",
      "Priority Support",
      "Direct Mentorship",
    ],
  },
];

function Pricing() {
  const [modalOpen, setModalOpen] = useState(false);

  const [selectedProgram, setSelectedProgram] = useState<{
    title: string;
    subtitle: string;
    price: string;
  } | null>(null);
  return (
    <section
      id="pricing"
      className="relative overflow-hidden py-28"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-grid opacity-10" />

      <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[140px]" />

      <div className="absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">

            Our Programs

          </span>

          <h2 className="mx-auto mt-8 max-w-4xl font-display text-5xl font-black leading-none md:text-7xl">

            Choose Your{" "}

            <span className="text-primary">
              Path.
            </span>

            <br />

            Transform Your Dance.

          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-foreground/70">

            Whether you're taking your first step or looking for complete
            mentorship, choose the learning experience that matches your goals.

          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              {...program}
              onJoin={(program) => {
                setSelectedProgram(program);
                setModalOpen(true);
              }}
            />
          ))}

        </div>
      </div>
      <JoinModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        program={selectedProgram}
      />
    </section>
  );
}

type ProgramCardProps = {
  icon: any;
  title: string;
  subtitle: string;
  popular?: boolean;
  price: string;
  duration: string;
  description: string;
  button: string;
  href: string;
  features: string[];

  onJoin: (program: {
    title: string;
    subtitle: string;
    price: string;
  }) => void;
};
function ProgramCard({
  icon: Icon,
  title,
  subtitle,
  popular,
  price,
  duration,
  description,
  button,
  href,
  features,
  onJoin,
}: ProgramCardProps) {
  return (
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border transition-all duration-300 hover:-translate-y-2
      ${popular
          ? "border-primary bg-gradient-to-b from-primary/10 via-[#111111] to-[#090909] shadow-[0_20px_60px_rgba(252,76,19,0.18)]"
          : "border-white/10 bg-[#0B0B0B] hover:border-primary/40"
        }`}
    >
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute left-1/2 top-0 h-44 w-44 -translate-x-1/2 rounded-full bg-primary/10 blur-[80px]" />
      </div>

      {/* Popular */}
      {popular && (
        <div className="absolute right-5 top-3 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-black">
          Most Popular
        </div>
      )}

      <div className="relative flex h-full flex-col p-6 lg:p-7">

        {/* Header */}

        <div className="flex items-start justify-between">

          <div>

            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon className="h-6 w-6" />
            </div>

            <p className="text-[11px] uppercase tracking-[0.28em] text-primary">
              {subtitle}
            </p>

            <h3 className="mt-1 font-display text-3xl font-black text-white">
              {title}
            </h3>

          </div>

          <div className={`${popular ? "pt-6" : ""} text-right`}>

            <div className="font-display text-4xl font-black text-primary">
              {price}
            </div>

            <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/45">
              {duration}
            </p>

          </div>

        </div>

        {/* Description */}

        <p className="mt-5 text-sm leading-6 text-white/70">
          {description}
        </p>

        {/* Divider */}

        <div className="my-5 h-px bg-gradient-to-r from-primary/30 via-white/10 to-transparent" />

        {/* Features */}

        <div className="flex-1 space-y-2.5">

          {features.map((feature) => (

            <div
              key={feature}
              className="flex items-start gap-3"
            >
              <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" />

              <span className="text-sm leading-5 text-white/85">
                {feature}
              </span>

            </div>

          ))}

        </div>

        {/* Button */}

        <button
          onClick={() =>
            onJoin({
              title,
              subtitle,
              price,
            })
          }
          className={`mt-6 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold uppercase tracking-[0.14em] transition-all duration-300
    ${popular
              ? "bg-primary text-black hover:brightness-110"
              : "border border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-black"
            }`}
        >
          {button}

          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>

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
    {
      icon: Brain,
      title: "THINK",
      desc: "Understand the mindset of a dancer.",
    },
    {
      icon: Heart,
      title: "FEEL",
      desc: "Feel the music. Build rhythm and timing.",
    },
    {
      icon: Footprints,
      title: "MOVE",
      desc: "Learn the foundation of movement.",
    },
    {
      icon: Waves,
      title: "GROOVE",
      desc: "Add groove, flow and personality.",
    },
    {
      icon: Star,
      title: "EXPRESS",
      desc: "Put it all together and express freely.",
    },
  ];

  return (
    <section
      id="how"
      className="relative py-28 bg-gradient-to-b from-background via-[#0a0a0a] to-background"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Chip>How CALYBER Works</Chip>

        <h2 className="mt-5 font-display text-4xl font-black leading-tight md:text-6xl">
          Our{" "}
          <span className="text-primary">
            5-Step Learning
          </span>{" "}
          System
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-foreground/65">
          Every beginner follows the same structured path.
          We don't start with choreography.
          We build the dancer first.
        </p>

        <div className="mt-20">

          {/* ================= MOBILE ================= */}
          <div className="relative lg:hidden">
            <div className="absolute left-[38px] top-8 bottom-8 w-px border-l border-dashed border-primary/30" />

            <div className="space-y-10">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <Reveal key={step.title} delay={index * 0.12}>
                    <div className="relative flex items-start gap-8">
                      <div className="relative z-10 flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-[#151515] shadow-[0_0_30px_rgba(252,76,19,.12)]">
                        <Icon className="h-9 w-9 text-primary" strokeWidth={1.8} />
                      </div>

                      <div className="pt-2">
                        <div className="flex items-center gap-4">
                          <span className="font-display text-3xl font-black text-primary/35">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <h3 className="font-display text-3xl font-black">
                            {step.title}
                          </h3>
                        </div>

                        <p className="mt-3 max-w-md text-foreground/65">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* ================= DESKTOP ================= */}
          <div className="relative hidden lg:block">

            {/* Line */}
            <div className="absolute left-0 right-0 top-10 h-px border-t border-dashed border-primary/25" />

            <div className="grid grid-cols-5 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <Reveal key={step.title} delay={index * 0.15}>
                    <div className="relative flex flex-col items-center text-center">

                      {/* Connector Dot */}
                      <div className="absolute top-10 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_18px_rgba(252,76,19,.5)]" />

                      {/* Icon */}
                      <div className="relative z-10 mt-6 flex h-24 w-24 items-center justify-center rounded-3xl border border-primary/20 bg-[#151515] shadow-[0_0_35px_rgba(252,76,19,.12)] transition duration-500 hover:-translate-y-2 hover:border-primary hover:shadow-[0_0_60px_rgba(252,76,19,.35)]">
                        <Icon className="h-10 w-10 text-primary" />
                      </div>

                      <span className="mt-8 font-display text-5xl font-black text-primary/20">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3 className="mt-3 font-display text-2xl font-black">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-foreground/65">
                        {step.desc}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

        </div>
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
    <section className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-grid opacity-10" />

      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-primary/10 blur-[140px]" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-primary/15 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[36px] border border-primary/20 bg-gradient-to-br from-[#151515] via-[#101010] to-[#090909] px-8 py-14 shadow-[0_0_80px_rgba(252,76,19,.08)] md:px-16 md:py-20">

          <Chip>Your Journey Starts Here</Chip>

          <div className="mt-8 grid items-center gap-14 lg:grid-cols-[1.2fr_.8fr]">

            {/* Left */}

            <div>

              <h2 className="font-display text-4xl font-black leading-tight md:text-6xl">
                ₹99 is only
                <span className="text-primary"> the beginning.</span>
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-foreground/65">
                The Beginner Experience introduces you to the CALYBER way of
                learning. Once you've built confidence and understand the
                fundamentals, you'll be ready for the complete Foundation
                Program where we help you develop rhythm, groove, musicality,
                freestyle and choreography through a structured learning system.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <a
                  href="#pricing"
                  className="rounded-xl bg-primary px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-black transition hover:scale-105"
                >
                  Join ₹99 Beginner Experience →
                </a>

                <a
                  href={WA.question}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] transition hover:border-primary hover:bg-primary/10"
                >
                  Ask a Question
                </a>

              </div>

            </div>

            {/* Right */}

            <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8">

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Your Learning Journey
              </span>

              <div className="mt-8 space-y-5">

                {[
                  "₹99 Beginner Experience",
                  "Build Confidence",
                  "Learn Real Fundamentals",
                  "Join Foundation Program",
                  "Become an Independent Dancer",
                ].map((step, i) => (
                  <div
                    key={step}
                    className="flex items-center gap-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-black">
                      {i + 1}
                    </div>

                    <p className="font-medium">{step}</p>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    [
      "Do I need any dance experience?",
      "No. CALYBER is designed specifically for complete beginners. We start from the basics and build your foundation step by step.",
    ],
    [
      "Will I learn choreography?",
      "Not at first. We focus on rhythm, movement, groove and body awareness before choreography so you develop real dance skills.",
    ],
    [
      "How are the classes conducted?",
      "The Foundation Program includes structured live classes, guided practice sessions and assignments that help you improve every week.",
    ],
    [
      "Can I learn from home?",
      "Absolutely. All you need is a phone or laptop and enough space to move comfortably.",
    ],
    [
      "Will I get feedback on my progress?",
      "Yes. Depending on your program, you'll receive community support, assignments and personal feedback from the coaches.",
    ],
    [
      "How long does the Foundation Program last?",
      "The complete beginner transformation program runs for 8 weeks with 16 structured classes.",
    ],
    [
      "Which program should I choose?",
      "If you're completely new, start with the Foundation Program. If you already have experience, our Workshop or Elite Coaching may be a better fit.",
    ],
  ];

  return (
    <section
      id="faq"
      className="relative py-16 bg-gradient-to-b from-background via-[#090909] to-background"
    >
      <div className="mx-auto max-w-5xl px-6">

        <Chip>Frequently Asked Questions</Chip>

        <h2 className="mt-5 font-display text-4xl font-black md:text-6xl">
          Everything you
          <span className="text-primary"> need to know.</span>
        </h2>

        <p className="mt-5 max-w-2xl text-lg text-foreground/65">
          Still have questions? Here are the answers to the ones we get asked
          the most.
        </p>

        <div className="mt-14 space-y-5">

          {items.map(([question, answer]) => (
            <details
              key={question}
              className="group rounded-xl border border-white/10 bg-white/[0.03] transition-all duration-300 open:border-primary/40 open:bg-primary/[0.04]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 text-base font-semibold md:text-lg">
                <span>{question}</span>

                <span className="text-2xl font-light text-primary transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>

              <div className="px-6 pb-5">
                <p className="border-t border-white/10 pt-4 text-[15px] leading-7 text-foreground/65">
                  {answer}
                </p>
              </div>
            </details>
          ))}

        </div>

        <div className="mt-12 rounded-3xl border border-primary/20 bg-primary/10 p-8 text-center">

          <h3 className="font-display text-3xl font-black">
            Still have questions?
          </h3>

          <p className="mt-4 text-foreground/65">
            Our team will help you choose the right program for your current
            level.
          </p>

          <a
            href={WA.question}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-primary px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-black transition hover:scale-105"
          >
            Chat on WhatsApp →
          </a>

        </div>

      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-20">

      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-primary/10 blur-[140px]" />

      <div className="absolute -right-20 bottom-0 h-[420px] w-[420px] rounded-full bg-primary/20 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="overflow-hidden rounded-[40px] border border-primary/20 bg-gradient-to-br from-[#141414] via-[#101010] to-[#090909] px-8 py-8 text-center shadow-[0_0_120px_rgba(252,76,19,.08)] md:px-24 md:py-20">

          <Chip>Start Your Dance Journey</Chip>

          <h2 className="mt-8 font-display text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
            Dance isn't
            <span className="text-primary"> Talent.</span>
            <br />
            It's a Skill.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-foreground/65">
            Whether you're taking your very first step or looking for personal
            coaching, CALYBER gives you the right system to become a confident
            dancer.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <a
              href="#pricing"
              className="rounded-xl bg-primary px-10 py-4 text-sm font-bold uppercase tracking-[0.15em] text-black transition hover:scale-105"
            >
              Start Your Journey →
            </a>

            <a
              href={WA.question}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/20 px-10 py-4 text-sm font-bold uppercase tracking-[0.15em] transition hover:border-primary hover:bg-primary/10"
            >
              Talk To Us
            </a>

          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm uppercase tracking-[0.14em] text-white/50">

            <span>✓ Beginner Friendly</span>

            <span>✓ Live Classes</span>

            <span>✓ Community Support</span>

            <span>✓ Personal Coaching</span>

          </div>

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
    } catch { }
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
      className="
        group
        fixed
        bottom-5
        right-5
        z-[999]
        flex
        items-center
        gap-3
        rounded-full
        border
        border-white/10
        bg-[#25D366]
        px-3
        py-3
        shadow-[0_15px_45px_rgba(37,211,102,.35)]
        backdrop-blur-xl
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-[0_20px_60px_rgba(37,211,102,.5)]
        active:scale-95
        sm:bottom-6
        sm:right-6
        sm:px-4
      "
    >
      {/* Animated Ping */}
      <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-30 blur-xl animate-pulse" />

      {/* Icon */}
      <div
        className="
    flex
    h-11
    w-11
    items-center
    justify-center
    rounded-full
    bg-none
    text-white
    // text-[#25D366]
    transition-all
    duration-300
    group-hover:scale-110
    group-hover:rotate-12
  "
      >
        <FaWhatsapp className="text-4xl" />
      </div>

      {/* Text */}
      <div className="hidden sm:block">
        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-black/70">
          Need Help?
        </p>

        <p className="text-sm font-bold text-black">
          Chat on WhatsApp
        </p>
      </div>
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
  const videos = [
    {
      name: "Rahul",
      place: "Delhi, India",
      image: "/testimonials/testimonial-1.jpg",
      duration: "2:14",
      title: "From Zero Confidence to Freestyling",
      href: "https://youtube.com/",
    },
    {
      name: "Ayesha",
      place: "Mumbai, India",
      image: "/testimonials/testimonial-2.jpg",
      duration: "1:46",
      title: "I Finally Understand Groove",
      href: "https://youtube.com/",
    },
    {
      name: "Rohan",
      place: "Bangalore, India",
      image: "/testimonials/testimonial-3.jpg",
      duration: "3:08",
      title: "The System Changed Everything",
      href: "https://youtube.com/",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-28 bg-gradient-to-b from-background via-[#0a0a0a] to-background"
    >
      <div className="mx-auto max-w-7xl px-6">
        <Chip>Student Success Stories</Chip>

        <h2 className="mt-5 font-display text-4xl font-black md:text-6xl">
          Real Students.
          <span className="text-primary"> Real Transformations.</span>
        </h2>

        <p className="mt-5 max-w-2xl text-lg text-foreground/65">
          Watch how complete beginners built confidence and learned Hip-Hop
          through the CALYBER learning system.
        </p>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {videos.map((video) => (
            <a
              key={video.name}
              href={video.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#121212] transition duration-500 hover:-translate-y-2 hover:border-primary/40"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.image}
                  alt={video.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/35" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary shadow-[0_0_50px_rgba(252,76,19,.45)] transition duration-300 group-hover:scale-110">
                    <svg
                      width="34"
                      height="34"
                      fill="white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                <span className="absolute right-4 bottom-4 rounded-lg bg-black/70 px-3 py-1 text-xs font-semibold">
                  {video.duration}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-2xl font-black">
                  {video.title}
                </h3>

                <p className="mt-3 text-foreground/65">
                  {video.name} • {video.place}
                </p>

                <div className="mt-6 flex items-center gap-2 text-primary font-semibold">
                  ▶ Watch Story
                </div>
              </div>
            </a>
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
      {/* <WebinarBar /> */}
      {/* <Webinar /> */}
      <VideoShowcase />
      {/* <Pricing /> */}
      <Pricing />
      {/* <Foundation /> */}
      <Mentorship />
      {/* <Idea /> */}
      <Testimonials />
      {/* <Compare /> */}
      <ForYou />
      <How />
      <About />
      <ReadyForMore />
      <FAQ />
      <FinalCTA />
      {/* <Register /> */}
      <Footer />
      <FloatingWhatsApp />
      <WelcomePopup />

    </div>
  );
}
