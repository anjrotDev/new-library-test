import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  core: {
    builder: "@storybook/builder-vite"
  },
  async viteFinal(config) {
    // Ajustar la configuración para evitar conflictos
    config.optimizeDeps = {
      ...(config.optimizeDeps || {}),
      exclude: ["vite-plugin-dts"]
    };
    return config;
  }
};
export default config;
