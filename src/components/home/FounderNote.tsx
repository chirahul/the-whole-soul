import Link from "next/link";

export function FounderNote() {
  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Photo placeholder */}
          <div className="reveal-left">
            <div className="aspect-[4/5] max-w-md mx-auto md:mx-0 rounded-2xl overflow-hidden border-2 border-dashed border-[#E8E3DA] bg-[#F0EBE1] flex items-center justify-center p-8">
              <p className="text-center text-sm text-[#1A1A1A]/25 font-medium leading-relaxed">
                📸 FOUNDER PHOTO: Portrait of Shriya — casual, warm, relatable. Maybe in her kitchen or with products.
              </p>
            </div>
          </div>

          {/* Story */}
          <div className="reveal-right">
            <span className="tag inline-block mb-5">From the Founder</span>
            <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A1A1A] leading-tight mb-6">
              &ldquo;Fine. I&apos;ll do it myself.&rdquo;
            </h2>
            <div className="space-y-4 text-[#555] text-base leading-relaxed">
              <p>
                Hi, I&apos;m Shriya. MBA in Finance. CA dropout (yes, that plot twist happened).
                Ex-corporate employee for 3 years. And now — Chief Everything Officer at The Whole Soul.
              </p>
              <p>
                After marriage, I wasn&apos;t just eating food — I was planning it. Cooking it. Reading labels
                like they were balance sheets. Realising most breakfasts were just carbs in different outfits.
              </p>
              <p>
                I searched for better snack options. Found… mostly makhanas with rebranding.
                That&apos;s when the stubborn founder in me said, <strong>&ldquo;Fine. I&apos;ll do it myself.&rdquo;</strong>
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/about" className="btn-primary">
                Read the Full Story
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <p className="mt-6 font-[var(--font-fraunces)] text-sm text-[#999] italic">
              — Shriya, Chief Everything Officer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
