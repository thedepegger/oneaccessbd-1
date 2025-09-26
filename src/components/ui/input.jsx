import * as React from "react";

import { cn } from "@/lib/utils";

export const Input = React.forwardRef(({ className, type = "text", ...props }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      className={cn(
        "flex h-11 w-full rounded-full border border-scheme-border bg-white px-4 text-sm transition-colors placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-scheme-text/40 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
});

Input.displayName = "Input";
