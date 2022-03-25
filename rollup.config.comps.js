import { defineConfig } from 'rollup';
import genBaseConfig, { INPUT_PATH } from './rollup.config.base';

const name = 'asyncUtilities';
const banner = `/*!
* ${process.env.npm_package_name} v${process.env.npm_package_version}
*/`;

const componentsConfig = defineConfig([
  {
    ...genBaseConfig(),
    input: `${INPUT_PATH}/index.ts`,
    output: [
      {
        // file: 'es/index.js',
        dir: 'es',
        format: 'es',
        preserveModules: true,
        preserveModulesRoot: 'packages',
        banner,
        name,
      },
    ],
  },
  {
    ...genBaseConfig(),
    input: `${INPUT_PATH}/index.ts`,
    output: [
      {
        // file: 'es/index.js',
        dir: 'cjs',
        format: 'cjs',
        preserveModules: true,
        preserveModulesRoot: 'packages',
        banner,
        name,
      },
    ],
  },
]);

export default componentsConfig;
