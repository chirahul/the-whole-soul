import { Suspense } from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBadges } from "@/components/home/TrustBadges";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { BrandStory } from "@/components/home/BrandStory";
import { BrandPhilosophy } from "@/components/home/BrandPhilosophy";
import { CollectionsPreview } from "@/components/home/CollectionsPreview";
import { ProductCardSkeleton } from "@/components/ui/Skeleton";

function ProductsSkeleton() {
  return (
    <section className="py-16 md:py-24 mesh-bg-section">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <div className="h-8 w-40 bg-white/40 backdrop-blur-sm rounded-full mx-auto mb-4" />
          <div className="h-10 w-56 bg-white/40 backdrop-blur-sm rounded-2xl mx-auto" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBadges />
      <Suspense fallback={<ProductsSkeleton />}>
        <FeaturedProducts />
      </Suspense>
      <BrandStory />
      <BrandPhilosophy />
      <CollectionsPreview />
    </>
  );
}
