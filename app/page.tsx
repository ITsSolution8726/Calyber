"use client";
import { useState } from "react";

import {
  ArrowRight,
  CalendarDays,
  Star,
  Crown,
  CheckCircle2,
} from "lucide-react";
import JoinModal from "@/components/JoinModal";
import Hero from "@/components/Hero";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import BeginnerExperience from "@/components/sections/BeginnerExperience";
import About from "@/components/sections/About";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import How from "@/components/sections/How";
import ReadyForMore from "@/components/sections/ReadyForMore";
import Testimonials from "@/components/sections/Testimonials";
import VideoShowcase from "@/components/sections/VideoShowcase";
import WelcomePopup from "@/components/WelcomePopup";
import ProblemSolution from "@/components/sections/ProblemSolution";
import Footer from "@/components/layout/footer";
import Nav from "@/components/layout/Nav";

const WHATSAPP_NUMBER = "10000000000";
const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
const WHATSAPP_URL = waLink(
  "Hi CALYBER — I'd like more info about the program.",
);

// Prefilled WhatsApp messages per intent — helps the user & preloads context for the team.


const programs = [
  {
    icon: CalendarDays,
    title: "Beginner",
    subtitle: "Experience",
    price: "₹99",
    duration: "2 Hour Live Workshop",
    description:
      "The perfect first step for complete beginners. Learn the fundamentals and discover how the CALYBER learning system works.",

    button: "Join Now",

    href: "#",

    features: [
      "2-Hour Live Session",
      "Rhythm Basics",
      "Movement Fundamentals",
      "Beginner Practice Guide",
      "Q&A Session",
    ],
  },

  {
    icon: Star,
    title: "Foundation",
    subtitle: "Program",
    popular: true,

    price: "₹1,999",

    duration: "8 Weeks • 16 Classes",

    description:
      "The complete beginner transformation system with structured learning, assignments and community support.",

    button: "Join Now",

    href: "#",

    features: [
      "16 Live Classes",
      "Weekly Practice Plan",
      "WhatsApp Community",
      "Recorded Sessions",
      "Assignments",
      "Progress Tracking",
      "Certificate",
    ],
  },

  {
    icon: Crown,

    title: "Elite",

    subtitle: "Coaching",

    price: "Custom",

    duration: "Personal Coaching",

    description:
      "Personal mentorship for serious learners who want faster improvement with individual guidance.",

    button: "Apply Now",

    href: "#",

    features: [
      "1-on-1 Coaching",
      "Personal Feedback",
      "Custom Roadmap",
      "Priority Support",
      "Direct Mentorship",
    ],
  },
];

function Pricing() {
  const [modalOpen, setModalOpen] = useState(false);

  const [selectedProgram, setSelectedProgram] = useState<{
    title: string;
    subtitle: string;
    price: string;
  } | null>(null);
  return (
    <section
      id="pricing"
      className="relative overflow-hidden py-28"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-grid opacity-10" />

      <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[140px]" />

      <div className="absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">

            Our Programs

          </span>

          <h2 className="mx-auto mt-8 max-w-4xl font-display text-5xl font-black leading-none md:text-7xl">

            Choose Your{" "}

            <span className="text-primary">
              Path.
            </span>

            <br />

            Transform Your Dance.

          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-foreground/70">

            Whether you're taking your first step or looking for complete
            mentorship, choose the learning experience that matches your goals.

          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              {...program}
              onJoin={(program) => {
                setSelectedProgram(program);
                setModalOpen(true);
              }}
            />
          ))}

        </div>
      </div>
      <JoinModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        program={selectedProgram}
      />
    </section>
  );
}

type ProgramCardProps = {
  icon: any;
  title: string;
  subtitle: string;
  popular?: boolean;
  price: string;
  duration: string;
  description: string;
  button: string;
  href: string;
  features: string[];

  onJoin: (program: {
    title: string;
    subtitle: string;
    price: string;
  }) => void;
};
function ProgramCard({
  icon: Icon,
  title,
  subtitle,
  popular,
  price,
  duration,
  description,
  button,
  href,
  features,
  onJoin,
}: ProgramCardProps) {
  return (
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border transition-all duration-300 hover:-translate-y-2
      ${popular
          ? "border-primary bg-gradient-to-b from-primary/10 via-[#111111] to-[#090909] shadow-[0_20px_60px_rgba(252,76,19,0.18)]"
          : "border-white/10 bg-[#0B0B0B] hover:border-primary/40"
        }`}
    >
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute left-1/2 top-0 h-44 w-44 -translate-x-1/2 rounded-full bg-primary/10 blur-[80px]" />
      </div>

      {/* Popular */}
      {popular && (
        <div className="absolute right-5 top-3 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-black">
          Most Popular
        </div>
      )}

      <div className="relative flex h-full flex-col p-6 lg:p-7">

        {/* Header */}

        <div className="flex items-start justify-between">

          <div>

            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon className="h-6 w-6" />
            </div>

            <p className="text-[11px] uppercase tracking-[0.28em] text-primary">
              {subtitle}
            </p>

            <h3 className="mt-1 font-display text-3xl font-black text-white">
              {title}
            </h3>

          </div>

          <div className={`${popular ? "pt-6" : ""} text-right`}>

            <div className="font-display text-4xl font-black text-primary">
              {price}
            </div>

            <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/45">
              {duration}
            </p>

          </div>

        </div>

        {/* Description */}

        <p className="mt-5 text-sm leading-6 text-white/70">
          {description}
        </p>

        {/* Divider */}

        <div className="my-5 h-px bg-gradient-to-r from-primary/30 via-white/10 to-transparent" />

        {/* Features */}

        <div className="flex-1 space-y-2.5">

          {features.map((feature) => (

            <div
              key={feature}
              className="flex items-start gap-3"
            >
              <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" />

              <span className="text-sm leading-5 text-white/85">
                {feature}
              </span>

            </div>

          ))}

        </div>

        {/* Button */}

        <button
          onClick={() =>
            onJoin({
              title,
              subtitle,
              price,
            })
          }
          className={`mt-6 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold uppercase tracking-[0.14em] transition-all duration-300
    ${popular
              ? "bg-primary text-black hover:brightness-110"
              : "border border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-black"
            }`}
        >
          {button}

          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>

      </div>
    </div>
  );
}


export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <ProblemSolution />
      <BeginnerExperience />
      <VideoShowcase />
      <Pricing />
      <Testimonials />
      <How />
      <About />
      <ReadyForMore />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
      <WelcomePopup />

    </div>
  );
}
