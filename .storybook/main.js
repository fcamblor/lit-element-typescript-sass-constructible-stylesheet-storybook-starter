const path = require('path');

module.exports = {
  addons: [{
    name: '@storybook/preset-typescript',
    options: {
      tsLoaderOptions: {
        configFile: path.resolve(__dirname, './tsconfig.json'),
      },
      forkTsCheckerWebpackPluginOptions: {
        colors: false, // disables built-in colors in logger messages
      },
      include: [path.resolve(__dirname, '../')],
      transpileManager: true,
    },
  }],
  stories: ['../stories/**/*.stories.ts'],
};
