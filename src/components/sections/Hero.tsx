"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AGENCY_TAGLINE } from "@/lib/constants";
import { ArrowUpRight, Check, ShieldCheck, Clock } from "lucide-react";

const RotatingEarth = dynamic(
  () => import("@/components/ui/wireframe-dotted-globe"),
  { ssr: false }
);

const PILL_ITEMS = [
  "Site comercial rápido e objetivo",
  "Sem intermediários técnicos",
  "Clareza total para o visitante",
  "Acompanhamento pós-lançamento",
];

export function Hero() {
  return (
    <section className="relative min-h-[72vh] md:min-h-[76vh] lg:min-h-[80vh] pt-18 sm:pt-20 md:pt-22 lg:pt-24 pb-12 md:pb-16 flex items-start md:items-center overflow-hidden">
      {/* Tactile paper/millimeter grid background across full viewport */}
      <div className="absolute inset-0 bg-tactile-grid opacity-75 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" />

      {/* Panoramic Wide Container */}
      <div className="max-w-7xl xl:max-w-[1520px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          
          {/* Left Column: Bold Typography & CTAs Anchored to the Left Edge */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left">
            {/* Grounded Badge */}
            <div className="mb-3.5 inline-flex">
              <Badge variant="default" className="text-xs sm:text-sm font-medium px-4 py-1.5">
                {AGENCY_TAGLINE}
              </Badge>
            </div>

            {/* High-Impact Editorial Headline - Increased Font Scale */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[48px] xl:text-[56px] 2xl:text-[64px] font-extrabold tracking-tight leading-[1.05] mb-5 text-[#F5F4EE] uppercase">
              Construa uma <br />
              presença digital <br />
              <span className="inline-block sm:whitespace-nowrap">
                que <span className="text-[#3DBA95]">inspira confiança</span>
              </span>
            </h1>

            {/* Clear Plain-Language Subtitle - Increased Font Scale */}
            <p className="text-lg sm:text-xl md:text-[21px] lg:text-[23px] text-[#A3A096] leading-relaxed max-w-2xl mb-8 font-normal">
              Transformamos visitantes em clientes por meio de sites rápidos e sistemas fáceis de usar.
            </p>

            {/* Action Buttons with Increased Font Size and Padding */}
            <div className="flex flex-wrap items-center gap-4 mb-8 w-full sm:w-auto">
              <Button
                href="#contato"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto !px-8 !py-4 text-base sm:text-lg font-semibold shadow-[0_2px_12px_rgba(0,0,0,0.3)]"
              >
                Solicitar Proposta
                <ArrowUpRight className="w-5 h-5 ml-2" />
              </Button>

              <Button
                href="#servicos"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto !px-8 !py-4 text-base sm:text-lg font-medium"
              >
                Ver Como Ajudamos
              </Button>
            </div>

            {/* Trust Micro-Row - Increased Font Scale */}
            <div className="pt-6 border-t border-[#262521] flex flex-wrap items-center gap-6 sm:gap-8 text-xs sm:text-sm md:text-[15px] text-[#A3A096]">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4.5 h-4.5 text-[#2FA882] flex-shrink-0" />
                <span>Entrega com prazo garantido</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4.5 h-4.5 text-[#2FA882] flex-shrink-0" />
                <span>Carregamento em menos de 1s</span>
              </div>
            </div>
          </div>

          {/* Right Column: Wide Scaled-Up Globe & Expanded Pills with Sleeker Height */}
          <div className="lg:col-span-6 xl:col-span-6 flex items-center justify-center lg:justify-end relative w-full">
            <div className="relative w-full max-w-[500px] sm:max-w-[580px] lg:max-w-[680px] xl:max-w-[760px] aspect-square flex items-center justify-center">
              
              {/* Scaled-up Interactive 3D Wireframe Globe */}
              <RotatingEarth
                width={760}
                height={760}
                showHint={false}
                className="w-full h-full flex items-center justify-center"
              />

              {/* Wide Deliverable Pills Layered Over the Globe */}
              <div className="absolute inset-0 flex flex-col justify-center items-center gap-3 sm:gap-3.5 lg:gap-4 z-10 px-2 sm:px-4 pointer-events-none">
                {PILL_ITEMS.map((item, index) => (
                  <div
                    key={index}
                    className="w-full max-w-[360px] sm:max-w-[460px] lg:max-w-[520px] xl:max-w-[560px] flex items-center gap-3.5 px-5 py-2.5 sm:px-6 sm:py-3 lg:px-7 lg:py-3.5 rounded-full bg-[#161614]/92 backdrop-blur-md border border-[#2E2D28] shadow-[0_8px_24px_rgba(0,0,0,0.6)] select-none transition-transform duration-200"
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#18382E] border border-[#2FA882]/50 flex items-center justify-center flex-shrink-0 text-[#3DBA95]">
                      <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="text-xs sm:text-sm md:text-[14.5px] lg:text-[15px] font-medium text-[#F5F4EE] tracking-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
