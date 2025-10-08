import { focusRing } from "@/design-system/utils";
import { cn } from "@/utils/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium",
    "disabled:pointer-events-none disabled:opacity-50",
    "transition-all duration-200 ease-in-out",
    focusRing,
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-primary-500 text-neutral-0 shadow-sm",
          "hover:bg-primary-600 hover:shadow-md",
          "active:bg-primary-700 active:scale-[0.98]",
          "dark:bg-primary-600 dark:hover:bg-primary-700"
        ],
        secondary: [
          "bg-secondary-500 text-neutral-0 shadow-sm",
          "hover:bg-secondary-600 hover:shadow-md",
          "active:bg-secondary-700 active:scale-[0.98]",
          "dark:bg-secondary-600 dark:hover:bg-secondary-700"
        ],
        outline: [
          "border-2 border-primary-500 text-primary-600 bg-transparent",
          "hover:bg-primary-50 hover:border-primary-600",
          "active:bg-primary-100 active:scale-[0.98]",
          "dark:border-primary-400 dark:text-primary-400",
          "dark:hover:bg-primary-950 dark:hover:border-primary-300"
        ],
        ghost: [
          "text-neutral-700 bg-transparent",
          "hover:bg-neutral-100 hover:text-neutral-900",
          "active:bg-neutral-200 active:scale-[0.98]",
          "dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
        ],
        link: [
          "text-primary-600 underline-offset-4 bg-transparent p-0 h-auto",
          "hover:underline hover:text-primary-700",
          "active:text-primary-800",
          "dark:text-primary-400 dark:hover:text-primary-300"
        ],
        destructive: [
          "bg-semantic-error text-neutral-0 shadow-sm",
          "hover:bg-red-600 hover:shadow-md",
          "active:bg-red-700 active:scale-[0.98]"
        ]
      },
      size: {
        sm: "h-8 px-3 text-sm rounded-md",
        md: "h-10 px-4 text-sm rounded-lg",
        lg: "h-12 px-6 text-base rounded-lg",
        xl: "h-14 px-8 text-lg rounded-xl",
        icon: "h-10 w-10 rounded-lg",
        "icon-sm": "h-8 w-8 rounded-md",
        "icon-lg": "h-12 w-12 rounded-lg"
      },
      loading: {
        true: "cursor-not-allowed",
        false: ""
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      loading: false
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    loading = false,
    leftIcon,
    rightIcon,
    children,
    disabled,
    asChild = false, 
    ...props 
  }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    const isDisabled = disabled || loading;
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, loading, className }))}
        ref={ref}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!loading && leftIcon && (
          <span className="flex items-center justify-center">
            {leftIcon}
          </span>
        )}
        {children}
        {!loading && rightIcon && (
          <span className="flex items-center justify-center">
            {rightIcon}
          </span>
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
