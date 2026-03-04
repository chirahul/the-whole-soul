import Link from "next/link";
import { getAllProducts } from "@/lib/shopify/client";
import { STATIC_PRODUCTS } from "@/lib/static-products";
import { ProductGrid } from "@/components/product/ProductGrid";
import type { Product } from "@/lib/shopify/types";

export async function FeaturedProducts() {
  let products: Product[];
  try {
    products = await getAllProducts();
  } catch {
    products = STATIC_PRODUCTS;
  }

  return (
    <section className="relative py-16 md:py-24 mesh-bg-section overflow-hidden">
      {/* Subtle orb — pointer-events-none */}
      <div className="orb orb-3 top-[10%] right-[5%] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-16 reveal">
          <span className="glass-tag inline-block mb-4 text-[#735F3F]">Gourmet Collection</span>
          <h2 className="font-[var(--font-besley)] text-3xl md:text-4xl lg:text-5xl font-semibold text-[#232743]">
            Our <span className="gradient-text">Bestsellers</span>
          </h2>
          <p className="mt-4 text-base text-[#090A11]/50 max-w-md mx-auto leading-relaxed">
            Carefully crafted with clean ingredients, inspired by tradition
          </p>
        </div>
        <ProductGrid products={products} />
        <div className="text-center mt-12 md:mt-16 reveal">
          <Link href="/shop" className="btn-dark">
            View All Products
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
