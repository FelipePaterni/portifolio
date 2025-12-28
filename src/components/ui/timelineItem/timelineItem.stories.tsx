import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { TimelineItem } from '.';

const meta = {
  title: 'UI-COMPONENTS/TimelineItem',
  component: TimelineItem,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="relative">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'], 
  argTypes: {
    index: { control: 'number' },
    item: { control: 'object' },
  }, 
} satisfies Meta<typeof TimelineItem>;

export default meta;
type Story = StoryObj<typeof TimelineItem>;

export const WorkExperience: Story = {
  args: {
    index: 0,
    item: {
      type: 'work',
      title: 'Senior Software Engineer',
      organization: 'Tech Company Inc.',
      period: '2022 - Present',
      description: 'Leading development of cloud-native applications using modern technologies and best practices.',
    },
  },
};

export const EducationItem: Story = {
  args: {
    index: 0,
    item: {
      type: 'education',
      title: 'Bachelor in Computer Science',
      organization: 'University of Technology',
      period: '2018 - 2022',
      description: 'Focused on software engineering, algorithms, and distributed systems.',
    },
  },
};

export const WithoutDescription: Story = {
  args: {
    index: 0,
    item: {
      type: 'work',
      title: 'Frontend Developer',
      organization: 'Startup XYZ',
      period: '2020 - 2022',
    },
  },
};

export const WithDelay: Story = {
  args: {
    index: 2,
    item: {
      type: 'work',
      title: 'Junior Developer',
      organization: 'Digital Agency',
      period: '2019 - 2020',
      description: 'Developed responsive web applications and collaborated with design teams.',
    },
  },
};
