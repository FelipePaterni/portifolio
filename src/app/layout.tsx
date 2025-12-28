import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { AppThemeProvider } from "@/providers/theme-provider";

export const metadata: Metadata = {
  title: "Dev Journey Showcase",
  description: "Portfolio showcasing projects, skills, and experience",
  keywords: ["portfolio", "developer", "projects", "skills"],
  authors: [{ name: "Your Name" }],
};

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Suppress hydration warnings caused by browser extensions adding body attrs (e.g., cz-shortcut-listen). */}
      <body className={outfit.className} suppressHydrationWarning>
        <AppThemeProvider>{children}</AppThemeProvider>
      </body>
    </html>
  );
}
