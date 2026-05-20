import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "dark" | "light";
  className?: string;
}

export function Badge({ children, variant = "gold", className }: BadgeProps) {
  const variants = {
    gold: "bg-[#0a0a0a] text-[#c5a880] border border-[#c5a880]",
    dark: "bg-[#0a0a0a]/80 text-white border border-white/10",
    light: "bg-[#c5a880]/10 text-[#0a0a0a] border border-[#c5a880]/20",
  };

  return (
    <span
      className={cn(
        "inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
