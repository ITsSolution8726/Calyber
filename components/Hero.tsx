
"use client";

import {
  ChevronDown,
  ArrowRight,
  PlayCircle,
} from "lucide-react";

import Reveal from "@/components/ui/Reveal";
import Chip from "@/components/ui/Chip";
import { WA } from "@/lib/whatsapp";

const heroDancer = "/hero-dancer.jpg";

export default function Hero() {
  const stats = [
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
  ];

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-black"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35"
        style={{ backgroundImage: `url(${heroDancer})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />

      {/* Ambient glow */}
      <div className="absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-primary/15 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary/10 blur-[180px]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-6 lg:min-h-screen">
        <div className="max-w-7xl">
          <Reveal>
            <Chip>
              India's Beginner Hip-Hop Dance System
            </Chip>
          </Reveal>

          {/* Neon logo */}
          <Reveal delay={0.1}>
            <h1 className="mt-8 font-display text-[15vw] font-black leading-[0.9] tracking-tight sm:text-7xl md:text-8xl xl:text-[10rem]">
              <span className="block italic text-shimmer drop-shadow-[0_0_40px_var(--primary)]">
                CALYBER<span className="text-foreground">.</span>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <Reveal delay={0.15}>
              <h2 className="mt-8 font-display text-4xl font-black leading-[0.95] sm:text-5xl md:text-7xl xl:text-8xl">
                LEARN TO
                <br />
                <span className="text-primary">DANCE</span>
                <br />
                NOT JUST <br />STEPS.
              </h2>
            </Reveal>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              We don't teach choreography.
              <br />
              We build dancers from the inside out.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#pricing"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-primary px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.12em] text-black transition-all duration-300 hover:scale-[1.02] sm:px-8 sm:tracking-[0.18em]"
              >
                Start Your Journey
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.45}>
            <div className="mt-12 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-4 md:grid-cols-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur sm:p-5"
                >
                  <h3 className="font-display text-2xl font-black text-primary sm:text-3xl">
                    {item.number}
                  </h3>

                  <p className="mt-2 text-[10px] uppercase tracking-[0.1em] text-white/55 sm:text-xs sm:tracking-[0.14em]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 animate-bounce sm:bottom-10">
        <ChevronDown className="h-8 w-8 text-primary/80" />
      </div>
    </section>
  );
}