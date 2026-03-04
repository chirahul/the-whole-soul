"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

interface AddToCartButtonProps {
  variantId: string;
  availableForSale: boolean;
}

export function AddToCartButton({ variantId, availableForSale }: AddToCartButtonProps) {
  const { addItem, isLoading } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!availableForSale) {
    return (
      <button
        disabled
        className="w-full py-4 text-sm font-semibold text-[#090A11]/30 liquid-glass-card rounded-full cursor-not-allowed"
      >
        Sold Out
      </button>
    );
  }

  return (
    <div className="flex gap-3">
      {/* Quantity selector */}
      <div className="flex items-center glass-icon rounded-full overflow-hidden">
        <button
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          className="w-11 h-12 flex items-center justify-center text-sm font-medium hover:bg-white/40 transition-colors"
        >
          -
        </button>
        <span className="w-10 text-center text-sm font-semibold text-[#232743]">{quantity}</span>
        <button
          onClick={() => setQuantity(quantity + 1)}
          className="w-11 h-12 flex items-center justify-center text-sm font-medium hover:bg-white/40 transition-colors"
        >
          +
        </button>
      </div>

      {/* Add to cart */}
      <button
        onClick={() => addItem(variantId, quantity)}
        disabled={isLoading}
        className="flex-1 btn-accent py-4 rounded-full disabled:opacity-60"
      >
        {isLoading ? (
          <span className="inline-flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Adding...
          </span>
        ) : (
          <span className="inline-flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
            </svg>
            Add to Cart
          </span>
        )}
      </button>
    </div>
  );
}
