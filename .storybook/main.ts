import type { StorybookConfig } from '@storybook/react-vite';
import type { PluginOption } from 'vite';

// vite-plugin-ruby rewrites build.rollupOptions/rolldownOptions for the
// Rails asset pipeline. That conflicts with Storybook's own iframe build
// (wrong entries/output filenames), so drop it from the merged root
// vite.config.ts when building Storybook.
function withoutRubyPlugin(plugins: PluginOption[]): PluginOption[] {
  return plugins
    .filter((plugin) => {
      if (!plugin || typeof plugin !== 'object' || Array.isArray(plugin)) return true;
      const name = (plugin as { name?: string }).name;
      return !name?.startsWith('vite-plugin-ruby');
    })
    .map((plugin) => (Array.isArray(plugin) ? withoutRubyPlugin(plugin) : plugin));
}

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../app/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@chromatic-com/storybook',
    //'@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-mcp',
  ],
  framework: '@storybook/react-vite',
  staticDirs: ['../public'],
  async viteFinal(viteConfig) {
    viteConfig.plugins = withoutRubyPlugin(viteConfig.plugins ?? []);
    return viteConfig;
  },
};
export default config;