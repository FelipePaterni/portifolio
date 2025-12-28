import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Title  from '.';

const meta = {
  title: 'UI-COMPONENTS/Title',
  component: Title,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'], 
  argTypes: {
    className: { control: 'text' },
    spanClassName: { control: 'text' },
    titleClassName: { control: 'text' },
    subtitleClassName: { control: 'text' },
    children: { control: 'text' },
    subtitle: { control: 'text' },
  }, 
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    children: 'Meus Projetos',
    subtitle: 'Minha jornada profissional'
  },
};

export const CustomSpan: Story = {
  args: {
    children: 'Experiência',
    spanClassName: 'm-5 text-secondary',
    subtitle: 'Minha jornada profissional'
  },
};
