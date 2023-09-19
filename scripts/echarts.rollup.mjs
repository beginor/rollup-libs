import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from "@rollup/plugin-replace";
import esbuild from 'rollup-plugin-esbuild';

const external = ['echarts'];

/** @type {import('rollup').RollupOptions} */
const dev = {
  input: {
    'echarts': './node_modules/echarts/index.js',
    'echarts-wordcloud': './node_modules/echarts-wordcloud/index.js',
    'echarts-gl': './node_modules/echarts-gl/index.js'
  },
  output: {
    format: 'esm',
    exports: 'named',
    sourcemap: false,
    dir: 'dist/libs/echarts-bucket',
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

/** @type {import('rollup').RollupOptions} */
const prod = {
  input: {
    'echarts.min': './node_modules/echarts/index.js',
    'echarts-wordcloud.min': './node_modules/echarts-wordcloud/index.js',
    'echarts-gl.min': './node_modules/echarts-gl/index.js'
  },
  output: {
    format: 'esm',
    exports: 'named',
    sourcemap: false,
    dir: 'dist/libs/echarts-bucket',
    chunkFileNames: '[name]-[hash].js',
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
}

export default [prod];
