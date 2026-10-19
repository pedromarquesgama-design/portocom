"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HERO_CONTENT_FADE_END } from "@/components/ui/HeroNavLogoTransition";

export function Hero() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const overlapRef = React.useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Track scroll progress through the hero section (motion.dev react-scroll-zoom-hero)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Track the phase where the next sheet slides up over the pinned hero
  // (0 = sheet's top edge enters the viewport, 1 = sheet fully covers the hero)
  const { scrollYProgress: overlapProgress } = useScroll({
    target: overlapRef,
    offset: ["start end", "end end"],
  });

  // Background zoom and blur transformations (image stays pinned and visible)
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.45]);
  const bgFilter = useTransform(scrollYProgress, [0, 0.75], ["blur(0px)", "blur(12px)"]);

  // Whole pinned hero fades out only as the sheet finishes covering it (desktop only; on mobile image doesn't fade)
  const heroOpacity = useTransform(overlapProgress, [0.6, 1], [1, 0]);

  // Foreground content transforms: fade as user scrolls down
  const contentOpacity = useTransform(scrollYProgress, [0, HERO_CONTENT_FADE_END], [1, 0]);

  // Scroll down indicator cue fade
  const scrollCueOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const scrollCueY = useTransform(scrollYProgress, [0, 0.15], [0, 16]);

  // Height of the pinned hero viewport (matches the section's h + min-h below, uses dvh for mobile address bar)
  const pinnedHeight = isMobile ? "max(100dvh - 70px, 580px)" : "max(100dvh - 60px, 580px)";

  return (
    // Outer wrapper is extended by one hero-height and pulled back with a negative
    // margin, so the hero stays pinned while the next sheet slides over it
    <div
      className="relative w-full"
      style={{
        height: `calc(180vh + ${pinnedHeight})`,
        marginBottom: `calc(-1 * ${pinnedHeight})`,
      }}
    >
      {/* Scroll track driving the hero animations (unchanged 180vh timing) */}
      <div
        ref={containerRef}
        id="hero-scroll-container"
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[180vh] pointer-events-none"
      />
      {/* Overlap track: the region where the next sheet covers the pinned hero */}
      <div
        ref={overlapRef}
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{ height: pinnedHeight }}
      />
      <motion.section
        style={{ opacity: isMobile ? 1 : heroOpacity }}
        className="sticky top-[70px] sm:top-[60px] z-0 h-[calc(100dvh-70px)] sm:h-[calc(100dvh-60px)] min-h-[580px] w-full flex flex-col justify-between overflow-hidden bg-[#0A0A0E]"
      >
        {/* =========================================================================
            BACKGROUND LAYER: Desk with Devices Image + Cinematic Amber Atmospheres
            ========================================================================= */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          {/* Zooming background container (zooms on all screens) */}
          <motion.div
            style={{
              scale: bgScale,
              transformOrigin: isMobile ? "50% 65%" : "70% 50%",
            }}
            className="w-full h-full relative will-change-transform"
          >
            {/* Desktop / Tablet Landscape image with blur/fade on scroll */}
            <motion.div
              style={{ filter: bgFilter }}
              className="hidden sm:block w-full h-full relative"
            >
              <img
                src="/images/hero-background.jpg"
                alt="Escritório executivo à noite com dispositivos exibindo a sua marca"
                className="w-full h-full object-contain object-right bg-[#0A0A0E] sm:translate-x-10 lg:translate-x-16"
                style={{
                  imageRendering: "-webkit-optimize-contrast",
                }}
              />
            </motion.div>

            {/* Mobile Portrait image: zoom-in without any blur or fading */}
            <div className="block sm:hidden w-full h-full relative">
              <img
                src="/images/hero-background-mobile.jpg"
                alt="Escritório executivo à noite com dispositivos exibindo a sua marca"
                className="w-full h-full object-cover object-bottom bg-[#0A0A0E]"
                style={{
                  imageRendering: "-webkit-optimize-contrast",
                }}
              />
            </div>
          </motion.div>

          {/* Left text-zone shade (Desktop/Tablet): boxed to content area, feathered right edge */}
          <motion.div
            style={{ opacity: contentOpacity }}
            className="hidden sm:block absolute inset-y-0 left-0 sm:w-1/2 lg:w-[42%] pointer-events-none bg-[linear-gradient(to_right,#0A0A0E_0%,rgba(10,10,14,0.95)_55%,rgba(10,10,14,0.50)_80%,transparent_100%)]"
          />

          {/* Mid-scene lift: soft tungsten bloom over the dark window zone */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 45% 55% at 58% 45%, rgba(245, 158, 11, 0.18) 0%, rgba(245, 158, 11, 0.07) 45%, transparent 70%)",
            }}
          />

          {/* Bottom subtle edge blend to seamlessly transition into next section */}
          <div
            className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, #0A0A0E 0%, rgba(10, 10, 14, 0.5) 40%, transparent 100%)",
            }}
          />
        </div>

        {/* Mobile shading effect: behind headline, subtitle and button */}
        <motion.div
          style={{
            opacity: contentOpacity,
            background:
              "linear-gradient(to bottom, #0A0A0E 0%, rgba(10, 10, 14, 0.95) 45%, rgba(10, 10, 14, 0.60) 75%, rgba(10, 10, 14, 0.15) 90%, transparent 100%)",
          }}
          className="sm:hidden absolute top-0 inset-x-0 h-[205px] xs:h-[215px] pointer-events-none"
        />
        {/* Tablet backdrop tint */}
        <div className="hidden sm:block lg:hidden absolute inset-0 bg-gradient-to-t from-[#0A0A0E] via-[#0A0A0E]/90 to-[#0A0A0E]/75 pointer-events-none" />

        {/* Top-Left Volumetric Tungsten & Amber Studio Glow */}
        <div
          className="absolute -top-16 -left-16 w-[420px] sm:w-[540px] h-[420px] sm:h-[540px] rounded-full pointer-events-none blur-[100px] opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(245, 158, 11, 0.16) 0%, rgba(97, 59, 0, 0.25) 45%, transparent 70%)",
          }}
        />

        {/* =========================================================================
            HERO CONTENT LAYER: Executive typography and amber lighting
            ========================================================================= */}
        <div className="relative z-10 w-full flex-1 flex flex-col justify-start pt-5 xs:pt-6 sm:pt-7 lg:pt-8 pb-8">
          <div className="w-full max-w-7xl xl:max-w-[1520px] 2xl:max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
            <div className="max-w-xl lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl flex flex-col items-start text-left">
              
              {/* Brand logo anchor (Desktop only, mobile has it static in navbar) */}
              <div
                id="hero-logo-anchor"
                className="hidden sm:flex sm:h-64 lg:h-80 w-auto max-w-[calc(100vw-32px)] sm:-mt-16 lg:-mt-[4.75rem] sm:-ml-[9px] lg:-ml-[11px] sm:mb-1 lg:mb-1 items-center"
              >
                <img
                  src="/images/logo-portocom.png"
                  alt="Portocom — Design & Engenharia Digital"
                  className="h-full w-auto object-contain mix-blend-screen select-none opacity-0"
                />
              </div>

              {/* Text & CTA group: fades as user scrolls down */}
              <motion.div
                style={{ opacity: contentOpacity }}
                className="w-full flex flex-col items-start will-change-transform"
              >
                {/* Headline with fading gold gradient */}
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.06, ease: "easeOut" }}
                  className="font-heading font-extrabold uppercase tracking-tight text-[31px] xs:text-[35px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] leading-[1.03] text-left max-w-[640px] mb-3 sm:mb-3"
                >
                  <span className="block">
                    <span className="text-[#FFFFFF]">
                      <span className="hidden sm:inline">SUA </span>PRESENÇA{" "}
                    </span>
                    <span
                      className="inline-block bg-[linear-gradient(90deg,#FEE8D3_0%,#F8C896_50%,#F6B874_100%)] bg-clip-text text-transparent font-extrabold"
                      style={{
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        color: "#F8C896",
                      }}
                    >
                      DIGITAL
                    </span>
                  </span>
                  <span
                    className="block mt-1 sm:mt-1 bg-[linear-gradient(90deg,#FDC77B_0%,#F7BE72_45%,#F3B061_80%,#EEA343_100%)] bg-clip-text text-transparent font-extrabold"
                    style={{
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      color: "#F7BE72",
                    }}
                  >
                    INSPIRA CONFIANÇA
                  </span>
                </motion.h1>

                {/* Subtitle under headline */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.13, ease: "easeOut" }}
                  className="font-sans text-[14px] xs:text-[15px] sm:text-base lg:text-lg text-[#C8C8D2] leading-[1.45] sm:leading-relaxed max-w-[340px] sm:max-w-[460px] font-normal text-left [text-shadow:0_2px_12px_rgba(0,0,0,0.95)] mb-6 sm:mb-0"
                >
                  <span className="block">Sites rápidos e sistemas fáceis de usar</span>
                  <span className="block">para o seu negócio crescer.</span>
                </motion.p>

                {/* Call to Action Button */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.20, ease: "easeOut" }}
                  className="flex items-center"
                >
                  <Button
                    href="#contato"
                    variant="primary"
                    size="lg"
                    className="group w-auto shadow-[0_4px_24px_rgba(245,158,11,0.4)] hover:shadow-[0_6px_32px_rgba(245,158,11,0.55)] hover:-translate-y-0.5 transition-all text-[13px] xs:text-sm sm:text-base font-bold !px-5 xs:!px-6 !py-2.5 xs:!py-3 sm:!py-3.5 rounded-[10px]"
                  >
                    <span>Experimente gratuitamente</span>
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 stroke-[2.5]" />
                  </Button>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </div>

        {/* =========================================================================
            SCROLL DOWN ARROWS INDICATOR: Urges the user to scroll down
            ========================================================================= */}
        <motion.div
          style={{ opacity: scrollCueOpacity, y: scrollCueY }}
          className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer group select-none"
          onClick={() => {
            const next = document.getElementById("trabalho");
            if (next) {
              next.scrollIntoView({ behavior: "smooth" });
            } else {
              window.scrollTo({ top: window.innerHeight * 0.95, behavior: "smooth" });
            }
          }}
        >
          <span className="text-[10px] sm:text-xs font-mono font-medium uppercase tracking-[0.25em] text-white group-hover:text-[#F59E0B] transition-colors mb-1 flex items-center gap-1.5 [text-shadow:0_1px_8px_rgba(0,0,0,0.95),0_0_16px_rgba(0,0,0,0.85)]">
            <span>Role para baixo</span>
          </span>
          <div className="flex flex-col items-center">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-[#F59E0B] drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]"
            >
              <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 6, 0], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.18 }}
              className="text-white/40 -mt-3.5"
            >
              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
            </motion.div>
          </div>
        </motion.div>

      </motion.section>
    </div>
  );
}
