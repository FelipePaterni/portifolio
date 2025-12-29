"use client";

import Button from "@/components/ui/button";
import { LinkProps } from "@/types/linkProps";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

interface HeroSectionProps {
  projectsCount: number;
  github: string;
  linkedin: string;
  email: string;
  skills?: any;
}

export default function HeroSection({
  projectsCount,
  github,
  linkedin,
  email,
  skills,
}: HeroSectionProps) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-medium mb-4 tracking-wider"
          >
            Olá, eu sou Felipe Paterni
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">Desenvolvedor</span>
            <br />
            <span className="text-foreground">Back-End Júnior</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Focado em construir soluções eficientes e escaláveis. Apaixonado por
            código limpo, arquitetura de software e boas práticas de
            desenvolvimento.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Button
              size="lg"
              className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8"
              target="_blank"
              href={`mailto:${email}`}
            >
              <Mail className="w-4 h-4" />
              Contato
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-border hover:bg-secondary hover:border-primary/50"
              target="_blank"
              href={`https://github.com/${github}`}
            >
              <Github className="w-4 h-4" />
              GitHub
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-border hover:bg-secondary hover:border-primary/50"
              target="_blank"
              href={`https://www.linkedin.com/in/${linkedin}`}
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex justify-center gap-8 text-sm text-muted-foreground"
          >
            <div className="text-center">
              <span className="block text-2xl font-bold text-foreground">
                {new Date().getFullYear() - 2021}
              </span>
              Anos de estudo
            </div>
            <div className="text-center">
              <span className="block text-2xl font-bold text-foreground">
                {projectsCount}
              </span>
              Projetos
            </div>
            <div className="text-center">
              <span className="block text-2xl font-bold text-foreground">
                {skills?.length}
              </span>
              Tecnologias
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-2 left-1/2 -translate-x-1/2"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm">Scroll</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
