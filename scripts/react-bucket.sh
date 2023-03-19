#!/bin/bash -e
target="dist/libs/react-bucket"

if [ -d $target ]; then
  rm -rf $target
fi

pnpm exec rollup -c scripts/react-bucket.rollup.mjs

cp -v node_modules/antd/dist/reset.css $target/antd.css
