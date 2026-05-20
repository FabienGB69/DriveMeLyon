import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "outline-gold" | "outline-light" | "whatsapp";

interface ButtonProps {
  variant?: Variant;
  href?: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-[#C6A15B] text-[#080808] border border-[#C6A15B] hover:bg-[#b38e4a] hover:border-[#b38e4a] shadow-sm hover:shadow-md",
  "outline-gold":
    "bg-transparent text-[#C6A15B] border border-[#C6A15B] hover:bg-[#C6A15B] hover:text-[#080808]",
  "outline-light":
    "bg-transparent text-white border border-white/25 hover:bg-white hover:text-[#080808]",
  whatsapp:
    "bg-[#25D366] text-white border border-[#25D366] hover:bg-[#1eba59] shadow-sm",
};

export function Button({
  variant = "primary",
  href,
  external,
  className,
  children,
  ...props
}: ButtonProps & ComponentPropsWithoutRef<"button">) {
  const base =
    "inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs font-semibold uppercase tracking-widest rounded-sm transition-all duration-200 hover:-translate-y-0.5";

  if (href) {
    return (
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={cn(base, variants[variant], className)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
