
import Chip from "@/components/ui/Chip";
import { WA } from "@/lib/whatsapp";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-20 sm:opacity-30" />

      {/* Ambient glow effects */}
      <div className="pointer-events-none absolute -left-24 top-0 -z-10 h-48 w-48 rounded-full bg-primary/10 blur-[90px] sm:-left-32 sm:h-72 sm:w-72 sm:blur-[120px] lg:h-96 lg:w-96 lg:blur-[140px]" />

      <div className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-56 w-56 rounded-full bg-primary/15 blur-[100px] sm:-right-28 sm:h-80 sm:w-80 sm:blur-[140px] lg:-right-20 lg:h-[420px] lg:w-[420px] lg:blur-[180px]" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main CTA card */}
        <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-[#141414] via-[#101010] to-[#090909] px-4 py-9 text-center shadow-[0_0_60px_rgba(252,76,19,.06)] sm:rounded-3xl sm:px-8 sm:py-12 sm:shadow-[0_0_90px_rgba(252,76,19,.07)] md:px-12 md:py-16 lg:rounded-[40px] lg:px-16 lg:py-20 xl:px-24">
          {/* Subtle card glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-32 w-48 -translate-x-1/2 rounded-full bg-primary/10 blur-[80px] sm:h-40 sm:w-72" />

          <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center">
            <Chip>Start Your Dance Journey</Chip>

            {/* Heading */}
            <h2 className="mt-6 max-w-4xl font-display text-3xl font-black leading-[1.08] tracking-tight sm:mt-7 sm:text-4xl md:mt-8 md:text-5xl lg:text-6xl xl:text-7xl">
              Dance isn't
              <span className="text-primary"> Talent.</span>
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              It's a Skill.
            </h2>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-3xl text-sm leading-6 text-foreground/65 sm:mt-6 sm:text-base sm:leading-7 md:mt-8 md:text-lg md:leading-8">
              Whether you're taking your very first step or looking for
              personal coaching, CALYBER gives you the right system to
              become a confident dancer.
            </p>

            {/* CTA buttons */}
            <div className="mt-7 flex w-full max-w-xl flex-col justify-center gap-3 sm:mt-9 sm:flex-row sm:gap-4 md:mt-12 md:gap-5">
              <a
                href="#beginner"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-primary px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.12em] text-black transition-all duration-300 hover:scale-[1.02] sm:px-8 sm:tracking-[0.18em]"
              >
                Start Your Journey
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>

              <a
                href={WA.question}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-white/20 bg-white/[0.02] px-5 py-3.5 text-center text-xs font-bold uppercase tracking-[0.12em] transition duration-300 hover:border-primary hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#101010] sm:min-h-14 sm:w-auto sm:flex-1 sm:px-6 sm:text-sm sm:tracking-[0.13em] md:px-8 lg:px-10"
              >
                Talk To Us
              </a>
            </div>

            {/* Benefits */}
            <div className="mt-9 grid w-full max-w-4xl grid-cols-2 gap-3 text-left sm:mt-10 sm:gap-x-6 sm:gap-y-4 md:mt-14 md:gap-4 lg:grid-cols-4 lg:gap-6">
              {[
                "Beginner Friendly",
                "Live Classes",
                "Community Support",
                "Personal Coaching",
              ].map((benefit) => (
                <div
                  key={benefit}
                  className="flex min-w-0 items-center justify-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] px-2 py-3 text-center text-[10px] font-medium uppercase leading-5 tracking-[0.04em] text-white/55 sm:px-3 sm:text-xs sm:tracking-[0.08em] md:gap-2 md:px-1 md:py-2 lg:flex-col lg:gap-2 lg:border-0 lg:bg-transparent lg:text-xs lg:tracking-[0.1em]"
                >
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-lg font-bold text-primary sm:text-xl lg:text-2xl xl:text-3xl"
                  >
                    ✓
                  </span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
