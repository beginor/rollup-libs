import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import esbuild from 'rollup-plugin-esbuild';

// `pnpm run build` -> `production` is true
// `pnpm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

/** @type { import('rollup').RollupOptions } */
const dev = {
  input: './node_modules/ant-design-vue/es/index.js',
  output: {
    format: 'esm',
    exports: 'named',
    sourcemap: false,
    file: 'dist/libs/ant-design-vue/antd.js'
  },
  external: ['vue'],
  plugins: [
    nodeResolve(),
    commonjs(),
    replace({
      preventAssignment: false,
      values: {
        'process.env.NODE_ENV': production ? '"development"' : '"production"'
      }
    })
  ]
};

/** @type { import('rollup').RollupOptions } */
const prod = {
  input: './node_modules/ant-design-vue/es/index.js',
  output: {
    format: 'esm',
    exports: 'named',
    sourcemap: false,
    file: 'dist/libs/ant-design-vue/antd.min.js'
  },
  external: ['vue'],
  plugins: [
    nodeResolve(),
    commonjs(),
    replace({
      preventAssignment: false,
      values: {
        'process.env.NODE_ENV': production ? '"development"' : '"production"'
      }
    }),
    esbuild({ minify: true, legalComments: 'none' })
  ]
};

export default [dev, prod]
