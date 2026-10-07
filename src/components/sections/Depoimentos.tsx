"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "O maior ganho não foi só o site ficar bonito, mas o fato de que os clientes finalmente entendem o que nossa consultoria faz. Em menos de 30 dias após o lançamento, fechamos dois contratos que pagaram todo o projeto.",
    name: "Lucas Silveira",
    role: "Diretor Comercial",
    company: "SaaS Scale Metrics",
    avatarInitials: "LS",
  },
  {
    quote:
      "A nossa plataforma era confusa e o suporte gastava horas tirando dúvidas básicas dos usuários. O trabalho do estúdio simplificou a navegação de forma brilhante. A entrega foi rigorosamente no prazo combinado.",
    name: "Mariana Albuquerque",
    role: "Sócia & Fundadora",
    company: "FinTech Prime",
    avatarInitials: "MA",
  },
  {
    quote:
      "Eu não entendia nada de tecnologia e tinha receio de ser enganado por agências. A equipe foi extremamente transparente, paciente e conduziu tudo sem complicação. Recomendo de olhos fechados.",
    name: "Rodrigo Mendes",
    role: "Diretor Geral",
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
    <section id="depoimentos" className="relative py-24 md:py-32 overflow-hidden bg-[#151514] border-t border-[#262521]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex mb-4">
              <Badge variant="default">
                Experiências Reais
              </Badge>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F5F4EE] mb-4">
              O Que Diz Quem Já Confiou no Nosso Trabalho
            </h2>
            <p className="text-base sm:text-lg text-[#A3A096]">
              Depoimentos de fundadores e diretores que valorizam clareza, pontualidade e retorno sobre o investimento.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={prev}
              type="button"
              className="p-2.5 rounded-md bg-[#181816] border border-[#2A2925] hover:border-[#3D3C36] text-[#F5F4EE] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FA882]"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              type="button"
              className="p-2.5 rounded-md bg-[#181816] border border-[#2A2925] hover:border-[#3D3C36] text-[#F5F4EE] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FA882]"
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
                className={`rounded-xl p-7 bg-[#181816] border transition-all duration-200 flex flex-col justify-between ${
                  isFeatured
                    ? "border-[#3D3C36] shadow-[0_4px_16px_rgba(0,0,0,0.3)] md:-translate-y-1"
                    : "border-[#262521] hover:border-[#33312B]"
                }`}
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-5 text-[#2FA882]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#2FA882]" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-sm text-[#C4C2B9] leading-relaxed mb-7 italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-5 border-t border-[#242320]">
                  <div className="w-9 h-9 rounded-md bg-[#1F1E1B] border border-[#2A2925] flex items-center justify-center font-bold text-xs text-[#2FA882] shrink-0">
                    {item.avatarInitials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#F5F4EE]">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#A3A096]">
                      {item.role} · <span className="text-[#E2DDD2]">{item.company}</span>
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
