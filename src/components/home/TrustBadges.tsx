import { TRUST_BADGES } from "@/lib/constants";

const ICONS: Record<string, React.ReactNode> = {
  "shield-x": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9.5 9.5l5 5M14.5 9.5l-5 5" />
    </svg>
  ),
  "candy-off": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a4 4 0 014 4v1H8V6a4 4 0 014-4zM8 7h8v5a4 4 0 01-8 0V7z" />
      <path d="M2 2l20 20" />
    </svg>
  ),
  "wheat-off": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 12c1.5-1.5 2-3.5 2-5.5M12 12c-1.5 1.5-3.5 2-5.5 2M12 12c1.5 1.5 2 3.5 2 5.5M12 12c-1.5-1.5-2-3.5-2-5.5" />
      <path d="M2 2l20 20" />
    </svg>
  ),
  "droplet-off": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
      <path d="M2 2l20 20" />
    </svg>
  ),
  leaf: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 019.8 6.9C15.5 4.9 17 3.5 17 3.5s2 2 2 7c0 4-3 6-8 9.5z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  ),
  "grain-off": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      <path d="M2 2l20 20" />
    </svg>
  ),
  "flask-off": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3h6M10 3v6.5L4.5 19.5A1.5 1.5 0 006 22h12a1.5 1.5 0 001.5-2.5L14 9.5V3" />
      <path d="M2 2l20 20" />
    </svg>
  ),
};

export function TrustBadges() {
  return (
    <section className="py-6 md:py-8 bg-[#F0EBE1] border-y border-[#E8E3DA]">
      <div className="flex md:justify-center gap-6 md:gap-10 overflow-x-auto scrollbar-none px-4 md:px-8 snap-x snap-mandatory stagger-children">
        {TRUST_BADGES.map((badge) => (
          <div
            key={badge.label}
            className="flex items-center gap-2.5 flex-shrink-0 snap-start"
          >
            <span className="text-[#D4710A]">{ICONS[badge.icon]}</span>
            <span className="text-xs font-semibold tracking-wide text-[#1A1A1A] whitespace-nowrap uppercase">
              {badge.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
