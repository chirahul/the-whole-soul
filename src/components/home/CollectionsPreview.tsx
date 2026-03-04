import Link from "next/link";

const COLLECTIONS = [
  {
    title: "Baked Snacks",
    description: "Crispy, crunchy, baked — never fried",
    href: "/collections/baked-snacks",
    image: "/images/hero-beetroot.png",
  },
  {
    title: "Chocolate Collection",
    description: "Pure indulgence, no added sugar",
    href: "/collections/chocolate-collection",
    image: "/images/product-date-bites.png",
  },
  {
    title: "All Products",
    description: "Explore the full Gourmet Collection",
    href: "/shop",
    image: "/images/product-vadapav.png",
  },
];

export function CollectionsPreview() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-16 reveal">
          <span className="glass-tag inline-block mb-4 text-[#735F3F]">Browse by Category</span>
          <h2 className="font-[var(--font-besley)] text-3xl md:text-4xl lg:text-5xl font-semibold text-[#232743]">
            Our <span className="gradient-text">Collections</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6 lg:gap-8 stagger-children">
          {COLLECTIONS.map((collection) => (
            <Link
              key={collection.href}
              href={collection.href}
              className="group relative block rounded-3xl overflow-hidden"
            >
              <div className="relative aspect-[4/5] md:aspect-[3/4] img-glass">
                {/* Use plain img for reliable mobile rendering */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  loading="lazy"
                />
                {/* Gradient overlay — pointer-events-none */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 pointer-events-none">
                  <span className="glass-tag-dark inline-block w-fit mb-3">{collection.title}</span>
                  <p className="text-sm text-white/70">{collection.description}</p>
                  <span className="mt-4 inline-flex items-center text-xs font-semibold text-white/80 tracking-wider uppercase">
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
