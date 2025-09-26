import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { RxChevronDown } from "react-icons/rx";

import { cn } from "@/lib/utils";

export const Accordion = AccordionPrimitive.Root;

export const AccordionItem = React.forwardRef(
  ({ className, ...props }, ref) => (
    <AccordionPrimitive.Item
      ref={ref}
      className={cn("border-b border-scheme-border", className)}
      {...props}
    />
  ),
);
AccordionItem.displayName = "AccordionItem";

export const AccordionTrigger = React.forwardRef(
  ({ className, children, icon, ...props }, ref) => {
    const Icon = React.useMemo(() => {
      if (!icon || !React.isValidElement(icon)) {
        return (
          <RxChevronDown className="ml-3 size-5 shrink-0 text-scheme-text transition-transform duration-200" />
        );
      }

      return React.cloneElement(icon, {
        className: cn(
          "ml-3 size-6 shrink-0 text-scheme-text transition-transform duration-200",
          icon.props?.className,
        ),
      });
    }, [icon]);

    return (
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
          ref={ref}
          className={cn(
            "flex flex-1 items-center justify-between py-4 text-left text-base font-semibold transition-all hover:text-scheme-text/80 [&[data-state=open]>svg]:rotate-45",
            className,
          )}
          {...props}
        >
          <span>{children}</span>
          {Icon}
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
    );
  },
);
AccordionTrigger.displayName = "AccordionTrigger";

export const AccordionContent = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
      ref={ref}
      className={cn(
        "overflow-hidden text-base transition-all data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up",
        className,
      )}
      {...props}
    >
      <div className="pt-2 pb-5 md:text-base text-current">{children}</div>
    </AccordionPrimitive.Content>
  ),
);
AccordionContent.displayName = "AccordionContent";