#!/bin/bash -e
pnpm exec rollup -c scripts/mapbox-gl.rollup.js
cp -v node_modules/mapbox-gl/dist/mapbox-gl.css dist/libs/mapbox-gl
cp -v node_modules/mapbox-gl/dist/mapbox-gl-unminified.js dist/libs/mapbox-gl/mapbox-gl-umd.js
cp -v node_modules/mapbox-gl/dist/mapbox-gl.js dist/libs/mapbox-gl/mapbox-gl-umd.min.js
