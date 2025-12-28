import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Navbar from ".";

const meta = {
  title: "COMMUNS-COMPONENTS/Navbar",
  component: Navbar,
  argTypes: {
    navLinks: { control: "object" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    navLinks: [
      { href: "#home", label: "Home" },
      { href: "#about", label: "Sobre" },
      { href: "#skills", label: "Habilidades" },
      { href: "#projects", label: "Projetos" },
      { href: "#experience", label: "Experiência" },
      { href: "#contact", label: "Contato" },
    ],
  },
};
