import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

// Simple in-memory rate limiter per IP (max 5 requests per 10 minutes)
const rateLimitMap = new Map<string, { count: number; expiresAt: number }>();

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.expiresAt) {
    rateLimitMap.set(ip, { count: 1, expiresAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  entry.count += 1;
  return true;
}

// Zod schema for input validation
const contactSchema = z.object({
  nome: z
    .string()
    .min(2, "O nome deve conter pelo menos 2 caracteres.")
    .max(100, "O nome não pode exceder 100 caracteres.")
    .trim(),
  email: z
    .string()
    .email("Por favor, insira um endereço de e-mail corporativo válido.")
    .trim()
    .toLowerCase(),
  whatsapp: z
    .string()
    .min(8, "Informe um número de WhatsApp ou telefone válido.")
    .max(25, "Número de contato muito longo.")
    .trim(),
  tipoProjeto: z
    .string()
    .min(2, "Selecione o tipo de projeto pretendido.")
    .trim(),
  mensagem: z
    .string()
    .min(5, "A descrição do projeto deve conter pelo menos 5 caracteres.")
    .max(3000, "A mensagem não pode exceder 3.000 caracteres.")
    .trim(),
  honeypot: z.string().optional(), // Anti-spam field
});

// String sanitizer against HTML/script injection
function sanitize(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  try {
    // 1. IP identification & rate limiting
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown-ip";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Muitas tentativas em pouco tempo. Por favor, aguarde alguns minutos antes de enviar novamente.",
        },
        { status: 429 }
      );
    }

    // 2. Parse request body
    const body = await req.json();

    // 3. Honeypot check (anti-bot)
    if (body.honeypot && body.honeypot.trim().length > 0) {
      // Silently accept bots to avoid bot retraining
      return NextResponse.json(
        { success: true, message: "Mensagem recebida com sucesso!" },
        { status: 200 }
      );
    }

    // 4. Validate with Zod
    const validationResult = contactSchema.safeParse(body);
    if (!validationResult.success) {
      const firstErrorMessage =
        validationResult.error.errors[0]?.message || "Dados do formulário inválidos.";
      return NextResponse.json(
        { success: false, error: firstErrorMessage },
        { status: 400 }
      );
    }

    const { nome, email, whatsapp, tipoProjeto, mensagem } = validationResult.data;

    // 5. Sanitize text fields
    const safeNome = sanitize(nome);
    const safeEmail = sanitize(email);
    const safeWhatsapp = sanitize(whatsapp);
    const safeTipoProjeto = sanitize(tipoProjeto);
    const safeMensagem = sanitize(mensagem);

    // 6. Send email notification via Resend (if API key configured)
    const resendApiKey = process.env.RESEND_API_KEY;
    const emailTo = process.env.EMAIL_TO || "contato@suaagencia.com.br";
    const emailFrom = process.env.EMAIL_FROM || "onboarding@resend.dev";

    if (resendApiKey && !resendApiKey.startsWith("re_123456789")) {
      const resend = new Resend(resendApiKey);

      await resend.emails.send({
        from: emailFrom,
        to: emailTo,
        replyTo: safeEmail,
        subject: `[Novo Lead Landing Page] ${safeNome} — ${safeTipoProjeto}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0A0A0A; color: #FAFAFA; border-radius: 12px; border: 1px solid #262626;">
            <h2 style="color: #34D399; margin-bottom: 20px; font-size: 20px;">🚀 Novo Lead Recebido pela Landing Page</h2>
            
            <div style="background: #171717; padding: 18px; border-radius: 8px; margin-bottom: 16px; border: 1px solid #333;">
              <p style="margin: 0 0 10px 0;"><strong style="color: #A3A3A3;">Nome:</strong> ${safeNome}</p>
              <p style="margin: 0 0 10px 0;"><strong style="color: #A3A3A3;">E-mail:</strong> <a href="mailto:${safeEmail}" style="color: #60A5FA;">${safeEmail}</a></p>
              <p style="margin: 0 0 10px 0;"><strong style="color: #A3A3A3;">WhatsApp:</strong> <a href="https://wa.me/${safeWhatsapp.replace(/\D/g, "")}" style="color: #34D399;">${safeWhatsapp}</a></p>
              <p style="margin: 0;"><strong style="color: #A3A3A3;">Tipo de Projeto:</strong> ${safeTipoProjeto}</p>
            </div>

            <div style="background: #171717; padding: 18px; border-radius: 8px; border: 1px solid #333;">
              <h4 style="margin: 0 0 10px 0; color: #A3A3A3; font-size: 13px; text-transform: uppercase;">Descrição do Projeto:</h4>
              <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${safeMensagem}</p>
            </div>

            <p style="font-size: 12px; color: #737373; margin-top: 24px; text-align: center;">
              Enviado via formulário do site · IP: ${ip} · ${new Date().toLocaleString("pt-BR")}
            </p>
          </div>
        `,
      });
    } else {
      // Local development or simulated email log
      console.log("------------------------------------------");
      console.log("⚡ [NOVO LEAD RECEBIDO LOCALMENTE]");
      console.log(`Nome: ${safeNome}`);
      console.log(`E-mail: ${safeEmail}`);
      console.log(`WhatsApp: ${safeWhatsapp}`);
      console.log(`Tipo de Projeto: ${safeTipoProjeto}`);
      console.log(`Mensagem: ${safeMensagem}`);
      console.log("------------------------------------------");
    }

    return NextResponse.json(
      {
        success: true,
        message: "Obrigado! Recebemos sua mensagem com sucesso. Entraremos em contato em até 2 horas.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro no processamento do formulário de contato:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Ocorreu um erro interno ao processar sua solicitação. Tente novamente mais tarde ou fale pelo WhatsApp.",
      },
      { status: 500 }
    );
  }
}
