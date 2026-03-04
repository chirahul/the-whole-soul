import { NextResponse } from "next/server";
import {
  createCart,
  addToCart,
  updateCartLine,
  removeFromCart,
  getCart,
} from "@/lib/shopify/client";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action } = body;

    switch (action) {
      case "create": {
        const cart = await createCart(body.variantId, body.quantity || 1);
        return NextResponse.json(cart);
      }
      case "add": {
        const cart = await addToCart(body.cartId, body.variantId, body.quantity || 1);
        return NextResponse.json(cart);
      }
      case "update": {
        const cart = await updateCartLine(body.cartId, body.lineId, body.quantity);
        return NextResponse.json(cart);
      }
      case "remove": {
        const cart = await removeFromCart(body.cartId, body.lineId);
        return NextResponse.json(cart);
      }
      case "get": {
        const cart = await getCart(body.cartId);
        return NextResponse.json(cart);
      }
      default:
        return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }
  } catch (error) {
    console.error("Cart API error:", error);
    return NextResponse.json(
      { error: "Cart operation failed" },
      { status: 500 }
    );
  }
}
