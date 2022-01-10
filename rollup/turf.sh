#!/bin/bash -e
pnpm exec rollup -c rollup/rollup.turf.js
rm -v dist/libs/@turf/turf/turf.tmp.js
