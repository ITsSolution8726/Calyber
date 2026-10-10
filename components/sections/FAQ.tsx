import Chip from "@/components/ui/Chip";
import { WA } from "@/lib/whatsapp";

const items = [
  {
    question: "Do I need any dance experience?",
    answer:
      "No. CALYBER is designed specifically for complete beginners. We start from the basics and build your foundation step by step.",
  },
  {
    question: "Will I learn choreography?",
    answer:
      "Not at first. We focus on rhythm, movement, groove and body awareness before choreography so you develop real dance skills.",
  },
  {
    question: "How are the classes conducted?",
    answer:
      "The Foundation Program includes structured live classes, guided practice sessions and assignments that help you improve every week.",
  },
  {
    question: "Can I learn from home?",
    answer:
      "Absolutely. All you need is a phone or laptop and enough space to move comfortably.",
  },
  {
    question: "Will I get feedback on my progress?",
    answer:
      "Yes. Depending on your program, you'll receive community support, assignments and personal feedback from the coaches.",
  },
  {
    question: "How long does the Foundation Program last?",
    answer:
      "The complete beginner transformation program runs for 8 weeks with 16 structured classes.",
  },
  {
    question: "Which program should I choose?",
    answer:
      "If you're completely new, start with the Foundation Program. If you already have experience, our Workshop or Elite Coaching may be a better fit.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative bg-gradient-to-b from-background via-[#090909] to-background py-16"
    >
      <div className="mx-auto max-w-5xl px-6">
        <Chip>Frequently Asked Questions</Chip>

        <h2 className="mt-5 font-display text-4xl font-black md:text-6xl">
          Everything you
          <span className="text-primary"> need to know.</span>
        </h2>

        <p className="mt-5 max-w-2xl text-lg text-foreground/65">
          Still have questions? Here are the answers to the ones we get asked
          the most.
        </p>

        <div className="mt-14 space-y-5">
          {items.map(({ question, answer }) => (
            <details
              key={question}
              className="group rounded-xl border border-white/10 bg-white/[0.03] transition-all duration-300 open:border-primary/40 open:bg-primary/[0.04]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 text-base font-semibold md:text-lg">
                <span>{question}</span>

                <span className="text-2xl font-light text-primary transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>

              <div className="px-6 pb-5">
                <p className="border-t border-white/10 pt-4 text-[15px] leading-7 text-foreground/65">
                  {answer}
                </p>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-primary/20 bg-primary/10 p-8 text-center">
          <h3 className="font-display text-3xl font-black">
            Still have questions?
          </h3>

          <p className="mt-4 text-foreground/65">
            Our team will help you choose the right program for your current
            level.
          </p>

          <a
            href={WA.question}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-primary px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-black transition hover:scale-105"
          >
            Chat on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}