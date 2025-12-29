import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { revalidatePath } from "next/cache";
import { ProfileData } from "@/types/profile";
import { getProfileData } from "@/lib/getProfileData";

const DATA_PATH = path.join(process.cwd(), "data/profile.json");

export async function GET(req: Request) {
  const token = req.headers.get("authorization");
  if (token !== `Bearer ${process.env.ADMIN_TOKEN}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json(await getProfileData(), { status: 200 });
}
export async function POST(req: Request) {
  const token = req.headers.get("authorization");

  if (token !== `Bearer ${process.env.ADMIN_TOKEN}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body: ProfileData = await req.json();
  console.log(DATA_PATH);

  await fs.writeFile(DATA_PATH, JSON.stringify(body, null, 2));

  revalidatePath("/");

  return NextResponse.json(body);
}
