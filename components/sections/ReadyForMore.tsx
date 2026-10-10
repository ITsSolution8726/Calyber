
"use client";

import {
  ArrowRight,
  UserRound,
  Target,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import Chip from "@/components/ui/Chip";
import { WA } from "@/lib/whatsapp";

const eliteBenefits = [
  {
    icon: UserRound,
    title: "Personal Coaching",
    description: "Training tailored to your current skill level and goals.",
  },
  {
    icon: Target,
    title: "Custom Learning Roadmap",
    description: "A focused plan to improve your rhythm, groove, and control.",
  },
  {
    icon: MessageCircle,
    title: "Direct Feedback & Mentorship",
    description: "Personal guidance to help you overcome challenges and progress.",
  },
  {
    icon: Sparkles,
    title: "Develop Your Own Style",
    description: "Build confidence, musicality, freestyle skills, and expression.",
  },
];

export default function ReadyForMore() {
  return (
    <section
      id="elite-coaching"
      className="relative overflow-hidden py-24 md:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-10" />

      <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-primary/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-primary/15 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[36px] border border-primary/20 bg-gradient-to-br from-[#151515] via-[#101010] to-[#090909] px-7 py-12 shadow-[0_0_80px_rgba(252,76,19,.08)] sm:px-10 md:px-16 md:py-16">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
            {/* Left: Elite Coaching CTA */}
            <div>
              <Chip>Personal Classes & Elite Coaching</Chip>

              <h2 className="mt-7 font-display text-4xl font-black leading-tight md:text-6xl">
                Ready for
                <span className="text-primary"> More?</span>
                <br />
                Dance Your Way.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-foreground/70 md:text-lg md:leading-8">
                Want more personalized attention? CALYBER's Elite Coaching
                offers individual guidance for dancers who want to improve
                faster, overcome specific challenges, and develop their own
                style. Get personal feedback, a custom learning roadmap, and
                direct mentorship tailored to your goals.
              </p>

              <p className="mt-4 max-w-xl text-sm leading-6 text-foreground/50">
                Whether you're strengthening your fundamentals or taking
                your dance skills to the next level, let's find the right
                learning path for you.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={WA.question}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-primary px-6 py-4 text-center text-sm font-bold uppercase tracking-wider text-black transition hover:scale-[1.02] hover:brightness-110 sm:px-8"
                >
                  Explore Elite Coaching
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              <p className="mt-5 text-xs text-foreground/40">
                Personalized guidance. A plan built around you.
              </p>
            </div>

            {/* Right: Elite Benefits */}
            <div className="rounded-3xl border border-primary/20 bg-primary/[0.04] p-6 sm:p-8">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                The Elite Experience
              </span>

              <h3 className="mt-4 font-display text-2xl font-black sm:text-3xl">
                Your Goals. Your Pace. Your Growth.
              </h3>

              <div className="mt-8 space-y-6">
                {eliteBenefits.map((benefit) => {
                  const Icon = benefit.icon;

                  return (
                    <div
                      key={benefit.title}
                      className="flex items-start gap-4"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>

                      <div>
                        <h4 className="font-semibold">
                          {benefit.title}
                        </h4>

                        <p className="mt-1 text-sm leading-6 text-foreground/60">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-sm leading-6 text-foreground/60">
                  Not sure if personal coaching is right for you? Ask us
                  about the Elite Plan and find the best fit for your goals.
                </p>

                <a
                  href={WA.question}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:gap-3"
                >
                  Talk to a coach
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
