import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends ComponentProps<"button"> {
  variant?: VariantKey;
  size?: SizeKey;
  href?: string;
}

const base = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0";

const variants = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  destructive:
    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
  outline:
    "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  link: "text-primary underline-offset-4 hover:underline",
} as const;

const sizes = {
  default: "h-10 px-4 py-2",
  sm: "h-9 px-3 rounded-md",
  lg: "h-11 px-8 rounded-md",
  icon: "h-10 w-10",
  
} as const;

type SizeKey = keyof typeof sizes;

type VariantKey = keyof typeof variants;

export default function Button({
  variant = "default",
  size = "default",
  className,
  href,
  ...props
}: ButtonProps) {
  if (href) {
    return (
      <a
        href={href}
        className={twMerge(base, variants[variant], sizes[size], className)}
      />
    );
  } else {
    return (
      <button
        {...props}
        className={twMerge(base, variants[variant], sizes[size], className)}
      />
    );
  }
}
