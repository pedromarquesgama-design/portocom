"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { TurntableFallback } from "./TurntableFallback";

export default function TurntableScene() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [webglError, setWebglError] = useState<string | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Detect WebGL support
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

    // 2. Setup Three.js Scene, Camera & Renderer
    const scene = new THREE.Scene();

    const width = container.clientWidth || 450;
    const height = container.clientHeight || 450;

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch (err) {
      setWebglError("Erro ao inicializar o renderizador 3D.");
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;

    container.appendChild(renderer.domElement);

    // 3. Lighting (Studio dark setup with emerald & blue accent rim lights)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 3.2);
    keyLight.position.set(5, 6, 6);
    scene.add(keyLight);

    const emeraldRimLight = new THREE.PointLight(0x34d399, 4.0, 20);
    emeraldRimLight.position.set(-5, -3, 3);
    scene.add(emeraldRimLight);

    const blueFillLight = new THREE.PointLight(0x60a5fa, 3.5, 20);
    blueFillLight.position.set(4, -4, -3);
    scene.add(blueFillLight);

    const topWhiteHighlight = new THREE.DirectionalLight(0xffffff, 2.0);
    topWhiteHighlight.position.set(0, 8, 2);
    scene.add(topWhiteHighlight);

    // 4. Create Chrome Turntable Geometry Group
    const group = new THREE.Group();
    scene.add(group);

    // Material: Glossy metallic dark chrome matching reference
    const chromeMaterial = new THREE.MeshStandardMaterial({
      color: 0xefefef,
      metalness: 0.95,
      roughness: 0.12,
    });

    const emeraldWireMaterial = new THREE.MeshStandardMaterial({
      color: 0x34d399,
      metalness: 0.8,
      roughness: 0.3,
      wireframe: true,
    });

    // Main sculptural centerpiece: Elegant intertwined geometric knot
    const torusKnotGeometry = new THREE.TorusKnotGeometry(1.4, 0.45, 128, 32, 2, 3);
    const knotMesh = new THREE.Mesh(torusKnotGeometry, chromeMaterial);
    group.add(knotMesh);

    // Outer subtle orbital halo ring
    const ringGeometry = new THREE.TorusGeometry(2.35, 0.025, 16, 100);
    const ringMesh = new THREE.Mesh(ringGeometry, emeraldWireMaterial);
    ringMesh.rotation.x = Math.PI / 3;
    group.add(ringMesh);

    // Second inclined thin ring
    const ringGeometry2 = new THREE.TorusGeometry(2.55, 0.02, 16, 100);
    const ringMesh2 = new THREE.Mesh(ringGeometry2, chromeMaterial);
    ringMesh2.rotation.x = -Math.PI / 4;
    ringMesh2.rotation.y = Math.PI / 6;
    group.add(ringMesh2);

    // 4 Orbiting chrome star crystals (referencing the sparkle stars in the screenshot)
    const starGeometry = new THREE.OctahedronGeometry(0.25, 0);
    const starMeshes: THREE.Mesh[] = [];
    const starCount = 4;
    for (let i = 0; i < starCount; i++) {
      const star = new THREE.Mesh(starGeometry, chromeMaterial);
      const angle = (i / starCount) * Math.PI * 2;
      const radius = 2.4;
      star.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle * 2) * 0.6,
        Math.sin(angle) * radius
      );
      group.add(star);
      starMeshes.push(star);
    }

    // 5. Interactive Mouse Parallax
    let targetRotationX = 0;
    let targetRotationY = 0;
    let isHovered = false;

    const onPointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotationY = x * 0.45;
      targetRotationX = y * 0.35;
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

    // 6. Responsive Resize Handling
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    };

    window.addEventListener("resize", handleResize);

    // 7. Animation Loop (Turntable rotation + float)
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Continuous turntable rotation around Y axis
      group.rotation.y += 0.008;

      // Gentle floating sine motion
      group.position.y = Math.sin(elapsedTime * 1.2) * 0.12;

      // Subtle responsive damping to pointer
      if (isHovered) {
        group.rotation.x += (targetRotationX - group.rotation.x) * 0.05;
        group.rotation.z += (targetRotationY - group.rotation.z) * 0.05;
      } else {
        group.rotation.x = Math.sin(elapsedTime * 0.6) * 0.1;
      }

      // Spin orbital stars
      starMeshes.forEach((star, index) => {
        const speed = 0.8 + index * 0.2;
        star.rotation.x += 0.02 * speed;
        star.rotation.y += 0.03 * speed;
      });

      ringMesh.rotation.z += 0.004;
      ringMesh2.rotation.z -= 0.003;

      renderer.render(scene, camera);
    };

    animate();

    // 8. Strict Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", onPointerMove);
      container.removeEventListener("mouseenter", onMouseEnter);
      container.removeEventListener("mouseleave", onMouseLeave);

      // Dispose Geometries and Materials
      torusKnotGeometry.dispose();
      ringGeometry.dispose();
      ringGeometry2.dispose();
      starGeometry.dispose();
      chromeMaterial.dispose();
      emeraldWireMaterial.dispose();

      // Dispose lights & scene elements
      scene.clear();
      renderer.dispose();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  if (webglError) {
    return <TurntableFallback errorMessage={webglError} />;
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square max-w-[480px] lg:max-w-[540px] mx-auto flex items-center justify-center cursor-grab active:cursor-grabbing"
      aria-label="Objeto 3D interativo em rotação contínua (Turntable)"
      role="img"
    >
      {/* Ambient background glows for Three.js object */}
      <div className="absolute inset-0 bg-radial from-[#34D399]/15 via-[#60A5FA]/8 to-transparent blur-3xl pointer-events-none -z-10" />
    </div>
  );
}
