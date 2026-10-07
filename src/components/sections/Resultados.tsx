import React from "react";
import { Badge } from "@/components/ui/Badge";
import { TrendingUp, Clock, ShieldCheck, ArrowUpRight } from "lucide-react";

export function Resultados() {
  return (
    <section id="resultados" className="relative py-24 md:py-32 overflow-hidden bg-[#151514] border-t border-[#262521]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Clear Business Value */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="mb-4">
              <Badge variant="default">
                Impacto no Seu Negócio
              </Badge>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F5F4EE] mb-6">
              O Que Muda Quando Seu Site Deixa de Parecer Amador
            </h2>

            <p className="text-base sm:text-lg text-[#A3A096] leading-relaxed mb-8">
              Design não é apenas decoração. Um projeto bem estruturado reduz objeções de compra, poupa tempo do seu time comercial e afasta a guerra de preços.
            </p>

            {/* Checklist items */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3.5">
                <div className="p-1.5 rounded-md bg-[#1C1B19] text-[#2FA882] border border-[#2A2925] mt-0.5">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#F5F4EE]">Mais Contatos Comerciais</h4>
                  <p className="text-xs text-[#A3A096] leading-relaxed">
                    O visitante entende o valor do seu serviço em poucos segundos e sabe exatamente onde clicar para falar com você.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-1.5 rounded-md bg-[#1C1B19] text-[#2FA882] border border-[#2A2925] mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#F5F4EE]">Menos Tempo Explicando o Básico</h4>
                  <p className="text-xs text-[#A3A096] leading-relaxed">
                    Uma página clara filtra curiosos e atrai clientes que já chegam prontos para fechar contrato.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-1.5 rounded-md bg-[#1C1B19] text-[#2FA882] border border-[#2A2925] mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#F5F4EE]">Percepção de Autoridade e Segurança</h4>
                  <p className="text-xs text-[#A3A096] leading-relaxed">
                    Sua marca passa a competir no mesmo nível dos maiores participantes do seu mercado.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Tactile Metrics Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 gap-4">
            
            {/* Metric Card 1 */}
            <div className="p-6 rounded-xl bg-[#181816] border border-[#2A2925] shadow-sm hover:border-[#3D3C36] transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#2FA882] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#2FA882]" />
                  Aumento Médio em Contatos Comerciais
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#A3A096]" />
              </div>
              <div className="text-4xl sm:text-5xl font-black text-[#F5F4EE] mb-1">
                +140%
              </div>
              <p className="text-xs text-[#A3A096]">
                Média de aumento no volume de contatos qualificados recebidos via formulário e WhatsApp.
              </p>
            </div>

            {/* Metric Card 2 */}
            <div className="p-6 rounded-xl bg-[#181816] border border-[#2A2925] shadow-sm hover:border-[#3D3C36] transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C4C2B9] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C4C2B9]" />
                  Velocidade no Celular
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#A3A096]" />
              </div>
              <div className="text-4xl sm:text-5xl font-black text-[#F5F4EE] mb-1">
                &lt; 1 segundo
              </div>
              <p className="text-xs text-[#A3A096]">
                Seu site abre sem demora em qualquer conexão móvel 4G/5G, retendo visitantes impacientes.
              </p>
            </div>

            {/* Metric Card 3 */}
            <div className="p-6 rounded-xl bg-[#181816] border border-[#2A2925] shadow-sm hover:border-[#3D3C36] transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#2FA882] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#2FA882]" />
                  Compromisso com o Prazo
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#A3A096]" />
              </div>
              <div className="text-4xl sm:text-5xl font-black text-[#F5F4EE] mb-1">
                100% no prazo
              </div>
              <p className="text-xs text-[#A3A096]">
                Cronograma claro com datas de validação e entrega final definidas antes do início do projeto.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
