import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Card from ".";
import { Mail, MapPin, Phone } from "lucide-react";

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
    type: {
      control: { type: "radio" },
      options: ["default", "reverse"],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    label: "Email",
    value: "contact@example.com",
    icon: Mail,
    type: "default",
  },
};

export const Reverse: Story = {
  args: {
    label: "Phone",
    value: "+1 (555) 123-4567",
    icon: Phone,
    type: "reverse",
  },
};

export const WithLink: Story = {
  args: {
    label: "Location",
    value: "San Francisco, CA",
    href: "https://maps.google.com",
    icon: MapPin,
    type: "default",
  },
};
