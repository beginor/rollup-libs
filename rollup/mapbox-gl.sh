#!/bin/bash -e
pnpm exec rollup -c rollup/rollup.mapbox-gl.js
cp -v node_modules/mapbox-gl/dist/mapbox-gl.css dist/libs/mapbox-gl
