import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary-800 text-white shadow hover:bg-primary-700 hover:scale-105",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 hover:scale-105",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground hover:scale-105",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 hover:scale-105",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:scale-105",
        link: "text-primary underline-offset-4 hover:underline",
        primary:
          "py-3 px-4 rounded-xl font-normal text-sm bg-primary-800 hover:bg-primary-700 hover:scale-105 text-white",
      },
      size: {
        default: "h-10 px-4 py-2.5",
        sm: "h-8 rounded-md px-4 py-2 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

/**
 * @param {import("react").ComponentProps<"button"> & {
 *   variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "primary",
 *   size?: "default" | "sm" | "lg" | "icon",
 *   asChild?: boolean,
 *   ctaClass?: string,
 * }} props
 */
function Button({
  className,
  variant,
  size,
  asChild = false,
  ctaClass = "",
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(ctaClass, buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
