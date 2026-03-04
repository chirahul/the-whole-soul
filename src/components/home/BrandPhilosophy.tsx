import Link from "next/link";

export function BrandPhilosophy() {
  return (
    <section className="relative py-16 md:py-24 mesh-bg-warm overflow-hidden">
      {/* Subtle orb — pointer-events-none */}
      <div className="orb orb-2 top-[20%] left-[60%] opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div className="reveal-left">
            <span className="glass-tag inline-block mb-6 text-[#735F3F]">Our Philosophy</span>
            <h2 className="font-[var(--font-besley)] text-2xl md:text-3xl lg:text-4xl font-semibold text-[#232743] leading-tight mb-6">
              We chose a{" "}
              <span className="gradient-text-warm">quieter path.</span>
            </h2>
            <p className="text-base text-[#090A11]/60 leading-relaxed mb-4">
              From kids&rsquo; snacks to everyday staples, we design food
              that&rsquo;s balanced, comforting, and genuinely good for you.
            </p>
            <p className="text-base text-[#090A11]/60 leading-relaxed mb-8">
              Food that parents can trust, families can share, and bodies can
              thrive on.
            </p>
            <Link href="/shop" className="btn-accent relative z-20">
              Explore Products
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Quote card */}
          <div className="reveal-right">
            <div className="liquid-glass-card iridescent-border rounded-3xl p-8 md:p-12">
              <p className="font-[var(--font-fraunces)] text-lg md:text-xl text-[#090A11]/70 leading-relaxed">
                In a world full of shortcuts, additives, and loud claims, we
                chose a quieter path. One where ingredients are clean, processes
                are mindful, and every product is made with intention.
              </p>
              <div className="mt-8 line-accent" />
              <p className="mt-4 text-xs tracking-[0.15em] text-[#090A11]/40 uppercase font-medium">
                The Whole Soul
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
