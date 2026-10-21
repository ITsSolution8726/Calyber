
"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] p-1"
      aria-label="Choose website language"
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={`rounded-full px-3 py-2 text-xs font-semibold transition ${
          language === "en"
            ? "bg-primary text-black"
            : "text-foreground/70 hover:text-foreground"
        }`}
      >
        English
      </button>

      <button
        type="button"
        onClick={() => setLanguage("hi")}
        aria-pressed={language === "hi"}
        className={`rounded-full px-3 py-2 text-xs font-semibold transition ${
          language === "hi"
            ? "bg-primary text-black"
            : "text-foreground/70 hover:text-foreground"
        }`}
      >
        Hinglish
      </button>
    </div>
  );
}
