
const WHATSAPP_NUMBER = "919875671010";

export const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const WA = {
  lightning: waLink(
    "Hi Akash Swami! I'd like to join the LIGHTNING package ($249) — Electro Foundation. Can you send me the next steps?",
  ),

  thunderbolt: waLink(
    "Hi Akash Swami! I'd like to apply for the THUNDERBOLT package ($649) with personal mentorship. Can you tell me if a mentorship spot is still open?",
  ),

  webinar: (name = "", email = "") =>
    waLink(
      `Hi! I want to register for the free CALYBER webinar (Sun, July 12).\nName: ${name}\nEmail: ${email}`,
    ),

  question: waLink(
    "Hi! I have a question about CALYBER before I join.",
  ),

  foundation: waLink(
    "Hi! Tell me more about the Electro Foundation WhatsApp library.",
  ),

  mentorship: waLink(
    "Hi Akash Swami! I'd like details on the personal mentorship track (THUNDERBOLT).",
  ),

  float: waLink(
    "Hi CALYBER 👋 I'm on the site and have a quick question.",
  ),
};