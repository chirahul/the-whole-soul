export function BrandStory() {
  return (
    <section className="relative py-24 md:py-32 mesh-bg-dark overflow-hidden">
      {/* Floating orbs — pointer-events-none */}
      <div className="orb orb-1 top-[20%] left-[10%] opacity-40 pointer-events-none" />
      <div className="orb orb-2 bottom-[20%] right-[10%] opacity-30 pointer-events-none" />

      {/* Decorative circles — pointer-events-none */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/5 pointer-events-none hidden md:block" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-white/5 pointer-events-none hidden md:block" />

      <div className="relative z-10 max-w-3xl mx-auto px-5 md:px-8 text-center reveal">
        <span className="glass-tag-dark inline-block mb-8">Our Belief</span>
        <blockquote>
          <p className="font-[var(--font-fraunces)] text-2xl md:text-4xl lg:text-5xl leading-relaxed font-light">
            <span className="gradient-text-light">&ldquo;When food is made with care, it doesn&rsquo;t just feed the body.</span>
            <br />
            <span className="text-white/90">It feeds the soul.&rdquo;</span>
          </p>
        </blockquote>
        <div className="mt-10 line-accent mx-auto" />
        <p className="mt-5 text-sm tracking-[0.2em] text-white/30 uppercase font-medium">
          The Whole Soul
        </p>
      </div>
    </section>
  );
}
