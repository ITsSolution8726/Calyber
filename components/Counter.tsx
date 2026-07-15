"use client";
import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export function Counter({ to, suffix = "", prefix = "", decimals = 0 }: { to: number; suffix?: string; prefix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 2000, bounce: 0 });
  const [display, setDisplay] = useState("0");

  useEffect(() => { if (inView) mv.set(to); }, [inView, to, mv]);
  useEffect(() => spring.on("change", (v) => setDisplay(v.toFixed(decimals))), [spring, decimals]);

  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}

export function Typewriter({ words, className }: { words: string[]; className?: string }) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[idx];
    const speed = deleting ? 50 : 90;
    const t = setTimeout(() => {
      if (!deleting) {
        setText(word.slice(0, text.length + 1));
        if (text.length + 1 === word.length) setTimeout(() => setDeleting(true), 1400);
      } else {
        setText(word.slice(0, text.length - 1));
        if (text.length - 1 === 0) { setDeleting(false); setIdx((idx + 1) % words.length); }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, idx, words]);

  return (
    <span className={className}>
      {text}
      <span className="inline-block w-[3px] h-[0.9em] bg-current ml-1 align-middle animate-pulse" />
    </span>
  );
}
