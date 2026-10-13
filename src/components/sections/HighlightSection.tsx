"use client";

import React from "react";
import { ProductHighlightCard } from "@/components/ui/product-highlight-card";
import { Layout, Sparkles, Zap } from "lucide-react";

export function HighlightSection() {
  return (
    <section className="py-24 md:py-32 bg-[#121211] relative overflow-hidden border-b border-[#242320]">
      {/* Ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#1A5446]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#2FA882] mb-3 block">
            DESTAQUES DE ENGENHARIA DIGITAL
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F4EE] whitespace-nowrap">
            TECNOLOGIA E EXPERIÊNCIA DE ALTA RETENÇÃO
          </h2>
        </div>

        {/* 3 Product Highlight Cards Grid */}
        <div className="flex justify-center items-center flex-wrap gap-8 md:gap-10">
          <ProductHighlightCard
            categoryIcon={<Layout className="w-4 h-4 text-[#2FA882]" />}
            category="WEB & LANDING PAGES"
            title="Design Comercial"
            description="Sites de alta conversão sob medida para acelerar vendas e gerar leads qualificados."
            imageSrc="/images/card-web-design.jpg"
            imageAlt="Mockup de Web Design"
          />

          <ProductHighlightCard
            categoryIcon={<Sparkles className="w-4 h-4 text-[#3DBA95]" />}
            category="BRANDING & MARCA"
            title="Identidade Autoral"
            description="Posicionamento visual único e prestígio instantâneo no seu mercado de atuação."
            imageSrc="/images/card-branding.jpg"
            imageAlt="Emblema 3D de Branding"
          />

          <ProductHighlightCard
            categoryIcon={<Zap className="w-4 h-4 text-[#03a9f4]" />}
            category="REDESIGN & UX"
            title="Performance Total"
            description="Plataformas até 4x mais rápidas com código limpo, SSL e otimização total."
            imageSrc="/images/card-performance.jpg"
            imageAlt="Dashboard de Performance"
          />
        </div>

      </div>
    </section>
  );
}
