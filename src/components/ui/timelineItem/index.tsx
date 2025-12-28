"use client";

import { TimelineData } from "@/app/src/types/timelinedata";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
interface TimelineItemProps {
  item: TimelineData;
  index: number;
}

export function TimelineItem({ item, index }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-8 last:pb-0"
    >
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
      <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-primary -translate-x-1/2 ring-4 ring-background" />

      <div className="glass-card p-6 hover:border-primary/30 transition-colors">
        <div className="flex items-center gap-2 text-sm text-primary mb-2">
          <Calendar className="w-4 h-4" />
          {item.period}
        </div>

        <h3 className="text-lg font-semibold text-foreground mb-1">
          {item.title}
        </h3>

        <p className="text-muted-foreground text-sm mb-3">
          {item.organization}
        </p>

        {item.description && (
          <p className="text-foreground/80 text-sm leading-relaxed">
            {item.description}
          </p>
        )}
      </div>
    </motion.div>
  );
}
