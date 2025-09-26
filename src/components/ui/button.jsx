import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // base classes
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/40 disabled:cursor-not-allowed disabled:opacity-50 transition-[transform,box-shadow,background-color,color] duration-150 active:translate-y-[4px]",
  {
    variants: {
      variant: {
        default:
          // 3D shadow + pressed state shadow
          "bg-scheme-text text-white hover:bg-scheme-text/90 shadow-[0_6px_0_0_rgba(0,0,0,0.45)] active:shadow-[0_2px_0_0_rgba(0,0,0,0.45)]",
        secondary:
          "bg-slate-100 text-scheme-text hover:bg-slate-200 shadow-[0_6px_0_0_rgba(0,0,0,0.15)] active:shadow-[0_2px_0_0_rgba(0,0,0,0.15)]",
        link:
          "text-scheme-text underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5",
        sm: "h-9 px-4 text-sm",
        link: "h-auto px-0 py-0 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export const Button = React.forwardRef(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      iconLeft,
      iconRight,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {iconLeft ? <span className="mr-2 flex items-center">{iconLeft}</span> : null}
        <span>{children}</span>
        {iconRight ? <span className="ml-2 flex items-center">{iconRight}</span> : null}
      </Comp>
    );
  },
);

Button.displayName = "Button";

export { buttonVariants };