import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { LogosMarquee } from "@/components/sections/LogosMarquee";
import { Pilares } from "@/components/sections/Pilares";
import { Resultados } from "@/components/sections/Resultados";
import { Planos } from "@/components/sections/Planos";
import { Depoimentos } from "@/components/sections/Depoimentos";
import { FAQ } from "@/components/sections/FAQ";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#FAFAFA] relative selection:bg-[#34D399]/30 selection:text-[#34D399]">
      {/* 1. Header flutuante com navegação e botão mobile */}
      <Header />

      {/* 2. Hero com objeto 3D interativo e headline metálica */}
      <Hero />

      {/* 3. Faixa de logos em movimento (Marquee) */}
      <LogosMarquee />

      {/* 4. Bento Grid de 4 cards com mockups CSS dos pilares */}
      <Pilares />

      {/* 5. Resultados e métricas de impacto em perspectiva 3D */}
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

