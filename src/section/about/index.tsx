"use client";

import Title from "@/components/ui/title";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import Card from "@/components/ui/card";
import { Code2, Lightbulb, Server } from "lucide-react";

interface AboutSectionProps {
  aboutMe: string[];
  highlights?: { icon: any; label: string; value: string }[];
}

function parseText(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  const regex = /\*([^*]+)\*/g;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Adiciona o texto antes da marcação
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    // Adiciona o texto customizado com span
    parts.push(
      <span key={match.index} className="text-primary font-medium">
        {match[1]}
      </span>
    );

    lastIndex = match.index + match[0].length;
  }

  // Adiciona o texto restante
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts;
}

export default function AboutSection({
  aboutMe,
  highlights = [
    {
      icon: Server,
      label: "Back-End Focus",
      value:
        "Desenvolvimento de APIs e sistemas robustos com foco em escalabilidade",
    },
    {
      icon: Code2,
      label: "Clean Code",
      value: "Aplicação de princípios SOLID e boas práticas de programação",
    },
    {
      icon: Lightbulb,
      label: "Aprendizado Contínuo",
      value: "Sempre estudando novas tecnologias e metodologias",
    },
  ],
}: AboutSectionProps) {
  return (
    <section id="about" className="py-24 bg-background min-h-screen">
      <div className="container mx-auto px-6">
        <Title
          children="Sobre Mim"
          subtitle="Conheça um pouco mais sobre minha trajetória e objetivos"
        />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-card p-8">
              {Array.isArray(aboutMe) &&
                aboutMe.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-foreground/90 leading-relaxed mb-6 last:mb-0"
                  >
                    {parseText(paragraph)}
                  </p>
                ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {highlights.map((item, index) => (
              <Card
                key={index}
                label={item.label}
                value={item.value}
                transition={{ delay: 0.1 * index }}
                type="default"
                icon={item.icon}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
