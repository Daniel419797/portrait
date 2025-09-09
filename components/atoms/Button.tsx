"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

const button = tv({
  base: "group inline-flex outline-none rounded-full cursor-pointer disabled:cursor-not-allowed relative overflow-hidden",
  variants: {
    size: {
      sm: "h-11 p-1 text-sm",
      md: "h-12 p-1 text-base",
      lg: "h-14 p-1.5 text-lg",
    },
    full: {
      true: "w-full",
      false: "w-auto",
    },
    variant: {
      ghost: "",
      rainbow: "",
    },
  },
  defaultVariants: {
    size: "md",
    full: false,
    variant: "rainbow",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  asChild?: boolean;
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, size, full, variant, asChild = false, isLoading, children, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(button({ size, full, variant }), className)}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {/* Rainbow border only if variant=rainbow */}
        {variant === "rainbow" && (
          <span className="absolute cursor-pointer inset-x-0 top-1/2 aspect-square -translate-y-1/2 bg-btn-gradient transition-transform duration-700 group-hover:rotate-[360deg] pointer-events-none"></span>
        )}

        {/* Inner content */}
        <span
          className={cn(
            "relative flex w-full items-center justify-center whitespace-nowrap rounded-full font-medium transition gap-2 px-4 sm:px-5",
            variant === "rainbow"
              ? "bg-white text-gray-700 shadow-sm border border-gray-50 hover:shadow-lg"
              : "bg-transparent text-gray-700 hover:bg-gray-100"
          )}
        >
          {/* Normal content */}
          <span
            className={cn(
              "inline-flex items-center justify-center gap-2 transition-transform",
              isLoading ? "scale-0 opacity-0" : "scale-100 opacity-100"
            )}
          >
            {children}
          </span>

          {/* Loading spinner */}
          <span
            className={cn(
              "absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 transform transition-transform",
              isLoading ? "scale-100 opacity-100" : "scale-0 opacity-0"
            )}
          >
            {variant === "rainbow" ? (
              // Rainbow border spinner
              <span
                className={cn(
                  "h-5 w-5 rounded-full border-2 border-transparent",
                  "bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500",
                  "bg-clip-border border-t-white",
                  "group-hover:animate-spin",
                  size === "lg" ? "h-6 w-6" : "h-5 w-5"
                )}
              />
            ) : (
              // Ghost: simple dot spinner
              <span
                className={cn(
                  "h-3 w-3 rounded-full bg-current animate-ping",
                  size === "lg" ? "h-4 w-4" : "h-3 w-3"
                )}
              />
            )}
          </span>
        </span>
      </Comp>
    );
  }
);

Button.displayName = "Button";
