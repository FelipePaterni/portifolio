"use client";
import { motion } from "framer-motion";
import Button from "../button";
import {
  AppWindow,
  ExternalLink,
  Gamepad2,
  Github,
  Globe,
  Server,
} from "lucide-react";
import React from "react";

export interface ProjectProps {
  title: string;
  description: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  iconName?: keyof typeof icons;
  githubLink?: string;
  liveDemoLink?: string;
  tags: string[];
  image?: string;
  index?: number;
}

const icons = {
  web: AppWindow,
  mobile: Globe,
  game: Gamepad2,
  backend: Server,
} as const;

export default function ProjectCard({
  title,
  description,
  icon: Icon,
  githubLink,
  liveDemoLink,
  tags,
  iconName,
  index = 0,
}: ProjectProps) {
  return (
    <motion.div
      key={title}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={
        "glass-card p-6 group hover:border-primary/30 transition-all duration-300"
      }
    >
      <div className="flex items-start justify-between mb-4">
        {Icon ? (
          <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
            <Icon className="w-6 h-6" />
          </div>
        ) : iconName ? (
          <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
            {React.createElement(icons[iconName], { className: "w-6 h-6" })}
          </div>
        ) : null}

        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-primary"
            href={githubLink}
          >
            <Github className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-primary"
            href={liveDemoLink}
          >
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>

      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
