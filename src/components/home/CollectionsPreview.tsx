import Link from "next/link";

const COLLECTIONS = [
  {
    title: "Baked Snacks",
    description: "Crispy, crunchy, baked — never fried",
    href: "/collections/baked-snacks",
    imagePlaceholder: "📸 COLLECTION IMAGE: Broccoli & Beetroot chips spread out, natural background",
  },
  {
    title: "Chocolate Collection",
    description: "Pure indulgence, no added sugar",
    href: "/collections/chocolate-collection",
    imagePlaceholder: "📸 COLLECTION IMAGE: Date bites & Pecan nuts arranged beautifully with cocoa",
  },
  {
    title: "Instant Mixes",
    description: "Ready in minutes, no artificial anything",
    href: "/collections/instant-mixes",
    imagePlaceholder: "📸 COLLECTION IMAGE: Vada Pav Chilla being cooked on a pan, steam rising",
  },
];

export function CollectionsPreview() {
  return (
    <section className="py-16 md:py-24 bg-[#F0EBE1]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-16 reveal">
          <span className="tag inline-block mb-4">Browse by Category</span>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
            Our Collections
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6 lg:gap-8 stagger-children">
          {COLLECTIONS.map((collection) => (
            <Link
              key={collection.href}
              href={collection.href}
              className="group relative block rounded-2xl overflow-hidden bg-[#2D3A2E]"
            >
              <div className="relative aspect-[4/5] md:aspect-[3/4]">
                {/* Image placeholder */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <p className="text-center text-sm text-white/20 font-medium leading-relaxed">
                    {collection.imagePlaceholder}
                  </p>
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 pointer-events-none">
                  <h3 className="font-[var(--font-heading)] text-xl md:text-2xl font-bold text-white mb-1">
                    {collection.title}
                  </h3>
                  <p className="text-sm text-white/60 mb-4">{collection.description}</p>
                  <span className="inline-flex items-center text-xs font-semibold text-[#C9A84C] tracking-wider uppercase group-hover:translate-x-1 transition-transform">
                    Shop Now
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
