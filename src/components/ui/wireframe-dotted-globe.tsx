"use client";

import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

// ============================================================================
// 1. KEY ROTATION CONSTANTS (Continuous ambient auto-spin, zero user interaction)
// ============================================================================
const AUTO_SPIN_SPEED = 12; // Continuous auto-spin around vertical axis (deg/sec, ~30s per rotation)
const INITIAL_ROTATION: [number, number] = [0, -10]; // Aligned starting orientation [yaw, pitch]

interface RotatingEarthProps {
  width?: number;
  height?: number;
  className?: string;
  showHint?: boolean;
  connections?: { from: [number, number]; to: [number, number] }[];
  markers?: { lat: number; lng: number; label?: string }[];
}

const DEFAULT_MARKERS = [
  { lat: -23.55, lng: -46.63, label: "São Paulo" },
  { lat: 37.78, lng: -122.42, label: "San Francisco" },
  { lat: 51.51, lng: -0.13, label: "London" },
  { lat: 35.68, lng: 139.69, label: "Tokyo" },
  { lat: -33.87, lng: 151.21, label: "Sydney" },
  { lat: 1.35, lng: 103.82, label: "Singapore" },
  { lat: 28.61, lng: 77.21, label: "Delhi" },
];

const DEFAULT_CONNECTIONS: { from: [number, number]; to: [number, number] }[] = [
  { from: [-23.55, -46.63], to: [51.51, -0.13] },
  { from: [37.78, -122.42], to: [51.51, -0.13] },
  { from: [51.51, -0.13], to: [35.68, 139.69] },
  { from: [35.68, 139.69], to: [-33.87, 151.21] },
  { from: [37.78, -122.42], to: [1.35, 103.82] },
  { from: [37.78, -122.42], to: [-23.55, -46.63] },
  { from: [1.35, 103.82], to: [-33.87, 151.21] },
  { from: [51.51, -0.13], to: [28.61, 77.21] },
];

