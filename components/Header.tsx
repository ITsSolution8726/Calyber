"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";


const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/entertainment", label: "Entertainment" },
  { to: "/contact", label: "Contact" },
] as const;

export default function Header() {
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
            <Image
              src="/logo.webp"
              alt="Boost Up Digital"
              width={48}
              height={48}
              className="rounded-lg object-cover"
            />

            <div className="hidden sm:block leading-tight">
              <div className="font-display font-bold text-lg text-gradient-brand">
                Boost Up
              </div>

              <div className="text-[10px] tracking-[0.3em] text-muted-foreground -mt-1">
                DIGITAL
              </div>
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
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
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