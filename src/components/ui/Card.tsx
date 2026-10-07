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
      "bg-[#181816] text-[#F5F4EE] border-[#2A2925] shadow-[0_1px_3px_rgba(0,0,0,0.25),0_4px_12px_rgba(0,0,0,0.15)] hover:border-[#3D3C36] hover:-translate-y-0.5",
    highlight:
      "bg-[#F4F2EC] text-[#121211] border-[#E5E2D8] shadow-[0_4px_12px_rgba(0,0,0,0.12),0_12px_32px_rgba(0,0,0,0.2)]",
    muted:
      "bg-[#151514] text-[#F5F4EE] border-[#242320]",
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
    <h3 className={`text-xl md:text-2xl font-bold tracking-tight ${className}`}>
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
  return <p className={`text-sm text-[#A3A096] leading-relaxed ${className}`}>{children}</p>;
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
