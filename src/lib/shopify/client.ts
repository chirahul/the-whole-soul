import { createStorefrontApiClient } from "@shopify/storefront-api-client";
import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT_BY_HANDLE,
  GET_ALL_COLLECTIONS,
  GET_COLLECTION_BY_HANDLE,
  GET_PRODUCT_RECOMMENDATIONS,
  GET_CART,
} from "./queries";
import { CREATE_CART, ADD_TO_CART, UPDATE_CART_LINE, REMOVE_FROM_CART } from "./mutations";
import { normalizeProduct, normalizeCollection, normalizeCart } from "./normalize";
import type { Product, Collection, Cart, ShopifyProduct, ShopifyCollection, ShopifyCart, ShopifyConnection } from "./types";

let client: ReturnType<typeof createStorefrontApiClient> | null = null;

function getClient() {
  if (client) return client;
  const domain = process.env.SHOPIFY_STORE_DOMAIN;
  const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
  if (!domain || !token) {
    throw new Error("Shopify credentials not configured");
  }
  client = createStorefrontApiClient({
    storeDomain: `https://${domain}`,
    apiVersion: "2026-01",
    publicAccessToken: token,
  });
  return client;
}

async function shopifyFetch<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  const { data, errors } = await getClient().request(query, { variables });
  if (errors) {
    throw new Error(`Shopify API Error: ${JSON.stringify(errors)}`);
  }
  return data as T;
}

// ── Product queries ──

export async function getAllProducts(): Promise<Product[]> {
  const data = await shopifyFetch<{ products: ShopifyConnection<ShopifyProduct> }>(
    GET_ALL_PRODUCTS
  );
  return data.products.edges.map((edge) => normalizeProduct(edge.node));
}

export async function getProductByHandle(handle: string): Promise<Product | null> {
  const data = await shopifyFetch<{ product: ShopifyProduct | null }>(
    GET_PRODUCT_BY_HANDLE,
    { handle }
  );
  return data.product ? normalizeProduct(data.product) : null;
}

export async function getProductRecommendations(productId: string): Promise<Product[]> {
  const data = await shopifyFetch<{ productRecommendations: ShopifyProduct[] }>(
    GET_PRODUCT_RECOMMENDATIONS,
    { productId }
  );
  return data.productRecommendations.map(normalizeProduct);
}

// ── Collection queries ──

export async function getAllCollections(): Promise<Collection[]> {
  const data = await shopifyFetch<{ collections: ShopifyConnection<ShopifyCollection> }>(
    GET_ALL_COLLECTIONS
  );
  return data.collections.edges.map((edge) => normalizeCollection(edge.node));
}

export async function getCollectionByHandle(handle: string): Promise<Collection | null> {
  const data = await shopifyFetch<{ collection: ShopifyCollection | null }>(
    GET_COLLECTION_BY_HANDLE,
    { handle }
  );
  return data.collection ? normalizeCollection(data.collection) : null;
}

// ── Cart mutations ──

export async function createCart(variantId: string, quantity: number = 1): Promise<Cart> {
  const data = await shopifyFetch<{ cartCreate: { cart: ShopifyCart } }>(
    CREATE_CART,
    { input: { lines: [{ merchandiseId: variantId, quantity }] } }
  );
  return normalizeCart(data.cartCreate.cart);
}

export async function addToCart(cartId: string, variantId: string, quantity: number = 1): Promise<Cart> {
  const data = await shopifyFetch<{ cartLinesAdd: { cart: ShopifyCart } }>(
    ADD_TO_CART,
    { cartId, lines: [{ merchandiseId: variantId, quantity }] }
  );
  return normalizeCart(data.cartLinesAdd.cart);
}

export async function updateCartLine(cartId: string, lineId: string, quantity: number): Promise<Cart> {
  const data = await shopifyFetch<{ cartLinesUpdate: { cart: ShopifyCart } }>(
    UPDATE_CART_LINE,
    { cartId, lines: [{ id: lineId, quantity }] }
  );
  return normalizeCart(data.cartLinesUpdate.cart);
}

export async function removeFromCart(cartId: string, lineId: string): Promise<Cart> {
  const data = await shopifyFetch<{ cartLinesRemove: { cart: ShopifyCart } }>(
    REMOVE_FROM_CART,
    { cartId, lineIds: [lineId] }
  );
  return normalizeCart(data.cartLinesRemove.cart);
}

export async function getCart(cartId: string): Promise<Cart | null> {
  const data = await shopifyFetch<{ cart: ShopifyCart | null }>(
    GET_CART,
    { cartId }
  );
  return data.cart ? normalizeCart(data.cart) : null;
}
