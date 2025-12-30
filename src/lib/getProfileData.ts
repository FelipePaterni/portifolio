import "server-only";
import connectDB from "./mongodb";
import Profile from "@/models/Profile";
import { ProfileData } from "@/types/profile";

export default async function getProfileData(): Promise<ProfileData> {
  await connectDB();

  // Busca o primeiro perfil (assumindo que há apenas um)
  const profile = await Profile.findOne().lean();

  if (!profile) {
    throw new Error("Perfil não encontrado no banco de dados");
  }

  // Remove o _id e __v do MongoDB para manter compatibilidade
  const { _id, __v, ...profileData } = profile as any;

  return profileData as ProfileData;
}
