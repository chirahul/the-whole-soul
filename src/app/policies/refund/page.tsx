import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Understand The Whole Soul refund and return policy for food products.",
};

export default function RefundPolicyPage() {
  return (
    <section className="relative min-h-screen mesh-bg-section overflow-hidden">
      <div className="orb orb-3 bottom-[15%] right-[10%] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-5 md:px-8 lg:px-12 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 reveal">
          <span className="glass-tag inline-block mb-6 text-[#735F3F]">
            Policies
          </span>
          <h1 className="font-[var(--font-besley)] text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            <span className="gradient-text">Refund</span>{" "}
            <span className="text-[#232743]">Policy</span>
          </h1>
        </div>

        {/* Content */}
        <div className="space-y-6 reveal">
          <div className="liquid-glass-card iridescent-border rounded-3xl p-7 md:p-10 space-y-8">
            <div>
              <h3 className="font-[var(--font-besley)] text-lg font-semibold text-[#232743] mb-3">
                Returns
              </h3>
              <p className="text-sm md:text-base text-[#090A11]/60 leading-relaxed">
                We do not accept returns for food products due to hygiene
                reasons. The safety and quality of our products is our top
                priority.
              </p>
            </div>

            <div className="line-accent" />

            <div>
              <h3 className="font-[var(--font-besley)] text-lg font-semibold text-[#232743] mb-3">
                Damaged or Incorrect Products
              </h3>
              <p className="text-sm md:text-base text-[#090A11]/60 leading-relaxed">
                In case of damaged or incorrect products, please contact us
                within 48 hours of delivery with photos of the product and
                packaging. We will arrange a replacement or refund at the
                earliest.
              </p>
            </div>

            <div className="line-accent" />

            <div>
              <h3 className="font-[var(--font-besley)] text-lg font-semibold text-[#232743] mb-3">
                How to Reach Us
              </h3>
              <p className="text-sm md:text-base text-[#090A11]/60 leading-relaxed">
                Email us at{" "}
                <a
                  href="mailto:hello@thewholesoul.com"
                  className="text-[#D4710A] font-medium hover:underline"
                >
                  hello@thewholesoul.com
                </a>{" "}
                with your order number and details. We aim to respond within
                24 hours.
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="liquid-glass-card rounded-2xl p-6 md:p-8 border-l-4 border-l-[#D4710A]">
            <h4 className="font-[var(--font-besley)] text-base font-semibold text-[#232743] mb-3">
              Disclaimer
            </h4>
            <div className="space-y-3 text-sm text-[#090A11]/50 leading-relaxed">
              <p>
                Our products are not intended to diagnose, treat, cure, or
                prevent any disease.
              </p>
              <p>
                Nutritional benefits mentioned are based on ingredient
                properties and general research. Individual results may vary.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
