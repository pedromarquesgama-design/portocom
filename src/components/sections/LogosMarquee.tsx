import React from "react";
import { CLIENT_INDUSTRIES } from "@/lib/constants";

export function LogosMarquee() {
  const doubleIndustries = [...CLIENT_INDUSTRIES, ...CLIENT_INDUSTRIES];

  return (
    <section className="relative py-10 md:py-12 border-y border-[#262521] bg-[#141413] overflow-hidden">
      {/* Lateral gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-36 bg-gradient-to-r from-[#121211] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-36 bg-gradient-to-l from-[#121211] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
        <p className="text-[11px] uppercase tracking-widest font-semibold text-[#A3A096]">
          Atendemos empresas e líderes nos setores mais exigentes
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        <div className="animate-marquee flex items-center gap-6 md:gap-8">
          {doubleIndustries.map((item, idx) => (
            <div
              key={`${item.title}-${idx}`}
              className="flex items-center gap-3 px-4 py-2 rounded-md bg-[#181816] border border-[#262521] text-[#A3A096] hover:text-[#F5F4EE] hover:border-[#3D3C36] transition-all shrink-0 cursor-default"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#2FA882]" />
              <span className="text-xs md:text-sm font-semibold tracking-tight text-[#E2DDD2]">
                {item.title}
              </span>
              <span className="text-[10px] text-[#A3A096] border-l border-[#262521] pl-2 hidden sm:inline-block">
                {item.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
