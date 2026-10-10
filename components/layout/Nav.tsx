"use client";

const navLinks = [
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Mentorship", href: "#mentorship" },
  { label: "About", href: "#about" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#top"
          className="font-display text-sm font-black tracking-[0.14em]"
        >
          <span className="text-primary">CALYBER</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 text-sm text-foreground/80 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <div className="hidden overflow-hidden rounded-full border border-white/15 text-xs md:flex">
            <button
              type="button"
              className="bg-primary px-3 py-1.5 font-semibold text-primary-foreground"
            >
              EN
            </button>

            <button
              type="button"
              className="px-3 py-1.5 text-foreground/70"
            >
              RU
            </button>
          </div>

          <a
            href="#pricing"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_-8px_var(--primary)] transition hover:brightness-110"
          >
            Choose access →
          </a>
        </div>
      </div>
    </header>
  );
}