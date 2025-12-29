import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { AppThemeProvider } from "@/providers/theme-provider";
import Navbar from "@/components/commun/navbar";
import { NavItem } from "@/types/navitem";
import Footer from "@/components/commun/footer";
import { twMerge } from "tailwind-merge";

export const metadata: Metadata = {
  title: "Felipe Paterni - Portfolio",
  description: "Portfolio showcasing projects, skills, and experience",
  keywords: ["portfolio", "developer", "projects", "skills"],
  authors: [{ name: "Felipe Paterni" }],
};

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

const sections: NavItem[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Sobre" },
  { href: "#skills", label: "Habilidades" },
  { href: "#projects", label: "Projetos" },
  { href: "#experience", label: "Experiência" },
  { href: "#contact", label: "Contato" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      {/* Suppress hydration warnings caused by browser extensions adding body attrs (e.g., cz-shortcut-listen). */}

      <body
        className={twMerge(
          "min-h-screen bg-background [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500",
          outfit.className
        )}
        suppressHydrationWarning
      >
        <AppThemeProvider>
          <Navbar navLinks={sections} />
          {children}
          <Footer />
        </AppThemeProvider>
      </body>
    </html>
  );
}
