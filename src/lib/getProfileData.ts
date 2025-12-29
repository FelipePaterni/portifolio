import "server-only";
import fs from "fs/promises";
import path from "path";
import { ProfileData } from "@/types/profile";

const DATA_PATH = path.join(process.cwd(), "data/profile.json");

export async function getProfileData(): Promise<ProfileData> {
  const file = await fs.readFile(DATA_PATH, "utf-8");
  return JSON.parse(file);
}

export async function getSkills() {
  const data = await getProfileData();
  return data.skills;
}

export async function getAbout() {
  const data = await getProfileData();
  return data.aboutMe;
}
export async function getLanguages() {
  const data = await getProfileData();
  return data.languages;
}

export async function getProjects() {
  const data = await getProfileData();
  return data.projects;
}

export async function getTimeline() {
  const data = await getProfileData();
  return data.timeline;
}
export async function getContact() {
  const data = await getProfileData();
  return data.contact;
}
