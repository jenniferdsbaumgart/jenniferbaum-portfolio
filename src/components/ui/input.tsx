import { cn } from "@/utils/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const inputVariants = cva(
  [
    "flex w-full rounded-lg border bg-neutral-0 px-3 py-2 text-sm",
    "placeholder:text-neutral-400 dark:placeholder:text-neutral-500",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "transition-all duration-200 ease-in-out",
    "dark:bg-neutral-900 dark:text-neutral-100"
  ],
  {
    variants: {
      variant: {
        default: [
          "border-neutral-300 dark:border-neutral-600",
          "focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20",
          "dark:focus:border-primary-400"
        ],
        error: [
          "border-semantic-error text-semantic-error",
          "focus:border-semantic-error focus:ring-2 focus:ring-red-500/20",
          "dark:border-red-400 dark:text-red-400"
        ],
        success: [
          "border-semantic-success text-semantic-success",
          "focus:border-semantic-success focus:ring-2 focus:ring-green-500/20",
          "dark:border-green-400 dark:text-green-400"
        ]
      },
      size: {
        sm: "h-8 px-2 text-xs",
        md: "h-10 px-3 text-sm",
        lg: "h-12 px-4 text-base"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: string;
  helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    variant, 
    size, 
    type = "text",
    leftIcon,
    rightIcon,
    error,
    helperText,
    ...props 
  }, ref) => {
    const hasError = Boolean(error);
    const inputVariant = hasError ? "error" : variant;
    
    return (
      <div className="w-full">
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500">
              {leftIcon}
            </div>
          )}
          <input
            type={type}
            className={cn(
              inputVariants({ variant: inputVariant, size, className }),
              leftIcon && "pl-10",
              rightIcon && "pr-10"
            )}
            ref={ref}
            aria-invalid={hasError}
            aria-describedby={
              error ? `${props.id}-error` : 
              helperText ? `${props.id}-helper` : undefined
            }
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500">
              {rightIcon}
            </div>
          )}
        </div>
        
        {error && (
          <p 
            id={`${props.id}-error`}
            className="mt-1 text-xs text-semantic-error dark:text-red-400"
            role="alert"
          >
            {error}
          </p>
        )}
        
        {helperText && !error && (
          <p 
            id={`${props.id}-helper`}
            className="mt-1 text-xs text-neutral-500 dark:text-neutral-400"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input, inputVariants };
