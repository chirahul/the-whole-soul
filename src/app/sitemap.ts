import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
    { url: `${SITE_URL}/shop`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${SITE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${SITE_URL}/collections/baked-snacks`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${SITE_URL}/collections/chocolate-collection`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
  ];

  const productHandles = [
    "barbeque-coated-peanut-crackle",
    "baked-beetroot-chips",
    "baked-broccoli-chips",
    "pure-chocolate-coated-date-bites",
    "pure-chocolate-coated-pecan-nuts",
    "premium-chocolate-coated-raisins",
    "vada-pav-chilla-instant-mix",
  ];

  const productPages = productHandles.map((handle) => ({
    url: `${SITE_URL}/products/${handle}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...productPages];
}
