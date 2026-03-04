import { formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";
import type { Money } from "@/lib/shopify/types";

interface PriceProps {
  amount: Money;
  compareAt?: Money | null;
  className?: string;
}

export function Price({ amount, compareAt, className }: PriceProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <span className="text-xl font-bold gradient-text-warm">
        {formatPrice(amount.amount, amount.currencyCode)}
      </span>
      {compareAt && parseFloat(compareAt.amount) > parseFloat(amount.amount) && (
        <span className="text-sm text-[#090A11]/30 line-through">
          {formatPrice(compareAt.amount, compareAt.currencyCode)}
        </span>
      )}
    </div>
  );
}
