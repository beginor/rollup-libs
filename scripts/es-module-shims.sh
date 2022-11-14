#!/bin/bash -e
target="dist/libs/es-module-shims"
if [ ! -d $target ]; then
  mkdir $target
fi

cp -v node_modules/es-module-shims/dist/*.js $target

# pnpm exec esbuild --format=iife --legal-comments=none --charset=utf8 --log-level=error --outfile=dist/libs/es-module-shims/es-module-shims.min.js dist/libs/@angular/compiler/compiler.js
