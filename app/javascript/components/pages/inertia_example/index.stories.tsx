import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'

import InertiaExample from './index'

const meta = {
  component: InertiaExample,
  tags: ['ai-generated', 'needs-work'],
} satisfies Meta<typeof InertiaExample>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    rails_version: '8.0.2',
    ruby_version: 'ruby 3.3.4p0',
    rack_version: '3.1.12',
    inertia_rails_version: '3.1.0',
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/ruby on rails \+ inertia \+ react/i)).toBeVisible()
  },
}

export const AlternateVersions: Story = {
  args: {
    rails_version: '8.0.0',
    ruby_version: 'ruby 3.4.0p0',
    rack_version: '3.2.0',
    inertia_rails_version: '3.0.0',
  },
}

export const CssCheck: Story = {
  args: {
    rails_version: '8.0.2',
    ruby_version: 'ruby 3.3.4p0',
    rack_version: '3.1.12',
    inertia_rails_version: '3.1.0',
  },
}