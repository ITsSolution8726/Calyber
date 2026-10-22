
import { Youtube, Instagram, Facebook } from "lucide-react";

const socialLinks = [
  {
    name: "YouTube",
    href: "https://youtube.com/@calyberdance?si=sEf6RWnOiQ0jZm7a",
    Icon: Youtube,
    hoverClass: "hover:text-red-500",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/calyber.dance/",
    Icon: Instagram,
    hoverClass: "hover:text-pink-500",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1L6mTah2us/",
    Icon: Facebook,
    hoverClass: "hover:text-blue-500",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left">
        <div>
          <div className="text-xs uppercase tracking-[0.14em] text-foreground/50">
            CALYBER · By Akash Swami
          </div>

          {/* Social Media Icons */}
          <div className="mt-4 flex items-start gap-5">
            <a
              href="https://youtube.com/@calyberdance?si=sEf6RWnOiQ0jZm7a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CALYBER on YouTube"
              className="text-foreground/50 transition hover:-translate-y-0.5 hover:text-red-500"
            >
              <Youtube size={20} strokeWidth={1.8} />
            </a>

            <a
              href="https://www.instagram.com/calyber.dance/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CALYBER on Instagram"
              className="text-foreground/50 transition hover:-translate-y-0.5 hover:text-pink-500"
            >
              <Instagram size={20} strokeWidth={1.8} />
            </a>

            <a
              href="https://www.facebook.com/share/1L6mTah2us/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CALYBER on Facebook"
              className="text-foreground/50 transition hover:-translate-y-0.5 hover:text-blue-500"
            >
              <Facebook size={20} strokeWidth={1.8} />
            </a>
          </div>

          <div className="mt-2 text-xs text-foreground/40">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>

        <div className="text-xs text-foreground/40">
          Designed &amp; Developed by{" "}
          <a
            href="https://itssolution.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary transition hover:text-primary/80"
          >
            IT&apos;s Solution
          </a>
        </div>
      </div>
    </footer>
  );
}
