import { CLEAN_LABEL_TYPICAL, CLEAN_LABEL_OURS } from "@/lib/constants";

export function CleanLabelComparison() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-16 reveal">
          <span className="tag inline-block mb-4">The Difference</span>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
            Clean Label. For Real.
          </h2>
          <p className="mt-4 text-base text-[#555] max-w-md mx-auto">
            Not all snacks are created equal. Here&apos;s the truth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-stretch">
          {/* Typical Snack — the bad one */}
          <div className="reveal-left">
            <div className="bg-[#FEF0F0] border-2 border-[#FECACA] rounded-2xl p-6 md:p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#FCA5A5] flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.5">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="font-[var(--font-heading)] text-xl font-bold text-[#1A1A1A]">
                  Typical Snack
                </h3>
              </div>
              <ul className="space-y-4">
                {CLEAN_LABEL_TYPICAL.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2" className="mt-0.5 flex-shrink-0">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                    <span className="text-[#555] text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* The Whole Soul — the good one */}
          <div className="reveal-right">
            <div className="bg-[#F0FDF4] border-2 border-[#BBF7D0] rounded-2xl p-6 md:p-8 h-full relative">
              {/* Subtle highlight */}
              <div className="absolute top-4 right-4">
                <span className="text-xs font-bold text-[#2D8A4E] bg-[#BBF7D0] px-3 py-1 rounded-full uppercase tracking-wider">
                  That&apos;s Us
                </span>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#86EFAC] flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="font-[var(--font-heading)] text-xl font-bold text-[#1A1A1A]">
                  The Whole Soul
                </h3>
              </div>
              <ul className="space-y-4">
                {CLEAN_LABEL_OURS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2" className="mt-0.5 flex-shrink-0">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-[#1A1A1A] text-sm md:text-base font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Punchline */}
        <div className="text-center mt-10 md:mt-14 reveal">
          <p className="font-[var(--font-heading)] text-2xl md:text-3xl lg:text-4xl font-bold text-[#D4710A]">
            0 Chemicals. 100% Natural.
          </p>
          <p className="text-sm text-[#555] mt-2">
            Read the label. We dare you.
          </p>
        </div>
      </div>
    </section>
  );
}
