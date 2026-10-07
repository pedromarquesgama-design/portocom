import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { LayoutTemplate, AppWindow, Palette, ShieldCheck, CheckCircle2 } from "lucide-react";

export function Pilares() {
  return (
    <section id="servicos" className="relative py-24 md:py-32 overflow-hidden bg-[#121211]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header in Plain Language */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex mb-4">
            <Badge variant="default">
              O Que Fazemos Por Você
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F5F4EE] mb-6">
            Serviços Desenhados Para Resolver Problemas Reais do Seu Negócio
          </h2>
          <p className="text-base sm:text-lg text-[#A3A096] leading-relaxed">
            Eliminamos jargões de software e ferramentas. Nossa missão é entregar ferramentas digitais que geram autoridade, facilitam o dia a dia e aumentam o faturamento da sua empresa.
          </p>
        </div>

        {/* 4 Grounded Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Sites Comerciais & Páginas de Venda (Col span 7) */}
          <Card
            variant="tactile"
            className="md:col-span-7 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="p-2 rounded-md bg-[#1C1B19] text-[#2FA882] border border-[#2A2925]">
                  <LayoutTemplate className="w-5 h-5" />
                </span>
                <span className="text-xs uppercase font-bold tracking-wider text-[#2FA882]">
                  Mais Clientes & Fechamentos
                </span>
              </div>
              <CardHeader className="!p-0 mb-4">
                <CardTitle className="text-2xl md:text-3xl text-[#F5F4EE]">
                  Criação de Sites Comerciais & Páginas de Venda
                </CardTitle>
                <CardDescription className="text-base text-[#A3A096] mt-2">
                  Se o seu site atual não gera pedidos de orçamento ou passa uma imagem menor do que a sua empresa é, nós construímos uma estrutura pensada especificamente para transmitir valor e fechar negócios.
                </CardDescription>
              </CardHeader>
            </div>

            {/* Plain Deliverables Box */}
            <div className="mt-7 p-4 rounded-lg bg-[#141413] border border-[#242320] space-y-2.5 text-xs text-[#C4C2B9]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2FA882] shrink-0" />
                <span><strong>Roteiro claro:</strong> Responde às dúvidas do visitante antes que ele decida ir embora.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2FA882] shrink-0" />
                <span><strong>Abertura instantânea:</strong> Menos de 1 segundo no celular para não perder clientes impacientes.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2FA882] shrink-0" />
                <span><strong>Pronto para anúncios:</strong> Integrado diretamente com WhatsApp e ferramentas de captação.</span>
              </div>
            </div>
          </Card>

          {/* Card 2: Sistemas & Plataformas Intuitivas (Col span 5) */}
          <Card
            variant="tactile"
            className="md:col-span-5 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="p-2 rounded-md bg-[#1C1B19] text-[#2FA882] border border-[#2A2925]">
                  <AppWindow className="w-5 h-5" />
                </span>
                <span className="text-xs uppercase font-bold tracking-wider text-[#2FA882]">
                  Operação Simples
                </span>
              </div>
              <CardHeader className="!p-0 mb-4">
                <CardTitle className="text-xl md:text-2xl text-[#F5F4EE]">
                  Design de Sistemas, Aplicativos & Portais
                </CardTitle>
                <CardDescription className="text-sm text-[#A3A096] mt-1">
                  Seus usuários acham seu software difícil de usar ou o suporte vive sobrecarregado? Desenhamos interfaces nas quais qualquer pessoa navega sem precisar de manual.
                </CardDescription>
              </CardHeader>
            </div>

            <div className="mt-6 p-4 rounded-lg bg-[#141413] border border-[#242320] space-y-2 text-xs text-[#C4C2B9]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2FA882] shrink-0" />
                <span>Telas organizadas e sem poluição visual</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2FA882] shrink-0" />
                <span>Menos chamados de suporte técnico</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2FA882] shrink-0" />
                <span>Maior retenção e satisfação dos usuários</span>
              </div>
            </div>
          </Card>

          {/* Card 3: Identidade & Padronização (Col span 5) */}
          <Card
            variant="tactile"
            className="md:col-span-5 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="p-2 rounded-md bg-[#1C1B19] text-[#2FA882] border border-[#2A2925]">
                  <Palette className="w-5 h-5" />
                </span>
                <span className="text-xs uppercase font-bold tracking-wider text-[#2FA882]">
                  Credibilidade de Marca
                </span>
              </div>
              <CardHeader className="!p-0 mb-4">
                <CardTitle className="text-xl md:text-2xl text-[#F5F4EE]">
                  Identidade Visual & Padronização
                </CardTitle>
                <CardDescription className="text-sm text-[#A3A096] mt-1">
                  Padronizamos as cores, tipografias e telas da sua empresa para que seu produto transmita o valor de uma empresa madura e líder de mercado.
                </CardDescription>
              </CardHeader>
            </div>

            <div className="mt-6 p-4 rounded-lg bg-[#141413] border border-[#242320] space-y-2 text-xs text-[#C4C2B9]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2FA882] shrink-0" />
                <span>Consistência em todos os canais digitais</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2FA882] shrink-0" />
                <span>Manual visual simples para seu time interno</span>
              </div>
            </div>
          </Card>

          {/* Card 4: Estabilidade, Segurança & Suporte Humano (Col span 7) */}
          <Card
            variant="tactile"
            className="md:col-span-7 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="p-2 rounded-md bg-[#1C1B19] text-[#2FA882] border border-[#2A2925]">
                  <ShieldCheck className="w-5 h-5" />
                </span>
                <span className="text-xs uppercase font-bold tracking-wider text-[#2FA882]">
                  Paz de Espírito
                </span>
              </div>
              <CardHeader className="!p-0 mb-4">
                <CardTitle className="text-2xl md:text-3xl text-[#F5F4EE]">
                  Estabilidade, Segurança & Acompanhamento Contínuo
                </CardTitle>
                <CardDescription className="text-base text-[#A3A096] mt-2">
                  Você não precisa se preocupar com servidores, travamentos ou códigos desatualizados. Cuidamos da estabilidade técnica e mantemos canal direto com você para ajustes e melhorias.
                </CardDescription>
              </CardHeader>
            </div>

            <div className="mt-7 p-4 rounded-lg bg-[#141413] border border-[#242320] space-y-2.5 text-xs text-[#C4C2B9]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2FA882] shrink-0" />
                <span><strong>Garantia pós-entrega:</strong> 30 dias de acompanhamento assistido após o lançamento.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2FA882] shrink-0" />
                <span><strong>Canal direto no WhatsApp:</strong> Sem abrir tickets burocráticos ou falar com robôs.</span>
              </div>
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
}
