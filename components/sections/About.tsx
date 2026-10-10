import Chip from "@/components/ui/Chip";

const stats = [
  { value: "500+", label: "Students Trained" },
  { value: "8+", label: "Years Experience" },
  { value: "100+", label: "Live Workshops" },
  { value: "Founder", label: "CALYBER" },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* Image */}
          <div className="lg:col-span-4">
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <img
                src="/singa-portrait.jpg"
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

          {/* Coach information */}
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
              experience, Akash has helped hundreds of students understand
              dance beyond just copying choreography.
            </p>
          </div>

          {/* Stats */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center transition hover:border-primary/30 hover:bg-white/[0.05]"
                >
                  <div className="font-display text-3xl font-black text-primary sm:text-4xl">
                    {item.value}
                  </div>

                  <div className="mt-3 text-sm leading-6 text-foreground/70">
                    {item.label}
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