#!/bin/bash -e

## zone.js
target="dist/libs/zone.js"
if [ ! -d $target ]; then
  mkdir $target
fi
cp -v node_modules/zone.js/dist/zone.min.js $target

# @angular
rm -rf dist/libs/@angular && mkdir dist/libs/@angular
mkdir dist/libs/@angular/core
cp -rv node_modules/@angular/core/fesm2020/core.mjs dist/libs/@angular/core/core.js
pnpm exec esbuild --minify --legal-comments=none --charset=utf8 --log-level=error --outfile=dist/libs/@angular/core/core.min.js dist/libs/@angular/core/core.js
mkdir dist/libs/@angular/compiler
cp -v node_modules/@angular/compiler/fesm2020/compiler.mjs dist/libs/@angular/compiler/compiler.js
pnpm exec esbuild --minify --legal-comments=none --charset=utf8 --log-level=error --outfile=dist/libs/@angular/compiler/compiler.min.js dist/libs/@angular/compiler/compiler.js
mkdir dist/libs/@angular/common
cp -v node_modules/@angular/common/fesm2020/common.mjs dist/libs/@angular/common/common.js
pnpm exec esbuild --minify --legal-comments=none --charset=utf8 --log-level=error --outfile=dist/libs/@angular/common/common.min.js dist/libs/@angular/common/common.js
cp -v node_modules/@angular/common/fesm2020/http.mjs dist/libs/@angular/common/http.js
pnpm exec esbuild --minify --legal-comments=none --charset=utf8 --log-level=error --outfile=dist/libs/@angular/common/http.min.js dist/libs/@angular/common/http.js
mkdir dist/libs/@angular/forms
cp -v node_modules/@angular/forms/fesm2020/forms.mjs dist/libs/@angular/forms/forms.js
pnpm exec esbuild --minify --legal-comments=none --charset=utf8 --log-level=error --outfile=dist/libs/@angular/forms/forms.min.js dist/libs/@angular/forms/forms.js
mkdir dist/libs/@angular/animations
cp -v node_modules/@angular/animations/fesm2020/animations.mjs dist/libs/@angular/animations/animations.js
pnpm exec esbuild --minify --legal-comments=none --charset=utf8 --log-level=error --outfile=dist/libs/@angular/animations/animations.min.js dist/libs/@angular/animations/animations.js
cp -v node_modules/@angular/animations/fesm2020/browser.mjs dist/libs/@angular/animations/browser.js
pnpm exec esbuild --minify --legal-comments=none --charset=utf8 --log-level=error --outfile=dist/libs/@angular/animations/browser.min.js dist/libs/@angular/animations/browser.js
mkdir dist/libs/@angular/platform-browser
cp -v node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs dist/libs/@angular/platform-browser/platform-browser.js
pnpm exec esbuild --minify --legal-comments=none --charset=utf8 --log-level=error --outfile="dist/libs/@angular/platform-browser/platform-browser.min.js" dist/libs/@angular/platform-browser/platform-browser.js
cp -v node_modules/@angular/platform-browser/fesm2020/animations.mjs dist/libs/@angular/platform-browser/animations.js
pnpm exec esbuild --minify --legal-comments=none --charset=utf8 --log-level=error --outfile="dist/libs/@angular/platform-browser/animations.min.js" dist/libs/@angular/platform-browser/animations.js
mkdir dist/libs/@angular/platform-browser-dynamic
cp -v node_modules/@angular/platform-browser-dynamic/fesm2020/platform-browser-dynamic.mjs dist/libs/@angular/platform-browser-dynamic/platform-browser-dynamic.js
pnpm exec esbuild --minify --legal-comments=none --charset=utf8 --log-level=error --outfile="dist/libs/@angular/platform-browser-dynamic/platform-browser-dynamic.min.js" dist/libs/@angular/platform-browser-dynamic/platform-browser-dynamic.js
mkdir dist/libs/@angular/router
cp -v node_modules/@angular/router/fesm2020/router.mjs dist/libs/@angular/router/router.js
pnpm exec esbuild --minify --legal-comments=none --charset=utf8 --log-level=error --outfile=dist/libs/@angular/router/router.min.js dist/libs/@angular/router/router.js
mkdir dist/libs/@angular/localize
cp -v node_modules/@angular/localize/fesm2020/localize.mjs dist/libs/@angular/localize/localize.js
pnpm exec esbuild --minify --legal-comments=none --charset=utf8 --log-level=error --outfile=dist/libs/@angular/localize/localize.min.js dist/libs/@angular/localize/localize.js
cp -v node_modules/@angular/localize/fesm2020/init.mjs dist/libs/@angular/localize/init.js
pnpm exec esbuild --minify --legal-comments=none --charset=utf8 --log-level=error --outfile=dist/libs/@angular/localize/init.min.js dist/libs/@angular/localize/init.js
mkdir dist/libs/@angular/common/locales
cp -v node_modules/@angular/common/locales/zh-Hans.mjs dist/libs/@angular/common/locales/zh-Hans.js
cp -v node_modules/@angular/common/locales/zh-Hant.mjs dist/libs/@angular/common/locales/zh-Hant.js
mkdir dist/libs/@angular/common/locales/extra
cp -v node_modules/@angular/common/locales/extra/zh-Hans.mjs dist/libs/@angular/common/locales/extra/zh-Hans.js
cp -v node_modules/@angular/common/locales/extra/zh-Hant.mjs dist/libs/@angular/common/locales/extra/zh-Hant.js
