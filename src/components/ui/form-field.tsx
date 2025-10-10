import { cn } from "@/utils/utils";
import * as React from "react";
import { Input, type InputProps } from "./input";
import { Label } from "./label";
import { Textarea, type TextareaProps } from "./textarea";

export interface FormFieldProps {
  label?: string;
  required?: boolean;
  error?: string;
  helperText?: string;
  className?: string;
  children?: React.ReactNode;
}

const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  (
    { label, required, error, helperText, className, children, ...props },
    ref
  ) => {
    const hasError = Boolean(error);

    return (
      <div ref={ref} className={cn("space-y-2", className)} {...props}>
        {label && (
          <Label
            variant={hasError ? "error" : "default"}
            {...(required !== undefined && { required })}
          >
            {label}
          </Label>
        )}
        {children}
        {error && (
          <p
            className="dark:text-red-400 text-xs text-semantic-error"
            role="alert"
          >
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);
FormField.displayName = "FormField";

// Convenience components that combine FormField with Input/Textarea
export interface InputFieldProps
  extends Omit<InputProps, "error" | "helperText" | "required" | "className">,
    FormFieldProps {
  inputProps?: Partial<InputProps>;
}

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  (
    { label, required, error, helperText, className, inputProps, ...props },
    ref
  ) => (
    <FormField
      {...(label !== undefined && { label })}
      {...(required !== undefined && { required })}
      {...(error !== undefined && { error })}
      {...(helperText !== undefined && { helperText })}
      {...(className !== undefined && { className })}
    >
      <Input
        ref={ref}
        variant={error ? "error" : "default"}
        {...props}
        {...inputProps}
      />
    </FormField>
  )
);
InputField.displayName = "InputField";

export interface TextareaFieldProps
  extends Omit<
      TextareaProps,
      "error" | "helperText" | "required" | "className"
    >,
    FormFieldProps {
  textareaProps?: Partial<TextareaProps>;
}

const TextareaField = React.forwardRef<HTMLTextAreaElement, TextareaFieldProps>(
  (
    { label, required, error, helperText, className, textareaProps, ...props },
    ref
  ) => (
    <FormField
      {...(label !== undefined && { label })}
      {...(required !== undefined && { required })}
      {...(error !== undefined && { error })}
      {...(helperText !== undefined && { helperText })}
      {...(className !== undefined && { className })}
    >
      <Textarea
        ref={ref}
        variant={error ? "error" : "default"}
        {...props}
        {...textareaProps}
      />
    </FormField>
  )
);
TextareaField.displayName = "TextareaField";

export { FormField, InputField, TextareaField };
