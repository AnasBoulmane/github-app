const { override, addWebpackPlugin, addWebpackAlias, addTslintLoader } = require('customize-cra')
const path = require('path')
const WebpackNotifierPlugin = require('webpack-build-notifier');


module.exports = override(

  // enable tslint in webpack
  addTslintLoader({}),

  // add an alias for "ag-grid-react" imports
  addWebpackAlias({
    ["@styles"]: path.resolve(__dirname, "src/assets/styles")
  }),

  // add webpack notifier plugin
  addWebpackPlugin(new WebpackNotifierPlugin()),
);
