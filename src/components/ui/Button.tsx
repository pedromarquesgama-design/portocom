import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "accent"
    | "glass-emerald"
    | "glass-secondary";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  href,
  target,
  rel,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0E] active:translate-y-[1px]";

  const variantStyles = {
    primary:
      "bg-[#F59E0B] text-[#0A0A0E] hover:bg-[#FBBF24] shadow-[0_4px_16px_rgba(245,158,11,0.35)] hover:shadow-[0_6px_24px_rgba(245,158,11,0.5)] font-bold",
    secondary:
      "bg-white/[0.04] hover:bg-[#F59E0B]/10 text-[#FDFDFC] border border-white/10 hover:border-[#F59E0B]/40 shadow-[0_4px_12px_rgba(0,0,0,0.3)] backdrop-blur-md font-medium",
    outline:
      "bg-transparent hover:bg-white/[0.05] text-[#FDFDFC] border border-white/10 hover:border-[#F59E0B]/40",
    ghost:
      "bg-transparent hover:bg-[#F59E0B]/[0.06] text-[#B8B8C2] hover:text-[#F59E0B]",
    accent:
      "bg-[#F59E0B] hover:bg-[#D97706] text-[#0A0A0E] font-bold shadow-[0_4px_16px_rgba(245,158,11,0.35)] hover:shadow-[0_6px_24px_rgba(245,158,11,0.5)]",
    "glass-emerald":
      "bg-[#1E1810]/75 hover:bg-[#2A2012]/85 text-[#FDFDFC] border border-[#F59E0B]/50 hover:border-[#F59E0B] shadow-[0_0_24px_rgba(245,158,11,0.25)] hover:shadow-[0_0_32px_rgba(245,158,11,0.4)] backdrop-blur-md font-semibold",
    "glass-secondary":
      "bg-[#121217]/70 hover:bg-[#1A1A24]/80 text-[#D8C3AD] hover:text-[#FDFDFC] border border-white/10 hover:border-[#F59E0B]/40 shadow-[0_2px_8px_rgba(0,0,0,0.3)] backdrop-blur-md font-medium",
  };

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-4.5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5",
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
