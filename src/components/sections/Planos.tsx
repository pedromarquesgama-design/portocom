"use client";

import React from "react";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const BENEFITS: string[] = [
  "Site adaptado para abrir rápido em qualquer celular",
  "100% livre de anúncios ou taxas surpresas",
  "Suporte direto via WhatsApp",
];

export function Planos() {
  return (
    <section
      id="planos"
      className="relative py-8 sm:py-10 lg:py-12 bg-transparent text-[#FDFDFC] min-h-[calc(100vh-72px)] flex flex-col justify-center overflow-hidden scroll-mt-20"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[340px] bg-[#F59E0B]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-6 sm:mb-8"
        >
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#F59E0B] font-semibold mb-2 block">
            Plano Exclusivo
          </span>
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-[#FDFDFC] leading-tight uppercase">
            INVESTIMENTO ÚNICO E TRANSPARENTE
          </h2>
        </motion.div>

        {/* Pricing Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl lg:max-w-5xl mx-auto w-full my-2 items-stretch"
        >
          {/* Card 1 - Pacote Completo */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -80 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="w-full relative group flex flex-col"
          >
            {/* Skewed gradient panels - amber glowing accent */}
            <span
              className="absolute top-0 left-[14px] sm:left-[24px] w-[calc(100%-28px)] sm:w-[calc(100%-48px)] h-full rounded-2xl transform skew-x-[3deg] sm:skew-x-[8deg] pointer-events-none transition-transform duration-300 group-hover:scale-[1.02]"
              style={{
                background: "linear-gradient(315deg, #F59E0B, #78350F)",
                opacity: 0.85,
              }}
            />
            <span
              className="absolute top-0 left-[14px] sm:left-[24px] w-[calc(100%-28px)] sm:w-[calc(100%-48px)] h-full rounded-2xl transform skew-x-[3deg] sm:skew-x-[8deg] blur-[24px] opacity-70 pointer-events-none transition-opacity duration-300 group-hover:opacity-90"
              style={{
                background: "linear-gradient(315deg, #F59E0B, #B45309)",
              }}
            />

            {/* Card Content Box - Obsidian dark surface with accent highlight */}
            <div className="relative z-20 h-full p-6 sm:p-8 bg-[#121217]/95 rounded-2xl text-[#FDFDFC] flex flex-col justify-between backdrop-blur-md border border-white/[0.08] shadow-2xl font-sans">
              <div className="flex flex-col">
                {/* Header: Title + Tag/Badge beside headline */}
                <div className="flex items-center gap-3 mb-2.5 flex-wrap">
                  <h3 className="text-2xl sm:text-[26px] font-heading font-extrabold tracking-tight text-[#FDFDFC] leading-tight">
                    Pacote Completo
                  </h3>
                  <span className="shrink-0 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-[#F59E0B] text-[#0A0A0E] shadow-[0_2px_10px_rgba(245,158,11,0.3)]">
                    TUDO INCLUSO
                  </span>
                </div>

                {/* Subtitle */}
                <p className="text-xs sm:text-[13px] text-[#B8B8C2] leading-relaxed font-normal">
                  Você recebe um site pronto para compartilhar e postar nas redes sociais. Cuidamos de toda a parte técnica.
                </p>

                {/* Price Block */}
                <div className="border-t border-white/[0.08] mt-5 pt-4 pb-4">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
                      R$ 970,00
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-[#B8B8C2]">
                      à vista
                    </span>
                  </div>

                  <div className="mt-1.5 flex items-center">
                    <span className="text-[11px] sm:text-xs font-mono font-medium px-2.5 py-0.5 rounded bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/25">
                      ou 10x de R$ 100,00 no cartão
                    </span>
                  </div>

                  <p className="mt-3 text-xs sm:text-[13px] text-[#B8B8C2] leading-relaxed">
                    Manutenção contínua, hospedagem veloz e domínio por apenas <span className="text-[#F59E0B] font-semibold">R$ 49,90/mês</span>
                  </p>
                </div>

                {/* Bullets List */}
                <ul className="space-y-2.5 border-t border-white/[0.08] pt-4 mb-2">
                  {BENEFITS.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#E2DDD2] leading-snug"
                    >
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-[#F59E0B]" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button pinned along the bottom */}
              <div className="pt-5 mt-3 border-t border-white/[0.08]">
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center gap-2 w-full text-xs sm:text-sm font-heading font-bold uppercase tracking-wider px-6 py-3 rounded-lg bg-[#F59E0B] text-[#0A0A0E] hover:bg-[#FBBF24] shadow-[0_4px_16px_rgba(245,158,11,0.35)] hover:shadow-[0_4px_24px_rgba(245,158,11,0.5)] transition-all cursor-pointer group"
                >
                  <span>Quero meu site pronto</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Assinatura Mensal */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -80 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="w-full relative group flex flex-col"
          >
            {/* Skewed gradient panels - amber glowing accent */}
            <span
              className="absolute top-0 left-[14px] sm:left-[24px] w-[calc(100%-28px)] sm:w-[calc(100%-48px)] h-full rounded-2xl transform skew-x-[3deg] sm:skew-x-[8deg] pointer-events-none transition-transform duration-300 group-hover:scale-[1.02]"
              style={{
                background: "linear-gradient(315deg, #F59E0B, #78350F)",
                opacity: 0.85,
              }}
            />
            <span
              className="absolute top-0 left-[14px] sm:left-[24px] w-[calc(100%-28px)] sm:w-[calc(100%-48px)] h-full rounded-2xl transform skew-x-[3deg] sm:skew-x-[8deg] blur-[24px] opacity-70 pointer-events-none transition-opacity duration-300 group-hover:opacity-90"
              style={{
                background: "linear-gradient(315deg, #F59E0B, #B45309)",
              }}
            />

            {/* Card Content Box - Obsidian dark surface with accent highlight */}
            <div className="relative z-20 h-full p-6 sm:p-8 bg-[#121217]/95 rounded-2xl text-[#FDFDFC] flex flex-col justify-between backdrop-blur-md border border-white/[0.08] shadow-2xl font-sans">
              <div className="flex flex-col">
                {/* Header: Title + Tag/Badge beside headline */}
                <div className="flex items-center gap-3 mb-2.5 flex-wrap">
                  <h3 className="text-2xl sm:text-[26px] font-heading font-extrabold tracking-tight text-[#FDFDFC] leading-tight">
                    Assinatura Mensal
                  </h3>
                  <span className="shrink-0 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-[#F59E0B] text-[#0A0A0E] shadow-[0_2px_10px_rgba(245,158,11,0.3)]">
                    SEM TAXA DE ENTRADA
                  </span>
                </div>

                {/* Subtitle */}
                <p className="text-xs sm:text-[13px] text-[#B8B8C2] leading-relaxed font-normal">
                  Você recebe um site pronto para compartilhar e postar nas redes sociais. Cuidamos de toda a parte técnica.
                </p>

                {/* Price Block */}
                <div className="border-t border-white/[0.08] mt-5 pt-4 pb-4">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
                      R$ 79,90
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-[#B8B8C2]">
                      /mês
                    </span>
                  </div>

                  <div className="mt-1.5 flex items-center">
                    <span className="text-[11px] sm:text-xs font-mono font-medium px-2.5 py-0.5 rounded bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/25">
                      Você paga apenas a mensalidade
                    </span>
                  </div>

                  <p className="mt-3 text-xs sm:text-[13px] text-[#B8B8C2] leading-relaxed">
                    Hospedagem, domínio, manutenção e suporte inclusos
                  </p>
                </div>

                {/* Bullets List */}
                <ul className="space-y-2.5 border-t border-white/[0.08] pt-4 mb-2">
                  {BENEFITS.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#E2DDD2] leading-snug"
                    >
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-[#F59E0B]" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button pinned along the bottom */}
              <div className="pt-5 mt-3 border-t border-white/[0.08]">
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center gap-2 w-full text-xs sm:text-sm font-heading font-bold uppercase tracking-wider px-6 py-3 rounded-lg bg-[#F59E0B] text-[#0A0A0E] hover:bg-[#FBBF24] shadow-[0_4px_16px_rgba(245,158,11,0.35)] hover:shadow-[0_4px_24px_rgba(245,158,11,0.5)] transition-all cursor-pointer group"
                >
                  <span>Começar por R$ 79,90/mês</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
