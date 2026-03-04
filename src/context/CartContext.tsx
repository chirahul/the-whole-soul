"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import type { Cart } from "@/lib/shopify/types";

interface CartContextType {
  cart: Cart | null;
  isOpen: boolean;
  isLoading: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (variantId: string, quantity?: number) => Promise<void>;
  updateItem: (lineId: string, quantity: number) => Promise<void>;
  removeItem: (lineId: string) => Promise<void>;
}

const CartContext = createContext<CartContextType | null>(null);

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

function getCartId(): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(/shopify_cart_id=([^;]+)/);
  return match ? decodeURIComponent(match[1]) : null;
}

function setCartId(id: string) {
  const expires = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `shopify_cart_id=${encodeURIComponent(id)};path=/;expires=${expires};SameSite=Lax`;
}

async function cartFetch(action: string, body: Record<string, unknown>): Promise<Cart> {
  const res = await fetch("/api/cart", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action, ...body }),
  });
  if (!res.ok) throw new Error("Cart operation failed");
  return res.json();
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const cartId = getCartId();
    if (cartId) {
      cartFetch("get", { cartId })
        .then((c) => {
          if (c && c.lines.length > 0) setCart(c);
        })
        .catch(() => {});
    }
  }, []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addItem = useCallback(
    async (variantId: string, quantity: number = 1) => {
      setIsLoading(true);
      try {
        let updatedCart: Cart;
        const cartId = getCartId();
        if (cartId && cart) {
          updatedCart = await cartFetch("add", { cartId, variantId, quantity });
        } else {
          updatedCart = await cartFetch("create", { variantId, quantity });
          setCartId(updatedCart.id);
        }
        setCart(updatedCart);
        setIsOpen(true);
      } finally {
        setIsLoading(false);
      }
    },
    [cart]
  );

  const updateItem = useCallback(
    async (lineId: string, quantity: number) => {
      if (!cart) return;
      setIsLoading(true);
      try {
        const updatedCart = await cartFetch("update", {
          cartId: cart.id,
          lineId,
          quantity,
        });
        setCart(updatedCart);
      } finally {
        setIsLoading(false);
      }
    },
    [cart]
  );

  const removeItem = useCallback(
    async (lineId: string) => {
      if (!cart) return;
      setIsLoading(true);
      try {
        const updatedCart = await cartFetch("remove", {
          cartId: cart.id,
          lineId,
        });
        setCart(updatedCart);
      } finally {
        setIsLoading(false);
      }
    },
    [cart]
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        isOpen,
        isLoading,
        openCart,
        closeCart,
        addItem,
        updateItem,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
