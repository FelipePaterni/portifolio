import type { Config } from "tailwindcss";

const config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx,js,jsx}",
    "./src/app/components/**/*.{ts,tsx,js,jsx}",
    "./**/*.stories.{ts,tsx,js,jsx,mdx}",
    "./.storybook/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        primary: "hsl(var(--primary))",
        muted: "hsl(var(--muted))",
        border: "hsl(var(--border))",
      },
    },
  },
} satisfies Config;

export default config;
