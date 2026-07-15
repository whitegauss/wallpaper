import type { Meta, StoryObj } from '@storybook/react';
import SocialIconLink from './SocialIconLink';

import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { DiGithubBadge } from 'react-icons/di';

const meta: Meta<typeof SocialIconLink> = {
  title: 'Atoms/SocialIconLink',
  component: SocialIconLink,
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
type Story = StoryObj<typeof SocialIconLink>;

export const Default: Story = {
  args: {
    icon: FaGithub,
    href: 'https://github.com/whitegauss',
    label: 'GitHub',
  },
};

export const DiIcon: Story = {
  args: {
    icon: DiGithubBadge,
    href: 'https://github.com/whitegauss',
    label: 'DiGithubBadge',
  },
};

export const IconOnly: Story = {
  args: {
    icon: FaXTwitter,
    href: 'https://x.com',
  },
};

export const MinimalFooterContext = () => (
  <div className="bg-black/20 backdrop-blur-sm px-8 py-3 flex gap-6 rounded-full w-fit">
    <SocialIconLink icon={FaGithub} href="#" />
    <SocialIconLink icon={FaXTwitter} href="#" />
  </div>
);