import { cn } from "@/utils/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const labelVariants = cva(
  [
    "text-sm font-medium leading-none text-neutral-700 dark:text-neutral-300",
    "peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  ],
  {
    variants: {
      variant: {
        default: "",
        error: "text-semantic-error dark:text-red-400",
        success: "text-semantic-success dark:text-green-400"
      },
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base"
      },
      required: {
        true: "after:content-['*'] after:ml-0.5 after:text-semantic-error",
        false: ""
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      required: false
    },
  }
);

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> {
  required?: boolean;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, variant, size, required, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(labelVariants({ variant, size, required, className }))}
      {...props}
    />
  )
);
Label.displayName = "Label";

export { Label, labelVariants };
