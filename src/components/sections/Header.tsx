"use client";

import React, { useState, useEffect } from "react";
import { AGENCY_NAME, NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { HeroNavLogoTransition } from "@/components/ui/HeroNavLogoTransition";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
        mobileMenuOpen
          ? "bg-[#0A0A0E] border-white/[0.08]"
          : isScrolled
          ? "bg-[rgba(10,10,14,0.72)] backdrop-blur-[16px] backdrop-saturate-[160%] border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.45)]"
          : "bg-[rgba(10,10,14,0.38)] backdrop-blur-[14px] backdrop-saturate-[150%] border-white/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.25)]"
      }`}
      style={{ WebkitBackdropFilter: "blur(16px) saturate(160%)" }}
    >
      {/* Floating Transitioning Logo */}
      <HeroNavLogoTransition hidden={mobileMenuOpen} />

      <div className="relative z-50 max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 h-[70px] sm:h-[60px] flex items-center justify-between gap-6">
        {/* Brand Logo Anchor (centered & larger on mobile, receives transitioning logo on desktop) */}
        <div
          id="navbar-logo-anchor"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:static sm:left-auto sm:top-auto sm:translate-x-0 sm:translate-y-0 flex items-center justify-center sm:justify-start h-full sm:h-9 w-auto sm:w-36 shrink-0 pointer-events-auto"
        >
          <a
            href="#"
            onClick={(e) => {
              if (window.scrollY > 100) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="block sm:hidden focus-visible:outline-none select-none -translate-y-[8px]"
            aria-label={`${AGENCY_NAME} - Página inicial`}
          >
            <img
              src="/images/logo-portocom.png"
              alt={`${AGENCY_NAME} — Design & Engenharia Digital`}
              className="h-[52px] xs:h-[55px] w-auto object-contain mix-blend-screen"
            />
          </a>
        </div>

        {/* Desktop Navigation - centered */}
        <nav
          className="hidden md:flex items-center gap-7 absolute left-1/2 -translate-x-1/2"
          aria-label="Navegação principal"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] leading-none text-white/85 hover:text-[#FDFDFC] hover:drop-shadow-[0_0_10px_rgba(245,158,11,0.75)] transition-all duration-200 font-medium font-sans tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center shrink-0">
          <Button href="#contato" variant="primary" size="sm" className="font-sans">
            <span>Experimente gratuitamente</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </Button>
        </div>

        {/* Mobile menu trigger — 3 golden metallic horizontal bars matching screenshot */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="ml-auto md:hidden flex flex-col justify-center items-center w-10 h-10 -mr-1 rounded-lg hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] transition-colors"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-[#E5A93C]" />
          ) : (
            <div className="flex flex-col justify-between w-[25px] h-[18px]">
              <span className="w-full h-[2px] rounded-full bg-gradient-to-r from-[#C5A880] via-[#E5A93C] to-[#C89D66] shadow-[0_0_8px_rgba(229,169,60,0.4)]" />
              <span className="w-full h-[2px] rounded-full bg-gradient-to-r from-[#A88252] via-[#D4A359] to-[#9E733D] shadow-[0_0_8px_rgba(212,163,89,0.3)]" />
              <span className="w-full h-[2px] rounded-full bg-gradient-to-r from-[#DECB9E] via-[#F3DEAB] to-[#C9A96E] shadow-[0_0_8px_rgba(243,222,171,0.4)]" />
            </div>
          )}
        </button>
      </div>

      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 top-[70px] sm:top-[60px] bg-black/80 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full inset-x-0 bg-[#0A0A0E] border-b border-[#F59E0B]/30 px-6 pt-2 pb-6 shadow-[0_30px_60px_rgba(0,0,0,0.95)] z-50">
          <nav className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3.5 text-[#FDFDFC] hover:text-[#F59E0B] font-heading font-semibold text-base tracking-wide border-b border-white/[0.08] transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-[#F59E0B]/60 text-xs font-mono">→</span>
              </a>
            ))}
            <div className="pt-5">
              <Button
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                variant="primary"
                size="md"
                className="w-full text-center font-bold shadow-[0_4px_20px_rgba(245,158,11,0.35)]"
              >
                <span>Experimente gratuitamente</span>
                <ArrowUpRight className="w-4 h-4 ml-1.5 stroke-[2.5]" />
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
