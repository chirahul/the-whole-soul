import type {
  Product,
  Collection,
  Cart,
  CartItem,
  ShopifyProduct,
  ShopifyCollection,
  ShopifyCart,
  ShopifyConnection,
} from "./types";

function extractEdges<T>(connection: ShopifyConnection<T>): T[] {
  return connection.edges.map((edge) => edge.node);
}

export function normalizeProduct(raw: ShopifyProduct): Product {
  const variants = extractEdges(raw.variants);
  const firstVariant = variants[0];

  return {
    id: raw.id,
    title: raw.title,
    handle: raw.handle,
    description: raw.description,
    descriptionHtml: raw.descriptionHtml,
    productType: raw.productType,
    tags: raw.tags,
    vendor: raw.vendor,
    price: raw.priceRange.minVariantPrice,
    compareAtPrice: raw.compareAtPriceRange.minVariantPrice.amount !== "0.0"
      ? raw.compareAtPriceRange.minVariantPrice
      : null,
    images: extractEdges(raw.images),
    variants: variants.map((v) => ({
      id: v.id,
      title: v.title,
      availableForSale: v.availableForSale,
      quantityAvailable: v.quantityAvailable,
      price: v.price,
      compareAtPrice: v.compareAtPrice,
      selectedOptions: v.selectedOptions,
      image: v.image,
    })),
    options: raw.options,
    seo: raw.seo,
    availableForSale: firstVariant?.availableForSale ?? false,
  };
}

export function normalizeCollection(raw: ShopifyCollection): Collection {
  return {
    id: raw.id,
    title: raw.title,
    handle: raw.handle,
    description: raw.description,
    descriptionHtml: raw.descriptionHtml,
    image: raw.image,
    products: extractEdges(raw.products).map(normalizeProduct),
    seo: raw.seo,
  };
}

export function normalizeCart(raw: ShopifyCart): Cart {
  const lines = extractEdges(raw.lines);

  return {
    id: raw.id,
    checkoutUrl: raw.checkoutUrl,
    totalQuantity: raw.totalQuantity,
    subtotal: raw.cost.subtotalAmount,
    total: raw.cost.totalAmount,
    lines: lines.map(
      (line): CartItem => ({
        id: line.id,
        variantId: line.merchandise.id,
        productHandle: line.merchandise.product.handle,
        title: line.merchandise.product.title,
        variantTitle: line.merchandise.title,
        quantity: line.quantity,
        price: line.merchandise.price,
        totalPrice: line.cost.totalAmount,
        image: line.merchandise.image,
      })
    ),
  };
}
