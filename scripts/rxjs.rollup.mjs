import nodeResolve from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';

/** @type {import('rollup').RollupOptions} */
const options = {
  input: {
    'rxjs': './scripts/rxjs.js',
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
    esbuild({ minify: true, legalComments: 'none' })
  ]
};

export default options;
