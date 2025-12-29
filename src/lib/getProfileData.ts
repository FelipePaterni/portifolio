import "server-only";
import fs from "fs/promises";
import path from "path";
import { ProfileData } from "@/types/profile";

const DATA_PATH = path.join(process.cwd(), "data/profile.json");

export default async function getProfileData(): Promise<ProfileData> {
  const file = await fs.readFile(DATA_PATH, "utf-8");
  return JSON.parse(file);
}
