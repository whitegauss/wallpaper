import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

// メタデータの型定義
const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#1a1a2e' },
        { name: 'light', value: '#f8fafc' },
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: '通常のアクション',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'キャンセル',
    variant: 'secondary',
  },
};

export const AFK_Mode: Story = {
  args: {
    label: 'Zzz... (AFK)',
    variant: 'afk',
  },
};