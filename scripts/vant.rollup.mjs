import nodeResolve from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';

/** @type { import('rollup').RollupOptions } */
const dev = {
  input: './node_modules/vant/lib/vant.es.js',
  output: {
    format: 'esm',
    exports: 'named',
    sourcemap: false,
    file: './dist/libs/vant/vant.js'
  },
  external: ['vue', '@popperjs/core'],
  plugins: [
    nodeResolve()
  ]
};

const prod = {
  input: './node_modules/vant/lib/vant.es.js',
  output: {
    format: 'esm',
    exports: 'named',
    sourcemap: false,
    file: './dist/libs/vant/vant.min.js'
  },
  external: ['vue', '@popperjs/core'],
  plugins: [
    nodeResolve(),
    esbuild({ minify: true, legalComments: 'none' })
  ]
};

export default [dev, prod]
