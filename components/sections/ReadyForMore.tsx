
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
    description: "One-to-one guidance for your goals.",
  },
  {
    icon: Target,
    title: "Custom Roadmap",
    description: "A structured plan for better technique.",
  },
  {
    icon: MessageCircle,
    title: "Expert Feedback",
    description: "Personal feedback to improve your skills.",
  },
  {
    icon: Sparkles,
    title: "Your Own Style",
    description: "Build musicality, confidence, and expression.",
  },
];

export default function ReadyForMore() {
  return (
    <section
      id="elite-coaching"
      className="relative isolate overflow-hidden py-14 sm:py-20 md:py-24"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-10" />

      <div className="pointer-events-none absolute -left-24 top-0 -z-10 h-56 w-56 rounded-full bg-primary/10 blur-[100px] sm:h-72 sm:w-72 sm:blur-[120px]" />

      <div className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-64 w-64 rounded-full bg-primary/15 blur-[110px] sm:h-80 sm:w-80 sm:blur-[140px]" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-[#151515] via-[#101010] to-[#090909] p-5 shadow-[0_0_60px_rgba(252,76,19,.06)] sm:rounded-[32px] sm:p-8 md:p-12 lg:p-14">
          <div className="grid grid-cols-1 items-center gap-9 md:gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
            {/* Left: Compact CTA */}
            <div className="min-w-0">
              <Chip>Personal Dance Classes</Chip>


              <h2 className="mt-5 font-display text-3xl font-black leading-tight sm:text-4xl md:text-5xl xl:text-6xl">
                One-on-One
                <span className="text-primary"> Dance Coaching.</span>
              </h2>


              <p className="mt-4 max-w-lg text-sm leading-6 text-foreground/70 sm:text-base sm:leading-7">
                Improve your hip-hop dance skills with CALYBER Elite
                Coaching. Get personalized training, expert feedback,
                and a learning plan built around your goals.
              </p>

              <a
                href={WA.mentorship}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-center text-sm font-bold uppercase tracking-wide text-black transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#101010] sm:mt-7 sm:w-auto sm:px-7"
              >
                Explore Elite Coaching
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <p className="mt-3 text-xs text-foreground/40">
                Personal classes. Individual guidance. Your progress.
              </p>
            </div>

            {/* Right: Quick Benefits */}
            <div className="min-w-0 rounded-2xl border border-primary/20 bg-primary/[0.04] p-4 sm:rounded-3xl sm:p-6 md:p-7">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary sm:text-xs sm:tracking-[0.25em]">
                The Elite Plan
              </span>

              <h3 className="mt-3 font-display text-xl font-black sm:text-2xl">
                Coaching Built Around You
              </h3>

              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-6">
                {eliteBenefits.map((benefit) => {
                  const Icon = benefit.icon;

                  return (
                    <div
                      key={benefit.title}
                      className="flex min-w-0 items-start gap-3"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 sm:h-10 sm:w-10">
                        <Icon className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                      </div>

                      <div className="min-w-0">
                        <h4 className="text-sm font-semibold sm:text-base">
                          {benefit.title}
                        </h4>

                        <p className="mt-1 text-xs leading-5 text-foreground/60 sm:text-sm sm:leading-6">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 border-t border-white/10 pt-5">
                <a
                  href={WA.eliteCoaching}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center gap-2 text-sm font-bold text-primary transition hover:gap-3"
                >
                  Talk to a Coach
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
