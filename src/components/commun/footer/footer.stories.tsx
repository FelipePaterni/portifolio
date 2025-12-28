import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Footer from ".";

const meta = {
  title: "COMMUNS-COMPONENTS/footer",
  component: Footer,

  tags: ["autodocs"],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {};
