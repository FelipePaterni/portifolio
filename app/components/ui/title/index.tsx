import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export interface TitleProps extends ComponentProps<"h2"> {
  spanClassName?: string;
}

export default function Title({
  children,
  className,
  spanClassName,
  ...props
}: TitleProps) {
  const childrenClass = twMerge("section-title", className);
  const spanClass = twMerge("text-primary", spanClassName);
  return (
    <h2 className={childrenClass} {...props}>
      <span className={spanClass}>&lt;</span>
      {children} <span className={spanClass}>/&gt;</span>
    </h2>
  );
}
