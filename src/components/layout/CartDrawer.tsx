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
      <div className="absolute inset-0 bg-black/30" onClick={closeCart} />

      {/* Drawer */}
      <div className="mobile-menu open absolute inset-y-0 right-0 w-full max-w-md flex flex-col bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-[#E8E3DA]">
          <h2 className="font-[var(--font-heading)] text-lg font-bold text-[#1A1A1A]">
            Your Cart {cart && cart.totalQuantity > 0 && `(${cart.totalQuantity})`}
          </h2>
          <button
            onClick={closeCart}
            className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-black/5 transition-colors"
            aria-label="Close cart"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Free shipping progress */}
        {cart && cart.totalQuantity > 0 && (
          <div className="px-6 py-3">
            <div className="bg-[#FAF7F2] rounded-xl p-3 border border-[#E8E3DA]">
              <p className="text-xs text-[#1A1A1A] mb-2 font-medium">
                {remaining > 0
                  ? `You're ₹${Math.ceil(remaining)} away from free shipping. So close!`
                  : "You've unlocked free shipping! Nice."}
              </p>
              <div className="h-1.5 bg-[#E8E3DA] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500 bg-[#D4710A]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {!cart || cart.lines.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full px-6 text-center">
              <div className="w-16 h-16 rounded-full bg-[#FAF7F2] flex items-center justify-center mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#999]">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
                </svg>
              </div>
              <p className="text-base font-medium text-[#1A1A1A] mb-1">Your cart is empty</p>
              <p className="text-sm text-[#999] mb-6">Your soul doesn&apos;t have to be.</p>
              <Link href="/shop" onClick={closeCart} className="btn-primary px-6 py-2.5 text-sm">
                Let&apos;s Fix That
              </Link>
            </div>
          ) : (
            <div className="px-6 space-y-3 py-3">
              {cart.lines.map((item) => (
                <div key={item.id} className="bg-[#FAF7F2] rounded-xl p-3 flex gap-3 border border-[#E8E3DA]">
                  {item.image && (
                    <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-white">
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
                      className="text-sm font-semibold text-[#1A1A1A] hover:text-[#D4710A] transition-colors line-clamp-2"
                    >
                      {item.title}
                    </Link>
                    <p className="text-sm font-bold text-[#D4710A] mt-1">
                      {formatPrice(item.totalPrice.amount, item.totalPrice.currencyCode)}
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-[#E8E3DA] rounded-full overflow-hidden bg-white">
                        <button
                          onClick={() =>
                            item.quantity > 1
                              ? updateItem(item.id, item.quantity - 1)
                              : removeItem(item.id)
                          }
                          disabled={isLoading}
                          className="w-8 h-8 flex items-center justify-center text-xs disabled:opacity-50 hover:bg-[#FAF7F2] transition-colors"
                        >
                          -
                        </button>
                        <span className="text-xs w-6 text-center font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateItem(item.id, item.quantity + 1)}
                          disabled={isLoading}
                          className="w-8 h-8 flex items-center justify-center text-xs disabled:opacity-50 hover:bg-[#FAF7F2] transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        disabled={isLoading}
                        className="ml-auto text-xs text-[#999] hover:text-[#E53E3E] transition-colors disabled:opacity-50"
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
          <div className="border-t border-[#E8E3DA] p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#555]">Subtotal</span>
              <span className="text-lg font-bold text-[#D4710A]">
                {formatPrice(cart.subtotal.amount, cart.subtotal.currencyCode)}
              </span>
            </div>
            <p className="text-xs text-[#999]">
              Shipping & taxes calculated at checkout
            </p>
            <a href={cart.checkoutUrl} className="btn-primary block w-full text-center py-4">
              Proceed to Checkout
            </a>
            <button
              onClick={closeCart}
              className="block w-full text-center text-sm text-[#555] hover:text-[#D4710A] transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
