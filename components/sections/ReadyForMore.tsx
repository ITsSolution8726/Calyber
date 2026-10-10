import Chip from "@/components/ui/Chip";
import { WA } from "@/lib/whatsapp";

const journeySteps = [
  "₹99 Beginner Experience",
  "Build Confidence",
  "Learn Real Fundamentals",
  "Join Foundation Program",
  "Become an Independent Dancer",
];

export default function ReadyForMore() {
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
                freestyle and choreography through a structured learning
                system.
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
                {journeySteps.map((step, index) => (
                  <div key={step} className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-black">
                      {index + 1}
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