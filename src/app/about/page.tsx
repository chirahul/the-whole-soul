import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Meet Shriya — the founder who quit corporate life to build India's clean-label snack revolution from her kitchen in Pune.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-[#FAF7F2]">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center reveal">
          <span className="tag inline-block mb-6">Our Story</span>
          <h1 className="font-[var(--font-heading)] text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#1A1A1A]">
            Built in a Kitchen.<br />Built With Care.
          </h1>
          <p className="font-[var(--font-fraunces)] text-lg md:text-xl text-[#555] leading-relaxed max-w-2xl mx-auto">
            This isn&apos;t a brand born in a boardroom. It&apos;s a brand born from stubbornness, love, and a LOT of taste-testing.
          </p>
        </div>
      </section>

      {/* Founder's Full Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-5 gap-10 md:gap-16">
            {/* Photo */}
            <div className="md:col-span-2 reveal-left">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden border-2 border-dashed border-[#E8E3DA] bg-[#FAF7F2] flex items-center justify-center p-6 sticky top-24">
                <p className="text-center text-sm text-[#1A1A1A]/25 font-medium leading-relaxed">
                  FOUNDER PHOTO: Shriya — warm, approachable, real. In her kitchen or workspace.
                </p>
              </div>
            </div>

            {/* Story */}
            <div className="md:col-span-3 reveal-right">
              <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-8">
                Founder&apos;s Note
              </h2>

              <div className="prose-custom space-y-5 text-base text-[#555] leading-relaxed">
                <p>Hi, I&apos;m <strong className="text-[#1A1A1A]">Shriya</strong>.</p>

                <p>
                  MBA in Finance. CA dropout (yes, that plot twist happened). Ex-corporate employee for 3 years. And now — <strong className="text-[#D4710A]">Chief Everything Officer</strong> at The Whole Soul.
                </p>

                <p>
                  I always knew I wanted to build something of my own. The entrepreneurial fire? Constantly burning. The job satisfaction? Not so much.
                </p>

                <p>
                  After years of working for someone else&apos;s dream, I finally decided to build mine.
                </p>

                <p className="text-[#1A1A1A] font-medium">But the real turning point? Marriage.</p>

                <p>
                  Suddenly, I wasn&apos;t just eating food — I was planning it. Cooking it. Balancing it. Three times a day. Reading labels like they were balance sheets. Realising most breakfasts were just carbs in different outfits.
                </p>

                <p>
                  I&apos;m a health enthusiast. My husband? A professional-level foodie who believes snacking is a personality trait.
                </p>

                <p>
                  So began my daily mission: make it clean, make it tasty, make it repeat-worthy.
                </p>

                <p>I searched for better snack options. Found… mostly makhanas with rebranding.</p>

                <p className="font-[var(--font-heading)] text-xl md:text-2xl text-[#D4710A] font-bold">
                  That&apos;s when the stubborn founder in me said, &ldquo;Fine. I&apos;ll do it myself.&rdquo;
                </p>

                <p>
                  Eight months of research, trials, reformulations, vendor calls, and mild kitchen chaos later — <strong className="text-[#1A1A1A]">The Whole Soul was born.</strong>
                </p>

                <p>Not in a boardroom. Not from a trend. But from care.</p>

                <p>
                  Today, this isn&apos;t just a brand. It&apos;s my baby idea — built from scratch, powered by persistence, and rooted in one simple rule:
                </p>

                <p className="bg-[#FAF7F2] border-l-4 border-[#D4710A] p-5 rounded-r-xl text-[#1A1A1A] font-medium text-lg">
                  If it&apos;s not good enough for my family, it doesn&apos;t go to yours.
                </p>

                <p className="font-[var(--font-heading)] text-lg font-bold text-[#1A1A1A]">
                  Cute story. Serious standards.
                </p>

                <p className="font-[var(--font-fraunces)] text-[#999] italic">
                  — Shriya<br />Chief Everything Officer, The Whole Soul
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 md:py-28 bg-[#2D3A2E]">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center reveal">
          <span className="tag-dark inline-block mb-6">Our Vision</span>
          <h2 className="font-[var(--font-heading)] text-2xl md:text-4xl font-bold text-white mb-8">
            Leading India&apos;s Clean-Label Revolution
          </h2>
          <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
            To set a new standard for what packaged food should be — simple, transparent, and made with genuine care. No tricks. No fine print. Just food you can trust.
          </p>
          <div className="mt-10 line-accent mx-auto" />
          <div className="mt-10">
            <Link href="/shop" className="btn-primary">
              Taste the Difference
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Where we started - timeline placeholder */}
      <section className="py-16 md:py-24 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center reveal">
          <span className="tag inline-block mb-6">The Journey</span>
          <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-10">
            Where We Started & How It&apos;s Going
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="aspect-video rounded-2xl border-2 border-dashed border-[#E8E3DA] bg-white flex items-center justify-center p-6">
              <p className="text-sm text-[#1A1A1A]/25 font-medium">
                JOURNEY PHOTO 1: Early days — kitchen setup, first batch, raw ingredients
              </p>
            </div>
            <div className="aspect-video rounded-2xl border-2 border-dashed border-[#E8E3DA] bg-white flex items-center justify-center p-6">
              <p className="text-sm text-[#1A1A1A]/25 font-medium">
                JOURNEY PHOTO 2: Now — product line, packaging, happy customers
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
