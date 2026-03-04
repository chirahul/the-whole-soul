import type { Metadata } from "next";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about The Whole Soul products, ingredients, shipping, and more.",
};

const FAQ_ITEMS = [
  {
    question: "What does clean label mean?",
    answer:
      "It means our products contain only necessary, natural ingredients — no artificial preservatives, flavours, or fillers.",
  },
  {
    question: "Are your snacks fried?",
    answer: "No. Our chips are baked, not deep fried.",
  },
  {
    question: "Are your products suitable for weight loss?",
    answer:
      "Our snacks are designed to be a better alternative to fried, processed snacks. However, they should be consumed as part of a balanced diet.",
  },
  {
    question: "Do you use preservatives?",
    answer: "No synthetic preservatives are used.",
  },
  {
    question: "Where are you based?",
    answer: "Pune, Maharashtra, India.",
  },
];

export default function FaqPage() {
  return (
    <section className="relative min-h-screen mesh-bg-section overflow-hidden">
      <div className="orb orb-1 top-[10%] right-[10%] pointer-events-none" />
      <div className="orb orb-3 bottom-[15%] left-[5%] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-5 md:px-8 lg:px-12 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 reveal">
          <span className="glass-tag inline-block mb-6 text-[#735F3F]">
            Help Centre
          </span>
          <h1 className="font-[var(--font-besley)] text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            <span className="gradient-text">Frequently Asked</span>{" "}
            <span className="text-[#232743]">Questions</span>
          </h1>
          <p className="text-base text-[#090A11]/50 max-w-md mx-auto leading-relaxed">
            Everything you need to know about our products and practices.
          </p>
        </div>

        {/* Accordion */}
        <div className="reveal">
          <FaqAccordion items={FAQ_ITEMS} />
        </div>

        {/* Still have questions */}
        <div className="mt-12 md:mt-16 text-center reveal">
          <div className="liquid-glass-card iridescent-border rounded-3xl p-8 md:p-10">
            <h3 className="font-[var(--font-besley)] text-xl font-semibold text-[#232743] mb-3">
              Still have questions?
            </h3>
            <p className="text-sm text-[#090A11]/50 mb-6">
              We&rsquo;re happy to help. Reach out to us anytime.
            </p>
            <a href="/contact" className="btn-accent">
              Contact Us
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="ml-2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
