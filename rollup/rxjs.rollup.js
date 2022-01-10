import nodeResolve from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';

export default [
  createRollupConfig({
    input: './node_modules/rxjs/dist/esm/index.js',
    output: './dist/libs/rxjs/rxjs.js',
  }),
  createRollupConfig({
    input: './node_modules/rxjs/dist/esm/operators/index.js',
    output: './dist/libs/rxjs/rxjs.operators.js',
    external: ['rxjs']
  }),
  createRollupConfig({
    input: './node_modules/rxjs/dist/esm/fetch/index.js',
    output: './dist/libs/rxjs/rxjs.fetch.js',
    external: ['tslib']
  }),
  createRollupConfig({
    input: './node_modules/rxjs/dist/esm/ajax/index.js',
    output: './dist/libs/rxjs/rxjs.ajax.js',
    external: ['tslib']
  }),
  createRollupConfig({
    input: './node_modules/rxjs/dist/esm/webSocket/index.js',
    output: './dist/libs/rxjs/rxjs.webSocket.js',
    external: ['tslib']
  })
]

function createRollupConfig({ input, output, external = [] }) {
  return {
    input: input,
    output: {
      file: output,
      format: 'esm',
      sourcemap: false // !production
    },
    external: external,
    plugins: [
      nodeResolve({ }),
      esbuild({ minify: true, legalComments: 'none' })
    ]
  };
}
