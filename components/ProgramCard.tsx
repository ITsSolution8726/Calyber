import type { LucideIcon } from "lucide-react";

export type Program = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  popular?: boolean;
  price: string;
  duration: string;
  description: string;
  button: string;
  href: string;
  features: string[];
};