import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCollectionByHandle, getAllCollections } from "@/lib/shopify/client";
import { STATIC_PRODUCTS } from "@/lib/static-products";
import { ProductGrid } from "@/components/product/ProductGrid";
import type { Collection } from "@/lib/shopify/types";

interface PageProps {
  params: Promise<{ handle: string }>;
}

const STATIC_COLLECTIONS: Record<string, { title: string; description: string; tags: string[] }> = {
  "baked-snacks": {
    title: "Baked Snacks",
    description: "Crispy, crunchy, baked - never fried. No maida, no palm oil.",
    tags: ["baked"],
  },
  "chocolate-collection": {
    title: "Chocolate Collection",
    description: "Pure chocolate indulgences made with real ingredients. No added sugar.",
    tags: ["chocolate"],
  },
  "gourmet-collection": {
    title: "Gourmet Collection",
    description: "Our full range of wholesome, plant-based snacks and treats.",
    tags: [],
  },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { handle } = await params;
  try {
    const collection = await getCollectionByHandle(handle);
    if (!collection) {
      const fallback = STATIC_COLLECTIONS[handle];
      return { title: fallback?.title || "Collection Not Found" };
    }
    return {
      title: collection.seo.title || collection.title,
      description: collection.seo.description || collection.description,
    };
  } catch {
    const fallback = STATIC_COLLECTIONS[handle];
    return { title: fallback?.title || "Collection" };
  }
}

export async function generateStaticParams() {
  try {
    const collections = await getAllCollections();
    return collections.map((c) => ({ handle: c.handle }));
  } catch {
    return Object.keys(STATIC_COLLECTIONS).map((handle) => ({ handle }));
  }
}

export default async function CollectionPage({ params }: PageProps) {
  const { handle } = await params;

  let collection: Collection | null = null;
  try {
    collection = await getCollectionByHandle(handle);
  } catch {
    const meta = STATIC_COLLECTIONS[handle];
    if (meta) {
      const filteredProducts = meta.tags.length > 0
        ? STATIC_PRODUCTS.filter((p) => p.tags.some((t) => meta.tags.includes(t)))
        : STATIC_PRODUCTS;
      collection = {
        id: handle,
        title: meta.title,
        handle,
        description: meta.description,
        descriptionHtml: `<p>${meta.description}</p>`,
        image: null,
        products: filteredProducts,
        seo: { title: meta.title, description: meta.description },
      };
    }
  }

  if (!collection) notFound();

  return (
    <section className="relative min-h-screen bg-[#FAF7F2] overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-20">
        <div className="mb-12 md:mb-16 reveal">
          <span className="tag inline-block mb-4 text-[#735F3F]">Collection</span>
          <h1 className="font-[var(--font-heading)] text-3xl md:text-5xl font-semibold text-[#1A1A1A]">
            <span className="text-[#D4710A]">{collection.title}</span>
          </h1>
          {collection.description && (
            <p className="mt-3 text-base text-[#555] max-w-2xl">
              {collection.description}
            </p>
          )}
        </div>

        {collection.products.length > 0 ? (
          <ProductGrid products={collection.products} />
        ) : (
          <div className="text-center py-20">
            <div className="bg-white border border-[#E8E3DA] rounded-3xl p-12 max-w-md mx-auto">
              <p className="text-[#999]">No products in this collection yet.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
