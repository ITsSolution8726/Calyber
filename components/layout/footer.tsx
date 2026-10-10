export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center md:flex-row md:text-left">
        <div>
          <div className="text-xs uppercase tracking-[0.14em] text-foreground/50">
            CALYBER · By Akash Swami
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