const WHATSAPP_NUMBER = "919875671010";

export const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const WA = {
  // Live Dance Demo Class Registration
  liveDemo: (name = "", email = "", preferredDate = "") =>
    waLink(
      `Hi CALYBER! 👋 I'd like to register my interest in a free live dance demo class.

Name: ${name}
Email: ${email}
Preferred Demo Date: ${preferredDate}

Please confirm the available demo class timings and share the details to join. I'm excited to experience CALYBER's dance training!

Thank you!`,
    ),
  // Foundation Program
   foundationPricing: (
    price: string,
    originalPrice: string,
    currency: string,
  ) => waLink(
    "Hi CALYBER!, I'd like to join the Foundation Program. Please share the next batch dates and enrollment details.",
  ),

  // Elite Coaching
  eliteCoaching: waLink(
    "Hi Akash Swami!, I'm interested in CALYBER Elite Coaching. I'd like to improve my dance skills through one-on-one dance coaching, expert feedback, and a personalized training roadmap. Please share the pricing, availability, and enrollment process.",
  ),

  // Personal Mentorship
  mentorship: waLink(
    "Hi CALYBER!, I'd like to know more about your Personal dance mentorship. Please share the coaching format, personalized training options, pricing, and how I can get started.",
  ),

  // General Questions
  question: waLink(
    "Hi CALYBER!, I visited your website and would like to know more about your dance programs, current pricing, upcoming batches, and enrollment process.",
  ),

  // Floating WhatsApp Button — message unchanged
  float: waLink(
    "Hi CALYBER!, I'm visiting your website and have a question about your dance programs. Could you please help me?",
  ),
};