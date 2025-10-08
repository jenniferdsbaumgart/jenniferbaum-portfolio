"use client";

import { focusRing } from "@/design-system/utils";
import { cn } from "@/utils/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

// Context for compound component pattern
interface TabsContextValue {
  activeTab: string;
  setActiveTab: (value: string) => void;
  orientation: "horizontal" | "vertical";
}

const TabsContext = React.createContext<TabsContextValue | null>(null);

const useTabsContext = () => {
  const context = React.useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs compound components must be used within a Tabs component");
  }
  return context;
};

// Main Tabs component (compound component root)
export interface TabsProps {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  orientation?: "horizontal" | "vertical";
  className?: string;
  children: React.ReactNode;
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ 
    defaultValue, 
    value, 
    onValueChange, 
    orientation = "horizontal", 
    className, 
    children,
    ...props 
  }, ref) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue || "");
    
    const activeTab = value !== undefined ? value : internalValue;
    const setActiveTab = React.useCallback((newValue: string) => {
      if (value === undefined) {
        setInternalValue(newValue);
      }
      onValueChange?.(newValue);
    }, [value, onValueChange]);

    const contextValue = React.useMemo(() => ({
      activeTab,
      setActiveTab,
      orientation,
    }), [activeTab, setActiveTab, orientation]);

    return (
      <TabsContext.Provider value={contextValue}>
        <div
          ref={ref}
          className={cn(
            "w-full",
            orientation === "vertical" && "flex gap-4",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </TabsContext.Provider>
    );
  }
);
Tabs.displayName = "Tabs";

// TabsList component
const tabsListVariants = cva(
  [
    "inline-flex items-center justify-center rounded-lg bg-neutral-100 p-1",
    "dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400"
  ],
  {
    variants: {
      orientation: {
        horizontal: "h-10 w-full",
        vertical: "flex-col h-auto w-auto"
      }
    },
    defaultVariants: {
      orientation: "horizontal"
    }
  }
);

export interface TabsListProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tabsListVariants> {}

const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, ...props }, ref) => {
    const { orientation } = useTabsContext();
    
    return (
      <div
        ref={ref}
        role="tablist"
        aria-orientation={orientation}
        className={cn(tabsListVariants({ orientation, className }))}
        {...props}
      />
    );
  }
);
TabsList.displayName = "TabsList";

// TabsTrigger component
const tabsTriggerVariants = cva(
  [
    "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5",
    "text-sm font-medium ring-offset-white transition-all",
    "disabled:pointer-events-none disabled:opacity-50",
    "data-[state=active]:bg-neutral-0 data-[state=active]:text-neutral-900",
    "data-[state=active]:shadow-sm dark:ring-offset-neutral-950",
    "dark:data-[state=active]:bg-neutral-950 dark:data-[state=active]:text-neutral-50",
    focusRing
  ]
);

export interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, value, children, ...props }, ref) => {
    const { activeTab, setActiveTab } = useTabsContext();
    const isActive = activeTab === value;

    return (
      <button
        ref={ref}
        role="tab"
        aria-selected={isActive}
        aria-controls={`tabpanel-${value}`}
        data-state={isActive ? "active" : "inactive"}
        className={cn(tabsTriggerVariants({ className }))}
        onClick={() => setActiveTab(value)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
TabsTrigger.displayName = "TabsTrigger";

// TabsContent component
export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  forceMount?: boolean;
}

const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, value, forceMount, children, ...props }, ref) => {
    const { activeTab } = useTabsContext();
    const isActive = activeTab === value;

    if (!forceMount && !isActive) {
      return null;
    }

    return (
      <div
        ref={ref}
        role="tabpanel"
        id={`tabpanel-${value}`}
        aria-labelledby={`tab-${value}`}
        data-state={isActive ? "active" : "inactive"}
        className={cn(
          "mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300",
          !isActive && "hidden",
          className
        )}
        tabIndex={0}
        {...props}
      >
        {children}
      </div>
    );
  }
);
TabsContent.displayName = "TabsContent";

export { Tabs, TabsContent, TabsList, TabsTrigger };
