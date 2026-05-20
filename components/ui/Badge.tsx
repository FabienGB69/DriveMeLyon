import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "dark" | "light";
  className?: string;
}

export function Badge({ children, variant = "gold", className }: BadgeProps) {
  const variants = {
    gold: "bg-[#080808] text-[#C6A15B] border border-[#C6A15B]",
    dark: "bg-[#080808]/80 text-white border border-white/10",
    light: "bg-[#C6A15B]/10 text-[#080808] border border-[#C6A15B]/20",
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
