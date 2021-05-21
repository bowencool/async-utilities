module.exports = {
  presets: [
    [
      '@babel/env',
      {
        useBuiltIns: 'usage',
        // useBuiltIns: 'entry',
        corejs: 3,
      },
    ],
  ],
};
