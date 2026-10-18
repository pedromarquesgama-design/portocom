import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { DemoOne } from "@/components/sections/ShowcaseSection";
import { Planos } from "@/components/sections/Planos";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/sections/Footer";
import { ScrollSection } from "@/components/ui/ScrollSection";
import { ScrollBackground } from "@/components/ui/ScrollBackground";
import { RealisticFogBackground } from "@/components/ui/realistic-fog-background";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-[#FDFDFC] relative selection:bg-[#F59E0B]/30 selection:text-white overflow-x-clip">
      {/* Fixed site background — fades in past the hero, then sticks */}
      <ScrollBackground />

      {/* Floating navigation header */}
      <Header />

      {/* Content layout with sequential smooth reveal animations on scroll */}
      <div className="relative z-10 flex flex-col w-full pt-[60px]">
        <Hero />

        {/* Sheet that slides over the pinned hero with sticky glassy fog background */}
        <div id="hero-cover-sheet" className="relative z-10 bg-white/[0.02] backdrop-blur-xl border-t border-white/[0.10] shadow-[0_-24px_64px_rgba(0,0,0,0.65)] overflow-clip">
          {/* Sticky Fog Background Layer pinned to viewport during scroll */}
          <div className="sticky top-0 left-0 w-full h-[100dvh] pointer-events-none -mb-[100dvh] z-0 overflow-hidden">
            <RealisticFogBackground />
          </div>

          {/* Scrolling Content Layer */}
          <div className="relative z-10 w-full">
            <ScrollSection>
              <DemoOne />
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
        </div>
      </div>
    </main>
  );
}
