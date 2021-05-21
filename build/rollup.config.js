import tsPlugin from 'rollup-plugin-typescript2';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import replace from 'rollup-plugin-replace';

const name = 'asyncUtils';
const banner = `/*!
* ${process.env.npm_package_name} v${process.env.npm_package_version}
*/`;
const input = process.env.npm_package_entry;

const globals = {};
const external = Object.keys(globals);

const replacement = {
  'process.env.npm_package_version': JSON.stringify(
    process.env.npm_package_version,
  ),
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
};

export default [
  {
    input,
    external,
    plugins: [
      replace(replacement),
      tsPlugin(),
      babel({ babelHelpers: 'bundled' }),
    ],
    output: [
      {
        format: 'umd',
        banner,
        name,
        globals,
        file: process.env.npm_package_main,
      },
      {
        format: 'cjs',
        banner,
        name,
        globals,
        // exports: 'default',
        file: process.env.npm_package_common,
      },
      {
        format: 'esm',
        banner,
        name,
        globals,
        file: process.env.npm_package_module,
      },
    ],
  },
  {
    input,
    external,
    plugins: [
      replace(replacement),
      tsPlugin(),
      babel({ babelHelpers: 'bundled' }),
      terser({
        output: {
          comments: /^!/,
        },
      }),
    ],
    output: {
      format: 'umd',
      banner,
      name,
      globals,
      sourcemap: true,
      file: process.env.npm_package_unpkg,
    },
  },
];
