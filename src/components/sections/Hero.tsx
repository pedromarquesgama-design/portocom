"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AGENCY_TAGLINE, AGENCY_DESCRIPTION } from "@/lib/constants";
import { ArrowUpRight, Sparkles, Layers } from "lucide-react";

// Dotted Wireframe Earth loaded dynamically with ssr: false
const RotatingEarth = dynamic(
  () => import("@/components/ui/wireframe-dotted-globe"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full aspect-square max-w-[480px] mx-auto flex items-center justify-center rounded-3xl bg-[#121212]/50 border border-white/5 backdrop-blur-md">
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-full border-2 border-dashed border-[#34D399]/40 animate-spin" />
          <span className="text-xs text-[#A3A3A3]">Carregando globo interativo...</span>
        </div>
      </div>
    ),
  }
);

export function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 flex items-center overflow-hidden">
      {/* Background Subtle Grid Pattern matching reference */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-radial-mask pointer-events-none" />

      {/* Atmospheric Ambient Lighting Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#34D399]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[420px] h-[420px] bg-[#60A5FA]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pill Badge matching reference */}
            <div className="mb-6 inline-flex">
              <Badge
                variant="default"
                icon={<Sparkles className="w-3.5 h-3.5 text-[#34D399]" />}
              >
                {AGENCY_TAGLINE}
              </Badge>
            </div>

            {/* Main Headline: Two-line large metallic sheen */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold tracking-tight leading-[1.08] mb-6 text-metallic">
              Construa produtos digitais que{" "}
              <span className="text-gradient-emerald">convertem e escalam</span>
            </h1>

            {/* Subtitle / Value proposition */}
            <p className="text-base sm:text-lg md:text-xl text-[#A3A3A3] leading-relaxed max-w-2xl mb-10 font-normal">
              {AGENCY_DESCRIPTION}
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Button
                href="#contato"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto font-semibold shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_35px_rgba(52,211,153,0.3)] transition-all"
              >
                Iniciar Projeto
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>

              <Button
                href="#servicos"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Layers className="w-4 h-4 mr-2 text-[#34D399]" />
                Conhecer os Pilares
              </Button>
            </div>

            {/* Trust Micro-Metrics Row */}
            <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap items-center gap-8 text-xs text-[#A3A3A3]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#34D399] shadow-[0_0_8px_#34D399]" />
                <span>Next.js 15 & React 19 Stack</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#60A5FA] shadow-[0_0_8px_#60A5FA]" />
                <span>Score 95+ Core Web Vitals</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neutral-400" />
                <span>Design Systems no Figma</span>
              </div>
            </div>
          </div>

          {/* Right Column: Wireframe Dotted Earth Globe */}
          <div className="lg:col-span-5 flex items-center justify-center relative w-full">
            <div className="relative w-full max-w-[500px] flex items-center justify-center">
              {/* Radial ambient glow behind globe */}
              <div className="absolute inset-0 bg-radial from-[#34D399]/15 via-[#60A5FA]/10 to-transparent blur-3xl pointer-events-none -z-10" />
              <RotatingEarth width={500} height={500} className="w-full flex items-center justify-center" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
