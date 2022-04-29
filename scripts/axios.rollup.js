import commonjs from '@rollup/plugin-commonjs';
import esbuild from 'rollup-plugin-esbuild';

/** @type { import('rollup').RollupOptions } */
const dev = {
  input: './node_modules/axios/dist/axios.js',
  output: {
    format: 'esm',
    exports: 'named',
    sourcemap: false,
    file: 'dist/libs/axios/axios.js'
  },
  external: [],
  plugins: [
    commonjs()
  ]
};

const prod = {
  input: './node_modules/axios/dist/axios.min.js',
  output: {
    format: 'esm',
    exports: 'named',
    sourcemap: false,
    file: 'dist/libs/axios/axios.min.js'
  },
  external: [],
  plugins: [
    commonjs(),
    esbuild({ minify: true, legalComments: 'none' })
  ]
};

export default [dev, prod];
