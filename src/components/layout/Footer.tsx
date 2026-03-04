import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="footer-glass text-white/80">
      {/* Newsletter */}
      <div className="border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-14 md:py-20 text-center">
          <div className="reveal">
            <span className="glass-tag-dark inline-block mb-6">Stay Connected</span>
            <h3 className="font-[var(--font-besley)] text-2xl md:text-4xl font-semibold text-white mb-3">
              Join The Whole Soul Family
            </h3>
            <p className="text-sm text-white/50 mb-8 max-w-md mx-auto">
              Get exclusive offers, wholesome recipes, and new product launches delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" placeholder="Your email address" required
                className="flex-1 px-5 py-3.5 rounded-full bg-white/[0.08] border border-white/[0.12] text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#D4710A]/50 transition-colors" />
              <button type="submit" className="btn-accent px-8 py-3.5">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="glass-tag-dark inline-block mb-5">Shop</h4>
            <nav className="space-y-3">
              <Link href="/shop" className="block text-sm text-white/60 hover:text-[#D4710A] transition-colors">All Products</Link>
              <Link href="/collections/baked-snacks" className="block text-sm text-white/60 hover:text-[#D4710A] transition-colors">Baked Snacks</Link>
              <Link href="/collections/chocolate-collection" className="block text-sm text-white/60 hover:text-[#D4710A] transition-colors">Chocolate Collection</Link>
            </nav>
          </div>
          <div>
            <h4 className="glass-tag-dark inline-block mb-5">Company</h4>
            <nav className="space-y-3">
              <Link href="/about" className="block text-sm text-white/60 hover:text-[#D4710A] transition-colors">About Us</Link>
              <Link href="/contact" className="block text-sm text-white/60 hover:text-[#D4710A] transition-colors">Contact</Link>
              <Link href="/faq" className="block text-sm text-white/60 hover:text-[#D4710A] transition-colors">FAQ</Link>
            </nav>
          </div>
          <div>
            <h4 className="glass-tag-dark inline-block mb-5">Policies</h4>
            <nav className="space-y-3">
              <Link href="/policies/shipping" className="block text-sm text-white/60 hover:text-[#D4710A] transition-colors">Shipping Policy</Link>
              <Link href="/policies/refund" className="block text-sm text-white/60 hover:text-[#D4710A] transition-colors">Refund Policy</Link>
            </nav>
          </div>
          <div>
            <h4 className="glass-tag-dark inline-block mb-5">Follow Us</h4>
            <nav className="space-y-3">
              <span className="block text-sm text-white/50">Instagram</span>
              <span className="block text-sm text-white/50">Facebook</span>
            </nav>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/[0.08] text-center">
          <p className="text-xs text-white/25">&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
