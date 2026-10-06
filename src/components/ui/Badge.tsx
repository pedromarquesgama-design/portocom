import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "default" | "emerald" | "blue" | "outline";
}

export function Badge({
  children,
  icon,
  variant = "default",
  className = "",
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium tracking-wide backdrop-blur-md transition-colors duration-200 border";

  const variantStyles = {
    default:
      "bg-[#171717]/90 text-[#A3A3A3] border-[#262626] hover:border-neutral-600 shadow-[0_2px_10px_rgba(0,0,0,0.5)]",
    emerald:
      "bg-[#34D399]/10 text-[#34D399] border-[#34D399]/30 shadow-[0_0_15px_rgba(52,211,153,0.15)]",
    blue:
      "bg-[#60A5FA]/10 text-[#60A5FA] border-[#60A5FA]/30 shadow-[0_0_15px_rgba(96,165,250,0.15)]",
    outline:
      "bg-transparent text-[#A3A3A3] border-white/10 hover:border-white/20",
  };

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {icon ? (
        <span className="shrink-0">{icon}</span>
      ) : (
        <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] shadow-[0_0_6px_#34D399]" />
      )}
      <span>{children}</span>
    </div>
  );
}
