import { getProductRecommendations } from "@/lib/shopify/client";
import { ProductCard } from "./ProductCard";

interface RelatedProductsProps {
  productId: string;
}

export async function RelatedProducts({ productId }: RelatedProductsProps) {
  let products;
  try {
    products = await getProductRecommendations(productId);
  } catch {
    return null;
  }

  if (!products || products.length === 0) return null;

  const displayProducts = products.slice(0, 4);

  return (
    <section className="mt-20 md:mt-28 reveal">
      <div className="text-center mb-10">
        <span className="tag inline-block mb-4 text-[#735F3F]">Discover More</span>
        <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-semibold text-[#1A1A1A]">
          You May Also Like
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 stagger-children">
        {displayProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
