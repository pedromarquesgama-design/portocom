"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "motion/react";
import {
  Layout,
  Sparkles,
  TrendingUp,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Layers,
  Globe2,
  Check,
  Compass,
  Code2,
  Clock,
  Activity,
  Lock,
  Smartphone,
  Laptop,
} from "lucide-react";

interface ServiceData {
  id: string;
  tabLabel: string;
  icon: React.ElementType;
  badge: string;
  title: string;
  description: string;
  extraInfo: string;
  accentColor: string;
}

const SERVICES: ServiceData[] = [
  {
    id: "web-design",
    tabLabel: "Sites & Páginas de Venda",
    icon: Layout,
    badge: "Alta Conversão & Custom Design",
    title: "Criação de Sites Comerciais & Páginas de Venda",
    description:
      "Desenhamos sites sob medida baseados no comportamento e nos critérios de decisão do seu cliente ideal. Sua empresa recebe uma presença visual única que transmite prestígio instantâneo e conduz os visitantes diretamente para a tomada de ação.",
    extraInfo:
      "Mapeamos o seu mercado, analisamos os principais concorrentes e identificamos os argumentos mais convincentes do seu negócio. Definimos os objetivos comerciais claros que o novo site precisa cumprir para gerar contatos qualificados.",
    accentColor: "#2FA882",
  },
  {
    id: "branding",
    tabLabel: "Branding & Identidade",
    icon: Sparkles,
    badge: "Autoridade de Marca & Posicionamento",
    title: "Branding, Posicionamento & Identidade Visual",
    description:
      "Criamos identidades visuais completas do zero ou conduzimos rebrandings estratégicos para empresas consolidadas que precisam alinhar sua imagem ao seu valor real de mercado.",
    extraInfo:
      "Definimos logotipo, sistemas visuais, diretrizes tipográficas, paleta de cores e tom de voz, garantindo que sua nova marca inspire consistência e autoridade em todos os canais.",
    accentColor: "#3DBA95",
  },
  {
    id: "redesign",
    tabLabel: "Redesign Estratégico",
    icon: RefreshCw,
    badge: "Otimização de Performance & UX",
    title: "Redesign Estratégico & Otimização de Performance",
    description:
      "Se o seu site atual está lento, desatualizado ou não gera oportunidades comerciais, uma reformulação profunda transforma sua presença sem comprometer seu histórico conquistado.",
    extraInfo:
      "Auditamos sua plataforma existente, blindamos sua autoridade de SEO sem perda de posições e reconstruímos seu ecossistema para ser até 4x mais rápido, moderno e rentável.",
    accentColor: "#3DBA95",
  },
  {
    id: "dev-integracoes",
    tabLabel: "Desenvolvimento & QA",
    icon: Code2,
    badge: "Engenharia de Alta Velicidade & Validação Rigorosa",
    title: "Desenvolvimento de Alta Performance & Integrações",
    description:
      "Construímos o site com código limpo e carregamento instantâneo em menos de 1 segundo. Conectamos seu WhatsApp, formulários de contato seguros, e-mails corporativos e ferramentas analíticas sem você se preocupar com aspectos técnicos.",
    extraInfo:
      "Antes de ir ao ar, testamos o site em dezenas de aparelhos e navegadores reais (iPhone, Android, Mac e Windows). Validamos velocidade, segurança, links e envio de formulários. Só lançamos quando tudo estiver 100% aprovado.",
    accentColor: "#2FA882",
  },
];

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
    shortTitle: "Desenvolvimento",
    fullTitle: "Desenvolvimento de Alta Performance & Integrações",
    phaseBadge: "Fase 02 • Engenharia",
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
    id: 3,
    shortTitle: "Garantia & QA",
    fullTitle: "Testes Rigorosos & Garantia de Qualidade",
    phaseBadge: "Fase 03 • Validação",
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
    id: 4,
    shortTitle: "Lançamento",
    fullTitle: "Lançamento Seguro & Acompanhamento Contínuo",
    phaseBadge: "Fase 04 • No Ar",
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

