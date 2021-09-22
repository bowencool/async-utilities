module.exports = {
  outputDir: 'docs',
  publicPath: './',
  // en
  pages: {
    index: {
      entry: 'example/index.ts',
      title: 'async-utilities'
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
