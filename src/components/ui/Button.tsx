import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "accent" | "dark" | "glass" | "outline";
  href?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "accent",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const styles = cn(
    variant === "accent" && "btn-accent",
    variant === "dark" && "btn-dark",
    variant === "glass" && "btn-glass",
    variant === "outline" && "btn-outline-glass",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    className
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}
