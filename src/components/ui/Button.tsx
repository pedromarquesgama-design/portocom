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
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2FA882] focus-visible:ring-offset-2 focus-visible:ring-offset-[#121211] active:translate-y-[1px]";

  const variantStyles = {
    primary:
      "bg-[#F5F4EE] text-[#121211] hover:bg-[#E8E6DD] shadow-[0_1px_2px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.4)] font-semibold",
    secondary:
      "bg-[#1A1A18] hover:bg-[#22211E] text-[#F5F4EE] border border-[#2C2B27] hover:border-[#3D3C36] shadow-[0_1px_2px_rgba(0,0,0,0.2)]",
    outline:
      "bg-transparent hover:bg-white/[0.04] text-[#F5F4EE] border border-[#2C2B27] hover:border-[#3D3C36]",
    ghost:
      "bg-transparent hover:bg-white/[0.05] text-[#A3A096] hover:text-[#F5F4EE]",
    accent:
      "bg-[#1F6B5C] hover:bg-[#185549] text-white font-semibold shadow-[0_2px_4px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.2)]",
    "glass-emerald":
      "bg-[#132820]/75 hover:bg-[#183329]/85 text-[#F5F4EE] border border-[#2FA882]/80 hover:border-[#3DBA95] shadow-[0_0_24px_rgba(47,168,130,0.25)] hover:shadow-[0_0_32px_rgba(61,186,149,0.35)] backdrop-blur-md font-semibold",
    "glass-secondary":
      "bg-[#181816]/70 hover:bg-[#20201D]/80 text-[#E2DDD2] hover:text-[#F5F4EE] border border-[#2E2D28] hover:border-[#3D3C36] shadow-[0_2px_8px_rgba(0,0,0,0.3)] backdrop-blur-md font-medium",
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
