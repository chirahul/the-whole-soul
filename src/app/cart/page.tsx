"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { FREE_SHIPPING_THRESHOLD } from "@/lib/constants";

export default function CartPage() {
  const { cart, isLoading, updateItem, removeItem } = useCart();

  const subtotal = cart ? parseFloat(cart.subtotal.amount) : 0;
  const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
  const progress = Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100);

  return (
    <section className="relative min-h-screen bg-[#FAF7F2] overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-20">
        <div className="mb-10 reveal">
          <span className="tag inline-block mb-4 text-[#735F3F]">Shopping</span>
          <h1 className="font-[var(--font-heading)] text-3xl md:text-4xl font-semibold text-[#1A1A1A]">
            Your <span className="text-[#D4710A]">Cart</span>
          </h1>
        </div>

        {!cart || cart.lines.length === 0 ? (
          <div className="text-center py-20 reveal">
            <div className="bg-white border border-[#E8E3DA] rounded-3xl p-12 max-w-md mx-auto">
              <div className="bg-[#FFF3E6] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#999]">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
                </svg>
              </div>
              <p className="text-lg text-[#555] mb-6">Your cart is empty</p>
              <Link href="/shop" className="btn-primary">
                Continue Shopping
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white border border-[#E8E3DA] rounded-2xl p-4 reveal">
                <p className="text-sm text-[#1A1A1A] mb-2 font-medium">
                  {remaining > 0
                    ? `Add ${formatPrice(remaining.toString())} more for free shipping`
                    : "You've unlocked free shipping!"}
                </p>
                <div className="h-2 bg-[#090A11]/5 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500 bg-[#D4710A]"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <div className="space-y-3 stagger-children">
                {cart.lines.map((item) => (
                  <div key={item.id} className="bg-white border border-[#E8E3DA] rounded-2xl p-4 flex gap-4">
                    {item.image && (
                      <Link href={`/products/${item.productHandle}`} className="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-[#f0ede8]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.image.url}
                          alt={item.image.altText || item.title}
                          className="w-full h-full object-cover"
                        />
                      </Link>
                    )}
                    <div className="flex-1 min-w-0">
                      <Link
                        href={`/products/${item.productHandle}`}
                        className="text-sm font-semibold text-[#1A1A1A] hover:text-[#D4710A] transition-colors"
                      >
                        {item.title}
                      </Link>
                      <p className="text-sm font-bold text-[#D4710A] mt-1">
                        {formatPrice(item.price.amount, item.price.currencyCode)}
                      </p>
                      <div className="flex items-center gap-3 mt-3">
                        <div className="flex items-center bg-[#FAF7F2] rounded-full overflow-hidden">
                          <button
                            onClick={() =>
                              item.quantity > 1
                                ? updateItem(item.id, item.quantity - 1)
                                : removeItem(item.id)
                            }
                            disabled={isLoading}
                            className="w-9 h-9 flex items-center justify-center text-sm disabled:opacity-50"
                          >
                            -
                          </button>
                          <span className="w-8 text-center text-sm font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => updateItem(item.id, item.quantity + 1)}
                            disabled={isLoading}
                            className="w-9 h-9 flex items-center justify-center text-sm disabled:opacity-50"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          disabled={isLoading}
                          className="text-xs text-[#999] hover:text-red-500 transition-colors disabled:opacity-50"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="text-sm font-bold text-[#D4710A] self-start">
                      {formatPrice(item.totalPrice.amount, item.totalPrice.currencyCode)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white border border-[#E8E3DA] rounded-3xl p-6 sticky top-28 reveal">
                <h2 className="font-[var(--font-heading)] text-lg font-semibold text-[#1A1A1A] mb-6">
                  Order Summary
                </h2>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#555]">Subtotal</span>
                    <span className="font-semibold text-[#1A1A1A]">
                      {formatPrice(cart.subtotal.amount, cart.subtotal.currencyCode)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#555]">Shipping</span>
                    <span className="text-[#555]">
                      {remaining <= 0 ? "Free" : "Calculated at checkout"}
                    </span>
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-[#D4710A]/20 to-[#735F3F]/20 mb-5" />
                <div className="flex justify-between mb-6">
                  <span className="font-semibold text-[#1A1A1A]">Total</span>
                  <span className="text-xl font-bold text-[#D4710A]">
                    {formatPrice(cart.total.amount, cart.total.currencyCode)}
                  </span>
                </div>
                <a href={cart.checkoutUrl} className="btn-primary block w-full text-center py-4">
                  Proceed to Checkout
                </a>
                <Link
                  href="/shop"
                  className="block w-full mt-3 text-center text-sm text-[#999] hover:text-[#D4710A] transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
