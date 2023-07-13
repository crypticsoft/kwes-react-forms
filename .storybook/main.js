// import { mergeConfig } from 'vite';
module.exports = {
  "stories": [
  // "../src/stories/**/*.stories.mdx",
  "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  docs: {
    autodocs: true
  }
};