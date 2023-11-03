import { buildOrWatch, createOptions } from './esbuild-helper.mjs';

const rxjs = createOptions(
  [
    {
      out: 'rxjs',
      in: './node_modules/rxjs/dist/esm/index.js',
    },
    {
      out: 'rxjs.operators',
      in: './node_modules/rxjs/dist/esm/operators/index.js',
    },
    {
      out: 'rxjs.fetch',
      in: './node_modules/rxjs/dist/esm/fetch/index.js',
    },
    {
      out: 'rxjs.ajax',
      in: './node_modules/rxjs/dist/esm/ajax/index.js',
    },
    {
      out: 'rxjs.webSocket',
      in: './node_modules/rxjs/dist/esm/webSocket/index.js',
    }
  ],
  './dist/libs/rxjs/'
);
rxjs.sourcemap = false;
rxjs.minify = true;
rxjs.legalComments = 'none';
rxjs.chunkNames = '[name]-[hash].js';

if (import.meta.url.endsWith(process.argv[1])) {
  await buildOrWatch(rxjs);
}

