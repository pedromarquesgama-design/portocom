"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
}

export function ScrollSection({
  children,
  className = "",
}: ScrollSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Vertical entrance tied to scroll: the section rises from below at exactly
  // the speed you scroll — and settles back down when scrolling back up.
  // Ends at 75% viewport height so even short end-of-page sections (footer)
  // always complete their entrance.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.75"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  return (
    <div ref={ref} className={`relative z-10 w-full overflow-hidden ${className}`}>
      <motion.div
        style={{ y, willChange: "transform" }}
        className="w-full transform-gpu"
      >
        {children}
      </motion.div>
    </div>
  );
}
