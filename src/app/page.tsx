import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { LogosMarquee } from "@/components/sections/LogosMarquee";
import { Servicos } from "@/components/sections/Servicos";
import { Pilares } from "@/components/sections/Pilares";
import { Processo } from "@/components/sections/Processo";
import { Resultados } from "@/components/sections/Resultados";
import { Planos } from "@/components/sections/Planos";
import { Depoimentos } from "@/components/sections/Depoimentos";
import { FAQ } from "@/components/sections/FAQ";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121211] text-[#F5F4EE] relative selection:bg-[#1A5446]/40 selection:text-[#F5F4EE]">
      {/* 1. Header flutuante com navegação e botão mobile */}
      <Header />

      {/* 2. Hero com objeto 3D interativo e headline metálica */}
      <Hero />

      {/* 3. Faixa de logos em movimento (Marquee) */}
      <LogosMarquee />

      {/* 4. Explore Nossos Serviços - As 6 soluções digitais interativas com linha do tempo */}
      <Servicos />

      {/* 5. Bento Grid com os 4 pilares estratégicos de entrega */}
      <Pilares />

      {/* 5. Processo de Trabalho em 7 Etapas Interativas (Timeline Carousel) */}
      <Processo />

      {/* 6. Resultados e métricas de impacto em perspectiva 3D */}
      <Resultados />

      {/* 6. Planos de investimento com card central iluminado */}
      <Planos />

      {/* 7. Depoimentos de clientes e prova social */}
      <Depoimentos />

      {/* 8. FAQ interativo em accordion acessível */}
      <FAQ />

      {/* 9. Formulário de contato com validação e anti-spam */}
      <ContactForm />

      {/* 10. Footer institucional com palavra gigante em contorno */}
      <Footer />
    </main>
  );
}

