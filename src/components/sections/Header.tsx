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

      <div className="relative z-50 max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 h-[60px] flex items-center justify-between gap-4 sm:gap-6">
        {/* Left group: Brand Logo Anchor + Mobile CTA Button aligned with the logo */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <div
            id="navbar-logo-anchor"
            className="relative flex items-center h-8 sm:h-9 w-28 sm:w-36 shrink-0 justify-start"
          />

          {/* Mobile CTA Button — placed on the navbar aligned with the logo to the left */}
          <div className="flex md:hidden items-center">
            <Button
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              variant="primary"
              size="sm"
              className="font-sans text-[11px] min-[380px]:text-xs !px-2.5 min-[380px]:!px-3 !py-1.5 shadow-[0_2px_12px_rgba(245,158,11,0.3)] whitespace-nowrap font-bold"
            >
              <span className="hidden min-[350px]:inline">Experimente gratuitamente</span>
              <span className="min-[350px]:hidden">Experimentar</span>
              <ArrowUpRight className="w-3 h-3 stroke-[2.5] shrink-0" />
            </Button>
          </div>
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

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-md text-white/80 hover:text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 top-[60px] bg-black/80 z-40"
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
          </nav>
        </div>
      )}
    </header>
  );
}
