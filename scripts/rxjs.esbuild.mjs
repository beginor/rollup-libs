import { buildOrWatch, createOptions } from './esbuild-helper.mjs';

const rxjs = createOptions(
  [
    './scripts/rxjs.js'
  ],
  './dist/libs/rxjs/rxjs.js'
);
rxjs.sourcemap = false;
rxjs.minify = true;
rxjs.legalComments = 'none';
rxjs.chunkNames = '[name]-[hash].js';
rxjs.external = [];
rxjs.packages = undefined;

if (import.meta.url.endsWith(process.argv[1])) {
  await buildOrWatch(rxjs);
}

