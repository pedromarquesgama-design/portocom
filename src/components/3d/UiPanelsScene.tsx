"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

// ============================================================================
// Wireframe "UI Panels" composition (three.js)
// Mirrors the reference: floating glass browser window, phone mockup and two
// wireframe utility panels, accented with emerald glow nodes on a dark stage.
// ============================================================================

const PANEL_OUTLINE = 0x9be8d0; // soft mint wireframe
const PANEL_FILL = 0x0f2b24; // dark teal glass tint
const EMERALD = 0x2fa882;

// --- Rounded rectangle geometry helpers -------------------------------------

function makeRoundedRectShape(w: number, h: number, r: number): THREE.Shape {
  const shape = new THREE.Shape();
  const x = -w / 2;
  const y = -h / 2;
  const radius = Math.min(r, w / 2, h / 2);

  shape.moveTo(x + radius, y);
  shape.lineTo(x + w - radius, y);
  shape.quadraticCurveTo(x + w, y, x + w, y + radius);
  shape.lineTo(x + w, y + h - radius);
  shape.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
  shape.lineTo(x + radius, y + h);
  shape.quadraticCurveTo(x, y + h, x, y + h - radius);
  shape.lineTo(x, y + radius);
  shape.quadraticCurveTo(x, y, x + radius, y);

  return shape;
}

function makeRoundedRectPoints(w: number, h: number, r: number): THREE.Vector2[] {
  return makeRoundedRectShape(w, h, r).getPoints(12);
}

/** Line helpers -------------------------------------------------------- */

function makeLine(
  points: THREE.Vector2[],
  color: number,
  opacity: number
): THREE.LineLoop {
  const geometry = new THREE.BufferGeometry().setFromPoints(
    points.map((p) => new THREE.Vector3(p.x, p.y, 0))
  );
  const material = new THREE.LineBasicMaterial({
    color,
    transparent: true,
    opacity,
    depthWrite: false,
  });
  return new THREE.LineLoop(geometry, material);
}

function makeSegments(
  vertices: number[],
  color: number,
  opacity: number
): THREE.LineSegments {
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(vertices, 3)
  );
  const material = new THREE.LineBasicMaterial({
    color,
    transparent: true,
    opacity,
    depthWrite: false,
  });
  return new THREE.LineSegments(geometry, material);
}

/** Filled rounded rect used for glass tints, text bars and pills. */

function makeFill(
  w: number,
  h: number,
  r: number,
  color: number,
  opacity: number,
  z = 0
): THREE.Mesh {
  const geometry = new THREE.ShapeGeometry(makeRoundedRectShape(w, h, r));
  const material = new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    opacity,
    side: THREE.DoubleSide,
    depthWrite: false,
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.z = z;
  return mesh;
}

/** Diagonal "X" placeholder cross inside image frames. */

function makeCross(w: number, h: number, color: number, opacity: number): THREE.LineSegments {
  const hw = w / 2;
  const hh = h / 2;
  return makeSegments(
    [-hw, -hh, 0, hw, hh, 0, -hw, hh, 0, hw, -hh, 0],
    color,
    opacity
  );
}

/** Soft radial glow sprite (emerald accent nodes). */

function makeGlowTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    gradient.addColorStop(0, "rgba(120, 245, 208, 0.95)");
    gradient.addColorStop(0.35, "rgba(47, 168, 130, 0.55)");
    gradient.addColorStop(1, "rgba(47, 168, 130, 0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 128, 128);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function makeGlowSprite(scale: number, opacity: number): THREE.Sprite {
  const material = new THREE.SpriteMaterial({
    map: makeGlowTexture(),
    transparent: true,
    opacity,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const sprite = new THREE.Sprite(material);
  sprite.scale.setScalar(scale);
  return sprite;
}

function makeNode(scale: number, color: number): THREE.Mesh {
  const geometry = new THREE.SphereGeometry(scale, 16, 16);
  const material = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.95 });
  return new THREE.Mesh(geometry, material);
}

// --- Panel builders --------------------------------------------------------

