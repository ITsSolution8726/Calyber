import Chip from "@/components/ui/Chip";

export default function VideoShowcase() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Chip>See it in motion</Chip>

        <h2 className="mt-6 max-w-3xl font-display text-4xl font-black md:text-5xl">
          A glimpse of the <span className="italic text-primary">energy.</span>
        </h2>

        <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-black shadow-[0_40px_120px_-40px_var(--primary)]">
          <div className="relative aspect-video">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/videoseries?list=PLp0d8xTFbEwWQZQGWSCS8P7GNRHRuq2fu&autoplay=0&mute=1&loop=1"
              title="Electro dance showcase"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}