'use client';
import { ComponentProps } from "react";

import { motion, Transition } from "framer-motion";
import { twMerge } from "tailwind-merge";

const colors = {
  primary: "bg-primary/20 text-primary border-primary/30",
  secondary:"bg-secondary text-secondary-foreground border-border/50",
  yellow: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  none: "",
} as const;

export type ColorKey = keyof typeof colors;

export interface TagProps extends ComponentProps<"span"> {
  label: string;
  color?: ColorKey;
  transition?: Transition<any>;
}

export default function Tag({
  label,
  color = "primary",
  className,
  ...props
}: TagProps) {
  const base =
    "px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105";

  return (
    <motion.span
      key={label}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={props.transition}
      className={twMerge(base, colors[color], className)}
    >
      {label}
    </motion.span>
  );
}
