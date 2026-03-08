"use client";

import { useState } from "react";
import type { Image as ImageType } from "@/lib/shopify/types";

interface ProductGalleryProps {
  images: ImageType[];
  title: string;
}

export function ProductGallery({ images, title }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = images[selectedIndex] || images[0];

  if (!images.length) {
    return (
      <div className="aspect-square bg-white border border-[#E8E3DA] rounded-3xl flex items-center justify-center text-[#999]">
        No image available
      </div>
    );
  }

  return (
    <div>
      <div className="rounded-3xl overflow-hidden mb-4">
        <div className="relative aspect-square bg-[#f0ede8]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={selected.url}
            alt={selected.altText || title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto scrollbar-none pb-1 snap-x snap-mandatory">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelectedIndex(i)}
              className={`relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 snap-start overflow-hidden rounded-xl transition-all duration-300 bg-[#f0ede8] ${
                i === selectedIndex
                  ? "ring-2 ring-[#D4710A] ring-offset-2"
                  : "opacity-60 border border-[#E8E3DA]"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.url}
                alt={img.altText || `${title} ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
