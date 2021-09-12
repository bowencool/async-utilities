module.exports = {
  presets: [
    [
      '@babel/env',
      {
        corejs: 3,
        useBuiltIns: 'usage',
        loose: true,
        modules: false,
      },
    ],
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3,
        version: '^7.15.3',
      },
    ],
  ],
};