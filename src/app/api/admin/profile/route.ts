import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { ProfileData } from "@/types/profile";
import getProfileData from "@/lib/getProfileData";
import connectDB from "@/lib/mongodb";
import Profile from "@/models/Profile";

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

  await connectDB();
  
  // Atualiza ou cria o perfil (assumindo que há apenas um perfil)
  const updatedProfile = await Profile.findOneAndUpdate(
    {}, // Busca qualquer perfil
    body,
    { 
      new: true, // Retorna o documento atualizado
      upsert: true, // Cria se não existir
      runValidators: true // Valida os dados
    }
  );

  revalidatePath("/");

  // Remove campos do MongoDB antes de retornar
  const { _id, __v, ...profileData } = updatedProfile.toObject();
  return NextResponse.json(profileData);
}
