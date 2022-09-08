import { esbuild } from './esbuild-helper.mjs';

/** @type {Array<import('esbuild').BuildOptions>} */
const options = [
  {
    entryPoints:[
      './node_modules/@luma.gl/constants/dist/esm/index.js',
    ],
    format: 'esm',
    outfile: 'dist/libs/@luma.gl/constants.js',
    bundle: true,
    minify: true,
    legalComments: 'none',
    treeShaking: false,
    external: [],
  },
  {
    entryPoints:[
      './node_modules/@luma.gl/core/dist/esm/index.js',
    ],
    format: 'esm',
    outfile: 'dist/libs/@luma.gl/core.js',
    bundle: true,
    minify: true,
    legalComments: 'none',
    treeShaking: false,
    external: [
      '@luma.gl/*',
    ],
  },
  {
    entryPoints:[
      './node_modules/@luma.gl/engine/dist/esm/index.js',
    ],
    format: 'esm',
    outfile: 'dist/libs/@luma.gl/engine.js',
    bundle: true,
    minify: true,
    legalComments: 'none',
    treeShaking: false,
    external: [
      '@luma.gl/*',
    ],
  },
  {
    entryPoints:[
      './node_modules/@luma.gl/gltools/dist/esm/index.js',
    ],
    format: 'esm',
    outfile: 'dist/libs/@luma.gl/gltools.js',
    bundle: true,
    minify: true,
    legalComments: 'none',
    treeShaking: false,
    external: [
      '@luma.gl/*',
    ],
  },
  {
    entryPoints:[
      './node_modules/@luma.gl/shadertools/dist/esm/index.js',
    ],
    format: 'esm',
    outfile: 'dist/libs/@luma.gl/shadertools.js',
    bundle: true,
    minify: true,
    legalComments: 'none',
    treeShaking: false,
    external: [
      '@luma.gl/*',
    ],
  },
  {
    entryPoints:[
      './node_modules/@luma.gl/webgl/dist/esm/index.js',
    ],
    format: 'esm',
    outfile: 'dist/libs/@luma.gl/webgl.js',
    bundle: true,
    minify: true,
    legalComments: 'none',
    treeShaking: false,
    external: [
      '@luma.gl/*',
    ],
  },
  {
    entryPoints:[
      './node_modules/@luma.gl/experimental/dist/esm/index.js',
    ],
    format: 'esm',
    outfile: 'dist/libs/@luma.gl/experimental.js',
    bundle: true,
    minify: true,
    legalComments: 'none',
    treeShaking: false,
    external: [
      '@luma.gl/*',
    ],
  },
  {
    entryPoints:[
      './node_modules/@loaders.gl/3d-tiles/dist/esm/index.js',
    ],
    format: 'esm',
    outfile: 'dist/libs/@loaders.gl/3d-tiles.js',
    bundle: true,
    minify: true,
    legalComments: 'none',
    treeShaking: false,
    external: [
      '@luma.gl/*',
      '@loaders.gl/*',
    ],
  },
  {
    entryPoints:[
      './node_modules/@loaders.gl/core/dist/esm/index.js',
    ],
    format: 'esm',
    outfile: 'dist/libs/@loaders.gl/core.js',
    bundle: true,
    minify: true,
    legalComments: 'none',
    treeShaking: false,
    external: [
      '@luma.gl/*',
      '@loaders.gl/*',
    ],
  },
  {
    entryPoints:[
      './node_modules/@loaders.gl/gltf/dist/esm/index.js',
    ],
    format: 'esm',
    outfile: 'dist/libs/@loaders.gl/gltf.js',
    bundle: true,
    minify: true,
    legalComments: 'none',
    treeShaking: false,
    external: [
      '@luma.gl/*',
      '@loaders.gl/*',
    ],
  },
  {
    entryPoints:[
      './node_modules/@loaders.gl/i3s/dist/esm/index.js',
    ],
    format: 'esm',
    outfile: 'dist/libs/@loaders.gl/i3s.js',
    bundle: true,
    minify: true,
    legalComments: 'none',
    treeShaking: false,
    external: [
      '@luma.gl/*',
      '@loaders.gl/*',
    ],
  },
  {
    entryPoints:[
      './node_modules/@loaders.gl/i3s/dist/esm/index.js',
    ],
    format: 'esm',
    outfile: 'dist/libs/@loaders.gl/i3s.js',
    bundle: true,
    minify: true,
    legalComments: 'none',
    treeShaking: false,
    external: [
      '@luma.gl/*',
      '@loaders.gl/*',
    ],
  },
  {
    entryPoints:[
      './node_modules/@loaders.gl/images/dist/esm/index.js',
    ],
    format: 'esm',
    outfile: 'dist/libs/@loaders.gl/images.js',
    bundle: true,
    minify: true,
    legalComments: 'none',
    treeShaking: false,
    external: [
      '@luma.gl/*',
      '@loaders.gl/*',
    ],
  },
  {
    entryPoints:[
      './node_modules/@loaders.gl/loader-utils/dist/esm/index.js',
    ],
    format: 'esm',
    outfile: 'dist/libs/@loaders.gl/loader-utils.js',
    bundle: true,
    minify: true,
    legalComments: 'none',
    treeShaking: false,
    external: [
      '@luma.gl/*',
      '@loaders.gl/*',
    ],
  },
  {
    entryPoints:[
      './node_modules/@loaders.gl/worker-utils/dist/esm/index.js',
    ],
    format: 'esm',
    outfile: 'dist/libs/@loaders.gl/worker-utils.js',
    bundle: true,
    minify: true,
    legalComments: 'none',
    treeShaking: false,
    external: [
      '@luma.gl/*',
      '@loaders.gl/*',
    ],
  },
  {
    entryPoints:[
      './node_modules/@loaders.gl/tiles/dist/esm/index.js',
    ],
    format: 'esm',
    outfile: 'dist/libs/@loaders.gl/tiles.js',
    bundle: true,
    minify: true,
    legalComments: 'none',
    treeShaking: false,
    external: [
      '@luma.gl/*',
      '@loaders.gl/*',
    ],
  },
  {
    entryPoints:[
      './node_modules/@loaders.gl/terrain/dist/esm/index.js',
    ],
    format: 'esm',
    outfile: 'dist/libs/@loaders.gl/terrain.js',
    bundle: true,
    minify: true,
    legalComments: 'none',
    treeShaking: false,
    external: [
      '@luma.gl/*',
      '@loaders.gl/*',
    ],
  },
  {
    entryPoints:[
      './node_modules/@loaders.gl/mvt/dist/esm/index.js',
    ],
    format: 'esm',
    outfile: 'dist/libs/@loaders.gl/mvt.js',
    bundle: true,
    minify: true,
    legalComments: 'none',
    treeShaking: false,
    external: [
      '@luma.gl/*',
      '@loaders.gl/*',
    ],
  },
  {
    entryPoints:[
      './node_modules/@loaders.gl/gis/dist/esm/index.js',
    ],
    format: 'esm',
    outfile: 'dist/libs/@loaders.gl/gis.js',
    bundle: true,
    minify: true,
    legalComments: 'none',
    treeShaking: false,
    external: [
      '@luma.gl/*',
      '@loaders.gl/*',
    ],
  },
  {
    entryPoints:[
      './node_modules/@loaders.gl/draco/dist/esm/index.js',
    ],
    format: 'esm',
    outfile: 'dist/libs/@loaders.gl/draco.js',
    bundle: true,
    minify: true,
    legalComments: 'none',
    treeShaking: false,
    external: [
      '@luma.gl/*',
      '@loaders.gl/*',
    ],
  },
  {
    entryPoints:[
      './node_modules/@loaders.gl/textures/dist/esm/index.js',
    ],
    format: 'esm',
    outfile: 'dist/libs/@loaders.gl/textures.js',
    bundle: true,
    minify: true,
    legalComments: 'none',
    treeShaking: false,
    external: [
      '@luma.gl/*',
      '@loaders.gl/*',
    ],
  },
  {
    entryPoints:[
      './node_modules/@loaders.gl/schema/dist/esm/index.js',
    ],
    format: 'esm',
    outfile: 'dist/libs/@loaders.gl/schema.js',
    bundle: true,
    minify: true,
    legalComments: 'none',
    treeShaking: false,
    external: [
      '@luma.gl/*',
      '@loaders.gl/*',
    ],
  },
  {
    entryPoints:[
      './node_modules/@loaders.gl/math/dist/esm/index.js',
    ],
    format: 'esm',
    outfile: 'dist/libs/@loaders.gl/math.js',
    bundle: true,
    minify: true,
    legalComments: 'none',
    treeShaking: false,
    external: [
      '@luma.gl/*',
      '@loaders.gl/*',
    ],
  },
  {
    entryPoints:[
      './node_modules/@deck.gl/core/dist/esm/index.js',
    ],
    format: 'esm',
    outfile: 'dist/libs/@deck.gl/core.js',
    bundle: true,
    minify: true,
    legalComments: 'none',
    treeShaking: false,
    external: [
      '@luma.gl/*',
      '@loaders.gl/*',
      '@deck.gl/*',
    ],
  },
  {
    entryPoints:[
      './node_modules/@deck.gl/extensions/dist/esm/index.js',
    ],
    format: 'esm',
    outfile: 'dist/libs/@deck.gl/extensions.js',
    bundle: true,
    minify: true,
    legalComments: 'none',
    treeShaking: false,
    external: [
      '@luma.gl/*',
      '@loaders.gl/*',
      '@deck.gl/*',
    ],
  },
  {
    entryPoints:[
      './node_modules/@deck.gl/geo-layers/dist/esm/index.js',
    ],
    format: 'esm',
    outfile: 'dist/libs/@deck.gl/geo-layers.js',
    bundle: true,
    minify: true,
    legalComments: 'none',
    treeShaking: false,
    external: [
      '@luma.gl/*',
      '@loaders.gl/*',
      '@deck.gl/*',
    ],
  },
  {
    entryPoints:[
      './node_modules/@deck.gl/layers/dist/esm/index.js',
    ],
    format: 'esm',
    outfile: 'dist/libs/@deck.gl/layers.js',
    bundle: true,
    minify: true,
    legalComments: 'none',
    treeShaking: false,
    external: [
      '@luma.gl/*',
      '@loaders.gl/*',
      '@deck.gl/*',
    ],
  },
  {
    entryPoints:[
      './node_modules/@deck.gl/mapbox/dist/esm/index.js',
    ],
    format: 'esm',
    outfile: 'dist/libs/@deck.gl/mapbox.js',
    bundle: true,
    minify: true,
    legalComments: 'none',
    treeShaking: false,
    external: [
      '@luma.gl/*',
      '@loaders.gl/*',
      '@deck.gl/*',
    ],
  },
  {
    entryPoints:[
      './node_modules/@deck.gl/mesh-layers/dist/esm/index.js',
    ],
    format: 'esm',
    outfile: 'dist/libs/@deck.gl/mesh-layers.js',
    bundle: true,
    minify: true,
    legalComments: 'none',
    treeShaking: false,
    external: [
      '@luma.gl/*',
      '@loaders.gl/*',
      '@deck.gl/*',
    ],
  },
];

export default options;

if (import.meta.url.endsWith(process.argv[1])) {
  // build options
  for (const option of options) {
    await esbuild(option);
  }
}
