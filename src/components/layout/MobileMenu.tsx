"use client";

import { useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />
      <div className="mobile-menu-left open absolute inset-y-0 left-0 w-[300px] liquid-glass-strong flex flex-col" style={{ background: "rgba(255,255,255,0.85)", backdropFilter: "blur(50px) saturate(200%)" }}>
        <div className="flex items-center justify-between px-6 h-16 border-b border-white/30">
          <span className="font-[var(--font-besley)] text-lg font-semibold text-[#232743]">Menu</span>
          <button onClick={onClose} className="glass-icon w-9 h-9 rounded-lg flex items-center justify-center" aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex-1 py-6 px-6 space-y-1">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={onClose}
              className="block py-3.5 px-4 text-base font-medium text-[#232743] hover:text-[#D4710A] hover:bg-white/40 rounded-xl transition-all">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="p-6 border-t border-white/30">
          <Link href="/shop" onClick={onClose} className="btn-accent block w-full text-center py-3.5">
            Shop All Products
          </Link>
        </div>
      </div>
    </div>
  );
}
