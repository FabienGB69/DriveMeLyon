import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-sm border border-black/[0.03] shadow-sm",
        hover &&
          "transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-[#c5a880]/25",
        className
      )}
    >
      {children}
    </div>
  );
}
