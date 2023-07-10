import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from "@rollup/plugin-replace";
import esbuild from 'rollup-plugin-esbuild';

const external = [
  'react', 'react/jsx-runtime', 'react-dom',
];

/** @type {import('rollup').RollupOptions} */
const dev = {
  input: {
    'react': './scripts/react.dev.js',
    'react-jsx-runtime': './scripts/react-jsx-runtime.dev.js',
    'react-dom': './scripts/react-dom.dev.js',
    'react-dom-client': 'node_modules/react-dom/client.js',
    'react-router-dom': './scripts/react-router-dom.js',
    'react-bootstrap': 'node_modules/react-bootstrap/esm/index.js',
    'antd': './node_modules/antd/es/index.js',
  },
  output: {
    format: 'esm',
    exports: 'named',
    sourcemap: false,
    dir: 'dist/libs/react-bucket',
    chunkFileNames: '[name]-[hash].js',
  },
  external,
  plugins: [
    nodeResolve(),
    commonjs(),
    replace({
      preventAssignment: false,
      values: {
        "process.env.NODE_ENV": '"development"'
      }
    }),
  ]
};

const prod = {
  input: {
    'react.min': './scripts/react.prod.js',
    'react-jsx-runtime.min': './scripts/react-jsx-runtime.prod.js',
    'react-dom.min': './scripts/react-dom.prod.js',
    'react-dom-client.min': 'node_modules/react-dom/client.js',
    'react-router-dom.min': './scripts/react-router-dom.js',
    'react-bootstrap.min': 'node_modules/react-bootstrap/esm/index.js',
    'antd.min': './node_modules/antd/es/index.js',
  },
  output: {
    format: 'esm',
    exports: 'named',
    sourcemap: false,
    dir: 'dist/libs/react-bucket',
    chunkFileNames: '[name]-[hash].min.js',
  },
  external,
  plugins: [
    nodeResolve(),
    commonjs(),
    replace({
      preventAssignment: false,
      values: {
        'process.env.NODE_ENV': '"production"'
      }
    }),
    esbuild({ minify: true, legalComments: 'none' })
  ]
};

const antdLocale = {
  input: {
    'zh_CN': './node_modules/antd/es/locale/zh_CN.js',
    'en_US': './node_modules/antd/es/locale/en_US.js',
  },
  output: {
    format: 'esm',
    exports: 'named',
    sourcemap: false,
    dir: 'dist/libs/react-bucket/antd-locale',
    chunkFileNames: '[name]-[hash].js',
  },
  external,
  plugins: [
    nodeResolve(),
    commonjs(),
    replace({
      preventAssignment: false,
      values: {
        "process.env.NODE_ENV": '"development"'
      }
    }),
  ],
};

export default [dev, prod, antdLocale];
