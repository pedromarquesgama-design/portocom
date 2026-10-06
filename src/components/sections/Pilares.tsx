import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Sparkles, Zap, LayoutTemplate, Layers, CheckCircle2, TrendingUp, Cpu, Gauge } from "lucide-react";

export function Pilares() {
  return (
    <section id="servicos" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#34D399]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header matching reference */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex mb-4">
            <Badge variant="default" icon={<Sparkles className="w-3.5 h-3.5 text-[#34D399]" />}>
              Nossos Pilares
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-metallic mb-6">
            Design & Engenharia Que Geram Resultados Reais
          </h2>
          <p className="text-base sm:text-lg text-[#A3A3A3] leading-relaxed">
            Unimos a precisão do desenvolvimento de alta performance à sofisticação de interfaces centradas no usuário. Conheça as bases da nossa entrega:
          </p>
        </div>

        {/* Bento Grid: 4 Cards matching the reference layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento Card 1: Pilar 1 - Web Design & Landing Pages (Col span 7) */}
          <Card
            variant="glass-interactive"
            className="md:col-span-7 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="p-2 rounded-xl bg-[#34D399]/10 text-[#34D399] border border-[#34D399]/20">
                  <LayoutTemplate className="w-5 h-5" />
                </span>
                <span className="text-xs uppercase font-bold tracking-widest text-[#34D399]">
                  Pilar 1 — Conversão
                </span>
              </div>
              <CardHeader className="!p-0 mb-4">
                <CardTitle className="text-2xl md:text-3xl">
                  Sites Institucionais & Landing Pages de Alta Conversão
                </CardTitle>
                <CardDescription className="text-base text-[#A3A3A3] mt-2">
                  Projetados com arquitetura persuasiva, carregamento instantâneo e SEO técnico para transformar tráfego em clientes qualificados.
                </CardDescription>
              </CardHeader>
            </div>

            {/* CSS Mockup: Dark Glass Metrics Table */}
            <div className="mt-8 p-5 rounded-2xl bg-[#0F0F0F]/90 border border-white/10 shadow-inner">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5 text-xs text-[#737373]">
                <span>MÉTRICA CHAVE</span>
                <span>DESEMPENHO</span>
                <span>STATUS</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-[#E5E5E5] font-medium flex items-center gap-2">
                    <Gauge className="w-4 h-4 text-[#34D399]" />
                    PageSpeed Score (Google)
                  </span>
                  <span className="font-mono font-bold text-[#34D399]">99 / 100</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] bg-[#34D399]/10 text-[#34D399] border border-[#34D399]/30">
                    Excelente
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-[#E5E5E5] font-medium flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#60A5FA]" />
                    Taxa Média de Conversão
                  </span>
                  <span className="font-mono font-bold text-[#FAFAFA]">+14.8%</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] bg-[#60A5FA]/10 text-[#60A5FA] border border-[#60A5FA]/30">
                    Otimizado
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-[#E5E5E5] font-medium flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-emerald-400" />
                    Tempo de Carregamento
                  </span>
                  <span className="font-mono font-bold text-[#34D399]">0.42s LCP</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] bg-white/5 text-[#A3A3A3]">
                    Instantâneo
                  </span>
                </div>
              </div>
            </div>
          </Card>

          {/* Bento Card 2: Pilar 1 - Micro-interações & Gráfico de Performance (Col span 5) */}
          <Card
            variant="glass-interactive"
            className="md:col-span-5 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="p-2 rounded-xl bg-[#60A5FA]/10 text-[#60A5FA] border border-[#60A5FA]/20">
                  <Zap className="w-5 h-5" />
                </span>
                <span className="text-xs uppercase font-bold tracking-widest text-[#60A5FA]">
                  Pilar 1 — Engenharia
                </span>
              </div>
              <CardHeader className="!p-0 mb-4">
                <CardTitle className="text-xl md:text-2xl">
                  Micro-interações & Engenharia Fluida
                </CardTitle>
                <CardDescription className="text-sm text-[#A3A3A3] mt-1">
                  Desenvolvimento em Next.js 15, Framer ou Webflow com sensibilidade de produto premium e transições sem engasgos.
                </CardDescription>
              </CardHeader>
            </div>

            {/* CSS Mockup: Glowing Vector Chart matching the reference top-right card */}
            <div className="mt-6 p-4 rounded-2xl bg-[#0F0F0F]/90 border border-white/10 relative overflow-hidden">
              <div className="flex justify-between items-center mb-3 text-xs">
                <div>
                  <div className="text-[11px] text-[#A3A3A3]">Visitas Únicas</div>
                  <div className="text-lg font-bold text-white">48.2k</div>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-[#34D399]/15 text-[#34D399] border border-[#34D399]/30 text-xs font-semibold">
                  +38% Crescimento
                </div>
              </div>

              {/* Glowing SVG Curve */}
              <div className="h-28 w-full relative flex items-end">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 200 80" fill="none">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#34D399" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#34D399" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,65 Q30,55 60,40 T120,30 T170,12 T200,5"
                    fill="none"
                    stroke="#34D399"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M0,65 Q30,55 60,40 T120,30 T170,12 T200,5 L200,80 L0,80 Z"
                    fill="url(#chartGradient)"
                  />
                  <circle cx="170" cy="12" r="4" fill="#34D399" />
                  <circle cx="170" cy="12" r="8" fill="#34D399" fillOpacity="0.3" className="animate-ping" />
                </svg>
              </div>

              <div className="mt-2 flex justify-between text-[10px] text-[#737373]">
                <span>Semana 1</span>
                <span>Semana 2</span>
                <span>Semana 3</span>
                <span>Semana 4</span>
              </div>
            </div>
          </Card>

          {/* Bento Card 3: Pilar 2 - Design Systems no Figma (Col span 5) */}
          <Card
            variant="glass-interactive"
            className="md:col-span-5 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Layers className="w-5 h-5" />
                </span>
                <span className="text-xs uppercase font-bold tracking-widest text-purple-400">
                  Pilar 2 — UX/UI
                </span>
              </div>
              <CardHeader className="!p-0 mb-4">
                <CardTitle className="text-xl md:text-2xl">
                  Design Systems no Figma
                </CardTitle>
                <CardDescription className="text-sm text-[#A3A3A3] mt-1">
                  Bibliotecas de componentes reutilizáveis, tokens escaláveis e documentação pronta para desenvolvimento ágil.
                </CardDescription>
              </CardHeader>
            </div>

            {/* CSS Mockup: Integration Connection Badge matching bottom-left card */}
            <div className="mt-6 p-5 rounded-2xl bg-[#0F0F0F]/90 border border-white/10 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                <span className="font-extrabold text-lg text-white">DS</span>
              </div>
              <div className="text-sm font-semibold text-white mb-1">
                Figma + Storybook Sync
              </div>
              <p className="text-xs text-[#A3A3A3] max-w-[220px]">
                Tokens de cor, tipografia e 120+ componentes prontos para escala.
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-[#34D399]/10 text-[#34D399] border border-[#34D399]/20">
                <CheckCircle2 className="w-3 h-3" /> 100% Componentizado
              </div>
            </div>
          </Card>

          {/* Bento Card 4: Pilar 2 - Interfaces de Sistemas e Apps (Col span 7) */}
          <Card
            variant="glass-interactive"
            className="md:col-span-7 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="p-2 rounded-xl bg-[#34D399]/10 text-[#34D399] border border-[#34D399]/20">
                  <Cpu className="w-5 h-5" />
                </span>
                <span className="text-xs uppercase font-bold tracking-widest text-[#34D399]">
                  Pilar 2 — Produto
                </span>
              </div>
              <CardHeader className="!p-0 mb-4">
                <CardTitle className="text-2xl md:text-3xl">
                  UX/UI & Interfaces de Sistemas SaaS e Aplicativos
                </CardTitle>
                <CardDescription className="text-base text-[#A3A3A3] mt-2">
                  Pesquisa com usuários reais, prototipagem de alta fidelidade e dashboards modernos criados para reter usuários e diminuir churn.
                </CardDescription>
              </CardHeader>
            </div>

            {/* CSS Mockup: Stacked UI Component Cards matching bottom-right card */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#34D399]/40 transition-colors">
                <div className="text-[11px] text-[#A3A3A3] mb-1">SaaS Dashboards</div>
                <div className="text-sm font-bold text-white">Analytics 360°</div>
                <div className="mt-2 text-[10px] text-[#34D399] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" /> Alta densidade
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#60A5FA]/40 transition-colors">
                <div className="text-[11px] text-[#A3A3A3] mb-1">Jornada do Usuário</div>
                <div className="text-sm font-bold text-white">Onboarding Flow</div>
                <div className="mt-2 text-[10px] text-[#60A5FA] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA]" /> Testes A/B
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-purple-400/40 transition-colors">
                <div className="text-[11px] text-[#A3A3A3] mb-1">Mobile Apps</div>
                <div className="text-sm font-bold text-white">iOS & Android</div>
                <div className="mt-2 text-[10px] text-purple-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" /> Human Interface
                </div>
              </div>
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
}
