const webpack = require("webpack");

module.exports = function override(config) {
  config.module.rules.forEach((rule) => {
    if (rule.parser) {
      delete rule.parser.amd;
    }
  });

  config.resolve.fallback = {
    ...config.resolve.fallback,
    url: false,
    fs: false,
  };

  config.module.rules.push({
    test: /\.js$/,
    parser: {
      amd: false,
    },
  });

  let plugs = config.plugins;

  // plugs.push(
  //   new webpack.ProvidePlugin({
  //     Buffer: ["buffer", "Buffer"],
  //   })
  // );

  // plugs.push(
  //   new webpack.ProvidePlugin({
  //     process: "process/browser.js",
  //   })
  // );

  const fallback = config.resolve.fallback || {};
  Object.assign(fallback, {
    crypto: require.resolve("crypto-browserify"),
    stream: require.resolve("stream-browserify"),
    assert: require.resolve("assert"),
    http: require.resolve("stream-http"),
    https: require.resolve("https-browserify"),
    os: require.resolve("os-browserify/browser"),
    url: require.resolve("url"),
  });
  config.resolve.fallback = fallback;
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: "process/browser.js",
    }),
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
  ]);
  return config;
};
