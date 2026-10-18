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
    "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide transition-colors border";

  const variantStyles = {
    default:
      "bg-[#1A1A24] text-[#B8B8C2] border-white/[0.08] shadow-sm",
    accent:
      "bg-[#1A1A24] text-[#F59E0B] border-[#F59E0B]/30 shadow-[0_0_12px_rgba(245,158,11,0.15)]",
    outline:
      "bg-transparent text-[#8E8E93] border-white/[0.08]",
  };

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {icon ? (
        <span className="shrink-0">{icon}</span>
      ) : (
        <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] shadow-[0_0_6px_rgba(245,158,11,0.8)]" />
      )}
      <span>{children}</span>
    </div>
  );
}
