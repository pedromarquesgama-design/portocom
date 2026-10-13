"use client";

import React, { useState, useEffect } from "react";
import { Eye, MousePointer2, Star, Search } from "lucide-react";
import { motion } from "motion/react";

interface ReviewItem {
  quote: string;
}

const REVIEWS_ROW_1: ReviewItem[] = [
  { quote: "Ótimo serviço!" },
  { quote: "Excelente atendimento!" },
  { quote: "Muito satisfeito!" },
  { quote: "Retorno comprovado!" },
  { quote: "Super recomendo!" },
  { quote: "Equipe nota 10!" },
];

const REVIEWS_ROW_2: ReviewItem[] = [
  { quote: "Muito satisfeito!" },
  { quote: "Excelente atendimento!" },
  { quote: "Muito satisfeito!" },
  { quote: "Atendimento ágil!" },
  { quote: "Site muito rápido!" },
  { quote: "Resultados reais!" },
];

function GoogleSearchSimulation() {
  const targetText = "meunegócionainternet.com";
  const [displayText, setDisplayText] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 18, y: 16 });
  const [cursorScale, setCursorScale] = useState(1);

  useEffect(() => {
    let isMounted = true;
    let timer: NodeJS.Timeout;

    const wait = (ms: number) =>
      new Promise((resolve) => {
        timer = setTimeout(resolve, ms);
      });

    const runLoop = async () => {
      while (isMounted) {
        // 1. Idle state: "Pesquisar no Google", cursor resting at bottom-right
        setIsActive(false);
        setIsSearching(false);
        setDisplayText("");
        setCursorPos({ x: 18, y: 16 });
        setCursorScale(1);
        await wait(1500);
        if (!isMounted) break;

        // 2. Cursor moves smoothly into search bar
        setCursorPos({ x: -45, y: -2 });
        await wait(600);
        if (!isMounted) break;

        // 3. Cursor clicks search bar
        setCursorScale(0.78);
        await wait(140);
        setCursorScale(1);
        setIsActive(true);
        await wait(300);
        if (!isMounted) break;

        // 4. Cursor moves aside slightly to leave text clearly visible
        setCursorPos({ x: 22, y: 14 });

        // 5. Typing "meunegócionainternet.com" letter by letter
        for (let i = 1; i <= targetText.length; i++) {
          if (!isMounted) break;
          setDisplayText(targetText.slice(0, i));
          const typingSpeed = 65 + Math.random() * 45;
          await wait(typingSpeed);
        }
        if (!isMounted) break;

        // 6. Pause after typing
        await wait(600);
        if (!isMounted) break;

        // 7. Cursor glides to submit
        setCursorPos({ x: 4, y: -2 });
        await wait(550);
        if (!isMounted) break;

        // 8. Click to search
        setCursorScale(0.78);
        await wait(140);
        setCursorScale(1);
        setIsSearching(true);

        // 9. Display active searched result
        await wait(3000);
        if (!isMounted) break;

        // 10. Reset back to initial state
        setIsSearching(false);
        setIsActive(false);
        await wait(700);
      }
    };

    runLoop();

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative z-10 flex flex-col items-center justify-center w-full">
      {/* Search Input Bar with animated cursor */}
      <div className="relative flex items-center justify-center">
        <div
          className={`relative flex items-center px-4 sm:px-5 py-2.5 rounded-full bg-[#1A1A1E] border transition-all duration-300 w-[245px] sm:w-[280px] h-[44px] shadow-md ${
            isSearching
              ? "border-[#2EE5A7]/70 shadow-[0_0_24px_rgba(46,229,167,0.35)] ring-1 ring-[#2EE5A7]/40"
              : isActive
              ? "border-white/35 shadow-[0_0_16px_rgba(255,255,255,0.08)]"
              : "border-white/15"
          }`}
        >
          <Search
            className={`w-3.5 h-3.5 mr-2 shrink-0 transition-colors duration-200 ${
              isSearching ? "text-[#2EE5A7]" : "text-white/40"
            }`}
          />

          <div className="flex-1 flex items-center overflow-hidden">
            {!isActive && !displayText ? (
              <span
                className="text-white/60 text-xs sm:text-[13px] tracking-wide select-none"
                style={{ fontFamily: '"Gambarino", Georgia, serif' }}
              >
                Pesquisar no Google
              </span>
            ) : (
              <span className="text-white text-xs sm:text-[12.5px] font-mono tracking-tight whitespace-nowrap overflow-hidden flex items-center">
                <span>{displayText}</span>
                <span className="inline-block w-[1.5px] h-3.5 bg-[#2EE5A7] ml-0.5 animate-pulse shrink-0" />
              </span>
            )}
          </div>
        </div>

        {/* Animated Mouse Cursor */}
        <motion.div
          animate={{
            x: cursorPos.x,
            y: cursorPos.y,
            scale: cursorScale,
          }}
          transition={{
            type: "spring",
            damping: 24,
            stiffness: 180,
            mass: 0.8,
          }}
          className="absolute right-0 bottom-0 pointer-events-none z-30"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]"
          >
            <path
              d="M5.5 3.5L18.5 10.5L12 12.5L9.5 19L5.5 3.5Z"
              fill="#FFFFFF"
              stroke="#121214"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>

      {/* Google Serif Logo & Subtitle matching the reference */}
      <div className="mt-8 sm:mt-9 flex flex-col items-center">
        <span
          className="text-4xl sm:text-5xl md:text-[52px] text-white font-normal select-none tracking-tight leading-none"
          style={{ fontFamily: '"Gambarino", Georgia, serif' }}
        >
          Google
        </span>
        <span
          className="text-[#8E8E93] text-sm sm:text-[15px] font-normal tracking-wide mt-2 select-none"
          style={{ fontFamily: '"Gambarino", Georgia, serif' }}
        >
          meu negócio
        </span>
      </div>
    </div>
  );
}

