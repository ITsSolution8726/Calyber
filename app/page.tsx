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

const WHATSAPP_NUMBER = "+919875671010";
const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
const WHATSAPP_URL = waLink(
  "Hi CALYBER — I'd like more info about the program.",
);

// Prefilled WhatsApp messages per intent — helps the user & preloads context for the team.



export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <ProblemSolution />
      <BeginnerExperience />
      <ReadyForMore />
      {/* <VideoShowcase /> */}
      {/* <Testimonials /> */}
      <How />
      <About />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
      <WelcomePopup />

    </div>
  );
}
