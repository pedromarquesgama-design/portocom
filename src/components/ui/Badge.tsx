import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "default" | "accent" | "outline";
}

export function Badge({
  children,
  icon,
  variant = "default",
  className = "",
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-medium tracking-wide transition-colors border";

  const variantStyles = {
    default:
      "bg-[#1A1A18] text-[#C4C2B9] border-[#2C2B27] shadow-[0_1px_2px_rgba(0,0,0,0.15)]",
    accent:
      "bg-[#1A5446]/20 text-[#45BFA0] border-[#1A5446]/40",
    outline:
      "bg-transparent text-[#A3A096] border-[#2C2B27]",
  };

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {icon ? (
        <span className="shrink-0">{icon}</span>
      ) : (
        <span className="w-1.5 h-1.5 rounded-full bg-[#2FA882]" />
      )}
      <span>{children}</span>
    </div>
  );
}
