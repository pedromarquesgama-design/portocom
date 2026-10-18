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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-[rgba(10,10,14,0.72)] backdrop-blur-[16px] backdrop-saturate-[160%] border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.45)]"
          : "bg-[rgba(10,10,14,0.38)] backdrop-blur-[14px] backdrop-saturate-[150%] border-white/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.25)]"
      }`}
      style={{ WebkitBackdropFilter: "blur(16px) saturate(160%)" }}
    >
      {/* Floating Transitioning Logo */}
      <HeroNavLogoTransition />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 h-[60px] flex items-center justify-between gap-6">
        {/* Brand Logo Anchor (receives transitioning Portocom logo) */}
        <div
          id="navbar-logo-anchor"
          className="relative flex items-center h-8 sm:h-9 w-28 sm:w-36 shrink-0 justify-start"
        />

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

        {/* CTA Button — same as hero */}
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

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full inset-x-0 bg-[rgba(10,10,14,0.92)] backdrop-blur-[16px] border-b border-white/[0.06] px-6 py-5 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.85)]">
          <nav className="flex flex-col gap-1 text-sm font-medium text-white/80">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 hover:text-[#FDFDFC] hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.65)] border-b border-white/[0.06] transition-all"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <Button
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                variant="primary"
                size="md"
                className="w-full text-center font-bold"
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
