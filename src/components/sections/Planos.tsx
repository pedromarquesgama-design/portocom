"use client";

import React from "react";
import { Sparkles, Zap, ArrowRight, CheckCircle2, HeartHandshake } from "lucide-react";
import { motion } from "motion/react";

interface PlanFeature {
  text: string;
  included: boolean;
  highlight?: boolean;
}

interface PlanTier {
  id: string;
  name: string;
  badge?: string;
  icon: React.ElementType;
  description: string;
  monthlyPrice: string;
  monthlyPeriod: string;
  subPrice?: string;
  ctaText: string;
  ctaHref: string;
  featured?: boolean;
  gradientFrom: string;
  gradientTo: string;
  features: PlanFeature[];
}

const PRICING_PLANS: PlanTier[] = [
  {
    id: "parceria-anuncios",
    name: "Plano Parceria",
    badge: "Subvencionado por Anúncios",
    icon: HeartHandshake,
    description:
      "A forma mais acessível de colocar sua empresa no ar. Reduzimos o valor mensal em troca da veiculação de anúncios parceiros discretos.",
    monthlyPrice: "R$ 39,90",
    monthlyPeriod: "/mês",
    subPrice: "✓ Criação com anúncios discretos",
    ctaText: "Começar por R$ 39,90/mês",
    ctaHref: "#contato",
    featured: false,
    gradientFrom: "#2FA882",
    gradientTo: "#1A5446",
    features: [
      { text: "Criação completa do site sem custo de desenvolvimento", included: true, highlight: true },
      { text: "Valor mensal reduzido por subsídio de parceiros", included: true, highlight: true },
      { text: "Anúncios discretos com controle de qualidade", included: true },
      { text: "Domínio próprio, hospedagem e manutenção", included: true },
      { text: "Atendimento direto no WhatsApp", included: true },
      { text: "Sem taxa de adesão ou fidelidade", included: true },
    ],
  },
  {
    id: "modelo-assinatura",
    name: "Assinatura Padrão",
    badge: "100% Sem Anúncios",
    icon: Zap,
    description:
      "Presença digital completa sem anúncios. Ideal para empresas que buscam um site profissional com manutenção e suporte contínuos.",
    monthlyPrice: "R$ 79,90",
    monthlyPeriod: "/mês",
    subPrice: "✓ Sem anúncios + Manutenção inclusa",
    ctaText: "Assinar por R$ 79,90/mês",
    ctaHref: "#contato",
    featured: false,
    gradientFrom: "#3DBA95",
    gradientTo: "#2FA882",
    features: [
      { text: "Criação completa do site profissional", included: true, highlight: true },
      { text: "100% livre de qualquer anúncio", included: true, highlight: true },
      { text: "Hospedagem rápida e domínio inclusos", included: true },
      { text: "Manutenção preventiva e atualizações", included: true },
      { text: "Suporte e atendimento no WhatsApp", included: true },
      { text: "Sem taxa de adesão ou fidelidade", included: true },
    ],
  },
  {
    id: "compra-exclusiva",
    name: "Compra Exclusiva",
    badge: "★ 100% Exclusivo & Autoral",
    icon: Sparkles,
    description:
      "O site é 100% seu, totalmente livre de anúncios e com direitos autorais exclusivos. Ninguém terá a mesma estrutura visual.",
    monthlyPrice: "R$ 970,00",
    monthlyPeriod: "à vista",
    subPrice: "ou 10x de R$ 100,00 no cartão",
    ctaText: "Garantir Compra Exclusiva",
    ctaHref: "#contato",
    featured: true,
    gradientFrom: "#03a9f4",
    gradientTo: "#2FA882",
    features: [
      { text: "100% livre de anúncios com controle total", included: true, highlight: true },
      { text: "Design autoral e exclusivo irreplicável", included: true, highlight: true },
      { text: "Código-fonte e arquivos entregues", included: true },
      { text: "Hospedagem & Manutenção (R$ 39,90/mês)", included: true },
      { text: "30 dias de acompanhamento assistido", included: true },
      { text: "Treinamento prático para sua equipe", included: true },
    ],
  },
];

