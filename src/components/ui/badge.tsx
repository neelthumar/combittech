"use client";

import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "secondary" | "outline" | "accent";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default: "bg-primary-100 text-primary-700 border-primary-200",
    secondary: "bg-gray-100 text-gray-700 border-gray-200",
    outline: "bg-transparent text-gray-600 border-gray-300",
    accent: "bg-accent-100 text-accent-700 border-accent-200",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
