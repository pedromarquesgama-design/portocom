"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Send, CheckCircle2, AlertCircle, Loader2, Mail, ShieldCheck, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

function WhatsAppIcon({ className = "w-5 h-5 md:w-6 md:h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

const PROJECT_TYPES = [
  "Criar um site novo do zero",
  "Reformar e melhorar meu site atual",
  "Criar o logotipo e visual da minha marca",
  "Pacote Completo (Site + Visual da Marca)",
  "Ainda tenho dúvidas / Outro assunto",
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    tipoProjeto: PROJECT_TYPES[0],
    mensagem: "",
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nome.trim() || formData.nome.length < 2) {
      setErrorMessage("Por favor, preencha seu nome completo.");
      setStatus("error");
      return;
    }

    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Por favor, informe um endereço de e-mail válido.");
      setStatus("error");
      return;
    }

    if (!formData.whatsapp.trim() || formData.whatsapp.length < 8) {
      setErrorMessage("Por favor, informe um número de WhatsApp para contato.");
      setStatus("error");
      return;
    }

    if (!formData.mensagem.trim() || formData.mensagem.length < 5) {
      setErrorMessage("Conte-nos um pouco sobre a sua empresa e o que você precisa.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Erro ao enviar a mensagem.");
      }

      setStatus("success");
      setFormData({
        nome: "",
        email: "",
        whatsapp: "",
        tipoProjeto: PROJECT_TYPES[0],
        mensagem: "",
        honeypot: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Falha na comunicação com o servidor. Tente novamente."
      );
    }
  };

  return (
    <section id="contato" className="relative py-12 md:py-16 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">
          
          {/* Left Column: Human Reassurance with Smooth Slide Entrance */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-6"
          >
            <h2 className="section-title text-2xl sm:text-3xl lg:text-[26px] xl:text-[30px] font-heading font-extrabold mb-5 tracking-tight uppercase leading-[1.2] text-[#FDFDFC]">
              <span className="block text-[#FDFDFC] whitespace-nowrap">MANDE UMA MENSAGEM E</span>
              <span className="block text-[#F59E0B] whitespace-nowrap mt-1">COLOQUE SEU SITE NO AR</span>
            </h2>

            <p className="section-description leading-relaxed mb-8 text-[#B8B8C2] font-sans">
              Conte um pouco sobre a sua área de atuação e o que você precisa. Retornamos seu contato em até 24 horas pelo WhatsApp para alinharmos os próximos passos, de forma simples e sem compromisso.
            </p>

            {/* Direct Channels */}
            <div className="space-y-3.5 w-full">
              <a
                href="https://wa.me/5573999943583"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#121217] border border-white/[0.08] border-b-[#F59E0B]/40 hover:border-white/20 hover:border-b-[#F59E0B]/70 transition-colors group"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center transition-all duration-300 bg-zinc-900/90 border border-white/10 text-amber-400 group-hover:bg-amber-500/15 group-hover:border-amber-500/50 group-hover:shadow-[0_0_18px_rgba(245,158,11,0.2)] shrink-0">
                  <WhatsAppIcon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-heading font-semibold text-[#FDFDFC]">Conversar pelo WhatsApp</h4>
                  <p className="text-xs text-[#8E8E93]">Chame agora e tire suas dúvidas.</p>
                </div>
              </a>

              <a
                href="mailto:joaomarquesgama@hotmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#121217] border border-white/[0.08] border-b-[#F59E0B]/40 hover:border-white/20 hover:border-b-[#F59E0B]/70 transition-colors group"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center transition-all duration-300 bg-zinc-900/90 border border-white/10 text-amber-400 group-hover:bg-amber-500/15 group-hover:border-amber-500/50 group-hover:shadow-[0_0_18px_rgba(245,158,11,0.2)] shrink-0">
                  <Mail className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-heading font-semibold text-[#FDFDFC]">E-mail de Contato</h4>
                  <p className="text-xs text-[#8E8E93]">joaomarquesgama@hotmail.com</p>
                </div>
              </a>
            </div>

            <div className="mt-7 flex items-center gap-2 text-xs text-[#8E8E93]">
              <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
              <span>Garantia de sigilo profissional e atendimento sem burocracia</span>
            </div>
          </motion.div>

          {/* Right Column: Grounded Tactile Form */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 w-full"
          >
            <div className="rounded-xl p-6 sm:p-9 bg-[#121217] border border-white/[0.08] border-t-[#F59E0B]/40 border-b-[#F59E0B]/40 shadow-xl">
              {status === "success" ? (
                <div className="py-10 px-4 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[#1A1A24] border border-[#F59E0B]/30 flex items-center justify-center text-[#F59E0B] mb-5 shadow-[0_0_16px_rgba(245,158,11,0.2)]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-[#FDFDFC] mb-2">
                    Mensagem Recebida com Sucesso
                  </h3>
                  <p className="text-sm text-[#B8B8C2] max-w-md mx-auto leading-relaxed mb-7 font-sans">
                    Obrigado pelo contato! Nossa equipe já está analisando suas informações e retornará o contato pelo WhatsApp ou e-mail com uma estimativa de prazo e orçamento.
                  </p>
                  <Button
                    onClick={() => setStatus("idle")}
                    variant="secondary"
                    size="md"
                    type="button"
                  >
                    Enviar Outra Mensagem
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {status === "error" && (
                    <div className="p-3.5 rounded-lg bg-red-950/20 border border-red-900/40 text-red-300 text-xs sm:text-sm flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nome" className="block text-xs font-mono font-medium uppercase tracking-wider text-[#B8B8C2] mb-1.5">
                        SEU NOME *
                      </label>
                      <input
                        id="nome"
                        name="nome"
                        type="text"
                        required
                        placeholder="Ex: Carlos Eduardo"
                        value={formData.nome}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0A0A0E] border border-white/[0.08] border-b-[#F59E0B]/40 text-[#FDFDFC] placeholder-[#8E8E93]/60 text-sm focus:outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono font-medium uppercase tracking-wider text-[#B8B8C2] mb-1.5">
                        E-MAIL DE CONTATO *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="Ex: carlos@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0A0A0E] border border-white/[0.08] border-b-[#F59E0B]/40 text-[#FDFDFC] placeholder-[#8E8E93]/60 text-sm focus:outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="whatsapp" className="block text-xs font-mono font-medium uppercase tracking-wider text-[#B8B8C2] mb-1.5">
                        WHATSAPP COM DDD *
                      </label>
                      <input
                        id="whatsapp"
                        name="whatsapp"
                        type="tel"
                        required
                        placeholder="(73) 99999-9999"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0A0A0E] border border-white/[0.08] border-b-[#F59E0B]/40 text-[#FDFDFC] placeholder-[#8E8E93]/60 text-sm focus:outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="tipoProjeto" className="block text-xs font-mono font-medium uppercase tracking-wider text-[#B8B8C2] mb-1.5">
                        O QUE VOCÊ PRECISA HOJE? *
                      </label>
                      <select
                        id="tipoProjeto"
                        name="tipoProjeto"
                        value={formData.tipoProjeto}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0A0A0E] border border-white/[0.08] border-b-[#F59E0B]/40 text-[#FDFDFC] text-sm focus:outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] transition-colors"
                      >
                        {PROJECT_TYPES.map((type) => (
                          <option key={type} value={type} className="bg-[#121217] text-[#FDFDFC]">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="block text-xs font-mono font-medium uppercase tracking-wider text-[#B8B8C2] mb-1.5">
                      CONTE UM POUCO SOBRE O SEU TRABALHO E O QUE VOCÊ BUSCA *
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      rows={4}
                      required
                      placeholder="Ex: Sou médico e quero uma página profissional para apresentar e divulgar meu trabalho."
                      value={formData.mensagem}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0A0A0E] border border-white/[0.08] border-b-[#F59E0B]/40 text-[#FDFDFC] placeholder-[#8E8E93]/60 text-sm focus:outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={status === "loading"}
                    className="w-full text-center justify-center font-heading font-bold !py-3.5 cursor-pointer"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                        Enviando Informações...
                      </>
                    ) : (
                      <>
                        Quero colocar meu site no ar
                        <ArrowUpRight className="w-4 h-4 ml-1.5 stroke-[2.5]" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
