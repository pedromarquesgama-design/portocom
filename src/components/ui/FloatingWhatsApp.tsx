"use client";

import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleStartWhatsApp = (msg: string) => {
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/5511999999999?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Popover Preview */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 rounded-2xl border border-neutral-800 bg-[#0d1117] p-4 shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
              <span className="text-xs font-bold text-white">Canal Comercial Vértice</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-white p-1 rounded cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-xs text-neutral-300 mt-2.5 leading-relaxed">
            Olá! Escolha um dos 4 serviços ou inicie uma conversa para receber seu diagnóstico:
          </p>

          <div className="mt-3 space-y-1.5">
            <button
              onClick={() =>
                handleStartWhatsApp('Olá! Gostaria de uma proposta para Criação de Site Comercial & Páginas de Venda.')
              }
              className="w-full text-left p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-[11px] text-neutral-200 border border-neutral-800 transition-colors cursor-pointer"
            >
              01. Criação de Sites &amp; Páginas de Venda
            </button>
            <button
              onClick={() =>
                handleStartWhatsApp('Olá! Gostaria de alinhar o Branding & Identidade Visual da minha empresa.')
              }
              className="w-full text-left p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-[11px] text-neutral-200 border border-neutral-800 transition-colors cursor-pointer"
            >
              02. Branding &amp; Identidade Visual
            </button>
            <button
              onClick={() =>
                handleStartWhatsApp('Olá! Preciso de um Redesign Estratégico para otimizar conversão sem perder SEO.')
              }
              className="w-full text-left p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-[11px] text-neutral-200 border border-neutral-800 transition-colors cursor-pointer"
            >
              03. Redesign Estratégico &amp; Performance
            </button>
            <button
              onClick={() =>
                handleStartWhatsApp('Olá! Quero engenharia de alta performance com carregamento em menos de 1 segundo.')
              }
              className="w-full text-left p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-[11px] text-neutral-200 border border-neutral-800 transition-colors cursor-pointer"
            >
              04. Alta Performance &amp; Integrações
            </button>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-400 text-neutral-950 flex items-center justify-center shadow-[0_4px_25px_rgba(16,185,129,0.4)] hover:scale-105 transition-all cursor-pointer"
        aria-label="Atendimento via WhatsApp"
      >
        <MessageCircle className="w-6 h-6 stroke-[2.2]" />
      </button>
    </div>
  );
};
