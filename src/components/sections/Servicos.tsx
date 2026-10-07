"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Layout,
  Code2,
  ShoppingBag,
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
} from "lucide-react";

interface ServiceData {
  id: string;
  tabLabel: string;
  icon: React.ElementType;
  badge: string;
  title: string;
  description: string;
  extraInfo: string;
  deliverables: string[];
  ctaLabel: string;
  accentColor: string;
}

const SERVICES: ServiceData[] = [
  {
    id: "web-design",
    tabLabel: "Design Web Sob Medida",
    icon: Layout,
    badge: "Custom Web Design",
    title: "Design de Sites Exclusivos & Alta Conversão",
    description:
      "Desenhamos sites sob medida baseados no comportamento e nos critérios de decisão do seu cliente ideal. Cada layout, tipografia e interação nasce de pesquisas sólidas de UX e arquitetura comercial.",
    extraInfo:
      "Sem templates pré-fabricados. Sua empresa recebe uma presença visual única que transmite prestígio instantâneo e conduz os visitantes diretamente para a tomada de ação.",
    deliverables: [
      "Pesquisa de Comportamento & Jornada do Usuário",
      "Wireframes & Protótipos Interativos no Figma",
      "Design Responsivo Mobile-First de Alta Fidelidade",
      "Arquitetura Estruturada para Conversão e Vendas",
    ],
    ctaLabel: "EXPLORAR SERVIÇOS DE WEB DESIGN",
    accentColor: "#2FA882",
  },
  {
    id: "web-dev",
    tabLabel: "Desenvolvimento & Integrações",
    icon: Code2,
    badge: "Web Development & Platform Integration",
    title: "Engenharia Web & Integração de Plataformas",
    description:
      "Desenvolvemos aplicações modernas em Next.js 15, TypeScript e infraestrutura de alta velocidade. Código limpo, robusto e escalável que funciona com perfeição em qualquer tela ou dispositivo.",
    extraInfo:
      "Integramos seu site com CRMs (HubSpot, Salesforce), automações, plataformas de pagamento e APIs proprietárias, transformando seu portal em uma central operacional eficiente.",
    deliverables: [
      "Next.js 15, React Server Components & TypeScript",
      "Carregamento Instantâneo & Otimização Serverless",
      "Integrações com CRMs, Pagamentos & Webhooks",
      "Painel Administrativo Customizado & Seguro",
    ],
    ctaLabel: "EXPLORAR SERVIÇOS DE DESENVOLVIMENTO",
    accentColor: "#3DBA95",
  },
  {
    id: "ecommerce",
    tabLabel: "E-commerce & Lojas Virtuais",
    icon: ShoppingBag,
    badge: "eCommerce Design & Development",
    title: "Design & Desenvolvimento de E-commerce de Alto Padrão",
    description:
      "Construímos lojas virtuais de alta conversão projetadas para encantar compradores exigentes e maximizar o ticket médio da sua operação com carregamento ultrarrápido.",
    extraInfo:
      "Eliminamos todo o atrito no funil: do catálogo dinâmico ao checkout em um clique com cálculo inteligente de frete, antifraude e múltiplos meios de pagamento automatizados.",
    deliverables: [
      "Checkout Transparente Otimizado em 1 Clique",
      "Catálogo Dinâmico & Filtros Ágeis sem Travamentos",
      "Integração com ERPs, Pix, Cartões & Logística",
      "Mecanismos de Upsell & Recuperação de Carrinho",
    ],
    ctaLabel: "EXPLORAR SERVIÇOS DE E-COMMERCE",
    accentColor: "#2FA882",
  },
  {
    id: "branding",
    tabLabel: "Branding & Identidade",
    icon: Sparkles,
    badge: "Branding & Brand Identity",
    title: "Branding, Posicionamento & Identidade Visual",
    description:
      "Criamos identidades visuais completas do zero ou conduzimos rebrandings estratégicos para empresas consolidadas que precisam alinhar sua imagem ao seu valor real de mercado.",
    extraInfo:
      "Definimos logotipo, sistemas visuais, diretrizes tipográficas, paleta de cores e tom de voz, garantindo que sua nova marca inspire consistência e autoridade em todos os canais.",
    deliverables: [
      "Logotipo, Símbolo & Sistema de Assinaturas",
      "Brandbook Completo & Diretrizes de Aplicação",
      "Tipografia Exclusiva & Paleta Cromática Editorial",
      "Aplicações Digitais, Materiais e Redes Sociais",
    ],
    ctaLabel: "EXPLORAR SERVIÇOS DE BRANDING",
    accentColor: "#3DBA95",
  },
  {
    id: "seo-marketing",
    tabLabel: "SEO & Marketing Digital",
    icon: TrendingUp,
    badge: "SEO & Digital Marketing",
    title: "SEO Técnico & Estratégias de Crescimento Digital",
    description:
      "Boas práticas de SEO são arquitetadas desde a primeira linha de código da sua página. Nossa equipe garante que seu site seja encontrado e priorizado pelo algoritmo do Google.",
    extraInfo:
      "Combinamos SEO on-page avançado, dados estruturados (Schema.org) e campanhas orientadas a dados para atrair visitantes qualificados prontos para contratar seu serviço.",
    deliverables: [
      "SEO Técnico On-Page & Schema Markup Completo",
      "Core Web Vitals Impecáveis (Notas 95+ no Google)",
      "Mapeamento de Palavras-Chave de Alta Intenção Comercial",
      "Páginas de Aterrissagem (Landing Pages) de Alta Conversão",
    ],
    ctaLabel: "EXPLORAR SERVIÇOS DE MARKETING & SEO",
    accentColor: "#2FA882",
  },
  {
    id: "redesign",
    tabLabel: "Redesign & Otimização",
    icon: RefreshCw,
    badge: "Website Redesign & Optimization",
    title: "Redesign Estratégico & Otimização de Performance",
    description:
      "Se o seu site atual está lento, desatualizado ou não gera oportunidades comerciais, uma reformulação profunda transforma sua presença sem comprometer seu histórico conquistado.",
    extraInfo:
      "Auditamos sua plataforma existente, blindamos sua autoridade de SEO sem perda de posições e reconstruímos seu ecossistema para ser até 4x mais rápido, moderno e envolvente.",
    deliverables: [
      "Auditoria Completa de UX, Velocidade & Gargalos",
      "Migração Segura com Preservação de Rankings SEO",
      "Redução Drástica no Tempo de Carregamento (< 1s)",
      "Modernização Estética & Alinhamento às Melhores Práticas",
    ],
    ctaLabel: "EXPLORAR SERVIÇOS DE REDESIGN",
    accentColor: "#3DBA95",
  },
];

