module.exports = {
  outputDir: 'docs',
  publicPath: './',
  // en
  pages: {
    index: {
      entry: 'example/index.ts',
    },
  },
  configureWebpack: {
    resolve: {
      extensions: ['.ts', '.vue'],
      alias: {
        '@': 'src',
        src: 'src',
      },
    },
  },
};
