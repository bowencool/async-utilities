const babelConfig = require('./babel.config.js');

module.exports = {
  // preset: 'ts-jest',
  globals: {},
  testEnvironment: 'jsdom',
  transform: {
    // '^.+\\.vue$': 'vue-jest',
    '^.+\\.[jt]sx?$': ['babel-jest', babelConfig],
    // '^.+\\.scss$': 'jest-scss-transform',
  },
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx', 'vue', 'jsx'],

  coverageThreshold: {
    // 所有文件总的覆盖率要求
    global: {
      branches: 60,
      lines: 85,
      functions: 70,
      statements: 80,
    },
  },
};
