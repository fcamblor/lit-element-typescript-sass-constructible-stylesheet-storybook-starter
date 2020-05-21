const fs = require('fs');
const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.{js,mdx,md}'],
  addons: [
    'storybook/storybook-prebuilt/addon-docs/register.js',
    'storybook/storybook-prebuilt/addon-knobs/register.js',
    'storybook/storybook-prebuilt/addon-a11y/register.js',
  ],
  rollup: config => {
    config.plugins.push({
      generateBundle() {
        // when deploying the demo of the storybook using site:build, we build to a directory called
        // demoing-storybook. because we don't copy custom-elements.json from the output directory,
        // it can't find ours because it's in a directory with the same name. we copy it manually here.
        /*
        this.emitFile({
          type: 'asset',
          fileName: 'web_modules/lit-element.js',
          source: fs.readFileSync(path.join(__dirname, '../web_modules/lit-element.js'), 'utf-8'),
        });
*/
/*
        this.emitFile({
          type: 'asset',
          fileName: 'demo/assets/logo.png',
          source: fs.readFileSync(path.join(__dirname, '../assets/logo.png')),
        });
*/
      },
    });
  },
  esDevServer: {
    nodeResolve: true,
    watch: true,
    open: true,
    rootDir: "../",
    moduleDirs: ['node_modules' /*, 'web_modules' */]
  },
};
