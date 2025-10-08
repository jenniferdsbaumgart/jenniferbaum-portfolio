import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

// Polymorphic component types for advanced composition
type AsProp<C extends React.ElementType> = {
  as?: C;
};

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

type PolymorphicComponentProp<
  C extends React.ElementType,
  Props = {}
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>["ref"];

export type PolymorphicComponentPropWithRef<
  C extends React.ElementType,
  Props = {}
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> };

// Text component - polymorphic example
export interface TextOwnProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold";
  color?: "primary" | "secondary" | "neutral" | "success" | "warning" | "error";
  align?: "left" | "center" | "right" | "justify";
  truncate?: boolean;
  asChild?: boolean;
}

type TextComponent = <C extends React.ElementType = "p">(
  props: PolymorphicComponentPropWithRef<C, TextOwnProps>
) => React.ReactElement | null;

const Text: TextComponent = React.forwardRef(
  <C extends React.ElementType = "p">(
    {
      as,
      size = "base",
      weight = "normal",
      color = "neutral",
      align = "left",
      truncate = false,
      asChild = false,
      className,
      children,
      ...props
    }: PolymorphicComponentPropWithRef<C, TextOwnProps>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = asChild ? Slot : as || "p";

    const sizeClasses = {
      xs: "text-xs",
      sm: "text-sm", 
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
    };

    const weightClasses = {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    };

    const colorClasses = {
      primary: "text-primary-600 dark:text-primary-400",
      secondary: "text-secondary-600 dark:text-secondary-400",
      neutral: "text-neutral-700 dark:text-neutral-300",
      success: "text-semantic-success dark:text-green-400",
      warning: "text-semantic-warning dark:text-yellow-400",
      error: "text-semantic-error dark:text-red-400",
    };

    const alignClasses = {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    };

    const classes = [
      sizeClasses[size],
      weightClasses[weight],
      colorClasses[color],
      alignClasses[align],
      truncate && "truncate",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <Component ref={ref} className={classes} {...props}>
        {children}
      </Component>
    );
  }
);

Text.displayName = "Text";

// Heading component - another polymorphic example
export interface HeadingOwnProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
  weight?: "normal" | "medium" | "semibold" | "bold";
  color?: "primary" | "secondary" | "neutral";
  asChild?: boolean;
}

type HeadingComponent = <C extends React.ElementType = "h1">(
  props: PolymorphicComponentPropWithRef<C, HeadingOwnProps>
) => React.ReactElement | null;

const Heading: HeadingComponent = React.forwardRef(
  <C extends React.ElementType = "h1">(
    {
      as,
      level = 1,
      size,
      weight = "semibold",
      color = "neutral",
      asChild = false,
      className,
      children,
      ...props
    }: PolymorphicComponentPropWithRef<C, HeadingOwnProps>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = asChild ? Slot : as || (`h${level}` as React.ElementType);

    // Default sizes based on heading level
    const defaultSizes = {
      1: "5xl",
      2: "4xl", 
      3: "3xl",
      4: "2xl",
      5: "xl",
      6: "lg",
    } as const;

    const actualSize = size || defaultSizes[level];

    const sizeClasses = {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base", 
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
    };

    const weightClasses = {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold", 
      bold: "font-bold",
    };

    const colorClasses = {
      primary: "text-primary-600 dark:text-primary-400",
      secondary: "text-secondary-600 dark:text-secondary-400",
      neutral: "text-neutral-900 dark:text-neutral-100",
    };

    const classes = [
      sizeClasses[actualSize],
      weightClasses[weight],
      colorClasses[color],
      "leading-tight tracking-tight",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <Component ref={ref} className={classes} {...props}>
        {children}
      </Component>
    );
  }
);

Heading.displayName = "Heading";

export { Heading, Text };
