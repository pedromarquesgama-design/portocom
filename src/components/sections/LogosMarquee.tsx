import React from "react";

const TECHNOLOGIES = [
  { name: "Figma", category: "UI/UX & Design System" },
  { name: "Next.js 15", category: "App Router & SSR" },
  { name: "React 19", category: "Frontend Moderno" },
  { name: "Tailwind CSS", category: "Estilização Ágil" },
  { name: "Three.js", category: "Experiências 3D" },
  { name: "TypeScript", category: "Código Seguro" },
  { name: "Framer", category: "Prototipagem Rápida" },
  { name: "Webflow", category: "Sites Visuais" },
  { name: "Vercel", category: "Edge Infrastructure" },
];

export function LogosMarquee() {
  // Duplicating array for infinite continuous loop
  const doubleTech = [...TECHNOLOGIES, ...TECHNOLOGIES];

  return (
    <section className="relative py-12 md:py-16 border-y border-white/5 bg-[#0D0D0D]/60 overflow-hidden">
      {/* Lateral gradient masks for seamless fade out matching the reference */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 mb-5 text-center">
        <p className="text-xs uppercase tracking-widest font-semibold text-[#A3A3A3]/70">
          Tecnologias de ponta utilizadas nos nossos projetos
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        <div className="animate-marquee flex items-center gap-10 md:gap-14">
          {doubleTech.map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/[0.02] border border-white/5 text-[#A3A3A3] hover:text-[#FAFAFA] hover:border-[#34D399]/30 transition-all duration-300 group cursor-default shrink-0"
            >
              <div className="w-2 h-2 rounded-full bg-[#34D399]/40 group-hover:bg-[#34D399] transition-colors shadow-[0_0_8px_rgba(52,211,153,0.3)]" />
              <span className="text-sm md:text-base font-semibold tracking-tight text-[#E5E5E5] group-hover:text-white transition-colors">
                {tech.name}
              </span>
              <span className="text-[10px] text-[#737373] hidden sm:inline-block border-l border-white/10 pl-2">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