export function Servicos() {
  const [activeTab, setActiveTab] = useState<"servicos" | "processo">("servicos");
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);
  const [activeStepIdx, setActiveStepIdx] = useState(0);

  const currentService = SERVICES[activeServiceIdx] || SERVICES[0];
  const currentStep = PROCESS_STEPS[activeStepIdx];

  const prevService = () => {
    setActiveServiceIdx((curr) => (curr === 0 ? SERVICES.length - 1 : curr - 1));
  };

  const nextService = () => {
    setActiveServiceIdx((curr) => (curr === SERVICES.length - 1 ? 0 : curr + 1));
  };

  const prevStep = () => {
    setActiveStepIdx((curr) => (curr === 0 ? PROCESS_STEPS.length - 1 : curr - 1));
  };

  const nextStep = () => {
    setActiveStepIdx((curr) => (curr === PROCESS_STEPS.length - 1 ? 0 : curr + 1));
  };

  return (
    <section
      id="servicos"
      className="relative py-24 md:py-32 overflow-hidden bg-[#121211]/75 backdrop-blur-md border-b border-[#242320]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#1A5446]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl xl:max-w-[1520px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* 1. Header: 2 Columns with Category Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12 md:mb-16 pb-8 border-b border-[#242320]"
        >
          <div className="lg:col-span-7">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#2FA882] mb-3 block">
              SOLUÇÕES DIGITAIS DE ALTA RENTABILIDADE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F4EE] whitespace-nowrap">
              IDENTIDADE DIGITAL ATRAI LUCRO REAL
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start lg:items-end gap-4">
            <p className="text-base sm:text-lg text-[#A3A096] leading-relaxed">
              Desenhamos sites sob medida, marcas de autoridade e engenharia focada no retorno do seu investimento.
            </p>

            {/* Seamless Segmented Mode Switcher */}
            <div className="inline-flex p-1.5 rounded-xl bg-[#181816] border border-[#2E2D28] shadow-inner gap-1">
              <button
                type="button"
                onClick={() => setActiveTab("servicos")}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === "servicos"
                    ? "bg-[#242320] text-[#F5F4EE] shadow-md border border-[#3E3D35]"
                    : "text-[#A3A096] hover:text-[#F5F4EE] border border-transparent"
                }`}
              >
                Soluções & Serviços
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("processo")}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === "processo"
                    ? "bg-[#18382E] text-[#3DBA95] shadow-md border border-[#2FA882]/40"
                    : "text-[#A3A096] hover:text-[#F5F4EE] border border-transparent"
                }`}
              >
                Etapas do Processo
              </button>
            </div>
          </div>
        </motion.div>

        {/* ============================================================== */}
        {/* VIEW 1: SOLUÇÕES & SERVIÇOS                                    */}
        {/* ============================================================== */}
        {activeTab === "servicos" && (
          <div>
            {/* 2. Interactive Navigation Bar with Connecting Line */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative mb-14 md:mb-16"
            >
              <div className="hidden md:block absolute top-[62px] left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#2E2D28] to-transparent z-0" />

              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 relative z-10">
                {SERVICES.map((service, idx) => {
                  const isActive = idx === activeServiceIdx;
                  const IconComponent = service.icon;

                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => setActiveServiceIdx(idx)}
                      className={`group relative flex flex-col items-center text-center p-3 sm:p-4 rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FA882] cursor-pointer ${
                        isActive
                          ? "bg-[#181816] shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-[#2FA882]/40"
                          : "bg-[#151514]/60 hover:bg-[#181816]/90 border border-transparent hover:border-[#2A2925]"
                      }`}
                      aria-selected={isActive}
                      role="tab"
                    >
                      <span
                        className={`text-xs sm:text-[13px] font-semibold leading-snug mb-3 min-h-[34px] flex items-center justify-center transition-colors ${
                          isActive
                            ? "text-[#F5F4EE] font-bold"
                            : "text-[#8E8C82] group-hover:text-[#D5D3C9]"
                        }`}
                      >
                        {service.tabLabel}
                      </span>

                      <div className="relative flex items-center justify-center">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 shadow-md ${
                            isActive
                              ? "bg-gradient-to-br from-[#2FA882] to-[#1A5446] text-[#F5F4EE] ring-4 ring-[#2FA882]/20 scale-110 shadow-[0_0_20px_rgba(47,168,130,0.4)]"
                              : "bg-[#1C1B19] text-[#7A7972] border border-[#2E2D28] group-hover:text-[#F5F4EE] group-hover:border-[#3D3C36]"
                          }`}
                        >
                          <IconComponent className="w-5 h-5" />
                        </div>

                        {isActive && (
                          <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-0 h-0 border-x-[6px] border-x-transparent border-t-[7px] border-t-[#2FA882]" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* 3. Main Content Display Area with Carousel Arrow Controls */}
            <div className="relative">
              <button
                type="button"
                onClick={prevService}
                className="hidden xl:flex absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#1A1A18]/90 hover:bg-[#242320] text-[#A3A096] hover:text-[#F5F4EE] border border-[#2E2D28] hover:border-[#3D3C36] shadow-xl items-center justify-center transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FA882] cursor-pointer"
                aria-label="Serviço anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={nextService}
                className="hidden xl:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#1A1A18]/90 hover:bg-[#242320] text-[#A3A096] hover:text-[#F5F4EE] border border-[#2E2D28] hover:border-[#3D3C36] shadow-xl items-center justify-center transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FA882] cursor-pointer"
                aria-label="Próximo serviço"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="rounded-2xl bg-[#161614] border border-[#2A2925] p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentService.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
                  >
                  
                  {/* Left Column: Comprehensive Service Description */}
                  <div className="lg:col-span-6 flex flex-col justify-between">
                    <div>
                      <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-[#1C1B19] border border-[#2A2925] text-xs font-semibold text-[#2FA882]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2FA882]" />
                        {currentService.badge}
                      </div>

                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#F5F4EE] mb-5 leading-tight">
                        {currentService.title}
                      </h3>

                      <p className="text-base sm:text-lg text-[#C8C6BE] leading-relaxed mb-4 font-normal">
                        {currentService.description}
                      </p>

                      <p className="text-sm sm:text-base text-[#8E8C82] leading-relaxed">
                        {currentService.extraInfo}
                      </p>
                    </div>

                    {/* Mobile Controls */}
                    <div className="flex xl:hidden items-center gap-2 mt-6 pt-6 border-t border-[#242320]/60 justify-end">
                      <button
                        type="button"
                        onClick={prevService}
                        className="p-2 rounded-lg bg-[#1C1B19] text-[#A3A096] hover:text-[#F5F4EE] border border-[#2E2D28] transition-colors"
                        aria-label="Anterior"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <span className="text-xs text-[#7A7972] px-1 font-mono">
                        {activeServiceIdx + 1} / {SERVICES.length}
                      </span>
                      <button
                        type="button"
                        onClick={nextService}
                        className="p-2 rounded-lg bg-[#1C1B19] text-[#A3A096] hover:text-[#F5F4EE] border border-[#2E2D28] transition-colors"
                        aria-label="Próximo"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Interactive Visual Concept Mockups */}
                  <div className="lg:col-span-6 relative flex items-center justify-center">
                    <div className="w-full max-w-lg lg:max-w-none relative">
                      
                      {/* 1. Web Design & Vendas Visual Concept */}
                      {currentService.id === "web-design" && (
                        <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#1C1C1A] to-[#141413] border border-white/10 shadow-2xl overflow-hidden">
                          <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#2FA882]/20 rounded-full blur-3xl pointer-events-none" />
                          
                          <div className="rounded-xl bg-[#121211] border border-[#2A2925] p-3 shadow-2xl">
                            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#22211E]">
                              <div className="flex items-center gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/60" />
                                <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/60" />
                                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/60" />
                              </div>
                              <div className="px-3 py-0.5 rounded-full bg-[#1C1B19] border border-[#2C2B27] text-[10px] text-[#A3A096] font-mono">
                                portocom.agency/alta-conversao
                              </div>
                              <div className="w-8" />
                            </div>

                            <div className="space-y-3">
                              <div className="p-4 rounded-lg bg-gradient-to-r from-[#181816] via-[#1E1E1C] to-[#181816] border border-white/5 flex items-center justify-between">
                                <div>
                                  <span className="text-[9px] uppercase tracking-wider font-bold text-[#2FA882]">
                                    Arquitetura de Vendas
                                  </span>
                                  <div className="text-sm font-bold text-[#F5F4EE] mt-0.5">
                                    Design Que Transmite Prestígio Instantâneo
                                  </div>
                                </div>
                                <div className="px-2.5 py-1 rounded bg-[#2FA882] text-[#121211] text-[10px] font-bold shadow-md">
                                  Converter Agora
                                </div>
                              </div>

                              <div className="grid grid-cols-3 gap-2">
                                <div className="p-2.5 rounded-lg bg-[#181816] border border-[#262522]">
                                  <div className="w-full h-10 rounded bg-[#22211E] mb-2 flex items-center justify-center text-[10px] text-[#2FA882] font-bold font-mono">
                                    +45% Conv.
                                  </div>
                                  <div className="h-2 w-12 rounded bg-[#32312D] mb-1" />
                                  <div className="h-2 w-8 rounded bg-[#2FA882]/40" />
                                </div>
                                <div className="p-2.5 rounded-lg bg-[#181816] border border-[#262522]">
                                  <div className="w-full h-10 rounded bg-[#22211E] mb-2 flex items-center justify-center text-[10px] text-[#7A7972]">
                                    UX Pesquisado
                                  </div>
                                  <div className="h-2 w-12 rounded bg-[#32312D] mb-1" />
                                  <div className="h-2 w-8 rounded bg-[#2FA882]/40" />
                                </div>
                                <div className="p-2.5 rounded-lg bg-[#181816] border border-[#262522]">
                                  <div className="w-full h-10 rounded bg-[#22211E] mb-2 flex items-center justify-center text-[10px] text-[#7A7972]">
                                    Lead Direct
                                  </div>
                                  <div className="h-2 w-12 rounded bg-[#32312D] mb-1" />
                                  <div className="h-2 w-8 rounded bg-[#2FA882]/40" />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="absolute -bottom-2 -right-2 sm:-right-4 w-48 rounded-2xl bg-[#141413] border border-[#3D3C36] p-3 shadow-[0_15px_40px_rgba(0,0,0,0.8)] backdrop-blur-md">
                            <div className="flex items-center gap-2 mb-1.5">
                              <CheckCircle2 className="w-4 h-4 text-[#2FA882]" />
                              <span className="text-[11px] font-bold text-[#F5F4EE]">ICP Alinhado</span>
                            </div>
                            <div className="text-[10px] text-[#A3A096] leading-tight">
                              Decisão rápida do visitante no primeiro acesso.
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 2. Branding Visual Concept */}
                      {currentService.id === "branding" && (
                        <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#1C1C1A] to-[#141413] border border-white/10 shadow-2xl overflow-hidden">
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#3DBA95]/15 rounded-full blur-3xl pointer-events-none" />

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-5 rounded-xl bg-[#0F0F0E] border border-[#2E2D28] shadow-2xl flex flex-col justify-between h-52">
                              <div className="w-9 h-9 rounded-md bg-[#1C1B19] border border-[#3D3C36] flex items-center justify-center text-xs font-bold text-[#F5F4EE]">
                                P
                              </div>
                              <div>
                                <span className="text-[9px] uppercase tracking-widest text-[#2FA882] font-bold block mb-1">
                                  IDENTIDADE & BRANDING
                                </span>
                                <div className="text-base font-bold text-[#F5F4EE] leading-tight">
                                  Brand Guidelines & System
                                </div>
                                <span className="text-[10px] text-[#7A7972] mt-1 block">
                                  Consistência, Tom de Voz & Valor
                                </span>
                              </div>
                            </div>

                            <div className="space-y-3">
                              <div className="p-4 rounded-xl bg-[#141413] border border-[#2A2925]">
                                <div className="text-2xl font-serif text-[#F5F4EE] mb-1">
                                  Aa
                                </div>
                                <div className="text-[10px] text-[#A3A096]">
                                  Tipografia Premium & Autoral
                                </div>
                              </div>

                              <div className="p-3.5 rounded-xl bg-[#141413] border border-[#2A2925]">
                                <div className="text-[10px] font-bold text-[#A3A096] mb-2 uppercase tracking-wider">
                                  Paleta de Cores
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="w-6 h-6 rounded-full bg-[#121211] border border-[#3A3934]" title="Obsidian" />
                                  <div className="w-6 h-6 rounded-full bg-[#1A5446]" title="Forest" />
                                  <div className="w-6 h-6 rounded-full bg-[#2FA882]" title="Emerald" />
                                  <div className="w-6 h-6 rounded-full bg-[#F5F4EE]" title="Ivory" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 3. Redesign Visual Concept */}
                      {currentService.id === "redesign" && (
                        <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#1C1C1A] to-[#141413] border border-white/10 shadow-2xl overflow-hidden">
                          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#3DBA95]/15 rounded-full blur-3xl pointer-events-none" />

                          <div className="space-y-4 relative">
                            {/* Visual Before / After Comparison */}
                            <div className="p-4 rounded-xl bg-[#0F0F0E] border border-[#2A2925] shadow-lg">
                              <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-[#22211E]">
                                <span className="text-[10px] font-mono uppercase tracking-wider text-[#7A7972]">
                                  Estrutura Anterior
                                </span>
                                <span className="text-[10px] font-mono text-[#EF4444]/75">
                                  Lento & Baixa Conversão
                                </span>
                              </div>
                              <div className="space-y-2 opacity-35">
                                <div className="h-3 bg-[#2A2925] rounded w-1/2" />
                                <div className="h-2 bg-[#22211E] rounded w-full" />
                                <div className="h-2 bg-[#22211E] rounded w-4/5" />
                              </div>
                            </div>

                            <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-br from-[#181816] to-[#141413] border border-[#2FA882]/40 shadow-xl ring-1 ring-[#2FA882]/20">
                              <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#242320]">
                                <span className="text-[10px] font-mono uppercase tracking-wider text-[#2FA882] font-bold">
                                  Redesign Reformulado PORTOCOM
                                </span>
                                <span className="text-[10px] font-mono text-[#3DBA95] font-bold">
                                  até 4x Mais Rápido
                                </span>
                              </div>
                              <div className="space-y-2.5">
                                <div className="h-3.5 bg-gradient-to-r from-[#2FA882] to-[#1A5446] rounded w-3/4 shadow-sm" />
                                <div className="h-2 bg-[#3A3933] rounded w-full" />
                                <div className="h-2 bg-[#3A3933] rounded w-5/6" />
                                <div className="flex items-center gap-2 pt-2">
                                  <div className="px-3 py-1 rounded bg-[#2FA882] text-[9px] font-bold text-[#121211]">
                                    SEO Blindado
                                  </div>
                                  <div className="px-2.5 py-1 rounded bg-[#1C1B19] border border-[#33322E] text-[9px] text-[#A3A096]">
                                    60 FPS Fluidez
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 4. Desenvolvimento & QA Visual Concept */}
                      {currentService.id === "dev-integracoes" && (
                        <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#1C1C1A] to-[#141413] border border-white/10 shadow-2xl overflow-hidden">
                          <div className="absolute top-0 right-0 w-48 h-48 bg-[#2FA882]/15 rounded-full blur-3xl pointer-events-none" />

                          <div className="space-y-4 relative">
                            <div className="p-4 sm:p-5 rounded-xl bg-[#0F0F0E] border border-[#2E2D28] shadow-xl">
                              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#242320]">
                                <div className="flex items-center gap-2">
                                  <span className="w-2.5 h-2.5 rounded-full bg-[#3DBA95] animate-pulse" />
                                  <span className="text-xs font-bold text-[#F5F4EE]">Engenharia & QA Rigoroso</span>
                                </div>
                                <span className="text-[10px] font-mono text-[#3DBA95] bg-[#18382E] px-2.5 py-1 rounded-full border border-[#2FA882]/30">
                                  &lt; 1s LCP Instantâneo
                                </span>
                              </div>

                              {/* Required Mobile and Browser Verification Badges */}
                              <div className="space-y-2.5 pt-1">
                                <div className="p-3 rounded-lg bg-[#151514] border border-[#242320]">
                                  <div className="text-[10px] font-bold text-[#A3A096] uppercase tracking-wider mb-1.5 flex items-center justify-between">
                                    <span className="flex items-center gap-1.5"><Smartphone className="w-3.5 h-3.5 text-[#3DBA95]" /> Testado em Dispositivos Móveis</span>
                                    <span className="text-[#3DBA95] font-mono">100% OK</span>
                                  </div>
                                  <div className="flex items-center gap-2 text-xs font-semibold text-[#3DBA95] bg-[#18382E]/50 px-3 py-1.5 rounded-md border border-[#2FA882]/30">
                                    <CheckCircle2 className="w-4 h-4 shrink-0 text-[#3DBA95]" />
                                    <span>✓ iPhone & Android 100%</span>
                                  </div>
                                </div>

                                <div className="p-3 rounded-lg bg-[#151514] border border-[#242320]">
                                  <div className="text-[10px] font-bold text-[#A3A096] uppercase tracking-wider mb-1.5 flex items-center justify-between">
                                    <span className="flex items-center gap-1.5"><Laptop className="w-3.5 h-3.5 text-[#3DBA95]" /> Testado em Navegadores</span>
                                    <span className="text-[#3DBA95] font-mono">Compatível</span>
                                  </div>
                                  <div className="flex items-center gap-2 text-xs font-semibold text-[#3DBA95] bg-[#18382E]/50 px-3 py-1.5 rounded-md border border-[#2FA882]/30">
                                    <ShieldCheck className="w-4 h-4 shrink-0 text-[#3DBA95]" />
                                    <span>✓ Chrome, Safari, Edge</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                              <div className="p-2.5 rounded-lg bg-[#181816] border border-[#262522] flex items-center gap-2 text-xs text-[#E2DDD2]">
                                <Zap className="w-3.5 h-3.5 text-[#3DBA95] shrink-0" />
                                <span>WhatsApp Direto</span>
                              </div>
                              <div className="p-2.5 rounded-lg bg-[#181816] border border-[#262522] flex items-center gap-2 text-xs text-[#E2DDD2]">
                                <Lock className="w-3.5 h-3.5 text-[#3DBA95] shrink-0" />
                                <span>Formulários SSL</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                    </div>
                  </div>

                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 2: ETAPAS DO PROCESSO (METODOLOGIA)                       */}
        {/* ============================================================== */}
        {activeTab === "processo" && (
          <div>
            {/* 2. Interactive Timeline Rail */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative mb-14 md:mb-16"
            >
              <div className="hidden md:block absolute top-[62px] left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#2E2D28] to-transparent z-0" />

              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 relative z-10">
                {PROCESS_STEPS.map((step, idx) => {
                  const isActive = idx === activeStepIdx;
                  const IconComponent = step.icon;

                  return (
                    <button
                      key={step.id}
                      type="button"
                      onClick={() => setActiveStepIdx(idx)}
                      className={`group relative flex flex-col items-center text-center p-3 sm:p-4 rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FA882] cursor-pointer ${
                        isActive
                          ? "bg-[#181816] shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-[#2FA882]/40"
                          : "bg-[#151514]/60 hover:bg-[#181816]/90 border border-transparent hover:border-[#2A2925]"
                      }`}
                      aria-selected={isActive}
                      role="tab"
                    >
                      <div className="mb-2 flex items-center gap-1.5">
                        <span className="text-[10px] font-mono text-[#3DBA95]">0{step.id}</span>
                        <span
                          className={`text-xs sm:text-[13px] font-semibold transition-colors ${
                            isActive
                              ? "text-[#F5F4EE] font-bold"
                              : "text-[#8E8C82] group-hover:text-[#D5D3C9]"
                          }`}
                        >
                          {step.shortTitle}
                        </span>
                      </div>

                      <div className="relative flex items-center justify-center">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 shadow-md ${
                            isActive
                              ? "bg-gradient-to-br from-[#2FA882] to-[#1A5446] text-[#F5F4EE] ring-4 ring-[#2FA882]/20 scale-110 shadow-[0_0_20px_rgba(47,168,130,0.4)]"
                              : "bg-[#1C1B19] text-[#7A7972] border border-[#2E2D28] group-hover:text-[#F5F4EE] group-hover:border-[#3D3C36]"
                          }`}
                        >
                          <IconComponent className="w-5 h-5" />
                        </div>

                        {isActive && (
                          <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-0 h-0 border-x-[6px] border-x-transparent border-t-[7px] border-t-[#2FA882]" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* 3. Main Step Display Area with Carousel Arrow Controls */}
            <div className="relative">
              <button
                type="button"
                onClick={prevStep}
                className="hidden xl:flex absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#1A1A18]/90 hover:bg-[#242320] text-[#A3A096] hover:text-[#F5F4EE] border border-[#2E2D28] hover:border-[#3D3C36] shadow-xl items-center justify-center transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FA882] cursor-pointer"
                aria-label="Etapa anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={nextStep}
                className="hidden xl:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#1A1A18]/90 hover:bg-[#242320] text-[#A3A096] hover:text-[#F5F4EE] border border-[#2E2D28] hover:border-[#3D3C36] shadow-xl items-center justify-center transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FA882] cursor-pointer"
                aria-label="Próxima etapa"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="rounded-2xl bg-[#161614] border border-[#2A2925] p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
                  >
                  
                  {/* Left Column: Step Details */}
                  <div className="lg:col-span-6 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C1B19] border border-[#2A2925] text-xs font-semibold text-[#2FA882]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2FA882]" />
                          {currentStep.phaseBadge}
                        </div>
                        <div className="inline-flex items-center gap-1.5 text-xs text-[#A3A096] font-mono">
                          <Clock className="w-3.5 h-3.5 text-[#2FA882]" />
                          <span>{currentStep.duration}</span>
                        </div>
                      </div>

                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#F5F4EE] mb-5 leading-tight">
                        {currentStep.fullTitle}
                      </h3>

                      <p className="text-base sm:text-lg text-[#C8C6BE] leading-relaxed mb-6 font-normal">
                        {currentStep.description}
                      </p>

                      {/* Deliverables Checklist */}
                      <div className="space-y-2.5 mb-10 pb-8 border-b border-[#242320]">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#A3A096] block mb-3">
                          Entregáveis Desta Fase:
                        </span>
                        {currentStep.deliverables.map((item) => (
                          <div key={item} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-[#2FA882] shrink-0 mt-0.5" />
                            <span className="text-sm text-[#E2DDD2]">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Action Row */}
                    <div className="flex flex-wrap items-center gap-4">
                      <a
                        href="#contato"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider text-[#2FA882] hover:text-[#3DBA95] uppercase group transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FA882] rounded"
                      >
                        <span>INICIAR PROJETO COM ESTE PROCESSO</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
                      </a>

                      {/* Mobile Controls */}
                      <div className="flex xl:hidden items-center gap-2 ml-auto">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="p-2 rounded-lg bg-[#1C1B19] text-[#A3A096] hover:text-[#F5F4EE] border border-[#2E2D28] transition-colors"
                          aria-label="Anterior"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <span className="text-xs text-[#7A7972] px-1 font-mono">
                          {activeStepIdx + 1} / {PROCESS_STEPS.length}
                        </span>
                        <button
                          type="button"
                          onClick={nextStep}
                          className="p-2 rounded-lg bg-[#1C1B19] text-[#A3A096] hover:text-[#F5F4EE] border border-[#2E2D28] transition-colors"
                          aria-label="Próximo"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Step Mockups */}
                  <div className="lg:col-span-6 relative flex items-center justify-center">
                    <div className="w-full max-w-lg lg:max-w-none relative">
                      
                      {/* Step 1: Strategy Mockup */}
                      {currentStep.id === 1 && (
                        <div className="space-y-4">
                          <div className="p-4 sm:p-5 rounded-xl bg-[#141413] border border-[#262521] shadow-2xl">
                            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#20201D]">
                              <span className="text-xs font-semibold text-[#F5F4EE]">Diagnóstico Comercial & ICP</span>
                              <span className="text-[10px] font-mono text-[#3DBA95] bg-[#18382E] px-2 py-0.5 rounded">Validação</span>
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

                      {/* Step 2: Development Mockup */}
                      {currentStep.id === 2 && (
                        <div className="space-y-3.5">
                          <div className="p-4 sm:p-5 rounded-xl bg-[#141413] border border-[#262521] shadow-2xl">
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-xs font-semibold text-[#F5F4EE]">Integrações Ativas</span>
                              <span className="text-[10px] font-mono text-[#3DBA95] bg-[#18382E] px-2 py-0.5 rounded">Conectado</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div className="p-2.5 rounded bg-[#181816] border border-[#22211E] flex items-center gap-2 text-[#E2DDD2]">
                                <Zap className="w-3.5 h-3.5 text-[#3DBA95]" />
                                <span>WhatsApp Direto</span>
                              </div>
                              <div className="p-2.5 rounded bg-[#181816] border border-[#22211E] flex items-center gap-2 text-[#E2DDD2]">
                                <Lock className="w-3.5 h-3.5 text-[#3DBA95]" />
                                <span>Envio Seguro SSL</span>
                              </div>
                              <div className="p-2.5 rounded bg-[#181816] border border-[#22211E] flex items-center gap-2 text-[#E2DDD2]">
                                <Activity className="w-3.5 h-3.5 text-[#3DBA95]" />
                                <span>Google Analytics</span>
                              </div>
                              <div className="p-2.5 rounded bg-[#181816] border border-[#22211E] flex items-center gap-2 text-[#E2DDD2]">
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

                      {/* Step 3: Testing Mockup */}
                      {currentStep.id === 3 && (
                        <div className="space-y-4">
                          <div className="p-4 sm:p-5 rounded-xl bg-[#141413] border border-[#262521] shadow-2xl">
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

                      {/* Step 4: Launch Mockup */}
                      {currentStep.id === 4 && (
                        <div className="space-y-4">
                          <div className="p-4 sm:p-5 rounded-xl bg-[#141413] border border-[#262521] shadow-2xl">
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

                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
