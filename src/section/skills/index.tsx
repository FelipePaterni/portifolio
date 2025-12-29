"use client";
import Tag, { ColorKey } from "@/components/ui/tag";
import Title from "@/components/ui/title";
import { motion } from "framer-motion";

interface SkillsSectionProps {
  languages: {
    language: string;
    level: string;
  }[];
  skills: {
    title: string;
    competencies: { label: string; level: ColorKey }[];
  }[];
}

export default function SkillsSection({
  skills,
  languages,
}: SkillsSectionProps) {
  return (
    <section id="skills" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <Title
          children="Habilidades"
          subtitle="Tecnologias e ferramentas que utilizo no dia a dia"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skills, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {skills.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {skills.competencies.map((competency, indexComp) => (
                  <Tag
                    key={indexComp}
                    label={competency.label}
                    transition={{ delay: index * 0.1 + indexComp * 0.05 }}
                    color={competency.level}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mt-8 text-sm"
        >
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-primary/20 border border-primary/30" />
            <span className="text-muted-foreground">Intermediário</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-secondary border border-border/50" />
            <span className="text-muted-foreground">Básico</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/30" />
            <span className="text-muted-foreground">Estudando</span>
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            <span className="text-foreground font-medium">Idiomas:</span>
            {languages.map(
              (lang, index) =>
                lang.language +
                " (" +
                lang.level +
                ")" +
                (index < languages.length - 1 ? " • " : "")
            )}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
