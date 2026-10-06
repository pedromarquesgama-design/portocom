"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

export interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string;
  className?: string;
}

export function Accordion({
  items,
  defaultOpenId,
  className = "",
}: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId || null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={`rounded-2xl transition-all duration-300 border ${
              isOpen
                ? "bg-[#171717] border-[#34D399]/40 shadow-[0_0_20px_rgba(52,211,153,0.1)]"
                : "bg-[#141414]/80 border-white/5 hover:border-white/15"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
              className="flex w-full items-center justify-between p-5 md:p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#34D399] rounded-2xl cursor-pointer"
            >
              <span className="text-base md:text-lg font-medium text-[#FAFAFA]">
                {item.question}
              </span>
              <span
                className={`ml-4 shrink-0 p-1 rounded-full transition-transform duration-300 ${
                  isOpen
                    ? "rotate-180 bg-[#34D399]/20 text-[#34D399]"
                    : "text-[#A3A3A3] bg-white/5"
                }`}
              >
                <ChevronDown className="w-5 h-5" />
              </span>
            </button>

            {isOpen && (
              <div
                id={`accordion-content-${item.id}`}
                className="px-5 pb-6 md:px-6 md:pb-6 text-sm md:text-base text-[#A3A3A3] leading-relaxed border-t border-white/5 pt-4 transition-all"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
