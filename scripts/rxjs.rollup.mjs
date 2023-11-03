import nodeResolve from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';

/** @type {import('rollup').RollupOptions} */
const options = {
  input: {
    'rxjs': './node_modules/rxjs/dist/esm/index.js',
    'rxjs.operators': './node_modules/rxjs/dist/esm/operators/index.js',
    'rxjs.fetch': './node_modules/rxjs/dist/esm/fetch/index.js',
    'rxjs.ajax': './node_modules/rxjs/dist/esm/ajax/index.js',
    'rxjs.webSocket': './node_modules/rxjs/dist/esm/webSocket/index.js'
  },
  output: {
    format: 'esm',
    exports: 'named',
    sourcemap: false,
    dir: 'dist/libs/rxjs',
    chunkFileNames: '[name]-[hash].js',
  },
  external: ['tslib'],
  plugins: [
    nodeResolve({ }),
    esbuild({ minify: false, legalComments: 'none' })
  ]
};

export default options;
