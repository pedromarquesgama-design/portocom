import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Servicos } from "@/components/sections/Servicos";
import { Pilares } from "@/components/sections/Pilares";
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

      {/* 3. Conheça Nosso Trabalho - Soluções & Serviços + Etapas do Processo integradas */}
      <Servicos />

      {/* 4. Bento Grid com os 4 pilares estratégicos de entrega */}
      <Pilares />

      {/* 5. Planos de investimento com card central iluminado */}
      <Planos />

      {/* 6. Depoimentos de clientes e prova social */}
      <Depoimentos />

      {/* 7. FAQ interativo em accordion acessível */}
      <FAQ />

      {/* 8. Formulário de contato com validação e anti-spam */}
      <ContactForm />

      {/* 9. Footer institucional com palavra gigante em contorno */}
      <Footer />
    </main>
  );
}
