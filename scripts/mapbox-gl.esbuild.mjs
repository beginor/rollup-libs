import { esbuild } from './esbuild-helper.mjs';

/** @type {import('esbuild').BuildOptions} */
const dev = {
  entryPoints: [
    './scripts/mapbox-gl.dev.js',
  ],
  format: 'esm',
  outfile: './dist/libs/mapbox-gl/mapbox-gl.js',
  bundle: true,
  minify: false,
  legalComments: 'none',
  treeShaking: false,
};

/** @type {import('esbuild').BuildOptions} */
const prod = {
  entryPoints: [
    './scripts/mapbox-gl.prod.js',
  ],
  format: 'esm',
  outfile: './dist/libs/mapbox-gl/mapbox-gl.min.js',
  bundle: true,
  minify: true,
  legalComments: 'none',
  treeShaking: false,
};

export { dev, prod };

if (import.meta.url.endsWith(process.argv[1])) {
  // build dev
  await esbuild(dev);
  await esbuild(prod);
}
