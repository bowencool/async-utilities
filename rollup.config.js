import tsPlugin from 'rollup-plugin-typescript2';
import babel from '@rollup/plugin-babel';
import replace from 'rollup-plugin-replace';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import pkgJson from './package.json';

const name = 'asyncUtils';
const banner = `/*!
* ${process.env.npm_package_name} v${process.env.npm_package_version}
*/`;

const input = pkgJson.entry;

const babelConfig = {
  babelHelpers: 'runtime',
  skipPreflightCheck: true,
  extensions: ['.js', '.ts'],
};

const deps = Object.keys(pkgJson.peerDependencies || {}).concat(
  Object.keys(pkgJson.dependencies),
);

const replacement = {
  'process.env.npm_package_version': JSON.stringify(pkgJson.version),
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
};

/**
 * @type {import('rollup').RollupOptions}
 */
export default [
  {
    input,
    external: deps,
    plugins: [
      replace(replacement),
      tsPlugin({
        tsconfig: './tsconfig.build.json',
      }),
      babel(babelConfig),
      nodeResolve(),
    ],
    output: [
      {
        format: 'cjs',
        dir: 'cjs',
        preserveModules: true,
        preserveModulesRoot: 'src',
        banner,
        name,
        exports: 'auto',
      },
      {
        format: 'esm',
        banner,
        name,
        exports: 'auto',
        dir: 'es',
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    ],
  },
];