interface PanelOptions {
  width: number;
  height: number;
  radius?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
}

/** Base glass panel: translucent fill + crisp mint wireframe outline. */
function createPanel({
  width,
  height,
  radius = 0.12,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
}: PanelOptions): THREE.Group {
  const group = new THREE.Group();
  group.position.set(...position);
  group.rotation.set(...rotation);

  group.add(makeFill(width, height, radius, PANEL_FILL, 0.14));
  group.add(makeLine(makeRoundedRectPoints(width, height, radius), PANEL_OUTLINE, 0.55));

  return group;
}

/** Browser window: title bar dots, hero placeholder with X, text lines. */
function createBrowserPanel(): THREE.Group {
  const w = 3.5;
  const h = 2.35;
  const panel = createPanel({ width: w, height: h, radius: 0.14 });

  // Title bar dots + divider
  const dots = new THREE.Group();
  [-0.36, 0, 0.36].forEach((dx, i) => {
    dots.add(makeNode(i === 1 ? 0.035 : 0.028, PANEL_OUTLINE));
    dots.children[i].position.set(dx, h / 2 - 0.18, 0.01);
  });
  panel.add(dots);
  panel.add(
    makeSegments(
      [-w / 2 + 0.14, h / 2 - 0.32, 0, w / 2 - 0.14, h / 2 - 0.32, 0],
      PANEL_OUTLINE,
      0.22
    )
  );

  // Hero image placeholder with diagonal cross
  const heroW = w - 0.5;
  const heroH = 1.15;
  const heroY = 0.18;
  panel.add(makeLine(makeRoundedRectPoints(heroW, heroH, 0.06), PANEL_OUTLINE, 0.4));
  const cross = makeCross(heroW, heroH, PANEL_OUTLINE, 0.28);
  cross.position.y = heroY;
  panel.add(cross);
  panel.add(makeFill(heroW, heroH, 0.06, PANEL_FILL, 0.22, -0.005));

  // Text lines under the hero
  const barWidths = [w - 0.5, w - 0.95, w - 1.35];
  barWidths.forEach((bw, i) => {
    const bar = makeFill(bw, 0.055, 0.027, PANEL_OUTLINE, 0.3 - i * 0.06);
    bar.position.set(-(w - 0.5 - bw) / 2, -0.62 - i * 0.13, 0);
    panel.add(bar);
  });

  return panel;
}

/** Phone mockup: image placeholder, text lines and a glowing CTA pill. */
function createPhonePanel(): THREE.Group {
  const w = 1.05;
  const h = 2.05;
  const panel = createPanel({ width: w, height: h, radius: 0.16 });

  // Notch
  panel.add(makeFill(0.26, 0.045, 0.022, PANEL_OUTLINE, 0.3, 0.01));

  const heroW = 0.75;
  const heroH = 0.85;
  panel.add(makeLine(makeRoundedRectPoints(heroW, heroH, 0.05), PANEL_OUTLINE, 0.4));
  const cross = makeCross(heroW, heroH, PANEL_OUTLINE, 0.26);
  cross.position.y = 0.32;
  panel.add(cross);

  // Text lines
  [0.6, 0.42].forEach((bw, i) => {
    const bar = makeFill(bw, 0.05, 0.025, PANEL_OUTLINE, 0.3 - i * 0.07);
    bar.position.set(-(0.75 - bw) / 2, -0.36 - i * 0.12, 0);
    panel.add(bar);
  });

  // Emerald CTA pill + glow
  const pill = makeFill(0.6, 0.17, 0.085, EMERALD, 0.55, 0.02);
  pill.position.y = -0.78;
  panel.add(pill);

  const glow = makeGlowSprite(0.85, 0.5);
  glow.position.set(0, -0.78, 0.05);
  panel.add(glow);

  panel.add(makeNode(0.04, EMERALD));
  panel.children[panel.children.length - 1].position.set(-0.22, -0.78, 0.04);

  return panel;
}

