"use client";

import { useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/constants";

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
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className="mobile-menu-left open absolute inset-y-0 left-0 w-[300px] bg-white flex flex-col shadow-xl">
        <div className="flex items-center justify-between px-6 h-16 border-b border-[#E8E3DA]">
          <span className="font-[var(--font-heading)] text-lg font-bold text-[#1A1A1A]">Menu</span>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-black/5 transition-colors"
            aria-label="Close"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex-1 py-4 px-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="block py-3 px-4 text-base font-medium text-[#1A1A1A] hover:text-[#D4710A] hover:bg-[#FAF7F2] rounded-lg transition-all"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="p-5 border-t border-[#E8E3DA] space-y-3">
          <Link href="/shop" onClick={onClose} className="btn-primary block w-full text-center py-3.5">
            Shop All Products
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp block w-full text-center py-3.5"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.68-1.227A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.24 0-4.326-.672-6.064-1.827l-.424-.283-3.088.81.825-3.013-.31-.466A9.957 9.957 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            Order on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
