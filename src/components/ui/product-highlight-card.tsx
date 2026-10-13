"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

// Define the properties for the ProductHighlightCard component
interface ProductHighlightCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  categoryIcon: React.ReactNode;
  category: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  children?: React.ReactNode;
}

export const ProductHighlightCard = React.forwardRef<HTMLDivElement, ProductHighlightCardProps>(
  ({ className, categoryIcon, category, title, description, imageSrc, imageAlt, ...props }, ref) => {
    
    // --- Animation Logic for 3D Tilt Effect ---
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ clientX, clientY, currentTarget }: React.MouseEvent) => {
      const { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    };

    // Transform mouse position into a rotation value
    const rotateX = useTransform(mouseY, [0, 350], [10, -10]);
    const rotateY = useTransform(mouseX, [0, 350], [-10, 10]);
    
    // Apply spring physics for a smoother animation
    const springConfig = { stiffness: 300, damping: 20 };
    const springRotateX = useSpring(rotateX, springConfig);
    const springRotateY = useSpring(rotateY, springConfig);
    
    // --- Animation Logic for Glow Effect ---
    const glowX = useTransform(mouseX, [0, 350], [0, 100]);
    const glowY = useTransform(mouseY, [0, 350], [0, 100]);
    const glowOpacity = useTransform(mouseX, [0, 350], [0, 0.5]);

    return (
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          mouseX.set(0);
          mouseY.set(0);
        }}
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
        className={cn(
          "relative h-[380px] w-[350px] rounded-2xl bg-[#161614] border border-[#2A2925] shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-[#2FA882]/40 overflow-hidden",
          className
        )}
        {...props}
      >
        <div style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }} className="absolute inset-4 rounded-xl bg-white/5 border border-white/10 shadow-inner overflow-hidden">
          
          {/* Diagonal line texture */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

          {/* Glow effect that follows the mouse */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-xl opacity-0"
            style={{
              opacity: glowOpacity,
              background: `radial-gradient(120px at ${glowX}% ${glowY}%, rgba(47, 168, 130, 0.4), transparent 60%)`,
            }}
          />

          <div className="relative z-10 flex h-full flex-col justify-between p-6">
            <div className="flex items-center space-x-2 text-[#F5F4EE]">
              {categoryIcon}
              <span className="text-xs font-semibold uppercase tracking-wider text-[#2FA882]">{category}</span>
            </div>
            
            <div className="text-[#F5F4EE] mb-8">
              <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
              <p className="mt-2 max-w-[65%] text-xs text-[#A3A096] leading-relaxed">
                {description}
              </p>
            </div>
          </div>
          
          {/* Product Image */}
          <motion.img
            src={imageSrc}
            alt={imageAlt}
            style={{ transform: "translateZ(50px)" }}
            whileHover={{ scale: 1.1, y: -15, x: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute -right-8 -bottom-8 h-48 w-48 object-cover rounded-2xl border border-white/10 shadow-2xl"
          />
        </div>
      </motion.div>
    );
  }
);

ProductHighlightCard.displayName = "ProductHighlightCard";
