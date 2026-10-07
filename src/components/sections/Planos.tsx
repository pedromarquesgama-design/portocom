import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Check, ArrowUpRight } from "lucide-react";

export function Planos() {
  return (
    <section id="planos" className="relative py-24 md:py-32 overflow-hidden bg-[#121211]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex mb-4">
            <Badge variant="default">
              Formatos de Trabalho
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F5F4EE] mb-6">
            Investimento Transparente, Sem Surpresas no Orçamento
          </h2>
          <p className="text-base sm:text-lg text-[#A3A096] leading-relaxed">
            Trabalhamos com escopo fechado e prazos combinados em contrato. Você sabe exatamente o que vai receber, quando vai ao ar e quanto vai custar.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* Card 1: Página Comercial */}
          <div className="rounded-xl p-7 bg-[#181816] border border-[#2A2925] flex flex-col justify-between shadow-sm hover:border-[#3D3C36] transition-all">
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-bold text-[#F5F4EE]">Página de Vendas</h3>
                <span className="text-[11px] font-semibold text-[#A3A096] px-2.5 py-0.5 rounded bg-[#1F1E1B] border border-[#262521]">
                  Validação & Campanhas
                </span>
              </div>
              <p className="text-xs text-[#A3A096] mb-6 leading-relaxed">
                Ideal para empresas que precisam de uma página rápida e convincente para receber contatos comerciais no WhatsApp.
              </p>

              {/* Price placeholder */}
              <div className="mb-6 pb-6 border-b border-[#242320]">
                <span className="text-xs text-[#A3A096] block mb-1">Investimento a partir de</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-[#F5F4EE]">
                    R$ 4.500
                  </span>
                  <span className="text-xs text-[#A3A096]">/ projeto</span>
                </div>
              </div>

              {/* Deliverables list */}
              <ul className="space-y-3 mb-8 text-xs text-[#C4C2B9]">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2FA882] shrink-0 mt-0.5" />
                  <span>Página única focada em gerar pedidos de orçamento</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2FA882] shrink-0 mt-0.5" />
                  <span>Textos revisados para responder às dúvidas do cliente</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2FA882] shrink-0 mt-0.5" />
                  <span>Abertura instantânea no celular (menos de 1 segundo)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2FA882] shrink-0 mt-0.5" />
                  <span>Integração direta com WhatsApp e e-mail da sua equipe</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2FA882] shrink-0 mt-0.5" />
                  <span>Prazo de entrega ágil: cerca de 10 a 14 dias úteis</span>
                </li>
              </ul>
            </div>

            <Button
              href="#contato"
              variant="secondary"
              size="md"
              className="w-full text-center"
            >
              Consultar Disponibilidade
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>

          {/* Card 2: Presença Institucional Completa (HIGHLIGHTED WARM OFF-WHITE CARD) */}
          <div className="rounded-xl p-7 bg-[#F4F2EC] text-[#121211] border border-[#E0DDCF] flex flex-col justify-between shadow-[0_4px_16px_rgba(0,0,0,0.18)] lg:-translate-y-2 z-10 transition-all">
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-extrabold text-[#121211]">Site Institucional</h3>
                <span className="text-[11px] font-bold text-[#145344] px-2.5 py-0.5 rounded bg-[#E4ECE7] border border-[#CADCD2]">
                  MAIS PROCURADO
                </span>
              </div>
              <p className="text-xs text-[#525049] mb-6 leading-relaxed">
                A solução definitiva para marcas que precisam transmitir autoridade inquestionável para grandes clientes e investidores.
              </p>

              {/* Price placeholder */}
              <div className="mb-6 pb-6 border-b border-[#D8D4C5]">
                <span className="text-xs text-[#6B685E] block mb-1">Investimento a partir de</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-[#121211]">
                    R$ 9.800
                  </span>
                  <span className="text-xs text-[#6B685E]">/ projeto</span>
                </div>
              </div>

              {/* Deliverables list */}
              <ul className="space-y-3 mb-8 text-xs text-[#2A2926] font-medium">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#1A5446] shrink-0 mt-0.5 font-bold" />
                  <span>Estrutura completa de páginas institucionais</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#1A5446] shrink-0 mt-0.5 font-bold" />
                  <span>Design visual 100% exclusivo feito sob medida</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#1A5446] shrink-0 mt-0.5 font-bold" />
                  <span>Otimização técnica para aparecer bem posicionado no Google</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#1A5446] shrink-0 mt-0.5 font-bold" />
                  <span>Treinamento para sua equipe atualizar textos e fotos</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#1A5446] shrink-0 mt-0.5 font-bold" />
                  <span>30 dias de acompanhamento e suporte após o ar</span>
                </li>
              </ul>
            </div>

            <Button
              href="#contato"
              variant="primary"
              size="md"
              className="w-full text-center !bg-[#121211] !text-[#F5F4EE] hover:!bg-[#22211E] shadow-md font-semibold"
            >
              Solicitar Proposta Completa
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>

          {/* Card 3: Sistemas & Sob Medida */}
          <div className="rounded-xl p-7 bg-[#181816] border border-[#2A2925] flex flex-col justify-between shadow-sm hover:border-[#3D3C36] transition-all">
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-bold text-[#F5F4EE]">Sistemas & Apps</h3>
                <span className="text-[11px] font-semibold text-[#A3A096] px-2.5 py-0.5 rounded bg-[#1F1E1B] border border-[#262521]">
                  Sob Medida
                </span>
              </div>
              <p className="text-xs text-[#A3A096] mb-6 leading-relaxed">
                Para empresas com softwares, plataformas de clientes, aplicativos ou demandas recorrentes de melhoria de produto.
              </p>

              {/* Price placeholder */}
              <div className="mb-6 pb-6 border-b border-[#242320]">
                <span className="text-xs text-[#A3A096] block mb-1">Investimento com escopo</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-[#F5F4EE]">
                    Personalizado
                  </span>
                </div>
              </div>

              {/* Deliverables list */}
              <ul className="space-y-3 mb-8 text-xs text-[#C4C2B9]">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2FA882] shrink-0 mt-0.5" />
                  <span>Desenho de telas simples e intuitivas para seus usuários</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2FA882] shrink-0 mt-0.5" />
                  <span>Testes práticos de navegação para eliminar dúvidas</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2FA882] shrink-0 mt-0.5" />
                  <span>Padronização visual para criação rápida de novos recursos</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#2FA882] shrink-0 mt-0.5" />
                  <span>Reuniões quinzenais de alinhamento com os fundadores</span>
                </li>
              </ul>
            </div>

            <Button
              href="#contato"
              variant="secondary"
              size="md"
              className="w-full text-center"
            >
              Conversar com o Especialista
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
