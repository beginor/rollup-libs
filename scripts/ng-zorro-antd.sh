#!/bin/bash -e
pnpm exec rollup -c scripts/ng-zorro-antd.rollup.mjs
cp -rfv node_modules/ng-zorro-antd/*.css dist/libs/ng-zorro-antd
