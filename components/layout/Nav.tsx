
"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function Nav() {
  const { language, setLanguage } = useLanguage();

  const navLinks = [
    {
      label: language === "en" ? "Pricing" : "Daam",
      href: "#pricing",
    },
    {
      label: language === "en" ? "Testimonials" : "Logon ke Reviews",
      href: "#testimonials",
    },
    {
      label: language === "en" ? "Mentorship" : "Personal Guidance",
      href: "#mentorship",
    },
    {
      label: language === "en" ? "About" : "Hamare Baare Mein",
      href: "#about",
    },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        {/* Logo */}
        <a
          href="#top"
          className="font-display text-sm font-black tracking-[0.14em]"
        >
          <span className="text-primary">CALYBER</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 text-sm text-foreground/80 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher */}
          <div className="flex overflow-hidden rounded-full border border-white/15 text-xs">
            <button
              type="button"
              onClick={() => setLanguage("en")}
              aria-pressed={language === "en"}
              className={`px-3 py-2 font-semibold transition ${
                language === "en"
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              EN
            </button>

            <button
              type="button"
              onClick={() => setLanguage("hi")}
              aria-pressed={language === "hi"}
              className={`px-3 py-2 font-semibold transition ${
                language === "hi"
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              HIN
            </button>
          </div>

          {/* CTA */}
          <a
            href="#beginner"
            className="rounded-full bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground shadow-[0_0_40px_-8px_var(--primary)] transition hover:brightness-110 sm:px-4 sm:text-sm"
          >
            {language === "en" ? "Choose access →" : "Apna Plan Chunein →"}
          </a>
        </div>
      </div>
    </header>
  );
}
