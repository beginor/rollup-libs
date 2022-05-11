#!/bin/bash -e
pnpm exec rollup -c scripts/ng-zorro-antd.rollup.js
cp -rfv node_modules/ng-zorro-antd/*.css dist/libs/ng-zorro-antd
