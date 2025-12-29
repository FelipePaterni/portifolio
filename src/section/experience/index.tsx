"use client";
import { TimelineItem } from "@/components/ui/timelineItem";
import Title from "@/components/ui/title";
import { TimelineData } from "@/types/timelinedata";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

interface ExperienceSectionProps {
  experience: TimelineData[];
  education: TimelineData[];
}
export default function ExperienceSection({
  experience,
  education,
}: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <Title
          children="Experiência & Formação"
          subtitle="Minha trajetória profissional e acadêmica"
        />
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Experiência Profissional
              </h3>
            </motion.div>
            <div className="relative">
              {experience.map((item, index) => (
                <TimelineItem key={item.title} item={item} index={index} />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Formação Acadêmica
              </h3>
            </motion.div>
            <div className="relative">
              {education.map((item, index) => (
                <TimelineItem key={item.title} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
