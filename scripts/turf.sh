#!/bin/bash -e
pnpm exec rollup -c rollup/turf.rollup.js
rm -v dist/libs/@turf/turf/turf.tmp.js
