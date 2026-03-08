import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { FAQ_ITEMS, WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Frequently asked questions about The Whole Soul — clean label snacks, ingredients, shipping, and more.",
};

export default function FaqPage() {
  return (
    <section className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-3xl mx-auto px-5 md:px-8 lg:px-12 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 reveal">
          <span className="tag inline-block mb-6">Got Questions?</span>
          <h1 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
            We&apos;ve Got Answers
          </h1>
          <p className="text-base text-[#555] max-w-md mx-auto leading-relaxed">
            Everything you need to know. If it&apos;s not here, just ask — we don&apos;t bite (our snacks do though).
          </p>
        </div>

        {/* Accordion */}
        <div className="reveal">
          <FaqAccordion items={FAQ_ITEMS} />
        </div>

        {/* Custom hamper + contact CTA */}
        <div className="mt-12 md:mt-16 space-y-6 reveal">
          {/* Custom hamper */}
          <div className="bg-[#FFF3E6] border border-[#D4710A]/20 rounded-2xl p-6 md:p-8 text-center">
            <h3 className="font-[var(--font-heading)] text-xl font-bold text-[#1A1A1A] mb-2">
              Custom Hamper Orders
            </h3>
            <p className="text-sm text-[#555] mb-5">
              Planning a gift? We do customised hampers for festivals, birthdays, corporate events — you name it.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp inline-flex">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.68-1.227A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.24 0-4.326-.672-6.064-1.827l-.424-.283-3.088.81.825-3.013-.31-.466A9.957 9.957 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Order a Custom Hamper
            </a>
          </div>

          {/* Still have questions */}
          <div className="bg-white border border-[#E8E3DA] rounded-2xl p-6 md:p-8 text-center">
            <h3 className="font-[var(--font-heading)] text-xl font-bold text-[#1A1A1A] mb-2">
              Still have questions?
            </h3>
            <p className="text-sm text-[#555] mb-5">
              We&apos;re real humans. We respond. Usually with enthusiasm.
            </p>
            <Link href="/contact" className="btn-primary">
              Contact Us
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
