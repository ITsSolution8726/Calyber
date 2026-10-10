import {
  Accessibility,
  AudioLines,
  Waves,
  SlidersHorizontal,
  Music2,
  Lightbulb,
} from "lucide-react";

import Chip from "@/components/ui/Chip";
import Reveal from "@/components/ui/Reveal";

const steps = [
  {
    icon: Accessibility,
    title: "BODY",
    desc: "Build body awareness, posture, and the foundation of movement.",
  },
  {
    icon: AudioLines,
    title: "BEAT",
    desc: "Recognize the beat, develop timing, and connect your movements to rhythm.",
  },
  {
    icon: Waves,
    title: "GROOVE",
    desc: "Develop bounce, flow, and a natural connection with the music.",
  },
  {
    icon: SlidersHorizontal,
    title: "CONTROL",
    desc: "Improve balance, coordination, isolation, and precision in every movement.",
  },
  {
    icon: Music2,
    title: "MUSIC",
    desc: "Understand musicality, explore different sounds, and move with intention.",
  },
  {
    icon: Lightbulb,
    title: "CREATE",
    desc: "Combine your skills, discover your own style, and express yourself freely.",
  },
];

export default function How() {
  return (
    <section
      id="how"
      className="relative bg-gradient-to-b from-background via-[#0a0a0a] to-background py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <Chip>How CALYBER Works</Chip>

        <h2 className="mt-5 font-display text-4xl font-black leading-tight md:text-6xl">
          Our <span className="text-primary">6-Step Learning</span> System
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-foreground/65">
          Every beginner follows a structured path. We build body awareness,
          develop rhythm, and master control before helping dancers create
          their own movement and style.
        </p>

        <div className="mt-20">
          {/* Mobile timeline */}
          <div className="relative lg:hidden">
            <div className="absolute bottom-8 left-[38px] top-8 w-px border-l border-dashed border-primary/30" />

            <div className="space-y-10">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <Reveal key={step.title} delay={index * 0.12}>
                    <div className="relative flex items-start gap-8">
                      <div className="relative z-10 flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-[#151515] shadow-[0_0_30px_rgba(252,76,19,.12)]">
                        <Icon
                          className="h-9 w-9 text-primary"
                          strokeWidth={1.8}
                        />
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

          {/* Desktop timeline */}
          <div className="relative hidden lg:block">
            <div className="absolute left-0 right-0 top-10 h-px border-t border-dashed border-primary/25" />

            <div className="grid grid-cols-6 gap-5">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <Reveal key={step.title} delay={index * 0.15}>
                    <div className="relative flex flex-col items-center text-center">
                      <div className="absolute left-1/2 top-10 h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_18px_rgba(252,76,19,.5)]" />

                      <div className="relative z-10 mt-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-primary/20 bg-[#151515] shadow-[0_0_35px_rgba(252,76,19,.12)] transition duration-500 hover:-translate-y-2 hover:border-primary hover:shadow-[0_0_60px_rgba(252,76,19,.35)] xl:h-24 xl:w-24">
                        <Icon className="h-8 w-8 text-primary xl:h-10 xl:w-10" />
                      </div>

                      <span className="mt-8 font-display text-4xl font-black text-primary/20 xl:text-5xl">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3 className="mt-3 font-display text-xl font-black xl:text-2xl">
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