export function IdentidadeDigitalSection() {
  return (
    <section className="py-20 md:py-28 bg-transparent relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#1A5446]/10 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-left md:text-center max-w-3xl md:mx-auto mb-12 sm:mb-16"
        >
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
            <span className="gradient-text-h block">Identidade Digital</span>
            <span className="text-[#FFFFFF] block mt-1">Atrai Lucro Real</span>
          </h2>
          <p className="section-description max-w-2xl md:mx-auto mt-4 text-[#A1A1AA] text-sm sm:text-base md:text-lg leading-relaxed">
            Nossos métodos comprovados ajudam você a subir nos rankings de busca mais rápido do que nunca, sem necessidade de habilidades técnicas.
          </p>
        </motion.div>

        {/* 3-Card Grid matching the site's 3-card showcase layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto items-stretch">
          
          {/* Card 1: Infinite Rolling Reviews & Star Containers */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group relative w-full min-h-[350px] sm:min-h-[380px] my-2 transition-all duration-500 flex flex-col"
          >
            {/* Skewed gradient panels (Emerald to Forest) */}
            <span
              className="absolute top-0 left-[25px] sm:left-[35px] w-[calc(100%-50px)] sm:w-[calc(100%-70px)] h-full rounded-2xl transform skew-x-[12deg] transition-all duration-500 group-hover:skew-x-0 group-hover:left-[10px] group-hover:w-[calc(100%-20px)]"
              style={{
                background: "linear-gradient(315deg, #2FA882, #1A5446)",
              }}
            />
            <span
              className="absolute top-0 left-[25px] sm:left-[35px] w-[calc(100%-50px)] sm:w-[calc(100%-70px)] h-full rounded-2xl transform skew-x-[12deg] blur-[25px] opacity-70 transition-all duration-500 group-hover:skew-x-0 group-hover:left-[10px] group-hover:w-[calc(100%-20px)] group-hover:opacity-100"
              style={{
                background: "linear-gradient(315deg, #2FA882, #1A5446)",
              }}
            />

            {/* Animated corner blurs */}
            <span className="pointer-events-none absolute inset-0 z-10">
              <span className="absolute top-0 left-0 w-0 h-0 rounded-lg opacity-0 bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all duration-300 animate-blob group-hover:top-[-25px] group-hover:left-[25px] group-hover:w-[70px] group-hover:h-[70px] group-hover:opacity-100" />
              <span className="absolute bottom-0 right-0 w-0 h-0 rounded-lg opacity-0 bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all duration-500 animate-blob animation-delay-1000 group-hover:bottom-[-25px] group-hover:right-[25px] group-hover:w-[70px] group-hover:h-[70px] group-hover:opacity-100" />
            </span>

            {/* Card Content Glass Box */}
            <div className="relative z-20 h-full p-6 sm:p-7 bg-[#161614]/90 backdrop-blur-[12px] border border-[#2A2925] shadow-2xl rounded-2xl text-[#F5F4EE] transition-all duration-500 flex flex-col justify-center overflow-hidden group-hover:bg-[#181816] group-hover:border-[#2FA882]/40 group-hover:translate-y-[-6px]">
              
              {/* Subtle background stripes texture */}
              <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to right, rgba(255, 255, 255, 0.03) 0px, rgba(255, 255, 255, 0.03) 32px, transparent 32px, transparent 64px)",
                }}
              />

              {/* Ambient green glow for stars */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-32 bg-[#2EE5A7]/10 blur-3xl rounded-full pointer-events-none" />

              {/* Marquee Wrapper with edge masks */}
              <div className="relative z-10 w-full flex flex-col gap-6 [mask-image:linear-gradient(to_right,transparent_0%,black_12%,black_88%,transparent_100%)]">
                
                {/* Row 1: Rolling Left */}
                <div className="animate-marquee flex items-center gap-6">
                  {[...REVIEWS_ROW_1, ...REVIEWS_ROW_1].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2.5 shrink-0">
                      {/* Speech bubble */}
                      <div className="relative bg-[#E2E2E6] text-[#141416] px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-sm inline-flex items-center justify-center whitespace-nowrap">
                        <span>{item.quote}</span>
                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#E2E2E6] rotate-45" />
                      </div>

                      {/* Rolling star container with green glowing stars */}
                      <div className="bg-[#141A17] border border-[#2FA882]/25 px-3.5 py-1.5 rounded-full flex items-center justify-center gap-1 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]">
                        {[...Array(7)].map((_, sIdx) => (
                          <Star
                            key={sIdx}
                            className="w-3 h-3 fill-[#2EE5A7] text-[#2EE5A7] drop-shadow-[0_0_4px_rgba(46,229,167,0.7)]"
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Row 2: Rolling Right (Reverse continuous marquee loop) */}
                <div className="animate-marquee-reverse flex items-center gap-6">
                  {[...REVIEWS_ROW_2, ...REVIEWS_ROW_2].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2.5 shrink-0">
                      {/* Speech bubble */}
                      <div className="relative bg-[#E2E2E6] text-[#141416] px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-sm inline-flex items-center justify-center whitespace-nowrap">
                        <span>{item.quote}</span>
                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#E2E2E6] rotate-45" />
                      </div>

                      {/* Rolling star container with green glowing stars */}
                      <div className="bg-[#141A17] border border-[#2FA882]/25 px-3.5 py-1.5 rounded-full flex items-center justify-center gap-1 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]">
                        {[...Array(7)].map((_, sIdx) => (
                          <Star
                            key={sIdx}
                            className="w-3 h-3 fill-[#2EE5A7] text-[#2EE5A7] drop-shadow-[0_0_4px_rgba(46,229,167,0.7)]"
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </motion.div>

          {/* Card 2: Performance Analytics & Glowing Chart */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="group relative w-full min-h-[350px] sm:min-h-[380px] my-2 transition-all duration-500 flex flex-col"
          >
            {/* Skewed gradient panels (Teal to Emerald) */}
            <span
              className="absolute top-0 left-[25px] sm:left-[35px] w-[calc(100%-50px)] sm:w-[calc(100%-70px)] h-full rounded-2xl transform skew-x-[12deg] transition-all duration-500 group-hover:skew-x-0 group-hover:left-[10px] group-hover:w-[calc(100%-20px)]"
              style={{
                background: "linear-gradient(315deg, #3DBA95, #2FA882)",
              }}
            />
            <span
              className="absolute top-0 left-[25px] sm:left-[35px] w-[calc(100%-50px)] sm:w-[calc(100%-70px)] h-full rounded-2xl transform skew-x-[12deg] blur-[25px] opacity-70 transition-all duration-500 group-hover:skew-x-0 group-hover:left-[10px] group-hover:w-[calc(100%-20px)] group-hover:opacity-100"
              style={{
                background: "linear-gradient(315deg, #3DBA95, #2FA882)",
              }}
            />

            {/* Animated corner blurs */}
            <span className="pointer-events-none absolute inset-0 z-10">
              <span className="absolute top-0 left-0 w-0 h-0 rounded-lg opacity-0 bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all duration-300 animate-blob group-hover:top-[-25px] group-hover:left-[25px] group-hover:w-[70px] group-hover:h-[70px] group-hover:opacity-100" />
              <span className="absolute bottom-0 right-0 w-0 h-0 rounded-lg opacity-0 bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all duration-500 animate-blob animation-delay-1000 group-hover:bottom-[-25px] group-hover:right-[25px] group-hover:w-[70px] group-hover:h-[70px] group-hover:opacity-100" />
            </span>

            {/* Card Content Glass Box */}
            <div className="relative z-20 h-full p-6 sm:p-7 bg-[#161614]/90 backdrop-blur-[12px] border border-[#2A2925] shadow-2xl rounded-2xl text-[#F5F4EE] transition-all duration-500 flex items-center justify-center overflow-hidden group-hover:bg-[#181816] group-hover:border-[#2FA882]/40 group-hover:translate-y-[-6px]">
              
              {/* Vertical stripes background */}
              <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to right, rgba(255, 255, 255, 0.03) 0px, rgba(255, 255, 255, 0.03) 32px, transparent 32px, transparent 64px)",
                }}
              />

              {/* Floating tilted dashboard container */}
              <div className="relative w-full max-w-[340px] sm:max-w-[370px] -rotate-2 group-hover:rotate-0 transition-transform duration-500 ease-out">
                
                {/* Floating pill badge: -8% */}
                <div className="absolute -left-3 sm:-left-4 bottom-5 z-20 px-2.5 py-1 rounded-full bg-[#1A1A1D] border border-white/10 text-white/75 text-[11px] font-semibold shadow-lg">
                  -8%
                </div>

                {/* Floating pill badge: +12% */}
                <div className="absolute -right-3 sm:-right-4 top-10 sm:top-12 z-20 px-2.5 py-1 rounded-full bg-[#202024] border border-white/15 text-white text-[11px] font-semibold shadow-lg">
                  +12%
                </div>

                {/* Dark Glass Dashboard Surface */}
                <div className="relative z-10 rounded-2xl bg-[#19191C]/95 backdrop-blur-md border border-white/10 p-5 shadow-[0_16px_36px_rgba(0,0,0,0.6)]">
                  {/* Metrics header */}
                  <div className="space-y-1 mb-2">
                    <div className="flex items-center gap-2 text-white/90 text-xs sm:text-sm font-medium">
                      <Eye className="w-3.5 h-3.5 text-white/60" />
                      <span>12,8 mil visualizações</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/70 text-xs sm:text-sm font-medium">
                      <MousePointer2 className="w-3.5 h-3.5 text-white/50" />
                      <span>3,2 mil cliques</span>
                    </div>
                  </div>

                  {/* SVG Curve Chart */}
                  <div className="w-full pt-1">
                    <svg
                      viewBox="0 0 320 85"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-20 sm:h-22 overflow-visible"
                    >
                      <defs>
                        <linearGradient id="chartStrokeGradient" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#71717A" stopOpacity="0.4" />
                          <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.95" />
                          <stop offset="65%" stopColor="#FFFFFF" stopOpacity="0.95" />
                          <stop offset="100%" stopColor="#71717A" stopOpacity="0.4" />
                        </linearGradient>
                        <radialGradient id="peakGlow" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
                          <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.7" />
                          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                        </radialGradient>
                      </defs>

                      {/* Secondary lower muted curve */}
                      <path
                        d="M 10 72 C 60 72, 100 68, 140 58 C 175 48, 205 60, 240 68 C 270 74, 295 72, 310 70"
                        stroke="rgba(255,255,255,0.18)"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                      />

                      {/* Main prominent glowing curve */}
                      <path
                        d="M 10 68 C 50 68, 90 62, 130 45 C 165 30, 185 18, 205 18 C 230 18, 245 42, 275 52 C 295 58, 305 58, 310 57"
                        stroke="url(#chartStrokeGradient)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />

                      {/* Glowing highlight circle at curve peak */}
                      <circle cx="205" cy="18" r="10" fill="url(#peakGlow)" />
                      <circle cx="205" cy="18" r="4" fill="#FFFFFF" />
                    </svg>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Card 3: Google Meu Negócio */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="group relative w-full min-h-[350px] sm:min-h-[380px] my-2 transition-all duration-500 flex flex-col md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none lg:w-full"
          >
            {/* Skewed gradient panels (Cyan to Emerald) */}
            <span
              className="absolute top-0 left-[25px] sm:left-[35px] w-[calc(100%-50px)] sm:w-[calc(100%-70px)] h-full rounded-2xl transform skew-x-[12deg] transition-all duration-500 group-hover:skew-x-0 group-hover:left-[10px] group-hover:w-[calc(100%-20px)]"
              style={{
                background: "linear-gradient(315deg, #03a9f4, #2FA882)",
              }}
            />
            <span
              className="absolute top-0 left-[25px] sm:left-[35px] w-[calc(100%-50px)] sm:w-[calc(100%-70px)] h-full rounded-2xl transform skew-x-[12deg] blur-[25px] opacity-70 transition-all duration-500 group-hover:skew-x-0 group-hover:left-[10px] group-hover:w-[calc(100%-20px)] group-hover:opacity-100"
              style={{
                background: "linear-gradient(315deg, #03a9f4, #2FA882)",
              }}
            />

            {/* Animated corner blurs */}
            <span className="pointer-events-none absolute inset-0 z-10">
              <span className="absolute top-0 left-0 w-0 h-0 rounded-lg opacity-0 bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all duration-300 animate-blob group-hover:top-[-25px] group-hover:left-[25px] group-hover:w-[70px] group-hover:h-[70px] group-hover:opacity-100" />
              <span className="absolute bottom-0 right-0 w-0 h-0 rounded-lg opacity-0 bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all duration-500 animate-blob animation-delay-1000 group-hover:bottom-[-25px] group-hover:right-[25px] group-hover:w-[70px] group-hover:h-[70px] group-hover:opacity-100" />
            </span>

            {/* Card Content Glass Box */}
            <div className="relative z-20 h-full p-6 sm:p-7 bg-[#161614]/90 backdrop-blur-[12px] border border-[#2A2925] shadow-2xl rounded-2xl text-[#F5F4EE] transition-all duration-500 flex flex-col items-center justify-center text-center overflow-hidden group-hover:bg-[#181816] group-hover:border-[#2FA882]/40 group-hover:translate-y-[-6px]">
              
              {/* Vertical stripes texture */}
              <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to right, rgba(255, 255, 255, 0.03) 0px, rgba(255, 255, 255, 0.03) 32px, transparent 32px, transparent 64px)",
                }}
              />

              {/* Ambient subtle spotlight */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/[0.03] blur-3xl rounded-full pointer-events-none" />

              {/* Interactive Typing & Searching Simulation */}
              <GoogleSearchSimulation />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Tailwind custom utilities for animated corner blobs */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translateY(8px); }
          50% { transform: translate(-8px); }
        }
        .animate-blob { animation: blob 2.5s ease-in-out infinite; }
        .animation-delay-1000 { animation-delay: -1.25s; }
      `}</style>
    </section>
  );
}
