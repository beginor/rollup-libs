import { esbuild } from './esbuild-helper.mjs';

/** @type {Array<import('esbuild').BuildOptions>} */
const options = [
  {
    entryPoints: [
      './node_modules/object-assign/index.js',
    ],
    format: 'esm',
    outfile: './dist/libs/react/object-assign.js',
    bundle: true,
    minify: true,
    legalComments: 'none',
    treeShaking: false,
  },
  {
    entryPoints: [
      './node_modules/scheduler/cjs/scheduler.development.js',
    ],
    format: 'esm',
    outfile: './dist/libs/react/scheduler.js',
    bundle: true,
    minify: false,
    legalComments: 'none',
    treeShaking: false,
    define: {
      'process.env.NODE_ENV': '"development"'
    }
  },
  {
    entryPoints: [
      './node_modules/scheduler/cjs/scheduler.production.min.js',
    ],
    format: 'esm',
    outfile: './dist/libs/react/scheduler.min.js',
    bundle: true,
    minify: false,
    legalComments: 'none',
    treeShaking: false,
    define: {
      'process.env.NODE_ENV': '"production"'
    }
  },
  {
    entryPoints: [
      './node_modules/react-is/cjs/react-is.development.js',
    ],
    format: 'esm',
    outfile: './dist/libs/react/react-is.js',
    bundle: true,
    minify: false,
    legalComments: 'none',
    treeShaking: false,
    define: {
      'process.env.NODE_ENV': '"development"'
    }
  },
  {
    entryPoints: [
      './node_modules/react-is/cjs/react-is.production.min.js',
    ],
    format: 'esm',
    outfile: './dist/libs/react/react-is.min.js',
    bundle: true,
    minify: false,
    legalComments: 'none',
    treeShaking: false,
    define: {
      'process.env.NODE_ENV': '"production"'
    }
  },
  {
    entryPoints: [
      './scripts/react.dev.js',
    ],
    format: 'esm',
    outfile: './dist/libs/react/react.js',
    bundle: true,
    minify: false,
    legalComments: 'none',
    treeShaking: false,
    define: {
      'process.env.NODE_ENV': '"development"',
    },
    external: [
      'react-is',
      'object-assign',
    ],
  },
  {
    entryPoints: [
      './scripts/react.prod.js',
    ],
    format: 'esm',
    outfile: './dist/libs/react/react.min.js',
    bundle: true,
    minify: false,
    legalComments: 'none',
    treeShaking: false,
    define: {
      'process.env.NODE_ENV': '"production"'
    },
    external: [
      'react-is',
      'object-assign',
    ],
  },
  {
    entryPoints: [
      './scripts/react-jsx-runtime.dev.js',
    ],
    format: 'esm',
    platform: 'browser',
    outfile: './dist/libs/react/react-jsx-runtime.js',
    bundle: true,
    minify: false,
    legalComments: 'none',
    treeShaking: false,
    define: {
      'process.env.NODE_ENV': '"development"',
    },
    external: [
      'react-is',
      'object-assign',
      'react',
    ],
  },
  {
    entryPoints: [
      './scripts/react-jsx-runtime.prod.js',
    ],
    format: 'esm',
    outfile: './dist/libs/react/react-jsx-runtime.min.js',
    bundle: true,
    minify: true,
    minifySyntax: true,
    legalComments: 'none',
    treeShaking: false,
    define: {
      'process.env.NODE_ENV': '"production"'
    },
    external: [
      'react-is',
      'object-assign',
      'react',
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
