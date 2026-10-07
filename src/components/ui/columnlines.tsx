"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface ColumnLinesProps {
  columnWidth?: number;
  columnCount?: number;
  radialFadeStart?: number;
  radialFadeEnd?: number;
  opacity?: number;
  showNoise?: boolean;
  noiseOpacity?: number;
  className?: string;
  children?: React.ReactNode;
}

export function ColumnLines({
  columnWidth = 80,
  columnCount = 18,
  radialFadeStart = 25,
  radialFadeEnd = 75,
  opacity = 1,
  showNoise = true,
  noiseOpacity = 0.05,
  className,
  children,
}: ColumnLinesProps) {
  const id = React.useId().replace(/:/g, "");
  const maskImage = `radial-gradient(circle at center, white 0%, white ${radialFadeStart}%, transparent ${radialFadeEnd}%)`;
  const noiseMask = `radial-gradient(circle at center, white 0%, transparent 75%)`;

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <svg width="0" height="0" className="absolute">
        <filter id={`noise-${id}`}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>

      {showNoise && (
        <div
          className="absolute inset-0 z-0 scale-[1.2] pointer-events-none"
          style={{
            opacity: noiseOpacity,
            filter: `url(#noise-${id})`,
            WebkitMaskImage: noiseMask,
            maskImage: noiseMask,
          }}
        />
      )}

      <div
        className="absolute inset-0 z-0 flex justify-center pointer-events-none"
        style={{
          opacity,
          WebkitMaskImage: maskImage,
          maskImage,
        }}
      >
        {Array.from({ length: columnCount }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-full shrink-0 border-r border-white/[0.07]",
              "bg-gradient-to-r from-white/[0.02] via-[#161614]/40 to-transparent",
              "shadow-[1px_0px_0px_0px_rgba(255,255,255,0.05)]"
            )}
            style={{ width: columnWidth }}
          />
        ))}
      </div>

      {children && <div className="relative z-10 w-full">{children}</div>}
    </div>
  );
}

export default ColumnLines;
