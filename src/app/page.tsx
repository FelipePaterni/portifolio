import AboutSection from "@/section/about";
import HeroSection from "@/section/hero";
import ProjectsSection from "@/section/project";
import getProfileData from "@/lib/getProfileData";
import SkillsSection from "@/section/skills";

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
      <AboutSection aboutMe={data.aboutMe} />
      <SkillsSection languages={data.languages} skills={data.skills}/>
      <ProjectsSection />
    </main>
  );
}
