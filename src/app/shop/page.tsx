import type { Metadata } from "next";
import { getAllProducts } from "@/lib/shopify/client";
import { STATIC_PRODUCTS } from "@/lib/static-products";
import { ProductGrid } from "@/components/product/ProductGrid";
import type { Product } from "@/lib/shopify/types";

export const metadata: Metadata = {
  title: "Shop All Products",
  description:
    "Browse our complete range of wholesome, plant-based snacks and treats. No maida, no palm oil, baked not fried.",
};

export default async function ShopPage() {
  let products: Product[];
  try {
    products = await getAllProducts();
  } catch {
    products = STATIC_PRODUCTS;
  }

  return (
    <section className="relative min-h-screen mesh-bg-section overflow-hidden">
      {/* Floating orbs — pointer-events-none */}
      <div className="orb orb-1 top-[5%] right-[10%] pointer-events-none" />
      <div className="orb orb-2 bottom-[20%] left-[5%] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-12 md:py-20">
        <div className="mb-12 md:mb-16 reveal">
          <span className="glass-tag inline-block mb-4 text-[#735F3F]">Shop</span>
          <h1 className="font-[var(--font-besley)] text-3xl md:text-4xl lg:text-5xl font-semibold text-[#232743]">
            All <span className="gradient-text">Products</span>
          </h1>
          <p className="mt-4 text-base text-[#090A11]/50 max-w-lg leading-relaxed">
            Wholesome snacks made with clean ingredients. No shortcuts.
          </p>
        </div>

        <ProductGrid products={products} />
      </div>
    </section>
  );
}
