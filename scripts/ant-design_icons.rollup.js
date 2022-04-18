import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';
import replace from '@rollup/plugin-replace';

/** @type { import('rollup').RollupOptions } */
const dev = {
  input: 'node_modules/@ant-design/icons/dist/index.umd.js',
  output: {
    format: 'esm',
    exports: 'named',
    sourcemap: false,
    file: 'dist/libs/@ant-design/icons/icons.js'
  },
  external: ['react'],
  plugins: [
    commonjs(),
  ]
};

/** @type { import('rollup').RollupOptions } */
const prod = {
  input: 'node_modules/@ant-design/icons/dist/index.umd.min.js',
  output: {
    format: 'esm',
    exports: 'named',
    sourcemap: false,
    file: 'dist/libs/@ant-design/icons/icons.min.js'
  },
  external: ['react'],
  plugins: [
    commonjs(),
  ]
};

export default [dev, prod];
