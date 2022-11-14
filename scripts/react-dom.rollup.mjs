import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from "@rollup/plugin-replace";
import esbuild from 'rollup-plugin-esbuild';

export default [
  {
    input: './scripts/react-dom.dev.js',
    output: {
      format: 'esm',
      exports: 'named',
      sourcemap: false,
      file: 'dist/libs/react-dom/react-dom.js'
    },
    external: ['react', 'react-is', 'object-assign', 'scheduler', 'scheduler/tracing'],
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
    input: './scripts/react-dom.prod.js',
    output: {
      format: 'esm',
      exports: 'named',
      sourcemap: false,
      file: 'dist/libs/react-dom/react-dom.min.js'
    },
    external: ['react', 'react-is', 'object-assign', 'scheduler', 'scheduler/tracing'],
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
    input: 'node_modules/react-dom/client.js',
    output: {
      format: 'esm',
      exports: 'named',
      sourcemap: false,
      file: 'dist/libs/react-dom/client.js'
    },
    external: ['react-dom'],
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
    input: 'node_modules/react-dom/client.js',
    output: {
      format: 'esm',
      exports: 'named',
      sourcemap: false,
      file: 'dist/libs/react-dom/client.min.js'
    },
    external: ['react-dom'],
    plugins: [
      commonjs(),
      replace({
        preventAssignment: false,
        values: {
          "process.env.NODE_ENV": '"production"'
        }
      }),
      esbuild({ minify: true, legalComments: 'none' })
    ]
  }
]
