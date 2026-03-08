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

  // Split nav links for centered logo layout
  const leftLinks = NAV_LINKS.slice(0, 3);
  const rightLinks = NAV_LINKS.slice(3);

  return (
    <>
      <header className={`nav-solid sticky top-0 z-40 ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Hamburger — mobile */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center hover:bg-black/5 transition-colors"
              aria-label="Open menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            </button>

            {/* Left nav — desktop */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8 flex-1">
              {leftLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link text-sm font-medium text-[#1A1A1A]/70 hover:text-[#D4710A] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Logo — centered */}
            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
              <div className="rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src="/images/logo.jpg"
                  alt="The Whole Soul"
                  width={576}
                  height={576}
                  className="h-10 w-10 md:h-12 md:w-12 object-cover block"
                  priority
                />
              </div>
              <div>
                <p className="font-[var(--font-heading)] text-lg md:text-xl font-bold text-[#1A1A1A] leading-tight tracking-tight">
                  The Whole Soul
                </p>
                <p className="text-[9px] md:text-[10px] text-[#1A1A1A]/40 tracking-[0.15em] uppercase font-medium">
                  Snacks Made with Soul
                </p>
              </div>
            </Link>

            {/* Right nav + icons — desktop */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8 flex-1 justify-end">
              {rightLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link text-sm font-medium text-[#1A1A1A]/70 hover:text-[#D4710A] transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              {/* Search */}
              <Link
                href="/shop"
                className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-black/5 transition-colors"
                aria-label="Search products"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </Link>

              {/* Cart */}
              <button
                onClick={openCart}
                className="relative w-9 h-9 rounded-lg flex items-center justify-center hover:bg-black/5 transition-colors"
                aria-label="Open cart"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
                </svg>
                {cart && cart.totalQuantity > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white rounded-full bg-[#D4710A]">
                    {cart.totalQuantity}
                  </span>
                )}
              </button>
            </div>

            {/* Cart — mobile */}
            <button
              onClick={openCart}
              className="md:hidden relative w-10 h-10 rounded-lg flex items-center justify-center hover:bg-black/5 transition-colors"
              aria-label="Open cart"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
              </svg>
              {cart && cart.totalQuantity > 0 && (
                <span className="absolute top-0.5 right-0.5 flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white rounded-full bg-[#D4710A]">
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
