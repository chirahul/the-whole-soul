"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const SLIDES = [
  {
    tag: "Clean Label Snacks from Pune",
    headline: "Snacks Made\nwith Soul.",
    body: "No preservatives. No refined sugar. No maida. Just wholesome goodness that tastes like someone actually cared.",
    cta: { label: "Shop Now", href: "/shop" },
    ctaSecondary: { label: "Our Story", href: "/about" },
    bg: "bg-[#FAF7F2]",
    textColor: "text-[#1A1A1A]",
    imagePlaceholder: "HERO IMAGE 1: Lifestyle shot of all products together, or hero product (Barbeque Peanuts) with ingredients around it",
  },
  {
    tag: "Baked. Never Fried. Ever.",
    headline: "Your Gut\nWill Thank You.",
    body: "Our chips are baked with real vegetables. Zero chemicals, 100% natural. Your body deserves better than deep-fried regret.",
    cta: { label: "Explore Baked Snacks", href: "/collections/baked-snacks" },
    ctaSecondary: null,
    bg: "bg-[#F0EBE1]",
    textColor: "text-[#1A1A1A]",
    imagePlaceholder: "HERO IMAGE 2: Close-up of Broccoli or Beetroot chips with real vegetables in the background",
  },
  {
    tag: "The Whole Soul Promise",
    headline: "0 Chemicals.\n100% Natural.",
    body: "Made in small batches in Pune with ingredients you can actually pronounce. If it's not good enough for our family, it doesn't go to yours.",
    cta: { label: "Our Philosophy", href: "/philosophy" },
    ctaSecondary: null,
    bg: "bg-[#2D3A2E]",
    textColor: "text-white",
    imagePlaceholder: "HERO IMAGE 3: Ingredient flat-lay — spices, nuts, dates, broccoli, beetroot on a rustic surface",
  },
];

export function HeroSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    // Cleanup to prevent SSR issues with swiper
    return () => {
      if (swiperRef.current) swiperRef.current = null;
    };
  }, []);

  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        pagination={{
          clickable: true,
          bulletClass: "inline-block w-2 h-2 rounded-full bg-[#1A1A1A]/20 mx-1.5 cursor-pointer transition-all duration-300",
          bulletActiveClass: "!w-8 !bg-[#D4710A]",
        }}
        loop
        speed={600}
        onSwiper={(swiper) => { swiperRef.current = swiper; }}
        className="hero-swiper"
      >
        {SLIDES.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className={`${slide.bg} min-h-[70vh] md:min-h-[85vh] flex items-center`}>
              <div className="w-full max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-16 md:py-0">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                  {/* Text */}
                  <div>
                    <span className={`tag inline-block mb-5 ${slide.bg === "bg-[#2D3A2E]" ? "!bg-white/10 !text-[#C9A84C]" : ""}`}>
                      {slide.tag}
                    </span>
                    <h1 className={`font-[var(--font-heading)] text-[2.5rem] md:text-[3.5rem] lg:text-7xl font-bold leading-[1.08] mb-5 whitespace-pre-line ${slide.textColor}`}>
                      {slide.headline}
                    </h1>
                    <p className={`text-[15px] md:text-base lg:text-lg max-w-lg mb-8 leading-relaxed ${slide.bg === "bg-[#2D3A2E]" ? "text-white/60" : "text-[#555]"}`}>
                      {slide.body}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={slide.cta.href}
                        className={slide.bg === "bg-[#2D3A2E]" ? "btn-primary" : "btn-dark"}
                      >
                        {slide.cta.label}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                      {slide.ctaSecondary && (
                        <Link
                          href={slide.ctaSecondary.href}
                          className="btn-outline"
                        >
                          {slide.ctaSecondary.label}
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Image placeholder */}
                  <div className="hidden md:flex md:justify-center">
                    <div className="max-w-[520px] w-full aspect-[4/5] rounded-2xl overflow-hidden border-2 border-dashed border-[#1A1A1A]/10 bg-white/5 flex items-center justify-center p-8">
                      <p className={`text-center text-sm leading-relaxed font-medium ${slide.bg === "bg-[#2D3A2E]" ? "text-white/30" : "text-[#1A1A1A]/25"}`}>
                        📸 {slide.imagePlaceholder}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pagination positioning */}
      <style jsx global>{`
        .hero-swiper .swiper-pagination {
          position: absolute;
          bottom: 24px !important;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </section>
  );
}
