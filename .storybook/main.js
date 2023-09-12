// import { mergeConfig, loadConfigFromFile } from 'vite';
// import react from '@vitejs/plugin-react';

// const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  stories: [
    '../src/**/*.mdx',
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  docs: {
    autodocs: true
  },
  core: {
    builder: {
      name: '@storybook/builder-vite',
      options: {}
    }
  },
  /*async viteFinal(config, { configType }) {
    const { config: userConfig } = await loadConfigFromFile(configType,
      path.resolve(__dirname, "../vite.config.js")
    );
    // const { config: userConfig } = await loadConfigFromFile(
    //   path.resolve(__dirname, "../vite.config.js")
    // );

    return mergeConfig(config, {
      ...userConfig,
      // manually specify plugins to avoid conflict
      plugins: [
        react(),
        isProduction && (await import('@rollup/plugin-terser')).default(),
      ],
    });
  },*/
};