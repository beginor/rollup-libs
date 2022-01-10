#!/bin/bash -e
target="dist/libs/@ng-bootstrap"
if [ ! -d $target ]; then
  mkdir $target
fi

cp -v node_modules/@ng-bootstrap/ng-bootstrap/fesm2020/ng-bootstrap.mjs $target/ng-bootstrap.js
pnpm exec esbuild --minify --legal-comments=external --charset=utf8 --log-level=error --outfile=$target/ng-bootstrap.min.js $target/ng-bootstrap.js

