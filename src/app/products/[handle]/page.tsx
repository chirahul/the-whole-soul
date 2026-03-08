import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getProductByHandle, getAllProducts } from "@/lib/shopify/client";
import { STATIC_PRODUCTS, getStaticProduct } from "@/lib/static-products";
import { Price } from "@/components/ui/Price";
import { Badge } from "@/components/ui/Badge";
import { ProductGallery } from "@/components/product/ProductGallery";
import { AddToCartButton } from "@/components/product/AddToCartButton";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import type { Product } from "@/lib/shopify/types";

interface PageProps {
  params: Promise<{ handle: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { handle } = await params;
  let product: Product | null = null;
  try {
    product = await getProductByHandle(handle);
  } catch {
    product = getStaticProduct(handle);
  }
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: product.images[0]
        ? [{ url: product.images[0].url, width: product.images[0].width, height: product.images[0].height }]
        : [],
    },
  };
}

export async function generateStaticParams() {
  try {
    const products = await getAllProducts();
    return products.map((p) => ({ handle: p.handle }));
  } catch {
    return STATIC_PRODUCTS.map((p) => ({ handle: p.handle }));
  }
}

function ProductBadges({ tags }: { tags: string[] }) {
  const badgeMap: Record<string, string> = {
    "gluten-free": "Gluten Free",
    vegan: "Vegan",
    "no-maida": "No Maida",
    "no-palm-oil": "No Palm Oil",
    bestseller: "Bestseller",
    "no-added-sugar": "No Added Sugar",
  };

  const visibleBadges = tags
    .filter((tag) => badgeMap[tag])
    .map((tag) => ({ key: tag, label: badgeMap[tag] }));

  if (visibleBadges.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {visibleBadges.map((badge) => (
        <Badge key={badge.key} variant={badge.key === "bestseller" ? "accent" : "default"}>
          {badge.label}
        </Badge>
      ))}
    </div>
  );
}

function JsonLd({ product }: { product: Product }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: product.images.map((img) => img.url),
    brand: { "@type": "Brand", name: SITE_NAME },
    offers: {
      "@type": "Offer",
      price: product.price.amount,
      priceCurrency: product.price.currencyCode,
      availability: product.availableForSale
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      url: `${SITE_URL}/products/${product.handle}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function ProductPage({ params }: PageProps) {
  const { handle } = await params;

  let product: Product | null = null;
  try {
    product = await getProductByHandle(handle);
  } catch {
    product = getStaticProduct(handle);
  }

  if (!product) notFound();

  const firstVariant = product.variants[0];

  return (
    <>
      <JsonLd product={product} />
      <section className="relative bg-[#FAF7F2] overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-10 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
            <div className="reveal-left">
              <ProductGallery images={product.images} title={product.title} />
            </div>

            <div className="md:sticky md:top-28 self-start reveal-right">
              <div className="bg-white border border-[#E8E3DA] rounded-3xl p-6 md:p-8">
                <span className="tag inline-block mb-4 text-[#735F3F] text-[10px]">
                  {product.productType || "The Whole Soul"}
                </span>
                <h1 className="font-[var(--font-heading)] text-2xl md:text-3xl font-semibold text-[#1A1A1A] mb-3">
                  {product.title}
                </h1>

                <Price
                  amount={product.price}
                  compareAt={product.compareAtPrice}
                  className="mb-5"
                />

                <div className="line-accent mb-5" />

                <ProductBadges tags={product.tags} />

                <div className="mt-6">
                  {firstVariant && (
                    <AddToCartButton
                      variantId={firstVariant.id}
                      availableForSale={firstVariant.availableForSale}
                    />
                  )}
                </div>

                <div className="mt-8">
                  <div
                    className="text-sm text-[#555] leading-relaxed [&_ul]:mt-3 [&_ul]:space-y-1.5 [&_li]:flex [&_li]:items-start [&_li]:gap-2 [&_li]:before:content-['\2713'] [&_li]:before:text-[#D4710A] [&_li]:before:font-bold [&_li]:before:mt-0.5 [&_p]:mb-3"
                    dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
                  />
                </div>
              </div>
            </div>
          </div>

          <Suspense fallback={null}>
            <RelatedProducts productId={product.id} />
          </Suspense>
        </div>
      </section>
    </>
  );
}
