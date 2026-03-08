"use client";

import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/lib/shopify/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const image = product.images[0];
  const isBestseller = product.tags.includes("bestseller");
  const firstVariant = product.variants[0];
  const { addItem, isLoading } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (firstVariant) addItem(firstVariant.id, 1);
  };

  return (
    <Link href={`/products/${product.handle}`} className="group block product-card rounded-2xl">
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-t-2xl bg-[#F0EBE1]">
        {image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image.url}
            alt={image.altText || product.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
            loading="lazy"
          />
        )}

        {/* Sold out overlay */}
        {!product.availableForSale && (
          <div className="absolute inset-0 bg-white/70 flex items-center justify-center pointer-events-none">
            <span className="text-sm font-semibold text-[#1A1A1A]/60 uppercase tracking-wider">Sold Out</span>
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 pointer-events-none">
          {isBestseller && (
            <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white rounded-full bg-[#D4710A]">
              Bestseller
            </span>
          )}
        </div>

        {/* Quick add overlay */}
        {product.availableForSale && (
          <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-3 pointer-events-none group-hover:pointer-events-auto">
            <button
              onClick={handleAddToCart}
              disabled={isLoading}
              className="w-full py-3 rounded-xl text-sm font-semibold text-white bg-[#2D3A2E] hover:bg-[#3D4E3F] transition-colors disabled:opacity-50 cursor-pointer"
            >
              {isLoading ? "Adding..." : "Quick Add"}
            </button>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4 md:p-5">
        <h3 className="text-sm md:text-base font-semibold text-[#1A1A1A] group-hover:text-[#D4710A] transition-colors line-clamp-2 leading-snug">
          {product.title}
        </h3>
        <div className="mt-1.5 md:mt-2 flex items-baseline gap-2">
          <span className="text-base md:text-lg font-bold text-[#D4710A]">
            {formatPrice(product.price.amount, product.price.currencyCode)}
          </span>
          {product.compareAtPrice && (
            <span className="text-sm text-[#999] line-through">
              {formatPrice(product.compareAtPrice.amount, product.compareAtPrice.currencyCode)}
            </span>
          )}
        </div>

        {/* Mobile add to cart */}
        {product.availableForSale && (
          <button
            onClick={handleAddToCart}
            disabled={isLoading}
            className="md:hidden mt-3 w-full py-2.5 rounded-full text-xs font-semibold text-white bg-[#D4710A] hover:bg-[#BF6509] transition-colors disabled:opacity-50 cursor-pointer"
          >
            {isLoading ? "Adding..." : "Add to Cart"}
          </button>
        )}
      </div>
    </Link>
  );
}
