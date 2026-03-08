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
    <section className="py-16 md:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-16 reveal">
          <span className="tag inline-block mb-4">Our Products</span>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
            Bestselling Snacks
          </h2>
          <p className="mt-4 text-base text-[#555] max-w-md mx-auto leading-relaxed">
            Carefully crafted with clean ingredients. No shortcuts.
          </p>
        </div>
        <ProductGrid products={products} />
        <div className="text-center mt-12 md:mt-16 reveal">
          <Link href="/shop" className="btn-outline">
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
