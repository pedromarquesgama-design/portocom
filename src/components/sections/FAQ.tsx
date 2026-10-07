import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";

const FAQ_ITEMS: AccordionItem[] = [
  {
    id: "faq-1",
    question: "Não entendo de tecnologia nem de código. Como funciona o processo?",
    answer:
      "Você não precisa entender de termos técnicos. Cuidamos de toda a engenharia e design. Nossas conversas são 100% focadas nos seus objetivos comerciais: quem é o seu cliente, o que você vende e o que precisa ser transmitido. Apresentamos cada etapa visualmente em telas simples para você validar com tranquilidade.",
  },
  {
    id: "faq-2",
    question: "Eu preciso já ter os textos e as fotos prontos para começar?",
    answer:
      "Não. Se você já tiver materiais, nós aproveitamos e refinamos. Caso não tenha, nós organizamos todo o roteiro de conteúdo, os argumentos de venda e as imagens do projeto para que a mensagem da sua empresa fique impecável.",
  },
  {
    id: "faq-3",
    question: "Qual é o prazo de entrega e como acompanho o andamento?",
    answer:
      "Para páginas comerciais de conversão, o prazo costuma ser de 10 a 14 dias úteis. Para sites institucionais completos, entre 3 a 5 semanas. Você terá um canal direto conosco no WhatsApp com atualizações regulares para acompanhar cada avanço sem burocracia.",
  },
  {
    id: "faq-4",
    question: "E se eu precisar fazer pequenas alterações depois que o site estiver no ar?",
    answer:
      "Todos os nossos projetos acompanham 30 dias de suporte e garantia assistida após o lançamento para qualquer ajuste. Também deixamos a estrutura organizada para que pequenas trocas de textos e imagens possam ser feitas pela sua equipe com facilidade.",
  },
  {
    id: "faq-5",
    question: "Como funcionam as formas de pagamento e emissão de nota fiscal?",
    answer:
      "Emitimos nota fiscal eletrônica para pessoa jurídica (PJ). As condições padrão são 50% de entrada no início e 50% apenas na aprovação final do projeto antes da publicação (via PIX ou boleto bancário). Também disponibilizamos parcelamento no cartão de crédito corporativo.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 md:py-32 overflow-hidden bg-[#121211]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex mb-4">
            <Badge variant="default">
              Perguntas Frequentes
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F5F4EE] mb-6">
            Tire Suas Dúvidas Sem Complicação
          </h2>
          <p className="text-base sm:text-lg text-[#A3A096] max-w-2xl mx-auto leading-relaxed">
            Respostas diretas e transparentes sobre prazos, processo de trabalho e garantias.
          </p>
        </div>

        {/* Accordion Component */}
        <Accordion items={FAQ_ITEMS} defaultOpenId="faq-1" />

        {/* Direct question box */}
        <div className="mt-12 p-6 rounded-xl bg-[#181816] border border-[#2A2925] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-[#F5F4EE]">Tem alguma dúvida específica sobre o seu caso?</h4>
            <p className="text-xs text-[#A3A096] mt-0.5">Respondemos com clareza e sem compromisso pelo WhatsApp.</p>
          </div>
          <a
            href="#contato"
            className="px-4 py-2.5 rounded-lg text-xs font-semibold bg-[#1F1E1B] hover:bg-[#282723] text-[#F5F4EE] border border-[#2E2D28] transition-all shrink-0 cursor-pointer"
          >
            Fazer Pergunta Direta
          </a>
        </div>

      </div>
    </section>
  );
}
