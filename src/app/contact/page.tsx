import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Have questions about The Whole Soul products? Get in touch with us. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <section className="relative min-h-screen mesh-bg-section overflow-hidden">
      <div className="orb orb-1 top-[10%] right-[5%] pointer-events-none" />
      <div className="orb orb-3 bottom-[15%] left-[10%] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="glass-tag inline-block mb-6 text-[#735F3F]">Get in Touch</span>
          <h1 className="font-[var(--font-besley)] text-3xl md:text-5xl font-semibold mb-4">
            <span className="gradient-text">Contact</span>{" "}
            <span className="text-[#232743]">Us</span>
          </h1>
          <p className="text-base text-[#090A11]/50">
            Have a question, feedback, or just want to say hello? We&rsquo;d
            love to hear from you.
          </p>
        </div>

        {/* Form card */}
        <div className="liquid-glass-card iridescent-border rounded-3xl p-7 md:p-10 reveal">
          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-[#232743] mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="form-input"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[#232743] mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="form-input"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-[#232743] mb-2">
                Phone <span className="text-[#090A11]/30 font-normal">(optional)</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="form-input"
                placeholder="+91 98765 43210"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-[#232743] mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="form-input resize-none"
                placeholder="How can we help?"
              />
            </div>

            <button type="submit" className="btn-accent w-full py-4 relative z-20">
              Send Message
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </form>
        </div>

        {/* Contact info */}
        <div className="mt-10 reveal">
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <div className="stat-glass rounded-2xl p-5 md:p-6 text-center">
              <div className="glass-icon w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4710A" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
              </div>
              <p className="text-[10px] md:text-xs text-[#090A11]/40 mb-1">Email us at</p>
              <p className="text-xs md:text-sm font-semibold text-[#232743] break-all">hello@thewholesoul.com</p>
            </div>
            <div className="stat-glass rounded-2xl p-5 md:p-6 text-center">
              <div className="glass-icon w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4710A" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <p className="text-[10px] md:text-xs text-[#090A11]/40 mb-1">Based in</p>
              <p className="text-xs md:text-sm font-semibold text-[#232743]">India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
