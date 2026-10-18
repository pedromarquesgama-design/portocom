"use client";

import React from "react";
import { motion } from "motion/react";
import { Check, ArrowUpRight } from "lucide-react";

interface CardItem {
  title: string;
  hook: string;
  bullets: string[];
  gradientFrom: string;
  gradientTo: string;
  badge: string;
  ctaText: string;
}

const cards: CardItem[] = [
  {
    title: "Sites e Páginas que Explicam e Vendem seu Trabalho",
    hook: "Um espaço claro e profissional na internet para o cliente entender o que você faz, confiar na sua empresa e entrar em contato.",
    bullets: [
      "Explica seu serviço de um jeito simples e direto",
      "Funciona perfeitamente tanto no celular quanto no computador",
      "Leva o cliente direto para o seu WhatsApp, já pronto para fechar negócio",
    ],
    gradientFrom: "#F59E0B",
    gradientTo: "#78350F",
    badge: "MAIS CLIENTES NO SEU WHATSAPP",
    ctaText: "Ver como funciona",
  },
  {
    title: "Identidade Visual e Logotipo",
    hook: "Criamos o seu logotipo, definimos as cores e entregamos tudo pronto para usar nas redes sociais, no WhatsApp e em materiais impressos.",
    bullets: [
      "Logotipo profissional, único e fácil de lembrar",
      "Escolha das cores e letras certas para o estilo da sua empresa",
      "Visual padronizado para usar no Instagram, WhatsApp e impressos",
    ],
    gradientFrom: "#FBBF24",
    gradientTo: "#D97706",
    badge: "IMAGEM PROFISSIONAL",
    ctaText: "Ver como funciona",
  },
  {
    title: "Reforma e Melhoria para o Seu Site Atual",
    hook: "Já tem um site, mas ele demora para abrir ou parece antigo? Nós deixamos ele rápido, bonito e fácil de usar, sem você perder seu espaço no Google.",
    bullets: [
      "Abre rápido no celular para o cliente não desistir de esperar",
      "Visual modernizado sem perder a posição que você já tem no Google",
      "Correção completa de erros, páginas travadas e botões que não funcionam",
    ],
    gradientFrom: "#FFC174",
    gradientTo: "#B45309",
    badge: "SITE RÁPIDO E ATUALIZADO",
    ctaText: "Quero melhorar meu site",
  },
];

export default function SkewCards() {
  return (
    <section
      id="trabalho"
      className="py-8 sm:py-10 lg:py-12 bg-transparent min-h-[calc(100vh-72px)] flex flex-col justify-center relative overflow-hidden scroll-mt-20"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] bg-[#F59E0B]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-auto">
        {/* Section Header with compact margins to prevent 100vh overflow */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-4xl mx-auto mb-6 sm:mb-8"
        >
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#F59E0B] font-semibold mb-2 sm:mb-2.5 block">
            Soluções Especializadas
          </span>
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-[#FDFDFC] leading-tight uppercase">
            O QUE FAZEMOS PARA O SEU NEGÓCIO CRESCER
          </h2>
        </motion.div>

        {/* Cards Grid - 3 columns on desktop, compact height and aligned CTA buttons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 lg:gap-6 xl:gap-8 max-w-6xl mx-auto w-full items-stretch"
        >
          {cards.map(
            ({ title, hook, bullets, gradientFrom, gradientTo, badge, ctaText }) => (
              <motion.div
                key={title}
                variants={{
                  hidden: { opacity: 0, x: -80 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="relative w-full flex flex-col group my-2"
              >
                {/* Skewed gradient panels - amber glowing accent */}
                <span
                  className="absolute top-0 left-[14px] sm:left-[30px] w-[calc(100%-28px)] sm:w-[calc(100%-60px)] h-full rounded-2xl transform skew-x-[3deg] sm:skew-x-[10deg] lg:skew-x-[12deg] pointer-events-none transition-transform duration-300 group-hover:scale-[1.02]"
                  style={{
                    background: `linear-gradient(315deg, ${gradientFrom}, ${gradientTo})`,
                  }}
                />
                <span
                  className="absolute top-0 left-[14px] sm:left-[30px] w-[calc(100%-28px)] sm:w-[calc(100%-60px)] h-full rounded-2xl transform skew-x-[3deg] sm:skew-x-[10deg] lg:skew-x-[12deg] blur-[22px] opacity-70 pointer-events-none transition-opacity duration-300 group-hover:opacity-90"
                  style={{
                    background: `linear-gradient(315deg, ${gradientFrom}, ${gradientTo})`,
                  }}
                />

                {/* Card Content Box: p-6 padding, flex justify-between for aligned CTAs */}
                <div className="relative z-20 h-full p-6 bg-[#121217]/92 border border-white/[0.08] shadow-2xl rounded-2xl text-[#FDFDFC] flex flex-col justify-between backdrop-blur-sm">
                  <div className="flex flex-col">
                    {/* Badge */}
                    <div className="mb-3">
                      <span className="inline-block text-[10px] font-mono uppercase tracking-wider font-semibold text-[#F59E0B] bg-[#F59E0B]/10 border border-[#F59E0B]/25 px-2.5 py-0.5 rounded-full">
                        {badge}
                      </span>
                    </div>

                    {/* Title with compact 2-line limit */}
                    <h3 className="text-xl font-bold font-heading tracking-tight text-[#FDFDFC] leading-snug line-clamp-2 min-h-[3.25rem] flex items-center mb-2.5">
                      {title}
                    </h3>

                    {/* Short value hook */}
                    <p className="text-xs sm:text-[13px] text-[#B8B8C2] leading-relaxed mb-4 font-sans">
                      {hook}
                    </p>

                    {/* 3 Scannable bullets */}
                    <ul className="space-y-2 mb-2 border-t border-white/[0.06] pt-3">
                      {bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2 text-xs text-[#E2DDD2] leading-snug"
                        >
                          <Check className="w-3.5 h-3.5 text-[#F59E0B] shrink-0 mt-0.5 stroke-[2.5]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button pinned along the bottom */}
                  <div className="pt-4 mt-2 border-t border-white/[0.06]">
                    <a
                      href="#contato"
                      className="inline-flex items-center justify-center gap-1.5 w-full text-xs font-bold uppercase tracking-wider text-[#0A0A0E] bg-[#F59E0B] px-4 py-2.5 rounded-lg hover:bg-[#FBBF24] hover:shadow-[0_4px_20px_rgba(245,158,11,0.45)] transition-all font-sans"
                    >
                      <span>{ctaText}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
