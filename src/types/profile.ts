import { ProjectProps } from "@/components/ui/projectCard";
import { TimelineData } from "./timelinedata";
import { ColorKey } from "@/components/ui/tag";

export interface ProfileData {
  aboutMe: string[];

  skills: {
    title: string;
    competencies: { label: string; level: ColorKey }[];
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
