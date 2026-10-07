"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Send, CheckCircle2, AlertCircle, Loader2, MessageCircle, Mail, ShieldCheck } from "lucide-react";

const PROJECT_TYPES = [
  "Criação de Site Comercial ou Institucional",
  "Página de Vendas / Landing Page",
  "Design de Sistema, Plataforma ou Aplicativo",
  "Redesign & Modernização de Site Existente",
  "Outro objetivo específico",
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
    <section id="contato" className="relative py-24 md:py-32 overflow-hidden bg-[#151514] border-t border-[#262521]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Human Reassurance */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="mb-4">
              <Badge variant="default">
                Iniciar Conversa
              </Badge>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F5F4EE] mb-6">
              Vamos Conversar Sobre o Seu Próximo Projeto?
            </h2>

            <p className="text-base sm:text-lg text-[#A3A096] leading-relaxed mb-8">
              Conte-nos brevemente o que sua empresa faz e o que você precisa resolver. Nossa equipe analisará sua demanda e responderá em até 24 horas úteis com uma avaliação sincera e sem pressão de vendas.
            </p>

            {/* Direct Channels */}
            <div className="space-y-3.5 w-full">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#181816] border border-[#2A2925] hover:border-[#3D3C36] transition-all group"
              >
                <div className="p-2.5 rounded-lg bg-[#1F1E1B] text-[#2FA882] border border-[#2A2925]">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#F5F4EE]">Conversa Direta no WhatsApp</h4>
                  <p className="text-xs text-[#A3A096]">Tire dúvidas pontuais direto com quem executa o projeto</p>
                </div>
              </a>

              <a
                href="mailto:contato@suaagencia.com.br"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#181816] border border-[#2A2925] hover:border-[#3D3C36] transition-all group"
              >
                <div className="p-2.5 rounded-lg bg-[#1F1E1B] text-[#A3A096] border border-[#2A2925]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#F5F4EE]">E-mail do Estúdio</h4>
                  <p className="text-xs text-[#A3A096]">contato@suaagencia.com.br</p>
                </div>
              </a>
            </div>

            <div className="mt-7 flex items-center gap-2 text-xs text-[#A3A096]">
              <ShieldCheck className="w-4 h-4 text-[#2FA882]" />
              <span>Garantia de sigilo profissional e atendimento sem burocracia</span>
            </div>
          </div>

          {/* Right Column: Grounded Tactile Form */}
          <div className="lg:col-span-7 w-full">
            <div className="rounded-xl p-6 sm:p-9 bg-[#181816] border border-[#2A2925] shadow-sm">
              {status === "success" ? (
                <div className="py-10 px-4 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[#1C1B19] border border-[#2E2D28] flex items-center justify-center text-[#2FA882] mb-5 shadow-sm">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-[#F5F4EE] mb-2">
                    Mensagem Recebida com Sucesso
                  </h3>
                  <p className="text-sm text-[#A3A096] max-w-md mx-auto leading-relaxed mb-7">
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
                      <label htmlFor="nome" className="block text-xs font-semibold text-[#C4C2B9] mb-1.5">
                        Seu Nome *
                      </label>
                      <input
                        id="nome"
                        name="nome"
                        type="text"
                        required
                        placeholder="Ex: Carlos Eduardo"
                        value={formData.nome}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#141413] border border-[#262521] text-[#F5F4EE] placeholder-[#66645E] text-sm focus:outline-none focus:border-[#2FA882] focus:ring-1 focus:ring-[#2FA882] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-[#C4C2B9] mb-1.5">
                        E-mail de Contato *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="carlos@suaempresa.com.br"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#141413] border border-[#262521] text-[#F5F4EE] placeholder-[#66645E] text-sm focus:outline-none focus:border-[#2FA882] focus:ring-1 focus:ring-[#2FA882] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="whatsapp" className="block text-xs font-semibold text-[#C4C2B9] mb-1.5">
                        WhatsApp com DDD *
                      </label>
                      <input
                        id="whatsapp"
                        name="whatsapp"
                        type="tel"
                        required
                        placeholder="(11) 99999-9999"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#141413] border border-[#262521] text-[#F5F4EE] placeholder-[#66645E] text-sm focus:outline-none focus:border-[#2FA882] focus:ring-1 focus:ring-[#2FA882] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="tipoProjeto" className="block text-xs font-semibold text-[#C4C2B9] mb-1.5">
                        O Que Sua Empresa Precisa? *
                      </label>
                      <select
                        id="tipoProjeto"
                        name="tipoProjeto"
                        value={formData.tipoProjeto}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#141413] border border-[#262521] text-[#F5F4EE] text-sm focus:outline-none focus:border-[#2FA882] focus:ring-1 focus:ring-[#2FA882] transition-colors"
                      >
                        {PROJECT_TYPES.map((type) => (
                          <option key={type} value={type} className="bg-[#181816] text-[#F5F4EE]">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="block text-xs font-semibold text-[#C4C2B9] mb-1.5">
                      Conte brevemente sobre o seu negócio e o que precisa resolver *
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      rows={4}
                      required
                      placeholder="Ex: Nossa empresa presta serviços B2B e o site atual não gera contatos suficientes. Gostaríamos de reformular para passar mais credibilidade..."
                      value={formData.mensagem}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#141413] border border-[#262521] text-[#F5F4EE] placeholder-[#66645E] text-sm focus:outline-none focus:border-[#2FA882] focus:ring-1 focus:ring-[#2FA882] transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={status === "loading"}
                    className="w-full text-center justify-center font-semibold !py-3.5"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                        Enviando Informações...
                      </>
                    ) : (
                      <>
                        Solicitar Proposta & Orçamento
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
