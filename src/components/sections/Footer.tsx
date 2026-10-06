import React from "react";
import { AGENCY_NAME, AGENCY_TAGLINE, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { ArrowUpRight, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative pt-20 pb-12 bg-[#070707] border-t border-white/5 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#34D399]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <a href="#" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center group-hover:border-[#34D399] transition-colors">
                <svg
                  className="w-4 h-4 text-white group-hover:text-[#34D399] transition-colors"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <polygon points="12 2 19 8 19 16 12 22 5 16 5 8" />
                </svg>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                {AGENCY_NAME}
              </span>
            </a>

            <p className="text-sm text-[#A3A3A3] leading-relaxed max-w-sm mb-6">
              {AGENCY_TAGLINE}. Criamos presenças digitais completas que unem estética de produto internacional, alta taxa de conversão e código de máxima performance.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#737373]">
              <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
              <span>Disponível para novos projetos neste trimestre</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm text-[#A3A3A3]">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contato"
                  className="text-[#34D399] hover:underline flex items-center gap-1"
                >
                  Iniciar Projeto
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Soluções */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Soluções
            </h4>
            <ul className="space-y-2.5 text-sm text-[#A3A3A3]">
              <li>Landing Pages</li>
              <li>Sites Institucionais</li>
              <li>Design Systems</li>
              <li>UI/UX para SaaS</li>
              <li>Otimização Core Web Vitals</li>
            </ul>
          </div>

          {/* Col 4: Redes Sociais */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Conectar
            </h4>
            <ul className="space-y-2.5 text-sm text-[#A3A3A3]">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    {social.name}
                    <ArrowUpRight className="w-3 h-3 text-[#737373]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Giant Outlined Typography matching the reference footer */}
        <div className="py-12 md:py-16 overflow-hidden flex items-center justify-center">
          <div
            className="text-stroke-giant font-black tracking-tight text-5xl sm:text-7xl md:text-9xl lg:text-[130px] uppercase select-none pointer-events-none leading-none opacity-85 hover:opacity-100 transition-opacity duration-500"
            aria-hidden="true"
          >
            {AGENCY_NAME}
          </div>
        </div>

        {/* Lower Footer Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#737373]">
          <p>© {new Date().getFullYear()} {AGENCY_NAME}. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1.5">
            Projetado com paixão e precisão em Next.js 15 & React 19.
          </p>
        </div>

      </div>
    </footer>
  );
}
