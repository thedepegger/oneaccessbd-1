import * as React from "react";

import { cn } from "@/lib/utils";

export function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-card border border-scheme-border bg-white shadow-sm",
        className,
      )}
      {...props}
    />
  );
}
