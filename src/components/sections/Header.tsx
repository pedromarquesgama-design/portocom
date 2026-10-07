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
          <div className="w-7 h-7 rounded-md bg-[#1C1B19] border border-[#2E2D29] flex items-center justify-center text-xs font-bold text-[#F5F4EE] shadow-sm group-hover:border-[#3D3C36] transition-colors">
            P
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-base tracking-tight leading-tight">
              {AGENCY_NAME}
            </span>
            <span className="text-[10px] text-[#A3A096] uppercase tracking-wider font-medium">
              Estúdio Digital
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#A3A096]"
          aria-label="Navegação principal"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#F5F4EE] transition-colors duration-150 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            href="#contato"
            variant="primary"
            size="sm"
            className="!px-4 !py-2 text-xs font-semibold"
          >
            Fale com o Sócio
            <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
          </Button>
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
                Fale com o Sócio
                <ArrowUpRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
