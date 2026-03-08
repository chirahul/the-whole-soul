import Link from "next/link";
import { SITE_NAME, WHATSAPP_NUMBER } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[#2D3A2E] text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-14 md:py-20 text-center">
          <div className="reveal">
            <p className="text-sm font-medium text-[#C9A84C] tracking-wider uppercase mb-4">
              Join the fam
            </p>
            <h3 className="font-[var(--font-heading)] text-2xl md:text-4xl font-bold text-white mb-3">
              Snack smarter. Feel better.
            </h3>
            <p className="text-sm text-white/50 mb-8 max-w-md mx-auto">
              Get exclusive offers, wholesome recipes, and new product drops. No spam — we promise.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                required
                className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/15 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
              />
              <button type="submit" className="btn-primary px-8 py-3.5">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-[var(--font-heading)] text-lg font-bold text-white mb-3">
              The Whole Soul
            </h4>
            <p className="text-sm text-white/50 mb-4 leading-relaxed">
              Made with soul (and a lot of taste-testing) in Pune, India.
            </p>
            <p className="text-sm text-white/50">
              WhatsApp: <a href={`https://wa.me/91${WHATSAPP_NUMBER}`} className="text-[#C9A84C] hover:underline">{WHATSAPP_NUMBER}</a>
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-semibold text-white/40 tracking-wider uppercase mb-5">Shop</h4>
            <nav className="space-y-3">
              <Link href="/shop" className="block text-sm text-white/60 hover:text-[#C9A84C] transition-colors">All Products</Link>
              <Link href="/collections/baked-snacks" className="block text-sm text-white/60 hover:text-[#C9A84C] transition-colors">Baked Snacks</Link>
              <Link href="/collections/chocolate-collection" className="block text-sm text-white/60 hover:text-[#C9A84C] transition-colors">Chocolate Collection</Link>
              <Link href="/collections/instant-mixes" className="block text-sm text-white/60 hover:text-[#C9A84C] transition-colors">Instant Mixes</Link>
            </nav>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold text-white/40 tracking-wider uppercase mb-5">Company</h4>
            <nav className="space-y-3">
              <Link href="/about" className="block text-sm text-white/60 hover:text-[#C9A84C] transition-colors">Our Story</Link>
              <Link href="/philosophy" className="block text-sm text-white/60 hover:text-[#C9A84C] transition-colors">Our Philosophy</Link>
              <Link href="/faq" className="block text-sm text-white/60 hover:text-[#C9A84C] transition-colors">FAQs</Link>
              <Link href="/contact" className="block text-sm text-white/60 hover:text-[#C9A84C] transition-colors">Contact Us</Link>
            </nav>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-xs font-semibold text-white/40 tracking-wider uppercase mb-5">Policies</h4>
            <nav className="space-y-3">
              <Link href="/policies/shipping" className="block text-sm text-white/60 hover:text-[#C9A84C] transition-colors">Shipping Policy</Link>
              <Link href="/policies/refund" className="block text-sm text-white/60 hover:text-[#C9A84C] transition-colors">Refund Policy</Link>
            </nav>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Instagram placeholder */}
            <a href="#" className="text-white/30 hover:text-[#C9A84C] transition-colors" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
              </svg>
            </a>
            {/* Facebook placeholder */}
            <a href="#" className="text-white/30 hover:text-[#C9A84C] transition-colors" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