/** Utility panel with a wireframe grid and an emerald node. */
function createGridPanel(): THREE.Group {
  const w = 1.55;
  const h = 1.2;
  const panel = createPanel({ width: w, height: h, radius: 0.1 });

  const cols = 4;
  const rows = 3;
  const vertices: number[] = [];
  for (let c = 1; c < cols; c++) {
    const x = -w / 2 + (w * c) / cols;
    vertices.push(x, -h / 2 + 0.08, 0, x, h / 2 - 0.08, 0);
  }
  for (let r = 1; r < rows; r++) {
    const y = -h / 2 + (h * r) / rows;
    vertices.push(-w / 2 + 0.08, y, 0, w / 2 - 0.08, y, 0);
  }
  panel.add(makeSegments(vertices, PANEL_OUTLINE, 0.2));

  // Glowing node on the grid
  panel.add(makeNode(0.085, EMERALD));
  panel.children[panel.children.length - 1].position.set(-0.18, 0.02, 0.03);

  const glow = makeGlowSprite(1.05, 0.45);
  glow.position.set(-0.18, 0.02, 0.06);
  panel.add(glow);

  return panel;
}

/** Utility panel with a tile matrix, some tiles lit emerald. */
function createTilesPanel(): THREE.Group {
  const w = 2.0;
  const h = 1.25;
  const panel = createPanel({ width: w, height: h, radius: 0.1 });

  const cols = 3;
  const rows = 2;
  const tileW = (w - 0.4) / cols;
  const tileH = (h - 0.36) / rows;
  const gap = 0.07;
  const lit = new Set(["0-1", "1-2", "2-0"]);

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = -w / 2 + 0.2 + tileW * (c + 0.5);
      const y = -h / 2 + 0.18 + tileH * (r + 0.5);
      const isLit = lit.has(`${r}-${c}`);

      const tile = makeFill(
        tileW - gap,
        tileH - gap,
        0.05,
        isLit ? EMERALD : PANEL_OUTLINE,
        isLit ? 0.4 : 0.14,
        0.01
      );
      tile.position.set(x, y, 0);
      panel.add(tile);

      if (isLit) {
        const glow = makeGlowSprite(0.6, 0.3);
        glow.position.set(x, y, 0.04);
        panel.add(glow);
      }
    }
  }

  return panel;
}

// --- Component -------------------------------------------------------------

// Resting offset that centers the off-center composition in the square frustum
const STAGE_BASE_Y = 0.13;

