import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { getAllProducts, getAllCollections } from "@/lib/shopify/client";
import { STATIC_PRODUCTS } from "@/lib/static-products";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/shop`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/philosophy`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/policies/shipping`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/policies/refund`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  let productHandles: string[];
  try {
    const products = await getAllProducts();
    productHandles = products.map((p) => p.handle);
  } catch {
    productHandles = STATIC_PRODUCTS.map((p) => p.handle);
  }

  const productPages: MetadataRoute.Sitemap = productHandles.map((handle) => ({
    url: `${SITE_URL}/products/${handle}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  let collectionHandles: string[];
  try {
    const collections = await getAllCollections();
    collectionHandles = collections.map((c) => c.handle);
  } catch {
    collectionHandles = ["baked-snacks", "chocolate-collection", "instant-mixes"];
  }

  const collectionPages: MetadataRoute.Sitemap = collectionHandles
    .filter((h) => h !== "frontpage")
    .map((handle) => ({
      url: `${SITE_URL}/collections/${handle}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    }));

  return [...staticPages, ...productPages, ...collectionPages];
}
