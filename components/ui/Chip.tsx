
import type { ReactNode } from "react";
import Dot from "./Dot";

type ChipProps = {
  children: ReactNode;
  className?: string;
};

export default function Chip({
  children,
  className = "",
}: ChipProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-3 py-1.5 text-xs uppercase tracking-[0.14em] text-foreground/80 ${className}`}
    >
      <Dot />
      {children}
    </span>
  );
}