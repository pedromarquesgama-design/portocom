import React from "react";

export function TurntableFallback({
  errorMessage,
}: {
  errorMessage?: string;
}) {
  return (
    <div
      className="relative w-full aspect-square max-w-[480px] mx-auto flex items-center justify-center rounded-3xl overflow-hidden border border-white/5 bg-[#121212]/50 backdrop-blur-md"
      aria-label="Carregando modelo 3D interativo"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-radial from-[#34D399]/10 via-[#60A5FA]/5 to-transparent blur-2xl pointer-events-none" />

      {/* Geometric placeholder wireframe skeleton */}
      <div className="relative flex flex-col items-center justify-center p-8 text-center">
        <div className="relative w-44 h-44 mb-4 flex items-center justify-center">
          {/* Animated pulsing outer ring */}
          <div className="absolute inset-0 rounded-full border border-dashed border-[#34D399]/20 animate-spin" style={{ animationDuration: "25s" }} />
          {/* Inner ring */}
          <div className="absolute inset-4 rounded-full border border-white/10 animate-ping" style={{ animationDuration: "3s" }} />
          
          {/* Central chrome-like icon shape */}
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-[#1E293B] via-[#0F172A] to-[#34D399]/20 border border-white/10 shadow-[0_0_30px_rgba(52,211,153,0.15)] flex items-center justify-center">
            <svg
              className="w-12 h-12 text-[#34D399]/80 animate-pulse"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
        </div>

        {errorMessage ? (
          <p className="text-xs text-[#A3A3A3] max-w-[260px] leading-relaxed">
            {errorMessage}
          </p>
        ) : (
          <div className="flex items-center gap-2 text-xs text-[#A3A3A3]">
            <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
            <span>Renderizando objeto 3D...</span>
          </div>
        )}
      </div>
    </div>
  );
}
