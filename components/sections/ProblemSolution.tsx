import Chip from "@/components/ui/Chip";

const oldWay = [
  "Copy combinations without understanding music.",
  "Poor rhythm and weak body control.",
  "Forget routines after a few weeks.",
  "Progress becomes slow and frustrating.",
  "Freestyle feels impossible.",
];

const calyberWay = [
  "Understand rhythm before choreography.",
  "Develop groove, technique, bounce and musicality.",
  "Train body control step by step.",
  "Build confidence through repetition.",
  "Freestyle becomes natural.",
];

function ComparisonCard({
  variant,
  label,
  title,
  items,
}: {
  variant: "old" | "calyber";
  label: string;
  title: string;
  items: string[];
}) {
  const isCalyber = variant === "calyber";

  return (
    <div
      className={
        isCalyber
          ? "rounded-3xl border border-primary/30 bg-primary/5 p-8 shadow-[0_0_60px_rgba(112,82,255,.08)]"
          : "rounded-3xl border border-red-500/20 bg-red-500/5 p-8"
      }
    >
      <div className="mb-8 flex items-center gap-3">
        <div
          className={
            isCalyber
              ? "flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground"
              : "flex h-10 w-10 items-center justify-center rounded-full bg-red-500/10 text-xl text-red-400"
          }
        >
          {isCalyber ? "✓" : "✕"}
        </div>

        <span
          className={
            isCalyber
              ? "text-xs font-bold uppercase tracking-[0.25em] text-primary"
              : "text-xs font-bold uppercase tracking-[0.25em] text-red-400"
          }
        >
          {label}
        </span>
      </div>

      <h3 className="font-display text-3xl font-black">{title}</h3>

      <div className="mt-8 space-y-5">
        {items.map((item) => (
          <div key={item} className="flex gap-4">
            <div
              className={
                isCalyber
                  ? "mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-primary"
                  : "mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-red-400"
              }
            />

            <p className="text-foreground/75">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProblemSolution() {
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
            <span className="text-lightning">
              {" "}learning system problem.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-foreground/70">
            Most dance classes teach choreography first. Students memorize
            shapes without understanding rhythm, groove or body control.
            CALYBAR changes that by teaching the foundation before the moves.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          <ComparisonCard
            variant="old"
            label="The Old Way"
            title="Learn Choreography First"
            items={oldWay}
          />

          <ComparisonCard
            variant="calyber"
            label="The CALIBAR Way"
            title="Build the System First"
            items={calyberWay}
          />
        </div>
      </div>
    </section>
  );
}