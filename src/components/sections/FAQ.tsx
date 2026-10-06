import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { HelpCircle } from "lucide-react";

const FAQ_ITEMS: AccordionItem[] = [
  {
    id: "faq-1",
    question: "Qual é o prazo médio de entrega de um projeto?",
    answer:
      "Para landing pages de alta conversão (plano Essencial), o prazo habitual é de 10 a 14 dias úteis. Sites institucionais completos ou projetos com UX Research e Design System (planos Profissional e Sob Medida) levam entre 3 a 5 semanas, organizados em sprints semanais com entregas contínuas para seu feedback.",
  },
  {
    id: "faq-2",
    question: "O que exatamente está incluso no escopo de desenvolvimento e design?",
    answer:
      "Cobrimos o ecossistema completo: estruturação de copy persuasiva, design de interface exclusivo no Figma com Design System, desenvolvimento front-end moderno (Next.js 15, React 19 ou Framer), SEO técnico, micro-interações fluidas, garantia de pontuação alta nos Core Web Vitals e integração com ferramentas de formulário, WhatsApp e Analytics.",
  },
  {
    id: "faq-3",
    question: "Como funciona a etapa de revisões e aprovações?",
    answer:
      "Nosso processo é dividido em marcos claros: primeiro validamos a estrutura de conteúdo e wireframe; depois o protótipo visual em alta fidelidade no Figma; e finalmente a versão interativa em ambiente de homologação. Cada fase inclui rodadas de revisão dedicadas para garantir alinhamento total antes de avançar.",
  },
  {
    id: "faq-4",
    question: "Vocês oferecem suporte e acompanhamento pós-entrega?",
    answer:
      "Sim. Todos os projetos acompanham garantia assistida de 30 dias após o lançamento para suporte técnico imediato, ajustes pontuais e instruções de uso. Também disponibilizamos contratos de manutenção contínua e evolução de UX/UI para empresas que desejam otimizar conversão continuamente.",
  },
  {
    id: "faq-5",
    question: "Quais são as formas e condições de pagamento aceitas?",
    answer:
      "Trabalhamos com entrada e saldo na aprovação final (50/50 via PIX/Boleto bancário com nota fiscal PJ), ou parcelamento em até 12x no cartão corporativo. Para projetos 'Sob Medida', o faturamento pode ser escalonado por marcos mensais de entrega.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 md:py-32 overflow-hidden bg-[#0D0D0D]/30 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex mb-4">
            <Badge variant="default" icon={<HelpCircle className="w-3.5 h-3.5 text-[#34D399]" />}>
              Dúvidas Frequentes
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-metallic mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-base sm:text-lg text-[#A3A3A3] max-w-2xl mx-auto leading-relaxed">
            Tudo o que você precisa saber sobre nosso processo de trabalho, prazos, entregáveis e formas de contratação.
          </p>
        </div>

        {/* Accordion Component */}
        <Accordion items={FAQ_ITEMS} defaultOpenId="faq-1" />

        {/* Support callout */}
        <div className="mt-12 p-6 rounded-2xl bg-[#171717]/80 border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white">Ficou com alguma dúvida específica?</h4>
            <p className="text-xs text-[#A3A3A3]">Nossa equipe responde em poucos minutos no WhatsApp ou e-mail.</p>
          </div>
          <a
            href="#contato"
            className="px-5 py-2.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all shrink-0 cursor-pointer"
          >
            Tirar Dúvida Direta
          </a>
        </div>

      </div>
    </section>
  );
}
