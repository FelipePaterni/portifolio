import ProjectCard, { ProjectProps } from "@/components/ui/projectCard";
import Title from "@/components/ui/title";

interface ProjectsSectionProps {
  projects: ProjectProps[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <Title
          children="Projetos"
          subtitle="Alguns dos projetos que desenvolvi durante minha jornada"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
