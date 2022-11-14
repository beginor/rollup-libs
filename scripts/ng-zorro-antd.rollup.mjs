import { nodeResolve } from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';

/** @type { import('rollup').RollupOptions } */
const dev = {
  input: './scripts/ng-zorro-antd.js',
  output: {
    format: 'esm',
    exports: 'named',
    sourcemap: false,
    file: 'dist/libs/ng-zorro-antd/ng-zorro-antd.js'
  },
  external: [
    "@angular/core",
    "@angular/compiler",
    "@angular/common",
    "@angular/common/http",
    "@angular/forms",
    "@angular/animations",
    "@angular/animations/browser",
    "@angular/platform-browser",
    "@angular/platform-browser/animations",
    "@angular/platform-browser-dynamic",
    "@angular/router",
    "@angular/localize",
    "tslib",
    /rxjs/
  ],
  plugins: [
    nodeResolve({})
  ]
};

/** @type { import('rollup').RollupOptions } */
const prod = {
  input: './scripts/ng-zorro-antd.js',
  output: {
    format: 'esm',
    exports: 'named',
    sourcemap: false,
    file: 'dist/libs/ng-zorro-antd/ng-zorro-antd.min.js'
  },
  external: [
    "@angular/core",
    "@angular/compiler",
    "@angular/common",
    "@angular/common/http",
    "@angular/forms",
    "@angular/animations",
    "@angular/animations/browser",
    "@angular/platform-browser",
    "@angular/platform-browser/animations",
    "@angular/platform-browser-dynamic",
    "@angular/router",
    "@angular/localize",
    "tslib",
    /rxjs/
  ],
  plugins: [
    nodeResolve({}),
    esbuild({ minify: true, legalComments: 'none' })
  ]
};
export default [dev, prod]
