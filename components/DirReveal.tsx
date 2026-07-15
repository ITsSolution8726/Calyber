"use client";
import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "left" | "right" | "up" | "down";

const offsets: Record<Direction, { x: number; y: number }> = {
  left: { x: -80, y: 0 },
  right: { x: 80, y: 0 },
  up: { x: 0, y: -80 },
  down: { x: 0, y: 80 },
};

export function DirReveal({
  children,
  from = "up",
  delay = 0,
  className,
}: {
  children: ReactNode;
  from?: Direction;
  delay?: number;
  className?: string;
}) {
  const off = offsets[from];
  const variants: Variants = {
    hidden: { opacity: 0, x: off.x, y: off.y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
    },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}