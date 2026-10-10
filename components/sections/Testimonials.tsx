import Chip from "@/components/ui/Chip";

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

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-gradient-to-b from-background via-[#0a0a0a] to-background py-28"
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
                  loading="lazy"
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
                      aria-hidden="true"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                <span className="absolute bottom-4 right-4 rounded-lg bg-black/70 px-3 py-1 text-xs font-semibold">
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

                <div className="mt-6 flex items-center gap-2 font-semibold text-primary">
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