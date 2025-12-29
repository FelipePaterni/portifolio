"use client";
import { motion } from "framer-motion";
import Button from "@/components/ui/button";
import { Send, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import Title from "@/components/ui/title";
import Card from "@/components/ui/card";

interface ContactProps {
  contact: {
    email: string;
    phone: string;
    github: string;
    linkedin: string;
  };
}
export default function ContactSection({ contact }: ContactProps) {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <Title
          children="Contato"
          subtitle="Vamos conversar? Estou aberto a novas oportunidades"
        />

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <Card
                type="reverse"
                label="email"
                value={contact.email}
                href={`mailto:${contact.email}`}
                icon={Mail}
                transition={{ delay: 1 * 0.1 }}
              />
              <Card
                type="reverse"
                label="Github"
                value={`github.com/${contact.github}`}
                href={`https://github.com/${contact.github}`}
                icon={Github}
                transition={{ delay: 2 * 0.1 }}
              />
              <Card
                type="reverse"
                label="Linkedin"
                value={`linkedin.com/in/seuusuario/${contact.linkedin}`}
                href={`https://linkedin.com/in/${contact.linkedin}`}
                icon={Linkedin}
                transition={{ delay: 3 * 0.1 }}
              />
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 flex flex-col justify-center"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Vamos construir algo{" "}
                <span className="gradient-text">incrível</span> juntos?
              </h3>
              <p className="text-muted-foreground mb-6">
                Estou sempre em busca de novos desafios e oportunidades para
                crescer como desenvolvedor. Se você tem um projeto interessante
                ou uma vaga que combina com meu perfil, entre em contato!
              </p>
              <Button
                size="lg"
                className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 w-fit"
                target="_blank"
                href={`mailto:${contact.email}`}
              >
                <Send className="w-4 h-4" />
                Enviar Mensagem
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
