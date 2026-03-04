import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "sold-out";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full",
        variant === "default" && "glass-tag text-[#232743]",
        variant === "accent" && "text-white" ,
        variant === "sold-out" && "bg-[#090A11]/10 text-[#090A11]/40 backdrop-blur-sm",
        className
      )}
      style={variant === "accent" ? { background: "linear-gradient(135deg, #D4710A, #e8891f)" } : undefined}
    >
      {children}
    </span>
  );
}
