import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Tag  from '.';

const meta = {
  title: 'UI-COMPONENTS/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'], 
   argTypes: {
    color: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'none'],
    },
    label: { control: 'text' },
    className: { control: 'text' },
  }, 
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    label: 'Default Tag',
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Tag',
    color: 'secondary',
  },
};


export const Yellow: Story = {
  args: {
    label: 'Yellow Tag',
    color: 'yellow',
  },
};

export const CustomClass: Story = {
  args: {
    label: 'Custom Tag',
    color: 'primary',
    className: 'text-lg shadow-lg',
  },
};
