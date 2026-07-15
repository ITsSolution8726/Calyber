import Link from "next/link";
import Image from "next/image";

import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/entertainment", label: "Entertainment" },
  { to: "/contact", label: "Contact" },
] as const;

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-border/40 glass">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.webp"
              alt="Boost Up Digital"
              width={48}
              height={48}
              className="rounded-lg"
            />

            <div>
              <div className="font-display font-bold text-xl text-gradient-brand">
                Boost Up Digital
              </div>

              <div className="text-xs tracking-widest text-muted-foreground">
                GROW · RANK · CONVERT
              </div>
            </div>
          </Link>

          <p className="mt-4 text-sm text-muted-foreground max-w-md">
            A new-age digital marketing studio helping brands generate leads,
            scale fast, and create unforgettable content.
          </p>

          <div className="flex gap-3 mt-6">
            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-10 w-10 grid place-items-center rounded-full glass hover:bg-gradient-brand hover:scale-110 transition-all"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm tracking-widest uppercase text-muted-foreground">
            Explore
          </h4>

          <ul className="space-y-2 text-sm">
            {navItems.map((i) => (
              <li key={i.to}>
                <Link href={i.to}>{i.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm tracking-widest uppercase text-muted-foreground">
            Contact
          </h4>

          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 shrink-0" />
              boostupdigital.official03@gmail.com
            </li>

            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 shrink-0" />
              8509121389
            </li>

            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              Singur, Hooghly, WB
            </li>
          </ul>
        </div>
      </div>

      <div className="py-6">
        <div className="mx-auto max-w-7xl border-t border-border px-4 pt-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-2 text-center text-xs text-muted-foreground lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <p>
              © {new Date().getFullYear()} Boost Up Digital. Crafted with
              passion.
            </p>

            <p>
              Designed & Developed by{" "}
              <a
                href="https://itssolution.in"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground hover:text-brand-yellow transition-colors"
              >
                IT&apos;s Solution
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
