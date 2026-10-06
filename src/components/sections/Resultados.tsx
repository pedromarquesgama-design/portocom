import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Award, ArrowUpRight, ShieldCheck, Zap, BarChart3 } from "lucide-react";

export function Resultados() {
  return (
    <section id="resultados" className="relative py-24 md:py-32 overflow-hidden bg-[#0A0A0A]">
      {/* Ambient background glow */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#34D399]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading and Value Proposition */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="mb-4">
              <Badge variant="default" icon={<Award className="w-3.5 h-3.5 text-[#34D399]" />}>
                Métricas Comprovadas
              </Badge>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-metallic mb-6">
              Resultados Que Você Pode Confiar
            </h2>

            <p className="text-base sm:text-lg text-[#A3A3A3] leading-relaxed mb-8">
              De marcas em expansão a produtos SaaS consolidados, nossa abordagem une design orientado a dados e código de alta performance para entregar saltos reais de tração e receita.
            </p>

            {/* Checklist items */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-[#34D399]/15 text-[#34D399] mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Carregamento Instantâneo</h4>
                  <p className="text-xs text-[#A3A3A3]">
                    Menos de 1 segundo de tempo de carregamento em qualquer dispositivo móvel.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-[#34D399]/15 text-[#34D399] mt-0.5">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Arquitetura de Conversão</h4>
                  <p className="text-xs text-[#A3A3A3]">
                    Copywriting estratégico, hierarquia visual e pontos focais calculados para reter o visitante.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-[#34D399]/15 text-[#34D399] mt-0.5">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Escalabilidade de Código</h4>
                  <p className="text-xs text-[#A3A3A3]">
                    Desenvolvimento limpo em Next.js e TypeScript, pronto para evoluir sem refações caras.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Angled Floating Metrics Cards matching the reference */}
          <div className="lg:col-span-6 relative flex items-center justify-center py-6">
            <div className="perspective-1000 w-full max-w-md space-y-4 transform md:rotate-x-[10deg] md:-rotate-y-[14deg] md:rotate-z-[4deg] transition-transform duration-500 hover:rotate-0">
              
              {/* 3D Metric Card 1 (PLACEHOLDER) */}
              <div className="relative p-6 rounded-3xl bg-[#171717]/90 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:border-[#34D399]/50 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#34D399] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
                    {/* PLACEHOLDER: edite este rótulo */}
                    Conversão de Leads
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#A3A3A3] group-hover:text-[#34D399] transition-colors" />
                </div>
                {/* PLACEHOLDER: edite esta métrica */}
                <div className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-1">
                  +185%
                </div>
                <p className="text-xs text-[#A3A3A3]">
                  Aumento médio na taxa de conversão após redesign estruturado
                </p>
              </div>

              {/* 3D Metric Card 2 (PLACEHOLDER) */}
              <div className="relative p-6 rounded-3xl bg-[#171717]/90 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] ml-4 sm:ml-8 hover:border-[#60A5FA]/50 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#60A5FA] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#60A5FA]" />
                    {/* PLACEHOLDER: edite este rótulo */}
                    Google PageSpeed
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#A3A3A3] group-hover:text-[#60A5FA] transition-colors" />
                </div>
                {/* PLACEHOLDER: edite esta métrica */}
                <div className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-1">
                  Nota 100
                </div>
                <p className="text-xs text-[#A3A3A3]">
                  Pontuação máxima em performance, acessibilidade e SEO
                </p>
              </div>

              {/* 3D Metric Card 3 (PLACEHOLDER) */}
              <div className="relative p-6 rounded-3xl bg-[#171717]/90 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] ml-2 sm:ml-4 hover:border-purple-400/50 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-purple-400" />
                    {/* PLACEHOLDER: edite este rótulo */}
                    Projetos Entregues
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#A3A3A3] group-hover:text-purple-400 transition-colors" />
                </div>
                {/* PLACEHOLDER: edite esta métrica */}
                <div className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-1">
                  50+
                </div>
                <p className="text-xs text-[#A3A3A3]">
                  Aplicações e sites construídos para o Brasil e exterior
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
