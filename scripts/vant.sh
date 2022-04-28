#!/bin/bash -e
pnpm exec rollup -c ./scripts/vant.rollup.js

cp node_modules/vant/lib/index.css dist/libs/vant/