export function Planos() {
  return (
    <section
      id="planos"
      className="relative py-12 md:py-16 bg-transparent text-[#F5F4EE] overflow-hidden border-b border-[#242320]"
    >
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-[#1A5446]/15 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header - Carousel entrance, no fade (matches O QUE FAZEMOS PELO SEU NEGÓCIO) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-12 overflow-hidden"
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
              <span>✦ Investimento & Planos</span>
            </div>
            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl mb-3">
              Planos Acessíveis & <span className="gradient-text-h">Projetos Sob Medida</span>
            </h2>

            <p className="section-description max-w-2xl mx-auto mb-4">
              Escolha entre nossa parceria acessível por R$ 39,90/mês, assinatura sem anúncios por R$ 79,90/mês ou compra exclusiva com direitos autorais.
            </p>
          </motion.div>
        </motion.div>

        {/* Pricing Cards Grid - Carousel track entrance, no fade, staggered (matches O QUE FAZEMOS PELO SEU NEGÓCIO) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
          className="flex justify-center items-stretch flex-wrap gap-8 md:gap-10 max-w-7xl mx-auto mb-8"
        >
          {PRICING_PLANS.map((plan) => {
            return (
              <motion.div
                key={plan.id}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="group relative w-full sm:w-[340px] lg:w-[300px] xl:w-[320px] min-h-[480px] my-4 transition-all duration-500 flex flex-col"
              >
                {/* Skewed gradient panels - Subdued opacity to eliminate harsh neon glare */}
                <span
                  className="absolute top-0 left-[30px] sm:left-[40px] w-[calc(100%-60px)] h-full rounded-2xl transform skew-x-[12deg] transition-all duration-500 group-hover:skew-x-0 group-hover:left-[10px] group-hover:w-[calc(100%-20px)] opacity-60 group-hover:opacity-85"
                  style={{
                    background: `linear-gradient(315deg, ${plan.gradientFrom}, ${plan.gradientTo})`,
                  }}
                />
                <span
                  className="absolute top-0 left-[30px] sm:left-[40px] w-[calc(100%-60px)] h-full rounded-2xl transform skew-x-[12deg] blur-[30px] opacity-25 transition-all duration-500 group-hover:skew-x-0 group-hover:left-[10px] group-hover:w-[calc(100%-20px)] group-hover:opacity-40"
                  style={{
                    background: `linear-gradient(315deg, ${plan.gradientFrom}, ${plan.gradientTo})`,
                  }}
                />

                {/* Animated blurs */}
                <span className="pointer-events-none absolute inset-0 z-10">
                  <span className="absolute top-0 left-0 w-0 h-0 rounded-lg opacity-0 bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all duration-300 animate-blob group-hover:top-[-30px] group-hover:left-[30px] group-hover:w-[80px] group-hover:h-[80px] group-hover:opacity-100" />
                  <span className="absolute bottom-0 right-0 w-0 h-0 rounded-lg opacity-0 bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all duration-500 animate-blob animation-delay-1000 group-hover:bottom-[-30px] group-hover:right-[30px] group-hover:w-[80px] group-hover:h-[80px] group-hover:opacity-100" />
                </span>

                {/* Card Content Glass Box - High-contrast dark glass surface, zero glare */}
                <div className="relative z-20 h-full p-6 sm:p-8 bg-[#141413]/92 backdrop-blur-xl border border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.08)] rounded-2xl text-[#F5F4EE] transition-all duration-500 flex flex-col justify-between font-sans group-hover:bg-[#161615]/95 group-hover:border-[#2FA882]/40 group-hover:shadow-[0_16px_44px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.15)] group-hover:translate-y-[-6px]">
                  <div>
                    {/* Badge */}
                    {plan.badge && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-semibold text-[#2EE5A7] tracking-normal mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2EE5A7]" />
                        <span>{plan.badge}</span>
                      </div>
                    )}

                    {/* Name */}
                    <h2 className="text-2xl sm:text-[26px] font-bold tracking-tight mb-2.5 text-white leading-tight">
                      {plan.name}
                    </h2>
                    
                    {/* Description - Larger, relaxed and comfortable */}
                    <p className="text-sm sm:text-[15px] text-[#A1A1AA] leading-relaxed mb-5 font-normal">
                      {plan.description}
                    </p>

                    {/* Price Block - High contrast white numerals */}
                    <div className="mb-5 border-t border-white/10 pt-4">
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                          {plan.monthlyPrice}
                        </span>
                        {plan.monthlyPeriod && (
                          <span className="text-sm sm:text-base font-normal text-[#A1A1AA]">
                            {plan.monthlyPeriod}
                          </span>
                        )}
                      </div>
                      {plan.subPrice && (
                        <div className="text-xs font-medium px-2.5 py-1 rounded-md inline-block w-fit mt-2.5 bg-[#2EE5A7]/10 text-[#2EE5A7] border border-[#2EE5A7]/25">
                          {plan.subPrice}
                        </div>
                      )}
                    </div>

                    {/* Features Checklist - Larger text and clear contrast */}
                    <ul className="space-y-3 text-sm sm:text-[14.5px] border-t border-white/10 pt-4 mb-6">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 leading-snug">
                          <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-[#2EE5A7]" />
                          <span className={feat.highlight ? "font-semibold text-white" : "font-normal text-[#D4D4D8]"}>
                            {feat.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button - Comfortable size and clear text */}
                  <div className="pt-4 border-t border-white/10">
                    <a
                      href={plan.ctaHref}
                      className="inline-flex items-center justify-center w-full gap-2 text-sm font-bold uppercase tracking-wider text-[#121211] bg-[#F5F4EE] px-5 py-3.5 rounded-xl hover:bg-[#2EE5A7] hover:text-[#0D1F18] transition-colors shadow-md"
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tailwind custom utilities for animation */}
        <style>{`
          @keyframes blob {
            0%, 100% { transform: translateY(8px); }
            50% { transform: translate(-8px); }
          }
          .animate-blob { animation: blob 2.5s ease-in-out infinite; }
          .animation-delay-1000 { animation-delay: -1.25s; }
        `}</style>

      </div>
    </section>
  );
}
