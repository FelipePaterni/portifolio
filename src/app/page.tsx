import AboutSection from "@/section/about";
import HeroSection from "@/section/hero";
import ProjectsSection from "@/section/project";
import getProfileData from "@/lib/getProfileData";
import SkillsSection from "@/section/skills";
import ExperienceSection from "@/section/experience";
import ContactSection from "@/section/contact";

export default async function Page() {
  const data = await getProfileData();

  const skills = Array.from(
    new Set(data.skills.flatMap((skill) => skill.competencies))
  );

  const [education, experience] = data.timeline.reduce(
    (acc, item) => {
      if (item.type === "education") {
        acc[0].push(item);
      } else if (item.type === "work") {
        acc[1].push(item);
      }
      return acc;
    },
    [[] as typeof data.timeline, [] as typeof data.timeline]
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
      <SkillsSection languages={data.languages} skills={data.skills} />
      <ProjectsSection projects={data.projects} />
      <ExperienceSection education={education}  experience={experience}/>
      <ContactSection contact={data.contact} />
    </main>
  );
}
