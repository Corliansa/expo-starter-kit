import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { Text, TouchableOpacity } from "react-native";

import { cn } from "@/utils/cn";

const buttonVariants = cva(
  "flex flex-row items-center justify-center rounded-md disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary",
        destructive: "bg-destructive",
        outline: "border border-input bg-transparent",
        secondary: "bg-secondary",
        ghost: "bg-transparent",
        link: "bg-transparent",
      },
      size: {
        default: "h-9 px-4",
        sm: "h-8 px-3",
        lg: "h-10 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const buttonTextVariants = cva("text-center text-sm font-medium", {
  variants: {
    variant: {
      default: "text-primary-foreground",
      destructive: "text-destructive-foreground",
      outline: "text-foreground",
      secondary: "text-secondary-foreground",
      ghost: "text-foreground",
      link: "text-primary underline",
    },
    size: {
      default: "",
      sm: "text-xs",
      lg: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof TouchableOpacity>,
    VariantProps<typeof buttonVariants> {
  labelClassName?: string;
}
const Button = React.forwardRef<TouchableOpacity, ButtonProps>(
  ({ labelClassName, className, variant, size, children, ...props }, ref) => {
    return (
      <TouchableOpacity
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <Text
          className={cn(
            buttonTextVariants({ variant, size, className: labelClassName })
          )}
        >
          {children}
        </Text>
      </TouchableOpacity>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants, buttonTextVariants };
