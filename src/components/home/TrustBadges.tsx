import { TRUST_BADGES } from "@/lib/constants";

const ICONS: Record<string, React.ReactNode> = {
  "wheat-off": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 22L22 2M12 12c1.5-1.5 2-3.5 2-5.5M12 12c-1.5 1.5-3.5 2-5.5 2M12 12c1.5 1.5 2 3.5 2 5.5M12 12c-1.5-1.5-2-3.5-2-5.5" />
    </svg>
  ),
  "droplet-off": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
      <path d="M2 2l20 20" />
    </svg>
  ),
  flame: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z" />
    </svg>
  ),
  "check-circle": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
      <path d="M22 4L12 14.01l-3-3" />
    </svg>
  ),
  "shield-check": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  leaf: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 019.8 6.9C15.5 4.9 17 3.5 17 3.5s2 2 2 7c0 4-3 6-8 9.5z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  ),
};

export function TrustBadges() {
  return (
    <section className="relative py-8 md:py-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/20 to-white/40 pointer-events-none" />
      <div className="relative flex md:justify-center gap-6 md:gap-10 overflow-x-auto scrollbar-none px-4 md:px-8 snap-x snap-mandatory stagger-children">
        {TRUST_BADGES.map((badge) => (
          <div
            key={badge.label}
            className="glass-icon flex items-center gap-2.5 flex-shrink-0 snap-start px-4 py-2.5 rounded-full"
          >
            <span className="text-[#D4710A]">{ICONS[badge.icon]}</span>
            <span className="text-xs font-semibold tracking-wide text-[#232743] whitespace-nowrap">
              {badge.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
