"use client";

import React from "react";
import { AGENCY_NAME, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const FOOTER_NAV_LINKS = [
  { label: "Nosso Trabalho", href: "#trabalho" },
  { label: "Planos Acessíveis", href: "#planos" },
  { label: "Contato", href: "#contato" },
];

const FOOTER_SOLUTIONS = [
  "Criação de Sites",
  "Reforma de Sites Existentes",
  "Logotipo & Identidade Visual",
];

export function Footer() {
  return (
    <footer
      className="relative w-full border-t border-[#F59E0B]/40 bg-[rgba(10,10,14,0.72)] backdrop-blur-[16px] backdrop-saturate-[160%] shadow-[0_-8px_32px_rgba(0,0,0,0.45)] overflow-hidden text-[#FDFDFC]"
      style={{ WebkitBackdropFilter: "blur(16px) saturate(160%)" }}
    >
      {/* Golden top divisor */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent shadow-[0_0_16px_rgba(245,158,11,0.65)]"
      />

      {/* Centered content wrapper */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full"
        >
          {/* Main Content Grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column (col-span-5): Studio Brand & Bio */}
            <div className="md:col-span-5 flex flex-col items-start">
              <div>
                {/* Studio Logo (compensates for 34.16% transparent top canvas so visible logo top aligns with column headers) */}
                <div className="mb-4 sm:mb-5 flex items-start">
                  <img
                    src="/images/logo-portocom.png"
                    alt={`${AGENCY_NAME} — Design & Engenharia Digital`}
                    className="h-16 sm:h-20 lg:h-24 w-auto object-contain mix-blend-screen select-none -ml-0.5 -mt-[25px] sm:-mt-[31px] lg:-mt-[37px]"
                  />
                </div>

                {/* Condensed Bio */}
                <p className="text-sm text-white/70 leading-relaxed max-w-sm font-sans">
                  Engenharia digital & design estratégico de alto impacto para marcas em expansão.
                </p>
              </div>
            </div>

            {/* Right Columns (col-span-7 subdivided into 3 equal columns) */}
            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 lg:gap-8 items-start">
              {/* Sub-col 1: Navegação */}
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#F59E0B] font-mono mb-4 block font-semibold leading-none">
                  Navegação
                </span>
                <ul className="space-y-2.5 text-sm">
                  {FOOTER_NAV_LINKS.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-1"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sub-col 2: Soluções */}
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#F59E0B] font-mono mb-4 block font-semibold leading-none">
                  Soluções
                </span>
                <ul className="space-y-2.5 text-sm text-white/70">
                  {FOOTER_SOLUTIONS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Sub-col 3: Canais */}
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#F59E0B] font-mono mb-4 block font-semibold leading-none">
                  Canais
                </span>
                <ul className="space-y-2.5 text-sm">
                  {SOCIAL_LINKS.map((social) => (
                    <li key={social.name}>
                      <a
                        href={social.href}
                        target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                        rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                        className="text-white/70 hover:text-white transition-colors duration-200 flex items-center gap-1"
                      >
                        <span>{social.name}</span>
                        <ArrowUpRight className="w-3 h-3 text-[#F59E0B]" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar Separator with Golden Divisor */}
          <div className="relative z-10 mt-10 border-t border-[#F59E0B]/30 pt-6 flex items-center justify-center text-center text-xs text-white/70 font-mono">
            <p>© {new Date().getFullYear()} {AGENCY_NAME}. Todos os direitos reservados.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
