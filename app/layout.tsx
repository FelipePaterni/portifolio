import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { AppThemeProvider } from "./providers/theme-provider";

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
      <body className={outfit.className}>
        <AppThemeProvider>{children}</AppThemeProvider>
      </body>
    </html>
  );
}
