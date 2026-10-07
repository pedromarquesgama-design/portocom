"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Compass,
  Layers,
  MessageSquareText,
  LayoutGrid,
  Code2,
  ShieldCheck,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  Smartphone,
  Laptop,
  Activity,
  Sparkles,
  Lock,
  Zap,
} from "lucide-react";

interface StepData {
  id: number;
  shortTitle: string;
  fullTitle: string;
  phaseBadge: string;
  description: string;
  deliverables: string[];
  duration: string;
  icon: React.ElementType;
}

const PROCESS_STEPS: StepData[] = [
  {
    id: 1,
    shortTitle: "Estratégia",
    fullTitle: "Estratégia Comercial & Alinhamento de Metas",
    phaseBadge: "Fase 01 • Diagnóstico",
    description:
      "Mapeamos o seu mercado, analisamos os principais concorrentes e identificamos os argumentos mais convincentes do seu negócio. Definimos os objetivos comerciais claros que o novo site precisa cumprir para gerar contatos qualificados.",
    deliverables: [
      "Diagnóstico do mercado e concorrentes diretos",
      "Definição do perfil de cliente ideal (ICP)",
      "Proposta de valor diferenciada e posicionamento",
      "Cronograma transparente com prazos garantidos",
    ],
    duration: "3 a 5 dias úteis",
    icon: Compass,
  },
  {
    id: 2,
    shortTitle: "Arquitetura",
    fullTitle: "Arquitetura de Informação & Mapa do Site",
    phaseBadge: "Fase 02 • Planejamento",
    description:
      "Organizamos a hierarquia de navegação e o mapa completo do site (sitemap). Cada página e seção é planejada para reter a atenção do visitante e conduzi-lo de forma natural até a tomada de decisão comercial.",
    deliverables: [
      "Mapa completo do site (Sitemap estruturado)",
      "Mapeamento da jornada de decisão do visitante",
      "Hierarquia visual de cada seção prioritária",
      "Eliminação de pontos de atrito até o contato",
    ],
    duration: "3 a 4 dias úteis",
    icon: Layers,
  },
  {
    id: 3,
    shortTitle: "Mensagem",
    fullTitle: "Copywriting Persuasivo & Funil de Conversão",
    phaseBadge: "Fase 03 • Comunicação",
    description:
      "O que o seu visitante precisa entender nos primeiros 5 segundos para confiar na sua marca? Escrevemos os textos comerciais, títulos de alto impacto e chamadas para ação (CTAs), garantindo clareza total sem jargões desnecessários.",
    deliverables: [
      "Títulos comerciais e headlines de alta conversão",
      "Argumentos de autoridade e quebra de objeções",
      "Redação persuasiva pensada para o seu público",
      "Chamadas para ação (CTAs) estratégicas",
    ],
    duration: "4 a 6 dias úteis",
    icon: MessageSquareText,
  },
  {
    id: 4,
    shortTitle: "Design UX/UI",
    fullTitle: "Wireframes & Design de Interface Sob Medida",
    phaseBadge: "Fase 04 • Interface",
    description:
      "Você visualiza e aprova a estrutura de cada página antes de iniciarmos a programação. Criamos uma interface elegante, adaptada para celulares e computadores, transmitindo autoridade imediata para o seu negócio.",
    deliverables: [
      "Wireframes e protótipos de todas as páginas",
      "Design 100% responsivo para mobile e desktop",
      "Aprovação ponto a ponto antes de programar",
      "Estética autoral e refinada para o seu nicho",
    ],
    duration: "6 a 8 dias úteis",
    icon: LayoutGrid,
  },
  {
    id: 5,
    shortTitle: "Desenvolvimento",
    fullTitle: "Desenvolvimento de Alta Performance & Integrações",
    phaseBadge: "Fase 05 • Engenharia",
    description:
      "Construímos o site com código limpo e carregamento instantâneo em menos de 1 segundo. Conectamos seu WhatsApp, formulários de contato seguros, e-mails corporativos e ferramentas analíticas sem você se preocupar com aspectos técnicos.",
    deliverables: [
      "Carregamento ultra-rápido (menos de 1 segundo)",
      "Integração direta com WhatsApp e CRM",
      "Painel administrativo simples para atualizar textos",
      "Estrutura otimizada para o Google (SEO técnico)",
    ],
    duration: "7 a 10 dias úteis",
    icon: Code2,
  },
  {
    id: 6,
    shortTitle: "Garantia & QA",
    fullTitle: "Testes Rigorosos & Garantia de Qualidade",
    phaseBadge: "Fase 06 • Validação",
    description:
      "Antes de ir ao ar, testamos o site em dezenas de aparelhos e navegadores reais (iPhone, Android, Mac e Windows). Validamos velocidade, segurança, links e envio de formulários. Só lançamos quando tudo estiver 100% aprovado.",
    deliverables: [
      "Testes de compatibilidade em todos os navegadores",
      "Auditoria de velocidade com pontuação máxima (95+)",
      "Certificados de segurança SSL e blindagem de formulários",
      "Verificação detalhada de cada clique e link",
    ],
    duration: "3 a 4 dias úteis",
    icon: ShieldCheck,
  },
  {
    id: 7,
    shortTitle: "Lançamento",
    fullTitle: "Lançamento Seguro & Acompanhamento Contínuo",
    phaseBadge: "Fase 07 • No Ar",
    description:
      "Publicamos o seu site sem nenhuma interrupção nas operações da sua empresa. Treinamos você e sua equipe de forma descomplicada e acompanhamos o tráfego inicial para garantir estabilidade, segurança e resultados comerciais.",
    deliverables: [
      "Publicação oficial com migração segura de domínio",
      "Treinamento prático e descomplicado para sua equipe",
      "Configuração de métricas e analytics de visitas",
      "Suporte e acompanhamento direto no pós-lançamento",
    ],
    duration: "Publicação imediata + Suporte contínuo",
    icon: TrendingUp,
  },
];

