"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles, MessageCircle, Mail } from "lucide-react";

const PROJECT_TYPES = [
  "Landing Page de Alta Conversão",
  "Site Institucional Multipáginas",
  "UX/UI & Design System no Figma",
  "Interface para SaaS ou Aplicativo",
  "Projeto Sob Medida / Outro",
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

    // Client-side quick check
    if (!formData.nome.trim() || formData.nome.length < 2) {
      setErrorMessage("Por favor, preencha seu nome completo.");
      setStatus("error");
      return;
    }

    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Por favor, insira um endereço de e-mail corporativo válido.");
      setStatus("error");
      return;
    }

    if (!formData.whatsapp.trim() || formData.whatsapp.length < 8) {
      setErrorMessage("Por favor, informe um número de WhatsApp válido para contato.");
      setStatus("error");
      return;
    }

    if (!formData.mensagem.trim() || formData.mensagem.length < 5) {
      setErrorMessage("Conte-nos um pouco sobre seu projeto na mensagem.");
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
    <section id="contato" className="relative py-24 md:py-32 overflow-hidden bg-[#0A0A0A]">
      {/* Ambient background glows */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#34D399]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute right-1/4 top-1/3 w-[450px] h-[450px] bg-[#60A5FA]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Call to Action */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="mb-4">
              <Badge variant="default" icon={<Sparkles className="w-3.5 h-3.5 text-[#34D399]" />}>
                Vamos Conversar
              </Badge>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-metallic mb-6">
              Pronto Para Elevar o Nível do Seu Produto?
            </h2>

            <p className="text-base sm:text-lg text-[#A3A3A3] leading-relaxed mb-8">
              Preencha o formulário com os detalhes do seu projeto. Nossa equipe de engenharia e design analisará seu desafio e entrará em contato em até 2 horas com uma estimativa de escopo e orçamento.
            </p>

            {/* Direct Quick Channels */}
            <div className="space-y-4 w-full">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#171717]/80 border border-white/5 hover:border-[#34D399]/40 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-[#34D399]/15 text-[#34D399] group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Contato Imediato por WhatsApp</h4>
                  <p className="text-xs text-[#A3A3A3]">Tire dúvidas em tempo real com nossos especialistas</p>
                </div>
              </a>

              <a
                href="mailto:contato@suaagencia.com.br"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#171717]/80 border border-white/5 hover:border-[#60A5FA]/40 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-[#60A5FA]/15 text-[#60A5FA] group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">E-mail Corporativo</h4>
                  <p className="text-xs text-[#A3A3A3]">contato@suaagencia.com.br</p>
                </div>
              </a>
            </div>

            {/* Safety Guarantee */}
            <div className="mt-8 flex items-center gap-2 text-xs text-[#737373]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
              <span>Garantia de confidencialidade e resposta rápida</span>
            </div>
          </div>

          {/* Right Column: Dark Glass Form */}
          <div className="lg:col-span-7 w-full">
            <div className="relative rounded-3xl p-6 sm:p-10 bg-[#171717]/90 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              {/* Subtle top border sheen */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              {status === "success" ? (
                <div className="py-12 px-4 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#34D399]/20 border border-[#34D399]/40 flex items-center justify-center text-[#34D399] mb-6 shadow-[0_0_30px_rgba(52,211,153,0.3)] animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Mensagem Recebida com Sucesso!
                  </h3>
                  <p className="text-sm text-[#A3A3A3] max-w-md mx-auto leading-relaxed mb-8">
                    Obrigado pelo contato! Nossa equipe técnica já está analisando as informações e responderá pelo WhatsApp ou e-mail nas próximas horas.
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
                  {/* Honeypot field (hidden for anti-spam) */}
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

                  {/* Status Error Alert */}
                  {status === "error" && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs sm:text-sm flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Field: Nome & E-mail */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nome" className="block text-xs font-semibold uppercase tracking-wider text-[#A3A3A3] mb-2">
                        Seu Nome Completo *
                      </label>
                      <input
                        id="nome"
                        name="nome"
                        type="text"
                        required
                        placeholder="Ex: Ana Clara"
                        value={formData.nome}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#0F0F0F] border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#34D399] focus:ring-1 focus:ring-[#34D399] transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#A3A3A3] mb-2">
                        E-mail Corporativo *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="ana@suaempresa.com.br"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#0F0F0F] border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#34D399] focus:ring-1 focus:ring-[#34D399] transition-all"
                      />
                    </div>
                  </div>

                  {/* Field: WhatsApp & Tipo de Projeto */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="whatsapp" className="block text-xs font-semibold uppercase tracking-wider text-[#A3A3A3] mb-2">
                        WhatsApp / Celular *
                      </label>
                      <input
                        id="whatsapp"
                        name="whatsapp"
                        type="tel"
                        required
                        placeholder="(11) 99999-9999"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#0F0F0F] border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#34D399] focus:ring-1 focus:ring-[#34D399] transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="tipoProjeto" className="block text-xs font-semibold uppercase tracking-wider text-[#A3A3A3] mb-2">
                        Tipo de Projeto *
                      </label>
                      <select
                        id="tipoProjeto"
                        name="tipoProjeto"
                        value={formData.tipoProjeto}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#0F0F0F] border border-white/10 text-white text-sm focus:outline-none focus:border-[#34D399] focus:ring-1 focus:ring-[#34D399] transition-all"
                      >
                        {PROJECT_TYPES.map((type) => (
                          <option key={type} value={type} className="bg-[#171717] text-white">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Field: Mensagem / Detalhes */}
                  <div>
                    <label htmlFor="mensagem" className="block text-xs font-semibold uppercase tracking-wider text-[#A3A3A3] mb-2">
                      Fale um pouco sobre o projeto e seus objetivos *
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      rows={4}
                      required
                      placeholder="Descreva o que sua empresa precisa, referências visuais que você admira ou prazos desejados..."
                      value={formData.mensagem}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#0F0F0F] border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#34D399] focus:ring-1 focus:ring-[#34D399] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="emerald"
                    size="lg"
                    disabled={status === "loading"}
                    className="w-full text-center justify-center font-bold !py-4 shadow-[0_0_25px_rgba(52,211,153,0.3)] hover:shadow-[0_0_35px_rgba(52,211,153,0.45)]"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin mr-2" />
                        Enviando Informações...
                      </>
                    ) : (
                      <>
                        Enviar Solicitação de Orçamento
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
