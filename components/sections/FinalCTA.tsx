import Chip from "@/components/ui/Chip";
import { WA } from "@/lib/whatsapp";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-primary/10 blur-[140px]" />

      <div className="absolute -right-20 bottom-0 h-[420px] w-[420px] rounded-full bg-primary/20 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[40px] border border-primary/20 bg-gradient-to-br from-[#141414] via-[#101010] to-[#090909] px-8 py-8 text-center shadow-[0_0_120px_rgba(252,76,19,.08)] md:px-24 md:py-20">
          <Chip>Start Your Dance Journey</Chip>

          <h2 className="mt-8 font-display text-4xl font-black leading-tight md:text-6xl lg:text-7xl">
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