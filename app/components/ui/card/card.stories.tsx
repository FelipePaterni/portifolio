import type { Meta, StoryObj } from "@storybook/react";
import Card from ".";
import { Mail } from "lucide-react";

const meta = {
  title: "UI-COMPONENTS/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    value: { control: "text" },
    href: { control: "text" },
    icon: { control: "object" },
    transition: { control: "object" },
    type: {
      control: { type: "radio" },
      options: ["default", "reverse"],
      table: {
        defaultValue: { summary: "default",detail: "The default card style" },
        type: { summary: "string" },
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Default Card",
    value: "This is a default card value",
    icon: Mail,
    transition: { duration: 0.5 },
    href: "https://example.com",
    type: "default",
  },
};
