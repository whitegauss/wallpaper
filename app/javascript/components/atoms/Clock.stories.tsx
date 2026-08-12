import type { Meta, StoryObj } from '@storybook/react';
import Clock from './Clock';

const meta: Meta<typeof Clock> = {
  title: 'Atoms/Clock',
  component: Clock,
  parameters: {
    backgrounds: {
      default: 'wallpaper',
      values: [
        { name: 'wallpaper', value: '#1e293b' },
        { name: 'light', value: '#f8fafc' },
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Clock>;

export const Default: Story = {};
