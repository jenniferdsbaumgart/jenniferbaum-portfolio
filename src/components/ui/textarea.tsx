import { cn } from "@/utils/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const textareaVariants = cva(
  [
    "flex min-h-[80px] w-full rounded-lg border bg-neutral-0 px-3 py-2 text-sm",
    "placeholder:text-neutral-400 dark:placeholder:text-neutral-500",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "transition-all duration-200 ease-in-out resize-vertical",
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
        sm: "min-h-[60px] px-2 py-1 text-xs",
        md: "min-h-[80px] px-3 py-2 text-sm",
        lg: "min-h-[120px] px-4 py-3 text-base"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    },
  }
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  error?: string;
  helperText?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ 
    className, 
    variant, 
    size,
    error,
    helperText,
    ...props 
  }, ref) => {
    const hasError = Boolean(error);
    const textareaVariant = hasError ? "error" : variant;
    
    return (
      <div className="w-full">
        <textarea
          className={cn(textareaVariants({ variant: textareaVariant, size, className }))}
          ref={ref}
          aria-invalid={hasError}
          aria-describedby={
            error ? `${props.id}-error` : 
            helperText ? `${props.id}-helper` : undefined
          }
          {...props}
        />
        
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
Textarea.displayName = "Textarea";

export { Textarea, textareaVariants };
