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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A0A0A]/85 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-[#FAFAFA] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#34D399] rounded-lg"
          aria-label={`${AGENCY_NAME} - Página inicial`}
        >
          {/* Geometric Diamond Emblem matching the reference visual style */}
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white/20 to-white/5 border border-white/20 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:border-[#34D399]/60 transition-colors">
            <svg
              className="w-4 h-4 text-white group-hover:text-[#34D399] transition-colors"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <polygon points="12 2 19 8 19 16 12 22 5 16 5 8" />
            </svg>
          </div>
          <span className="font-bold text-lg tracking-tight group-hover:text-white transition-colors">
            {AGENCY_NAME}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#A3A3A3]"
          aria-label="Navegação principal"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#FAFAFA] transition-colors duration-200 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contato"
            className="text-sm font-medium text-[#A3A3A3] hover:text-[#FAFAFA] transition-colors"
          >
            Fazer Orçamento
          </a>
          <Button
            href="#contato"
            variant="primary"
            size="sm"
            className="rounded-full !px-5 !py-2 text-xs font-semibold"
          >
            Falar com a gente
            <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
          </Button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#A3A3A3] hover:text-[#FAFAFA] hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#34D399]"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 transition-all duration-300">
          <nav className="flex flex-col gap-4 text-base font-medium text-[#A3A3A3]">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-[#FAFAFA] border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <Button
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                variant="emerald"
                size="md"
                className="w-full text-center"
              >
                Falar com a gente
                <ArrowUpRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
