import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';

/** @type { import('rollup').RollupOptions } */
const dev = {
  input: 'scripts/mapbox-gl.dev.js',
  output: {
    format: 'esm',
    // exports: 'auto',
    sourcemap: false,
    file: 'dist/libs/mapbox-gl/mapbox-gl.js'
  },
  plugins: [
    nodeResolve(),
    commonjs()
  ]
};

/** @type { import('rollup').RollupOptions } */
const prod = {
  input: 'scripts/mapbox-gl.prod.js',
  output: {
    format: 'esm',
    // exports: 'auto',
    sourcemap: false,
    file: 'dist/libs/mapbox-gl/mapbox-gl.min.js'
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    esbuild({ minify: true, legalComments: 'none' })
  ]
};

export default [dev, prod];
