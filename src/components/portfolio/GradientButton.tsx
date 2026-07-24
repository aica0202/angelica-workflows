import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  icon?: ReactNode;
  asChild?: never;
}

const variants: Record<Variant, string> = {
  primary:
    "gradient-button btn-glow text-white border border-white/10",
  secondary:
    "bg-card-elevated/70 hover:bg-card-elevated text-foreground border border-border hover:border-primary-bright/40 transition-colors",
  ghost:
    "bg-transparent text-foreground/90 hover:text-foreground hover:bg-white/5 border border-transparent",
};

export const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant = "primary", icon, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          className,
        )}
        {...props}
      >
        {children}
        {icon}
      </button>
    );
  },
);
GradientButton.displayName = "GradientButton";
