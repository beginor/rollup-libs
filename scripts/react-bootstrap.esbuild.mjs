import { esbuild } from './esbuild-helper.mjs';

/** @type {Array<import('esbuild').BuildOptions>} */
const options = [
  {
    entryPoints: [
      './node_modules/react-bootstrap/esm/index.js',
    ],
    format: 'esm',
    outfile: './dist/libs/react-bootstrap/react-bootstrap.js',
    bundle: true,
    minify: false,
    legalComments: 'none',
    treeShaking: false,
    external: [
      'react',
      'react/jsx-runtime',
      'react-is',
      'object-assign',
      'react-dom',
    ],
  },
  {
    entryPoints: [
      './node_modules/react-bootstrap/esm/index.js',
    ],
    format: 'esm',
    outfile: './dist/libs/react-bootstrap/react-bootstrap.js',
    bundle: true,
    minify: false,
    legalComments: 'none',
    treeShaking: false,
    external: [
      'react',
      'react/jsx-runtime',
      'react-is',
      'object-assign',
      'react-dom',
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
