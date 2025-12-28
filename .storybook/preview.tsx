import "../app/globals.css";

import { ThemeProvider } from "next-themes";
import type { Preview } from "@storybook/nextjs-vite";
import React from "react";

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      items: ["light", "dark"],
    },
  },
};

const preview: Preview = {
  decorators: [
    (Story, context) => (
      <ThemeProvider
        attribute="class"
        enableSystem={false}
        forcedTheme={context.globals.theme}
      >
        <div className="bg-background text-foreground p-4">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
