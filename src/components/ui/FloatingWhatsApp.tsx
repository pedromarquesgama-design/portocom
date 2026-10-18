"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';

/** Speech-bubble silhouette (circle + tail) shared by the halo and the green bubble. */
const BUBBLE_TAIL = 'M0.157 11.892c0 2.096.547 4.142 1.588 5.945L0.057 24l6.305-1.654z';

/** Handset that sits inside the bubble. */
const HANDSET =
  'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z';

const WhatsAppLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="-2.7 -1.7 27.4 27.6"
    className={className}
    role="img"
    aria-label="WhatsApp"
    focusable="false"
  >
    <defs>
      <linearGradient id="wa-bubble-green" x1="0.08" y1="0.02" x2="0.92" y2="0.98">
        <stop offset="0" stopColor="#4CDF7C" />
        <stop offset="0.5" stopColor="#26B85A" />
        <stop offset="1" stopColor="#149645" />
      </linearGradient>
      <filter id="wa-handset-shadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow
          dx="0.16"
          dy="0.22"
          stdDeviation="0.16"
          floodColor="#0A5C2C"
          floodOpacity="0.45"
        />
      </filter>
    </defs>

    {/* Halo / outline behind the bubble */}
    <g
      transform="translate(-0.95 0.15) translate(12.05 11.892) scale(1.13) translate(-12.05 -11.892)"
      fill="#D8DFE8"
    >
      <circle cx="12.05" cy="11.892" r="11.892" />
      <path d={BUBBLE_TAIL} />
    </g>

    {/* Green bubble + tail */}
    <circle cx="12.05" cy="11.892" r="11.892" fill="url(#wa-bubble-green)" />
    <path d={BUBBLE_TAIL} fill="url(#wa-bubble-green)" />

    {/* Handset */}
    <path d={HANDSET} fill="#FFFFFF" filter="url(#wa-handset-shadow)" />
  </svg>
);

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleStartWhatsApp = (msg: string) => {
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/5573999943583?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end font-sans">
      {/* Popover Preview */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 rounded-2xl border border-white/[0.08] bg-[#121217] p-4 shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#25D366] shadow-[0_0_8px_rgba(37,211,102,0.8)]"></div>
              <span className="text-xs font-heading font-bold text-[#FDFDFC]">Canal Comercial</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#8E8E93] hover:text-[#FDFDFC] p-1 rounded cursor-pointer transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-xs text-[#B8B8C2] mt-2.5 leading-relaxed">
            Olá! Escolha uma das soluções abaixo para conversar diretamente conosco:
          </p>

          <div className="mt-3 space-y-1.5">
            <button
              onClick={() =>
                handleStartWhatsApp('Olá! Gostaria de conversar sobre Criação de Sites.')
              }
              className="w-full text-left p-2.5 rounded-lg bg-[#1A1A24] hover:bg-[#262638] text-xs text-[#FDFDFC] border border-white/[0.06] hover:border-white/20 transition-all cursor-pointer"
            >
              Criação de Sites
            </button>
            <button
              onClick={() =>
                handleStartWhatsApp('Olá! Gostaria de conversar sobre Reforma de Sites Existentes.')
              }
              className="w-full text-left p-2.5 rounded-lg bg-[#1A1A24] hover:bg-[#262638] text-xs text-[#FDFDFC] border border-white/[0.06] hover:border-white/20 transition-all cursor-pointer"
            >
              Reforma de Sites Existentes
            </button>
            <button
              onClick={() =>
                handleStartWhatsApp('Olá! Gostaria de conversar sobre Logotipo & Identidade Visual.')
              }
              className="w-full text-left p-2.5 rounded-lg bg-[#1A1A24] hover:bg-[#262638] text-xs text-[#FDFDFC] border border-white/[0.06] hover:border-white/20 transition-all cursor-pointer"
            >
              Logotipo &amp; Identidade Visual
            </button>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.45)] cursor-pointer"
        aria-label="Atendimento via WhatsApp"
        aria-expanded={isOpen}
      >
        <WhatsAppLogo className="w-full h-full" />
      </button>
    </div>
  );
};
