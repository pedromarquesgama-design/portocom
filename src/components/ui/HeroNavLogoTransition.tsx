"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, easeOut } from "motion/react";
import { AGENCY_NAME } from "@/lib/constants";

/**
 * Fraction of the hero scroll container's height at which the hero content
 * (headline, subtitle, CTA, text shade) reaches opacity 0.
 */
export const HERO_CONTENT_FADE_END = 0.45;

/**
 * Gap (CSS px, ~1 inch) between the incoming section's top edge and the logo's
 * bottom edge at which the logo starts flying into the navbar.
 */
export const LOGO_TRIGGER_GAP = 96;

export interface LogoTransitionGeometry {
  /** Hero logo position/size (viewport coords while the hero is pinned) */
  startX: number;
  startY: number;
  startH: number;
  /** Navbar logo anchor position/size */
  endX: number;
  endY: number;
  endH: number;
  /** scrollY at which the incoming section is LOGO_TRIGGER_GAP px below the logo */
  scrollStart: number;
  /** scrollY at which the incoming section reaches the navbar's bottom edge */
  scrollEnd: number;
}

/**
 * Measures the hero logo, the navbar anchor and the incoming cover sheet, and
 * derives the scroll window for the logo's flight: it starts when the sheet is
 * ~1 inch below the logo and ends as the sheet reaches the navbar, so the logo
 * appears to be nudged up into the navbar by the approaching section.
 */
export function useLogoTransitionGeometry() {
  const [geometry, setGeometry] = useState<LogoTransitionGeometry | null>(null);

  useEffect(() => {
    const measure = () => {
      const heroAnchor = document.getElementById("hero-logo-anchor");
      const navAnchor = document.getElementById("navbar-logo-anchor");
      const sheet = document.getElementById("hero-cover-sheet");
      if (!heroAnchor || !navAnchor || !sheet) return;

      const section = heroAnchor.closest("section");
      const navRect = navAnchor.getBoundingClientRect();
      const header = navAnchor.closest("header");
      const navBottom = header ? header.getBoundingClientRect().bottom : 60;

      // Compute the un-scrolled, un-transformed hero logo position using layout
      // offsets (ignores the content's scroll-driven y/scale transforms), so the
      // measurement is correct even if the page is refreshed while scrolled down.
      let offX = 0;
      let offY = 0;
      let el: HTMLElement | null = heroAnchor;
      while (el && el !== section) {
        offX += el.offsetLeft;
        offY += el.offsetTop;
        el = el.offsetParent as HTMLElement | null;
      }

      let startX = heroAnchor.getBoundingClientRect().left;
      let startY = heroAnchor.getBoundingClientRect().top;
      if (section && el === section) {
        // The hero section is sticky, pinned at its CSS `top` while the hero is in view
        const stickyTop = parseFloat(getComputedStyle(section).top) || 60;
        startX = section.getBoundingClientRect().left + offX;
        startY = stickyTop + offY;
      }
      const startH = heroAnchor.offsetHeight || 260;

      // Document position of the incoming section's top edge
      const sheetDocTop = sheet.getBoundingClientRect().top + window.scrollY;
      const logoBottom = startY + startH;
      const scrollStart = sheetDocTop - (logoBottom + LOGO_TRIGGER_GAP);
      const scrollEnd = Math.max(scrollStart + 1, sheetDocTop - navBottom);

      const isDesktop = window.innerWidth >= 640;
      // Target visible logo height in navbar: 35.5px desktop, 30px mobile
      const visibleH = isDesktop ? 35.5 : 30;
      // Content spans y=301 to y=858 in 881px canvas (ratio: 557/881; visible center: 579.5/881)
      const targetH = Math.round(visibleH / (557 / 881));
      const headerH = header ? header.getBoundingClientRect().height : 60;
      const headerTop = header ? header.getBoundingClientRect().top : 0;
      // Align visible center to navbar vertical center
      const endY = headerTop + headerH / 2 - targetH * (579.5 / 881);

      setGeometry({
        startX,
        startY,
        startH,
        endX: navRect.left,
        endY,
        endH: targetH,
        scrollStart,
        scrollEnd,
      });

      // Signal to Hero that transitioning logo has taken over
      heroAnchor.setAttribute("data-transition-ready", "true");
    };

    measure();
    window.addEventListener("resize", measure, { passive: true });

    const heroAnchor = document.getElementById("hero-logo-anchor");
    let ro: ResizeObserver | null = null;
    if (heroAnchor && typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(measure);
      ro.observe(heroAnchor);
    }

    let mo: MutationObserver | null = null;
    const heroSection = heroAnchor?.closest("section") ?? heroAnchor;
    if (heroSection && typeof MutationObserver !== "undefined") {
      mo = new MutationObserver(measure);
      mo.observe(heroSection, {
        attributes: true,
        subtree: true,
        attributeFilter: ["class", "style"],
      });
    }

    // Delayed measurement to guarantee image and layout computation
    const t1 = setTimeout(measure, 100);
    const t2 = setTimeout(measure, 400);

    return () => {
      window.removeEventListener("resize", measure);
      if (ro) ro.disconnect();
      if (mo) mo.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, ["v4"]);

  return geometry;
}

export function HeroNavLogoTransition() {
  const { scrollY } = useScroll();
  const metrics = useLogoTransitionGeometry();

  // The logo holds its hero position until the incoming section is ~1 inch below
  // it, then glides into the navbar, staying just ahead of the rising section.
  // easeOut keeps the logo always ahead of the (linearly rising) section edge.
  const scrollRange = metrics ? [metrics.scrollStart, metrics.scrollEnd] : [0, 1];
  const transformOptions = { ease: easeOut };

  const startX = metrics ? metrics.startX : 0;
  const startY = metrics ? metrics.startY : 75;
  const endX = metrics ? metrics.endX : 20;
  const endY = metrics ? metrics.endY : 10;
  const scaleRatio =
    metrics && metrics.endH > 0 ? metrics.startH / metrics.endH : 4.5;

  const logoX = useTransform(scrollY, scrollRange, [startX, endX], transformOptions);
  const logoY = useTransform(scrollY, scrollRange, [startY, endY], transformOptions);
  const logoScale = useTransform(scrollY, scrollRange, [scaleRatio, 1], transformOptions);

  if (!metrics) return null;

  return (
    <motion.div
      key={`${Math.round(metrics.startX)}-${Math.round(metrics.startY)}-${metrics.startH}`}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        x: logoX,
        y: logoY,
        scale: logoScale,
        transformOrigin: "top left",
        zIndex: 60,
      }}
      className="pointer-events-none select-none"
    >
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <a
          href="#"
          onClick={(e) => {
            if (window.scrollY > 100) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="block pointer-events-auto focus-visible:outline-none"
          aria-label={`${AGENCY_NAME} - Página inicial`}
        >
          <img
            src="/images/logo-portocom.png"
            alt={`${AGENCY_NAME} — Design & Engenharia Digital`}
            style={{ height: metrics.endH }}
            className="w-auto object-contain mix-blend-screen"
          />
        </a>
      </motion.div>
    </motion.div>
  );
}
