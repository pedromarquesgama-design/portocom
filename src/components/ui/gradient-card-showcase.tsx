"use client";

import React from 'react';
import { motion } from "motion/react";

interface CardItem {
  title: string;
  desc: string;
  extraInfo?: string;
  testBadges?: { label: string; val: string }[];
  gradientFrom: string;
  gradientTo: string;
  badge: string;
}

const cards: CardItem[] = [
  {
    title: 'Criação de Sites Comerciais & Páginas de Venda',
    desc: 'Desenhamos sites sob medida baseados no comportamento e nos critérios de decisão do seu cliente ideal. Sua empresa recebe uma presença visual única que transmite prestígio instantâneo e conduz os visitantes diretamente para a tomada de ação.',
    extraInfo: 'Mapeamos o seu mercado, analisamos os principais concorrentes e identificamos os argumentos mais convincentes do seu negócio. Definimos os objetivos comerciais claros que o novo site precisa cumprir para gerar contatos qualificados.',
    gradientFrom: '#2FA882',
    gradientTo: '#1A5446',
    badge: 'Alta Conversão',
  },
  {
    title: 'Branding, Posicionamento & Identidade Visual',
    desc: 'Criamos identidades visuais completas do zero ou conduzimos rebrandings estratégicos para empresas consolidadas que precisam alinhar sua imagem ao seu valor real de mercado.',
    extraInfo: 'Definimos logotipo, sistemas visuais, diretrizes tipográficas, paleta de cores e tom de voz, garantindo que sua nova marca inspire consistência e autoridade em todos os canais.',
    gradientFrom: '#3DBA95',
    gradientTo: '#2FA882',
    badge: 'Autoridade & Prestígio',
  },
  {
    title: 'Redesign Estratégico & Otimização de Performance',
    desc: 'Se o seu site atual está lento, desatualizado ou não gera oportunidades comerciais, uma reformulação profunda transforma sua presença sem comprometer seu histórico conquistado.',
    extraInfo: 'Auditamos sua plataforma existente, blindamos sua autoridade de SEO sem perda de posições e reconstruímos seu ecossistema para ser até 4x mais rápido, moderno e rentável.',
    gradientFrom: '#03a9f4',
    gradientTo: '#2FA882',
    badge: 'Performance & SEO',
  },
];

export default function SkewCards() {
  return (
    <section className="py-10 md:py-14 bg-transparent min-h-screen relative overflow-hidden border-b border-[#242320]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#1A5446]/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Carousel entrance, no fade */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-5xl mx-auto mb-10 overflow-hidden"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-3 badge-pill-label">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2EE5A7]" />
              <span>✦ Soluções Digitais</span>
            </div>
            <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase">
              O QUE FAZEMOS <span className="gradient-text-h">PELO SEU NEGÓCIO</span>
            </h2>
            <p className="section-description max-w-2xl mx-auto mt-2">
              Construímos soluções completas que posicionam sua marca com autoridade e trazem retorno tangível.
            </p>
          </motion.div>
        </motion.div>

        {/* Cards Grid - Carousel track entrance, no fade, staggered */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
          className="flex justify-center items-stretch flex-wrap gap-8 md:gap-10"
        >
          {cards.map(
            (
              { title, desc, extraInfo, testBadges, gradientFrom, gradientTo, badge }
            ) => (
              <motion.div
                key={badge}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="group relative w-full sm:w-[340px] lg:w-[300px] xl:w-[320px] min-h-[480px] my-4 transition-all duration-500 flex flex-col"
              >
                {/* Skewed gradient panels */}
                <span
                  className="absolute top-0 left-[30px] sm:left-[40px] w-[calc(100%-60px)] h-full rounded-2xl transform skew-x-[12deg] transition-all duration-500 group-hover:skew-x-0 group-hover:left-[10px] group-hover:w-[calc(100%-20px)]"
                  style={{
                    background: `linear-gradient(315deg, ${gradientFrom}, ${gradientTo})`,
                  }}
                />
                <span
                  className="absolute top-0 left-[30px] sm:left-[40px] w-[calc(100%-60px)] h-full rounded-2xl transform skew-x-[12deg] blur-[25px] opacity-70 transition-all duration-500 group-hover:skew-x-0 group-hover:left-[10px] group-hover:w-[calc(100%-20px)] group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(315deg, ${gradientFrom}, ${gradientTo})`,
                  }}
                />

                {/* Animated blurs */}
                <span className="pointer-events-none absolute inset-0 z-10">
                  <span className="absolute top-0 left-0 w-0 h-0 rounded-lg opacity-0 bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all duration-300 animate-blob group-hover:top-[-30px] group-hover:left-[30px] group-hover:w-[80px] group-hover:h-[80px] group-hover:opacity-100" />
                  <span className="absolute bottom-0 right-0 w-0 h-0 rounded-lg opacity-0 bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all duration-500 animate-blob animation-delay-1000 group-hover:bottom-[-30px] group-hover:right-[30px] group-hover:w-[80px] group-hover:h-[80px] group-hover:opacity-100" />
                </span>

                {/* Card Content Glass Box */}
                <div className="relative z-20 h-full p-6 sm:p-7 bg-[#161614]/90 backdrop-blur-[12px] border border-[#2A2925] shadow-2xl rounded-2xl text-[#F5F4EE] transition-all duration-500 flex flex-col justify-between group-hover:bg-[#181816] group-hover:border-[#2FA882]/40 group-hover:translate-y-[-6px]">
                  <div>
                    {/* Badge */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1C1B19] border border-[#2E2D28] text-[10px] font-bold text-[#2FA882] uppercase tracking-wider mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2FA882]" />
                      {badge}
                    </div>

                    {/* Title */}
                    <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-3 text-[#F5F4EE] leading-snug">
                      {title}
                    </h2>

                    {/* Main Description */}
                    <p className="text-xs sm:text-sm text-[#C8C6BE] leading-relaxed mb-4">
                      {desc}
                    </p>

                    {/* Extra Info */}
                    {extraInfo && (
                      <p className="text-[11px] sm:text-xs text-[#8E8C82] leading-relaxed mb-4 border-t border-[#242320] pt-3">
                        {extraInfo}
                      </p>
                    )}

                    {/* Test Badges */}
                    {testBadges && (
                      <div className="space-y-1.5 border-t border-[#242320] pt-3 mb-4">
                        {testBadges.map((b) => (
                          <div key={b.label} className="text-[11px] font-mono text-[#3DBA95] bg-[#18382E]/50 px-2.5 py-1 rounded border border-[#2FA882]/30 flex items-center justify-between">
                            <span className="text-[#A3A096]">{b.label}:</span>
                            <span className="font-bold">{b.val}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4 border-t border-[#242320]">
                    <a
                      href="#contato"
                      className="inline-flex items-center justify-center w-full text-xs font-bold uppercase tracking-wider text-[#121211] bg-[#F5F4EE] px-4 py-2.5 rounded-lg hover:bg-[#2FA882] hover:text-[#F5F4EE] transition-colors shadow-md"
                    >
                      Solicitar Orçamento
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </motion.div>

      </div>

      {/* Tailwind custom utilities for animation */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translateY(8px); }
          50% { transform: translate(-8px); }
        }
        .animate-blob { animation: blob 2.5s ease-in-out infinite; }
        .animation-delay-1000 { animation-delay: -1.25s; }
      `}</style>
    </section>
  );
}