export function Servicos() {
  const [activeIdx, setActiveIdx] = useState(0);

  const prevService = () => {
    setActiveIdx((curr) => (curr === 0 ? SERVICES.length - 1 : curr - 1));
  };

  const nextService = () => {
    setActiveIdx((curr) => (curr === SERVICES.length - 1 ? 0 : curr + 1));
  };

  const current = SERVICES[activeIdx];

  return (
    <section
      id="servicos"
      className="relative py-24 md:py-32 overflow-hidden bg-[#121211] border-b border-[#242320]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#1A5446]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl xl:max-w-[1520px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* 1. Header: 2 Columns (Title on left, Description on right) matching Digital Silk reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12 md:mb-16 pb-8 border-b border-[#242320]">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#2FA882] mb-3 block">
              POR QUE A PORTO COMUNICAÇÃO?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F4EE]">
              Explore Nossos Serviços
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base sm:text-lg text-[#A3A096] leading-relaxed">
              Cuidamos de cada etapa do ecossistema digital da sua empresa:
              design de alta conversão, engenharia web, branding e estratégias de
              crescimento. Começamos entendendo a fundo o seu modelo de negócio.
            </p>
          </div>
        </div>

        {/* 2. Interactive Navigation Bar with Connecting Line & Teardrop Pin Indicators */}
        <div className="relative mb-14 md:mb-16">
          {/* Continuous connecting horizontal line */}
          <div className="hidden md:block absolute top-[62px] left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#2E2D28] to-transparent z-0" />

          {/* Navigation Item Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 relative z-10">
            {SERVICES.map((service, idx) => {
              const isActive = idx === activeIdx;
              const IconComponent = service.icon;

              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`group relative flex flex-col items-center text-center p-3 sm:p-4 rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FA882] ${
                    isActive
                      ? "bg-[#181816] shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-[#2FA882]/40"
                      : "bg-[#151514]/60 hover:bg-[#181816]/90 border border-transparent hover:border-[#2A2925]"
                  }`}
                  aria-selected={isActive}
                  role="tab"
                >
                  {/* Service Text Title above icon */}
                  <span
                    className={`text-xs sm:text-[13px] font-semibold leading-snug mb-3 min-h-[34px] flex items-center justify-center transition-colors ${
                      isActive
                        ? "text-[#F5F4EE] font-bold"
                        : "text-[#8E8C82] group-hover:text-[#D5D3C9]"
                    }`}
                  >
                    {service.tabLabel}
                  </span>

                  {/* Circular Icon with Pin Indicator */}
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

                    {/* Active Teardrop / Speech-bubble Pin Pointer downward */}
                    {isActive && (
                      <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-0 h-0 border-x-[6px] border-x-transparent border-t-[7px] border-t-[#2FA882]" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Main Content Display Area with Carousel Arrow Controls */}
        <div className="relative">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={prevService}
            className="hidden xl:flex absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#1A1A18]/90 hover:bg-[#242320] text-[#A3A096] hover:text-[#F5F4EE] border border-[#2E2D28] hover:border-[#3D3C36] shadow-xl items-center justify-center transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FA882]"
            aria-label="Serviço anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={nextService}
            className="hidden xl:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#1A1A18]/90 hover:bg-[#242320] text-[#A3A096] hover:text-[#F5F4EE] border border-[#2E2D28] hover:border-[#3D3C36] shadow-xl items-center justify-center transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FA882]"
            aria-label="Próximo serviço"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* 2-Column Main Showcase Card */}
          <div className="rounded-2xl bg-[#161615] border border-[#262522] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] p-6 sm:p-10 lg:p-14 overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Typography, Details & CTA Link */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-[#1C1B19] border border-[#2A2925] text-xs font-semibold text-[#2FA882]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2FA882] animate-pulse" />
                    {current.badge}
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#F5F4EE] mb-5 leading-tight">
                    {current.title}
                  </h3>

                  <p className="text-base sm:text-lg text-[#C8C6BE] leading-relaxed mb-4 font-normal">
                    {current.description}
                  </p>

                  <p className="text-sm sm:text-base text-[#8E8C82] leading-relaxed mb-8">
                    {current.extraInfo}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2.5 mb-10 pb-8 border-b border-[#242320]">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#A3A096] block mb-3">
                      Entregáveis & Diferenciais Chave:
                    </span>
                    {current.deliverables.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-sm text-[#D5D3C9]"
                      >
                        <div className="w-4 h-4 rounded-full bg-[#1C2C26] text-[#2FA882] flex items-center justify-center shrink-0 border border-[#2FA882]/30">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{item}</span>
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
                    <span>{current.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
                  </a>

                  {/* Mobile Prev / Next Controls */}
                  <div className="flex xl:hidden items-center gap-2 ml-auto">
                    <button
                      type="button"
                      onClick={prevService}
                      className="p-2 rounded-lg bg-[#1C1B19] text-[#A3A096] hover:text-[#F5F4EE] border border-[#2E2D28] transition-colors"
                      aria-label="Anterior"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-xs text-[#7A7972] px-1 font-mono">
                      {activeIdx + 1} / {SERVICES.length}
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
              </div>

              {/* Right Column: Bespoke 3D Glass Device & Mockup Visual Showcase */}
              <div className="lg:col-span-6 relative flex items-center justify-center">
                <div className="w-full max-w-lg lg:max-w-none relative">
                  
                  {/* Custom Web Design Mockup */}
                  {current.id === "web-design" && (
                    <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#1C1C1A] to-[#141413] border border-white/10 shadow-2xl overflow-hidden">
                      {/* Ambient light glow */}
                      <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#2FA882]/20 rounded-full blur-3xl pointer-events-none" />
                      
                      {/* Laptop Desktop Mockup Frame */}
                      <div className="rounded-xl bg-[#121211] border border-[#2A2925] p-3 shadow-2xl">
                        {/* Browser Topbar */}
                        <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#22211E]">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/60" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/60" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/60" />
                          </div>
                          <div className="px-3 py-0.5 rounded-full bg-[#1C1B19] border border-[#2C2B27] text-[10px] text-[#A3A096] font-mono">
                            portocom.com.br/showroom
                          </div>
                          <div className="w-8" />
                        </div>

                        {/* Page Preview Content */}
                        <div className="space-y-3">
                          {/* Hero banner inside mockup */}
                          <div className="p-4 rounded-lg bg-gradient-to-r from-[#181816] via-[#1E1E1C] to-[#181816] border border-white/5 flex items-center justify-between">
                            <div>
                              <span className="text-[9px] uppercase tracking-wider font-bold text-[#2FA882]">
                                Coleção Exclusiva
                              </span>
                              <div className="text-sm font-bold text-[#F5F4EE] mt-0.5">
                                Design Que Inspira Confiança
                              </div>
                            </div>
                            <div className="px-2.5 py-1 rounded bg-[#2FA882] text-[#121211] text-[10px] font-bold">
                              Ver Projeto
                            </div>
                          </div>

                          {/* Grid of preview product cards */}
                          <div className="grid grid-cols-3 gap-2">
                            <div className="p-2.5 rounded-lg bg-[#181816] border border-[#262522]">
                              <div className="w-full h-12 rounded bg-[#22211E] mb-2 flex items-center justify-center text-[10px] text-[#7A7972]">
                                3D Studio
                              </div>
                              <div className="h-2 w-12 rounded bg-[#32312D] mb-1" />
                              <div className="h-2 w-8 rounded bg-[#2FA882]/40" />
                            </div>
                            <div className="p-2.5 rounded-lg bg-[#181816] border border-[#262522]">
                              <div className="w-full h-12 rounded bg-[#22211E] mb-2 flex items-center justify-center text-[10px] text-[#7A7972]">
                                Editorial
                              </div>
                              <div className="h-2 w-12 rounded bg-[#32312D] mb-1" />
                              <div className="h-2 w-8 rounded bg-[#2FA882]/40" />
                            </div>
                            <div className="p-2.5 rounded-lg bg-[#181816] border border-[#262522]">
                              <div className="w-full h-12 rounded bg-[#22211E] mb-2 flex items-center justify-center text-[10px] text-[#7A7972]">
                                Portfólio
                              </div>
                              <div className="h-2 w-12 rounded bg-[#32312D] mb-1" />
                              <div className="h-2 w-8 rounded bg-[#2FA882]/40" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Floating Mobile Smartphone Overlay on right bottom */}
                      <div className="absolute -bottom-4 -right-2 sm:-right-4 w-44 rounded-2xl bg-[#141413] border border-[#3D3C36] p-2.5 shadow-[0_15px_40px_rgba(0,0,0,0.8)] backdrop-blur-md">
                        <div className="w-10 h-1 rounded-full bg-[#33322E] mx-auto mb-2" />
                        <div className="p-2 rounded-lg bg-[#1C1B19] border border-[#2E2D28] mb-1.5">
                          <div className="text-[10px] font-bold text-[#F5F4EE]">
                            Mobile UX 100%
                          </div>
                          <div className="text-[9px] text-[#2FA882] font-mono mt-0.5">
                            Touch-first interativo
                          </div>
                        </div>
                        <div className="h-10 rounded bg-[#22211E] flex items-center justify-center text-[9px] text-[#A3A096]">
                          0.6s LCP Instantâneo
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Web Development Mockup */}
                  {current.id === "web-dev" && (
                    <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#1C1C1A] to-[#141413] border border-white/10 shadow-2xl overflow-hidden">
                      <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#3DBA95]/20 rounded-full blur-3xl pointer-events-none" />

                      {/* IDE Editor Window */}
                      <div className="rounded-xl bg-[#0F0F0E] border border-[#2A2925] p-4 shadow-2xl font-mono text-xs">
                        <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#22211E]">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                          </div>
                          <span className="text-[10px] text-[#7A7972]">
                            app/api/pipeline/route.ts
                          </span>
                          <span className="text-[10px] text-[#2FA882] font-bold">
                            TypeScript
                          </span>
                        </div>

                        {/* Code Snippets */}
                        <div className="space-y-1.5 text-[11px] leading-relaxed">
                          <p className="text-[#8E8C82]">
                            <span className="text-[#C084FC]">export async function</span>{" "}
                            <span className="text-[#60A5FA]">POST</span>(req: Request) {"{"}
                          </p>
                          <p className="pl-4 text-[#C8C6BE]">
                            <span className="text-[#F472B6]">const</span> engine ={" "}
                            <span className="text-[#3DBA95]">await</span> initHighPerformance({"{"}
                          </p>
                          <p className="pl-8 text-[#A3A096]">
                            framework: <span className="text-[#FBBF24]">&quot;Next.js 15&quot;</span>,
                          </p>
                          <p className="pl-8 text-[#A3A096]">
                            speedScore: <span className="text-[#34D399]">99</span>,
                          </p>
                          <p className="pl-8 text-[#A3A096]">
                            integrations: [<span className="text-[#FBBF24]">&quot;CRM&quot;</span>,{" "}
                            <span className="text-[#FBBF24]">&quot;Stripe&quot;</span>,{" "}
                            <span className="text-[#FBBF24]">&quot;Webhooks&quot;</span>],
                          </p>
                          <p className="pl-4 text-[#C8C6BE]">{"});"}</p>
                          <p className="pl-4 text-[#8E8C82]">
                            <span className="text-[#C084FC]">return</span> Response.json({"{"}{" "}
                            success: <span className="text-[#38BDF8]">true</span> {"}"});
                          </p>
                          <p className="text-[#8E8C82]">{"}"}</p>
                        </div>
                      </div>

                      {/* Connected Platform Badges floating */}
                      <div className="grid grid-cols-3 gap-2 mt-4">
                        <div className="p-2 rounded-lg bg-[#151514] border border-[#2E2D28] text-center">
                          <span className="text-[10px] font-bold text-[#F5F4EE] block">
                            Next.js 15
                          </span>
                          <span className="text-[9px] text-[#2FA882]">SSR + Edge</span>
                        </div>
                        <div className="p-2 rounded-lg bg-[#151514] border border-[#2E2D28] text-center">
                          <span className="text-[10px] font-bold text-[#F5F4EE] block">
                            CRMs & APIs
                          </span>
                          <span className="text-[9px] text-[#3DBA95]">Webhook Sync</span>
                        </div>
                        <div className="p-2 rounded-lg bg-[#151514] border border-[#2E2D28] text-center">
                          <span className="text-[10px] font-bold text-[#F5F4EE] block">
                            Segurança
                          </span>
                          <span className="text-[9px] text-[#2FA882]">SSL & LGPD</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* eCommerce Mockup */}
                  {current.id === "ecommerce" && (
                    <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#1C1C1A] to-[#141413] border border-white/10 shadow-2xl overflow-hidden">
                      <div className="absolute top-0 right-0 w-48 h-48 bg-[#2FA882]/15 rounded-full blur-3xl pointer-events-none" />

                      {/* Luxury Product Card */}
                      <div className="rounded-xl bg-[#121211] border border-[#2E2D28] p-5 shadow-2xl">
                        <div className="flex items-center justify-between mb-4">
                          <span className="px-2.5 py-0.5 rounded-full bg-[#1C2C26] text-[#2FA882] text-[10px] font-bold border border-[#2FA882]/30">
                            Loja Ativa · Alta Conversão
                          </span>
                          <span className="text-xs font-mono text-[#A3A096]">
                            ★★★★★ (4.9/5)
                          </span>
                        </div>

                        <div className="h-28 rounded-lg bg-gradient-to-br from-[#242320] to-[#171615] flex items-center justify-center mb-4 border border-white/5 relative overflow-hidden">
                          <div className="text-center">
                            <span className="text-xs font-bold text-[#F5F4EE] block">
                              Linha Premium B2B
                            </span>
                            <span className="text-[10px] text-[#A3A096]">
                              Catálogo Inteligente com Filtros Instantâneos
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pb-4 border-b border-[#242320]">
                          <div>
                            <span className="text-[10px] text-[#8E8C82] block">
                              Ticket Médio Otimizado
                            </span>
                            <span className="text-xl font-extrabold text-[#F5F4EE]">
                              R$ 4.850,00
                            </span>
                          </div>
                          <div className="px-4 py-2 rounded-lg bg-[#2FA882] text-[#121211] font-bold text-xs shadow-md">
                            Checkout em 1 Clique
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 mt-4 text-[10px]">
                          <div className="p-2 rounded bg-[#181816] text-[#C8C6BE] border border-[#262522]">
                            ⚡ Pix Instantâneo & Antifraude
                          </div>
                          <div className="p-2 rounded bg-[#181816] text-[#C8C6BE] border border-[#262522]">
                            📦 Cálculo de Frete em Tempo Real
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Branding Mockup */}
                  {current.id === "branding" && (
                    <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#1C1C1A] to-[#141413] border border-white/10 shadow-2xl overflow-hidden">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#3DBA95]/15 rounded-full blur-3xl pointer-events-none" />

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Brandbook Cover Mockup */}
                        <div className="p-5 rounded-xl bg-[#0F0F0E] border border-[#2E2D28] shadow-2xl flex flex-col justify-between h-52">
                          <div className="w-8 h-8 rounded-md bg-[#1C1B19] border border-[#3D3C36] flex items-center justify-center text-xs font-bold text-[#F5F4EE]">
                            P
                          </div>
                          <div>
                            <span className="text-[9px] uppercase tracking-widest text-[#2FA882] font-bold block mb-1">
                              SISTEMA DE IDENTIDADE
                            </span>
                            <div className="text-base font-bold text-[#F5F4EE] leading-tight">
                              Brand Guidelines 2026
                            </div>
                            <span className="text-[10px] text-[#7A7972] mt-1 block">
                              Regras de Marca & Tom de Voz
                            </span>
                          </div>
                        </div>

                        {/* Typography & Color Swatches */}
                        <div className="space-y-3">
                          <div className="p-4 rounded-xl bg-[#141413] border border-[#2A2925]">
                            <div className="text-2xl font-serif text-[#F5F4EE] mb-1">
                              Aa
                            </div>
                            <div className="text-[10px] text-[#A3A096]">
                              Tipografia Editorial & Clássica
                            </div>
                          </div>

                          <div className="p-3.5 rounded-xl bg-[#141413] border border-[#2A2925]">
                            <div className="text-[10px] font-bold text-[#A3A096] mb-2 uppercase tracking-wider">
                              Paleta Cromática
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full bg-[#121211] border border-white/20" title="Obsidian" />
                              <div className="w-6 h-6 rounded-full bg-[#1A5446]" title="Forest" />
                              <div className="w-6 h-6 rounded-full bg-[#2FA882]" title="Emerald" />
                              <div className="w-6 h-6 rounded-full bg-[#F5F4EE]" title="Ivory" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SEO & Digital Marketing Mockup */}
                  {current.id === "seo-marketing" && (
                    <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#1C1C1A] to-[#141413] border border-white/10 shadow-2xl overflow-hidden">
                      <div className="absolute top-0 left-0 w-48 h-48 bg-[#2FA882]/15 rounded-full blur-3xl pointer-events-none" />

                      <div className="rounded-xl bg-[#121211] border border-[#2E2D28] p-5 shadow-2xl">
                        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#242320]">
                          <span className="text-xs font-bold text-[#F5F4EE]">
                            Visibilidade Orgânica no Google
                          </span>
                          <span className="px-2 py-0.5 rounded bg-[#1C2C26] text-[#2FA882] text-[10px] font-bold">
                            +142% Tráfego
                          </span>
                        </div>

                        {/* Growth Chart Simulation */}
                        <div className="h-24 w-full flex items-end gap-1.5 pt-4 pb-2 px-1 mb-4 border-b border-[#22211E]">
                          <div className="w-full bg-[#242320] h-[35%] rounded-t" />
                          <div className="w-full bg-[#242320] h-[45%] rounded-t" />
                          <div className="w-full bg-[#242320] h-[40%] rounded-t" />
                          <div className="w-full bg-[#242320] h-[60%] rounded-t" />
                          <div className="w-full bg-[#242320] h-[55%] rounded-t" />
                          <div className="w-full bg-[#2FA882]/60 h-[75%] rounded-t" />
                          <div className="w-full bg-[#2FA882]/80 h-[85%] rounded-t" />
                          <div className="w-full bg-[#2FA882] h-[100%] rounded-t shadow-[0_0_12px_rgba(47,168,130,0.5)]" />
                        </div>

                        {/* Lighthouse & Vitals Badges */}
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div className="p-2 rounded-lg bg-[#181816] border border-[#2A2925]">
                            <span className="text-sm font-extrabold text-[#2FA882] block">
                              99
                            </span>
                            <span className="text-[9px] text-[#8E8C82]">Performance</span>
                          </div>
                          <div className="p-2 rounded-lg bg-[#181816] border border-[#2A2925]">
                            <span className="text-sm font-extrabold text-[#2FA882] block">
                              100
                            </span>
                            <span className="text-[9px] text-[#8E8C82]">SEO Score</span>
                          </div>
                          <div className="p-2 rounded-lg bg-[#181816] border border-[#2A2925]">
                            <span className="text-sm font-extrabold text-[#3DBA95] block">
                              0.3s
                            </span>
                            <span className="text-[9px] text-[#8E8C82]">LCP Speed</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Website Redesign Mockup */}
                  {current.id === "redesign" && (
                    <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#1C1C1A] to-[#141413] border border-white/10 shadow-2xl overflow-hidden">
                      <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#3DBA95]/20 rounded-full blur-3xl pointer-events-none" />

                      {/* 3 Layered Slices */}
                      <div className="space-y-3 relative">
                        <div className="p-4 rounded-xl bg-[#1A1A18] border border-[#2FA882]/40 shadow-xl relative z-30">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-bold text-[#F5F4EE]">
                              1. Nova Experiência Visual & UI Moderna
                            </span>
                            <span className="text-[10px] text-[#2FA882] font-mono">
                              98% Aprovação
                            </span>
                          </div>
                          <span className="text-[10px] text-[#A3A096]">
                            Estética alinhada às maiores referências mundiais de design
                          </span>
                        </div>

                        <div className="p-4 rounded-xl bg-[#161615] border border-[#2E2D28] shadow-lg relative z-20">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-bold text-[#F5F4EE]">
                              2. Velocidade Extrema & Otimização
                            </span>
                            <span className="text-[10px] text-[#3DBA95] font-mono">
                              +320% Mais Rápido
                            </span>
                          </div>
                          <span className="text-[10px] text-[#A3A096]">
                            Carregamento reduzido de 4.2s para 0.6s
                          </span>
                        </div>

                        <div className="p-4 rounded-xl bg-[#121211] border border-[#242320] shadow-md relative z-10">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-bold text-[#F5F4EE]">
                              3. Preservação de Autoridade de SEO
                            </span>
                            <span className="text-[10px] text-[#2FA882] font-mono">
                              0 Posições Perdidas
                            </span>
                          </div>
                          <span className="text-[10px] text-[#A3A096]">
                            Redirecionamentos 301 estruturados sem quebra de links
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
