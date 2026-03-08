import type { Metadata } from "next";
import { WHATSAPP_URL, WHATSAPP_NUMBER } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Have questions about The Whole Soul products? Get in touch — we're real humans and we respond fast.",
};

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-[#FAF7F2]">
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="tag inline-block mb-6">Get in Touch</span>
          <h1 className="font-[var(--font-heading)] text-3xl md:text-5xl font-bold mb-4 text-[#1A1A1A]">
            Let&apos;s Talk
          </h1>
          <p className="text-base text-[#555]">
            Questions, feedback, bulk orders, or just want to say hi? We&apos;re all ears.
          </p>
        </div>

        {/* WhatsApp CTA — the fastest way */}
        <div className="mb-8 reveal">
          <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-2xl p-6 md:p-8 text-center">
            <h3 className="font-[var(--font-heading)] text-lg font-bold text-[#1A1A1A] mb-2">
              Fastest Way to Reach Us
            </h3>
            <p className="text-sm text-[#555] mb-4">
              Drop a WhatsApp message. We usually respond within minutes.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.68-1.227A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.24 0-4.326-.672-6.064-1.827l-.424-.283-3.088.81.825-3.013-.31-.466A9.957 9.957 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Chat on WhatsApp — {WHATSAPP_NUMBER}
            </a>
          </div>
        </div>

        {/* Form card */}
        <div className="bg-white border border-[#E8E3DA] rounded-2xl p-7 md:p-10 reveal">
          <h3 className="font-[var(--font-heading)] text-xl font-bold text-[#1A1A1A] mb-6">
            Or Send Us a Message
          </h3>
          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-[#1A1A1A] mb-2">
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
              <label htmlFor="email" className="block text-sm font-semibold text-[#1A1A1A] mb-2">
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
              <label htmlFor="phone" className="block text-sm font-semibold text-[#1A1A1A] mb-2">
                Phone <span className="text-[#999] font-normal">(optional)</span>
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
              <label htmlFor="message" className="block text-sm font-semibold text-[#1A1A1A] mb-2">
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

            <button type="submit" className="btn-primary w-full py-4">
              Send Message
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </form>
        </div>

        {/* Contact info */}
        <div className="mt-8 grid grid-cols-2 gap-4 reveal">
          <div className="bg-white border border-[#E8E3DA] rounded-xl p-5 text-center">
            <div className="w-10 h-10 rounded-full bg-[#FFF3E6] flex items-center justify-center mx-auto mb-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4710A" strokeWidth="1.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <path d="M22 6l-10 7L2 6" />
              </svg>
            </div>
            <p className="text-xs text-[#999] mb-1">Email us at</p>
            <p className="text-sm font-semibold text-[#1A1A1A] break-all">hello@thewholesoul.in</p>
          </div>
          <div className="bg-white border border-[#E8E3DA] rounded-xl p-5 text-center">
            <div className="w-10 h-10 rounded-full bg-[#FFF3E6] flex items-center justify-center mx-auto mb-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4710A" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <p className="text-xs text-[#999] mb-1">Based in</p>
            <p className="text-sm font-semibold text-[#1A1A1A]">Pune, Maharashtra, India</p>
          </div>
        </div>
      </div>
    </section>
  );
}
