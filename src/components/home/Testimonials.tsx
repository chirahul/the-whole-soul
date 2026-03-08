"use client";

import { useState } from "react";
import { TESTIMONIALS } from "@/lib/constants";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < rating ? "#D4710A" : "#E8E3DA"}
          stroke="none"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-16 reveal">
          <span className="tag inline-block mb-4">Happy Snackers</span>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
            Don&apos;t Take Our Word For It
          </h2>
          <p className="mt-4 text-base text-[#555] max-w-md mx-auto">
            Real reviews from real people who can&apos;t stop snacking.
          </p>
        </div>

        {/* Featured testimonial */}
        <div className="reveal">
          <div className="bg-[#FAF7F2] border border-[#E8E3DA] rounded-2xl p-8 md:p-12 text-center mb-8">
            <StarRating rating={TESTIMONIALS[active].rating} />
            <blockquote className="mt-6">
              <p className="font-[var(--font-fraunces)] text-xl md:text-2xl lg:text-3xl text-[#1A1A1A] leading-relaxed">
                &ldquo;{TESTIMONIALS[active].text}&rdquo;
              </p>
            </blockquote>
            <div className="mt-6">
              <p className="font-semibold text-[#1A1A1A]">{TESTIMONIALS[active].name}</p>
              <p className="text-sm text-[#999]">
                {TESTIMONIALS[active].location} &middot; {TESTIMONIALS[active].product}
              </p>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  i === active ? "w-8 bg-[#D4710A]" : "bg-[#E8E3DA] hover:bg-[#D4710A]/30"
                }`}
                aria-label={`View testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Grid of other reviews */}
        <div className="grid md:grid-cols-3 gap-4 mt-12 stagger-children">
          {TESTIMONIALS.filter((_, i) => i !== active).slice(0, 3).map((review) => (
            <div
              key={review.name}
              className="bg-[#FAF7F2] border border-[#E8E3DA] rounded-xl p-5"
            >
              <StarRating rating={review.rating} />
              <p className="mt-3 text-sm text-[#555] leading-relaxed line-clamp-3">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-3 pt-3 border-t border-[#E8E3DA]">
                <p className="text-xs font-semibold text-[#1A1A1A]">{review.name}</p>
                <p className="text-xs text-[#999]">{review.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
