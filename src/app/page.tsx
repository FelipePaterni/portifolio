import AboutSection from "@/section/about";
import HeroSection from "@/section/hero";
import ProjectsSection from "@/section/project";
import { getProfileData, getProjects } from "@/lib/getProfileData";

export default async function Page() {
  const data = await getProfileData();

  const skills = Array.from(
    new Set(data.skills.flatMap((skill) => skill.competencies))
  );
  return (
    <main>
      <HeroSection
        projectsCount={data.projects.length}
        github={data.contact.github}
        linkedin={data.contact.linkedin}
        email={data.contact.email}
        skills={skills}
      />
      <ProjectsSection />
      <AboutSection />
    </main>
  );
}
