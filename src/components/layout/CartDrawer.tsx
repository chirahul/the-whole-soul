"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { FREE_SHIPPING_THRESHOLD } from "@/lib/constants";

export function CartDrawer() {
  const { cart, isOpen, isLoading, closeCart, updateItem, removeItem } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const subtotal = cart ? parseFloat(cart.subtotal.amount) : 0;
  const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
  const progress = Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100);

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={closeCart} />

      {/* Drawer */}
      <div className="mobile-menu open absolute inset-y-0 right-0 w-full max-w-md flex flex-col" style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(20px) saturate(150%)", WebkitBackdropFilter: "blur(20px) saturate(150%)" }}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-black/5">
          <h2 className="font-[var(--font-besley)] text-lg font-semibold text-[#232743]">
            Your Cart {cart && cart.totalQuantity > 0 && `(${cart.totalQuantity})`}
          </h2>
          <button onClick={closeCart} className="glass-icon w-9 h-9 rounded-lg flex items-center justify-center" aria-label="Close cart">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Free shipping progress */}
        {cart && cart.totalQuantity > 0 && (
          <div className="px-6 py-3">
            <div className="liquid-glass-card rounded-xl p-3">
              <p className="text-xs text-[#232743] mb-2 font-medium">
                {remaining > 0
                  ? `Add ${formatPrice(remaining.toString())} more for free shipping`
                  : "You've unlocked free shipping!"}
              </p>
              <div className="h-1.5 bg-[#090A11]/5 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${progress}%`, background: "linear-gradient(90deg, #D4710A, #e8891f)" }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {!cart || cart.lines.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full px-6 text-center">
              <div className="glass-icon w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#090A11]/30">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
                </svg>
              </div>
              <p className="text-sm text-[#090A11]/50 mb-4">Your cart is empty</p>
              <Link href="/shop" onClick={closeCart} className="btn-accent px-6 py-2.5 text-sm">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="px-6 space-y-3 py-3">
              {cart.lines.map((item) => (
                <div key={item.id} className="liquid-glass-card rounded-xl p-3 flex gap-3">
                  {item.image && (
                    <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-[#f0ede8]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.image.url}
                        alt={item.image.altText || item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/products/${item.productHandle}`}
                      onClick={closeCart}
                      className="text-sm font-semibold text-[#232743] hover:text-[#D4710A] transition-colors line-clamp-2"
                    >
                      {item.title}
                    </Link>
                    <p className="text-sm font-bold gradient-text-warm mt-1">
                      {formatPrice(item.totalPrice.amount, item.totalPrice.currencyCode)}
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center glass-icon rounded-full overflow-hidden">
                        <button
                          onClick={() =>
                            item.quantity > 1
                              ? updateItem(item.id, item.quantity - 1)
                              : removeItem(item.id)
                          }
                          disabled={isLoading}
                          className="w-8 h-8 flex items-center justify-center text-xs disabled:opacity-50"
                        >
                          -
                        </button>
                        <span className="text-xs w-6 text-center font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateItem(item.id, item.quantity + 1)}
                          disabled={isLoading}
                          className="w-8 h-8 flex items-center justify-center text-xs disabled:opacity-50"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        disabled={isLoading}
                        className="ml-auto text-xs text-[#090A11]/30 hover:text-red-500 transition-colors disabled:opacity-50"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart && cart.lines.length > 0 && (
          <div className="border-t border-black/5 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#090A11]/50">Subtotal</span>
              <span className="text-lg font-bold gradient-text-warm">
                {formatPrice(cart.subtotal.amount, cart.subtotal.currencyCode)}
              </span>
            </div>
            <p className="text-xs text-[#090A11]/30">
              Shipping & taxes calculated at checkout
            </p>
            <a href={cart.checkoutUrl} className="btn-accent block w-full text-center py-4">
              Proceed to Checkout
            </a>
            <button
              onClick={closeCart}
              className="block w-full text-center text-sm text-[#090A11]/50 hover:text-[#D4710A] transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
