#!/bin/bash -e

target="dist/libs/antd-mobile"
if [ -d $target ]; then
  rm -rf $target
fi

pnpm exec esbuild --minify --legal-comments=none --charset=utf8 \
  --log-level=error --outfile=$target/antd-mobile.min.js \
  node_modules/antd-mobile/bundle/antd-mobile.es.js
cp -v node_modules/antd-mobile/bundle/antd-mobile.es.development.js \
  $target/antd-mobile.js

cp -v node_modules/antd-mobile/bundle/*.css $target

pnpm exec esbuild --bundle --minify --format=esm --charset=utf8 --log-level=error \
  --outfile=$target/antd-mobile-global.js \
  node_modules/antd-mobile/es/global/index.js

pnpm exec esbuild --bundle --minify --format=esm --charset=utf8 --log-level=error \
  --outdir=$target/locales \
  node_modules/antd-mobile/es/locales/en-US.js \
  node_modules/antd-mobile/es/locales/zh-CN.js \
  node_modules/antd-mobile/es/locales/zh-HK.js \
  node_modules/antd-mobile/es/locales/zh-TW.js
