import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-2xl bg-white/40 backdrop-blur-sm border border-white/30",
        className
      )}
    />
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="product-card-glass rounded-2xl overflow-hidden">
      <Skeleton className="aspect-[3/4] w-full rounded-none rounded-t-2xl" />
      <div className="p-4 space-y-2">
        <Skeleton className="h-4 w-3/4 rounded-lg" />
        <Skeleton className="h-4 w-1/3 rounded-lg" />
      </div>
    </div>
  );
}
