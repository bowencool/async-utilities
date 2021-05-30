const webpack = require('webpack');
const { resolve } = require('./utils');
// console.log(process.env.NODE_ENV);

module.exports = {
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
      '@': resolve('src'),
      src: resolve('src'),
    },
  },
  externals: {
    vue: 'Vue',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true, //HMR doesn't work without this
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: () =>
        `${process.env.npm_package_name} v${process.env.npm_package_version}`,
    }),
    new webpack.EnvironmentPlugin(['NODE_ENV', 'npm_package_version']),
  ],
};
