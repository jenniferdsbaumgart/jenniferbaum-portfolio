import { cn } from "@/utils/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { JSX } from "react";
import * as React from "react";

const containerVariants = cva("w-full mx-auto", {
  variants: {
    size: {
      sm: "max-w-screen-sm",
      md: "max-w-screen-md",
      lg: "max-w-screen-lg",
      xl: "max-w-screen-xl",
      "2xl": "max-w-screen-2xl",
      full: "max-w-full",
    },
    padding: {
      none: "px-0",
      sm: "px-4",
      md: "px-6",
      lg: "px-8",
      xl: "px-12",
    },
    center: {
      true: "text-center",
      false: "",
    },
  },
  defaultVariants: {
    size: "xl",
    padding: "md",
    center: false,
  },
});

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  asChild?: boolean;
}

// Proper forwardRef implementation with generic support
const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, padding, center, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";

    return (
      <Comp
        ref={ref}
        className={cn(containerVariants({ size, padding, center, className }))}
        {...props}
      />
    );
  }
);
Container.displayName = "Container";

// Section component that composes with Container
export interface SectionProps extends ContainerProps {
  as?: keyof JSX.IntrinsicElements;
  fullWidth?: boolean;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      as: Component = "section",
      fullWidth = false,
      size,
      padding,
      center,
      children,
      asChild = false,
      ...props
    },
    ref
  ) => {
    if (fullWidth) {
      const Comp = asChild ? Slot : (Component as any);
      return (
        <Comp ref={ref} className={cn("w-full", className)} {...props}>
          {children}
        </Comp>
      );
    }

    const Comp = asChild ? Slot : (Component as any);
    return (
      <Comp ref={ref} className={className} {...props}>
        <Container
          size={size}
          padding={padding}
          center={center}
          asChild={asChild}
        >
          {children}
        </Container>
      </Comp>
    );
  }
);
Section.displayName = "Section";

// Grid component with proper composition
const gridVariants = cva("grid gap-4", {
  variants: {
    columns: {
      1: "grid-cols-1",
      2: "grid-cols-1 md:grid-cols-2",
      3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
      6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
      12: "grid-cols-4 md:grid-cols-6 lg:grid-cols-12",
    },
    gap: {
      none: "gap-0",
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8",
    },
    responsive: {
      true: "",
      false: "",
    },
  },
  defaultVariants: {
    columns: 1,
    gap: "md",
    responsive: true,
  },
});

export interface GridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridVariants> {
  asChild?: boolean;
}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, columns, gap, responsive, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";

    return (
      <Comp
        ref={ref}
        className={cn(gridVariants({ columns, gap, responsive, className }))}
        {...props}
      />
    );
  }
);
Grid.displayName = "Grid";

// Flex component for flexible layouts
const flexVariants = cva("flex", {
  variants: {
    direction: {
      row: "flex-row",
      "row-reverse": "flex-row-reverse",
      col: "flex-col",
      "col-reverse": "flex-col-reverse",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    },
    wrap: {
      nowrap: "flex-nowrap",
      wrap: "flex-wrap",
      "wrap-reverse": "flex-wrap-reverse",
    },
    gap: {
      none: "gap-0",
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8",
    },
  },
  defaultVariants: {
    direction: "row",
    align: "start",
    justify: "start",
    wrap: "nowrap",
    gap: "none",
  },
});

export interface FlexProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof flexVariants> {
  asChild?: boolean;
}

const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      className,
      direction,
      align,
      justify,
      wrap,
      gap,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "div";

    return (
      <Comp
        ref={ref}
        className={cn(
          flexVariants({
            direction,
            align,
            justify,
            wrap,
            gap,
            className,
          })
        )}
        {...props}
      />
    );
  }
);
Flex.displayName = "Flex";

export {
  Container,
  containerVariants,
  Flex,
  flexVariants,
  Grid,
  gridVariants,
  Section,
};
