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
            className={`rounded-xl transition-all duration-200 border ${
              isOpen
                ? "bg-[#181816] border-[#3D3C36] shadow-sm"
                : "bg-[#141413] border-[#242320] hover:border-[#2F2E29]"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
              className="flex w-full items-center justify-between p-5 md:p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FA882] rounded-xl cursor-pointer"
            >
              <span className="text-base font-semibold text-[#F5F4EE]">
                {item.question}
              </span>
              <span
                className={`ml-4 shrink-0 p-1.5 rounded-md transition-transform duration-200 ${
                  isOpen
                    ? "rotate-180 bg-[#1C1B19] text-[#2FA882] border border-[#2E2D28]"
                    : "text-[#A3A096] bg-[#1A1A18]"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            {isOpen && (
              <div
                id={`accordion-content-${item.id}`}
                className="px-5 pb-6 md:px-6 md:pb-6 text-sm text-[#A3A096] leading-relaxed border-t border-[#242320] pt-4"
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
