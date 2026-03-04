export interface Money {
  amount: string;
  currencyCode: string;
}

export interface Image {
  url: string;
  altText: string;
  width: number;
  height: number;
}

export interface SelectedOption {
  name: string;
  value: string;
}

export interface SEO {
  title: string;
  description: string;
}

export interface Variant {
  id: string;
  title: string;
  availableForSale: boolean;
  quantityAvailable: number;
  price: Money;
  compareAtPrice: Money | null;
  selectedOptions: SelectedOption[];
  image: Image | null;
}

export interface Product {
  id: string;
  title: string;
  handle: string;
  description: string;
  descriptionHtml: string;
  productType: string;
  tags: string[];
  vendor: string;
  price: Money;
  compareAtPrice: Money | null;
  images: Image[];
  variants: Variant[];
  options: { name: string; values: string[] }[];
  seo: SEO;
  availableForSale: boolean;
}

export interface Collection {
  id: string;
  title: string;
  handle: string;
  description: string;
  descriptionHtml: string;
  image: Image | null;
  products: Product[];
  seo: SEO;
}

export interface CartItem {
  id: string;
  variantId: string;
  productHandle: string;
  title: string;
  variantTitle: string;
  quantity: number;
  price: Money;
  totalPrice: Money;
  image: Image | null;
}

export interface Cart {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  subtotal: Money;
  total: Money;
  lines: CartItem[];
}

// Raw Shopify GraphQL response types
export interface ShopifyEdge<T> {
  node: T;
}

export interface ShopifyConnection<T> {
  edges: ShopifyEdge<T>[];
}

export interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  descriptionHtml: string;
  productType: string;
  tags: string[];
  vendor: string;
  priceRange: {
    minVariantPrice: Money;
    maxVariantPrice: Money;
  };
  compareAtPriceRange: {
    minVariantPrice: Money;
  };
  images: ShopifyConnection<Image>;
  variants: ShopifyConnection<{
    id: string;
    title: string;
    availableForSale: boolean;
    quantityAvailable: number;
    price: Money;
    compareAtPrice: Money | null;
    selectedOptions: SelectedOption[];
    image: Image | null;
  }>;
  options: { name: string; values: string[] }[];
  seo: SEO;
  availableForSale: boolean;
}

export interface ShopifyCollection {
  id: string;
  title: string;
  handle: string;
  description: string;
  descriptionHtml: string;
  image: Image | null;
  products: ShopifyConnection<ShopifyProduct>;
  seo: SEO;
}

export interface ShopifyCart {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  cost: {
    subtotalAmount: Money;
    totalAmount: Money;
  };
  lines: ShopifyConnection<{
    id: string;
    quantity: number;
    cost: { totalAmount: Money };
    merchandise: {
      id: string;
      title: string;
      price: Money;
      product: { title: string; handle: string };
      image: Image | null;
    };
  }>;
}
