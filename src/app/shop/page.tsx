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
    <section className="relative min-h-screen bg-[#FAF7F2] overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-12 md:py-20">
        <div className="mb-12 md:mb-16 reveal">
          <span className="tag inline-block mb-4 text-[#735F3F]">Shop</span>
          <h1 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1A1A1A]">
            All <span className="text-[#D4710A]">Products</span>
          </h1>
          <p className="mt-4 text-base text-[#555] max-w-lg leading-relaxed">
            Wholesome snacks made with clean ingredients. No shortcuts.
          </p>
        </div>

        <ProductGrid products={products} />
      </div>
    </section>
  );
}
