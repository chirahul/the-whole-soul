import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] md:min-h-[85vh] flex items-center overflow-hidden">
      {/* Mesh gradient background — pointer-events-none so buttons work */}
      <div className="absolute inset-0 mesh-bg-hero pointer-events-none" />

      {/* Floating orbs — desktop only via CSS, pointer-events-none */}
      <div className="orb orb-1 top-[10%] left-[5%] pointer-events-none" />
      <div className="orb orb-2 top-[60%] right-[10%] pointer-events-none" />
      <div className="orb orb-3 bottom-[15%] left-[40%] pointer-events-none" />

      {/* Background product image — pointer-events-none */}
      <div className="absolute inset-0 pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-peanut.png"
          alt=""
          className="w-full h-full object-cover opacity-15 md:opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#f5f2ee]/95 via-[#f5f2ee]/80 to-[#f5f2ee]/50" />
      </div>

      {/* Content — z-10 to be above backgrounds */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-12 md:py-0">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Text side */}
          <div className="reveal">
            <span className="glass-tag inline-block mb-5 text-[#735F3F]">Plant-Based Superfood</span>
            <h1 className="font-[var(--font-besley)] text-[2.5rem] md:text-[3.5rem] lg:text-7xl font-bold leading-[1.08] mb-5">
              <span className="gradient-text">Snacks Made</span>
              <br />
              <span className="text-[#232743]">with Soul</span>
            </h1>
            <p className="text-[15px] md:text-base lg:text-lg text-[#090A11]/60 max-w-lg mb-8 leading-relaxed">
              Clean ingredients. No shortcuts. No artificial tricks. Just wholesome
              goodness inspired by traditional wisdom, shaped for modern lives.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/shop" className="btn-accent relative z-20">
                Shop Now
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/about" className="btn-glass relative z-20">
                Our Story
              </Link>
            </div>

          </div>

          {/* Image side — desktop only */}
          <div className="hidden md:flex md:justify-center">
            <div className="max-w-[520px] w-full">
              <div className="img-glass iridescent-border rounded-3xl overflow-hidden">
                <Image
                  src="/images/hero-peanut.png"
                  alt="The Whole Soul - Barbeque Coated Peanut Crackle"
                  width={600}
                  height={700}
                  priority
                  unoptimized
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator — desktop only via CSS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator pointer-events-none">
        <div className="w-6 h-10 rounded-full border-2 border-[#090A11]/20 flex items-start justify-center p-1.5">
          <div className="w-1 h-2.5 rounded-full bg-[#D4710A]" />
        </div>
      </div>
    </section>
  );
}
