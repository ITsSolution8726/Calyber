
"use client";

import { FaWhatsapp } from "react-icons/fa";
import { WA } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  return (
    <a
      href={WA.float}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with CALYBER on WhatsApp"
      className="group fixed bottom-4 right-4 z-50 inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#25D366] p-2.5 shadow-[0_12px_40px_rgba(37,211,102,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_16px_50px_rgba(37,211,102,0.45)] active:scale-95 sm:bottom-6 sm:right-6 sm:gap-3 sm:py-3 sm:pl-3 sm:pr-5"
    >
      <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[#25D366]/30 blur-xl transition-opacity group-hover:opacity-100" />

      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white sm:h-12 sm:w-12">
        <FaWhatsapp aria-hidden="true" className="h-8 w-8 sm:h-9 sm:w-9" />
      </span>

      <span className="hidden pr-1 sm:block">
        <span className="block text-left text-[10px] font-medium uppercase tracking-[0.18em] text-black/70">
          Need Help?
        </span>
        <span className="block text-sm font-bold text-black">
          Talk To Instructor
        </span>
      </span>
    </a>
  );
}