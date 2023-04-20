#!/bin/bash -e
target="dist/libs/xlsx"
if [ ! -d $target ]; then
  mkdir $target
fi

pnpm exec esbuild --minify --legal-comments=none --charset=utf8 --log-level=error \
  --outfile=$target/xlsx.min.js \
  node_modules/xlsx/xlsx.mjs

cp -v node_modules/xlsx/xlsx.mjs $target/xlsx.js

cp -v node_modules/xlsx/xlsx.js $target/xlsx.umd.js

cp -v node_modules/xlsx/xlsxworker.js $target

cp -rv \
  node_modules/xlsx/dist \
  node_modules/xlsx/types \
  $target
