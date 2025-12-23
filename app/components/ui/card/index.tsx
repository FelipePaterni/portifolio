"use client";
import { motion, Transition } from "framer-motion";
import { tr } from "framer-motion/client";
import { LucideProps } from "lucide-react";

interface CardProps {
  label: string;
  value: string;
  href?: string;
  icon?: React.FC<LucideProps>;
  transition?: Transition<any>;
  type: "default" | "reverse";
}

export default function Card({
  label,
  value,
  href,
  icon: Icon,
  transition,
  type = "default",
}: CardProps) {
  return type === "reverse" ? (
    <motion.div
      key={label}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={transition}
      className="glass-card p-4 flex items-center gap-4 group hover:border-primary/30 transition-colors"
    >
      {Icon && (
        <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
          <Icon className="w-5 h-5" />
        </div>
      )}
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>

        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            {value}
          </a>
        ) : (
          <p className="text-foreground">{value}</p>
        )}
      </div>
    </motion.div>
  ) : (
    <motion.div
      key={label}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={transition}
      className="glass-card p-6 flex items-start gap-4 group hover:border-primary/30 transition-all duration-300"
    >
      {Icon && (
        <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
          <Icon className="w-6 h-6" />
        </div>
      )}
      <div>
        <h3 className="font-semibold text-foreground mb-1">{label}</h3>
        <p className="text-muted-foreground text-sm">{value}</p>
      </div>
    </motion.div>
  );
}
