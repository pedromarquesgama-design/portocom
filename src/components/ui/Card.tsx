import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "tactile" | "highlight" | "muted";
}

export function Card({
  children,
  variant = "tactile",
  className = "",
  ...props
}: CardProps) {
  const baseStyles = "relative rounded-xl p-6 md:p-8 transition-all duration-200 border";

  const variantStyles = {
    tactile:
      "bg-[#121217] text-[#FDFDFC] border border-white/[0.08] border-t-[#F59E0B]/20 shadow-[0_4px_16px_rgba(0,0,0,0.5)] hover:border-[#F59E0B]/40 hover:-translate-y-0.5",
    highlight:
      "bg-[#1A1A24] text-[#FDFDFC] border border-[#F59E0B]/30 shadow-[0_4px_24px_rgba(245,158,11,0.15)]",
    muted:
      "bg-[#0E0E13] text-[#FDFDFC] border border-white/[0.04]",
  };

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
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
    <h3 className={`text-xl md:text-2xl font-heading font-bold tracking-tight text-[#FDFDFC] ${className}`}>
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
  return <p className={`text-sm text-[#B8B8C2] leading-relaxed font-sans ${className}`}>{children}</p>;
}

export function CardContent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`relative ${className}`}>{children}</div>;
}
