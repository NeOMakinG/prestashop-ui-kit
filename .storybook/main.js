module.exports = {
  stories: ['../stories/**/*.stories.mdx'],
  addons: [
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
      },
    },
  ],
  webpackFinal: (config) => {
    config.resolve.alias['core-js/modules'] = '@storybook/core/node_modules/core-js/modules';

    return config;
  },
};
