"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";
import { useCart } from "@/context/CartContext";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cart, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`nav-glass sticky top-0 z-40 ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Hamburger — mobile */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden glass-icon w-10 h-10 rounded-xl flex items-center justify-center"
              aria-label="Open menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            </button>

            {/* Logo + Brand name — left aligned */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="rounded-xl overflow-hidden border border-white/40 shadow-sm flex-shrink-0 aspect-square">
                <Image src="/images/logo.jpg" alt="The Whole Soul" width={576} height={576} className="h-11 w-11 md:h-14 md:w-14 object-cover block" priority />
              </div>
              <div className="hidden md:block">
                <p className="font-[var(--font-besley)] text-lg font-semibold text-[#232743] leading-tight">The Whole Soul</p>
                <p className="text-[10px] text-[#090A11]/40 tracking-[0.15em] uppercase font-medium">Snacks Made with Soul</p>
              </div>
            </Link>

            {/* Nav links — right aligned, desktop */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="nav-link text-sm font-medium text-[#232743]/80 hover:text-[#D4710A] transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Cart */}
            <button
              onClick={openCart}
              className="relative glass-icon w-10 h-10 rounded-xl flex items-center justify-center md:ml-6"
              aria-label="Open cart"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
              </svg>
              {cart && cart.totalQuantity > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white rounded-full" style={{ background: "linear-gradient(135deg, #D4710A, #e8891f)" }}>
                  {cart.totalQuantity}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
