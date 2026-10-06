import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Check, Sparkles, ArrowUpRight } from "lucide-react";

export function Planos() {
  return (
    <section id="planos" className="relative py-24 md:py-32 overflow-hidden bg-[#0D0D0D]/40">
      {/* Background glow behind center card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#34D399]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex mb-4">
            <Badge variant="default" icon={<Sparkles className="w-3.5 h-3.5 text-[#34D399]" />}>
              Investimento Estruturado
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-metallic mb-6">
            Planos Claros Para Cada Momento da Sua Empresa
          </h2>
          <p className="text-base sm:text-lg text-[#A3A3A3] leading-relaxed">
            Sem surpresas no orçamento. Cada escopo é desenhado com entregas claras, código proprietário e suporte pós-entrega.
          </p>
        </div>

        {/* 3 Pricing Cards Grid matching the reference */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Essencial (Dark Glass) */}
          <div className="relative rounded-3xl p-8 bg-[#171717]/85 backdrop-blur-xl border border-white/10 flex flex-col justify-between shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-white/20 transition-all duration-300">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">Essencial</h3>
                <span className="text-xs uppercase font-semibold text-[#A3A3A3] px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                  Landing Page
                </span>
              </div>
              <p className="text-xs text-[#A3A3A3] mb-6 leading-relaxed">
                Ideal para validar campanhas com uma página de conversão agressiva e ultra-rápida.
              </p>

              {/* Price (PLACEHOLDER) */}
              <div className="mb-6 pb-6 border-b border-white/10">
                <span className="text-xs text-[#A3A3A3] block mb-1">Investimento a partir de</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white">
                    {/* PLACEHOLDER: edite este valor */}
                    R$ 4.500
                  </span>
                  <span className="text-xs text-[#A3A3A3]">/ projeto</span>
                </div>
              </div>

              {/* Benefits list */}
              <ul className="space-y-3 mb-8 text-xs sm:text-sm text-[#D4D4D8]">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#34D399] shrink-0" />
                  <span>Landing Page One-Page de alta conversão</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#34D399] shrink-0" />
                  <span>UI exclusiva no Figma adaptada à sua marca</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#34D399] shrink-0" />
                  <span>Desenvolvimento Next.js 15 ou Framer</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#34D399] shrink-0" />
                  <span>Integração com WhatsApp e formulários</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#34D399] shrink-0" />
                  <span>Otimização SEO e velocidade mobile</span>
                </li>
              </ul>
            </div>

            <Button
              href="#contato"
              variant="secondary"
              size="md"
              className="w-full text-center"
            >
              Iniciar Essencial
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>

          {/* Card 2: Profissional (CENTER HIGHLIGHT - WHITE/LIGHT CARD) */}
          <div className="relative rounded-3xl p-8 bg-white text-[#0A0A0A] border-2 border-white flex flex-col justify-between shadow-[0_20px_60px_rgba(255,255,255,0.18),0_0_40px_rgba(52,211,153,0.3)] lg:-translate-y-3 z-20 transition-all duration-300">
            {/* Top Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#0A0A0A] text-[#34D399] border border-[#34D399]/40 text-xs font-bold tracking-wide shadow-md flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#34D399]" />
              MAIS ESCOLHIDO
            </div>

            <div>
              <div className="flex justify-between items-center mb-4 mt-2">
                <h3 className="text-2xl font-black text-black">Profissional</h3>
                <span className="text-xs uppercase font-bold text-neutral-800 px-2.5 py-1 rounded-full bg-neutral-100 border border-neutral-300">
                  Presença Completa
                </span>
              </div>
              <p className="text-xs text-neutral-600 mb-6 leading-relaxed">
                A solução definitiva para empresas que exigem autoridade máxima, páginas institucionais e SEO profundo.
              </p>

              {/* Price (PLACEHOLDER) */}
              <div className="mb-6 pb-6 border-b border-neutral-200">
                <span className="text-xs text-neutral-500 block mb-1">Investimento a partir de</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-black text-black">
                    {/* PLACEHOLDER: edite este valor */}
                    R$ 9.800
                  </span>
                  <span className="text-xs text-neutral-600">/ projeto</span>
                </div>
              </div>

              {/* Benefits list */}
              <ul className="space-y-3.5 mb-8 text-xs sm:text-sm text-neutral-800 font-medium">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 font-bold" />
                  <span>Site multipáginas institucional completo</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 font-bold" />
                  <span>UX Research e arquitetura de informação</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 font-bold" />
                  <span>Design System exclusivo no Figma</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 font-bold" />
                  <span>Engenharia Next.js 15 com SSR e micro-interações</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 font-bold" />
                  <span>Garantia de Score 95+ nos Core Web Vitals</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 font-bold" />
                  <span>Integrações CRM, Analytics & Meta Pixel</span>
                </li>
              </ul>
            </div>

            <Button
              href="#contato"
              variant="primary"
              size="lg"
              className="w-full text-center !bg-black !text-white hover:!bg-neutral-800 shadow-xl font-bold"
            >
              Garantir Minha Vaga
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>

          {/* Card 3: Sob Medida (Dark Glass) */}
          <div className="relative rounded-3xl p-8 bg-[#171717]/85 backdrop-blur-xl border border-white/10 flex flex-col justify-between shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-white/20 transition-all duration-300">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">Sob Medida</h3>
                <span className="text-xs uppercase font-semibold text-[#A3A3A3] px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                  SaaS & App
                </span>
              </div>
              <p className="text-xs text-[#A3A3A3] mb-6 leading-relaxed">
                Para produtos digitais, sistemas complexos, dashboards e contratos com squad dedicado.
              </p>

              {/* Price (PLACEHOLDER) */}
              <div className="mb-6 pb-6 border-b border-white/10">
                <span className="text-xs text-[#A3A3A3] block mb-1">Investimento sob medida</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white">
                    {/* PLACEHOLDER: edite este valor */}
                    Personalizado
                  </span>
                </div>
              </div>

              {/* Benefits list */}
              <ul className="space-y-3 mb-8 text-xs sm:text-sm text-[#D4D4D8]">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#34D399] shrink-0" />
                  <span>Design de interfaces de Software (SaaS / App)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#34D399] shrink-0" />
                  <span>Biblioteca de componentes Figma + Tokens de código</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#34D399] shrink-0" />
                  <span>Engenharia Front-end completa sob demanda</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#34D399] shrink-0" />
                  <span>Prototipagem interativa para validação de produto</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#34D399] shrink-0" />
                  <span>SLA prioritário e acompanhamento quinzenal</span>
                </li>
              </ul>
            </div>

            <Button
              href="#contato"
              variant="secondary"
              size="md"
              className="w-full text-center"
            >
              Falar com Especialista
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
