import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from "@rollup/plugin-replace";
import esbuild from 'rollup-plugin-esbuild';

export default [
  {
    input: './node_modules/object-assign/index.js',
    output: {
      format: 'esm',
      exports: 'named',
      sourcemap: false,
      file: 'dist/libs/react/object-assign.js'
    },
    external: [],
    plugins: [
      nodeResolve({}),
      commonjs({}),
      esbuild({ minify: true, legalComments: 'none' })
    ]
  },
  {
    input: 'node_modules/scheduler/cjs/scheduler.development.js',
    output: {
      format: 'esm',
      exports: 'named',
      sourcemap: false,
      file: 'dist/libs/react/scheduler.js'
    },
    external: [],
    plugins: [
      nodeResolve(),
      commonjs(),
      replace({
        preventAssignment: false,
        values: {
          "process.env.NODE_ENV": '"development"'
        }
      })
    ]
  },
  {
    input: 'node_modules/scheduler/cjs/scheduler.production.min.js',
    output: {
      format: 'esm',
      exports: 'named',
      sourcemap: false,
      file: 'dist/libs/react/scheduler.min.js'
    },
    external: [],
    plugins: [
      nodeResolve(),
      commonjs(),
      replace({
        preventAssignment: false,
        values: {
          "process.env.NODE_ENV": '"production"'
        }
      })
    ]
  },
  {
    input: './scripts/react.dev.js',
    output: {
      format: 'esm',
      exports: 'named',
      sourcemap: false,
      file: 'dist/libs/react/react.js'
    },
    external: ['react-is','object-assign'],
    plugins: [
      nodeResolve(),
      commonjs(),
      replace({
        preventAssignment: false,
        values: {
          "process.env.NODE_ENV": '"development"'
        }
      })
    ]
  },
  {
    input: './scripts/react.prod.js',
    output: {
      format: 'esm',
      exports: 'named',
      sourcemap: false,
      file: 'dist/libs/react/react.min.js'
    },
    external: ['react-is','object-assign'],
    plugins: [
      nodeResolve(),
      commonjs(),
      replace({
        preventAssignment: false,
        values: {
          "process.env.NODE_ENV": '"production"'
        }
      })
    ]
  },
  {
    input: './scripts/react-jsx-runtime.dev.js',
    output: {
      format: 'esm',
      exports: 'named',
      sourcemap: false,
      file: 'dist/libs/react/react-jsx-runtime.js'
    },
    external: ['react', 'react-is', 'object-assign'],
    plugins: [
      nodeResolve(),
      commonjs(),
      replace({
        preventAssignment: true,
        values: {
          "process.env.NODE_ENV": '"development"'
        }
      })
    ]
  },
  {
    input: './scripts/react-jsx-runtime.prod.js',
    output: {
      format: 'esm',
      exports: 'named',
      sourcemap: false,
      file: 'dist/libs/react/react-jsx-runtime.min.js'
    },
    external: ['react', 'react-is', 'object-assign'],
    plugins: [
      nodeResolve(),
      commonjs(),
      replace({
        preventAssignment: true,
        values: {
          "process.env.NODE_ENV": '"production"'
        }
      })
    ]
  },
  {
    input: 'node_modules/react-is/cjs/react-is.development.js',
    output: {
      format: 'esm',
      exports: 'named',
      sourcemap: false,
      file: 'dist/libs/react/react-is.js'
    },
    external: [],
    plugins: [
      commonjs(),
      replace({
        preventAssignment: false,
        values: {
          "process.env.NODE_ENV": '"development"'
        }
      })
    ]
  },
  {
    input: 'node_modules/react-is/cjs/react-is.production.min.js',
    output: {
      format: 'esm',
      exports: 'named',
      sourcemap: false,
      file: 'dist/libs/react/react-is.min.js'
    },
    external: [],
    plugins: [
      commonjs(),
      replace({
        preventAssignment: false,
        values: {
          "process.env.NODE_ENV": '"production"'
        }
      })
    ]
  }
]
