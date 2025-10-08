import { cn } from "@/utils/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const cardVariants = cva(
  [
    "rounded-lg border bg-neutral-0 text-neutral-900",
    "dark:bg-neutral-900 dark:text-neutral-100 dark:border-neutral-700",
    "transition-all duration-200 ease-in-out"
  ],
  {
    variants: {
      variant: {
        default: [
          "border-neutral-200 shadow-sm",
          "dark:border-neutral-700"
        ],
        elevated: [
          "border-neutral-200 shadow-md hover:shadow-lg",
          "dark:border-neutral-700"
        ],
        outlined: [
          "border-2 border-neutral-300 shadow-none",
          "dark:border-neutral-600"
        ],
        ghost: [
          "border-transparent shadow-none bg-transparent",
          "hover:bg-neutral-50 dark:hover:bg-neutral-800"
        ]
      },
      padding: {
        none: "p-0",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
        xl: "p-10"
      },
      interactive: {
        true: [
          "cursor-pointer hover:shadow-md",
          "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
          "dark:focus:ring-offset-neutral-900",
          "active:scale-[0.98] transition-transform"
        ],
        false: ""
      }
    },
    defaultVariants: {
      variant: "default",
      padding: "md",
      interactive: false
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, interactive, asChild = false, ...props }, ref) => {
    const Comp = asChild ? "div" : "div";
    return (
      <Comp
        ref={ref}
        className={cn(cardVariants({ variant, padding, interactive, className }))}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-xl font-semibold leading-none tracking-tight text-neutral-900 dark:text-neutral-100",
      className
    )}
    {...props}
  >
    {children}
  </h3>
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-sm text-neutral-600 dark:text-neutral-400",
      className
    )}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
    Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, cardVariants
};