export default function UiPanelsScene({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [webglError, setWebglError] = useState<string | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const checkWebGL = () => {
      try {
        const testCanvas = document.createElement("canvas");
        return !!(
          window.WebGLRenderingContext &&
          (testCanvas.getContext("webgl") ||
            testCanvas.getContext("experimental-webgl"))
        );
      } catch {
        return false;
      }
    };

    if (!checkWebGL()) {
      setWebglError("Aceleração gráfica WebGL indisponível neste dispositivo.");
      return;
    }

    const scene = new THREE.Scene();

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 600;

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    // Distance chosen so the full composition (~6.3 units wide) fits the
    // square frustum with breathing room instead of being cropped.
    camera.position.set(0, 0, 9.6);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch {
      setWebglError("Erro ao inicializar o renderizador 3D.");
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    container.appendChild(renderer.domElement);

    // --- Composition: staggered depths like the reference ---
    const stage = new THREE.Group();
    stage.rotation.set(-0.06, 0, 0);
    // Re-center the off-center composition (bounds x -3.33..2.98, y -2.05..1.78)
    stage.position.set(0.17, 0.13, 0);
    scene.add(stage);

    const browser = createBrowserPanel();
    browser.position.set(0.1, 0.12, 0);
    browser.rotation.set(0.03, -0.16, 0.01);
    stage.add(browser);

    const phone = createPhonePanel();
    phone.position.set(2.45, -0.32, 0.95);
    phone.rotation.set(-0.04, -0.34, -0.09);
    stage.add(phone);

    const grid = createGridPanel();
    grid.position.set(-2.55, 1.18, 0.7);
    grid.rotation.set(0.02, 0.3, 0.03);
    stage.add(grid);

    const tiles = createTilesPanel();
    tiles.position.set(-2.15, -1.42, 1.15);
    tiles.rotation.set(0.05, 0.44, -0.04);
    stage.add(tiles);

    // Ambient depth haze behind the composition
    const haze = makeGlowSprite(9, 0.16);
    haze.position.set(0.4, -0.2, -2.4);
    stage.add(haze);

    // --- Pointer parallax ---
    let targetRotationX = 0;
    let targetRotationY = 0;
    let isHovered = false;

    const onPointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotationY = x * 0.3;
      targetRotationX = y * 0.22;
    };

    const onMouseEnter = () => {
      isHovered = true;
    };

    const onMouseLeave = () => {
      isHovered = false;
      targetRotationX = 0;
      targetRotationY = 0;
    };

    container.addEventListener("mousemove", onPointerMove);
    container.addEventListener("mouseenter", onMouseEnter);
    container.addEventListener("mouseleave", onMouseLeave);

    const handleResize = () => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      if (!newWidth || !newHeight) return;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    };

    window.addEventListener("resize", handleResize);

    // --- Animation loop: gentle float per panel + parallax ---
    let animationFrameId: number;
    const clock = new THREE.Clock();
    const panels = [browser, phone, grid, tiles];

    const basePositions = panels.map((p) => p.position.clone());
    const baseRotationsZ = panels.map((p) => p.rotation.z);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Slow ambient sway
      stage.rotation.y += (targetRotationY - stage.rotation.y) * 0.04;
      stage.rotation.x += (-0.06 + targetRotationX - stage.rotation.x) * 0.04;
      stage.position.y = STAGE_BASE_Y + Math.sin(t * 0.8) * 0.07;

      // Independent float offsets per panel
      panels.forEach((panel, i) => {
        const base = basePositions[i];
        panel.position.y = base.y + Math.sin(t * 0.9 + i * 1.3) * 0.06;
        panel.rotation.z = baseRotationsZ[i] + Math.sin(t * 0.7 + i) * 0.02;
      });

      // Phone CTA pulse
      const phoneGlow = phone.children.find(
        (child) => child instanceof THREE.Sprite
      ) as THREE.Sprite | undefined;
      if (phoneGlow) {
        const s = 0.85 + Math.sin(t * 2.1) * 0.07;
        phoneGlow.scale.set(s, s, 1);
      }

      if (!isHovered) {
        stage.rotation.z = Math.sin(t * 0.5) * 0.015;
      } else {
        stage.rotation.z += (0 - stage.rotation.z) * 0.04;
      }

      renderer.render(scene, camera);
    };

    animate();

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", onPointerMove);
      container.removeEventListener("mouseenter", onMouseEnter);
      container.removeEventListener("mouseleave", onMouseLeave);

      scene.traverse((object) => {
        const mesh = object as THREE.Mesh;
        if (mesh.geometry) mesh.geometry.dispose();

        const material = (mesh as unknown as { material?: THREE.Material })
          .material;
        if (Array.isArray(material)) {
          material.forEach((m) => {
            const spriteMaterial = m as THREE.SpriteMaterial;
            spriteMaterial.map?.dispose();
            m.dispose();
          });
        } else if (material) {
          const spriteMaterial = material as THREE.SpriteMaterial;
          spriteMaterial.map?.dispose();
          material.dispose();
        }
      });

      scene.clear();
      renderer.dispose();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  if (webglError) {
    return (
      <div
        className={`relative w-full h-full flex items-center justify-center rounded-3xl border border-white/5 bg-[#121212]/40 ${className}`}
      >
        <p className="text-xs text-[#A3A096] max-w-[260px] text-center leading-relaxed">
          {webglError}
        </p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full flex items-center justify-center ${className}`}
      aria-label="Composição 3D interativa de wireframes de interfaces"
      role="img"
    >
      {/* Ambient emerald glow behind the composition */}
      <div className="absolute inset-0 bg-radial from-[#2FA882]/15 via-transparent to-transparent blur-3xl pointer-events-none -z-10" />
    </div>
  );
}