export function Processo() {
  const [activeStep, setActiveStep] = useState(0);

  const current = PROCESS_STEPS[activeStep];

  const handlePrev = () => {
    setActiveStep((prev) => (prev > 0 ? prev - 1 : PROCESS_STEPS.length - 1));
  };

  const handleNext = () => {
    setActiveStep((prev) => (prev < PROCESS_STEPS.length - 1 ? prev + 1 : 0));
  };

  return (
    <section
      id="processo"
      className="relative py-24 sm:py-32 bg-[#121211] border-t border-[#262521] overflow-hidden"
    >
      {/* Tactile grid background */}
      <div className="absolute inset-0 bg-tactile-grid opacity-50 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" />

      <div className="max-w-7xl xl:max-w-[1520px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="mb-3.5 inline-flex">
              <Badge variant="default" className="text-xs font-medium px-3.5 py-1">
                Como Trabalhamos
              </Badge>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold tracking-tight text-[#F5F4EE] leading-[1.1]">
              Nosso Processo de Trabalho
            </h2>
          </div>
          <p className="text-base sm:text-lg text-[#A3A096] max-w-xl leading-relaxed">
            Eliminamos o improviso e o jargão técnico. Cada etapa do projeto segue uma metodologia estruturada para entregar um site rápido, seguro e que gera negócios no prazo combinado.
          </p>
        </div>

        {/* 7-Step Horizontal Timeline Rail */}
        <div className="relative mb-14 sm:mb-16">
          
          {/* Timeline background track line */}
          <div className="hidden lg:block absolute top-[28px] left-[4%] right-[4%] h-[2px] bg-[#262521] z-0" />
          
          {/* Active progress fill */}
          <div
            className="hidden lg:block absolute top-[28px] left-[4%] h-[2px] bg-gradient-to-r from-[#1A5446] to-[#2FA882] z-0 transition-all duration-300"
            style={{
              width: `${(activeStep / (PROCESS_STEPS.length - 1)) * 92}%`,
            }}
          />

          {/* Steps List */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 lg:gap-2 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isActive = idx === activeStep;
              const isPast = idx < activeStep;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`group flex flex-col items-center text-center p-3 sm:p-3.5 rounded-xl transition-all duration-200 relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FA882] ${
                    isActive
                      ? "bg-[#181816] border border-[#3E3D35] shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
                      : "bg-[#141413]/60 hover:bg-[#181816]/80 border border-transparent hover:border-[#2A2925]"
                  }`}
                  aria-label={`Ver detalhes da etapa ${step.id}: ${step.fullTitle}`}
                  aria-current={isActive ? "step" : undefined}
                >
                  {/* Step Milestone Circle */}
                  <div className="relative mb-2.5">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-200 ${
                        isActive
                          ? "bg-[#18382E] border-2 border-[#2FA882] text-[#3DBA95] shadow-[0_0_16px_rgba(47,168,130,0.35)] scale-105"
                          : isPast
                          ? "bg-[#1A1A18] border border-[#2FA882]/40 text-[#45BFA0]"
                          : "bg-[#181816] border border-[#2A2925] text-[#A3A096] group-hover:text-[#F5F4EE] group-hover:border-[#383731]"
                      }`}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
                    </div>

                    {/* Active Step Pointer Triangle (Like in reference) */}
                    {isActive && (
                      <div className="hidden lg:block absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-0 h-0 border-x-[6px] border-x-transparent border-t-[7px] border-t-[#2FA882]" />
                    )}
                  </div>

                  {/* Step Number & Label */}
                  <span
                    className={`text-[11px] font-mono tracking-wider mb-0.5 transition-colors ${
                      isActive ? "text-[#3DBA95] font-semibold" : "text-[#75736B]"
                    }`}
                  >
                    0{step.id}
                  </span>
                  <span
                    className={`text-xs sm:text-sm font-medium leading-snug transition-colors line-clamp-1 ${
                      isActive
                        ? "text-[#F5F4EE] font-semibold"
                        : "text-[#A3A096] group-hover:text-[#E2DDD2]"
                    }`}
                  >
                    {step.shortTitle}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Showcase Card with Carousel Navigation */}
        <div className="relative bg-[#181816] border border-[#2C2B27] rounded-2xl p-6 sm:p-10 lg:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          
          {/* Navigation Chevron Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-3 sm:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1C1B19] border border-[#2E2D28] text-[#F5F4EE] hover:bg-[#252421] hover:border-[#3E3D35] hover:text-[#3DBA95] transition-all flex items-center justify-center shadow-lg z-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FA882]"
            aria-label="Etapa anterior"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-3 sm:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1C1B19] border border-[#2E2D28] text-[#F5F4EE] hover:bg-[#252421] hover:border-[#3E3D35] hover:text-[#3DBA95] transition-all flex items-center justify-center shadow-lg z-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FA882]"
            aria-label="Próxima etapa"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Step Detail Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Detail Column: Copy & Deliverables */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              
              {/* Phase Badge & Duration */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs font-mono font-semibold text-[#3DBA95] bg-[#1A382E]/40 border border-[#2FA882]/40 px-3 py-1 rounded-full">
                  {current.phaseBadge}
                </span>
                <span className="text-xs text-[#A3A096] flex items-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#2FA882]" />
                  {current.duration}
                </span>
              </div>

              {/* Step Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#F5F4EE] tracking-tight leading-snug mb-5">
                {current.fullTitle}
              </h3>

              {/* Step Description */}
              <p className="text-base sm:text-lg text-[#C4C2B9] leading-relaxed mb-7 font-normal">
                {current.description}
              </p>

              {/* Key Deliverables Checklist */}
              <div className="w-full space-y-2.5 mb-8">
                <span className="text-xs font-semibold text-[#A3A096] uppercase tracking-wider block mb-1">
                  O que é entregue nesta etapa:
                </span>
                {current.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-lg bg-[#141413] border border-[#242320]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#2FA882] flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#E2DDD2] font-medium leading-normal">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Link to Contact */}
              <div className="flex items-center gap-4">
                <Button
                  href="#contato"
                  variant="primary"
                  size="md"
                  className="font-semibold text-xs sm:text-sm"
                >
                  Iniciar Meu Projeto
                  <ArrowUpRight className="w-4 h-4 ml-1.5" />
                </Button>
                <span className="text-xs text-[#A3A096]">
                  Passo {current.id} de {PROCESS_STEPS.length}
                </span>
              </div>
            </div>

            {/* Right Detail Column: Tactile Realistic CSS Mockup for each Step */}
            <div className="lg:col-span-6 flex items-center justify-center w-full">
              <div className="w-full max-w-[560px] bg-[#141413] border border-[#262521] rounded-xl p-5 sm:p-6 shadow-[0_6px_24px_rgba(0,0,0,0.5)]">
                
                {/* Mockup Window Header */}
                <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-[#22211E]">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#2A2925]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#2A2925]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#2A2925]" />
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#181816] border border-[#262521] px-2.5 py-0.5 rounded text-[11px] font-mono text-[#A3A096]">
                    <span>portocom.agency/{current.shortTitle.toLowerCase().replace(/[^a-z0-9]/g, "")}</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#3DBA95] font-medium">
                    Fase 0{current.id}
                  </span>
                </div>

                {/* Step-Specific Visual Demonstration */}
                {current.id === 1 && (
                  /* Step 1: Strategy & Diagnostic */
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-[#181816] border border-[#242320]">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xs font-semibold text-[#F5F4EE]">Diagnóstico Comercial</span>
                        <span className="text-[10px] font-mono text-[#3DBA95] bg-[#18382E] px-2 py-0.5 rounded">Alinhado</span>
                      </div>
                      <div className="space-y-2 text-xs text-[#A3A096]">
                        <div className="flex justify-between py-1 border-b border-[#20201D]">
                          <span>Público-Alvo:</span>
                          <span className="text-[#F5F4EE] font-medium">Decisores & Líderes de Negócios</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-[#20201D]">
                          <span>Objetivo Principal:</span>
                          <span className="text-[#3DBA95] font-medium">Captação de Contatos Qualificados</span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span>Diferencial de Mercado:</span>
                          <span className="text-[#F5F4EE] font-medium">Atendimento Direto com Sócios</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-lg bg-[#181816] border border-[#242320] text-center">
                        <span className="text-[10px] uppercase text-[#A3A096] block mb-1">Prazo Definido</span>
                        <span className="text-base font-bold text-[#F5F4EE]">15 a 21 Dias</span>
                      </div>
                      <div className="p-3 rounded-lg bg-[#181816] border border-[#242320] text-center">
                        <span className="text-[10px] uppercase text-[#A3A096] block mb-1">Entregáveis</span>
                        <span className="text-base font-bold text-[#3DBA95]">100% no Prazo</span>
                      </div>
                    </div>
                  </div>
                )}

                {current.id === 2 && (
                  /* Step 2: Architecture & Sitemap */
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-[#181816] border border-[#242320]">
                      <span className="text-xs font-semibold text-[#F5F4EE] block mb-3">Estrutura de Páginas (Sitemap)</span>
                      <div className="space-y-2">
                        <div className="p-2.5 rounded bg-[#1C1C1A] border border-[#2A2925] flex items-center justify-between text-xs">
                          <span className="font-medium text-[#F5F4EE]">1. Página Inicial (Hero + Proposta de Valor)</span>
                          <span className="text-[10px] text-[#3DBA95] font-mono">Principal</span>
                        </div>
                        <div className="pl-4 space-y-1.5 border-l-2 border-[#2FA882]/40 ml-3">
                          <div className="p-2 rounded bg-[#161614] border border-[#22211E] text-xs text-[#A3A096]">
                            ↳ 2. Serviços & Diferenciais
                          </div>
                          <div className="p-2 rounded bg-[#161614] border border-[#22211E] text-xs text-[#A3A096]">
                            ↳ 3. Casos & Resultados Comerciais
                          </div>
                          <div className="p-2 rounded bg-[#161614] border border-[#22211E] text-xs text-[#A3A096]">
                            ↳ 4. Chamada de Contato Direto
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {current.id === 3 && (
                  /* Step 3: Messaging & Conversion Funnel (Reference Image 5) */
                  <div className="space-y-3.5">
                    <div className="p-3.5 rounded-lg bg-[#181816] border border-[#242320]">
                      <span className="text-[10px] uppercase tracking-wider text-[#3DBA95] font-semibold block mb-1">
                        Headline Principal
                      </span>
                      <p className="text-sm font-bold text-[#F5F4EE] leading-snug">
                        “Construa uma presença digital que inspira confiança e fecha negócios.”
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg bg-[#181816] border border-[#242320] space-y-2">
                      <span className="text-[10px] uppercase tracking-wider text-[#A3A096] font-semibold block">
                        Gatilhos de Confiança Aplicados
                      </span>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="px-2.5 py-1 rounded bg-[#1C1C19] border border-[#2A2925] text-[#E2DDD2]">
                          Sem intermediários técnicos
                        </span>
                        <span className="px-2.5 py-1 rounded bg-[#1C1C19] border border-[#2A2925] text-[#E2DDD2]">
                          Carregamento em &lt;1s
                        </span>
                        <span className="px-2.5 py-1 rounded bg-[#1C1C19] border border-[#2A2925] text-[#3DBA95]">
                          Foco em Vendas
                        </span>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-[#1A382E]/30 border border-[#2FA882]/40 flex items-center justify-between text-xs">
                      <span className="text-[#E2DDD2]">Chamada para Ação (CTA)</span>
                      <span className="font-semibold text-[#3DBA95]">Solicitar Proposta ↗</span>
                    </div>
                  </div>
                )}

                {current.id === 4 && (
                  /* Step 4: Wireframes & UX (Reference Image 4) */
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-[#181816] border border-[#242320] space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-[#22211E]">
                        <div className="flex items-center gap-2 text-xs text-[#A3A096]">
                          <Laptop className="w-3.5 h-3.5 text-[#3DBA95]" />
                          <span>Desktop View</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-[#A3A096]">
                          <Smartphone className="w-3.5 h-3.5 text-[#3DBA95]" />
                          <span>Mobile View</span>
                        </div>
                      </div>

                      {/* Wireframe skeleton representation */}
                      <div className="space-y-2">
                        <div className="h-3 w-1/2 bg-[#2A2925] rounded" />
                        <div className="h-16 w-full bg-[#1C1C1A] border border-dashed border-[#32312C] rounded flex items-center justify-center text-xs text-[#A3A096]">
                          [ Hero Grid Wireframe • 100% Responsivo ]
                        </div>
                        <div className="grid grid-cols-3 gap-2 pt-1">
                          <div className="h-10 bg-[#1C1C1A] rounded border border-[#242320]" />
                          <div className="h-10 bg-[#1C1C1A] rounded border border-[#242320]" />
                          <div className="h-10 bg-[#1C1C1A] rounded border border-[#242320]" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {current.id === 5 && (
                  /* Step 5: Web Development & Integrations (Reference Image 3) */
                  <div className="space-y-3.5">
                    <div className="p-4 rounded-lg bg-[#181816] border border-[#242320]">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold text-[#F5F4EE]">Integrações Ativas</span>
                        <span className="text-[10px] font-mono text-[#3DBA95] bg-[#18382E] px-2 py-0.5 rounded">Conectado</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="p-2.5 rounded bg-[#141413] border border-[#22211E] flex items-center gap-2 text-[#E2DDD2]">
                          <Zap className="w-3.5 h-3.5 text-[#3DBA95]" />
                          <span>WhatsApp Direto</span>
                        </div>
                        <div className="p-2.5 rounded bg-[#141413] border border-[#22211E] flex items-center gap-2 text-[#E2DDD2]">
                          <Lock className="w-3.5 h-3.5 text-[#3DBA95]" />
                          <span>Envio Seguro SSL</span>
                        </div>
                        <div className="p-2.5 rounded bg-[#141413] border border-[#22211E] flex items-center gap-2 text-[#E2DDD2]">
                          <Activity className="w-3.5 h-3.5 text-[#3DBA95]" />
                          <span>Google Analytics</span>
                        </div>
                        <div className="p-2.5 rounded bg-[#141413] border border-[#22211E] flex items-center gap-2 text-[#E2DDD2]">
                          <Sparkles className="w-3.5 h-3.5 text-[#3DBA95]" />
                          <span>CRM & Disparos</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-[#1A382E]/20 border border-[#2FA882]/40 flex items-center justify-between text-xs">
                      <span className="text-[#C4C2B9]">Velocidade de Carregamento</span>
                      <span className="font-bold text-[#3DBA95] font-mono">&lt; 0.7s no primeiro acesso</span>
                    </div>
                  </div>
                )}

                {current.id === 6 && (
                  /* Step 6: Testing & Quality Assurance (Reference Image 2) */
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-[#181816] border border-[#242320]">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold text-[#F5F4EE]">Auditoria de Performance</span>
                        <span className="text-xs font-bold text-[#3DBA95] font-mono">Score 98/100</span>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="flex items-center justify-between py-1 border-b border-[#20201D]">
                          <span className="text-[#A3A096]">Testado em Dispositivos Móveis:</span>
                          <span className="text-[#3DBA95] font-medium">✓ iPhone & Android 100%</span>
                        </div>
                        <div className="flex items-center justify-between py-1 border-b border-[#20201D]">
                          <span className="text-[#A3A096]">Testado em Navegadores:</span>
                          <span className="text-[#3DBA95] font-medium">✓ Chrome, Safari, Edge</span>
                        </div>
                        <div className="flex items-center justify-between py-1">
                          <span className="text-[#A3A096]">Verificação de Formulários:</span>
                          <span className="text-[#3DBA95] font-medium">✓ Envio & Notificações OK</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {current.id === 7 && (
                  /* Step 7: Launch & Ongoing Optimization (Reference Image 1) */
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-[#181816] border border-[#242320]">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#3DBA95] animate-pulse" />
                          <span className="text-xs font-semibold text-[#F5F4EE]">Site Publicado com Sucesso</span>
                        </div>
                        <span className="text-[10px] font-mono text-[#3DBA95] bg-[#18382E] px-2 py-0.5 rounded">No Ar</span>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="flex items-center justify-between py-1 border-b border-[#20201D]">
                          <span className="text-[#A3A096]">Treinamento da Equipe:</span>
                          <span className="text-[#F5F4EE] font-medium">Realizado com Sucesso</span>
                        </div>
                        <div className="flex items-center justify-between py-1 border-b border-[#20201D]">
                          <span className="text-[#A3A096]">Monitoramento de Visitas:</span>
                          <span className="text-[#3DBA95] font-medium">Painel Ativo em Tempo Real</span>
                        </div>
                        <div className="flex items-center justify-between py-1">
                          <span className="text-[#A3A096]">Canal de Suporte Direto:</span>
                          <span className="text-[#3DBA95] font-medium">WhatsApp Dedicado Aberto</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-[#141413] border border-[#242320] text-center">
                      <span className="text-xs text-[#A3A096]">
                        Garantia de estabilidade e acompanhamento contínuo no pós-lançamento.
                      </span>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
