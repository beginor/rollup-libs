import commonjs from '@rollup/plugin-commonjs';
import esbuild from 'rollup-plugin-esbuild';

/** @type { import('rollup').RollupOptions } */
const tmp = {
  input: 'node_modules/@turf/turf/turf.min.js',
  output: {
    format: 'esm',
    sourcemap: false,
    exports: 'named',
    file: 'dist/libs/@turf/turf/turf.tmp.js'
  },
  plugins: [
    commonjs({})
  ]
}
/** @type { import('rollup').RollupOptions } */
const turf = {
  input: 'scripts/turf.js',
  output: {
    format: 'esm',
    sourcemap: false,
    exports: 'named',
    file: 'dist/libs/@turf/turf/turf.js'
  },
  plugins: [
    esbuild({ legalComments: 'none', minify: true })
  ]
};
export default [tmp, turf];
