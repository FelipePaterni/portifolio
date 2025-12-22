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
    className: { control: 'text'},
    spanClassName: { control: 'text'},
    children: { control: 'text'}
  }, 
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    children: 'Primary Title',
  },
};
