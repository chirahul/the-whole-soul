"use client";

import { useState, useRef, useEffect } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

function FaqItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="bg-white border border-[#E8E3DA] rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left cursor-pointer hover:bg-[#FAF7F2] transition-colors"
      >
        <span className="text-sm md:text-base font-semibold text-[#1A1A1A] leading-snug">
          {item.question}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#FFF3E6] flex items-center justify-center transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#D4710A"
            strokeWidth="2"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
      >
        <div className="px-5 md:px-6 pb-5 md:pb-6">
          <div className="line-accent mb-4" />
          <p className="text-sm md:text-base text-[#555] leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <FaqItem
          key={i}
          item={item}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}
