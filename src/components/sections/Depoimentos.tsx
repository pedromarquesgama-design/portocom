"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Star, ChevronLeft, ChevronRight, MessageSquareQuote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "A reformulação da nossa landing page e a migração para Next.js aumentou a taxa de conversão em 160% logo no primeiro mês. A atenção à hierarquia visual e micro-interações foi cirúrgica.",
    // PLACEHOLDER: edite nome, cargo e empresa
    name: "Lucas Silveira",
    role: "Founder & CEO",
    company: "SaaS Scale Metrics",
    avatarInitials: "LS",
  },
  {
    quote:
      "O Design System criado no Figma e integrado ao nosso time de tecnologia cortou o tempo de desenvolvimento em 40%. A consistência de interface que alcançamos é outro nível de maturidade.",
    // PLACEHOLDER: edite nome, cargo e empresa
    name: "Mariana Albuquerque",
    role: "Head de Produto",
    company: "FinTech Prime",
    avatarInitials: "MA",
  },
  {
    quote:
      "Nosso site anterior demorava quase 4 segundos para abrir no celular. O novo projeto cravou nota 100 no PageSpeed e nosso custo por lead no Google Ads caiu praticamente pela metade.",
    // PLACEHOLDER: edite nome, cargo e empresa
    name: "Rodrigo Mendes",
    role: "Diretor de Marketing",
    company: "Nexus Capital",
    avatarInitials: "RM",
  },
];

export function Depoimentos() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? TESTIMONIALS.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === TESTIMONIALS.length - 1 ? 0 : prevIdx + 1));
  };

  return (
    <section id="depoimentos" className="relative py-24 md:py-32 overflow-hidden bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Carousel Navigation Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex mb-4">
              <Badge variant="default" icon={<MessageSquareQuote className="w-3.5 h-3.5 text-[#34D399]" />}>
                Prova Social
              </Badge>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-metallic mb-4">
              O Que Dizem Quem Já Construiu Conosco
            </h2>
            <p className="text-base sm:text-lg text-[#A3A3A3]">
              Resultados reais e depoimentos de fundadores e líderes de produto que confiaram no nosso método.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              type="button"
              className="p-3 rounded-full bg-[#171717] border border-white/10 hover:border-white/30 text-white transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#34D399]"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              type="button"
              className="p-3 rounded-full bg-[#171717] border border-white/10 hover:border-white/30 text-white transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#34D399]"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, index) => {
            const isFeatured = index === currentIndex;
            return (
              <div
                key={index}
                className={`relative rounded-3xl p-8 bg-[#171717]/85 backdrop-blur-xl border transition-all duration-300 flex flex-col justify-between ${
                  isFeatured
                    ? "border-[#34D399]/40 shadow-[0_12px_40px_rgba(52,211,153,0.12)] md:-translate-y-1.5"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-6 text-[#34D399]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#34D399]" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-sm md:text-base text-[#D4D4D8] leading-relaxed mb-8 italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3.5 pt-6 border-t border-white/5">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#1E293B] to-[#34D399]/20 border border-white/10 flex items-center justify-center font-bold text-sm text-[#34D399] shrink-0">
                    {item.avatarInitials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#A3A3A3]">
                      {item.role} · <span className="text-[#E5E5E5]">{item.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
