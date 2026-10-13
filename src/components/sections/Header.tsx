"use client";

import React, { useState, useEffect } from "react";
import { AGENCY_NAME, NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Menu, X, ArrowUpRight } from "lucide-react";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-[#121211]/90 backdrop-blur-md border-b border-[#2A2925] py-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl xl:max-w-[1520px] 2xl:max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 flex items-center justify-between">
        {/* Brand Monogram & Name */}
        <a
          href="#"
          className="flex items-center gap-3 text-[#F5F4EE] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FA882] rounded-md"
          aria-label={`${AGENCY_NAME} - Página inicial`}
        >
          <div className="w-8 h-8 rounded-lg bg-[#071914] border border-[#1B3D30] flex items-center justify-center text-xs font-bold text-white shadow-sm group-hover:border-[#2EE5A7]/40 transition-colors">
            P
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-wider leading-tight font-nippo text-white">
              {AGENCY_NAME}
            </span>
            <span className="text-[9px] text-[#A1A1AA] uppercase tracking-[0.22em] font-medium font-sans">
              Estúdio Digital
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Navegação principal"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-[#D1D5DB] hover:text-[#2EE5A7] transition-colors font-medium py-1 font-sans"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contato"
            className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold rounded-full bg-[#051C15]/80 hover:bg-[#07241B] border border-[#2EE5A7]/70 hover:border-[#2EE5A7] text-white shadow-[0_0_15px_rgba(46,229,167,0.18)] hover:shadow-[0_0_24px_rgba(46,229,167,0.35)] transition-all cursor-pointer font-sans"
          >
            <span>Investir no meu Negócio</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#2EE5A7]" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-md text-[#A3A096] hover:text-[#F5F4EE] hover:bg-[#1A1A18] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FA882]"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#151514] border-b border-[#2A2925] px-6 py-6 transition-all">
          <nav className="flex flex-col gap-3 text-sm font-medium text-[#A3A096]">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-[#F5F4EE] border-b border-[#242320] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <Button
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                variant="accent"
                size="md"
                className="w-full text-center"
              >
                Investir no meu Negócio
                <ArrowUpRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
