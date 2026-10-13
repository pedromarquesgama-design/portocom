"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Shield } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#021715]">
      {/* =========================================================================
          BACKGROUND LAYER: Desk with Devices Image + Cinematic Emerald Atmospheres
          ========================================================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* Desk scene with devices */}
        <img
          src="/images/hero-devices-desk.jpg"
          alt="Dispositivos digitais — Smartphone, MacBook e Tablet com a sua marca"
          className="w-full h-full object-cover object-right lg:object-[82%_center] xl:object-right"
        />

        {/* Left Atmospheric Gradient: Dark emerald vignette ensuring 100% text contrast */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #021715 0%, rgba(2, 23, 21, 0.98) 32%, rgba(2, 23, 21, 0.88) 46%, rgba(2, 23, 21, 0.35) 64%, transparent 85%)",
          }}
        />

        {/* Top-Left Volumetric Emerald Studio Glow */}
        <div
          className="absolute -top-16 -left-16 w-[560px] sm:w-[720px] h-[560px] sm:h-[720px] rounded-full pointer-events-none blur-[140px] opacity-90"
          style={{
            background:
              "radial-gradient(ellipse at 25% 25%, rgba(34, 224, 167, 0.22) 0%, rgba(1, 58, 56, 0.45) 42%, transparent 75%)",
          }}
        />

        {/* Bottom subtle edge blend to seamlessly transition into next section */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#121211] via-[#121211]/50 to-transparent" />

        {/* Cyber HUD decorative line between badge and laptop */}
        <div className="absolute top-[22%] left-[38%] xl:left-[41%] hidden lg:block pointer-events-none opacity-30 z-10">
          <svg width="140" height="40" viewBox="0 0 140 40" fill="none">
            <path d="M0 28 H90 L110 8 H140" stroke="#2EE5A7" strokeWidth="1" strokeDasharray="3 3" />
            <path d="M70 28 H90 L110 8 H130" stroke="#2EE5A7" strokeWidth="1.2" />
            <circle cx="130" cy="8" r="2" fill="#2EE5A7" />
            <circle cx="4" cy="28" r="1.5" fill="#2EE5A7" />
          </svg>
        </div>
      </div>

      {/* =========================================================================
          HERO CONTENT LAYER: Perfectly aligned with the reference measures
          ========================================================================= */}
      <div className="relative z-10 w-full flex-1 flex flex-col justify-center pt-28 sm:pt-32 pb-8">
        <div className="w-full max-w-7xl xl:max-w-[1520px] 2xl:max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-xl xl:max-w-2xl flex flex-col items-start text-left">
            
            {/* Overline Badge Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D281E]/85 border border-[#1A4B38] mb-5 sm:mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#2EE5A7] animate-pulse" />
              <span className="text-xs font-semibold text-[#34D399] tracking-wide font-sans">
                Estúdio de Design & Engenharia Digital
              </span>
            </motion.div>

            {/* High-Impact 3-Line Headline matching reference composition & Nippo font */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-nippo font-black uppercase tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[54px] 2xl:text-[62px] leading-[1.08] sm:leading-[1.1] mb-5 sm:mb-6"
            >
              <span className="block text-white">CONSTRUA UMA</span>
              <span className="block text-[#22E0A7] drop-shadow-[0_0_32px_rgba(34,224,167,0.35)] mt-0.5 sm:mt-1">
                PRESENÇA DIGITAL
              </span>
              <span className="block text-white mt-0.5 sm:mt-1">QUE INSPIRA CONFIANÇA</span>
            </motion.h1>

            {/* Subtitle - clean readable 2-line layout */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans text-sm sm:text-base lg:text-[17px] text-[#A1A1AA] leading-relaxed max-w-[480px] mb-8 font-normal"
            >
              Desenvolvemos sites rápidos e sistemas fáceis de usar, com foco em performance, design e resultados.
            </motion.p>

            {/* CTA Button + Trust Badge in a clean row */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-4 sm:gap-6"
            >
              {/* Primary CTA Button */}
              <a
                href="#contato"
                className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl bg-[#22E0A7] hover:bg-[#1FD69E] text-[#052018] font-bold text-sm sm:text-base tracking-tight shadow-[0_0_30px_rgba(34,224,167,0.45)] hover:shadow-[0_0_46px_rgba(34,224,167,0.7)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22E0A7] font-sans"
              >
                <span>Falar com um Especialista</span>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#052018] stroke-[2.5]" />
              </a>

              {/* Vertical Divider */}
              <div className="hidden sm:block h-8 w-[1px] bg-white/20" />

              {/* Trust Signal Badge (Shield + 2-line text) */}
              <div className="flex items-center gap-2.5 text-left font-sans">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-[#22E0A7] stroke-[1.8] shrink-0" />
                <div className="text-xs text-[#CBD5E1] leading-tight font-medium">
                  <div>Seu projeto em</div>
                  <div className="text-white/90 font-semibold">boas mãos</div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* =========================================================================
          BOTTOM SCROLL CUE: Aligned with the left margin (as in reference)
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 w-full max-w-7xl xl:max-w-[1520px] 2xl:max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 pb-6 lg:pb-10"
      >
        <div className="flex items-center gap-3 text-[#94A3B8]/80 text-xs font-normal select-none font-sans">
          <div className="flex flex-col items-center">
            <div className="w-[18px] h-[28px] rounded-full border border-white/40 flex items-start justify-center pt-1.5">
              <span className="w-1 h-2 rounded-full bg-[#22E0A7] animate-bounce" />
            </div>
            <div className="w-[1px] h-5 bg-white/30 mt-1" />
          </div>
          <span className="text-white/60 tracking-wide text-xs">Role para descobrir</span>
        </div>
      </motion.div>
    </section>
  );
}
