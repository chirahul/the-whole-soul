import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The Whole Soul was born from a simple belief: food should nourish more than just hunger. Learn about our mission and values.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 mesh-bg-hero overflow-hidden">
        <div className="orb orb-1 top-[10%] left-[10%] pointer-events-none" />
        <div className="orb orb-2 bottom-[10%] right-[10%] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-5 md:px-8 text-center reveal">
          <span className="glass-tag inline-block mb-6 text-[#735F3F]">Our Story</span>
          <h1 className="font-[var(--font-besley)] text-3xl md:text-5xl lg:text-6xl font-semibold mb-6">
            <span className="gradient-text">About The</span>{" "}
            <span className="text-[#232743]">Whole Soul</span>
          </h1>
          <p className="font-[var(--font-fraunces)] text-lg md:text-xl text-[#090A11]/60 leading-relaxed max-w-2xl mx-auto">
            Born from a simple belief: food should nourish more than just hunger.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="relative py-16 md:py-24 mesh-bg-section overflow-hidden">
        <div className="orb orb-3 top-[20%] right-[5%] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            <div className="reveal-left">
              <div className="liquid-glass-card iridescent-border rounded-3xl p-7 md:p-10">
                <h3 className="font-[var(--font-besley)] text-xl font-semibold text-[#232743] mb-4">Our Beginning</h3>
                <p className="text-base text-[#090A11]/60 leading-relaxed">
                  In a world full of shortcuts, additives, and loud claims, we
                  chose a quieter path. One where ingredients are clean, processes
                  are mindful, and every product is made with intention. No
                  unnecessary fillers. No artificial tricks. Just wholesome
                  goodness inspired by traditional wisdom and shaped for modern
                  lives.
                </p>
              </div>
            </div>
            <div className="reveal-right">
              <div className="liquid-glass-card iridescent-border rounded-3xl p-7 md:p-10">
                <h3 className="font-[var(--font-besley)] text-xl font-semibold text-[#232743] mb-4">Our Promise</h3>
                <p className="text-base text-[#090A11]/60 leading-relaxed">
                  From kids&rsquo; snacks to everyday staples, we design food
                  that&rsquo;s balanced, comforting, and genuinely good for you.
                  Food you can trust. Food you can share. Food that feels like
                  home, but works for today.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center reveal">
            <Link href="/shop" className="btn-accent">
              Shop Our Products
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative py-20 md:py-28 mesh-bg-dark overflow-hidden">
        <div className="orb orb-1 top-[20%] right-[10%] opacity-40 pointer-events-none" />
        <div className="orb orb-2 bottom-[20%] left-[10%] opacity-30 pointer-events-none" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/5 pointer-events-none hidden md:block" />

        <div className="relative z-10 max-w-3xl mx-auto px-5 md:px-8 text-center reveal">
          <span className="glass-tag-dark inline-block mb-6">Our Mission</span>
          <h2 className="font-[var(--font-besley)] text-2xl md:text-4xl font-semibold text-white mb-8">
            Food Made with <span className="gradient-text-light">Integrity</span>
          </h2>
          <div className="space-y-5 text-base text-white/50 leading-relaxed">
            <p>
              At The Whole Soul, our mission is to bring food back to a place of
              care. Care for ingredients. Care for families. Care for everyday
              choices that shape long-term health.
            </p>
            <p>
              We exist to make honest, nourishing food that feels safe, familiar,
              and deeply thoughtful. Food without shortcuts or unnecessary
              additives. Food that respects traditional wisdom while fitting
              effortlessly into modern lives.
            </p>
            <p>
              We create food that parents can trust, families can share, and
              bodies can thrive on. Food that supports growth without excess,
              health without fear, and taste without compromise.
            </p>
          </div>
          <div className="mt-10 line-accent mx-auto" />
          <p className="mt-5 font-[var(--font-fraunces)] text-lg md:text-xl text-white/70 italic">
            Because food made with integrity feeds more than hunger.
            <br />
            <span className="gradient-text-light">It feeds the whole soul.</span>
          </p>
        </div>
      </section>
    </>
  );
}
