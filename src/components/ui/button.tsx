import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[transform,background-color,color,box-shadow] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass",
  {
    variants: {
      variant: {
        primary:
          "bg-ink text-canvas shadow-[var(--shadow-border)] hover:bg-ink/90",
        secondary:
          "bg-panel text-ink shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
        ghost: "bg-transparent text-mute hover:text-ink hover:bg-panel",
        brass: "bg-brass text-canvas hover:bg-brass/90",
      },
      size: {
        md: "h-11 min-h-11 rounded-lg px-4 text-[15px]",
        sm: "h-9 min-h-9 rounded-md px-3 text-sm",
        lg: "h-12 min-h-12 rounded-xl px-5 text-base",
        icon: "size-11 min-h-11 rounded-lg",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
