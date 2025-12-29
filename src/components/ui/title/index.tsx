"use client";
import { motion } from "framer-motion";
import { ComponentProps, use } from "react";
import { twMerge } from "tailwind-merge";

export interface TitleProps extends ComponentProps<"h2"> {
  subtitle: string;
  spanClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export default function Title({
  children,
  subtitle,
  className,
  spanClassName,
  titleClassName,
  subtitleClassName,
  ...props
}: TitleProps) {
  const divClass = twMerge("text-center mb-16", className);
  const childrenClass = twMerge("section-title", titleClassName);
  const subtitleClass = twMerge(
    "section-subtitle max-w-2xl mx-auto",
    subtitleClassName
  );
  const spanClass = twMerge("text-primary ", spanClassName);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={divClass}
    >
      <h2 className={childrenClass} {...props}>
        <span className={spanClass}>&lt;</span>
        {children} <span className={spanClass}>/&gt;</span>
      </h2>
      <p className={subtitleClass} {...props}>
        {subtitle}
      </p>
    </motion.div>
  );
}
