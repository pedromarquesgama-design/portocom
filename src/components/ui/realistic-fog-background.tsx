"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export interface MistBackgroundProps {
  className?: string;
  /**
   * Overall opacity multiplier for the fog shader (0.0 to 1.0).
   * Defaults to 0.75 for a translucent, glassy mist effect.
   */
  opacity?: number;
  /**
   * Whether to position as fixed full-screen or absolute within its section/container.
   * Defaults to false (section-scoped).
   */
  fixed?: boolean;
  /**
   * Whether to apply a frosted glass backdrop blur layer behind the fog.
   * Defaults to true.
   */
  glass?: boolean;
}

/**
 * Mist / Realistic Fog Background Component
 * Technology: WebGL 2D Fragment Shaders (GLSL)
 * Style: Ethereal Translucent Generative Fluid / Glassy Mist
 */
export const MistBackground: React.FC<MistBackgroundProps> = ({
  className,
  opacity = 0.75,
  fixed = false,
  glass = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", {
      alpha: true,
      premultipliedAlpha: false,
      antialias: false,
    });
    if (!gl) return;

    const vsSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_offset;
      uniform vec2 u_mouse;
      uniform float u_opacity;

      float hash(vec2 p) {
          p = fract(p * vec2(123.34, 456.21));
          p += dot(p, p + 45.32);
          return fract(p.x * p.y);
      }

      float noise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          float a = hash(i);
          float b = hash(i + vec2(1.0, 0.0));
          float c = hash(i + vec2(0.0, 1.0));
          float d = hash(i + vec2(1.0, 1.0));
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }

      float fbm(vec2 p) {
          float v = 0.0;
          float a = 0.5;
          for (int i = 0; i < 6; i++) {
              v += a * noise(p);
              p *= 2.0;
              a *= 0.5;
          }
          return v;
      }

      void main() {
          vec2 fragPos = gl_FragCoord.xy + u_offset;
          vec2 uv = fragPos / u_resolution.xy;
          uv.x *= u_resolution.x / u_resolution.y;

          vec2 mPos = u_mouse / u_resolution.xy;
          mPos.x *= u_resolution.x / u_resolution.y;
          float dist = distance(uv, mPos);
          
          vec2 q = vec2(0.0);
          q.x = fbm(uv + 0.07 * u_time);
          q.y = fbm(uv + vec2(1.0, 1.0));

          vec2 r = vec2(0.0);
          r.x = fbm(uv + 1.0 * q + vec2(1.7, 9.2) + 0.15 * u_time);
          r.y = fbm(uv + 1.0 * q + vec2(8.3, 2.8) + 0.126 * u_time);

          float f = fbm(uv + r);

          // Deep zinc palette with misty highlights
          vec3 baseColor = vec3(0.03, 0.03, 0.05);
          vec3 mistColor = vec3(0.18, 0.20, 0.25);
          vec3 accentColor = vec3(0.3, 0.35, 0.45);

          vec3 color = mix(baseColor, mistColor, f);
          color = mix(color, accentColor, dot(q, r) * 0.5);
          
          // Subtle mouse glow
          float mouseGlow = smoothstep(0.35, 0.0, dist);
          color += mouseGlow * 0.05 * vec3(0.6, 0.7, 1.0);

          // Post-processing
          color = pow(color, vec3(1.1)) * 1.4;

          // Translucent fog alpha so it acts as a glassy mist background
          float fogDensity = smoothstep(0.12, 0.88, f + dot(q, r) * 0.25);
          float alpha = (mix(0.22, 0.68, fogDensity) + mouseGlow * 0.06) * u_opacity;

          gl_FragColor = vec4(color, clamp(alpha, 0.0, 0.85));
      }
    `;

    const compileShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };

    const vs = compileShader(gl.VERTEX_SHADER, vsSource);
    const fs = compileShader(gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const posAttrib = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(posAttrib);
    gl.vertexAttribPointer(posAttrib, 2, gl.FLOAT, false, 0, 0);

    const timeLoc = gl.getUniformLocation(program, "u_time");
    const resLoc = gl.getUniformLocation(program, "u_resolution");
    const offsetLoc = gl.getUniformLocation(program, "u_offset");
    const mouseLoc = gl.getUniformLocation(program, "u_mouse");
    const opacityLoc = gl.getUniformLocation(program, "u_opacity");

    const mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = window.innerHeight - e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    let animationFrameId: number;
    const render = (time: number) => {
      if (isVisible) {
        const rect = canvas.getBoundingClientRect();
        const width = Math.max(1, Math.floor(rect.width));
        const height = Math.max(1, Math.floor(rect.height));

        if (canvas.width !== width || canvas.height !== height) {
          canvas.width = width;
          canvas.height = height;
          gl.viewport(0, 0, width, height);
        }

        const viewW = Math.max(1, window.innerWidth);
        const viewH = Math.max(1, window.innerHeight);
        const offsetX = fixed ? 0 : rect.left;
        const offsetY = fixed ? 0 : viewH - rect.bottom;

        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        gl.uniform1f(timeLoc, time * 0.001);
        gl.uniform2f(resLoc, viewW, viewH);
        gl.uniform2f(offsetLoc, offsetX, offsetY);
        gl.uniform2f(mouseLoc, mouse.x, mouse.y);
        gl.uniform1f(opacityLoc, opacity);

        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
    };
  }, [opacity, fixed]);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "inset-0 pointer-events-none overflow-hidden",
        fixed ? "fixed z-[-1]" : "absolute z-0",
        glass && "backdrop-blur-md bg-[#0A0A0E]/20",
        className
      )}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block pointer-events-none"
        style={{ background: "transparent" }}
      />
      {glass && (
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/[0.03] via-transparent to-[#0A0A0E]/25" />
      )}
    </div>
  );
};

export const RealisticFogBackground = MistBackground;
export const Component = MistBackground;
export default MistBackground;
