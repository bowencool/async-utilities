// const webpack = require('webpack');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('./utils');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  mode: 'development',
  entry: resolve('example/index.ts'),
  devtool: '#eval-cheap-module-source-map',
  devServer: {
    host: '0.0.0.0',
    contentBase: resolve('dev'),
    port: 9600,
    hot: true,
    hotOnly: true,
    stats: 'errors-only',
    inline: true,
    overlay: true,
    clientLogLevel: 'none',
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'example/index.html',
    }),
  ],
});
