import type { Metadata } from "next";
import Link from "next/link";
import { CleanLabelComparison } from "@/components/home/CleanLabelComparison";
import { WhatMakesUsDifferent } from "@/components/home/WhatMakesUsDifferent";

export const metadata: Metadata = {
  title: "Our Philosophy",
  description:
    "Clean ingredients. No shortcuts. See what makes The Whole Soul different from every other snack brand.",
};

export default function PhilosophyPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-[#FAF7F2]">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center reveal">
          <span className="tag inline-block mb-6">Our Philosophy</span>
          <h1 className="font-[var(--font-heading)] text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#1A1A1A]">
            We Chose a Quieter Path.
          </h1>
          <p className="text-lg md:text-xl text-[#555] leading-relaxed max-w-2xl mx-auto">
            In a world full of shortcuts, additives, and loud claims — we went the other way. Every ingredient earns its place. Every product is made with intention.
          </p>
        </div>
      </section>

      {/* Beliefs */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 stagger-children">
            <div className="bg-[#FAF7F2] border border-[#E8E3DA] rounded-2xl p-7 md:p-10">
              <h3 className="font-[var(--font-heading)] text-xl font-bold text-[#1A1A1A] mb-4">
                What We Believe
              </h3>
              <p className="text-base text-[#555] leading-relaxed">
                Food should be honest. If you can&apos;t pronounce the ingredients, you probably shouldn&apos;t eat them. We make snacks from real food — real vegetables, real spices, real care. No lab experiments.
              </p>
            </div>
            <div className="bg-[#FAF7F2] border border-[#E8E3DA] rounded-2xl p-7 md:p-10">
              <h3 className="font-[var(--font-heading)] text-xl font-bold text-[#1A1A1A] mb-4">
                What We Promise
              </h3>
              <p className="text-base text-[#555] leading-relaxed">
                From kids&apos; snacks to everyday staples, we design food that&apos;s balanced, comforting, and genuinely good for you. Food you can trust. Food you can share. Food that parents don&apos;t have to worry about.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reuse homepage sections */}
      <CleanLabelComparison />
      <WhatMakesUsDifferent />

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[#FAF7F2]">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center reveal">
          <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4">
            Ready to Taste the Difference?
          </h2>
          <p className="text-base text-[#555] mb-8">
            Your snack game is about to change forever.
          </p>
          <Link href="/shop" className="btn-primary">
            Shop Now
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
