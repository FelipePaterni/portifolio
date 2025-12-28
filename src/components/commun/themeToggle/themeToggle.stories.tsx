import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ThemeToggle from ".";

const meta = {
  title: "COMMUNS-COMPONENTS/themeToggle",
  component: ThemeToggle,

  tags: ["autodocs"],
} satisfies Meta<typeof ThemeToggle>;

export default meta;
type Story = StoryObj<typeof ThemeToggle>;

export const Default: Story = {};
