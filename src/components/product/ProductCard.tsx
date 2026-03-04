"use client";

import Link from "next/link";
import { useState } from "react";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/lib/shopify/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const image = product.images[0];
  const isBestseller = product.tags.includes("bestseller");
  const isVegan = product.tags.includes("vegan");
  const firstVariant = product.variants[0];
  const { addItem, isLoading } = useCart();
  const [qty, setQty] = useState(1);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (firstVariant) addItem(firstVariant.id, qty);
  };

  const handleQty = (e: React.MouseEvent, delta: number) => {
    e.preventDefault();
    e.stopPropagation();
    setQty((q) => Math.max(1, q + delta));
  };

  return (
    <Link href={`/products/${product.handle}`} className="group block product-card-glass rounded-2xl">
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-t-2xl bg-[#f0ede8]">
        {image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image.url}
            alt={image.altText || product.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        )}
        {!product.availableForSale && (
          <div className="absolute inset-0 bg-white/60 flex items-center justify-center pointer-events-none">
            <span className="glass-tag text-[#090A11]/60">Sold Out</span>
          </div>
        )}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 pointer-events-none">
          {isBestseller && (
            <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white rounded-full" style={{ background: "linear-gradient(135deg, #D4710A, #e8891f)" }}>
              Bestseller
            </span>
          )}
          {isVegan && (
            <span className="glass-tag text-[#232743] text-[10px]">Vegan</span>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="p-4 md:p-5">
        <h3 className="text-sm md:text-base font-semibold text-[#232743] group-hover:text-[#D4710A] transition-colors line-clamp-2 leading-snug">
          {product.title}
        </h3>
        <p className="mt-1.5 md:mt-2 text-base md:text-lg font-bold gradient-text-warm">
          {formatPrice(product.price.amount, product.price.currencyCode)}
        </p>

        {product.availableForSale && (
          <div className="mt-3 md:mt-4 flex items-center gap-2 md:gap-3">
            {/* Quantity selector */}
            <div className="inline-flex items-center border border-[#090A11]/8 rounded-full overflow-hidden bg-white/60 flex-shrink-0">
              <button
                onClick={(e) => handleQty(e, -1)}
                className="w-8 h-9 md:w-9 md:h-10 flex items-center justify-center text-sm text-[#232743]/60 hover:text-[#D4710A] hover:bg-[#D4710A]/5 transition-colors cursor-pointer"
              >
                &minus;
              </button>
              <span className="w-7 md:w-8 text-center text-sm font-semibold text-[#232743]">{qty}</span>
              <button
                onClick={(e) => handleQty(e, 1)}
                className="w-8 h-9 md:w-9 md:h-10 flex items-center justify-center text-sm text-[#232743]/60 hover:text-[#D4710A] hover:bg-[#D4710A]/5 transition-colors cursor-pointer"
              >
                +
              </button>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              disabled={isLoading}
              className="flex-1 flex items-center justify-center gap-2 h-9 md:h-10 rounded-full text-xs md:text-sm font-semibold text-white transition-all duration-200 disabled:opacity-50 cursor-pointer"
              style={{ background: "linear-gradient(135deg, #D4710A, #e8891f)" }}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  <span className="hidden sm:inline">Adding...</span>
                </>
              ) : (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0">
                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
                  </svg>
                  <span>Add to Cart</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </Link>
  );
}