export default function RotatingEarth({
  width = 760,
  height = 760,
  className = "",
  connections = DEFAULT_CONNECTIONS,
  markers = DEFAULT_MARKERS,
}: RotatingEarthProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;

    // 1. Cap Device Pixel Ratio to prevent extreme pixel fills on Retina displays
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Fixed dimensions at exact designated size
    const size = Math.min(width, height);
    const containerWidth = size;
    const containerHeight = size;
    const radius = size / 2.15;

    canvas.width = containerWidth * dpr;
    canvas.height = containerHeight * dpr;
    canvas.style.width = `${containerWidth}px`;
    canvas.style.height = `${containerHeight}px`;
    context.scale(dpr, dpr);

    const cx = containerWidth / 2;
    const cy = containerHeight / 2;

    // 2. D3 Projection and Path Generator
    const projection = d3
      .geoOrthographic()
      .scale(radius)
      .translate([cx, cy])
      .clipAngle(90);

    const path = d3.geoPath().projection(projection).context(context);

    // Precomputed Graticule lines (reused every frame, zero allocations)
    const graticule = d3.geoGraticule10();

    // Precomputed Connections with spherical interpolators
    const preparedConnections = connections.map((conn) => {
      const p1: [number, number] = [conn.from[1], conn.from[0]];
      const p2: [number, number] = [conn.to[1], conn.to[0]];
      return {
        ...conn,
        geoLine: {
          type: "LineString" as const,
          coordinates: [p1, p2],
        },
        interpolate: d3.geoInterpolate(p1, p2),
      };
    });

    // 3. Physics & Continuous Auto-Spin State
    const currentRot: [number, number] = [INITIAL_ROTATION[0], INITIAL_ROTATION[1]];
    let animTime = 0;
    let isVisible = true;

    // 4. Dot generation (Optimized spacing for silky 60fps rendering)
    interface DotData {
      lng: number;
      lat: number;
    }
    const allDots: DotData[] = [];
    let landFeatures: any = null;

    const pointInPolygon = (point: [number, number], polygon: number[][]): boolean => {
      const [x, y] = point;
      let inside = false;
      for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        const [xi, yi] = polygon[i];
        const [xj, yj] = polygon[j];
        if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) {
          inside = !inside;
        }
      }
      return inside;
    };

    const pointInFeature = (point: [number, number], feature: any): boolean => {
      const geometry = feature.geometry;
      if (geometry.type === "Polygon") {
        if (!pointInPolygon(point, geometry.coordinates[0])) return false;
        for (let i = 1; i < geometry.coordinates.length; i++) {
          if (pointInPolygon(point, geometry.coordinates[i])) return false;
        }
        return true;
      } else if (geometry.type === "MultiPolygon") {
        for (const polygon of geometry.coordinates) {
          if (pointInPolygon(point, polygon[0])) {
            let inHole = false;
            for (let i = 1; i < polygon.length; i++) {
              if (pointInPolygon(point, polygon[i])) {
                inHole = true;
                break;
              }
            }
            if (!inHole) return true;
          }
        }
      }
      return false;
    };

    const generateDots = (feature: any) => {
      const dots: DotData[] = [];
      const bounds = d3.geoBounds(feature);
      const [[minLng, minLat], [maxLng, maxLat]] = bounds;
      const stepSize = 2.4; // Resolution for silky smooth rendering

      for (let lng = minLng; lng <= maxLng; lng += stepSize) {
        for (let lat = minLat; lat <= maxLat; lat += stepSize) {
          if (pointInFeature([lng, lat], feature)) {
            dots.push({ lng, lat });
          }
        }
      }
      return dots;
    };

    // Fallback dots if offline or prior to fetch
    const generateFallbackDots = () => {
      const goldenRatio = (1 + Math.sqrt(5)) / 2;
      for (let i = 0; i < 900; i++) {
        const theta = (2 * Math.PI * i) / goldenRatio;
        const phi = Math.acos(1 - (2 * (i + 0.5)) / 900);
        const lat = 90 - (phi * 180) / Math.PI;
        const lng = ((theta * 180) / Math.PI) % 360 - 180;
        allDots.push({ lng, lat });
      }
    };

    // 5. High-Performance Render Loop
    const twoPi = Math.PI * 2;
    const dotRadius = 1.25;

    const render = () => {
      // Clear canvas with full transparency (NO black background)
      context.clearRect(0, 0, containerWidth, containerHeight);

      const currentScale = projection.scale();
      const scaleFactor = currentScale / radius;

      // Subtle outer boundary circle outline
      context.beginPath();
      context.arc(cx, cy, currentScale, 0, twoPi);
      context.strokeStyle = "rgba(255, 255, 255, 0.12)";
      context.lineWidth = 1 * scaleFactor;
      context.stroke();

      // Pre-calculated Graticule lines
      context.beginPath();
      path(graticule);
      context.strokeStyle = "rgba(255, 255, 255, 0.08)";
      context.lineWidth = 0.8 * scaleFactor;
      context.stroke();

      // Land outline boundaries
      if (landFeatures) {
        context.beginPath();
        for (let i = 0; i < landFeatures.features.length; i++) {
          path(landFeatures.features[i]);
        }
        context.strokeStyle = "rgba(255, 255, 255, 0.22)";
        context.lineWidth = 1 * scaleFactor;
        context.stroke();
      }

      // Batch all dots in a single draw call (high FPS)
      context.beginPath();
      for (let i = 0; i < allDots.length; i++) {
        const pt = projection([allDots[i].lng, allDots[i].lat]);
        if (
          pt &&
          pt[0] >= 0 &&
          pt[0] <= containerWidth &&
          pt[1] >= 0 &&
          pt[1] <= containerHeight
        ) {
          context.moveTo(pt[0] + dotRadius, pt[1]);
          context.arc(pt[0], pt[1], dotRadius, 0, twoPi);
        }
      }
      context.fillStyle = "rgba(180, 180, 180, 0.55)";
      context.fill();

      // Pin point connection lines
      context.beginPath();
      for (let i = 0; i < preparedConnections.length; i++) {
        path(preparedConnections[i].geoLine);
      }
      context.strokeStyle = "rgba(52, 211, 153, 0.55)";
      context.lineWidth = 1.4 * scaleFactor;
      context.stroke();

      // Animated pulse dots traveling along connections
      for (let i = 0; i < preparedConnections.length; i++) {
        const conn = preparedConnections[i];
        const t = (Math.sin(animTime * 1.6 + conn.from[0] * 0.1) + 1) / 2;
        const currentCoord = conn.interpolate(t);
        const pt = projection(currentCoord);

        if (
          pt &&
          pt[0] >= 0 &&
          pt[0] <= containerWidth &&
          pt[1] >= 0 &&
          pt[1] <= containerHeight
        ) {
          // Glow halo
          context.beginPath();
          context.arc(pt[0], pt[1], 5 * scaleFactor, 0, twoPi);
          context.fillStyle = "rgba(52, 211, 153, 0.25)";
          context.fill();

          // Core dot
          context.beginPath();
          context.arc(pt[0], pt[1], 2.4 * scaleFactor, 0, twoPi);
          context.fillStyle = "#34D399";
          context.fill();
        }
      }

      // City markers with pulsing rings
      for (let i = 0; i < markers.length; i++) {
        const marker = markers[i];
        const pt = projection([marker.lng, marker.lat]);

        if (
          pt &&
          pt[0] >= 0 &&
          pt[0] <= containerWidth &&
          pt[1] >= 0 &&
          pt[1] <= containerHeight
        ) {
          const pulse = (Math.sin(animTime * 3 + i) + 1) / 2;

          // Expanding pulse wave ring
          context.beginPath();
          context.arc(pt[0], pt[1], (3.5 + pulse * 5.5) * scaleFactor, 0, twoPi);
          context.strokeStyle = `rgba(52, 211, 153, ${0.25 + pulse * 0.4})`;
          context.lineWidth = 1.2;
          context.stroke();

          // Glow halo
          context.beginPath();
          context.arc(pt[0], pt[1], 6 * scaleFactor, 0, twoPi);
          context.fillStyle = "rgba(52, 211, 153, 0.25)";
          context.fill();

          // Solid pin core
          context.beginPath();
          context.arc(pt[0], pt[1], 2.8 * scaleFactor, 0, twoPi);
          context.fillStyle = "#34D399";
          context.fill();

          // City label
          if (marker.label) {
            context.font = `${Math.max(9, Math.round(10.5 * scaleFactor))}px system-ui, -apple-system, sans-serif`;
            context.fillStyle = "rgba(255, 255, 255, 0.88)";
            context.fillText(marker.label, pt[0] + 7, pt[1] + 3);
          }
        }
      }
    };

    // 6. Continuous Auto-Spin Physics (Delta Time Independent, No User Overrides)
    const updatePhysics = (dt: number) => {
      animTime += dt;
      currentRot[0] = (currentRot[0] + AUTO_SPIN_SPEED * dt) % 360;
      currentRot[1] = INITIAL_ROTATION[1]; // Fixed pitch pose
      projection.rotate([currentRot[0], currentRot[1]]);
    };

    // Single requestAnimationFrame Loop with delta time
    let rafId: number;
    let lastFrameTime = performance.now();

    const loop = (now: number) => {
      const dt = Math.min((now - lastFrameTime) / 1000, 0.1);
      lastFrameTime = now;

      if (isVisible) {
        updatePhysics(dt);
        render();
      }

      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    // 7. Pause Rendering When Off-Screen or Tab Hidden
    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0.05 }
    );
    if (canvas) observer.observe(canvas);

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible) lastFrameTime = performance.now();
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // 8. Load Map Data with Fallback
    generateFallbackDots();

    fetch(
      "https://raw.githubusercontent.com/martynafford/natural-earth-geojson/refs/heads/master/110m/physical/ne_110m_land.json"
    )
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao carregar dados do mapa");
        return res.json();
      })
      .then((data) => {
        landFeatures = data;
        allDots.length = 0;
        for (let i = 0; i < data.features.length; i++) {
          const dots = generateDots(data.features[i]);
          for (let j = 0; j < dots.length; j++) {
            allDots.push(dots[j]);
          }
        }
      })
      .catch(() => {
        setError("Carregamento visual padrão mantido.");
      });

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [width, height, connections, markers]);

  if (error) {
    // Graceful silent fallback maintains clean layout
  }

  return (
    <div
      ref={containerRef}
      className={`relative bg-transparent flex items-center justify-center select-none pointer-events-none ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-auto bg-transparent pointer-events-none select-none"
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
    </div>
  );
}
