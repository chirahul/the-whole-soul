import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Policy",
  description:
    "Learn about The Whole Soul shipping timelines, delivery areas, and order processing.",
};

export default function ShippingPolicyPage() {
  return (
    <section className="relative min-h-screen bg-[#FAF7F2] overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto px-5 md:px-8 lg:px-12 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16 reveal">
          <span className="tag inline-block mb-6 text-[#735F3F]">
            Policies
          </span>
          <h1 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            <span className="text-[#D4710A]">Shipping</span>{" "}
            <span className="text-[#1A1A1A]">Policy</span>
          </h1>
        </div>

        <div className="reveal">
          <div className="bg-white border border-[#E8E3DA] rounded-3xl p-7 md:p-10 space-y-8">
            <div>
              <h3 className="font-[var(--font-heading)] text-lg font-semibold text-[#1A1A1A] mb-3">
                Order Processing
              </h3>
              <p className="text-sm md:text-base text-[#555] leading-relaxed">
                Orders are processed within 1&ndash;2 working days. You will
                receive a confirmation email with tracking details once your
                order has been dispatched.
              </p>
            </div>

            <div className="line-accent" />

            <div>
              <h3 className="font-[var(--font-heading)] text-lg font-semibold text-[#1A1A1A] mb-3">
                Delivery Timelines
              </h3>
              <p className="text-sm md:text-base text-[#555] leading-relaxed">
                Delivery timelines vary by location. Typically, orders are
                delivered within 3&ndash;7 business days. Remote areas may
                take slightly longer.
              </p>
            </div>

            <div className="line-accent" />

            <div>
              <h3 className="font-[var(--font-heading)] text-lg font-semibold text-[#1A1A1A] mb-3">
                Free Shipping
              </h3>
              <p className="text-sm md:text-base text-[#555] leading-relaxed">
                We offer free shipping on all orders above &#8377;499.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
