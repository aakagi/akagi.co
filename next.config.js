const withTypescript = require("@zeit/next-typescript")
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = withTypescript({
  webpack(config, options) {
    // Do not run type checking twice:
    if (options.isServer) {
      config.plugins.push(new ForkTsCheckerWebpackPlugin());
    }

    config.resolve.alias = {
      ...config.resolve.alias,
      mobx: __dirname + '/node_modules/mobx/lib/mobx.es6.js', // Only use es6 mobx
    }

    return config;
  }
});
