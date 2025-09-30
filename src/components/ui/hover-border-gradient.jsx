"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const HoverBorderGradient = React.forwardRef(
  (
    {
      as: Component = "div",
      children,
      containerClassName,
      className,
      borderRadius = "rounded-full",
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "group relative inline-flex overflow-hidden bg-gradient-to-r from-[#0EFF00] via-[#32E910] to-[#0EFF00] bg-[length:320%_320%] p-[2px] animate-border-trail transition-transform duration-300 ease-out hover:-translate-y-0.5",
          borderRadius,
          containerClassName,
        )}
        {...props}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 opacity-25 transition-opacity duration-300 group-hover:opacity-55"
          style={{
            background:
              "linear-gradient(140deg, rgba(14,255,0,0.28) 0%, rgba(50,233,16,0.22) 45%, rgba(14,140,0,0.2) 100%)",
          }}
        />
        <span
          className={cn(
            "relative z-10 inline-flex h-full w-full items-center justify-center rounded-full bg-[#d9ffbf] px-5 py-1.5 text-sm font-semibold text-[#044012] transition-colors duration-200 group-hover:bg-[#c4ffa2] group-active:bg-[#b1ff89] md:px-6 md:text-base",
            className,
          )}
        >
          {children}
        </span>
      </Component>
    );
  },
);

HoverBorderGradient.displayName = "HoverBorderGradient";
