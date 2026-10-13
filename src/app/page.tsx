import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { IdentidadeDigitalSection } from "@/components/sections/IdentidadeDigitalSection";
import { DemoOne } from "@/components/sections/ShowcaseSection";
import { Planos } from "@/components/sections/Planos";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/sections/Footer";
import { ScrollSection } from "@/components/ui/ScrollSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-[#F5F4EE] relative selection:bg-[#1A5446]/40 selection:text-[#F5F4EE] overflow-x-hidden">
      {/* Fixed site background (first sequence frame) */}
      <div
        aria-hidden="true"
        className="fixed inset-0 z-0 pointer-events-none bg-cover bg-center"
        style={{ backgroundImage: "url(/images/background.jpg)" }}
      />
      {/* Light vignette for text readability */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-[1] bg-gradient-to-b from-[#121211]/30 via-transparent to-[#121211]/45"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(18, 18, 17, 0.08) 0%, rgba(18, 18, 17, 0.25) 80%, rgba(18, 18, 17, 0.55) 100%)",
        }}
      />

      {/* Floating navigation header */}
      <Header />

      {/* Content layout with sequential smooth reveal animations on scroll */}
      <div className="relative z-10 flex flex-col w-full">
        <Hero />

        <ScrollSection>
          <DemoOne />
        </ScrollSection>

        <ScrollSection>
          <IdentidadeDigitalSection />
        </ScrollSection>

        <ScrollSection>
          <Planos />
        </ScrollSection>

        <ScrollSection>
          <ContactForm />
        </ScrollSection>

        <ScrollSection>
          <Footer />
        </ScrollSection>
      </div>
    </main>
  );
}
