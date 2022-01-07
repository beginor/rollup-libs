import commonjs from '@rollup/plugin-commonjs';

export default [
  {
    input: 'node_modules/mapbox-gl/dist/mapbox-gl-unminified.js',
    output: {
      format: 'esm',
      // exports: 'named',
      sourcemap: false,
      file: 'dist/libs/mapbox-gl/mapbox-gl.js'
    },
    plugins: [
      commonjs({})
    ]
  },
  {
    input: 'node_modules/mapbox-gl/dist/mapbox-gl.js',
    output: {
      format: 'esm',
      exports: 'named',
      // sourcemap: false,
      file: 'dist/libs/mapbox-gl/mapbox-gl.min.js'
    },
    plugins: [
      commonjs({})
    ]
  }
]
