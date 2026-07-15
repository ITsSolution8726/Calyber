"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X, Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.webp";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/entertainment", label: "Entertainment" },
  { to: "/contact", label: "Contact" },
] as const;

function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 glass border-b border-border/40"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <img src={logo} alt="Boost Up Digital" className="h-12 w-12 rounded-lg object-cover" />
            <div className="hidden sm:block leading-tight">
              <div className="font-display font-bold text-lg text-gradient-brand">Boost Up</div>
              <div className="text-[10px] tracking-[0.3em] text-muted-foreground -mt-1">DIGITAL</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const active = pathname === item.to;
              return (
                <Link
                  key={item.to}
                  href={item.to}
                  className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-gradient-brand opacity-20"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="ml-2 inline-flex items-center rounded-full bg-gradient-brand px-5 py-2 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform"
            >
              Get Started
            </Link>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-foreground"
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            className="md:hidden pb-4 flex flex-col gap-1"
          >
            {navItems.map((item) => (
              <Link
                key={item.to}
                href={item.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg text-sm font-medium hover:bg-secondary"
              >
                {item.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}

function Footer() {
  return (
    <footer className="mt-32 border-t border-border/40 glass">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-3">
            <img src={logo} alt="Boost Up Digital" className="h-12 w-12 rounded-lg" />
            <div>
              <div className="font-display font-bold text-xl text-gradient-brand">Boost Up Digital</div>
              <div className="text-xs tracking-widest text-muted-foreground">GROW · RANK · CONVERT</div>
            </div>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground max-w-md">
            A new-age digital marketing studio helping brands generate leads, scale fast, and create unforgettable content.
          </p>
          <div className="flex gap-3 mt-6">
            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="h-10 w-10 grid place-items-center rounded-full glass hover:bg-gradient-brand hover:scale-110 transition-all">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm tracking-widest uppercase text-muted-foreground">Explore</h4>
          <ul className="space-y-2 text-sm">
            {navItems.map((i) => (
              <li key={i.to}><Link href={i.to} className="hover:text-gradient-brand">{i.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm tracking-widest uppercase text-muted-foreground">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0" />boostupdigital.official03@gmail.com</li>
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0" />8509121389</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" />Singur, Hooghly, WB</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/40 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Boost Up Digital. Crafted with passion.
      </div>
    </footer>
  );
}

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1"><Outlet /></main>
      <Footer />
    </div>
  );
}
