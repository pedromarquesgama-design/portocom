"use client";

import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { LayoutTemplate, AppWindow, ShieldCheck, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export function Pilares() {
  return (
    <section id="servicos" className="relative py-24 md:py-32 overflow-hidden bg-[#121211]/70 backdrop-blur-md border-b border-[#242320]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll-driven Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-5xl mx-auto mb-16 md:mb-20"
        >
          <div className="inline-flex mb-4">
            <Badge variant="default">
              O Que Fazemos Por Você
            </Badge>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F4EE] mb-6 whitespace-nowrap">
            IDENTIDADE DIGITAL ATRAI LUCRO REAL
          </h2>
          <p className="text-base sm:text-lg text-[#A3A096] leading-relaxed">
            Eliminamos jargões de software e ferramentas. Nossa missão é entregar ferramentas digitais que geram autoridade, facilitam o dia a dia e aumentam o faturamento da sua empresa.
          </p>
        </motion.div>

        {/* 3 Balanced Cards with Staggered Entrance */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Sites Comerciais & Páginas de Venda */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="flex"
          >
            <Card
              variant="tactile"
              className="w-full flex flex-col justify-between group hover:border-[#2FA882]/40 hover:shadow-[0_8px_30px_rgba(47,168,130,0.12)] transition-all duration-300"
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
                  <CardTitle className="text-xl md:text-2xl text-[#F5F4EE]">
                    Criação de Sites Comerciais & Páginas de Venda
                  </CardTitle>
                  <CardDescription className="text-sm text-[#A3A096] mt-2 leading-relaxed">
                    Se o seu site atual não gera pedidos de orçamento ou passa uma imagem menor do que a sua empresa é, construímos uma estrutura pensada especificamente para transmitir valor e fechar negócios.
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
                  <span><strong>Abertura instantânea:</strong> Menos de 1 segundo no celular para não perder clientes.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2FA882] shrink-0" />
                  <span>Integrado diretamente com WhatsApp</span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Card 2: Sistemas & Plataformas Intuitivas */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="flex"
          >
            <Card
              variant="tactile"
              className="w-full flex flex-col justify-between group hover:border-[#2FA882]/40 hover:shadow-[0_8px_30px_rgba(47,168,130,0.12)] transition-all duration-300"
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
                  <CardDescription className="text-sm text-[#A3A096] mt-2 leading-relaxed">
                    Seus usuários acham seu software difícil de usar ou o suporte vive sobrecarregado? Desenhamos interfaces nas quais qualquer pessoa navega com facilidade e sem precisar de manual.
                  </CardDescription>
                </CardHeader>
              </div>

              <div className="mt-7 p-4 rounded-lg bg-[#141413] border border-[#242320] space-y-2 text-xs text-[#C4C2B9]">
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
          </motion.div>

          {/* Card 3: Estabilidade, Segurança & Suporte Humano */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="flex"
          >
            <Card
              variant="tactile"
              className="w-full flex flex-col justify-between group hover:border-[#2FA882]/40 hover:shadow-[0_8px_30px_rgba(47,168,130,0.12)] transition-all duration-300"
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
                  <CardTitle className="text-xl md:text-2xl text-[#F5F4EE]">
                    Estabilidade, Segurança & Acompanhamento
                  </CardTitle>
                  <CardDescription className="text-sm text-[#A3A096] mt-2 leading-relaxed">
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
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2FA882] shrink-0" />
                  <span><strong>Infraestrutura estável:</strong> Servidores modernos com SSL e proteção contínua.</span>
                </div>
              </div>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
