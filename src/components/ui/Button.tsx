import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "emerald";
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
    "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#34D399] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] active:scale-[0.98]";

  const variantStyles = {
    primary:
      "bg-white text-black hover:bg-neutral-200 shadow-[0_0_20px_rgba(255,255,255,0.15)] rounded-full",
    secondary:
      "bg-[#171717]/80 hover:bg-[#262626] text-[#FAFAFA] border border-[#262626] hover:border-neutral-600 rounded-full backdrop-blur-md",
    outline:
      "bg-transparent hover:bg-white/5 text-[#FAFAFA] border border-[#262626] hover:border-neutral-500 rounded-full",
    ghost:
      "bg-transparent hover:bg-white/5 text-[#A3A3A3] hover:text-[#FAFAFA] rounded-full",
    emerald:
      "bg-[#34D399] text-[#0A0A0A] hover:bg-[#2ecc8f] font-semibold shadow-[0_0_25px_rgba(52,211,153,0.3)] rounded-full",
  };

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
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
