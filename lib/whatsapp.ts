
const WHATSAPP_NUMBER = "919875671010";

export const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const WA = {
  // Foundation Program — 16 guided classes
  lightning: waLink(
    "Hi CALYBER! 👋 I'd like to join the Foundation Program. Please share the current pricing, next batch dates, and enrollment details for the 16 guided classes covering Body, Beat, Groove, Control, Music, and Create.",
  ),

  // Elite Coaching — personal dance classes
  thunderbolt: waLink(
    "Hi Akash Swami! 👋 I'm interested in CALYBER Elite Coaching. I'd like to improve my dance skills through personal coaching, expert feedback, and a customized learning roadmap. Please share the pricing, availability, and enrollment process.",
  ),

  // Free webinar registration
  webinar: (name = "", email = "") =>
    waLink(
      `Hi CALYBER! 👋 I'd like to register for the free CALYBER webinar.\nName: ${name}\nEmail: ${email}\nPlease share the webinar date, timing, and registration details.`,
    ),

  // General questions
  question: waLink(
    "Hi CALYBER! 👋 I visited your website and would like to know more about your dance-learning programs, current pricing, upcoming batches, and enrollment process.",
  ),

  // Foundation Program details
  foundation: waLink(
    "Hi CALYBER! 👋 Please tell me more about the Foundation Program, including the 16 guided classes, 6 Core Skills (Body, Beat, Groove, Control, Music, and Create), program duration, current fees, and what is included.",
  ),

  // Personal mentorship / Elite Coaching
  mentorship: waLink(
    "Hi Akash Swami! 👋 I'd like to know more about CALYBER Elite Coaching and personal mentorship. Please share the available coaching options, pricing, session format, and how to get started.",
  ),

  // Floating WhatsApp button
  float: waLink(
    "Hi CALYBER! 👋 I'm visiting your website and have a question about your dance programs. Could you please help me?",
  ),
};
