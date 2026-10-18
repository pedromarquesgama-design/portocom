"use client";

import React from "react";
import { motion } from "motion/react";

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
}

export function ScrollSection({
  children,
  className = "",
}: ScrollSectionProps) {
  return (
    <div className={`relative z-10 w-full ${className}`}>
      {children}
    </div>
  );
}
