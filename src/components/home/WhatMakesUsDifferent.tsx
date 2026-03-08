import { DIFFERENTIATORS } from "@/lib/constants";

const ICONS: Record<string, React.ReactNode> = {
  sprout: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 20h10M12 20v-6" />
      <path d="M12 14c-4 0-7-3-7-7h7v7z" />
      <path d="M12 7c4 0 7-3 7-7h-7v7z" />
    </svg>
  ),
  flame: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z" />
    </svg>
  ),
  sparkles: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.912 5.813L20 10.5l-5.088 2.687L12 21l-2.912-7.813L4 10.5l6.088-1.687z" />
    </svg>
  ),
  "heart-handshake": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7z" />
      <path d="M12 5L9.04 7.96a2.5 2.5 0 000 3.54L12 14.5l2.96-2.96a2.5 2.5 0 000-3.54z" />
    </svg>
  ),
  microscope: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 18h8M3 22h18M14 22a7 7 0 00-3-5.74M9 2h6M12 2v6" />
      <circle cx="12" cy="11" r="3" />
    </svg>
  ),
  smile: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  ),
};

export function WhatMakesUsDifferent() {
  return (
    <section className="py-16 md:py-24 bg-[#2D3A2E]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-16 reveal">
          <span className="tag-dark inline-block mb-4">Why Us</span>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            What Makes Us Different
          </h2>
          <p className="mt-4 text-base text-[#C9A84C] max-w-md mx-auto">
            Every bite tells a story of care and integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 stagger-children">
          {DIFFERENTIATORS.map((item) => (
            <div
              key={item.title}
              className="bg-white/[0.06] border border-white/[0.08] rounded-2xl p-6 md:p-8 hover:bg-white/[0.1] transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-white/[0.08] flex items-center justify-center mb-5 text-[#C9A84C]">
                {ICONS[item.icon]}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
