module.exports = {
  outputDir: 'docs',
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
