import { resolve } from 'path';
import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import replace from '@rollup/plugin-replace';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import pkg from '../package.json';
import { replacement } from './common.config';

export const INPUT_PATH = resolve(__dirname, '../packages');

const deps = Object.keys(pkg.peerDependencies || {})
  .concat(Object.keys(pkg.dependencies))
  .concat(Object.keys(pkg.devDependencies))
  .concat([/node_modules/]);

const genBaseConfig = ({ ts, plugins = [] } = {}) => {
  /**
   * @type {import('rollup').RollupOptions}
   */
  const config = {
    external: deps,
    plugins: [
      replace({ values: replacement, preventAssignment: true }),
      typescript({ ...ts, tsconfig: resolve(__dirname, '../tsconfig.build.json') }),
      babel({
        babelHelpers: 'runtime',
        skipPreflightCheck: true,
        extensions: ['.js', '.mjs', '.jsx', '.ts', '.tsx'],
      }),
      ...plugins,
      nodeResolve(),
    ],
  };
  return config;
};

export default genBaseConfig;
