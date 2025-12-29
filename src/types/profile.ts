import { ProjectProps } from "@/components/ui/projectCard";
import { TimelineData } from "./timelinedata";
import { LinkProps } from "./linkProps";

export interface ProfileData {
  aboutMe: string;

  skills: {
    title: string;
    competencies: string[];
  }[];

  languages: {
    language: string;
    level: string;
  }[];

  projects: ProjectProps[];

  timeline: TimelineData[];

  contact: {
    email: string;
    phone: string;
    github: string;
    linkedin: string;
  };
}

function to() {
  let teste: ProfileData = {} as ProfileData;

  const a = JSON.stringify(teste);
  console.log(a);
}
