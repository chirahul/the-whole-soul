const PRODUCT_FRAGMENT = `
  id
  title
  handle
  description
  descriptionHtml
  productType
  tags
  vendor
  availableForSale
  priceRange {
    minVariantPrice { amount currencyCode }
    maxVariantPrice { amount currencyCode }
  }
  compareAtPriceRange {
    minVariantPrice { amount currencyCode }
  }
  images(first: 6) {
    edges {
      node { url altText width height }
    }
  }
  variants(first: 10) {
    edges {
      node {
        id
        title
        availableForSale
        quantityAvailable
        price { amount currencyCode }
        compareAtPrice { amount currencyCode }
        selectedOptions { name value }
        image { url altText width height }
      }
    }
  }
  options { name values }
  seo { title description }
`;

export const GET_ALL_PRODUCTS = `
  query GetAllProducts($first: Int = 20, $sortKey: ProductSortKeys = BEST_SELLING) {
    products(first: $first, sortKey: $sortKey) {
      edges {
        node {
          ${PRODUCT_FRAGMENT}
        }
      }
    }
  }
`;

export const GET_PRODUCT_BY_HANDLE = `
  query GetProductByHandle($handle: String!) {
    product(handle: $handle) {
      ${PRODUCT_FRAGMENT}
    }
  }
`;

export const GET_ALL_COLLECTIONS = `
  query GetAllCollections {
    collections(first: 10) {
      edges {
        node {
          id
          title
          handle
          description
          descriptionHtml
          image { url altText width height }
          products(first: 4, sortKey: BEST_SELLING) {
            edges {
              node {
                ${PRODUCT_FRAGMENT}
              }
            }
          }
          seo { title description }
        }
      }
    }
  }
`;

export const GET_COLLECTION_BY_HANDLE = `
  query GetCollectionByHandle($handle: String!, $first: Int = 20) {
    collection(handle: $handle) {
      id
      title
      handle
      description
      descriptionHtml
      image { url altText width height }
      seo { title description }
      products(first: $first, sortKey: BEST_SELLING) {
        edges {
          node {
            ${PRODUCT_FRAGMENT}
          }
        }
      }
    }
  }
`;

export const GET_PRODUCT_RECOMMENDATIONS = `
  query GetProductRecommendations($productId: ID!) {
    productRecommendations(productId: $productId) {
      ${PRODUCT_FRAGMENT}
    }
  }
`;

export const CART_FRAGMENT = `
  id
  checkoutUrl
  totalQuantity
  cost {
    subtotalAmount { amount currencyCode }
    totalAmount { amount currencyCode }
  }
  lines(first: 50) {
    edges {
      node {
        id
        quantity
        cost { totalAmount { amount currencyCode } }
        merchandise {
          ... on ProductVariant {
            id
            title
            price { amount currencyCode }
            product { title handle }
            image { url altText width height }
          }
        }
      }
    }
  }
`;

export const GET_CART = `
  query GetCart($cartId: ID!) {
    cart(id: $cartId) {
      ${CART_FRAGMENT}
    }
  }
`;
