//story for ProjectCard component
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import  ProjectCard  from '.';
import { Gamepad2, icons } from 'lucide-react';

const meta = {
  title: 'UI-COMPONENTS/ProjectCard',
  component: ProjectCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        title: { control: 'text' },
        description: { control: 'text' },
        githubLink: { control: 'text' },
        icon: { control: 'object' },
        liveDemoLink: { control: 'text' },
        tags: { control: 'object' },
    },
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const Default: Story = {
  args: {
    index: 0,
    title: 'My Awesome Project',
    description: 'This is a brief description of my awesome project. It does many wonderful things and solves important problems.',
    githubLink: 'https://github.com/example/project',
    liveDemoLink: 'https://example.com/demo',
    icon: Gamepad2,
    tags: ['React', 'TypeScript', 'CSS'],
  },
};

export const WithoutLinks: Story = {
  args: {
    index: 0,
    title: 'Another Project',
    description: 'A project without external links to showcase the card layout.',
    tags: ['Next.js', 'Tailwind CSS'],
  },
};