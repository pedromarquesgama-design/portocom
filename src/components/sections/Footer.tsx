"use client";

import React from "react";
import { AGENCY_NAME, AGENCY_TAGLINE, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="relative pt-10 pb-8 bg-transparent border-t border-[#262521] overflow-hidden">
      {/* Dark scrim so footer content stays readable over bright video frames */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121211]/60 via-[#121211]/85 to-[#121211]/95 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper Columns with Scroll-driven Entrance */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-[#242320]"
        >
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <a href="#" className="flex items-center gap-2.5 mb-3 group">
              <div className="w-7 h-7 rounded-md bg-[#1C1B19] border border-[#2E2D29] flex items-center justify-center font-bold text-xs text-[#F5F4EE]">
                P
              </div>
              <span className="font-bold text-lg tracking-tight text-[#F5F4EE]">
                {AGENCY_NAME}
              </span>
            </a>

            <p className="text-sm text-[#A3A096] leading-relaxed max-w-sm mb-5">
              {AGENCY_TAGLINE}. Desenhamos presenças digitais que transmitem solidez de mercado e geram resultados comerciais práticos para marcas em crescimento.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#A3A096]">
              <span className="w-2 h-2 rounded-full bg-[#2FA882]" />
              <span>Recebendo novos projetos para este trimestre</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5F4EE] mb-3.5">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-[#A3A096]">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#F5F4EE] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contato"
                  className="text-[#2FA882] hover:underline flex items-center gap-1 font-medium pt-1"
                >
                  Solicitar Proposta
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: O Que Entregamos */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5F4EE] mb-3.5">
              Entregas
            </h4>
            <ul className="space-y-2 text-xs text-[#A3A096]">
              <li>Sites Comerciais</li>
              <li>Páginas de Vendas</li>
              <li>Plataformas & Softwares</li>
              <li>Padronização Visual</li>
              <li>Acompanhamento Contínuo</li>
            </ul>
          </div>

          {/* Col 4: Contato & Redes */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5F4EE] mb-3.5">
              Canais
            </h4>
            <ul className="space-y-2 text-xs text-[#A3A096]">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#F5F4EE] transition-colors flex items-center gap-1"
                  >
                    {social.name}
                    <ArrowUpRight className="w-3 h-3 text-[#66645E]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </motion.div>

        {/* Editorial Clean Signature */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="py-10 text-center select-none pointer-events-none"
        >
          <div className="brand-display-outline font-black tracking-tighter text-4xl sm:text-6xl md:text-7xl uppercase">
            {AGENCY_NAME} · ESTÚDIO DIGITAL
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#242320] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#A3A096]">
          <p>© {new Date().getFullYear()} {AGENCY_NAME}. Todos os direitos reservados.</p>
          <p>Design intencional, código estável e foco em resultados comerciais.</p>
        </div>

      </div>
    </footer>
  );
}
