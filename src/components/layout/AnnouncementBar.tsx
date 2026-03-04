import { ANNOUNCEMENT_TEXT } from "@/lib/constants";

export function AnnouncementBar() {
  return (
    <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #232743, #2e3355)" }}>
      <div className="flex animate-marquee whitespace-nowrap py-2.5">
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={i} className="mx-8 text-xs tracking-wider font-medium text-white/90">
            {ANNOUNCEMENT_TEXT}
          </span>
        ))}
      </div>
    </div>
  );
}
