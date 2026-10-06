import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "glass" | "glass-interactive" | "light" | "ghost";
}

export function Card({
  children,
  variant = "glass",
  className = "",
  ...props
}: CardProps) {
  const baseStyles = "relative overflow-hidden rounded-2xl md:rounded-3xl p-6 md:p-8 transition-all duration-300";

  const variantStyles = {
    glass:
      "bg-[#171717]/85 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
    "glass-interactive":
      "bg-[#171717]/85 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-white/20 hover:shadow-[0_12px_40px_rgba(52,211,153,0.12)] hover:-translate-y-1 cursor-pointer",
    light:
      "bg-[#FAFAFA] text-[#0A0A0A] border border-white shadow-[0_20px_50px_rgba(255,255,255,0.1),0_0_40px_rgba(52,211,153,0.25)]",
    ghost:
      "bg-[#121212]/50 border border-white/5",
  };

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {/* Top subtle highlight sheen for glass cards */}
      {variant !== "light" && (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      )}
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`mb-4 flex flex-col gap-1.5 ${className}`}>{children}</div>;
}

export function CardTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3 className={`text-xl md:text-2xl font-bold tracking-tight text-[#FAFAFA] ${className}`}>
      {children}
    </h3>
  );
}

export function CardDescription({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={`text-sm text-[#A3A3A3] leading-relaxed ${className}`}>{children}</p>;
}

export function CardContent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`relative z-10 ${className}`}>{children}</div>;
}
